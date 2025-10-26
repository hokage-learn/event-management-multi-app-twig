// Authentication Module

const Auth = {
  SESSION_KEY: 'ticketapp_session',
  USERS_KEY: 'ticketapp_users',

  /**
   * Check if user is authenticated
   * @returns {boolean}
   */
  isAuthenticated() {
    return Storage.has(this.SESSION_KEY);
  },

  /**
   * Get current user
   * @returns {object|null}
   */
  getCurrentUser() {
    return Storage.get(this.SESSION_KEY);
  },

  /**
   * Login user
   * @param {string} email
   * @param {string} password
   * @returns {object} {success: boolean, error?: string, user?: object}
   */
  async login(email, password) {
    // Simulate async operation
    await this.delay(500);

    // Check for demo admin user
    if (email === 'admin@gettix.com' && password === 'password123') {
      const userData = {
        id: '1',
        email: email,
        name: 'Admin User',
        role: 'admin'
      };
      Storage.set(this.SESSION_KEY, userData);
      Toast.success('Login successful!');
      return { success: true, user: userData };
    }

    // Check for registered users
    const registeredUsers = Storage.get(this.USERS_KEY) || [];
    const foundUser = registeredUsers.find(u => u.email === email);

    if (foundUser) {
      // In production, you would verify password hash
      // For demo, we'll just check if password is not empty
      if (password) {
        Storage.set(this.SESSION_KEY, foundUser);
        Toast.success(`Welcome back, ${foundUser.name}!`);
        return { success: true, user: foundUser };
      }
    }

    Toast.error('Invalid email or password');
    return { success: false, error: 'Invalid credentials' };
  },

  /**
   * Sign up new user
   * @param {string} name
   * @param {string} email
   * @param {string} password
   * @returns {object} {success: boolean, error?: string, user?: object}
   */
  async signup(name, email, password) {
    // Simulate async operation
    await this.delay(500);

    // Check if user already exists
    const existingUsers = Storage.get(this.USERS_KEY) || [];
    const userExists = existingUsers.find(u => u.email === email);

    if (userExists) {
      Toast.error('User with this email already exists');
      return { success: false, error: 'User already exists' };
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      role: 'user',
      createdAt: new Date().toISOString()
    };

    existingUsers.push(newUser);
    Storage.set(this.USERS_KEY, existingUsers);
    Storage.set(this.SESSION_KEY, newUser);

    Toast.success('Account created successfully!');
    return { success: true, user: newUser };
  },

  /**
   * Logout user
   * @returns {boolean}
   */
  logout() {
    Storage.remove(this.SESSION_KEY);
    Toast.info('Logged out successfully');
    return true;
  },

  /**
   * Get all registered users (for demo purposes)
   * @returns {array}
   */
  getAllUsers() {
    return Storage.get(this.USERS_KEY) || [];
  },

  /**
   * Utility: Delay function
   * @param {number} ms - Milliseconds
   * @returns {Promise}
   */
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
};

