import React, { useState } from 'react';

export default function FormUserDetails({data, setData, nextStep }) {


  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [email, setEmail] = useState(data.email);

  const handleContinue = (e) => {
    e.preventDefault();
    if(firstName=='' || lastName=='' || email==''){
      alert('Fill the all fields carefully.');
      return;
    }
    setData({ ...data, firstName, lastName, email });
    nextStep();
  }
  return (
    <div className='flex justify-center items-center'>
      

      <div className="w-full max-w-xs">
        <form className="color-red bg-white shadow-md w-full rounded px-8 pt-6 pb-8 mb-4">


          <div class="mb-4 w-full">

            {/* firstName */}
            <label className="block text-gray-700 font-bold mb-2" htmlFor="firstname">First Name</label>
            <input type="text" name="" id="firstname"
              value={firstName}
              onChange={(e) => { setFirstName(e.target.value) }}
              class="w-full bg-gray-50 border border-gray-300  text-sm text-gray-800 rounded-lg p-2.5 "
              required />
          </div>

            {/* lastname */}
          <div className="mb-4">
            <label htmlFor="lastname"
              className="block text-gray-700 font-bold mb-2">Last Name</label>
            <input type="text" name="" id="lastname"
              value={lastName}
              onChange={(e) => { setLastName(e.target.value) }}
              class="w-full bg-gray-50 border border-gray-300  text-sm text-gray-800 rounded-lg p-2.5 "
              required/>
          </div>



            {/* email */}
          <div className="mb-4">
            <label htmlFor="email" 
            className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" name="" 
              id="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              class="w-full bg-gray-50 border border-gray-300  text-sm text-gray-800 rounded-lg p-2.5 "/>
          </div>


          <div className="mb-4">
            <button type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleContinue}>Continue</button>
          </div>
        </form>

      </div>
    </div>
  )
}
