import React from 'react'
import Navbar from '../Navbar';

const CCE = () => {
  return (
    <div>
      <section>
        <Navbar />
        <div className="bg-slate-200 min-h-screen flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-extrabold mb-6 text-center">CCE</h1>
          <ol>
            <li>Introduction to Computer Science</li>
            <li>Programming Fundamentals</li>
            <li>Data Structures and Algorithms</li>
            <li>Web Development Basics</li>
            <li>Database Management Systems</li>
            <li>Software Engineering Principles</li>
            <li>Computer Networks and Security</li>
          </ol>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CCE
