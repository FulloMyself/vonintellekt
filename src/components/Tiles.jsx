import React from "react";
import "./Tiles.css";
import { Link, useNavigate } from "react-router-dom";

const Tiles = () => {
  const [showBio, setShowBio] = React.useState(false);
  const [showContact, setShowContact] = React.useState(false);
  const navigate = useNavigate();

  const tiles = [
    {
      id: "biography",
      label: "BIOGRAPHY",
      icon: "https://dwvo2npct47gg.cloudfront.net/gifs/awgeForum.gif",
      colorClass: "forum",
      onClick: () => setShowBio(true),
    },
    {
      id: "dvd",
      label: "DVD",
      icon: "https://www.gifservice.fr/img/gif-vignette-large/83f10c77052dd25a3d1cb414383d9d79/273081-d-v-d-video-video-icons-multi-media.gif",
      colorClass: "black",
      onClick: () => navigate("/dvd"),
    },
    {
      id: "shop",
      label: "SHOP",
      icon: "https://dwvo2npct47gg.cloudfront.net/gifs/hats_2.gif",
      colorClass: "green",
      onClick: () => navigate("/shop"),
      style: { transform: "scale(1.2) translateY(0)" },
    },
    {
      id: "about",
      label: "ABOUT",
      icon: "https://dwvo2npct47gg.cloudfront.net/gifs/question-block-red.gif",
      colorClass: "red",
      onClick: () => navigate("/about"),
    },
    {
      id: "contact",
      label: "CONTACT",
      icon: "https://dwvo2npct47gg.cloudfront.net/gifs/pager.gif",
      colorClass: "green",
      onClick: () => setShowContact(true),
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
        A lyrical rapper at heart, Von Intellekt's music draws from real-life events, personal experiences, and sharp social commentary. His artistry has already made waves, with standout moments such as his Curfew Time Freestyle video earning rotation on Channel O and a feature on Stogie T's iconic Freestyle Friday. He also left his mark on SpeeKa's Sotra Cyphers (Part 57), performing alongside Chabi Mas.
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

  const handleTileClick = (tile) => {
    tile.onClick();
  };

  const handleCloseModal = (e) => {
    e.stopPropagation();
    setShowBio(false);
    setShowContact(false);
  };

  return (
    <section className="home-options-container">
      <div className="home-options-grid">
        {tiles.map((tile, idx) => (
          <div className="home-options-item" key={tile.id}>
            <button
              className={`home-options-wrapper ${tile.id === "biography" ? "forums-button" : ""} ${tile.id === "shop" ? "shop-button" : ""} ${tile.id === "about" ? "about-button" : ""} ${tile.id === "contact" ? "contact-button" : ""}`}
              onClick={() => handleTileClick(tile)}
              style={tile.style}
            >
              <img className="home-options-icon" src={tile.icon} alt={tile.label} style={tile.id === "dvd" ? { maxHeight: "8.5vh" } : {}} />
              <h3 className={`home-options-text home-options-text-${tile.colorClass}`}>
                {tile.label}
              </h3>
            </button>
          </div>
        ))}
      </div>
      {(showBio || showContact) && (
        <div className="bio-modal-overlay" onClick={handleCloseModal}>
          <div className="bio-modal" onClick={e => e.stopPropagation()}>
            <button className="bio-modal-close" onClick={handleCloseModal} tabIndex={0} aria-label="Close biography/contact modal">✕</button>
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
          padding: 2rem 1.2rem;
          max-width: 95vw;
          width: 100%;
          color: #fff;
          position: relative;
          animation: fadeInUp 0.4s;
          max-height: 90vh;
          overflow-y: auto;
        }
        .bio-modal-close {
          position: absolute;
          top: 0.7rem;
          right: 0.7rem;
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
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bio-content h2 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          font-size: 1.3rem;
          color: #00ffe7;
        }
        .bio-content p {
          margin: 0.5rem 0;
          line-height: 1.5;
          font-size: 1rem;
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