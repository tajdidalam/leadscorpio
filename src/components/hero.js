import React from "react"

function Hero() {
  return (
    <div className="bg-white w-full">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              For business owners!
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className="text-red-600">Stop</span> Chasing Leads.{" "}
              <span className="text-green-600">Start</span> Meeting{" "}
              <span className="text-indigo-600">Qualified Clients.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Lead Scorpio generates qualified leads, sets meetings, and you
              only pay for meetings that happen.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="no-underline rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Schedule A Call
              </a>
              {/* <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Hero

// import React from "react"
// import { StaticImage } from "gatsby-plugin-image"

// const Hero = () => {
//   return (
//     <section className="py-24">
//       <div className="container max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
//         <div className="lg:w-1/2 lg:pr-8 text-center lg:text-left lg:mb-0 mb-8">
//           {" "}
//           {/* Center align text on small screens */}
//           <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8">
//             Stop Chasing Leads. Start Meeting Qualified Clients.
//           </h1>
//           <p className="text-lg text-gray-700 mb-12 mx-auto">
//             Lead Scorpio generates qualified leads, sets meetings, and you only
//             pay for meetings that happen.
//           </p>
//           <button className="bg-[#8B0000] text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300">
//             Get More Meetings Today
//           </button>
//         </div>
//         <div className="lg:w-1/2 mt-8 lg:mt-0">
//           <StaticImage
//             src="../images/hero-image.jpg"
//             alt="Hero"
//             placeholder="blurred"
//             layout="constrained"
//             className="w-full h-auto rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero

// import React from "react"
// import { StaticImage } from "gatsby-plugin-image"

// const Hero = () => {
//   return (
//     <section className="py-24">
//       <div className="container max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
//         <div className="lg:w-1/2 lg:pr-8 text-center lg:text-left">
//           {" "}
//           {/* Center align text on small screens */}
//           <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-4">
//             Stop Chasing Leads. Start Meeting Qualified Clients.
//           </h1>
//           <p className="text-lg text-gray-700 mb-8">
//             Lead Scorpio generates qualified leads, sets meetings, and you only
//             pay for meetings that happen.
//           </p>
//           <button className="bg-[#8B0000] text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300">
//             Get More Meetings Today
//           </button>
//         </div>
//         <div className="lg:w-1/2 mt-8 lg:mt-0">
//           <StaticImage
//             src="../images/hero-image.jpg"
//             alt="Hero"
//             placeholder="blurred"
//             layout="constrained"
//             className="w-full h-auto rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero

// import React from "react"
// import { StaticImage } from "gatsby-plugin-image"

// const Hero = () => {
//   return (
//     <section className="py-24">
//       <div className="container max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center">
//         <div className="lg:w-1/2 lg:pr-8">
//           <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-4">
//             Stop Chasing Leads. Start Meeting Qualified Clients.
//           </h1>
//           <p className="text-lg text-gray-700 mb-8">
//             Lead Scorpio generates qualified leads, sets meetings, and you only
//             pay for meetings that happen.
//           </p>
//           <button className="bg-[#8B0000] text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300">
//             Get More Meetings Today
//           </button>
//         </div>
//         <div className="lg:w-1/2 mt-8 lg:mt-0">
//           <StaticImage
//             src="../images/hero-image.jpg"
//             alt="Hero"
//             placeholder="blurred"
//             layout="constrained"
//             className="w-full h-auto rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero
