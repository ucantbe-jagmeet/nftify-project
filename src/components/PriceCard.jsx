/* eslint-disable react/prop-types */
const PriceCard = ({ data }) => {
  return (
    <div className="h-52 w-64 bg-[#390554] text-white px-7 flex  flex-col gap-y-4 rounded-lg ">
      <h2 className="mt-4">Price</h2>
      <div className="flex text-xs  justify-between">
        <h2>Price Native</h2>
        <h2>ETH {data.price_native.slice(0, 4)}</h2>
      </div>
      <div className="flex text-xs  justify-between">
        <h2>Price Usd</h2>
        <h2>{data.price_usd}</h2>
      </div>
    </div>
  );
};

export default PriceCard;
