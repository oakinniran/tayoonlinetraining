import React from 'react'
import logo from "../../component/image/2.jpg";
import cat from "../../component/image/18.jpg";
import cap from "../../component/image/19.jpg";
import clone from "../../component/image/22.jpg";
import lone from "../../component/image/17.jpg";




function Page() {
  return (
    <div>
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={lone}
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Hremsoft Brand new
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Everything you
            <br className="hidden md:block" />
            can imagine{' '}
            <span className="inline-block text-deep-purple-accent-400">
              is real
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
          Take an online course. There are many online courses available that can teach you the basics of programming.
          </p>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
          Read books and articles. There are many books and articles available that can teach you about programming.
          </p>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
          Work on projects. One of the best ways to learn programming is by working on projects.
          </p>
          
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
          Attend a programming training. If you want to learn programming quickly, you can attend a programming training on Hremsoft.oes.com.ng. Hremsoft typically offer intensive training in a short period of time.
          </p>
         
          <div className="flex items-center">
            <a
              href="https://applications.oes.com.ng/OESWebApp/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-violet-700 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Join our lecture class
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
    <section>
    <div className='bg-indigo-50'>
         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src={logo}
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0">
            
            <a
              href="/react"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
             REACT
            </a>
            <p className="mb-2 text-gray-700">
            Work on projects. One of the best ways to learn programming is by working on projects. This will give you the opportunity to apply what you've learned and to develop your problem-solving skills.
            </p>
            <a
              href="/react"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src={cat}
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0">
           
            <a
              href="/object"
              aria-label="Category"
              title="Simple is better"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Object Oriented Programming
            </a>
            <p className="mb-2 text-gray-700">
            Attend a programming training. If you want to learn programming quickly, you can attend a programming training on Hremsoft.oes.com.ng. Hremsoft typically offer intensive training in a short period of time.
            </p>
            <a
              href="/object"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src={cap}
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href=""
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </a>
              <span className="text-gray-600"> — 2 August 2023</span>
            </p>
            <a
              href="/sql"
              aria-label="Category"
              title="Film It!"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Structured Query Language
            </a>
            <p className="mb-2 text-gray-700">
            Read books and articles. There are many books and articles available that can teach you about programming. Some popular books include Mysql etc.
            </p>
            <a
              href="/sql"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src={clone}
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href=""
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                Training
              </a>
              <span className="text-gray-600"> — 2 August 2023</span>
            </p>
            <a
              href="/training"
              aria-label="Category"
              title="Film It!"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Teachers Training
            </a>
            <p className="mb-2 text-gray-700">
              Teachers are trained on how to digitised their content and earn money from it.
            </p>
            <a
              href="/training"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
   
    
    </div>
        
  )
}

export default Page