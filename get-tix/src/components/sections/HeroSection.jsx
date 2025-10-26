import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const HeroSection = () => {
  // Start with wavy path
  const wavyPath = 'M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,154.7C672,160,768,192,864,197.3C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z';
  const straightPath = 'M0,320L48,320C96,320,192,320,288,320C384,320,480,320,576,320C672,320,768,320,864,320C960,320,1056,320,1152,320C1248,320,1344,320,1392,320L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z';
  
  const [wavePath, setWavePath] = useState(wavyPath);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const hero = heroRef.current;
      const rect = hero.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, -rect.bottom / window.innerHeight));
      
      // Create a path that interpolates between wavy and straight
      if (scrollProgress === 0) {
        setWavePath(wavyPath);
      } else if (scrollProgress >= 1) {
        setWavePath(straightPath);
      } else {
        // Interpolate between wavy and straight
        const amplitude = 80 * (1 - scrollProgress);
        const yBase = 320;
        const newPath = `M0,${yBase - amplitude}L48,${yBase - amplitude + 16}C96,${yBase - amplitude + 32},192,${yBase - amplitude},288,${yBase - amplitude}C384,${yBase - amplitude},480,${yBase - amplitude + 16},576,${yBase - amplitude}C672,${yBase - amplitude},768,${yBase - amplitude},864,${yBase - amplitude}C960,${yBase - amplitude},1056,${yBase - amplitude},1152,${yBase - amplitude}C1248,${yBase - amplitude},1344,${yBase - amplitude + 16},1392,${yBase - amplitude}L1440,${yBase - amplitude}L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z`;
        setWavePath(newPath);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [wavyPath, straightPath]);

  const handleGetStarted = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Small delay for UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/auth/signup');
    }
    
    setLoading(false);
  };

  return (
    <section ref={heroRef} className="relative bg-gradient-to-br from-primary via-emerald-600 to-green-700 py-16 md:py-20 overflow-hidden flex-1 pt-24 md:pt-28">
      {/* Decorative Circles - Multiple floating circles */}
      <div className="absolute top-10 right-10 w-16 h-16 md:w-24 md:h-24 bg-white/20 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-12 h-12 md:w-16 md:h-16 bg-accent-light/30 rounded-full opacity-40"></div>
      <div className="absolute top-1/2 right-1/4 w-8 h-8 md:w-12 md:h-12 bg-white/10 rounded-full"></div>
      <div className="absolute top-1/3 left-1/4 w-12 h-12 md:w-16 md:h-16 bg-accent/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-16 h-16 md:w-20 md:h-20 bg-primary-light/20 rounded-full blur-2xl"></div>
      
      {/* Wavy Background SVG - Dynamic based on scroll */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg 
          className="w-full h-20 lg:h-24" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path 
            d={wavePath}
            fill="url(#wave-gradient)"
            style={{ transition: 'd 0.3s ease-out' }}
          />
        </svg>
      </div>
      
      <div className="max-w-container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 drop-shadow-lg px-4">
            Welcome to <span className="text-accent-light">GetTix</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-5 md:mb-6 leading-relaxed px-4">
            Your all-in-one ticket management solution. Streamline your workflow, 
            track issues, and collaborate seamlessly with your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
            <Link 
              to="/auth/login" 
              className="inline-flex items-center justify-center px-4 md:px-5 py-2 md:py-2.5 border-2 border-white text-xs md:text-sm font-medium rounded-lg text-white hover:bg-white/10 transition-all shadow-lg"
            >
              Login
            </Link>
            <button 
              onClick={handleGetStarted}
              disabled={loading}
              className="inline-flex items-center justify-center px-4 md:px-5 py-2 md:py-2.5 border border-transparent text-xs md:text-sm font-medium rounded-lg text-white bg-gradient-to-r from-accent to-accent-hover hover:from-accent-hover hover:to-accent transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </>
              ) : (
                'Get Started'
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
