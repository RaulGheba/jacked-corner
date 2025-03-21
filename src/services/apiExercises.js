import supabase from "./supabase.js";
/* eslint-disable no-unused-vars */

async function getExercises() {
  let { data, error } = await supabase.from("exercises").select("*");
  if (error) {
    console.log(error.message);
    throw new Error("couldnt get exercises");
  }

  return data;
}

export { getExercises };
