import QuotesClient from "./QuotesClient";

const QuotesServer = async () => {
  const data = await fetch("https://dummyjson.com/quotes");
  const quotes = await data.json();

  return <QuotesClient data={quotes} />;
};

export default QuotesServer;
