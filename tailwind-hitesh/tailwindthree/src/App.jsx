import './App.css'

function App() {
  

  return (
   <div className='flex h-screen '>
   <img className='w-1/2 md:block hidden' src="https://img.freepik.com/free-photo/healthy-food-dish-black-stone-background-healthful-set-including-vegetables-fruits-grape-apple-kiwi-pepper-lime-cabbage-zucchini-grapefruit-proper-nutrition-vegetarian-menu_155003-34696.jpg?w=1800&t=st=1700205309~exp=1700205909~hmac=abf3ac74ffcb514e30f625eed30252953d4ce74dbc3edd872d17f147177a23d7" alt="" />


    <div className='flex flex-col justify-center items-center w-full lg:w-1/2'>
       <div>

        <div>

          <div className='text-xl text-center font-bold lg:text-left'>
            <span className='text-green-600'>&#9650;</span>
            <span>FarmMan</span>
          </div>

          <div className='text-3xl text-center font-bold lg:text-left'>
            <h2>Hello,</h2>
            <h2>Welcome Back</h2>
          </div>

          <form action="" className='mt-8 w-[80%] mx-auto
           space-y-4
          lg:w-96'>

            <h4>Login to manage account</h4>

            <input className='border w-full px-4 py-2 rounded-xl' type="email" placeholder='email' />
            <input className='border w-full px-4 py-2 rounded-xl' type="password" placeholder='password' />

            <div className='text-blue-600 cursor-pointer hover:text-blue-400'>
              Forgot your password?
            </div>

            <button className='w-full bg-green-600 text-white rounded-xl py-2 font-bold hover:bg-green-500 '>Login</button>
             
          </form>


        </div>


       </div>
    </div>

   </div>
  )
}

export default App
