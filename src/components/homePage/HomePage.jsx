import React, { useEffect, useState } from "react";
import SearchBox from "./searchBox/SearchBox";
import { GetCoin } from "../../services/CryptoApi";
import "./HomePage.css";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await GetCoin();
      setCoins(data);
    };

    fetchAPI();
  }, []);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const searchedCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SearchBox searchHandler={searchHandler} />

      {coins.length ? (
        <div>
          {searchedCoins.map((coin) => {
            return coin.name;
          })}
        </div>
      ) : (
        <div class="loader"></div>
      )}
    </>
  );
};

export default HomePage;
