const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Project Manager",
      company: "Tech Solutions Inc.",
      content: "GetTix has revolutionized how we manage our workflow. The intuitive interface and real-time collaboration features have increased our team's productivity by 40%.",
      rating: 5,
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "StartupXYZ",
      content: "The analytics dashboard provides exactly what we need to track performance. It's become an indispensable tool for our growing team.",
      rating: 5,
      avatar: "MC"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Operations Director",
      company: "Global Services",
      content: "Switching to GetTix was the best decision we made. The API integrations and custom workflows have streamlined our entire operation.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <section id="testimonials" className="py-12 md:py-16 bg-white">
      <div className="max-w-container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Don't just take our word for it. See how GetTix is helping teams worldwide
          </p>
        </div>

                    {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-[0_5px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100"
                >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

                                {/* Content */}
                  <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.name}</p>
                      <p className="text-xs md:text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs md:text-sm text-primary">{testimonial.company}</p>
                    </div>
                  </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
