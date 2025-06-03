import React, { useState } from 'react';

/**
 * Simple Cat Fact App 🐾
 * Coded with love and caffeine by Rishabh Bothra aka Rex Jain 💻🧠
 */

const RandomFact = () => {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchFact = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      setFact('Oops! Could not fetch a fact 🐾');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Cat Facts Generator 😺</h1>
      <button style={styles.button} onClick={fetchFact}>
        {loading ? 'Loading...' : 'Get Random Cat Fact'}
      </button>
      <p style={styles.fact}>{fact}</p>
      <footer style={styles.footer}>
        Made with ❤️ by <strong>Rishabh Bothra aka Rex Jain</strong>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    textAlign: 'center',
    maxWidth: '500px',
    margin: 'auto',
  },
  title: {
    fontSize: '2rem',
    color: '#444',
  },
  button: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    margin: '1rem 0',
    backgroundColor: '#ff9800',
    color: '#fff',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
  },
  fact: {
    fontSize: '1.2rem',
    color: '#555',
  },
  footer: {
    marginTop: '2rem',
    fontSize: '0.9rem',
    color: '#777',
  },
};

export default RandomFact;
