# GetRide Frontend

Apple-inspired React application for student ridesharing.

## Quick Start

Start the frontend:
```bash
docker-compose up --build
```

The app will be available at `http://localhost:5173`

## Technology Stack

- **React 18** - UI library
- **Vite** - Fast build tool
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **CSS Modules** - Scoped styling

## Design System

- **Inspired by:** Apple's design language
- **Font:** Inter (system font fallback)
- **Colors:** iOS-style blue (#007AFF), clean neutrals
- **Components:** Reusable Button, Card components
- **Responsive:** Mobile-first, supports tablets and desktops

## Application Structure

```
src/
├── components/       # Reusable UI components
│   ├── Button.jsx
│   └── Card.jsx
├── pages/           # Route-based pages
│   ├── Landing.jsx        # Role selection
│   ├── RiderRequest.jsx   # Create ride request
│   ├── RiderDashboard.jsx # View requests & offers
│   └── DriverBrowse.jsx   # Browse & make offers
├── services/        # API integration
│   └── api.js
├── styles/          # Global styles & design tokens
└── App.jsx          # Main app with routing
```

## User Flows

### Rider Flow
1. **Landing** → Click "Need a Ride?"
2. **Request Form** → Fill in from/to/date/price
3. **Submit** → See success message
4. **Dashboard** → View your requests and incoming offers
5. **Accept Offer** → Choose the best offer

### Driver Flow
1. **Landing** → Click "Offer Rides"
2. **Browse** → See available ride requests
3. **Make Offer** → Set your price & pickup time
4. **Wait** → Get notified when rider accepts

## Environment Variables

Create `.env` file:
```
VITE_API_URL=http://localhost:3000
```

## Development

Run without Docker:
```bash
npm install
npm run dev
```

## Stop the App

```bash
docker-compose down
```
