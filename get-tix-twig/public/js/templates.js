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
        
        <!-- Hero Section with Wave SVG -->
        <section class="relative min-h-[70vh] flex items-center justify-center overflow-hidden" style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 50%, #f97316 100%);">
          <!-- Background elements with parallax effect -->
          <div class="absolute top-20 right-20 w-64 h-64 bg-white bg-opacity-10 rounded-full" style="filter: blur(80px);"></div>
          <div class="absolute bottom-20 left-20 w-80 h-80 bg-opacity-20 rounded-full" style="background-color: var(--color-accent); filter: blur(80px);"></div>
          
          <!-- Content -->
          <div class="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-16 text-center" style="margin-top: 80px;">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Streamline Your Ticket Management
            </h1>
            <p class="text-base md:text-lg lg:text-xl text-white" style="opacity: 0.9; max-width: 36rem; margin-left: auto; margin-right: auto;">
              Efficient ticket tracking and management system for modern teams
            </p>
            <div class="mt-6 md:mt-8">
              <a href="#/signup" class="btn btn-lg" style="background-color: white; color: var(--color-primary); padding: 12px 24px; font-weight: 600;">
                Get Started
              </a>
            </div>
          </div>
          
          <!-- Wave with parallax effect -->
          <div class="absolute bottom-0 left-0 right-0" style="transform: translateY(0px);">
            <img src="assets/wave-background.svg" alt="Wave" style="width: 100%; height: 80px;">
          </div>
        </section>

        <!-- About Section -->
        <section id="about" class="py-8 md:py-10 bg-white relative border-t border-b border-gray-200">
          <div class="max-w-6xl mx-auto px-4" style="transform: translateY(0px);">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <!-- Left Side - Dashboard Image -->
              <div class="relative">
                <div class="bg-gradient-to-br p-6 rounded-2xl shadow-lg" style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);">
                  <div class="aspect-video bg-white bg-opacity-95 rounded-lg p-4 shadow-lg">
                    <!-- Mock Dashboard UI -->
                    <div class="flex items-center gap-2 mb-3">
                      <div class="w-2.5 h-2.5 rounded-full" style="background-color: #ef4444;"></div>
                      <div class="w-2.5 h-2.5 rounded-full" style="background-color: #f59e0b;"></div>
                      <div class="w-2.5 h-2.5 rounded-full" style="background-color: #10b981;"></div>
                      <div class="ml-3 text-xs font-semibold text-gray-700">GetTix Dashboard</div>
                    </div>
                    
                    <!-- Stats Grid -->
                    <div class="grid grid-cols-2 gap-3">
                      <div class="bg-white rounded-lg p-2 shadow">
                        <div class="text-xs text-gray-600 mb-1">Total</div>
                        <div class="text-xl font-bold" style="color: var(--color-primary);">12</div>
                      </div>
                      <div class="bg-white rounded-lg p-2 shadow">
                        <div class="text-xs text-gray-600 mb-1">Open</div>
                        <div class="text-xl font-bold" style="color: var(--color-accent);">8</div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Decorative elements -->
                <div class="absolute -bottom-4 -right-4 w-16 h-16 bg-opacity-20 rounded-full" style="background-color: var(--color-accent); filter: blur(30px); z-index: -1;"></div>
                <div class="absolute -top-4 -left-4 w-24 h-24 bg-opacity-10 rounded-full" style="background-color: var(--color-primary); filter: blur(30px); z-index: -1;"></div>
              </div>

              <!-- Right Side - Content -->
              <div>
                <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Manage Tickets Like Never Before
                </h2>
                <p class="text-sm text-gray-600 mb-4 leading-relaxed">
                  GetTix is a powerful ticket management system designed to streamline your workflow. 
                  Create, track, and resolve tickets with ease using our intuitive interface built for modern teams.
                </p>
                
                <div style="display: flex; flex-direction: column; gap: 10px;">
                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center" style="background-color: rgba(20, 184, 166, 0.1);">
                      <svg class="w-4 h-4" style="color: var(--color-primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900 mb-0.5 text-sm">Simple & Intuitive</h3>
                      <p class="text-gray-600 text-xs">Clean interface designed for efficiency</p>
                    </div>
                  </div>

                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center" style="background-color: rgba(20, 184, 166, 0.1);">
                      <svg class="w-4 h-4" style="color: var(--color-primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900 mb-0.5 text-sm">Real-time Updates</h3>
                      <p class="text-gray-600 text-xs">Stay synchronized with instant notifications</p>
                    </div>
                  </div>

                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center" style="background-color: rgba(20, 184, 166, 0.1);">
                      <svg class="w-4 h-4" style="color: var(--color-primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900 mb-0.5 text-sm">Powerful Analytics</h3>
                      <p class="text-gray-600 text-xs">Make data-driven decisions with insights</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Features Section -->
        <section id="features" class="py-8 md:py-10 relative" style="background: white;">
          <div class="max-w-6xl mx-auto px-4" style="transform: translateY(0px);">
            <div class="text-center mb-8">
              <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-2">Powerful Features</h2>
              <p class="text-sm text-gray-600 max-w-2xl mx-auto">
                Everything you need to manage tickets efficiently
              </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <!-- Feature 1 -->
              <div class="card" style="padding: 16px; border: 1px solid #e5e7eb;">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style="background-color: rgba(20, 184, 166, 0.1);">
                  <svg class="w-4 h-4" style="color: var(--color-primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 class="text-base font-bold text-gray-900 mb-1.5">Create & Edit</h3>
                <p class="text-gray-600 text-xs leading-relaxed">
                  Create tickets instantly with all essential details. Edit on-the-fly with inline editing capabilities.
                </p>
              </div>

              <!-- Feature 2 -->
              <div class="card" style="padding: 16px; border: 1px solid #e5e7eb;">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style="background-color: rgba(20, 184, 166, 0.1);">
                  <svg class="w-4 h-4" style="color: var(--color-primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 class="text-base font-bold text-gray-900 mb-1.5">Organize & Track</h3>
                <p class="text-gray-600 text-xs leading-relaxed">
                  Organize tickets by status, priority, or custom tags. Track progress with visual status indicators.
                </p>
              </div>

              <!-- Feature 3 -->
              <div class="card" style="padding: 16px; border: 1px solid #e5e7eb;">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style="background-color: rgba(249, 115, 22, 0.1);">
                  <svg class="w-4 h-4" style="color: var(--color-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 class="text-base font-bold text-gray-900 mb-1.5">Smart Search</h3>
                <p class="text-gray-600 text-xs leading-relaxed">
                  Find tickets instantly with our powerful search engine. Filter by multiple criteria.
                </p>
              </div>

              <!-- Feature 4 -->
              <div class="card" style="padding: 16px; border: 1px solid #e5e7eb;">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style="background-color: rgba(20, 184, 166, 0.1);">
                  <svg class="w-4 h-4" style="color: var(--color-primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="text-base font-bold text-gray-900 mb-1.5">Real-time Sync</h3>
                <p class="text-gray-600 text-xs leading-relaxed">
                  Stay synchronized across all devices with real-time updates. Changes sync instantly.
                </p>
              </div>

              <!-- Feature 5 -->
              <div class="card" style="padding: 16px; border: 1px solid #e5e7eb;">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style="background-color: rgba(249, 115, 22, 0.1);">
                  <svg class="w-4 h-4" style="color: var(--color-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 class="text-base font-bold text-gray-900 mb-1.5">Secure & Private</h3>
                <p class="text-gray-600 text-xs leading-relaxed">
                  Your data is encrypted and secure. Enterprise-grade security with role-based access control.
                </p>
              </div>

              <!-- Feature 6 -->
              <div class="card" style="padding: 16px; border: 1px solid #e5e7eb;">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style="background-color: rgba(20, 184, 166, 0.1);">
                  <svg class="w-4 h-4" style="color: var(--color-primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 class="text-base font-bold text-gray-900 mb-1.5">Advanced Analytics</h3>
                <p class="text-gray-600 text-xs leading-relaxed">
                  Get insights with comprehensive analytics and reports. Track team performance and resolution times.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Testimonials Section -->
        <section class="py-8 md:py-10 bg-gray-50 relative">
          <div class="max-w-6xl mx-auto px-4" style="transform: translateY(0px);">
            <div class="text-center mb-8">
              <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-2">Trusted by Teams Worldwide</h2>
              <p class="text-sm text-gray-600">See what our users are saying about GetTix</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <!-- Testimonial 1 -->
              <div class="card" style="padding: 16px; border: 1px solid #e5e7eb;">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3" style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);">
                    JD
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-sm">John Davis</h4>
                    <p class="text-xs text-gray-600">Product Manager at TechCorp</p>
                  </div>
                </div>
                <div class="flex mb-3" style="color: #fbbf24;">
                  ${'⭐'.repeat(5)}
                </div>
                <p class="text-gray-700 text-xs leading-relaxed">
                  "GetTix has completely transformed our ticket management workflow. We've reduced resolution time by 40%."
                </p>
              </div>

              <!-- Testimonial 2 -->
              <div class="card" style="padding: 16px; border: 1px solid #e5e7eb;">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3" style="background: linear-gradient(135deg, var(--color-accent) 0%, #ea580c 100%);">
                    SM
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-sm">Sarah Mitchell</h4>
                    <p class="text-xs text-gray-600">Team Lead at DesignStudio</p>
                  </div>
                </div>
                <div class="flex mb-3" style="color: #fbbf24;">
                  ${'⭐'.repeat(5)}
                </div>
                <p class="text-gray-700 text-xs leading-relaxed">
                  "The interface is incredibly intuitive. Our entire team adopted it within days. The real-time updates are game-changers."
                </p>
              </div>

              <!-- Testimonial 3 -->
              <div class="card" style="padding: 16px; border: 1px solid #e5e7eb;">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3" style="background: linear-gradient(135deg, var(--color-primary) 0%, #64748b 100%);">
                    MK
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-sm">Michael Kim</h4>
                    <p class="text-xs text-gray-600">CTO at StartupHub</p>
                  </div>
                </div>
                <div class="flex mb-3" style="color: #fbbf24;">
                  ${'⭐'.repeat(5)}
                </div>
                <p class="text-gray-700 text-xs leading-relaxed">
                  "Best ticket management system we've tried. The analytics and reporting features give us incredible insights."
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- FAQ Section -->
        <section class="py-8 md:py-10 pb-8 relative">
          <div class="max-w-4xl mx-auto px-4" style="transform: translateY(0px);">
            <div class="text-center mb-8">
              <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
              <p class="text-sm text-gray-600">Everything you need to know about GetTix</p>
            </div>
      
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div class="card faq-item" style="border: 1px solid #e5e7eb; cursor: pointer;">
                <div style="padding: 12px 16px; display: flex; justify-content: space-between; align-items: center;" onclick="this.parentElement.classList.toggle('faq-open')">
                  <h3 class="font-semibold text-gray-900 text-sm">How do I create a new ticket?</h3>
                  <svg class="faq-icon" style="width: 20px; height: 20px; color: #6b7280; transition: transform 0.3s;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div class="faq-answer" style="max-height: 0; overflow: hidden; transition: max-height 0.3s;">
                  <p style="padding: 0 16px 12px; color: #6b7280; font-size: 13px; line-height: 1.6;">
                    Navigate to the Ticket Management page and click the 'Create Ticket' button. Fill in the title (required), description, select a status, and assign a priority level.
                  </p>
                </div>
              </div>

              <div class="card faq-item" style="border: 1px solid #e5e7eb; cursor: pointer;">
                <div style="padding: 12px 16px; display: flex; justify-content: space-between; align-items: center;" onclick="this.parentElement.classList.toggle('faq-open')">
                  <h3 class="font-semibold text-gray-900 text-sm">Is there a mobile app available?</h3>
                  <svg class="faq-icon" style="width: 20px; height: 20px; color: #6b7280; transition: transform 0.3s;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div class="faq-answer" style="max-height: 0; overflow: hidden; transition: max-height 0.3s;">
                  <p style="padding: 0 16px 12px; color: #6b7280; font-size: 13px; line-height: 1.6;">
                    GetTix is fully responsive and works seamlessly on all devices through your web browser. Our mobile-friendly design ensures you can manage tickets on-the-go.
                  </p>
                </div>
              </div>

              <div class="card faq-item" style="border: 1px solid #e5e7eb; cursor: pointer;">
                <div style="padding: 12px 16px; display: flex; justify-content: space-between; align-items: center;" onclick="this.parentElement.classList.toggle('faq-open')">
                  <h3 class="font-semibold text-gray-900 text-sm">How secure is my ticket data?</h3>
                  <svg class="faq-icon" style="width: 20px; height: 20px; color: #6b7280; transition: transform 0.3s;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div class="faq-answer" style="max-height: 0; overflow: hidden; transition: max-height 0.3s;">
                  <p style="padding: 0 16px 12px; color: #6b7280; font-size: 13px; line-height: 1.6;">
                    Security is our top priority. All your data is encrypted using industry-standard protocols. User-specific data isolation ensures each user only sees their own tickets.
                  </p>
                </div>
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

