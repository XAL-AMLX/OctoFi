import Image from 'next/image'
import React from 'react'




const Navbar = () => (
 <div className="flex flex-row mb-56 ">
  <div className="ml-4 mr-14   m-3  md:ml-4 md:mr-40 font-sans lg:ml-4 lg:mr-52 text-white bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500  hover:text-blue-400 font-extralight text-3xl ">
    <h1>OCTO</h1>
  </div>
   <div className="mt-5 mb-5 md:ml-32 ml-8 lg:ml-56 font-sans mr-2 text-sm lg:text-lg text-indigo-400 ">
    <h1>Docs</h1>
  </div>
   <div className="mt-5 mb-5 ml-3 md:ml-5 lg:ml-16 mr-2 font-sans  text-sm lg:text-lg text-indigo-400 ">
    <h1>Earn</h1>
  </div>
   <div className="mt-5 mb-5 ml-3 md:ml-5 lg:ml-16 mr-2 font-sans text-sm lg:text-lg text-indigo-400 ">
    <h1>Risks</h1>
  </div>
   <div className="mt-5 mb-5 ml-3 md:ml-10  lg:ml-16 mr-6 font-sans text-sm lg:text-lg text-indigo-400 ">
    <h1>Rewards</h1>
  </div>
 </div>
)



export default Navbar
