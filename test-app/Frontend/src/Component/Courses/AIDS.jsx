import React from 'react'
import Navbar from '../Navbar'
const AIDS = () => {
  return (
    <div>
      <Navbar />
      <section>
        <div className="bg-slate-200 min-h-screen flex items-center justify-center">
          <div >
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
              <h1 className="text-2xl font-extrabold mb-6 text-center">Artificial intelligence and Data Science</h1>
              <ul className="list-disc pl-5 space-y-2">
                <li>Introduction to AI and Data Science</li>
                <li>Data Preprocessing and Cleaning</li>
                <li>Exploratory Data Analysis (EDA)</li>
                <li>Machine Learning Algorithms</li>
                <li>Deep Learning Fundamentals</li>
                <li>Natural Language Processing (NLP)</li>
                <li>Data Visualization Techniques</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AIDS
