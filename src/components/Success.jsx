import React from 'react'

export default function Success({state, prevStep, nextStep}) {

  return (
    <div className='flex justify-center items-center'>

      <div className="w-full max-w-xs">
        <div className="color-red bg-white shadow-md w-full rounded px-8 pt-6 pb-8 mb-4">
          <h1 className='font-bold text-center block text-gray-700 text-2xl mb-5'> Thank You  For Your Submission</h1>

          <div class="w-full">
            <span class="w-full text-center block text-lg text-gray-800 rounded-lg p-2.5 ">You will get an email with further instructions.</span>
          </div>

          
        </div>
      </div>

    </div>
  )


//   return (
//     <div>
//       <h1 className='font-bold'> 
//             Thank You  For Your Submission
//         </h1>
//         <p>You will get an email with further instructions.</p>
        
//         <p>State: {state}</p>
//         <button type="submit" onClick={prevStep}>prev</button>
//     </div>
//   )
}
