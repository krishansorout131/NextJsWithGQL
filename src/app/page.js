import { getBusinessesQuery } from "../lib/queries";
import { getBusinessesData } from "./helper";
import Link from "next/link";

export default async function Page() {
  const data = await getBusinessesData(getBusinessesQuery)

  return (
    <>
      <div className="h-screen text-center">
        <div className="text-2xl font-bold mt-10">
          List of all businesses
        </div>
        <div className="mt-10 w-full flex items-center text-left justify-center">
          <table>
            <thead>
              <tr>
                <th className="px-4 py-2">Business ID</th>
                <th className="px-4 py-2">Business Name</th>
                <th className="px-4 py-2">Business Subdomain</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {data?.businesses?.map((business, i) => (
                <tr key={i}>
                  <td className="px-4 py-2 font-bold">{business.id}</td>
                  <Link href={`/${business.id}`}>
                    <td className="px-4 py-2 cursor-pointer text-blue-900">{business.name}</td>
                  </Link>
                  <td className="px-4 py-2">{business.subdomain}</td>
                  <Link href={`/users?businessId=${business.id}`} className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                    show users
                  </Link>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
