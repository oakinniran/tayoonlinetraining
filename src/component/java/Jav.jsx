import React from 'react'
import logo from "../../component/image/23.jpg";
import cat from "../../component/image/24.jpg";
import cap from "../../component/image/25.jpg";
import lone from "../../component/image/online3.jpg";

const Jav = () => {
  return (
    <div>
      <img
          className="object-cover w-full h-78 rounded shadow-lg lg:rounded-none lg:w-full lg:shadow-none md:h-96 lg:h-85"
          src={lone}
          alt=""
        />
    <div className='bg-violet-50'>
      
    

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          
        Data Analytics
        </h2>
      </div>

      <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
      <div className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
        <img
          className="object-cover w-full h-56 rounded shadow-lg md:h-64 lg:h-80"
          src={logo}
          alt=""
        />
        
      
            <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700 mt-8 px-4"
            >
             Data, Cleansing Data and You
            </a>
            <p className="mb-2 text-gray-700 px-4">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
          
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <div className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
        <img
          className="object-cover w-full h-56 rounded shadow-lg md:h-64 lg:h-80"
          src={cat}
          alt=""
        />
       
            <a
              href="/"
              aria-label="Category"
              title="Simple is better"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700 mt-8 px-4 "
            >
              Data Object and Visualization
            </a>
            <p className="mb-2 text-gray-700 px-4">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
           
          </div>
        </div>

        
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <div className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
        <img
          className="object-cover w-full h-56 rounded shadow-lg md:h-64 lg:h-80"
          src={cap}
          alt=""
        />
       
            <a
              href="/"
              aria-label="Category"
              title="Film It!"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700 mt-8 px-4"
            >
              Python
            </a>
            <p className="mb-2 text-gray-700 px-4">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
           
          </div>
        </div>
      </div>
      <div className=' pt-4 mb-20'>
        <h4 className='text-3xl uppercase mb-2'><b>Expectations</b></h4><br></br>
        <h6 className=' md-3'><b>Data Analytics Training Outline</b></h6><br></br>
        <p>Understanding SQL Basics, Review the categories of SQL Commands, Understand the different Data Types, What are Constraints, How to use Operators, Conditional statements in SQL, Understanding SELECT statements, Working with Subqueries, How does JOINS work, Understanding Python Basics, Python Fundamentals, Operators, Control flow, Functions, Data Structure, Iterations, Exploratory Data Analysis, Data Collection, Data Cleaning, Univariate Analysis, Bivariate Analysis, Data Visualization, Working with python charting libraries, matplotlib, seaborn, plotly, Building Interactive dashboard, Capstone Portfolio project, Big-Query, Excel, Power Query, Power Pivot, Tabulet.</p>
      </div>
      <div className="flex items-center">
        <p className=' relative px-2'>At the of end the program you must be able to build the dashboard </p><br/><br/>
            <a
              href="https://consoto-sales.streamlit.app/"
              className="inline-flex items-center justify-center h-8 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-violet-700 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none uppercase"
            >
              Click Here
            </a>
            </div>
      
    </div>
    
    </div>
    </div>
  )
}

export default Jav