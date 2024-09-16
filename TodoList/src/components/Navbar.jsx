import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='flex justify-between bg-slate-700 text-white py-3'>
        <div className="logo">
          <span className='font-bold text-xl mx-9'>iTask</span>
        </div>

        <ul className='flex gap-9 mx-11'>
          <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
          <li className='cursor-pointer hover:font-bold transition-all'>Your Task</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
