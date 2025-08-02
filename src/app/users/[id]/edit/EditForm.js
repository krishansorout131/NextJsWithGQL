'use client';
import { useState } from 'react';
import { updateUserQuery } from '../../../../lib/queries';
import { updateUser } from '../../helper';
import { useRouter } from 'next/navigation'

export default function EditForm(props) {
  const { user } = props
  const [name, setName] = useState(user?.full_name);
  const router = useRouter()

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await updateUser(updateUserQuery, { id: user?.id, name: name })
    if (result.success) {
      window.alert("User updated successfully")
      router.push('/users')
    } else {
      window.alert(result.error)
    }
  }

  return (
    <div>
      <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit User</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Enter user name"
              value={name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-gray-900 text-white py-2 rounded-xl hover:bg-gray-700 transition duration-200"
            onClick={(e) => handleSubmit(e)}
          >
            Edit
          </button>
        </form>
      </div>
    </div>
  )
}