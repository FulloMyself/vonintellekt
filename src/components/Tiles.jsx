import React from "react";
import "./Tiles.css";

const tiles = [
  {
    id: "biography",
    label: "BIOGRAPHY",
    icon: "https://dwvo2npct47gg.cloudfront.net/gifs/awgeForum.gif",
    colorClass: "forum",
    onClick: () => {}, // handled below
  },
  {
    id: "dvd",
    label: "DVD",
    icon: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gifservice.fr%2Fen%2Fgif%2Fmulti-media-video-icons-d-v-d-video-g11512-p273081.php&psig=AOvVaw3WodVIdSQ8E3El4ZGGM1s8&ust=1757148093289000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjg3vKcwY8DFQAAAAAdAAAAABAL",
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
    onClick: () => {}, // handled below
  },
];

const bioText = (
  <div className="bio-content">
    <h2>Ofentse Masitsa, AKA Von Intellekt</h2>
    <p><b>Label:</b> The Free Recordings</p>
    <p><b>Date of Birth:</b> November 16, 1993</p>
    <p><b>Location:</b> Welkom, Free State</p>
    <p>
      Ofentse Masitsa — better known as Von Intellekt — is a rapper, artist, and entrepreneur from Welkom, Free State, who balances two seemingly different worlds: banking and hip-hop. By day, he navigates the financial sector; by night, he crafts intricate verses that reflect the struggles, triumphs, and contradictions of modern life. This dual identity fuels his art, positioning him as a voice for those chasing creative dreams while grinding through 9-to-5 realities.
    </p>
    <p>
      A lyrical rapper at heart, Von Intellekt’s music draws from real-life events, personal experiences, and sharp social commentary. His artistry has already made waves, with standout moments such as his Curfew Time Freestyle video earning rotation on Channel O and a feature on Stogie T’s iconic Freestyle Friday. He also left his mark on SpeeKa’s Sotra Cyphers (Part 57), performing alongside Chabi Mas.
    </p>
    <p>
      Beyond his music, Von Intellekt embodies the spirit of independence. Under his imprint The Free Recordings, he champions the idea that hip-hop is not just art but also commerce, using innovative rollouts and business-minded strategies to redefine how music can be experienced and consumed.
    </p>
  </div>
);

const contactText = (
  <div className="bio-content">
    <h2>Contact Von Intellekt</h2>
    <p><b>Email (Bookings):</b> <a href="mailto:bookings@vonintellekt.co.za">bookings@vonintellekt.co.za</a></p>
    <p><b>Twitter:</b> <a href="https://twitter.com/Von_Intellekt" target="_blank" rel="noopener noreferrer">@Von_Intellekt</a></p>
    <p><b>Instagram:</b> <a href="https://instagram.com/von_intellekt" target="_blank" rel="noopener noreferrer">@von_intellekt</a></p>
    <p><b>TikTok:</b> <a href="https://www.tiktok.com/@von_intellekt" target="_blank" rel="noopener noreferrer">Von_Intellekt</a></p>
    <p><b>YouTube:</b> <a href="https://www.youtube.com/results?search_query=Von+Intellekt" target="_blank" rel="noopener noreferrer">Von Intellekt</a></p>
    <p><b>Bandcamp:</b> <a href="https://thefreerecordings.bandcamp.com" target="_blank" rel="noopener noreferrer">thefreerecordings.bandcamp.com</a></p>
  </div>
);

const Tiles = () => {
  const [showBio, setShowBio] = React.useState(false);
  const [showContact, setShowContact] = React.useState(false);

  const handleTileClick = (tile) => {
    if (tile.id === "biography") {
      setShowBio(true);
    } else if (tile.id === "contact") {
      setShowContact(true);
    } else {
      tile.onClick();
    }
  };

  const handleCloseModal = () => {
    setShowBio(false);
    setShowContact(false);
  };

  return (
    <section className="home-options-container">
      <div className="home-options">
        <div className="home-options-row">
          <div className="home-options-item">
            <button
              className="home-options-wrapper forums-button"
              onClick={() => handleTileClick(tiles[0])}
            >
              <img className="home-options-icon" src={tiles[0].icon} alt="Biography" />
              <h3 className={`home-options-text home-options-text-${tiles[0].colorClass}`}>
                {tiles[0].label}
              </h3>
            </button>
          </div>
          <div className="home-options-item">
            <button
              className="home-options-wrapper"
              onClick={() => handleTileClick(tiles[1])}
            >
              <img
                className="home-options-icon"
                style={{ maxHeight: "8.5vh" }}
                src={tiles[1].icon}
                alt="DVD"
              />
              <h3 className={`home-options-text home-options-text-${tiles[1].colorClass}`}>
                {tiles[1].label}
              </h3>
            </button>
          </div>
          <div style={{ flex: 1 }} />
          <div style={{ flex: 1 }} />
        </div>
        <div className="home-options-row">
          <div className="home-options-item">
            <button
              className="home-options-wrapper shop-button"
              onClick={() => handleTileClick(tiles[2])}
            >
              <img
                className="home-options-icon"
                style={tiles[2].style}
                src={tiles[2].icon}
                alt="Shop"
              />
              <h3 className={`home-options-text home-options-text-${tiles[2].colorClass}`}>
                {tiles[2].label}
              </h3>
            </button>
          </div>
          <div className="home-options-item">
            <button
              className="home-options-wrapper about-button"
              onClick={() => handleTileClick(tiles[3])}
            >
              <img
                className="home-options-icon"
                src={tiles[3].icon}
                alt="About"
              />
              <h3 className={`home-options-text home-options-text-${tiles[3].colorClass}`}>
                {tiles[3].label}
              </h3>
            </button>
          </div>
          <div className="home-options-item">
            <button
              className="home-options-wrapper contact-button"
              onClick={() => handleTileClick(tiles[4])}
            >
              <img
                className="home-options-icon"
                src={tiles[4].icon}
                alt="Contact"
              />
              <h3 className={`home-options-text home-options-text-${tiles[4].colorClass}`}>
                {tiles[4].label}
              </h3>
            </button>
          </div>
        </div>
      </div>
      {(showBio || showContact) && (
        <div className="bio-modal-overlay" onClick={handleCloseModal}>
          <div className="bio-modal" onClick={e => e.stopPropagation()}>
            <button className="bio-modal-close" onClick={handleCloseModal}>X</button>
            {showBio && bioText}
            {showContact && contactText}
          </div>
        </div>
      )}
      <style>
        {`
        .bio-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          animation: fadeIn 0.3s;
        }
        .bio-modal {
          background: #181818;
          border-radius: 1.5rem;
          box-shadow: 0 0 32px #00ffe7a0, 0 0 0 2px #222 inset;
          padding: 2.5rem 2rem;
          max-width: 480px;
          color: #fff;
          position: relative;
          animation: fadeInUp 0.4s;
        }
        .bio-modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: #00ffe7;
          color: #181818;
          border: none;
          border-radius: 50%;
          width: 2rem;
          height: 2rem;
          font-size: 1.2rem;
          font-weight: bold;
          cursor: pointer;
          box-shadow: 0 0 8px #00ffe7;
        }
        .bio-content h2 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
          color: #00ffe7;
        }
        .bio-content p {
          margin: 0.5rem 0;
          line-height: 1.5;
        }
        .bio-content a {
          color: #00ffe7;
          text-decoration: underline;
          word-break: break-all;
        }
        @keyframes fadeIn {
          from { opacity: 0;}
          to { opacity: 1;}
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        `}
      </style>
    </section>
  );
};

export default Tiles;
