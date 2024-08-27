import React, { useEffect, useState } from "react";
import SearchBox from "./searchBox/SearchBox";
import { GetCoin } from "../../services/CryptoApi";
import "./HomePage.css";
import CoinItem from "./coinItem/CoinItem";

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
        <div className="coins-container">
          {searchedCoins.map((coin) => {
            return <CoinItem data ={coin} key={coin.id}/>;
          })}
        </div>
      ) : (
        <div className="loader"></div>
      )}
    </>
  );
};

export default HomePage;
