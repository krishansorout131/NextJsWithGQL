import { getBusinessDetailsQuery } from "../../lib/queries";
import { client } from "../../lib/graphqlClient";
import EditBusinessForm from "./editBusinessForm";

export default async function Page({ params }) {
  const paramsData = await params;
  const fetchBusiness = await client.request(getBusinessDetailsQuery, { id: paramsData.id });

  const data = fetchBusiness?.businesses?.[0]

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
      <h1 className="text-3xl font-bold mb-6">Business: {data?.name}</h1>

      <EditBusinessForm business={data} />
    </div>
  )
}