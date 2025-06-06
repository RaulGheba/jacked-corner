import supabase from "./supabase.js";

async function getProducts() {
  let { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.log(error.message);
    throw new Error("cant get products");
  }
  return data;
}

export default getProducts;
