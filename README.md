# Quadque IT Client

The QIT (Quadque IT) client application — a React-based web app for **Quadque Technologies** IT services division. This application provides clients with access to IT consulting, project management, scheduling, and location-based service features through an interactive, modern interface.

Part of the **Quadque digital platform ecosystem**.

---

## Features

- Interactive client portal for IT service management
- Google Maps integration for office locations and service areas
- Calendar and scheduling with React Big Calendar
- Animated UI with Framer Motion transitions and reveal effects
- State management with Redux for predictable data flow
- Multi-carousel product and service showcases
- Ant Design and Bootstrap component libraries for polished interfaces
- Tailwind CSS utility-first responsive styling
- Lottie animations for engaging visual feedback
- Animated text and counter components for dynamic content

## Tech Stack

| Layer           | Technology                                        |
|-----------------|---------------------------------------------------|
| Framework       | React 18 (Create React App)                      |
| Routing         | React Router DOM v6                               |
| State Mgmt      | Redux                                            |
| Styling         | Tailwind CSS 3, Bootstrap 5, Ant Design 5         |
| Animations      | Framer Motion, React Reveal, Lottie React         |
| Maps            | Google Maps API (react-google-maps, google-map-react) |
| Calendar        | React Big Calendar                                |
| HTTP Client     | Axios                                             |
| Components      | React Slick, React Multi Carousel                 |
| Testing         | Jest, React Testing Library                       |

## Getting Started

### Prerequisites

- Node.js >= 16
- npm

### Installation

```bash
git clone https://github.com/mhmalvi/quadque-it-client.git
cd quadque-it-client
npm install
```

### Development

```bash
npm start
```

### Production Build

```bash
npm run build
```

## Project Structure

```
quadque-it-client/
├── public/              # Static assets and HTML template
├── src/
│   ├── Asset/           # Images and static resources
│   ├── Components/      # Reusable UI components
│   ├── Font/            # Custom typography
│   ├── Pages/           # Page-level components
│   ├── App.jsx          # Root application component
│   └── index.js         # Entry point
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS plugins
```

## License

Proprietary — Quadque Technologies. All rights reserved.
