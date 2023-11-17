
import './App.css'

function App() {
  

  return (
    <>
     <nav className='text-white w-full
     justify-between
      bg-indigo-200
     flex
     px-4 md:px-4 items-center'>
        <div className='text-2xl font-bold
         text-indigo-700'>
          PW Skills
        </div>
        <ul className='md:flex font-semibold hidden'>
          <li className='mx-[10px] cursor-pointer text-black'>Home</li>
          <li className='mx-[10px] cursor-pointer text-black '>About</li>
          <li className='mx-[10px] cursor-pointer text-black'>Contact Us</li>
        </ul>

        <div className='hidden md:block text-white
        px-2 py-2 bg-indigo-700 rounded font-bold cursor-pointer'>
          LogIn/SignUp
        </div>
        <div className='md:hidden'>
          <a href="#" className='text-4xl'>&#8801;</a>
        </div>
      </nav>

      {/* Navbar ends here*/ }

    {/*  <header className='w-full h-auto'>
        <img src="" alt="" />
        <img src="" alt="" />
      </header> */}


      <div className='h-auto w-100 flex flex-wrap
      flex-col items-center text-center p-10 '>

        <div className='text-white w-full items-center
        flex flex-wrap flex-col
         h-auto '>
          <p className='text-indigo-500 font-bold text-3xl md:text-4xl text-center'>"Pure Hardwork, No shortcuts!"</p>
          <div className='w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl text-center md:mt-4 mb-12'></div>
        </div>

        <div className='w-full flex flex-wrap justify-evenly text-white'>
          <div className='w-46 flex flex-col items-center mb-12'>
            <img className='w-44 h-44' src="https://pwskills.com/images/homePage/statistics1.png" alt="" />
            <p className='text-3xl font-bold text-white'>600+</p>
            <p className='text-2xl font-bold text-gray-500'>Different Courses</p>
          </div>

          <div className='w-46 flex flex-col items-center mb-12'>
            <img className='w-44 h-44' src="https://pwskills.com/images/homePage/statistics2.png" alt="" />
            <p className='text-3xl font-bold text-white'>55%</p>
            <p className='text-2xl font-bold text-gray-500'>Average Salary Hike</p>
          </div>


          <div className='w-46 flex flex-col items-center mb-12'>
            <img className='w-44 h-44' src="https://pwskills.com/images/homePage/statistics3.png" alt="" />
            <p className='text-3xl font-bold text-white'>12000+</p>
            <p className='text-2xl font-bold text-gray-500'>Career Transitions</p>
          </div>
        </div>

      </div>


      {/*Our students section*/}


    <div className='h-auto w-100 flex flex-wrap first-letter
      flex-col items-center text-center p-10 '>

      <div className='text-white w-full items-center
        flex flex-wrap flex-col
         h-auto '>
          <p className='text-indigo-500 font-bold text-3xl md:text-4xl text-center'>Our Products</p>
          <div className='w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl text-center md:mt-4 mb-12'></div>
        </div>


        <div className='w-[100%] h-auto flex flex-wrap justify-evenly text-white items-center'>

           <div className='w-64 flex flex-col items-center mb-12  rounded-xl p-2'>
            <img src="https://pwskills.com/images/homePage/products-icon1.png" alt="" />
            <p className='text-2xl font-bold mb-4 mt-2'>PW Skills Lab</p>
            <p className='text-2xl font-bold'>Buying a new PC is no longer required, Access unlimited computing power!</p>
           </div>

           <div className='w-64 flex flex-col items-center mb-12  rounded-xl p-2'>
            <img src="https://pwskills.com/images/homePage/products-icon4.png" alt="" />
            <p className='text-2xl font-bold mb-4 mt-2'>PW Skills Lab</p>
            <p className='text-2xl font-bold'>Buying a new PC is no longer required, Access unlimited computing power!</p>
           </div>


           <div className='w-64 flex flex-col items-center mb-12  rounded-xl p-2'>
            <img src="https://pwskills.com/images/homePage/products-icon2.png" alt="" />
            <p className='text-2xl font-bold mb-4 mt-2'>PW Skills Lab</p>
            <p className='text-2xl font-bold'>Buying a new PC is no longer required, Access unlimited computing power!</p>
           </div>


           <div className='w-64 flex flex-col items-center mb-12  rounded-xl p-2'>
            <img src="https://pwskills.com/images/homePage/products-icon3.png" alt="" />
            <p className='text-2xl font-bold mb-4 mt-2'>PW Skills Lab</p>
            <p className='text-2xl font-bold'>Buying a new PC is no longer required, Access unlimited computing power!</p>
           </div>


           <div className='w-64 flex flex-col items-center mb-12 rounded-xl p-2'>
            <img src="https://pwskills.com/images/homePage/products-icon5.png" alt="" />
            <p className='text-2xl font-bold mb-4 mt-2'>PW Skills Lab</p>
            <p className='text-2xl font-bold'>Buying a new PC is no longer required, Access unlimited computing power!</p>
           </div>

        </div>







          
    </div>









     







    </>
  )
}

export default App
