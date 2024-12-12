'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import styles from '@/styles/LandingPage.module.css';

const MarketplacePage = () => {
  const [isWalletOverlayOpen, setWalletOverlayOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Navbar onConnect={() => setWalletOverlayOpen(true)} />
      <div className={styles.content}>
        <h1 className={styles.title}>Marketplace</h1>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h2 className={styles.subtitle}>Carbon Credit 1</h2>
            <p className={styles.text}>Details about Carbon Credit 1</p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.subtitle}>Carbon Credit 2</h2>
            <p className={styles.text}>Details about Carbon Credit 2</p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.subtitle}>Carbon Credit 3</h2>
            <p className={styles.text}>Details about Carbon Credit 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;
