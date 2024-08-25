import React from "react";
// import axios from "axios";

export default function App() {
  const [quoteData, setQuoteData] = React.useState({});
  const [error, setError] = React.useState(null);
  console.log(quoteData)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/quotes/1");
        const data = await response.json();
        setQuoteData(data);
      } catch (err) {
        setError("Error fetching quotes");
        console.log("Request error: ", err);
      }
    };
    
    fetchData();;
  }, []);

  return (
    <main>
      
    </main>
  );
}
