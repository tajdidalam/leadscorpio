import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote: "Lead Scorpio has truly transformed our business. Over the past five months, we've consistently secured around 20 meetings monthly, converting over 5 of them into paying customers. Their professionalism and dedication are unmatched. Highly recommend!",
    name: "Sarah Johnson",
    position: "Marketing Director at TechWave Solutions",
  },
  {
    quote: "Thanks to Lead Scorpio, we're meeting more prospective customers than ever. In the last 45 days, we've secured 14 new clients. Their expertise and dedication are evident in every interaction.",
    name: "Mike Thompson",
    position: "Sales Manager at Innovatech Corp",
  },
  {
    quote: "Lead Scorpio has been instrumental in our business growth. Their targeted approach consistently brings in quality meetings, leading to more clients. We couldn't be happier!",
    name: "Emily Roberts",
    position: "CEO of NexGen Enterprises",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <div className="bg-white py-24 sm:py-32  w-full">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
          Testimonials          
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          What Our Clients Think
          </p>
          
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white">
              <div className="flex flex-col justify-center items-center bg-white p-8 rounded-lg text-center">
                <p className="text-lg text-gray-800 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
