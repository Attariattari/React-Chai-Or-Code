import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setdata] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Attariattari")
  //       .then((res) => res.json())
  //       .then((data?) => {
  //         console.log(data?);
  //         setdata?(data?);
  //       });
  //   }, []);
  const data = useLoaderData();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8">
      <div className="max-w-4xl mx-auto m-8 relative">
        {/* Glassmorphism Card */}
        <div className="relative backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl overflow-hidden border border-white/30">
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>

          {/* Header Section with Glass Effect */}
          <div className="relative h-40 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40 backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
          </div>

          <div className="relative px-8 pb-8">
            {/* Avatar with Glow Effect */}
            <div className="flex justify-center -mt-20 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-50"></div>
                <img
                  src={data?.avatar_url}
                  alt="avatar"
                  className="relative w-36 h-36 rounded-full border-4 border-white/50 shadow-2xl"
                />
              </div>
            </div>

            {/* Name and Bio */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                {data?.name}
              </h1>
              <p className="text-gray-100 text-lg mb-4 max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                {data?.bio}
              </p>

              {/* Location and Company */}
              <div className="flex justify-center gap-6 text-sm flex-wrap">
                {data?.location && (
                  <span className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 text-white font-medium shadow-lg">
                    📍 {data?.location}
                  </span>
                )}
                {data?.company && (
                  <span className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 text-white font-medium shadow-lg">
                    🏢 {data?.company}
                  </span>
                )}
              </div>
            </div>

            {/* Stats Grid with Glassmorphism */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 text-center border border-white/30 hover:bg-white/25 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-4xl font-bold text-white drop-shadow-lg">
                  {data?.followers}
                </div>
                <div className="text-gray-100 text-sm mt-2 font-semibold">
                  Followers
                </div>
              </div>
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 text-center border border-white/30 hover:bg-white/25 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-4xl font-bold text-white drop-shadow-lg">
                  {data?.following}
                </div>
                <div className="text-gray-100 text-sm mt-2 font-semibold">
                  Following
                </div>
              </div>
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 text-center border border-white/30 hover:bg-white/25 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-4xl font-bold text-white drop-shadow-lg">
                  {data?.public_repos}
                </div>
                <div className="text-gray-100 text-sm mt-2 font-semibold">
                  Repositories
                </div>
              </div>
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 text-center border border-white/30 hover:bg-white/25 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-4xl font-bold text-white drop-shadow-lg">
                  {data?.public_gists}
                </div>
                <div className="text-gray-100 text-sm mt-2 font-semibold">
                  Gists
                </div>
              </div>
            </div>

            {/* Additional Info with Glass Cards */}
            <div className="space-y-3">
              {data?.blog && (
                <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-xl p-4 border border-white/30 hover:bg-white/20 transition-all">
                  <span className="text-white min-w-[100px] font-semibold drop-shadow-md">
                    🌐 Blog:
                  </span>
                  <a
                    href={data?.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-blue-100 hover:underline truncate font-medium"
                  >
                    {data?.blog}
                  </a>
                </div>
              )}

              {data?.email && (
                <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-xl p-4 border border-white/30 hover:bg-white/20 transition-all">
                  <span className="text-white min-w-[100px] font-semibold drop-shadow-md">
                    📧 Email:
                  </span>
                  <span className="text-gray-100 truncate font-medium">
                    {data?.email}
                  </span>
                </div>
              )}

              {data?.twitter_username && (
                <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-xl p-4 border border-white/30 hover:bg-white/20 transition-all">
                  <span className="text-white min-w-[100px] font-semibold drop-shadow-md">
                    🐦 Twitter:
                  </span>
                  <a
                    href={`https://twitter.com/${data?.twitter_username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-blue-100 hover:underline font-medium"
                  >
                    @{data?.twitter_username}
                  </a>
                </div>
              )}

              <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-xl p-4 border border-white/30 hover:bg-white/20 transition-all">
                <span className="text-white min-w-[100px] font-semibold drop-shadow-md">
                  📅 Joined:
                </span>
                <span className="text-gray-100 font-medium">
                  {new Date(data?.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>

            {/* View Profile Button with Glass Effect */}
            <div className="mt-8 text-center">
              <a
                href={data?.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-all"></div>
                <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold px-10 py-4 rounded-xl backdrop-blur-sm border border-white/40 hover:scale-105 transition-all shadow-2xl text-lg">
                  View GitHub Profile ✨
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Background Blur Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
      </div>
    </div>
    // <div className="max-w-4xl mx-auto m-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden">
    //   {/* Header Section with Avatar */}
    //   <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 h-32"></div>

    //   <div className="relative px-8 pb-8">
    //     {/* Avatar */}
    //     <div className="flex justify-center -mt-16 mb-6">
    //       <img
    //         src={data?.avatar_url}
    //         alt="avatar"
    //         className="w-32 h-32 rounded-full border-4 border-gray-900 shadow-xl"
    //       />
    //     </div>

    //     {/* Name and Bio */}
    //     <div className="text-center mb-8">
    //       <h1 className="text-3xl font-bold text-white mb-2">{data?.name}</h1>
    //       <p className="text-gray-400 text-lg mb-4">{data?.bio}</p>

    //       {/* Location and Company */}
    //       <div className="flex justify-center gap-4 text-gray-300 text-sm">
    //         {data?.location && (
    //           <span className="flex items-center gap-1">
    //             📍 {data?.location}
    //           </span>
    //         )}
    //         {data?.company && (
    //           <span className="flex items-center gap-1">🏢 {data?.company}</span>
    //         )}
    //       </div>
    //     </div>

    //     {/* Stats Grid */}
    //     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
    //       <div className="bg-gray-800 rounded-lg p-4 text-center">
    //         <div className="text-3xl font-bold text-blue-400">
    //           {data?.followers}
    //         </div>
    //         <div className="text-gray-400 text-sm mt-1">Followers</div>
    //       </div>
    //       <div className="bg-gray-800 rounded-lg p-4 text-center">
    //         <div className="text-3xl font-bold text-purple-400">
    //           {data?.following}
    //         </div>
    //         <div className="text-gray-400 text-sm mt-1">Following</div>
    //       </div>
    //       <div className="bg-gray-800 rounded-lg p-4 text-center">
    //         <div className="text-3xl font-bold text-green-400">
    //           {data?.public_repos}
    //         </div>
    //         <div className="text-gray-400 text-sm mt-1">Repositories</div>
    //       </div>
    //       <div className="bg-gray-800 rounded-lg p-4 text-center">
    //         <div className="text-3xl font-bold text-yellow-400">
    //           {data?.public_gists}
    //         </div>
    //         <div className="text-gray-400 text-sm mt-1">Gists</div>
    //       </div>
    //     </div>

    //     {/* Additional Info */}
    //     <div className="space-y-3 text-gray-300">
    //       {data?.blog && (
    //         <div className="flex items-center gap-3 bg-gray-800 rounded-lg p-3">
    //           <span className="text-gray-400 min-w-[100px]">🌐 Blog:</span>
    //           <a
    //             href={data?.blog}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="text-blue-400 hover:underline truncate"
    //           >
    //             {data?.blog}
    //           </a>
    //         </div>
    //       )}

    //       {data?.email && (
    //         <div className="flex items-center gap-3 bg-gray-800 rounded-lg p-3">
    //           <span className="text-gray-400 min-w-[100px]">📧 Email:</span>
    //           <span className="truncate">{data?.email}</span>
    //         </div>
    //       )}

    //       {data?.twitter_username && (
    //         <div className="flex items-center gap-3 bg-gray-800 rounded-lg p-3">
    //           <span className="text-gray-400 min-w-[100px]">🐦 Twitter:</span>
    //           <a
    //             href={`https://twitter.com/${data?.twitter_username}`}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="text-blue-400 hover:underline"
    //           >
    //             @{data?.twitter_username}
    //           </a>
    //         </div>
    //       )}

    //       <div className="flex items-center gap-3 bg-gray-800 rounded-lg p-3">
    //         <span className="text-gray-400 min-w-[100px]">📅 Joined:</span>
    //         <span>
    //           {new Date(data?.created_at).toLocaleDateString("en-US", {
    //             year: "numeric",
    //             month: "long",
    //             day: "numeric",
    //           })}
    //         </span>
    //       </div>
    //     </div>

    //     {/* View Profile Button */}
    //     <div className="mt-8 text-center">
    //       <a
    //         href={data?.html_url}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
    //       >
    //         View GitHub Profile
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Github;

export const githubinfoloader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
