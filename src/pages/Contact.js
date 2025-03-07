import React from "react";

const Contact = () => {
  return (
    <div className="font-chakra-petch">
      <div
        className="bg-cover bg-no-repeat bg-center h-64 md:h-96 lg:h-120 scroll-smooth "
        style={{ backgroundImage: `url('/assets/banner/b2.jpg')` }}
      >
        <div className="flex flex-col text-center pt-32">
          <h1 className="font-bold text-4xl text-red-700">Reach Out to Us</h1>
          <p className="text-orange-600 text-2xl pt-5">
            We are only a step away from you
          </p>
        </div>
      </div>

      <div className="flex flex-row flex-wrap m-4">
        {/* Map */}
        <div className="bg-slate-100 p-3 flex-1 rounded-l-lg">
          <iframe
            src="https://www.google.com/maps/place/Thikana,+The+AJs+club/@19.1413776,72.9959482,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c13a2b6f15ef:0x23d19caf02077b16!8m2!3d19.1413776!4d72.9985231!16s%2Fg%2F11x1yntzg0?authuser=0&entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D"
            // width="600"
            // height="450"
            allowfullscreen
            loading="lazy"
            className=" inset-0 w-full h-full border-4 border-gray-500 rounded-sm"
          ></iframe>
        </div>

        {/* Contact details */}
        <div className="bg-slate-100 p-5 flex-1 rounded-r-xl">
          <div className="font-bold text-2xl text-center p-3">
            <h1>Contact Us</h1>
          </div>
          <div className="flex flex-col text-center">
            <p className="p-3">
              <span className="font-bold">Address: </span>Airoli , Navi Mumbai, Maharashtra.
            </p>
            <a href="tel:+1 (234) 567-890" className="p-3">
              <span className="font-bold">Phone: </span>Call us at +91 9987591440
            </a>
            <p className="p-3">
              <span className="font-bold">Hours: </span>From 9 a.m To 5 p.m
            </p>
            <p className="p-5 text-start text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              quos iusto rerum architecto a eaque consequuntur impedit! Harum
              earum iste, suscipit soluta, culpa necessitatibus quia sit nulla
              doloremque officia cum.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Velit hic veniam unde numquam in ullam
              laudantium odit explicabo itaque! Voluptate similique, accusantium
              consequatur provident soluta quaerat maxime adipisci vero sed.
            </p>
          </div>
        </div>
      </div>

      {/* Contact form  */}
      <div className="bg-white py-8">
        <div className="max-w-4xl mx-auto bg-gray-200 border-2 border-gray-200 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl text-green-500 font-semibold pb-8 text-center">Leave Us A Message</h2>
          <form>
            <div className="mb-4 flex flex-row">
              <div className="pr-44">
                  <label for="firstName" className="font-semibold block text-gray-600">
                  First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full border rounded px-3 py-3 focus:outline-none focus:border-blue-500"
                    required
                  />
              </div>

              <div>
                  <label for="lastName" className="block font-semibold text-gray-600">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full border rounded px-3 py-3 focus:outline-none focus:border-blue-500"
                    required
                  />
              </div>
            </div>

            <div className="mb-4">
              <label for="email" className="font-semibold block text-gray-600">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email id"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label for="message" className="font-semibold block text-gray-600">
              Write Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message here...."
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                rows="6"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
              >
              Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
