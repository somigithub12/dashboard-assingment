import React from "react";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <MainContent />
    </div>
  );
}

const Sidebar = () => (
  <div className="bg-gradient-to-b from-gray-200 to-gray-300 text-black w-64 min-h-screen p-4">
  <div className="text-3xl font-extrabold text-gray-800 mb-6">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Qiktrack</span>
  </div>
  <div className="flex flex-col">
    <button className="relative bg-gradient-to-r from-gray-400 to-gray-600 text-white p-2 rounded mb-2 overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
      <span className="relative z-10">Bus</span>
      <span className="absolute inset-0 bg-gray-700 opacity-20 transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
    </button>
    <button className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white p-2 rounded mb-2 overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
      <span className="relative z-10">School</span>
      <span className="absolute inset-0 bg-blue-800 opacity-20 transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
    </button>
  </div>
</div>


);

const MainContent = () => (
  <div className="flex-1 p-6 bg-gray-100">
    <Dashboard />
    <StatsCards />
    <InfoSections />
    <Notification />
  </div>
);

const Dashboard = () => (
  
  <div className="bg-white shadow-md p-4">
  <div className="flex justify-between items-center">
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute left-3 top-2 w-6 h-6 text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M9.75 17.25A7.5 7.5 0 109.75 2.25a7.5 7.5 0 000 15z"
        />
      </svg>
    </div>
    <div className="flex items-center space-x-4">
      <nav className="flex space-x-4">
        <a
          href="/realtime"
          className="text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded transition duration-300 ease-in-out"
        >
          Realtime
        </a>
        <a
          href="/dashboard"
          className="text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded transition duration-300 ease-in-out"
        >
          Dashboard
        </a>
        <a
          href="/report"
          className="text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded transition duration-300 ease-in-out"
        >
          Report
        </a>
        <a
          href="/alerts"
          className="text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded transition duration-300 ease-in-out"
        >
          Alerts
        </a>
      </nav>
      <div className="flex items-center space-x-2 text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 7.5A3.75 3.75 0 1112 3.75 3.75 3.75 0 0115.75 7.5zm-1.5 7.5h-6a4.5 4.5 0 00-4.5 4.5v1.5h15v-1.5a4.5 4.5 0 00-4.5-4.5z"
          />
        </svg>
        <div>User name</div>
      </div>
    </div>
  </div>
  <div className="mt-4 text-2xl">
    <span className="font-semibold">Welcome, Aatreya Academy</span>
    <span className="ml-2">👋</span>
  </div>
</div>







  );

  

  const StatsCards = () => (
    
    
     
    <div className="p-8 space-y-6">
  <div className="flex justify-between items-start space-x-6">
    {/* Total Students Box */}
    <div className="space-y-2 flex-1">
      <div className="bg-blue-50 p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-semibold">Total Students (in School)</h2>
          <a href="/attendance/students" className="text-blue-600">
            View Attendance
          </a>
        </div>
        <div className="mt-4 text-4xl font-bold">50</div>
        <div className="mt-4 flex space-x-4">
          <div className="flex items-center bg-white p-2 rounded-lg shadow w-28 justify-between transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
            <span className="text-green-600">Present</span>
            <span className="text-green-600 font-semibold">12</span>
          </div>
          <div className="flex items-center bg-white p-2 rounded-lg shadow w-28 justify-between transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
            <span className="text-red-600">Absent</span>
            <span className="text-red-600 font-semibold">12</span>
          </div>
          <div className="flex items-center bg-white p-2 rounded-lg shadow w-28 justify-between transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
            <span className="text-yellow-600">On Leave</span>
            <span className="text-yellow-600 font-semibold">12</span>
          </div>
        </div>
      </div>
    </div>

    {/* Total Teachers Box */}
    <div className="space-y-2 flex-1">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-semibold">Total Teachers (in School)</h2>
        </div>
        <div className="mt-4 text-4xl font-bold">60</div>
        <div className="mt-4 flex space-x-4">
          <div className="flex items-center bg-white p-2 rounded-lg shadow w-28 justify-between transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
            <span className="text-green-600">Present</span>
            <span className="text-green-600 font-semibold">22</span>
          </div>
          <div className="flex items-center bg-white p-2 rounded-lg shadow w-28 justify-between transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
            <span className="text-red-600">Absent</span>
            <span className="text-red-600 font-semibold">22</span>
          </div>
        </div>
      </div>
    </div>

    {/* Total Buses Box */}
    <div className="space-y-2 flex-1">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-semibold">Total Buses (in School)</h2>
          <a href="/buses" className="text-blue-600">
            View All
          </a>
        </div>
        <div className="mt-4 text-4xl font-bold">23</div>
        <div className="mt-4 flex space-x-4">
          <div className="flex items-center bg-white p-2 rounded-lg shadow w-28 justify-between transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
            <span className="text-blue-600">Route</span>
            <span className="text-blue-600 font-semibold">28</span>
          </div>
          <div className="flex items-center bg-white p-2 rounded-lg shadow w-28 justify-between transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
            <span className="text-blue-600">Trip</span>
            <span className="text-blue-600 font-semibold">14</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



  



      );
  
      

      const InfoSections = () => (
        
        <div className="flex space-x-4 p-8">
        <div className="bg-purple-100 p-6 rounded-lg shadow-md text-center w-1/3 transform transition-transform hover:scale-105">
          <h2 className="text-xl font-semibold">All Notices</h2>
          <p className="text-gray-600">Keep Track on all Notices of your School</p>
          <button className="mt-4 px-4 py-2 bg-black text-white rounded-md transform transition-transform hover:scale-110">
            View All
          </button>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center w-1/3 transform transition-transform hover:scale-105">
          <h2 className="text-xl font-semibold">All Reminders</h2>
          <p className="text-gray-600">Keep Track on all Reminders of your School</p>
          <button className="mt-4 px-4 py-2 bg-black text-white rounded-md transform transition-transform hover:scale-110">
            View All
          </button>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md text-center w-1/3 transform transition-transform hover:scale-105">
          <h2 className="text-xl font-semibold">All Announcements</h2>
          <p className="text-gray-600">Reach the all Announcement by your School</p>
          <button className="mt-4 px-4 py-2 bg-black text-white rounded-md transform transition-transform hover:scale-110">
            View All
          </button>
        </div>
      </div>
      );
        
        
        
        
        
      
      
     
      


const Notification = () => (
  
  <div className="space-y-4 p-8">
      <div className="bg-blue-50 p-4 rounded-lg shadow-md flex items-center justify-between hover:bg-blue-100 transition-colors">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-200 p-2 rounded-full">
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 5C7.454 5 3.467 7.885 1.681 12c1.786 4.115 5.773 7 10.319 7s8.533-2.885 10.319-7C20.533 7.885 16.546 5 12 5zm0 12c-2.485 0-4.5-2.015-4.5-4.5S9.515 8 12 8s4.5 2.015 4.5 4.5S14.485 17 12 17zm0-7c-1.378 0-2.5 1.122-2.5 2.5S10.622 15 12 15s2.5-1.122 2.5-2.5S13.378 10 12 10z" />
            </svg>
          </div>
          <span>11th B Class has no teacher, view the Live CCTV Camera</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md transform transition-transform hover:scale-105">
            Check it out
          </button>
          <button className="text-black transform transition-transform hover:scale-110">
            &#x2716;
          </button>
        </div>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg shadow-md flex items-center justify-between hover:bg-blue-100 transition-colors">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-200 p-2 rounded-full">
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 5C7.454 5 3.467 7.885 1.681 12c1.786 4.115 5.773 7 10.319 7s8.533-2.885 10.319-7C20.533 7.885 16.546 5 12 5zm0 12c-2.485 0-4.5-2.015-4.5-4.5S9.515 8 12 8s4.5 2.015 4.5 4.5S14.485 17 12 17zm0-7c-1.378 0-2.5 1.122-2.5 2.5S10.622 15 12 15s2.5-1.122 2.5-2.5S13.378 10 12 10z" />
            </svg>
          </div>
          <span>11th B Class has no teacher, view the Live CCTV Camera</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md transform transition-transform hover:scale-105">
            Check it out
          </button>
          <button className="text-black transform transition-transform hover:scale-110">
            &#x2716;
          </button>
        </div>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg shadow-md flex items-center justify-between hover:bg-blue-100 transition-colors">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-200 p-2 rounded-full">
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 5C7.454 5 3.467 7.885 1.681 12c1.786 4.115 5.773 7 10.319 7s8.533-2.885 10.319-7C20.533 7.885 16.546 5 12 5zm0 12c-2.485 0-4.5-2.015-4.5-4.5S9.515 8 12 8s4.5 2.015 4.5 4.5S14.485 17 12 17zm0-7c-1.378 0-2.5 1.122-2.5 2.5S10.622 15 12 15s2.5-1.122 2.5-2.5S13.378 10 12 10z" />
            </svg>
          </div>
          <span>11th B Class has no teacher, view the Live CCTV Camera</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md transform transition-transform hover:scale-105">
            Check it out
          </button>
          <button className="text-black transform transition-transform hover:scale-110">
            &#x2716;
          </button>
        </div>
      </div>
    </div>
);

export default App;
