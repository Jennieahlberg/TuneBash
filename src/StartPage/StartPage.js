import React from "react";
import "./StartPage.css";



const startPage = props => {
  
  return (
    <div>
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 99.99992370605469 99.98799133300781"
          fill="#6e1249"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M47.102 0h5.784c8.338.642 15.042 2.917 20.99 5.95a976.829 976.829 0 0 1-29.253 29.252c-2.969-3.846-6.214-6.932-13.221-6.279-6.848.638-12.008 6.789-12.065 13.552-.093 11.1 12.636 17.426 21.981 11.239 2.455-1.625 4.708-4.378 6.941-6.611 6.658-6.659 13.369-13.473 19.997-20.164 5.471 4.927 10.706 10.542 16.196 16.032.574.574 2.305 1.916 2.314 2.148.021.503-3.571 3.738-3.967 4.132-4.035 4.035-8.129 8.161-12.23 11.9-2.845-5.982-12.565-8.104-18.84-4.297-3.834 2.326-6.286 6.06-6.446 11.238-.221 7.125 4.855 13.32 11.9 14.047 9.767 1.009 13.735-5.969 18.51-10.742 8.042-8.042 16.394-16.425 24.295-23.963.308 16.392-5.383 28.214-13.388 36.524-8.017 8.322-18.679 14.98-33.715 16.03h-5.784c-14.023-1.231-24.828-6.812-32.558-14.543C6.814 77.715 1.225 66.916 0 52.887v-5.785C.812 33.583 7.182 22 14.709 14.544 22.682 6.645 33.328 1.089 47.102 0z"
          />
        </svg>
      </div>
      <div>
        <p className="logoName">TUNEBASH</p>
      </div>
      <div>
        <a href="/login" className="btn btn-primary">
          Log in with Spotify
        </a>
      </div>
      <div className="codeInput">
        <input
          id="codeInput"
          type="text"
          name="box"
          placeholder="Skriv in pinkod"
        />
        <button className="playButton" onClick={props.onClick}>
          Let's rock!
        </button>
      </div>
      <div className="newGame">
        <button id="newGameButton" onClick={props.onClickNew}>
          Generera nytt spel
        </button>
        
      </div>  
    </div>
  );
};

export default startPage;
