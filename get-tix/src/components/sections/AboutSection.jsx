const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-16 bg-white">
      <div className="max-w-container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight px-4">
            Everything You Need to <br className="hidden md:block" />
            <span className="text-primary">Manage Tickets</span> Efficiently
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            GetTix empowers teams to streamline workflows, track progress in real-time, 
            and deliver exceptional service from a single, intuitive platform.
          </p>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Placeholder for image - you can replace this with an actual image */}
              <img src="/SS.png" alt="screenshot" />
              {/* You can replace the above div with: <img src="/path-to-image.jpg" alt="GetTix Dashboard" className="w-full h-full object-cover" /> */}
            </div>
            
            {/* Decorative blobs */}
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          </div>
          
          {/* Right: Feature Cards */}
          <div className="space-y-6 md:space-y-8">
            <div className="group p-4 md:p-5 bg-white rounded-xl md:rounded-2xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 order-1 sm:order-none">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                  </svg>
                </div>
                <div className="flex-1 text-center sm:text-left order-2">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">Smart Organization</h3>
                  <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                    Create, categorize, and manage tickets effortlessly. Our intelligent system helps you organize 
                    tasks by priority, status, and team member for maximum productivity.
                  </p>
                  <div className="mt-2 md:mt-3 flex items-center justify-center sm:justify-start gap-2 text-primary font-semibold text-xs md:text-sm">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group p-4 md:p-5 bg-white rounded-xl md:rounded-2xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 order-1 sm:order-none">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div className="flex-1 text-center sm:text-left order-2">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">Real-Time Collaboration</h3>
                  <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                    Stay connected with instant updates and notifications. Team members are automatically notified 
                    of status changes, assignments, and comments for seamless collaboration.
                  </p>
                  <div className="mt-2 md:mt-3 flex items-center justify-center sm:justify-start gap-2 text-accent font-semibold text-xs md:text-sm">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group p-4 md:p-5 bg-white rounded-xl md:rounded-2xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-900 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 order-1 sm:order-none">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div className="flex-1 text-center sm:text-left order-2">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">Powerful Analytics</h3>
                  <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                    Monitor performance with detailed insights and reports. Track response times, resolution rates, 
                    and team productivity to identify opportunities for improvement.
                  </p>
                  <div className="mt-3 md:mt-4 flex items-center justify-center sm:justify-start gap-2 text-gray-900 font-semibold text-xs md:text-sm">
                    <span>Learn more</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="text-center p-4 md:p-6 lg:p-8 bg-white rounded-2xl md:rounded-3xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-primary/10">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 md:mb-3">99.9%</div>
            <div className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider">Uptime</div>
            <div className="text-xs text-gray-500 mt-1">Always Available</div>
          </div>
          <div className="text-center p-4 md:p-6 lg:p-8 bg-white rounded-2xl md:rounded-3xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-accent/10">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-2 md:mb-3">10K+</div>
            <div className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider">Users</div>
            <div className="text-xs text-gray-500 mt-1">Trusted by Teams</div>
          </div>
          <div className="text-center p-4 md:p-6 lg:p-8 bg-white rounded-2xl md:rounded-3xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-primary/10">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 md:mb-3">50K+</div>
            <div className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider">Tickets</div>
            <div className="text-xs text-gray-500 mt-1">Managed Daily</div>
          </div>
          <div className="text-center p-4 md:p-6 lg:p-8 bg-white rounded-2xl md:rounded-3xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-accent/10">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-2 md:mb-3">24/7</div>
            <div className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider">Support</div>
            <div className="text-xs text-gray-500 mt-1">Always Here</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
