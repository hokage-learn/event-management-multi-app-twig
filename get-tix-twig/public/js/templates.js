// Template System - Pure HTML templates

const Templates = {
  /**
   * Render navbar
   * @returns {string}
   */
  renderNavbar() {
    const isAuth = Auth.isAuthenticated();
    const currentRoute = Router.getCurrentRoute();
    
    return `
      <nav class="navbar">
        <div class="container navbar-container">
          <a href="#/" class="navbar-brand">
            <div class="navbar-logo">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
            </div>
            <span>GetTix</span>
          </a>
          
          ${isAuth ? `
            <ul class="navbar-menu">
              <li><a href="#/dashboard" class="${currentRoute === '/dashboard' ? 'active' : ''}">Dashboard</a></li>
              <li><a href="#/tickets" class="${currentRoute === '/tickets' ? 'active' : ''}">Tickets</a></li>
              <li><button onclick="handleLogout()" class="btn btn-outline btn-sm">Logout</button></li>
            </ul>
          ` : `
            <ul class="navbar-menu">
              <li><a href="#/" class="${currentRoute === '/' ? 'active' : ''}">Home</a></li>
              <li><a href="#/login" class="btn btn-outline btn-sm">Login</a></li>
              <li><a href="#/signup" class="btn btn-primary btn-sm">Get Started</a></li>
            </ul>
          `}
        </div>
      </nav>
    `;
  },

  /**
   * Render footer
   * @returns {string}
   */
  renderFooter() {
    return `
      <footer class="bg-gray-900 text-white py-8">
        <div class="container text-center">
          <p class="text-sm text-gray-400">&copy; ${new Date().getFullYear()} GetTix. All rights reserved.</p>
          <p class="text-xs text-gray-500 mt-2">Built with Vanilla JavaScript</p>
        </div>
      </footer>
    `;
  },

  /**
   * Render landing page
   * @returns {string}
   */
  renderLandingPage() {
    return `
      <div class="page">
        ${this.renderNavbar()}
        
        <!-- Hero Section -->
        <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br" style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);">
          <div class="container text-center" style="padding-top: 80px; padding-bottom: 80px;">
            <h1 class="text-5xl font-bold text-white mb-4">Streamline Your Ticket Management</h1>
            <p class="text-xl text-white mb-8" style="opacity: 0.9;">Efficient ticket tracking and management system for modern teams</p>
            <a href="#/signup" class="btn btn-lg" style="background-color: white; color: var(--color-primary);">Get Started</a>
          </div>
        </section>

        <!-- About Section -->
        <section class="py-20 bg-white">
          <div class="container">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div class="card">
                  <h3 class="font-bold text-xl mb-4">Dashboard Preview</h3>
                  <div class="bg-gray-100 p-4 rounded-lg">
                    <div class="grid grid-cols-2 gap-2">
                      <div class="bg-white p-3 rounded shadow-sm">
                        <div class="text-xs text-gray-600">Total</div>
                        <div class="text-2xl font-bold text-primary">12</div>
                      </div>
                      <div class="bg-white p-3 rounded shadow-sm">
                        <div class="text-xs text-gray-600">Open</div>
                        <div class="text-2xl font-bold text-accent">8</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 class="text-3xl font-bold mb-4">Manage Tickets Like Never Before</h2>
                <p class="text-gray-600 mb-6">GetTix is a powerful ticket management system designed to streamline your workflow. Create, track, and resolve tickets with ease.</p>
                <ul class="space-y-3">
                  <li class="flex items-center gap-3">
                    <span class="text-primary">✓</span>
                    <span>Simple & Intuitive Interface</span>
                  </li>
                  <li class="flex items-center gap-3">
                    <span class="text-primary">✓</span>
                    <span>Real-time Updates</span>
                  </li>
                  <li class="flex items-center gap-3">
                    <span class="text-primary">✓</span>
                    <span>Powerful Analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        ${this.renderFooter()}
      </div>
    `;
  },

  /**
   * Render login page
   * @returns {string}
   */
  renderLoginPage() {
    return `
      <div class="page">
        ${this.renderNavbar()}
        
        <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
          <div class="card" style="max-width: 450px; width: 100%;">
            <div class="card-header">
              <h2 class="card-title text-center">Sign In</h2>
              <p class="text-center text-gray-600 text-sm">Welcome back! Please sign in to continue.</p>
            </div>
            
            <form id="loginForm" class="card-body">
              <div class="form-group">
                <label class="form-label" for="loginEmail">Email</label>
                <input type="email" id="loginEmail" class="form-input" placeholder="Enter your email" required>
                <span class="form-error" id="emailError"></span>
              </div>
              
              <div class="form-group">
                <label class="form-label" for="loginPassword">Password</label>
                <input type="password" id="loginPassword" class="form-input" placeholder="Enter your password" required>
                <span class="form-error" id="passwordError"></span>
              </div>
              
              <button type="submit" class="btn btn-primary w-full">Sign In</button>
              
              <p class="text-center text-sm text-gray-600 mt-4">
                Don't have an account? <a href="#/signup" class="text-primary">Sign up</a>
              </p>
              
              <p class="text-center text-xs text-gray-500 mt-4">
                Demo: admin@gettix.com / password123
              </p>
            </form>
          </div>
        </div>
      </div>
    `;
  },

  /**
   * Render signup page
   * @returns {string}
   */
  renderSignupPage() {
    return `
      <div class="page">
        ${this.renderNavbar()}
        
        <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
          <div class="card" style="max-width: 450px; width: 100%;">
            <div class="card-header">
              <h2 class="card-title text-center">Create Account</h2>
              <p class="text-center text-gray-600 text-sm">Get started with GetTix today</p>
            </div>
            
            <form id="signupForm" class="card-body">
              <div class="form-group">
                <label class="form-label" for="signupName">Full Name</label>
                <input type="text" id="signupName" class="form-input" placeholder="Enter your name" required>
                <span class="form-error" id="nameError"></span>
              </div>
              
              <div class="form-group">
                <label class="form-label" for="signupEmail">Email</label>
                <input type="email" id="signupEmail" class="form-input" placeholder="Enter your email" required>
                <span class="form-error" id="signupEmailError"></span>
              </div>
              
              <div class="form-group">
                <label class="form-label" for="signupPassword">Password</label>
                <input type="password" id="signupPassword" class="form-input" placeholder="Create a password" required>
                <span class="form-error" id="signupPasswordError"></span>
              </div>
              
              <div class="form-group">
                <label class="form-label" for="signupConfirmPassword">Confirm Password</label>
                <input type="password" id="signupConfirmPassword" class="form-input" placeholder="Confirm your password" required>
                <span class="form-error" id="confirmPasswordError"></span>
              </div>
              
              <button type="submit" class="btn btn-primary w-full">Create Account</button>
              
              <p class="text-center text-sm text-gray-600 mt-4">
                Already have an account? <a href="#/login" class="text-primary">Sign in</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    `;
  },

  /**
   * Render dashboard page
   * @returns {string}
   */
  renderDashboardPage() {
    const user = Auth.getCurrentUser();
    const stats = Tickets.getStats();
    
    return `
      <div class="page">
        ${this.renderNavbar()}
        
        <div class="bg-white shadow border-b">
          <div class="container py-6">
            <h1 class="text-3xl font-bold">Dashboard</h1>
            <p class="text-gray-600">Welcome back, ${user?.name || 'User'}!</p>
          </div>
        </div>
        
        <div class="container py-8">
          <!-- Stats Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div class="card">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center text-primary font-bold text-2xl">
                  ${stats.total}
                </div>
                <div>
                  <p class="text-sm text-gray-600">Total Tickets</p>
                  <p class="text-2xl font-bold">${stats.total}</p>
                </div>
              </div>
            </div>
            
            <div class="card">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-2xl" style="background-color: rgba(20, 184, 166, 0.1); color: var(--color-primary);">
                  ${stats.open}
                </div>
                <div>
                  <p class="text-sm text-gray-600">Open</p>
                  <p class="text-2xl font-bold">${stats.open}</p>
                </div>
              </div>
            </div>
            
            <div class="card">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-2xl" style="background-color: rgba(249, 115, 22, 0.1); color: var(--color-accent);">
                  ${stats.inProgress}
                </div>
                <div>
                  <p class="text-sm text-gray-600">In Progress</p>
                  <p class="text-2xl font-bold">${stats.inProgress}</p>
                </div>
              </div>
            </div>
            
            <div class="card">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-2xl" style="background-color: rgba(100, 116, 139, 0.1); color: var(--color-gray-500);">
                  ${stats.closed}
                </div>
                <div>
                  <p class="text-sm text-gray-600">Closed</p>
                  <p class="text-2xl font-bold">${stats.closed}</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Quick Actions -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold mb-6">Quick Actions</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <a href="#/tickets" class="card" style="text-decoration: none; color: inherit;">
                <div class="flex items-center gap-4">
                  <div class="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center text-primary">
                    <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-xl mb-1">Create New Ticket</h3>
                    <p class="text-gray-600 text-sm">Start tracking a new issue or request</p>
                  </div>
                </div>
              </a>
              
              <a href="#/tickets" class="card" style="text-decoration: none; color: inherit;">
                <div class="flex items-center gap-4">
                  <div class="w-16 h-16 bg-accent-light rounded-xl flex items-center justify-center text-accent">
                    <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-xl mb-1">View All Tickets</h3>
                    <p class="text-gray-600 text-sm">Manage and update your tickets</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        ${this.renderFooter()}
      </div>
    `;
  },

  /**
   * Render tickets page
   * @returns {string}
   */
  renderTicketsPage() {
    const tickets = Tickets.getTickets();
    
    return `
      <div class="page">
        ${this.renderNavbar()}
        
        <div class="bg-white shadow border-b">
          <div class="container py-6 flex justify-between items-center">
            <h1 class="text-3xl font-bold">Ticket Management</h1>
            <button onclick="openCreateModal()" class="btn btn-primary">Create Ticket</button>
          </div>
        </div>
        
        <div class="container py-8">
          <div class="card">
            ${tickets.length === 0 ? `
              <div class="text-center py-12">
                <p class="text-gray-600 mb-4">No tickets yet</p>
                <button onclick="openCreateModal()" class="btn btn-primary">Create Your First Ticket</button>
              </div>
            ` : `
              <table class="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Created</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  ${tickets.map(ticket => `
                    <tr>
                      <td><strong>${ticket.title}</strong></td>
                      <td><span class="badge badge-${ticket.status}">${ticket.status}</span></td>
                      <td class="text-capitalize">${ticket.priority}</td>
                      <td>${new Date(ticket.createdAt).toLocaleDateString()}</td>
                      <td>
                        <button onclick="editTicket('${ticket.id}')" class="btn btn-sm btn-outline">Edit</button>
                        <button onclick="deleteTicketConfirm('${ticket.id}')" class="btn btn-sm btn-outline" style="color: var(--color-error);">Delete</button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            `}
          </div>
        </div>
        
        ${this.renderFooter()}
      </div>
      
      <!-- Modal placeholder -->
      <div id="modalContainer"></div>
    `;
  },

  /**
   * Render ticket modal
   * @param {object} ticket - Existing ticket for editing (optional)
   * @returns {string}
   */
  renderTicketModal(ticket = null) {
    const isEdit = !!ticket;
    
    return `
      <div class="modal-overlay" onclick="closeModal(event)">
        <div class="modal" onclick="event.stopPropagation()">
          <div class="modal-header">
            <h3 class="modal-title">${isEdit ? 'Edit Ticket' : 'Create Ticket'}</h3>
            <button class="modal-close" onclick="closeModal()">&times;</button>
          </div>
          
          <form id="ticketForm" class="modal-body">
            <div class="form-group">
              <label class="form-label" for="ticketTitle">Title *</label>
              <input type="text" id="ticketTitle" class="form-input" value="${ticket?.title || ''}" required>
            </div>
            
            <div class="form-group">
              <label class="form-label" for="ticketDescription">Description</label>
              <textarea id="ticketDescription" class="form-textarea">${ticket?.description || ''}</textarea>
            </div>
            
            <div class="form-group">
              <label class="form-label" for="ticketStatus">Status</label>
              <select id="ticketStatus" class="form-select">
                <option value="open" ${ticket?.status === 'open' ? 'selected' : ''}>Open</option>
                <option value="in-progress" ${ticket?.status === 'in-progress' ? 'selected' : ''}>In Progress</option>
                <option value="closed" ${ticket?.status === 'closed' ? 'selected' : ''}>Closed</option>
              </select>
            </div>
            
            <div class="form-group">
              <label class="form-label" for="ticketPriority">Priority</label>
              <select id="ticketPriority" class="form-select">
                <option value="low" ${ticket?.priority === 'low' ? 'selected' : ''}>Low</option>
                <option value="medium" ${ticket?.priority === 'medium' ? 'selected' : ''}>Medium</option>
                <option value="high" ${ticket?.priority === 'high' ? 'selected' : ''}>High</option>
              </select>
            </div>
          </form>
          
          <div class="modal-footer">
            <button onclick="closeModal()" class="btn btn-outline">Cancel</button>
            <button onclick="saveTicket('${ticket?.id || ''}')" class="btn btn-primary">${isEdit ? 'Update' : 'Create'}</button>
          </div>
        </div>
      </div>
    `;
  }
};

