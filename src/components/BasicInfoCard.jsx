/* eslint-disable react/prop-types */
const BasicInfoCard = ({ data }) => {
  return (
    <div className="h-52 w-64 bg-[#390554] text-white px-7 flex  flex-col justify-evenly rounded-lg m-5">
      <h2>Basic Info</h2>
      <div className="flex text-xs  justify-between">
        <h2>Pair Created At :</h2>
        <h2>{data.pair_createdAt}</h2>
      </div>
      <div className="flex text-xs  justify-between">
        <h2>Symbol</h2>
        <h2>{data.base_token_symbol}</h2>
      </div>
      <div className="flex text-xs  justify-between">
        <h2>Dex Id</h2>
        <h2>{data.dexId}</h2>
      </div>
      <div className="flex text-xs  justify-between">
        <h2>Pair Address</h2>
        <h2>{data.pair_address.slice(0, 12)}...</h2>
      </div>
    </div>
  );
};

export default BasicInfoCard;
