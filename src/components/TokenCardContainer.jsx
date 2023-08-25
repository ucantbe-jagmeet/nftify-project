/* eslint-disable react/prop-types */
import BaseTokenCard from "./BaseTokenCard";
import QuoteTokenCard from "./QuoteTokenCard";
import BasicInfoCard from "./BasicInfoCard";
import PriceCard from "./PriceCard";

const TokenCardContainer = ({ tokenResults }) => {
  return (
    <div className="grid justify-center lg:grid-cols-2 xl:grid-cols-4 gap-7 mt-4 lg:ml-5 ">
      <BasicInfoCard data={tokenResults.Basic_Info} />
      <BaseTokenCard data={tokenResults.Base_Token} />
      <QuoteTokenCard data={tokenResults.Quote_Token} />
      <PriceCard data={tokenResults.Price} />
    </div>
  );
};

export default TokenCardContainer;
