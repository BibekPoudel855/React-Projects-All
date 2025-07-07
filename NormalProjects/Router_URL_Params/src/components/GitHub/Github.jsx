import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export async function GithubAPILoader() {
  const response = await fetch("https://api.github.com/users/BibekPoudel855");
  return response.json();
}

function Github() {
  const gitData = useLoaderData();
  console.log(gitData);
  
  const [data, setData] = useState([]);
  console.log(data);
  return (
    <div className="bg-gray-300 text-2xl text-center">
      <h1>Github {gitData.followers} </h1>

      <img src={gitData.avatar_url} alt="" />
    </div>
  );
}
export default Github;
