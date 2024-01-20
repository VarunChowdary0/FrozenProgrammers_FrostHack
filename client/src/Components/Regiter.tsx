import React, { useState } from 'react'

const Regiter: React.FC = () => {
  const [isSigningUP, setSigning] = useState<boolean>(true);

  const [fullName, setFullname] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const toggle = () => {
    setSigning(!isSigningUP);
  }
  return (
    <>
      <div className=' h-screen w-full flex items-center justify-center gap-12 pt-0'>
        <div className=' h-full relative'>
          <img className=' scale-75 h-full max-sm:hidden' src="https://i.ibb.co/QbRfj6W/GOLDEN-HOUR-1.png"
            alt="NF" />
        </div>
        <div className=' h-[29rem] w-[350px] shadow-xl pt-0 rounded-lg'>
          {
            isSigningUP ? 
              <>
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="text-center text-2xl font-bold 
                        leading-9 tracking-tight text-gray-900">Welcome to ***** </h2>
                  </div>

                  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">

                      <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Full name</label>
                        <div className="mt-2">
                          <input id="email" name="name" type="text" value={fullName}
                            onChange={(e) => {
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
                        <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                          <input id="email" name="email" type="email" value={Email}
                            onChange={(e) => {
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
                          <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                          <div className="text-sm">
                            <p className="font-semibold text-indigo-600
                                hover:text-indigo-500">Enter password</p>
                          </div>
                        </div>
                        <div className="mt-2">
                          <input id="password" name="password" type="password"
                            required value={password} onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 
                            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-3
                            focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                      </div>

                      <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600
                             px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm
                              hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
                               focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
                      </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                      Not a member?
                      <p onClick={toggle} className="font-semibold hover:cursor-pointer leading-6 text-indigo-600 
                        hover:text-indigo-500 pl-3">Login ?</p>
                    </p>
                  </div>
                  <div className=' fixed bottom-3 right-5 px-3 py-2 bg-teal-600 
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
                        leading-9 tracking-tight text-gray-900 mb-10">Sign in to your account</h2>
                  </div>

                  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">

                      <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                          <input id="email" name="email" type="email"
                            value={Email} onChange={(e) => {
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
                          <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                          <div className="text-sm">
                            <p className="font-semibold text-indigo-600
                                hover:text-indigo-500">Forgot password?</p>
                          </div>
                        </div>
                        <div className="mt-2">
                          <input id="password" name="password" type="password" required
                            value={password} onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 px-3
                            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                            focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                      </div>

                      <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                      </div>
                    </form>

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