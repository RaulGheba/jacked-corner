import supabase from "./supabase.js";
/* eslint-disable no-unused-vars */

async function getWorkouts() {
  let { data, error } = await supabase.from("workouts").select("*");
  if (error) {
    console.log(error.message);
    throw new Error("couldnt get workouts");
  }

  return data;
}

export default getWorkouts;
