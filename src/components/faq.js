import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  const [openSection, setOpenSection] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const toggleQuestion = (question) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <div className="bg-white py-24 sm:py-32 w-full">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </p>
        </div>
        <div className="mt-16">
          <div className="space-y-12">
            {/* General Questions */}
            <div>
              <button
                className="w-full flex justify-between items-center text-left text-xl font-semibold text-gray-900"
                onClick={() => toggleSection('general')}
              >
                General Questions
                <FontAwesomeIcon icon={openSection === 'general' ? faChevronUp : faChevronDown} className="h-6 w-6 text-gray-500" />
              </button>
              {openSection === 'general' && (
                <div className="mt-4 space-y-8">
                  <div>
                    <button
                      className="w-full flex justify-between items-center text-left text-base font-medium text-gray-900"
                      onClick={() => toggleQuestion('q1')}
                    >
                      What is the difference between Lead Scorpio and traditional lead generation services?
                      <FontAwesomeIcon icon={openQuestion === 'q1' ? faChevronUp : faChevronDown} className="h-5 w-5 text-gray-500" />
                    </button>
                    {openQuestion === 'q1' && (
                      <dd className="mt-2 text-base text-gray-600">
                        Lead Scorpio focuses on generating qualified leads with high buying intent, unlike traditional methods that provide a high volume of unqualified leads. We also offer a pay-per-meeting model, ensuring you only pay for meetings with qualified prospects who show up.
                      </dd>
                    )}
                  </div>
                  <div>
                    <button
                      className="w-full flex justify-between items-center text-left text-base font-medium text-gray-900"
                      onClick={() => toggleQuestion('q2')}
                    >
                      What types of businesses can benefit from Lead Scorpio's services?
                      <FontAwesomeIcon icon={openQuestion === 'q2' ? faChevronUp : faChevronDown} className="h-5 w-5 text-gray-500" />
                    </button>
                    {openQuestion === 'q2' && (
                      <dd className="mt-2 text-base text-gray-600">
                        Lead Scorpio caters to B2B businesses across various industries seeking to accelerate their sales pipeline by securing qualified meetings with potential customers.
                      </dd>
                    )}
                  </div>
                  <div>
                    <button
                      className="w-full flex justify-between items-center text-left text-base font-medium text-gray-900"
                      onClick={() => toggleQuestion('q3')}
                    >
                      How does Lead Scorpio's pay-per-meeting model work?
                      <FontAwesomeIcon icon={openQuestion === 'q3' ? faChevronUp : faChevronDown} className="h-5 w-5 text-gray-500" />
                    </button>
                    {openQuestion === 'q3' && (
                      <dd className="mt-2 text-base text-gray-600">
                        You only incur costs when a qualified lead attends a scheduled meeting. This minimizes your financial risk and maximizes ROI compared to traditional lead generation methods.
                      </dd>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            {/* Lead Generation & Qualification */}
            <div>
              <button
                className="w-full flex justify-between items-center text-left text-xl font-semibold text-gray-900"
                onClick={() => toggleSection('lead-gen')}
              >
                Lead Generation & Qualification
                <FontAwesomeIcon icon={openSection === 'lead-gen' ? faChevronUp : faChevronDown} className="h-6 w-6 text-gray-500" />
              </button>
              {openSection === 'lead-gen' && (
                <div className="mt-4 space-y-8">
                  <div>
                    <button
                      className="w-full flex justify-between items-center text-left text-base font-medium text-gray-900"
                      onClick={() => toggleQuestion('q4')}
                    >
                      How do you identify qualified leads for my business?
                      <FontAwesomeIcon icon={openQuestion === 'q4' ? faChevronUp : faChevronDown} className="h-5 w-5 text-gray-500" />
                    </button>
                    {openQuestion === 'q4' && (
                      <dd className="mt-2 text-base text-gray-600">
                        We leverage a multi-channel approach (excluding social media) such as email marketing, industry events, and targeted online advertising, aligned with your Ideal Customer Profile (ICP).
                      </dd>
                    )}
                  </div>
                  <div>
                    <button
                      className="w-full flex justify-between items-center text-left text-base font-medium text-gray-900"
                      onClick={() => toggleQuestion('q5')}
                    >
                      What is your process for qualifying leads?
                      <FontAwesomeIcon icon={openQuestion === 'q5' ? faChevronUp : faChevronDown} className="h-5 w-5 text-gray-500" />
                    </button>
                    {openQuestion === 'q5' && (
                      <dd className="mt-2 text-base text-gray-600">
                        Our qualification process assesses factors like lead intent, budget, and decision-making authority to ensure only the most promising leads reach your sales team.
                      </dd>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Meetings & Scheduling */}
            <div>
              <button
                className="w-full flex justify-between items-center text-left text-xl font-semibold text-gray-900"
                onClick={() => toggleSection('meetings')}
              >
                Meetings & Scheduling
                <FontAwesomeIcon icon={openSection === 'meetings' ? faChevronUp : faChevronDown} className="h-6 w-6 text-gray-500" />
              </button>
              {openSection === 'meetings' && (
                <div className="mt-4 space-y-8">
                  <div>
                    <button
                      className="w-full flex justify-between items-center text-left text-base font-medium text-gray-900"
                      onClick={() => toggleQuestion('q6')}
                    >
                      How do you secure meetings with qualified leads?
                      <FontAwesomeIcon icon={openQuestion === 'q6' ? faChevronUp : faChevronDown} className="h-5 w-5 text-gray-500" />
                    </button>
                    {openQuestion === 'q6' && (
                      <dd className="mt-2 text-base text-gray-600">
                        Our skilled appointment setters utilize proven strategies to engage with qualified leads and schedule confirmed meetings with decision-makers.
                      </dd>
                    )}
                  </div>
                  <div>
                    <button
                      className="w-full flex justify-between items-center text-left text-base font-medium text-gray-900"
                      onClick={() => toggleQuestion('q7')}
                    >
                      What happens if a qualified lead doesn't show up for a scheduled meeting?
                      <FontAwesomeIcon icon={openQuestion === 'q7' ? faChevronUp : faChevronDown} className="h-5 w-5 text-gray-500" />
                    </button>
                    {openQuestion === 'q7' && (
                      <dd className="mt-2 text-base text-gray-600">
                        We understand unforeseen circumstances occur. We'll work with you to reschedule the meeting and potentially identify alternative qualified leads.
                      </dd>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Results & Pricing */}
            <div>
              <button
                className="w-full flex justify-between items-center text-left text-xl font-semibold text-gray-900"
                onClick={() => toggleSection('results')}
              >
                Results & Pricing
                <FontAwesomeIcon icon={openSection === 'results' ? faChevronUp : faChevronDown} className="h-6 w-6 text-gray-500" />
              </button>
              {openSection === 'results' && (
                <div className="mt-4 space-y-8">
                  <div>
                    <button
                      className="w-full flex justify-between items-center text-left text-base font-medium text-gray-900"
                      onClick={() => toggleQuestion('q8')}
                    >
                      How can I measure the success of Lead Scorpio's services?
                      <FontAwesomeIcon icon={openQuestion === 'q8' ? faChevronUp : faChevronDown} className="h-5 w-5 text-gray-500" />
                    </button>
                    {openQuestion === 'q8' && (
                      <dd className="mt-2 text-base text-gray-600">
                        We provide regular reports on key metrics like the number of qualified meetings secured, sales cycle improvements, and ROI.
                      </dd>
                    )}
                  </div>
                  <div>
                    <button
                      className="w-full flex justify-between items-center text-left text-base font-medium text-gray-900"
                      onClick={() => toggleQuestion('q9')}
                    >
                      What is Lead Scorpio's pricing structure?
                      <FontAwesomeIcon icon={openQuestion === 'q9' ? faChevronUp : faChevronDown} className="h-5 w-5 text-gray-500" />
                    </button>
                    {openQuestion === 'q9' && (
                      <dd className="mt-2 text-base text-gray-600">
                        We offer transparent pricing plans tailored to your specific needs. Contact us for a free consultation to discuss your requirements and receive a customized quote.
                      </dd>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FAQ;
