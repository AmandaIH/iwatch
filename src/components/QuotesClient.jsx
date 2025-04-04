"use client";
const QuotesClient = ({ data }) => {
  console.log(data);
  return (
    <ul>
      {data.quotes.map((quote, id) => (
        <li key={id}>{quote.quote}</li>
      ))}
    </ul>
  );
};

export default QuotesClient;
