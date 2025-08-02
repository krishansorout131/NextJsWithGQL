import { client } from '../lib/graphqlClient';

export const getBusinessesData = async (query) => {
  try {
    return await client.request(query)
  } catch (error) {
    console.log("error fetching businesses")
  }

  return []
}
