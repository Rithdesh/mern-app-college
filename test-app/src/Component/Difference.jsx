import React from "react";

function Difference() {

  
  return (
    <div className="bg-gradient-to-r from-orange-400 to-red-400 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-lg p-6 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Difference Between React and React Native
        </h1>
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border border-gray-300 px-4 py-2 text-left text-lg">
                React
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left text-lg">
                React Native
              </th>
            </tr>
         </thead>
      <tbody className="text-gray-700">
            <tr className="hover:bg-gray-50">
          <td className="border border-gray-300 px-4 py-2">
                Used for building web applications
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Used for building mobile applications
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                Uses HTML and CSS for UI components
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Uses native components for UI
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                Renders in a web browser
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Renders on mobile devices
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                Uses the DOM for rendering
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Uses native APIs for rendering
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                Supports web-specific features like routing
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Supports mobile-specific features like gestures
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                Can be used with any backend technology
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Can be used with mobile-specific backend technologies
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                Uses JavaScript for logic and state management
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Uses JavaScript for logic and state management
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                Has a larger ecosystem of libraries and tools
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Has a growing ecosystem of libraries and tools
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                Can be used with any CSS framework
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Uses stylesheets for styling
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Difference;
