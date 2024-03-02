import React from "react";

const avatar = () => {

    return (
        <div class="grid grid-cols-3 gap-4 place-items-center h-56 w-full border-indigo-500/100">
            <div className="w-5/6 border-black">
                <p>Profile</p>
                <img alt="avatar"></img>
                <p>Khusan Akhmedov</p>
                <p>Web-designer</p>
                <ul>
                    <li>21  Short</li>
                    <li>238  Followers</li>
                    <li>101  Following</li>
                </ul>
                <button className="btn" type="submit">Upload new avatar</button>
                <p>Uzbekistan, Tashkent</p>
                <p>I'm we designer, I work in programs like figma, adobe photoshop,
                     adobe illustrator
                </p>
            </div>
            <div >
                <form className="w-5/6 justify-center border-black">
                
                    <p className="text-base font-semibold leading-7 text-gray-900">BASIC INFO</p>
                    <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold 
                    text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
                    focus-visible:outline-2 
                    focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit">CANCEL</button>
                    <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold 
                    text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
                    focus-visible:outline-2 
                    focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit">SAVE</button>
                

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                FIRST NAME
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                LAST NAME
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                TITTLE
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

                <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
                
                </form>
            <div>

            </div>
            </div>
        </div>
    )
};

export default avatar;