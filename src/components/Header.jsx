import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
   <header className="bg-gradient-to-r from-blue-300 to bg-purple-400 shadow-lg">
    <div className="max-w-6xl  mx-auto p-4 justify-between flex">
     <Link href="/" className="text-2xl font-extrabold group cursor-pointer">
     <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 group-hover:from-violet-800 group-hover:to-pink-800">Auth </span>
     <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 group-hover:from-violet-800 group-hover:to-blue-800">Nextjs</span>
     </Link>
     {/* navbar */}
     <nav>
        <ul className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/signin">Sign In</Link>
        </ul>
     </nav>
    </div>
   </header>
  )
}

export default Header