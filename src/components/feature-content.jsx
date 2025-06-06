import React from 'react';

const Content = () => {
  return (
    <main style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>
          Bienvenido a <span style={styles.highlight}>TodoEsPosible</span>
        </h2>
        <p style={styles.subtitle}>
          Tu plataforma para organizar metas, tareas y alcanzar tus sueños paso a paso.
        </p>
      </div>

      <div style={styles.card}>
        <h5 style={styles.cardTitle}>🚀 Funcionalidades principales</h5>
        <ul style={styles.list}>
          <li style={styles.listItem}>✅ Crear, editar y eliminar tareas</li>
          <li style={styles.listItem}>📅 Organizar tus días con fechas límite</li>
          <li style={styles.listItem}>📊 Visualizar el progreso de tus metas</li>
          <li style={styles.listItem}>💬 Recibir recordatorios y mensajes de motivación</li>
        </ul>
        <div style={styles.buttonContainer}>
          <button style={styles.button}>Comenzar ahora</button>
        </div>
      </div>
    </main>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: '2rem auto',
    padding: '0 1rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2.5rem',
    margin: 0,
    fontWeight: '700',
    color: '#222',
  },
  highlight: {
    color: '#FFC0CB',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
    marginTop: '0.5rem',
  },
  card: {
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    padding: '2rem',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#444',
    fontWeight: '600',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    marginBottom: '2rem',
  },
  listItem: {
    fontSize: '1.1rem',
    padding: '0.6rem 0',
    borderBottom: '1px solid #eee',
    color: '#333',
  },
  buttonContainer: {
    textAlign: 'right',
  },
  button: {
    backgroundColor: '#FFC0CB',
    color: '#000000',
    border: 'none',
    borderRadius: '4px',
    padding: '0.6rem 1.5rem',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Content;
