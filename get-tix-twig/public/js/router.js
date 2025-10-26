// Client-Side Router

const Router = {
  routes: {},
  currentRoute: null,

  /**
   * Initialize router
   */
  init() {
    // Listen for hash changes
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('load', () => this.handleRoute());
  },

  /**
   * Register a route
   * @param {string} path - Route path (e.g., '/', '/dashboard')
   * @param {function} handler - Route handler function
   * @param {boolean} requiresAuth - Whether route requires authentication
   */
  register(path, handler, requiresAuth = false) {
    this.routes[path] = { handler, requiresAuth };
  },

  /**
   * Navigate to a route
   * @param {string} path
   */
  navigate(path) {
    window.location.hash = path;
  },

  /**
   * Handle route change
   */
  handleRoute() {
    const hash = window.location.hash.slice(1) || '/';
    this.currentRoute = hash;

    const route = this.routes[hash];

    if (!route) {
      // Route not found, redirect to home
      this.navigate('/');
      return;
    }

    // Check authentication
    if (route.requiresAuth && !Auth.isAuthenticated()) {
      Toast.info('Please log in to access this page');
      this.navigate('/login');
      return;
    }

    // If authenticated user tries to access auth pages, redirect to dashboard
    if ((hash === '/login' || hash === '/signup') && Auth.isAuthenticated()) {
      this.navigate('/dashboard');
      return;
    }

    // Execute route handler
    route.handler();
  },

  /**
   * Get current route
   * @returns {string}
   */
  getCurrentRoute() {
    return this.currentRoute || '/';
  }
};

