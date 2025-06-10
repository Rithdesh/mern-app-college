import React from "react";
import Navbar from "../Navbar";

const AIML = () => {
  return (
    <div>
      <section>
      <Navbar />
        <div className="bg-slate-200 min-h-screen flex items-center justify-center ">
          <div >
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
              <ul className="list-disc pl-5 space-y-2">
                <h1 className="text-2xl font-extrabold mb-6 text-center">
                  AIML
                </h1>
                <li>Supervised Learning</li>
                <li>Unsupervised Learning</li>
                <li>Neural Networks</li>
                <li>Natural Language Processing</li>
                <li>Computer Vision</li>
                <li>Reinforcement Learning</li>
                <li>AI Ethics and Bias</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIML;
