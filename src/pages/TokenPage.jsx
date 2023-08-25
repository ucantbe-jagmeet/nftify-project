import { useEffect, useState } from "react";
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import axios from "axios";
import TokenCardContainer from "../components/TokenCardContainer";
const url =
  "https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8";
const tokenInfo = {
  Basic_Info: {
    pair_createdAt: "",
    base_token_symbol: "",
    dexId: "",
    pair_address: "",
  },
  Base_Token: {
    base_token_address: "",
    base_token_symbol: "",
    base_token_name: "",
  },
  Quote_Token: {
    quote_token_name: "",
    quote_token_address: "",
    quote_token_symbol: "",
  },
  Price: {
    price_native: "",
    price_usd: "",
  },
};
const TokenPage = () => {
  const [tokenResults, setTokenResults] = useState(tokenInfo);

  const fetchTokenResults = async () => {
    try {
      const response = await axios.get(url);
      const singlePair = response.data.pairs.slice(0, 1);
      console.log(singlePair[0]);
      const newTokenInfo = {
        Basic_Info: {
          pair_createdAt: singlePair[0].pairCreatedAt,
          base_token_symbol: singlePair[0].baseToken.symbol,
          dexId: singlePair[0].dexId,
          pair_address: singlePair[0].pairAddress,
        },
        Base_Token: {
          base_token_address: singlePair[0].baseToken.address,
          base_token_symbol: singlePair[0].baseToken.symbol,
          base_token_name: singlePair[0].baseToken.name,
        },
        Quote_Token: {
          quote_token_name: singlePair[0].quoteToken.name,
          quote_token_address: singlePair[0].quoteToken.address,
          quote_token_symbol: singlePair[0].quoteToken.symbol,
        },
        Price: {
          price_native: singlePair[0].priceNative,
          price_usd: singlePair[0].priceUsd,
        },
      };
      setTokenResults(newTokenInfo);
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
      <div className="bg-main-image w-full -ml-5 px-10 ">
        <Navbar />
        <h2 className="text-white text-2xl">Token Search Results</h2>
        <TokenCardContainer tokenResults={tokenResults} />
      </div>
    </div>
  );
};

export default TokenPage;
