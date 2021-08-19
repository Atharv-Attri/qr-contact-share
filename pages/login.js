import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from './_footer.js'
export default function login() {
    return (
        <div>
            <section className="flex flex-col items-center h-screen md:flex-row ">
                <div className="hidden w-full h-screen bg-white lg:block md:w-1/3 lg:w-2/3">
                    <img src="https://dummyimage.com/1000x800/F3F4F7/000000" alt="" className="object-cover w-full h-full" />
                </div>
                <div className="flex items-center justify-center w-full h-screen px-6 bg-white md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12">
                    <div className="w-full h-100">
                        <a className="flex items-center w-32 mb-4 font-medium text-blueGray-900 title-font md:mb-0">
                            <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-300 to-blue-600">
                            </div>
                            <h2 className="text-lg font-bold tracking-tighter text-black uppercase duration-500 ease-in-out transform ttransition hover:text-lightBlue-500 dark:text-blueGray-400"> NameOfThisProject </h2>
                        </a>
                        <h1 className="mt-12 text-2xl font-semibold text-black tracking-ringtighter sm:text-3xl title-font">Log in to your account</h1>
                        <form className="mt-6" action="#" method="POST">
                            <div>
                                <label className="block text-sm font-medium leading-relaxed tracking-tighter text-blueGray-700">Email Address</label>
                                <input type="email" name="" id="" placeholder="Your Email " className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 " />
                            </div>
                            <div className="mt-4">
                                <label className="block text-sm font-medium leading-relaxed tracking-tighter text-blueGray-700">Password</label>
                                <input type="password" name="" id="" placeholder="Your Password" minLength="6" className="w-full px-4 py-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 " required="" />
                            </div>
                            <div className="mt-2 text-right">
                                <a href="#" className="text-sm font-semibold leading-relaxed text-blueGray-700 hover:text-black focus:text-blue-700">Forgot Password?</a>
                            </div>
                            <button type="submit" className="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-blueGray-800 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 ">Log In</button>
                        </form>
                        <hr className="w-full my-6 border-blueGray-300" />
                        <div className="flex justify-enter">
                            
          <div className="container items-center py-12 text-blueGray-500 ">
            <div className="p-2 mx-auto my-6 bg-white border rounded-lg shadow-xl ">
              <div className="flex-grow p-6 py-2 rounded-lg">
                <div className="inline-flex items-center w-full ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-4 icon icon-tabler icon-tabler-alert-triangle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="12" r="9"></circle>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    <polyline points="11 12 12 12 12 16 13 16"></polyline>
                  </svg>
                  <strong> Note</strong>
                </div>
                <p className="my-4 text-sm font-semibold tracking-wide "> Don't reuse password!! I know nothing about cybersecurity! </p>
              </div>
            </div>
          </div>
        
                        </div>
                        <p className="mt-8 text-center">Need an account? <a href="#" className="font-semibold text-blue-500 hover:text-blue-700">Sign Up</a></p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
