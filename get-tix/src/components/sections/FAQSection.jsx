import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I create my first ticket?",
      answer: "Creating a ticket is simple! Click the 'Create Ticket' button on the dashboard, fill in the required information including title, description, and priority, then click 'Save'. Your ticket will be created and visible in your ticket list immediately."
    },
    {
      question: "Can I customize ticket statuses?",
      answer: "Yes! GetTix comes with default statuses (Open, In Progress, Closed), and you can customize these to match your workflow. Visit the settings page to create custom statuses that fit your team's needs."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use industry-standard encryption for all data in transit and at rest. Your information is stored securely in our cloud infrastructure with regular backups and 99.9% uptime guarantee."
    },
    {
      question: "Can I integrate GetTix with other tools?",
      answer: "Yes! GetTix offers a comprehensive REST API and pre-built integrations for popular tools like Slack, GitHub, Jira, and more. Check our integrations page for the full list and setup instructions."
    },
    {
      question: "How much does GetTix cost?",
      answer: "GetTix offers flexible pricing plans to suit teams of all sizes. We have a free tier for small teams, and paid plans starting at $9/month per user for advanced features. Visit our pricing page for detailed information."
    },
    {
      question: "Can I assign tickets to team members?",
      answer: "Yes! Assigning tickets is one of the core features. Simply create or edit a ticket and select the team member from the assignee dropdown. You can also reassign tickets at any time as your workflow evolves."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-16 bg-white">
      <div className="max-w-container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Find answers to common questions about GetTix
          </p>
        </div>

                    {/* FAQ Items */}
            <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg md:rounded-xl border border-gray-200 overflow-hidden hover:border-primary/50 transition-all duration-300"
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4 text-sm md:text-base">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 transform transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Answer */}
                  {openIndex === index && (
                    <div className="px-4 md:px-6 pb-3 md:pb-4 animate-fadeIn">
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
      </div>
    </section>
  );
};

export default FAQSection;
