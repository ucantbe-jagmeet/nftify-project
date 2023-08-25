/* eslint-disable react/prop-types */
import BaseTokenCard from "./BaseTokenCard";
import BasicInfoCard from "./BasicInfoCard";

const TokenCardContainer = ({ tokenResults }) => {
  //   console.log(tokenResults.Quote_Token);
  //   console.log(tokenResults.Price);
  return (
    <div className="flex">
      <BasicInfoCard data={tokenResults.Basic_Info} />
      <BaseTokenCard data={tokenResults.Base_Token} />
    </div>
  );
};

export default TokenCardContainer;
