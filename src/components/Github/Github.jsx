import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData();
  return (
    <>
   
    <div className=' flex items-center justify-center'><img src= {data.avatar_url} alt="img" className=' rounded-full max-w-3 max-h-60 mt-2'/></div>
    <div htmlFor="" className=' text-center text-xl mt-1 text-rose-700'>{data.name}</div>
     <div className=' text-center m-4 bg-gray-600 text-white p-5 text-xl w-30'>Github Followers: {data.followers}</div>
     <div className=' text-center m-4 bg-gray-600 text-white p-5 text-xl w-30'>Public Repos: {data.public_repos}</div>
     
    </>
  )
}

export default Github

export const githubInfo = async()=>{
    const response = await fetch('https://api.github.com/users/SudhanshuDTU');
    return response.json();
}