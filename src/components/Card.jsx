import twitterIcon from "../assets/twitter-icon.png";

export default function Card({ quoteData, getNewQuote, styleColor }) {

  const buttonColorStyles = {
    backgroundColor: styleColor
  }

  return (
    <div id="quote-box">
      <p id="text" style={{ color: styleColor }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="45" height="30" style={{ fill: styleColor }}>
        <path d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z"/>
      </svg>
        {quoteData.quote}
      </p>
      <p id="author" style={{ color: styleColor }}>
        - {quoteData.author}
      </p>
      <div className="buttons">
        <button className="socials-buttons" style={buttonColorStyles}>
          <a href="https://twitter.com/intent/tweet" id="tweet-quote" target="_blank" rel="noopener noreferrer">
            <img
              src={twitterIcon}
              alt="Twitter icon"
              className="twitter-icon"
            />
          </a>
        </button>
        <button id="new-quote" onClick={getNewQuote} style={buttonColorStyles}>
          New quote
        </button>
      </div>
    </div>
  );
}
