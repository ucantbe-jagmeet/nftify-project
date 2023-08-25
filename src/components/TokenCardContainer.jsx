/* eslint-disable react/prop-types */
import BasicInfoCard from "./BasicInfoCard";

const TokenCardContainer = ({ tokenResults }) => {
  return (
    <div>
      <BasicInfoCard data={tokenResults.Basic_Info} />
    </div>
  );
};

export default TokenCardContainer;
