import { useEffect, useState } from "react";
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import axios from "axios";
import TokenCardContainer from "../components/TokenCardContainer";
const url =
  "https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8";

const TokenPage = () => {
  const [tokenResults, setTokenResults] = useState([]);

  const fetchTokenResults = async () => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTokenResults();
  }, []);
  // console.log("tokenResults", tokenResults);

  return (
    <div className="flex">
      <Aside />
      <div className="bg-main-image w-full -ml-5 px-10 max-h-screen overflow-auto pb-10">
        <Navbar />
        <h2 className="text-white text-2xl">Token Search Results</h2>
        <div>
          {tokenResults.map((singleToken, index) => {
            return (
              <TokenCardContainer key={index} tokenResults={singleToken} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TokenPage;
