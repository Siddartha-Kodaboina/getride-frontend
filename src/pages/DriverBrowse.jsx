import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { rideRequestAPI } from '../services/api';
import styles from './DriverBrowse.module.css';

const DriverBrowse = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState(null);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await rideRequestAPI.getAll({ status: 'open' });
      setRequests(response.data);
    } catch (error) {
      console.error('Error fetching requests:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  const handleMakeOffer = (request) => {
    // For MVP, we'll show a simple prompt
    const price = prompt(`Make an offer for this ride (Max: $${request.maxPrice}):`);
    if (price && parseFloat(price) <= request.maxPrice) {
      alert('Offer functionality coming soon! For now, this is a demo.');
      // TODO: Implement offer creation
    } else if (price) {
      alert(`Price must be $${request.maxPrice} or less`);
    }
  };

  if (loading) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <p style={{ textAlign: 'center', padding: '2rem' }}>Loading...</p>
        </div>
      </div>
    );
  }

  if (requests.length === 0) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.backButton} onClick={() => navigate('/')}>
              ← Back to Home
            </div>
            <h1 className={styles.title}>Available Ride Requests</h1>
          </div>

          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🚗</div>
            <h2 className={styles.emptyTitle}>No ride requests available</h2>
            <p className={styles.emptyText}>
              Check back later for new ride requests from students
            </p>
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
          <h1 className={styles.title}>Available Ride Requests</h1>
          <p className={styles.subtitle}>
            {requests.length} {requests.length === 1 ? 'request' : 'requests'} available
          </p>
        </div>

        <div className={styles.requestsList}>
          {requests.map((request) => (
            <div key={request.id} className={styles.requestCard}>
              <div className={styles.cardHeader}>
                <div className={styles.route}>
                  <div className={styles.location}>
                    <span>📍</span>
                    {request.fromLocation}
                  </div>
                  <div className={styles.location}>
                    <span>🎯</span>
                    {request.toLocation}
                  </div>
                </div>
                <div>
                  <span className={styles.priceLabel}>Max Price</span>
                  <div className={styles.price}>${request.maxPrice}</div>
                </div>
              </div>

              <div className={styles.riderInfo}>
                <div className={styles.avatar}>
                  {request.rider?.name?.charAt(0) || 'R'}
                </div>
                <div>
                  <div className={styles.riderName}>
                    {request.rider?.name || 'Rider'}
                  </div>
                  <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                    Student
                  </div>
                </div>
              </div>

              <div className={styles.details}>
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>Requested Time</span>
                  <span className={styles.detailValue}>
                    {formatDateTime(request.requestedDateTime)}
                  </span>
                </div>
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>Posted</span>
                  <span className={styles.detailValue}>
                    {formatDateTime(request.createdAt)}
                  </span>
                </div>
              </div>

              <div className={styles.actions}>
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => handleMakeOffer(request)}
                >
                  Make an Offer
                </Button>
                <Button variant="outline" fullWidth>
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DriverBrowse;
