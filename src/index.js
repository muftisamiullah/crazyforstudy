import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import './assets/styles/bootstrap.css';
import './assets/styles/style.css';
import './assets/styles/dashboard/main.css';
import './assets/styles/dashboard/color_skins.css';
import './assets/fonts/font.css';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/react-datepicker/dist/react-datepicker.min.css';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<App />
			</Switch>
		</Router>
	</React.StrictMode>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
