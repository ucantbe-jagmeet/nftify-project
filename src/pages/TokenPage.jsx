import { useEffect, useState } from "react";
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import axios from "axios";
import TokenCardContainer from "../components/TokenCardContainer";
import Logo from "../components/Logo";
const url =
  "https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8";

const TokenPage = () => {
  const [tokenResults, setTokenResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchTokenResults = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      const PairsData = response.data.pairs.slice(0, 10);

      const tokenObjectsData = PairsData.map((obj) => ({
        Basic_Info: {
          pair_createdAt: obj.pairCreatedAt,
          base_token_symbol: obj.baseToken.symbol,
          dexId: obj.dexId,
          pair_address: obj.pairAddress,
        },
        Base_Token: {
          base_token_address: obj.baseToken.address,
          base_token_symbol: obj.baseToken.symbol,
          base_token_name: obj.baseToken.name,
        },
        Quote_Token: {
          quote_token_name: obj.quoteToken.name,
          quote_token_address: obj.quoteToken.address,
          quote_token_symbol: obj.quoteToken.symbol,
        },
        Price: {
          price_native: obj.priceNative,
          price_usd: obj.priceUsd,
        },
      }));
      setTokenResults(tokenObjectsData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTokenResults();
  }, []);
  console.log("tokenResults", tokenResults);

  return (
    <div className="flex">
      <Aside />
      <div className="bg-main-image w-full sm:-ml-5 px-10 max-h-screen overflow-auto pb-10">
        <div className="sm:hidden flex justify-center w-fit mx-auto">
          <Logo />
        </div>
        <Navbar />
        <h2 className="text-white text-2xl">Token Search Results</h2>
        {!loading ? (
          <div className="flex items-center flex-col">
            {tokenResults
              .sort(
                (a, b) =>
                  parseFloat(b.Price.price_usd) - parseFloat(a.Price.price_usd)
              )
              .map((singleToken, index) => {
                return (
                  <TokenCardContainer key={index} tokenResults={singleToken} />
                );
              })}
          </div>
        ) : (
          <h2 className="text-white mt-10 text-3xl">Fetching Data ....</h2>
        )}
      </div>
    </div>
  );
};

export default TokenPage;
