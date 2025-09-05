import React from "react";
import "./Tiles.css";

const tiles = [
  {
    id: "forum",
    label: "FORUM",
    icon: "https://dwvo2npct47gg.cloudfront.net/gifs/awgeForum.gif",
    colorClass: "forum",
    onClick: () => window.open("#forum", "_self"),
  },
  {
    id: "dvd",
    label: "DVD",
    icon: "https://dwvo2npct47gg.cloudfront.net/gifs/awgeDVD.gif",
    colorClass: "black",
    onClick: () => window.open("#dvd", "_self"),
  },
  {
    id: "shop",
    label: "SHOP",
    icon: "https://dwvo2npct47gg.cloudfront.net/gifs/hats_2.gif",
    colorClass: "green",
    onClick: () => window.open("#shop", "_self"),
    style: { transform: "scale(1.2) translateY(0)" },
  },
  {
    id: "asaprocky",
    label: "A$AP ROCKY",
    icon: "https://dwvo2npct47gg.cloudfront.net/gifs/DBD-COVER1-reverse.gif",
    colorClass: "black",
    onClick: () => window.open("https://asaprocky.com", "_blank"),
    style: { transform: "scale(1.6)" },
  },
  {
    id: "about",
    label: "ABOUT",
    icon: "https://dwvo2npct47gg.cloudfront.net/gifs/question-block-red.gif",
    colorClass: "red",
    onClick: () => window.open("#about", "_self"),
  },
  {
    id: "contact",
    label: "CONTACT",
    icon: "https://dwvo2npct47gg.cloudfront.net/gifs/pager.gif",
    colorClass: "green",
    onClick: () => window.open("#contact", "_self"),
  },
];

const Tiles = () => (
  <section className="home-options-container">
    <div className="home-options">
      <div className="home-options-row">
        <div className="home-options-item">
          <button className="home-options-wrapper forums-button" onClick={tiles[0].onClick}>
            <img className="home-options-icon" src={tiles[0].icon} alt="Forum" />
            <h3 className={`home-options-text home-options-text-${tiles[0].colorClass}`}>{tiles[0].label}</h3>
          </button>
        </div>
        <div className="home-options-item">
          <button className="home-options-wrapper" onClick={tiles[1].onClick}>
            <img className="home-options-icon" style={{ maxHeight: "8.5vh" }} src={tiles[1].icon} alt="DVD" />
            <h3 className={`home-options-text home-options-text-${tiles[1].colorClass}`}>{tiles[1].label}</h3>
          </button>
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ flex: 1 }} />
      </div>
      <div className="home-options-row">
        <div className="home-options-item">
          <button className="home-options-wrapper shop-button" onClick={tiles[2].onClick}>
            <img className="home-options-icon" style={tiles[2].style} src={tiles[2].icon} alt="Shop" />
            <h3 className={`home-options-text home-options-text-${tiles[2].colorClass}`}>{tiles[2].label}</h3>
          </button>
        </div>
        <div className="home-options-item">
          <button className="home-options-wrapper rallyrace-button" onClick={tiles[3].onClick}>
            <img className="home-options-icon" style={tiles[3].style} src={tiles[3].icon} alt="A$AP ROCKY" />
            <h3 className={`home-options-text home-options-text-${tiles[3].colorClass}`}>{tiles[3].label}</h3>
          </button>
        </div>
        <div className="home-options-item">
          <button className="home-options-wrapper about-button" onClick={tiles[4].onClick}>
            <img className="home-options-icon" src={tiles[4].icon} alt="About" />
            <h3 className={`home-options-text home-options-text-${tiles[4].colorClass}`}>{tiles[4].label}</h3>
          </button>
        </div>
        <div className="home-options-item">
          <button className="home-options-wrapper contact-button" onClick={tiles[5].onClick}>
            <img className="home-options-icon" src={tiles[5].icon} alt="Contact" />
            <h3 className={`home-options-text home-options-text-${tiles[5].colorClass}`}>{tiles[5].label}</h3>
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Tiles;
