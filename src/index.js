import * as React from "react";
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, } from "react-router-dom";
import { App } from "./components/App";

const container = document.getElementById('react-app');

// Create a root.
const root = ReactDOM.createRoot(container);

root.render(<Router><App /></Router>);
