import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../services/supabase.js";

export default function Dashboard() {
  const navigation = useNavigate();
  // const [exercises, setExercises] = useState([]);
  // useEffect(() => {
  //   async function fetchExercises() {
  //     const data = await getExercises();
  //     setExercises(data);
  //   }
  //   fetchExercises();
  // }, []);

  return (
    <div className="relative h-[500px] bg-[url('/imgs/pexels-victorfreitas-2261477.jpg')] bg-cover bg-center border-x-4">
      {/* Optional semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content placed above the background image */}
      <div className="relative flex flex-col h-full items-center justify-center gap-3">
        <h1 className="mb-32 text-red-400 text-7xl font-[poppins] italic">
          JACKED CORNER
        </h1>
        <button
          onClick={() => navigation("/login")}
          className="text-white p-4 w-3/12 border-2 bg-blue-400 hover:cursor-pointer mb-8 mt-[-24px] font-[poppins]"
        >
          Log in
        </button>
        <button
          onClick={() => navigation("/signup")}
          className="text-blue-200 p-3 w-2.5/12 border-2 bg-red-400 hover:cursor-pointer mb-8 mt-[-24px] font-[poppins] text-[16px]"
        >
          Join now to add and track workouts
        </button>
        <h2 className="text-white text-2xl font-bold font-[poppins]">
          Your place to track your workouts and get big with numbers
        </h2>
      </div>
    </div>
  );
}
