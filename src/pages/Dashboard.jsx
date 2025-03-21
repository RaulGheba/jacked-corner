import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getExercises from "../services/apiExercises.js";

export default function Dashboard() {
  const { navigation } = useNavigate();
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    async function fetchExercises() {
      const data = await getExercises();
      setExercises(data);
    }
    fetchExercises();
  }, []);

  console.log(exercises);
  return (
    <div className="relative h-[500px] bg-[url('/imgs/pexels-victorfreitas-2261477.jpg')] bg-cover bg-center border-x-4">
      {/* Optional semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content placed above the background image */}
      <div className="relative flex flex-col h-full items-center justify-center">
        <h1 className="mb-32 text-red-400 text-7xl font-[poppins] italic">
          JACKED CORNER
        </h1>
        <h2 className="text-white text-2xl font-bold font-[poppins]">
          Your place to track your workouts and get big with numbers
        </h2>
      </div>
    </div>
  );
}
