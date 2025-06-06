// FeatureFooter.jsx
import React from 'react';

const FeatureFooter = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© {new Date().getFullYear()} TodoEsPosible. Todos los derechos reservados.</p>
      <div style={styles.links}>
        <a href="#privacy" style={styles.link}>Privacidad</a>
        <a href="#terms" style={styles.link}>Términos</a>
        <a href="#help" style={styles.link}>Ayuda</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#FFC0CB',
    padding: '1rem',
    color: 'black',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '2rem',
  },
  text: {
    fontSize: '0.9rem',
  },
  links: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '0.9rem',
  }
};

export default FeatureFooter;
