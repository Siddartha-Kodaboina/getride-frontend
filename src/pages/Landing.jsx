import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Landing.module.css';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.landing}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.logo}>GetRide</h1>
          <p className={styles.tagline}>
            Student-to-student rides. Safe, affordable, convenient.
          </p>

          <div className={styles.roleSelection}>
            <div className={styles.roleCard} onClick={() => navigate('/rider/request')}>
              <div className={styles.roleIcon}>🎒</div>
              <h3 className={styles.roleTitle}>Need a Ride?</h3>
              <p className={styles.roleDescription}>
                Find affordable rides from fellow students going your way
              </p>
            </div>

            <div className={styles.roleCard} onClick={() => navigate('/driver/browse')}>
              <div className={styles.roleIcon}>🚗</div>
              <h3 className={styles.roleTitle}>Offer Rides</h3>
              <p className={styles.roleDescription}>
                Make money by offering rides to students on your route
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <h2 className={styles.featuresTitle}>Why GetRide?</h2>
        <div className={styles.featureGrid}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>💰</div>
            <h4 className={styles.featureTitle}>Save Money</h4>
            <p className={styles.featureText}>
              Pay less than traditional ride services with student-friendly pricing
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>🔒</div>
            <h4 className={styles.featureTitle}>Student Verified</h4>
            <p className={styles.featureText}>
              All users are verified students for a safer community
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>⚡</div>
            <h4 className={styles.featureTitle}>Quick & Easy</h4>
            <p className={styles.featureText}>
              Request or offer a ride in seconds with our simple interface
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>🌍</div>
            <h4 className={styles.featureTitle}>Eco-Friendly</h4>
            <p className={styles.featureText}>
              Share rides, reduce carbon footprint, help the environment
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
