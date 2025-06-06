// components/feature-ui-improvements.jsx
import React from 'react';

const FeatureUIImprovements = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Mejoras en la Interfaz</h2>
      <ul style={styles.list}>
        <li>✅ Diseño más limpio y moderno.</li>
        <li>✅ Mejor experiencia en dispositivos móviles.</li>
        <li>✅ Navegación más rápida e intuitiva.</li>
        <li>✅ Nuevas animaciones suaves.</li>
      </ul>
    </section>
  );
};

const styles = {
  section: {
    padding: '2rem',
    backgroundColor: '#fff0f5',
    color: '#333',
  },
  heading: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: 0,
    fontSize: '1rem',
    lineHeight: '1.8',
  }
};

export default FeatureUIImprovements;
