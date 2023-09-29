import {useState} from 'react' 
import { Link } from 'react-router-dom';
import logo from "../../component/image/4.jpg";
import { FiX } from 'react-icons/fi';
import { BiMenu } from 'react-icons/bi';

const Navbar = () => {
  const [open,setOpen] = useState(false);
  const handleNav = () => {
    setOpen(!open)
  }
  return (

          <div className="bg-gray-900  ">
             <div className='shadow-md w-full top-0 left-0  '>
            <div className='md:flex items-center justify-between  md:px-14 px-7 py-4'>
            <Link
                  to="/"
                  aria-label="Company"
                  title="Company"
                  className="inline-flex items-center"
                >
                  <div
            
          >
            <img
            src={logo}
            className="mx-auto object-cover rounded-full h-12 w-12 "
            alt=""
          />
          </div>
          <span class="ml-2 text-6 font-bold tracking-wide text-gray-100 uppercase">
          Online Education System
          </span>
                  
                </Link>
              
                
                
                <div className={open ? 'flex flex-col w-full transition-all duration-500 ease-in  gap-4 md:inline' : 'hidden md:inline'}>
                <ul className="md:flex md:items-center md:pb-0 pb-8 " >
                  <li className='md:ml-8 text-6 md:my-0 my-7'>
                    <Link
                      to="/"
                      className="nav-link"
                    >
                      HOME
                    </Link>
                  </li>
                  <li className='md:ml-8 text-6 md:my-0 my-7'>
                    <Link
                      to="/react"
                     
                      className="nav-link"
                     
                    >
                      Data Analytics
                    </Link>
                  </li>
                  
                  <li className='md:ml-8 text-6 md:my-0 my-7'>
                    <Link
                      to="/sql"
                     
                      className="nav-link"
                    >
                      SQL
                    </Link>
                  </li>
                  <li className='md:ml-8 text-6 md:my-0 my-7'>
                    <Link
                      to="/object"
                     
                      className="nav-link"
                    >
                      OBJECT
                    </Link>
                  </li>
                  <li className='md:ml-8 text-6 md:my-0 my-7'>
                    <Link
                      to="/about"
                     
                      className="nav-link"
                    >
                      ABOUT US
                    </Link>
                  </li>
                  <li className='md:ml-8 text-6 md:my-0 my-7'>
                    <Link
                      to="https://applications.oes.com.ng/OESWebApp/"
                    
                      className="bg-indigo-600 text-gray-100 font-medium py-2 px-4 rounded md:ml-8 hover:bg-indigo-700 duration-500"
                    >
                      <button className=' p-3'>Login</button>
                    </Link>
                  </li>
                  

                  <li className='md:ml-8 text-6 md:my-0 my-7'>
                    <Link
                      to="https://oes.com.ng/trainingstudent"
                     
                      className="bg-indigo-600 text-gray-100 font-medium py-2 px-4 rounded md:ml-8 hover:bg-indigo-700 duration-500"
                    >
                      <button className=' p-3'>Sign Up</button>
                    </Link>
                  </li>
                </ul>
                </div>
                {/* <div className='  bg-gray-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-12 transition-all duration-500 ease-in'></div> */}
                
                <div onClick={handleNav} className='text-3xl absolute right-8 text-white top-10 cursor-pointer md:hidden self-start nav-link'>
                     {!open ? <BiMenu/> : <FiX/>}
                </div>
              

            </div>

        </div>
          </div>
  )
}

export default Navbar