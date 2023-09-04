/* eslint-disable react/prop-types */
const BasicInfoCard = ({ data }) => {
  return (
    <div className="h-52 w-64 bg-[#390554] text-white px-7 flex  flex-col gap-y-4 rounded-lg ">
      <h2 className="mt-4">Basic Info</h2>
      <div className="flex text-xs  justify-between">
        <h2>Pair Created At</h2>
        <h2>{data.pair_createdAt}</h2>
      </div>
      <div className="flex text-xs  justify-between">
        <h2>Symbol</h2>
        <h2>{data.base_token_symbol}</h2>
      </div>
      <div className="flex text-xs  justify-between">
        <h2>Dex Id</h2>
        <h2>
          {data.dexId.slice(0, 15)}
          {data.dexId.length > 12 ? "..." : ""}
        </h2>
      </div>
      <div className="grid grid-cols-5 text-xs justify-between whitespace-normal gap-x-6 break-all">
        <h2 className="col-span-2">Pair Address</h2>
        <h2 className="col-span-3 ">{data.pair_address}</h2>
      </div>
    </div>
  );
};

export default BasicInfoCard;
