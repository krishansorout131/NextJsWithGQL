// lib/queries.js
export const GET_USERS = `
  query GetUsers($businessId: Int!) {
    business_users(where: { deleted: { _eq: false }, business_id: { _eq: $businessId } }) {
      id
      full_name
      email
    }
  }
`;

export const getBusinessesQuery = `
  query fetchBusinesses {
    businesses {
      id
      name
      subdomain
    }
  }
`;

export const fetchUserQuery = `
  query fetchUser($id: Int!) {
    business_users(where: { id: { _eq: $id } }) {
      id
      full_name
      email
    }
  }
`;

export const updateUserQuerys = `
  mutation UpdateUser($id: Int!, $name: String!) {
    business_users(where: { id: { _eq: $id } }, _set: { full_name: $name }) {
      id
      full_name
    }
  }
`;

export const updateUserQuery = `
  mutation UpdateUser($id: Int!, $name: String!) {
    update_business_users(
      where: { id: { _eq: $id } }, 
      _set: { full_name: $name }
    ) {
      returning {
        id
        full_name
      }
    }
  }
`;

