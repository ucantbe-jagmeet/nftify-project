/* eslint-disable react/prop-types */
const BaseTokenCard = ({ data }) => {
  console.log("data from base token card", data);
  return (
    <div className="h-52 w-64 bg-[#390554] text-white px-7 flex  flex-col gap-y-4 rounded-lg m-5">
      <h2 className="mt-4">Base Token</h2>
      <div className="flex text-xs  justify-between">
        <h2>Name</h2>
        <h2>{data.base_token_name}...</h2>
      </div>
      <div className="flex text-xs  justify-between">
        <h2>Symbol</h2>
        <h2>{data.base_token_symbol}</h2>
      </div>
      <div className="flex text-xs  justify-between">
        <h2>Address </h2>
        <h2>{data.base_token_address.slice(0, 12)}...</h2>
      </div>
      <div></div>
    </div>
  );
};

export default BaseTokenCard;
