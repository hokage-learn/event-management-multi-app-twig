// Main Application

// Global app instance
const App = {
  /**
   * Initialize the application
   */
  init() {
    console.log('GetTix: Initializing...');
    
    // Register routes
    this.registerRoutes();
    
    // Initialize router
    Router.init();
    
    console.log('GetTix: Ready!');
  },

  /**
   * Register all application routes
   */
  registerRoutes() {
    // Public routes
    Router.register('/', () => this.renderPage(Templates.renderLandingPage()));
    Router.register('/login', () => this.renderPage(Templates.renderLoginPage(), this.initLoginForm));
    Router.register('/signup', () => this.renderPage(Templates.renderSignupPage(), this.initSignupForm));
    
    // Protected routes
    Router.register('/dashboard', () => this.renderPage(Templates.renderDashboardPage()), true);
    Router.register('/tickets', () => this.renderPage(Templates.renderTicketsPage(), this.initTicketsPage), true);
  },

  /**
   * Render page content
   * @param {string} html - Page HTML
   * @param {function} callback - Optional callback after rendering
   */
  renderPage(html, callback) {
    const app = document.getElementById('app');
    app.innerHTML = html;
    
    // Execute callback if provided
    if (callback && typeof callback === 'function') {
      callback();
    }
  },

  /**
   * Initialize login form
   */
  initLoginForm() {
    const form = document.getElementById('loginForm');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
      
      // Clear previous errors
      document.getElementById('emailError').textContent = '';
      document.getElementById('passwordError').textContent = '';
      
      // Validate
      if (!email) {
        document.getElementById('emailError').textContent = 'Email is required';
        return;
      }
      if (!password) {
        document.getElementById('passwordError').textContent = 'Password is required';
        return;
      }
      
      // Attempt login
      const result = await Auth.login(email, password);
      if (result.success) {
        Router.navigate('/dashboard');
      }
    });
  },

  /**
   * Initialize signup form
   */
  initSignupForm() {
    const form = document.getElementById('signupForm');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const name = document.getElementById('signupName').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;
      const confirmPassword = document.getElementById('signupConfirmPassword').value;
      
      // Clear previous errors
      document.getElementById('nameError').textContent = '';
      document.getElementById('signupEmailError').textContent = '';
      document.getElementById('signupPasswordError').textContent = '';
      document.getElementById('confirmPasswordError').textContent = '';
      
      // Validate
      let hasError = false;
      
      if (!name || name.length < 2) {
        document.getElementById('nameError').textContent = 'Name must be at least 2 characters';
        hasError = true;
      }
      if (!email) {
        document.getElementById('signupEmailError').textContent = 'Email is required';
        hasError = true;
      }
      if (!password || password.length < 6) {
        document.getElementById('signupPasswordError').textContent = 'Password must be at least 6 characters';
        hasError = true;
      }
      if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        hasError = true;
      }
      
      if (hasError) return;
      
      // Attempt signup
      const result = await Auth.signup(name, email, password);
      if (result.success) {
        Router.navigate('/dashboard');
      }
    });
  },

  /**
   * Initialize tickets page
   */
  initTicketsPage() {
    // Page is already rendered with inline onclick handlers
    // This is where we could add additional setup if needed
  }
};

// Global helper functions for ticket management
function openCreateModal() {
  const container = document.getElementById('modalContainer');
  if (container) {
    container.innerHTML = Templates.renderTicketModal();
  }
}

function editTicket(id) {
  const ticket = Tickets.getTicketById(id);
  if (ticket) {
    const container = document.getElementById('modalContainer');
    if (container) {
      container.innerHTML = Templates.renderTicketModal(ticket);
    }
  }
}

function closeModal(event) {
  if (event && event.target !== event.currentTarget) return;
  const container = document.getElementById('modalContainer');
  if (container) {
    container.innerHTML = '';
  }
}

function saveTicket(id) {
  const title = document.getElementById('ticketTitle').value;
  const description = document.getElementById('ticketDescription').value;
  const status = document.getElementById('ticketStatus').value;
  const priority = document.getElementById('ticketPriority').value;
  
  if (!title) {
    Toast.error('Title is required');
    return;
  }
  
  const ticketData = { title, description, status, priority };
  
  if (id) {
    // Update existing ticket
    Tickets.updateTicket(id, ticketData);
  } else {
    // Create new ticket
    Tickets.createTicket(ticketData);
  }
  
  closeModal();
  Router.navigate('/tickets'); // Refresh page
}

function deleteTicketConfirm(id) {
  if (confirm('Are you sure you want to delete this ticket?')) {
    Tickets.deleteTicket(id);
    Router.navigate('/tickets'); // Refresh page
  }
}

function handleLogout() {
  Auth.logout();
  Router.navigate('/');
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}

