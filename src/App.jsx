import React from "react";
import Card from "./components/Card";
import randomColor from "randomcolor";

export default function App() {
  const [quoteData, setQuoteData] = React.useState({});
  const [error, setError] = React.useState(null);
  const [newQuote, setNewQuote] = React.useState(false)
  const [styleColor, setStyleColor] = React.useState(randomColor())

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/quotes/random");
        const data = await response.json();
        setQuoteData(data);
      } catch (err) {
        setError("Error while fetching quotes");
        console.log("Request error: ", err);
      }
    };
    
    fetchData();
  }, [newQuote]);

  function getNewStyleColor() {
    setStyleColor(randomColor())
  }
    
  function getNewQuote() {
    setNewQuote(prevState => !prevState)
    getNewStyleColor()
  }

  const mainBackgroundColor = {
    backgroundColor: styleColor
  }

  return (
    <main style={mainBackgroundColor}>
      {error ?
        <p>{error}</p>

        : 

        <Card quoteData={quoteData}
          getNewQuote={getNewQuote}
          styleColor={styleColor}
        />
      }
    </main>
  );
}
