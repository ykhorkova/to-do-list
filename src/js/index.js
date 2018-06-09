//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from './component/home.jsx';

//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';





ReactDOM.render(<Home />,document.querySelector('#app'));


