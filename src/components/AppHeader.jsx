import React from 'react';

export default function AppHeader({state, title}) {
  return (
    <div class="bg-blue-500 text-white font-bold text-xl p-3 mb-10 text-center">
      {title} - {state}
    </div>
  )
}
