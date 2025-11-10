import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.navbar}>
      <p className={styles.inicio}>Inicio</p>
      <p className={styles.inicio}>Sobre mí</p>
      <p className={styles.inicio}>Experiencia</p>
      <p className={styles.inicio}>Contacto</p>
      <div className={styles.selectPag} />
    </div>
  );
}

export default Component;
