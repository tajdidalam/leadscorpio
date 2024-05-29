import React from "react"
import { Helmet } from "react-helmet"

import Header from "../components/header"
import Hero from "../components/hero"
import Features from "../components/features"
import LeadCapture from "../components/leadcapture"
import TestimonialSlider from "../components/testimonialslider"
import Services from '../components/services'
import FAQ from "../components/faq"

const IndexPage = () => (
  <div className="min-h-screen bg-white flex flex-col justify-center items-center">
    <Helmet>
      <title>Lead Scorpio</title>
      <meta
        name="description"
        content="A simple single page website built with Gatsby, Tailwind CSS, and SEO plugins."
      />
    </Helmet>

    <Header />

    <Hero />

    <Features />

    <LeadCapture />

    <TestimonialSlider/>

    <Services/>

    <FAQ/>

    <footer className="text-center mt-8">
      <p className="text-gray-600">
        &copy; {new Date().getFullYear()} Lead Scorpio
      </p>
    </footer>
  </div>
)

export default IndexPage

