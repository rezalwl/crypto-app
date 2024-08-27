import axios from "axios";
const BASE_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false";

const GetCoin = async () => {
  try {
    const res = await axios.get(BASE_URL);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { GetCoin };
