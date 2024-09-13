import React, { useState, useEffect } from 'react';
import styles from './footer.module.css';
import { FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  return (
    <section className={styles.principalDiv}>
      <div className={styles.boxCopy}>
        <h1>Todos os direitos reservados para "Felipe José de Lima" ©</h1>
      </div>
      <div className={styles.boxButton}>
        {showScroll && (
          <button className={styles.scrollTopButton} onClick={scrollTop}>
            <FaArrowUp style={{ color: 'Blue' }} />
          </button>
        )}
      </div>
    </section>
  );
}
