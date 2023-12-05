import React from 'react'

export default function Confirm({ state, data, prevStep, nextStep }) {
  return (
    <div className='flex justify-center items-center'>

      <div className="w-full max-w-xs">
        <div className="color-red bg-white shadow-md w-full rounded px-8 pt-6 pb-8 mb-4">
          <h1 className='font-bold text-center block text-gray-700 text-2xl mb-5'>Verify Your Data</h1> <hr />

          <div class="w-full mb-2">
            <p className="block text-gray-700  font-bold text-xl">First Name</p>
            <span class="w-full  border-gray-300  text-lg text-gray-800 rounded-lg">{data.firstName}</span>
          </div><hr />

          <div class="w-full my-2">
            <p className="block text-gray-700  font-bold text-xl">Last Name</p>
            <span class="w-full  border-gray-300 text-lg text-gray-800 rounded-lg">{data.lastName}</span>
          </div><hr />

          <div class="w-full my-2">
            <p className="block text-gray-700 font-bold text-xl">Email</p>
            <span class="w-full border-gray-300 text-lg text-gray-800 rounded-lg"> {data.email}</span>
          </div><hr />

          <div class="w-full my-2">
            <p className="block text-gray-700  font-bold text-xl">Occupation</p>
            <span class="w-full border-gray-300 text-lg text-gray-800 rounded-lg">{data.occupation}</span>
          </div><hr />

          <div class=" w-full my-2">
            <p className="block text-gray-700  font-bold text-xl">City</p>
            <span class="w-full  border-gray-300  text-lg text-gray-800 rounded-lg">{data.city}</span>
          </div><hr />

          <div class="w-full my-2 mb-5">
            <p className="block text-gray-700 font-bold text-xl">Bio</p>
            <span class="w-full  border-gray-300  text-lg text-gray-800 rounded-lg"> {data.bio}</span>
          </div>

        



          <div className='flex justify-between'>


            <button type="submit" onClick={nextStep}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Confirm</button>
            <button type="submit" onClick={prevStep}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Go Back</button>

          </div>

        </div>
      </div>

    </div>
  )
}
