import React from "react";

export default function RightMainSection() {
  return (
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
      <button className="bg-[#0866ff] text-white p-2 mx-3 rounded-lg font-medium text-2xl">
        Log in
      </button>
      <span className="text-center text-blue-600 my-4 tracking-tighter hover:cursor-pointer hover:underline">
        Forgotten password?
      </span>
      <hr className="mx-3" />
      <button className="bg-[#42b72a] text-white py-2.5 px-3 mx-auto my-6 font-medium rounded-lg text-lg hover:bg-[#3ba225] active:bg-[#42b72a]">
        Create new account
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
  );
}
