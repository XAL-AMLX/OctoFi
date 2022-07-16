import React from 'react'
import Image from 'next/image'



const Contenttwo = () => (

  
    <div className="lg:flex lg:flex-column lg:justify-center text-indigo-100 mt-24">




      


      
      
      <div className="m-20 mt-32  lg:m-10 flex   justify-center  place-content-center content-center drop-shadow-2xl   brightness-100  ">
        <div className="px-10  rounded-3xl  border hover:border border-transparent bg-gray-900 border-l-yellow-500 hover:border-l-transparent hover:border-t-yellow-500   text-center tracking-widest  font-thin md:font-thin  w-80 h-40 lg:w-72 lg:h-48 hover:scale-105 ">
          <div className="text-center ">
            <div className=" flex-row pt-3  text-base  bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-green-500">OCTO STAKE</div>
            <div className=" flex-row  pt-3 text-sm text-slate-400"> Stake OCTO to earn rewards</div>
            <button type="button" className="border border-slate-700  hover:border  mt-3 lg:mt-4 px-3 py-1 rounded-2xl   text-yellow-500 brightness-90 hover:brightness-100 ">
              Enter App
            </button>
          </div>
        </div>
      </div>

      <div className="m-20 lg:m-10 flex justify-center  place-content-center content-center  drop-shadow-2xl brightness-100 ">
        <div className="px-10 rounded-3xl  border hover:border border-transparent bg-gray-900 border-l-green-600 hover:border-t-green-600 hover:border-l-transparent  text-center tracking-widest  font-thin md:font-thin  w-80 h-40 lg:w-72 lg:h-48   hover:scale-105 ">
          <div className="text-center ">
            <div className=" flex-row pt-3 text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-green-500">OCTO FARM</div>
            <div className=" flex-row  pt-3 text-sm text-slate-400">Supply liquidity to earn OCTO</div>
            <button type="button" className="border border-slate-700 hover:border bg-gradient-to-r mt-3 lg:mt-4 px-3 py-1 rounded-2xl  text-green-600 brightness-125 hover:brightness-150">
              Enter App
            </button>
          </div>
        </div>
      </div>

      <div className="m-20 lg:m-10 flex justify-center  place-content-center content-center drop-shadow-2xl brightness-100  ">
        <div className="px-10 rounded-3xl  border hover:border border-transparent bg-gray-900 border-l-yellow-500  hover:border-t-yellow-500 hover:border-l-transparent text-center tracking-widest  font-thin md:font-thin   w-80 h-40  lg:w-72 lg:h-48    hover:scale-105 ">
          <div className="text-center ">
            <div className=" flex-row pt-3 text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-green-500">OCTO SWAP</div>
            <div className=" flex-row  pt-5 text-sm text-slate-400">Swap tokens at ease</div>
            <button type="button" className="border border-slate-700 hover:border bg-gradient-to-r mt-5 lg:mt-7 px-3 py-1 rounded-2xl  text-yellow-500  brightness-90 hover:brightness-100">
              Enter App
            </button>
          </div>
        </div>
      </div>
      
    </div>
);

export default Contenttwo;