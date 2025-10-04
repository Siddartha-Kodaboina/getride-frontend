import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { rideRequestAPI } from '../services/api';
import styles from './RiderRequest.module.css';

const RiderRequest = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fromLocation: '',
    toLocation: '',
    requestedDateTime: '',
    maxPrice: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await rideRequestAPI.create({
        ...formData,
        maxPrice: parseFloat(formData.maxPrice)
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Error creating ride request:', error);
      alert('Failed to create ride request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.success}>
            <div className={styles.successIcon}>✅</div>
            <h2 className={styles.successTitle}>Ride Request Posted!</h2>
            <p className={styles.successMessage}>
              Drivers will start making offers soon. Check your dashboard to see incoming offers.
            </p>
            <div className={styles.actions}>
              <Button variant="primary" onClick={() => navigate('/rider/dashboard')}>
                View My Requests
              </Button>
              <Button variant="outline" onClick={() => navigate('/')}>
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.backButton} onClick={() => navigate('/')}>
            ← Back to Home
          </div>
          <h1 className={styles.title}>Request a Ride</h1>
          <p className={styles.subtitle}>
            Tell us where you need to go and when
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>From</label>
            <input
              className={styles.input}
              type="text"
              name="fromLocation"
              value={formData.fromLocation}
              onChange={handleChange}
              placeholder="e.g., Campus Library"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>To</label>
            <input
              className={styles.input}
              type="text"
              name="toLocation"
              value={formData.toLocation}
              onChange={handleChange}
              placeholder="e.g., Airport"
              required
            />
          </div>

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Date & Time</label>
              <input
                className={styles.input}
                type="datetime-local"
                name="requestedDateTime"
                value={formData.requestedDateTime}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Max Price ($)</label>
              <input
                className={styles.input}
                type="number"
                name="maxPrice"
                value={formData.maxPrice}
                onChange={handleChange}
                placeholder="e.g., 25"
                min="0"
                step="0.01"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={loading}
            className={styles.submitButton}
          >
            {loading ? 'Posting Request...' : 'Post Ride Request'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RiderRequest;
