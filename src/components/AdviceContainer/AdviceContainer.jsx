import "./AdviceContainer.css";
import { AdviceCard } from "../AdviceCard/AdviceCard";
import { useEffect, useState } from "react";
import axios from "axios";
export const AdviceContainer = () => {
  const [quote, setQuote] = useState({});
  const [click, setClick] = useState(false);
  const getQuoteInfo = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const quoteData = response.data.slip;
    setQuote(quoteData);
  };
  const handleClick = () => {
    setClick(!click);
  };
  useEffect(() => {
    getQuoteInfo();
  }, [click]);
  return (
    <div className="cardContainer">
      <AdviceCard
        id={quote.id}
        advice={quote.advice}
        handleClick={handleClick}
      />
    </div>
  );
};
