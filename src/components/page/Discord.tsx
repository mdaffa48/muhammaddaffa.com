import React, { useEffect } from 'react';

const RedirectToDiscord: React.FC = () => {
  useEffect(() => {
    // Redirect to the specified URL
    window.location.href = 'https://discord.gg/kMUSvP92fh';
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      textAlign: 'center', 
      flexDirection: 'column' 
    }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>Redirecting...</h1>
      <p style={{ fontSize: '1.5rem' }}>
        If you are not redirected automatically, click{' '}
        <a href="https://discord.gg/kMUSvP92fh" style={{ fontWeight: 'bold', textDecoration: 'none' }}>
          here
        </a>.
      </p>
    </div>
  );
};

export default RedirectToDiscord;
