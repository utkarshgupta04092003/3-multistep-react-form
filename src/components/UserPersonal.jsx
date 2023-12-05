import React, { useState } from 'react'

export default function UserPersonal({ state, data, setData, prevStep, nextStep }) {



  const [occupation, setOccupation] = useState(data.occupation);
  const [city, setCity] = useState(data.city);
  const [bio, setBio] = useState(data.bio);

  const handlePrev = (e) => {
    e.preventDefault();
    setData({ ...data, occupation, city, bio });
    prevStep();

  }

  const handleNext = (e) => {
    e.preventDefault();
    if(occupation=='' || city=='' || bio==''){
      alert('Fill the all fields carefully.');
      return;
    }
    setData({ ...data, occupation, city, bio });
    nextStep();

  }

  return (
    <div className='flex justify-center items-center'>
      <div className="w-full max-w-xs">

        <form className="color-red bg-white shadow-md w-full rounded px-8 pt-6 pb-8 mb-4">

            {/* occupation */}
          <div class="mb-4 w-full">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="occupation">Occupation</label>
            <input type="text" name="" id="occupation"
              value={occupation}
              onChange={(e) => { setOccupation(e.target.value) }}
              class="w-full bg-gray-50 border border-gray-300  text-sm text-gray-800 rounded-lg p-2.5 "
              required />
          </div>



            {/* city */}
          <div class="mb-4 w-full">
            <label htmlFor="city"
              className="block text-gray-700 font-bold mb-2" >City </label>
            <input type="text" name="" id="city"
              value={city}
              onChange={(e) => { setCity(e.target.value) }}
              class="w-full bg-gray-50 border border-gray-300  text-sm text-gray-800 rounded-lg p-2.5 "
              required />
          </div>



            {/* bio */}
          <div class="mb-4 w-full">
            <label htmlFor="bio"
              className="block text-gray-700 font-bold mb-2">Bio </label>
            <input type="text" name="" id="bio"
              value={bio}
              onChange={(e) => { setBio(e.target.value) }}
              class="w-full bg-gray-50 border border-gray-300  text-sm text-gray-800 rounded-lg p-2.5 "
              required />
          </div>


          <div className='flex justify-between'>
            <button type="submit" onClick={handleNext}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Next</button>
            <button type="submit" onClick={handlePrev}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Go Back</button>

          </div>
        </form>

      </div>


    </div>
  )
}
