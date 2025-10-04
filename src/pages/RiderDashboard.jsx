import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { rideRequestAPI } from '../services/api';
import styles from './RiderDashboard.module.css';

const RiderDashboard = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await rideRequestAPI.getAll();
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
            <h1 className={styles.title}>My Ride Requests</h1>
          </div>

          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🎒</div>
            <h2 className={styles.emptyTitle}>No ride requests yet</h2>
            <p className={styles.emptyText}>
              Create your first ride request to start receiving offers from drivers
            </p>
            <Button variant="primary" onClick={() => navigate('/rider/request')}>
              Create Ride Request
            </Button>
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
          <h1 className={styles.title}>My Ride Requests</h1>
          <p className={styles.subtitle}>
            {requests.length} active {requests.length === 1 ? 'request' : 'requests'}
          </p>
        </div>

        <div className={styles.requestsList}>
          {requests.map((request) => (
            <div key={request.id} className={styles.requestCard}>
              <div className={styles.requestHeader}>
                <div className={styles.route}>
                  <div className={styles.location}>
                    <span className={styles.locationIcon}>📍</span>
                    {request.fromLocation}
                  </div>
                  <div className={styles.location}>
                    <span className={styles.locationIcon}>🎯</span>
                    {request.toLocation}
                  </div>
                </div>
                <span className={`${styles.status} ${styles[`status${request.status.charAt(0).toUpperCase() + request.status.slice(1)}`]}`}>
                  {request.status}
                </span>
              </div>

              <div className={styles.details}>
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>When</span>
                  <span className={styles.detailValue}>
                    {formatDateTime(request.requestedDateTime)}
                  </span>
                </div>
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>Max Price</span>
                  <span className={styles.detailValue}>${request.maxPrice}</span>
                </div>
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>Created</span>
                  <span className={styles.detailValue}>
                    {formatDateTime(request.createdAt)}
                  </span>
                </div>
              </div>

              <div className={styles.offersSection}>
                <h4 className={styles.offersTitle}>
                  Offers ({request.offers?.length || 0})
                </h4>
                {request.offers && request.offers.length > 0 ? (
                  <div className={styles.offersList}>
                    {request.offers.map((offer) => (
                      <div key={offer.id} className={styles.offer}>
                        <div className={styles.offerInfo}>
                          <div className={styles.offerDriver}>
                            {offer.driver?.name || 'Driver'}
                          </div>
                          <div className={styles.offerDetails}>
                            <span>💵 ${offer.price}</span>
                            <span>🕐 {formatDateTime(offer.pickupTime)}</span>
                          </div>
                        </div>
                        {offer.status === 'pending' && (
                          <div className={styles.offerActions}>
                            <Button variant="primary" size="small">
                              Accept
                            </Button>
                            <Button variant="outline" size="small">
                              Decline
                            </Button>
                          </div>
                        )}
                        {offer.status === 'accepted' && (
                          <span style={{ color: 'var(--color-success)', fontWeight: 600 }}>
                            ✓ Accepted
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={styles.noOffers}>
                    Waiting for drivers to make offers...
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <Button
          variant="primary"
          fullWidth
          onClick={() => navigate('/rider/request')}
          style={{ marginTop: 'var(--space-xl)' }}
        >
          Create New Request
        </Button>
      </div>
    </div>
  );
};

export default RiderDashboard;
