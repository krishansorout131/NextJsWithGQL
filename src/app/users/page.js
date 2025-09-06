import { getUsersData } from './helper'
import { GET_USERS } from '../../lib/queries';
import Link from 'next/link'

export default async function Page({ searchParams }) {
  const params = await searchParams;

  const businessId = params.businessId;
  const page = parseInt(params.page || '1');
  const perPage = 10;

  const data = await getUsersData(GET_USERS, { businessId, page, perPage });

  const totalUsers = data?.business_users_aggregate?.aggregate?.count || 0;
  const totalPages = Math.ceil(totalUsers / perPage);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">List of All Users</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">User ID</th>
                <th className="px-4 py-2 border">User Name</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Edit User</th>
              </tr>
            </thead>
            <tbody>
              {data?.business_users?.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border font-bold">{user.id}</td>
                  <td className="px-4 py-2 border">{user.full_name}</td>
                  <td className="px-4 py-2 border">{user.email}</td>
                  <td className="px-4 py-2 border">
                    <Link
                      href={`/users/${user.id}/edit`}
                      className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-1 px-3 rounded-lg transition-colors duration-200"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 &&
          <div className="mt-6 flex justify-center gap-2 flex-wrap">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={`/users?businessId=${businessId}&page=${p}`}
                className={`px-3 py-1 rounded border ${
                  p === page
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-blue-600 hover:bg-blue-100'
                }`}
              >
                {p}
              </Link>
            ))}
          </div>
        }
      </div>
    </div>
  );
}
