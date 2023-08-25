import { useEffect, useState } from "react";
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import axios from "axios";
import TokenCardContainer from "../components/TokenCardContainer";
import Logo from "../components/Logo";
const PairPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tokenResult, setTokenResult] = useState();

  const url = `https://api.dexscreener.com/latest/dex/search/?q=${encodeURIComponent(
    searchQuery
  )}`;

  const fetchTokenResults = async () => {
    try {
      const response = await axios.get(url);
      const PairsData = response.data.pairs;
      console.log(PairsData);
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
      setTokenResult(tokenObjectsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTokenResults();
  }, [searchQuery]);
  return (
    <div className="flex">
      <Aside />
      <div className="bg-main-image w-full sm:-ml-5 px-10 max-h-screen overflow-auto pb-10">
        <div className="sm:hidden flex justify-center w-fit mx-auto">
          <Logo />
        </div>
        <Navbar onSearchQueryChange={setSearchQuery} />
        <h2 className="text-white text-2xl">Pair Address Search Results</h2>
        <div>
          {tokenResult &&
            tokenResult.map((singleToken, index) => {
              return (
                <TokenCardContainer key={index} tokenResults={singleToken} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PairPage;
