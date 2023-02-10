const { render } = wp.element;

import { BrowserRouter as Router, } from "react-router-dom";
import { App } from "./components/App";

render(<Router><App /></Router>, document.getElementById('react-app'));
