/* eslint-disable react/prop-types */
const QuoteTokenCard = ({ data }) => {
  return (
    <div className="h-52 w-64 bg-[#390554] text-white px-7 flex  flex-col gap-y-4 rounded-lg ">
      <h2 className="mt-4">Quote Token</h2>
      <div className="flex text-xs  justify-between">
        <h2>Name</h2>
        <h2>{data.quote_token_name}</h2>
      </div>
      <div className="flex text-xs  justify-between">
        <h2>Symbol</h2>
        <h2>{data.quote_token_symbol}</h2>
      </div>
      <div className="flex text-xs  justify-between">
        <h2>Address </h2>
        <h2>{data.quote_token_address.slice(0, 12)}...</h2>
      </div>
    </div>
  );
};

export default QuoteTokenCard;
