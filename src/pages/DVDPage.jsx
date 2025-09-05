import React from 'react';

const DVDPage = () => {
  return (
    <div style={{ 
      padding: '2rem', 
      color: '#fff', 
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <h1 style={{ 
        color: '#00ffe7', 
        marginBottom: '2rem',
        fontSize: '2.5rem',
        textShadow: '0 0 20px #00ffe7'
      }}>
        📀 DVD Collection
      </h1>
      
      <div style={{
        maxWidth: '800px',
        lineHeight: '1.6'
      }}>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Explore Von Intellekt's exclusive video content, music videos, and behind-the-scenes footage.
        </p>
        
        <div style={{
          background: '#222',
          padding: '2rem',
          borderRadius: '1rem',
          border: '2px solid #00ffe7',
          boxShadow: '0 0 20px rgba(0, 255, 231, 0.3)',
          margin: '2rem 0'
        }}>
          <h3 style={{ color: '#00ffe7', marginBottom: '1rem' }}>Featured Videos</h3>
          <p>• Curfew Time Freestyle (Featured on Channel O)</p>
          <p>• Stogie T's Freestyle Friday Feature</p>
          <p>• SpeeKa's Sotra Cyphers (Part 57) with Chabi Mas</p>
          <p>• Behind the Scenes: The Free Recordings</p>
        </div>
        
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#ccc',
          fontStyle: 'italic'
        }}>
          More content coming soon...
        </p>
      </div>
    </div>
  );
};

export default DVDPage;