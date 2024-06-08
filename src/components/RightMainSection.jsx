import "../index.css";
import React from "react";

export default function RightMainSection() {
  return (
    <>
      <div className="container flex flex-col bg-white rounded-lg w-[29%] relative drop-shadow-xl">
        <div className="flex flex-col mt-3 mx-3">
          <input
            type="text"
            className="border py-3 px-3  rounded-lg mb-2 outline-blue-400"
            placeholder="Email address or phone number"
          />
          <input
            type="password"
            className="border py-3 px-3  rounded-lg mb-4 outline-blue-400"
            placeholder="password"
          />
        </div>
        <button className="bg-blue-600 text-white p-2 mx-3 rounded-lg font-bold text-lg">
          Log in
        </button>
        <span className="text-center text-blue-600 my-4 tracking-tighter hover:cursor-pointer hover:underline">          
          Forgotten password?
        </span>
        <hr className="mx-3" />
        <button className="bg-green-600 text-white p-3 mx-auto my-6  rounded-lg font-bold text-lg">
          Create new Account
        </button>
        <div className="text-center w-1/4">
          <span class="absolute -bottom-12 text-sm">
            <span class="font-bold hover:underline cursor-pointer">
              Create a Page for
            </span>
            a celebrity, brand or business.
          </span>
        </div>
      </div>
    </>
  );
}
