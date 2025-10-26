const FeaturesSection = () => {
  return (
    <section id="features" className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Decorative Bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 md:w-48 md:h-48 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 md:w-64 md:h-64 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-container mx-auto px-4 relative">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
            Everything You Need to <br className="hidden md:block" />
            <span className="text-primary">Succeed</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Comprehensive tools designed to streamline your workflow and boost productivity
          </p>
        </div>
        
        {/* Main Layout: Image in Center, Features on Sides */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-center">
            {/* Left Features */}
            <div className="lg:col-span-3 space-y-4">
              <div className="group p-4 md:p-5 bg-white rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 hover:border-primary/20">
                <div className="flex flex-col items-center text-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">Create & Manage</h3>
                    <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                      Intuitive interface for creating and organizing tickets with custom fields and priorities.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group p-4 md:p-5 bg-white rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 hover:border-accent/20">
                <div className="flex flex-col items-center text-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">Track Progress</h3>
                    <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                      Real-time status updates and time tracking to keep projects on schedule.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group p-4 md:p-5 bg-white rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 hover:border-primary/20">
                <div className="flex flex-col items-center text-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">Team Collaboration</h3>
                    <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                      Assign tasks, comment, and collaborate seamlessly with your team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Center Image */}
            <div className="lg:col-span-4 flex justify-center my-8 lg:my-0">
              <div className="relative">
                <img src="/SSS.png" alt="screenshot" />
                
                {/* Floating bubbles */}
                <div className="absolute -top-3 -right-3 w-8 h-8 md:w-12 md:h-12 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-3 -left-3 w-10 h-10 md:w-16 md:h-16 bg-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
            
            {/* Right Features */}
            <div className="lg:col-span-3 space-y-4">
              <div className="group p-4 md:p-5 bg-white rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 hover:border-accent/20">
                <div className="flex flex-col items-center text-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">Smart Analytics</h3>
                    <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                      Powerful insights and reports to make data-driven decisions.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group p-4 md:p-5 bg-white rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 hover:border-gray-900/20">
                <div className="flex flex-col items-center text-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">Secure & Reliable</h3>
                    <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                      Enterprise-grade security to protect your data and privacy.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group p-4 md:p-5 bg-white rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 hover:border-primary/20">
                <div className="flex flex-col items-center text-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">API & Integrations</h3>
                    <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                      Connect with your favorite tools and build custom workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
