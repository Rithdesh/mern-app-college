import React from 'react'
import Navbar from './Navbar'
const Home = () => {
  return (
    <div className="bg-slate-200">
      <Navbar />
      <div className="flex flex-col gap-4 justify-center items-center h-screen">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to College Management System</h1>
        <p className="text-gray-600">Manage your college courses and resources efficiently.</p>
        <img src="https://via.placeholder.com/400" alt="College Management" className="rounded-lg shadow-lg" />
        <p className="text-gray-500">Explore the courses available and enhance your learning experience.</p>
        <p className="text-gray-500">Navigate through the courses to find the one that suits you best.</p>
        <p className="text-gray-500">Stay updated with the latest information and resources.</p>
        <p className="text-gray-500">Join us in making your college journey successful!</p>
        </div>
      <footer className="bg-gray-800 text-white text-center py-4 mt-8">
        <p className="text-sm">© 2023 College Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home
