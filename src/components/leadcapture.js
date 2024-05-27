import React from "react"
import { InlineWidget } from "react-calendly"

const LeadCapture = () => {
  return (
    <div className="bg-white py-24 sm:py-32 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Schedule Your Free Consultation Now!
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Schedule Your Free Growth Consultation & Discover How We Can Help
            You Secure Qualified Meetings
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Tired of chasing leads that never convert? Get a free consultation
            to learn how Lead Scorpio's targeted approach and pay-per-meeting
            model can generate qualified leads ready to meet with you and
            accelerate your sales pipeline.
          </p>
        </div>
        <div className="w-full">
          <InlineWidget url="https://calendly.com/mail2sourov/get-more-meeting-with-porspective-clients" />
        </div>
      </div>
    </div>
  )
}

export default LeadCapture
