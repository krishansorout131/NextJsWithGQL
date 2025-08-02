import { fetchUserQuery } from "../../../../lib/queries";
import { getUserData } from "../../helper";
import EditForm from "./EditForm";

export default async function Page({ params }) {
  const data = await getUserData(fetchUserQuery, { id: params.id })

  const user = data?.business_users?.[0]

  return (
    <EditForm user={user}/>
  )
}