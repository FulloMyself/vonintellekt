import React from 'react';

const AboutPage = () => {
  return (
    <div style={{ 
      padding: '2rem', 
      color: '#fff', 
      minHeight: '60vh',
      maxWidth: '1000px',
      margin: '0 auto'
    }}>
      <h1 style={{ 
        color: '#00ffe7', 
        marginBottom: '2rem',
        fontSize: '2.5rem',
        textShadow: '0 0 20px #00ffe7',
        textAlign: 'center'
      }}>
        About Von Intellekt
      </h1>
      
      <div style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
        <div style={{
          background: '#222',
          padding: '2rem',
          borderRadius: '1rem',
          border: '2px solid #00ffe7',
          boxShadow: '0 0 20px rgba(0, 255, 231, 0.3)',
          marginBottom: '2rem'
        }}>
          <h2 style={{ color: '#00ffe7', marginBottom: '1rem' }}>The Artist</h2>
          <p style={{ marginBottom: '1rem' }}>
            Ofentse Masitsa, known professionally as Von Intellekt, represents the new generation of South African hip-hop artists who refuse to be confined by traditional boundaries. Born on November 16, 1993, in Welkom, Free State, he has masterfully balanced his career in banking with his passion for creating thought-provoking music.
          </p>
          <p>
            His unique perspective as both a financial professional and an artist brings a rare authenticity to his lyrics, speaking to the everyday struggles and aspirations of those who hustle in corporate environments while nurturing their creative dreams.
          </p>
        </div>

        <div style={{
          background: '#222',
          padding: '2rem',
          borderRadius: '1rem',
          border: '2px solid #00ffe7',
          boxShadow: '0 0 20px rgba(0, 255, 231, 0.3)',
          marginBottom: '2rem'
        }}>
          <h2 style={{ color: '#00ffe7', marginBottom: '1rem' }}>The Music</h2>
          <p style={{ marginBottom: '1rem' }}>
            Von Intellekt's approach to hip-hop is deeply rooted in lyricism and storytelling. His music serves as a mirror to society, reflecting real-life experiences, personal growth, and social commentary with surgical precision. Every verse is crafted to challenge listeners intellectually while maintaining the rhythmic appeal that makes hip-hop so captivating.
          </p>
          <p>
            His breakthrough moments include rotation on Channel O for his Curfew Time Freestyle, a feature on the legendary Stogie T's Freestyle Friday, and a memorable appearance on SpeeKa's Sotra Cyphers alongside Chabi Mas.
          </p>
        </div>

        <div style={{
          background: '#222',
          padding: '2rem',
          borderRadius: '1rem',
          border: '2px solid #00ffe7',
          boxShadow: '0 0 20px rgba(0, 255, 231, 0.3)'
        }}>
          <h2 style={{ color: '#00ffe7', marginBottom: '1rem' }}>The Free Recordings</h2>
          <p style={{ marginBottom: '1rem' }}>
            Under his independent label The Free Recordings, Von Intellekt champions artistic freedom and innovative business strategies. The imprint represents more than just a record label—it's a philosophy that hip-hop can be both art and commerce, creativity and business acumen working in harmony.
          </p>
          <p>
            Through The Free Recordings, Von Intellekt is redefining how music can be experienced, consumed, and appreciated, always staying true to the core values of authenticity and intellectual depth that define his artistry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;