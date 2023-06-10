import React, { useEffect, useState } from "react";
import logo from "../image/cloudy2.png";
import Link from "next/link";
import { CgProfile } from "react-icons/cg"
import { IoIosLogOut } from "react-icons/io"
import { useRouter } from 'next/router';



let login = false;

const Navigation = () => {




  const [userIconClick, setUserIconClick] = useState(false);
  const [loginState, setLoginState] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false);

  const router = useRouter();


  useEffect(() => {
    const localuserId = localStorage.getItem("userid");
    if (localuserId) {
      sessionStorage.setItem("userid", localuserId);
    }
    const item = sessionStorage.getItem('userid')
    if (item) {
      setLoggedIn(true);
      setLoginState(true);
    }
  }, [])

  const userInfoClick = () => {
    console.log("clicked");
  }

  const LogOutHandle = () => {
    setUserIconClick(!userIconClick);
    router.push('/');
    window.location.reload(true);
    sessionStorage.removeItem("userid");
    localStorage.removeItem("userid");
  }


  return (
    <>


      <nav class=" bg-navbar px-10 sm:px-4 fixed w-full z-20 top-0 left-0 ">





        <div className="flex h-20 ml-10">
          <div className="flex items-center">
            <img className=" w-12 mr-4" src={logo.src}></img>
            <Link class=" text-white text-3xl font-semibold whitespace-nowrap dark:text-white" href="/">Weather App</Link>
          </div>

          <div class="container flex flex-wrap items-center justify-end mr-10">


            {
              loginState ? <div class="flex md:order-2">
                <img onClick={() => setUserIconClick(!userIconClick)} class="ml-10 w-12 h-12 p-1 rounded-full ring-2 ring-blue-800 dark:ring-gray-500 hover:ring-yellow-400 cursor-pointer transition-all " src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png" alt="Bordered avatar"></img>

                {
                  userIconClick ?

                    <div class="absolute w-40 my-16 right-10 z-10 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                      <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li >
                          <Link onClick={() => setUserIconClick(!userIconClick)} href="/user" class="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"><div className="flex items-center"><CgProfile /><div className="ml-2">Profile</div></div></Link>
                        </li>
                        <li>
                          <a onClick={LogOutHandle} href="#" class="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"><div className="flex items-center"><IoIosLogOut /><div className="ml-2">Logout</div></div></a>
                        </li>

                      </ul>
                    </div> : <div></div>
                }
              </div> :


                <Link className="flex md:order-2 bg-white py-3 px-4 rounded" href="/login">Log In</Link>


            }








            <div class=" bg-navbar hidden md:flex md:w-auto md:order-1" >
              <ul class="flex  flex-col  border border-gray-100 rounded-lg   md:flex-row md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">


                <li className="flex flex-col items-center justify-center px-4 h-20 border-b-4 border-b-transparent ">
                  <Link class="block  text-white text-base bg-blue-700 rounded  md:bg-transparent md: md:p-0 dark:text-white" href="/">
                    {
                      router.pathname == "/" ? <div className=" border-b-4  border-b-yellow-400 py-7 px-2">
                        Home
                      </div> : <div className=" border-b-4 border-b-transparent py-7 px-2">Home</div>
                    }
                  </Link>
                </li>


                <li className="flex flex-col items-center justify-center px-4 h-20 border-b-4 border-b-transparent">
                  <Link class="block  text-white text-base bg-blue-700 rounded  md:bg-transparent md: md:p-0 dark:text-white" href="/blog">
                    {
                      router.pathname == "/blog" ? <div className=" border-b-4 border-b-yellow-400 py-7 px-2">
                        Blogs
                      </div> : <div className=" border-b-4 border-b-transparent py-7 px-2">Blogs</div>
                    }
                  </Link>

                </li>







                <li className="flex flex-col items-center justify-center px-4 h-20 border-b-4 border-b-transparent">
                  <Link class="block  text-white text-base bg-blue-700 rounded  md:bg-transparent md: md:p-0 dark:text-white" href="/dropdown">
                    {
                      router.pathname == "/dropdown" ? <div className=" border-b-4 border-b-yellow-400 py-7 px-2">
                        Dropdown
                      </div> : <div className=" border-b-4 border-b-transparent py-7 px-2">Dropdown</div>
                    }
                  </Link>

                </li>


                <li className="flex flex-col items-center justify-center mr-4 px-4 h-20 border-b-4 border-b-transparent">
                  {
                    loggedIn == true ? <Link class="block  text-white text-base bg-blue-700 rounded  md:bg-transparent md: md:p-0 dark:text-white" href="/classify">
                      {
                        router.pathname == "/classify" ? <div className=" border-b-4 border-b-yellow-400 py-7 px-2">
                          Classify
                        </div> : <div className=" border-b-4 border-b-transparent py-7 px-2">Classify</div>
                      }
                    </Link> :
                      <Link class="block  text-white text-base bg-blue-700 rounded  md:bg-transparent md: md:p-0 dark:text-white" href="/login">

                        <div className=" border-b-4 border-b-transparent py-7 px-2">Classify</div>

                      </Link>
                  }

                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* 
      <div className={styles.NavLogo}>
        <div className={styles.logoTitle}>
          <div className={styles.logo}>
            <img src={logo.src}></img>
          </div>
          <div className={styles.PageTitle}>
            <h2>
              <Link href="/">Weather App</Link>
            </h2>
          </div>
        </div>
        <div className={styles.Navbar} class="mr-10">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blogs</Link>
            </li>
            <li className={styles.shopNav}>
              Information
              <ul className={styles.productType}>
                <li className={styles.med}>
                  Weather
                  <ul className={styles.medOptions}>
                    <li>Daily </li>
                    <li>Weekly </li>
                    <li>Monthly</li>
                  </ul>
                </li>
                <li className={styles.food}>
                  Seasonal
                  <ul className={styles.foodOptions}>
                    <li>Summer</li>
                    <li>Rainy</li>
                    <li>Autumn</li>
                    <li>Late Autumn</li>
                    <li>Winter</li>
                    <li>Spring</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/classify">Classify</Link>
            </li>
            {
              login ?
                <>
                  <img onClick={() => setUserIconClick(!userIconClick)} class="ml-10 w-10 h-10 p-1 rounded-full ring-2 ring-blue-800 dark:ring-gray-500 hover:ring-gray-700 cursor-pointer transition-all " src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png" alt="Bordered avatar"></img>


                  {
                    userIconClick ?
                      <div className="z-12 my-10">

                        <div class="absolute right-10 z-10 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                          <div role="none">
                            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>

                          </div>
                        </div>
                      </div> : <div></div>
                  }

                </>
                : <button className={styles.loginbtn}>
                  <Link href="/login">Log In</Link>
                </button>
            }
          </ul>
        </div>
      </div> */}

    </>

  );
};

export default Navigation;
