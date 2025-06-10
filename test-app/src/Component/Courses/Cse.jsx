import React from 'react'
import Navbar from '../Navbar'

const Cse=() =>{
  return (
    <div>
      <section>
        <Navbar />
        <div className="bg-slate-200 min-h-screen flex items-center justify-center">
          <div className="flex items-center justify-center rounded-lg bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
              <h1 className="text-2xl font-extrabold mb-6 text-center">CSE Courses</h1>
              <ul className="list-disc pl-5 space-y-2">
                <li>Data Structures and Algorithms</li>
                <li>Operating Systems</li>
                <li>Database Management Systems</li>
                <li>Computer Networks</li>
                <li>Software Engineering</li>
                <li>Web Development</li>
                <li>Machine Learning</li>
              </ul>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Cse
