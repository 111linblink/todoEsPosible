import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>TodoEsPosible</h1>
      <nav style={styles.nav}>
        <a href="#home" style={styles.link}>Inicio</a>
        <a href="#features" style={styles.link}>Funcionalidades</a>
        <a href="#contact" style={styles.link}>Contacto</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#FFC0CB',
    padding: '1rem',
    color: 'black',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: '1.5rem',
  },
  nav: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};

export default Header;
