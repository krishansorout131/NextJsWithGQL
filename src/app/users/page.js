import { getUsersData } from './helper'
import { GET_USERS } from '../../lib/queries';
import Link from 'next/link'

export default async function Page({ searchParams }) {  
  const params = await searchParams;

  const businessId = params.businessId;

  const data = await getUsersData(GET_USERS, { businessId: businessId });

  return(
    <div>
      <div className="h-screen text-center">
        <div className="text-2xl font-bold mt-10">
          List of all users
        </div>
        <div className="mt-10 w-full flex items-center text-left justify-center">
          <table>
            <thead>
              <tr>
                <th className="px-4 py-2">User ID</th>
                <th className="px-4 py-2">User Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Edit User</th>
              </tr>
            </thead>
            <tbody>
              {data?.business_users?.map((user, i) => (
                <tr key={i}>
                  <td className="px-4 py-2 font-bold">{user.id}</td>
                  <td className="px-4 py-2">{user.full_name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">
                    <Link href={`/users/${user?.id}/edit`} className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
    
