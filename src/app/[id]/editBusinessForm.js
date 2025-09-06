'use client'
import { useState } from 'react';

export default function EditBusinessForm({ business }) {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState(business.name);

  return (
    <div className="mt-10 flex justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-xl text-center">
        {!showForm ? (
          <>
            {/* Display details */}
            <h2 className="text-xl font-semibold mb-4">Business Details</h2>
            <div className="text-gray-700 mb-2"><span className="font-bold">ID:</span> {business.id}</div>
            <div className="text-gray-700 mb-4"><span className="font-bold">Subdomain:</span> {business.subdomain}</div>

            <button
              className="mt-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
              onClick={() => setShowForm(true)}
            >
              Edit Business
            </button>
          </>
        ) : (
          <>
            {/* Show form */}
            <h2 className="text-xl font-semibold mb-4">Edit Business Name</h2>
            <form className="flex flex-col items-center gap-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Business Name"
              />
              <div className="flex gap-4 mt-2">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-gray-400 hover:bg-gray-300 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
