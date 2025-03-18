import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { navigation } = useNavigate();
  return (
    <div className="relative h-[500px] bg-[url('/imgs/pexels-victorfreitas-2261477.jpg')] bg-cover bg-center border-x-4">
      {/* Optional semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content placed above the background image */}
      <div className="relative z-10 flex flex-col h-full items-center justify-center">
        <h1 className="text-white text-4xl font-bold font-[poppins]">
          Your place to track your workouts and get big with numbers
        </h1>
      </div>
    </div>
  );
}
