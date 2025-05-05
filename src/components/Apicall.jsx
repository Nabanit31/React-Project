import axios from 'axios'
import React, { useState } from 'react'

const Apicall = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
  }

  return (
    <div className="p-8">
      <button
        onClick={getData}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 active:scale-95 transition"
      >
        Get Data
      </button>

      {/* Grid container for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((elem, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={elem.download_url}
              alt=""
              className="h-48 w-full object-cover"
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {elem.author}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Apicall
