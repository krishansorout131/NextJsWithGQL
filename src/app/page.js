import { getBusinessesQuery } from "../lib/queries";
import { getBusinessesData } from "./helper";
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
              </tr>
            </thead>
            <tbody>
              {data?.businesses?.map((business, i) => (
                <tr key={i}>
                  <td className="px-4 py-2 font-bold">{business.id}</td>
                  <td className="px-4 py-2">{business.name}</td>
                  <td className="px-4 py-2">{business.subdomain}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
