import React from 'react'
import Navbar from '../Navbar'
const IT = () => {
  return (
    <div>
      <Navbar/>
      <section>
        <div className="bg-slate-200 min-h-screen flex items-center justify-center">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
              <h1 className="text-2xl font-extrabold mb-6 text-center">IT Courses</h1>
              <ul className="list-disc pl-5 space-y-2">
                <li>Network Security</li>
                <li>Cloud Computing</li>
                <li>Cybersecurity Fundamentals</li>
                <li>Data Analytics</li>
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>DevOps Practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default IT
