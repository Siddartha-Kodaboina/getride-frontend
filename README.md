# GetRide Frontend 🚗

Apple-inspired React application for student ridesharing.

## 🐳 Docker Setup (Recommended)

The frontend runs in a **Docker container** for easy setup and consistency.

### Start the Frontend

```bash
# From the getride-frontend directory
docker-compose up --build
```

The app will be available at: **http://localhost:5173**

### Stop the Frontend

```bash
# Stop and remove containers
docker-compose down
```

### View Logs

```bash
# See frontend logs in real-time
docker logs getride-frontend -f
```

### Restart the Frontend

```bash
# If you make changes and need to rebuild
docker-compose down
docker-compose up --build -d
```

---

## 💻 Local Development (Without Docker)

If you prefer to run without Docker:

```bash
npm install
npm run dev
```

App will be at: **http://localhost:5173**

---

## 🎨 Technology Stack

- **React 18** - UI library
- **Vite** - Lightning-fast build tool
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS Modules** - Scoped component styling
- **Docker** - Containerized deployment

---

## 📁 Application Structure

```
src/
├── components/       # Reusable UI components
│   ├── Button.jsx         # Primary, secondary, outline buttons
│   └── Card.jsx           # Container component
│
├── pages/           # Route-based pages
│   ├── Landing.jsx        # Home page with role selection
│   ├── RiderRequest.jsx   # Create ride request form
│   ├── RiderDashboard.jsx # View requests & offers
│   └── DriverBrowse.jsx   # Browse & make offers
│
├── services/        # API integration
│   └── api.js            # Axios client with endpoints
│
├── index.css        # Design system & global styles
└── App.jsx          # Main app with React Router
```

---

## 🎯 User Flows

### Rider Journey
1. **Landing Page** → Click "Need a Ride?" 🎒
2. **Request Form** → Fill in: from, to, date/time, max price
3. **Submit** → See success confirmation ✅
4. **Dashboard** → View your requests & incoming offers
5. **Accept Offer** → Choose the best offer from drivers

### Driver Journey
1. **Landing Page** → Click "Offer Rides" 🚗
2. **Browse Requests** → See all available ride requests
3. **Make Offer** → Set your price & pickup time
4. **Get Notified** → Receive notification when rider accepts

---

## 🎨 Design System

**Inspired by Apple's design language:**

- **Font:** Inter (with system font fallback)
- **Colors:**
  - Primary: iOS Blue (#007AFF)
  - Success: Green (#34C759)
  - Neutrals: Clean grays & whites
- **Shadows:** Soft, layered depth
- **Radius:** Rounded corners (12-16px)
- **Transitions:** Smooth 250ms animations
- **Responsive:** Mobile-first, adapts to all screens

---

## 🌐 Environment Variables

Create a `.env` file in the root:

```env
VITE_API_URL=http://localhost:3000
```

---

## 📱 Responsive Breakpoints

- **Mobile:** < 480px (single column)
- **Tablet:** 768px (stacked layout)
- **Desktop:** > 768px (multi-column grids)

Test responsiveness:
1. Open DevTools (F12)
2. Toggle Device Toolbar (Ctrl+Shift+M)
3. Try iPhone SE, iPad Air, Desktop

---

## 🔗 Available Routes

- `/` - Landing page (role selection)
- `/rider/request` - Create new ride request
- `/rider/dashboard` - View my requests & offers
- `/driver/browse` - Browse available requests

---

## 🐛 Troubleshooting

**Frontend not loading?**
```bash
# Check if container is running
docker ps | grep getride-frontend

# Check logs for errors
docker logs getride-frontend

# Restart container
docker-compose restart
```

**Can't connect to backend?**
- Make sure backend is running on `localhost:3000`
- Check `.env` has correct `VITE_API_URL`

---

## 🚀 Next Steps

Future enhancements:
- Real-time offer notifications (WebSockets)
- Complete offer acceptance flow
- User authentication (JWT)
- Payment integration (Stripe)
- In-app messaging
- Rating & review system
- Google Maps integration

---

## 📝 Notes

- Uses **Docker Compose** for easy container management
- Hot reload enabled in development
- Fully responsive across all devices
- Apple-inspired design for premium UX
