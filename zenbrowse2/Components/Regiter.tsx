import Image from 'next/image';
import React, { useState } from 'react'

const Regiter:React.FC = () => {
    const [isSigningUP,setSigning] = useState<boolean>(true);

    const [fullName,setFullname] = useState<string>("");
    const [Email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [flasher,setFlasher] = useState<string>("");
    const [isLoading,setLoad] = useState<boolean>(false);
    const toggle = () =>{
        setSigning(!isSigningUP);
        setFlasher("");
    }
    const SignUP = async  () => {
        setLoad(true);
        if(fullName.trim()!==""){
            if(Email.trim()!==""){
                if(password.trim().length > 7){
                //    await create_my_Account(fullName,Email,password)
                }
                else{
                    console.log("Short PW");
                }
            }
            else{
                console.log("Empty mail");
            }
        }
        else{
            console.log("No Name");
        }
    } 
    const Login = async () =>{
        setLoad(true);
        if(Email.trim()!==""){
            if(password.trim().length>7){
                // login_to_account(Email,password)
            }
        }
    }
  return (
    <>
       <div className=' h-screen w-full flex items-center justify-center gap-10'>
        <div className=' h-full relative'>
            <Image
                width={2000}
                height={2000}
             className=' scale-75 h-full max-sm:hidden' 
             src="https://i.ibb.co/QbRfj6W/GOLDEN-HOUR-1.png"
            alt="NF" />
            {/* <p className=' absolute top-[300px] text-6xl text-center text-dark_bg_secondry/40 font-bold'>
            Elevating web navigation through seamless innovation.
            </p> */}
        </div>
        <div className=' h-fit w-[350px] shadow-lg'>
               {
                isSigningUP ? 
                <>
                    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold 
                        leading-9 tracking-tight text-gray-900">Welcome to zen browse </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6"  method="POST">

                        <div>
                            <label  className="block text-sm font-medium leading-6 text-gray-900">Full name</label>
                            <div className="mt-2">
                            <input id="email" name="name" type="text"  value={fullName}
                            onChange={(e)=>{
                                setFullname(e.target.value);
                            }}
                            required className="block w-full rounded-md border-0 py-1.5
                                text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                                placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                 px-3
                                focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>
                        <div>
                            <label  className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                            <input id="email" name="email" type="email"  value={Email}
                            onChange={(e)=>{
                                setEmail(e.target.value);
                            }}
                            required className="block w-full rounded-md border-0 py-1.5
                                text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                                placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                px-3
                                focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                            <label  className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="text-sm">
                                <p className="font-semibold text-indigo-600
                                hover:text-indigo-500">Enter password !</p>
                            </div>
                            </div>
                            <div className="mt-2">
                            <input id="password" name="password" type="password" 
                            required  value={password} onChange={(e)=>{
                                setPassword(e.target.value);
                            }} 
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 
                            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-3
                            focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>

                        <div>
                            {isLoading?
                            <div className=' w-full text-center'>Loading...</div>:
                            <div onClick={SignUP} className="flex w-full justify-center rounded-md bg-indigo-600
                              py-1.5 text-sm font-semibold leading-6 text-white shadow-sm px-3
                              hover:bg-indigo-500 outline focus-visible:outline-2
                               focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</div>
                            }
                        </div>
                        </form>
                        <p className=' text-center pt-3'>{flasher}</p>
                        <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an Account?
                        <p onClick={toggle} className="font-semibold hover:cursor-pointer leading-6 text-indigo-600 
                        hover:text-indigo-500 pl-3">Login ?</p>
                        </p>
                    </div>
                    <div className=' fixed bottom-5 right-5 px-3 py-2 bg-teal-600 
                    rounded-md text-white'>
                        Know about me!!
                    </div>
                    </div>
                </>
                :
                <>
                     <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold 
                        leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">

                        <div>
                            <label  className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                            <input id="email" name="email" type="email" 
                             value={Email} onChange={(e)=>{
                                setEmail(e.target.value);
                            }} 
                            required className="block w-full rounded-md border-0 py-1.5
                                text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                                placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-3
                                focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                            <label  className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="text-sm">
                                <p className="font-semibold text-indigo-600
                                hover:text-indigo-500">Forgot password?</p>
                            </div>
                            </div>
                            <div className="mt-2">
                            <input id="password" name="password" type="password" required 
                             value={password} onChange={(e)=>{
                                setPassword(e.target.value);
                            }} 
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 px-3
                            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                            focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>

                        <div>
                            {isLoading?
                            <div className=' w-full text-center'>Loading...</div>
                            :
                            <div onClick={Login} className="flex w-full justify-center rounded-md bg-indigo-600
                              py-1.5 text-sm font-semibold leading-6 text-white shadow-sm px-3
                              hover:bg-indigo-500 outline focus-visible:outline-2
                               focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</div>
                            }
                        </div>
                        </form>
                        <p className=' text-center pt-3'>{flasher}</p>
                        <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?
                        <p onClick={toggle} className="font-semibold leading-6 hover:cursor-pointer text-indigo-600 
                        hover:text-indigo-500 pl-3">Sign up</p>
                        </p>
                    </div>
                    </div>
                </>
               }
        </div>
       </div>
    </>
  )
}

export default Regiter