const baseURL = "https://dummyjson.com";

const getAllClothes = async () => {
  const response = await fetch(`${baseURL}/products`);

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const clothesData = await response.json();
  return clothesData;
};

const clothesService = {
  getAllClothes,
};

export default clothesService;
