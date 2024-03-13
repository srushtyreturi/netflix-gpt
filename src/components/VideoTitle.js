import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white p-4 px-12 text-2xl text-black rounded-md hover:bg-opacity-80">
          <span className="mr-3">▶</span> Play
        </button>
        <button className="mx-2 bg-gray-500 p-4 px-12 text-white text-2xl rounded-md hover:bg-opacity-70">
          <span className="mr-3">ⓘ</span>More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
