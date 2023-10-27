// api.js
import axios from "axios";

const fetchPackageData = async (packageName) => {
  try {
    const response = await axios.get(
      `https://api.npmjs.org/downloads/range/last-month/${packageName}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching package data", error);
    return null;
  }
};

export { fetchPackageData };
