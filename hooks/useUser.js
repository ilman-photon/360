import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
// const baseUrl = "https://jsonplaceholder.typicode.com"
const baseUrl = "";

export const useGetUserData = (path = "api/user") => {
  // if (!path) {
  //   throw new Error("Path is required")
  // }

  const url = baseUrl + path;

  const { data, error } = useSWR(url, fetcher);

  return { data, error };
};
