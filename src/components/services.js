import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faCheckCircle, faCalendarAlt, faShieldAlt, faUsers, faGraduationCap, faBullseye, faChalkboardUser } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
        <p className="text-base font-semibold leading-7 text-indigo-600">
          Our Services          
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Unleash the Power of Guaranteed Meetings: How Lead Scorpio Delivers Results
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lead Scorpio utilizes a targeted approach to generate qualified leads and secure guaranteed meetings with your ideal customers. Here's how:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <FontAwesomeIcon icon={faBullseye} className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                Targeted Lead Prospecting
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                We leverage a multi-channel approach (excluding social media) such as email marketing, industry events, and targeted online advertising to identify high-potential leads that perfectly align with your Ideal Customer Profile (ICP).
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <FontAwesomeIcon icon={faUsers} className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                Lead Qualification & Nurturing
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Our meticulous qualification process ensures only truly sales-ready leads reach your team. We then nurture these qualified leads with engaging content and personalized outreach, moving them closer to a buying decision.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <FontAwesomeIcon icon={faCalendarAlt} className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                Meeting Booking & Scheduling
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Our skilled appointment setters leverage proven strategies to secure confirmed meetings with qualified prospects. This ensures you only spend time with leads who are genuinely interested in your offerings.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                Pay-Per-Meeting Guarantee
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                This is where we truly stand out. You only pay for meetings with qualified leads who show up for the scheduled appointment. This minimizes your financial risk and maximizes your return on investment (ROI).
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <FontAwesomeIcon icon={faChalkboardUser} className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                Sales Enablement & Coaching
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
              This is where we truly stand out. You only pay for meetings with qualified leads who show up for the scheduled appointment. This minimizes your financial risk and maximizes your return on investment (ROI).
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Services;


// import React from 'react';

// const Services = () => {
//   return (
//     <div className="bg-white py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//             Unleash the Power of Guaranteed Meetings: How Lead Scorpio Delivers Results
//           </h2>
//           <p className="mt-6 text-lg leading-8 text-gray-600">
//             Lead Scorpio utilizes a targeted approach to generate qualified leads and secure guaranteed meetings with your ideal customers. Here's how:
//           </p>
//         </div>
//         <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
//           <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
//             <div className="relative pl-16">
//               <dt className="text-base font-semibold leading-7 text-gray-900">
//                 <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
//                   <svg className="h-6 w-6 text-current stroke-1 stroke-white" fill="none" viewBox="0 0 24 24"  aria-hidden="true">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M24 11h-2.051c-.469-4.725-4.224-8.48-8.949-8.95v-2.05h-2v2.05c-4.725.47-8.48 4.225-8.949 8.95h-2.051v2h2.051c.469 4.725 4.224 8.48 8.949 8.95v2.05h2v-2.05c4.725-.469 8.48-4.225 8.949-8.95h2.051v-2zm-11 8.931v-3.931h-2v3.931c-3.611-.454-6.478-3.32-6.931-6.931h3.931v-2h-3.931c.453-3.611 3.32-6.477 6.931-6.931v3.931h2v-3.931c3.611.454 6.478 3.319 6.931 6.931h-3.931v2h3.931c-.453 3.611-3.32 6.477-6.931 6.931zm1-7.931c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z" />
//                   </svg>
//                 </div>
//                 Targeted Lead Prospecting
//               </dt>
//               <dd className="mt-2 text-base leading-7 text-gray-600">
//                 We leverage a multi-channel approach (excluding social media) such as email marketing, industry events, and targeted online advertising to identify high-potential leads that perfectly align with your Ideal Customer Profile (ICP).
//               </dd>
//             </div>
//             <div className="relative pl-16">
//               <dt className="text-base font-semibold leading-7 text-gray-900">
//                 <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
//                   <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
//                   </svg>
//                 </div>
//                 Lead Qualification & Nurturing
//               </dt>
//               <dd className="mt-2 text-base leading-7 text-gray-600">
//                 Our meticulous qualification process ensures only truly sales-ready leads reach your team. We then nurture these qualified leads with engaging content and personalized outreach, moving them closer to a buying decision.
//               </dd>
//             </div>
//             <div className="relative pl-16">
//               <dt className="text-base font-semibold leading-7 text-gray-900">
//                 <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
//                   <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
//                   </svg>
//                 </div>
//                 Meeting Booking & Scheduling
//               </dt>
//               <dd className="mt-2 text-base leading-7 text-gray-600">
//                 Our skilled appointment setters leverage proven strategies to secure confirmed meetings with qualified prospects. This ensures you only spend time with leads who are genuinely interested in your offerings.
//               </dd>
//             </div>
//             <div className="relative pl-16">
//               <dt className="text-base font-semibold leading-7 text-gray-900">
//                 <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
//                   <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
//                   </svg>
//                 </div>
//                 Pay-Per-Meeting Guarantee
//               </dt>
//               <dd className="mt-2 text-base leading-7 text-gray-600">
//                 This is where we truly stand out. You only pay for meetings with qualified leads who show up for the scheduled appointment. This minimizes your financial risk and maximizes your return on investment (ROI).
//               </dd>
//             </div>
//           </dl>
//         </div>
//         <div className="mt-16 lg:mt-24">
//           <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
//             Optional Add-on Services:
//           </h3>
//           <div className="mt-10 pl-16">
//             <dt className="text-base font-semibold leading-7 text-gray-900">
//               <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
//                 <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
//                 </svg>
//               </div>
//               Sales Enablement & Coaching
//             </dt>
//             <dd className="mt-2 text-base leading-7 text-gray-600">
//               Equip your sales team to convert qualified leads into paying customers with our optional sales enablement training and coaching programs.
//             </dd>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;
