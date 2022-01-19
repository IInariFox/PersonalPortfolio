import './App.css';
import ReactDOM from "react-dom";
import PortfolioContainer from './PortfolioContainer/PortfolioContainer';
import reportWebVitals from "./reportWebVitals";


function App() {
  return (
    <div className="App">
      <PortfolioContainer />

    </div>
  );
}

export default App;


/* commands to run/install in terminal */
// npm i react-typical
//npm i rxjs
//npm i @fortawesome/fontawesome-svg-core
//npm i @fortawesome/free-brands-svg-icons
//npm i @fortawesome/free-regular-svg-icons
//npm i @fortawesome/free-solid-svg-icons
//npm i @fortawesome/react-fontawesome
//npm i react-toastify
//npm i axios




/* test json that works

{
  "name": "personal-portfolio",
  "proxy": "http://localhost:3000",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^1.2.35",
    "@fortawesome/free-brands-svg-icons": "^5.15.3",
    "@fortawesome/free-regular-svg-icons": "^5.15.3",
    "@fortawesome/free-solid-svg-icons": "^5.15.3",
    "@fortawesome/react-fontawesome": "^0.1.14",
    "@popperjs/core": "^2.11.2",
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.3",
    "popper.js": "^1.16.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-owl-carousel": "^2.3.3",
    "react-scripts": "4.0.3",
    "react-toastify": "^7.0.4",
    "react-typical": "^0.1.3",
    "rxjs": "^7.2.0",
    "web-vitals": "^1.1.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}



*/