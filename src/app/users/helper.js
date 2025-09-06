'use server'
import { client } from '../../lib/graphqlClient';

export const getUsersData = async (query, variables) => {
  let data = []
  try {
    data = await client.request(query, variables)
  } catch (error) {
    console.log("error fetching users")
  }

  return data
}

export const getUserData = async (query, variables) => {
  let data = []
  try {
    data = await client.request(query, variables)
  } catch (error) {
    console.log("error fetching user")
  }

  return data
}

export const updateUser = async (query, variables) => {
  try {
    const data = await client.request(query, variables);

    const updatedUsers = data?.update_business_users?.returning || [];
    console.log(data?.update_business_users)

    if (updatedUsers.length > 0) {
      return { success: true, user: updatedUsers[0] };
    } else {
      return { success: false, message: "No rows updated" };
    }
  } catch (error) {
    console.error("GraphQL error:", error.response?.errors || error.message);
    return { success: false, error: error.message };
  }
};
