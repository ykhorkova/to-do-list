//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';

//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

function Home(){
    return (
        <div className="card-body mx-auto">
            <h1>todos</h1>
            <div className="card">
                <div className="card-header">
            What needs to be done?
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Make the bed</li>
                    <li className="list-group-item">Walk the god</li>
                    <li className="list-group-item">Prepare a dinner</li>
                </ul>
            </div>
        </div>);
}





ReactDOM.render(<Home />,document.querySelector('#app'));




// //import your own components
// import {Home} from './component/home.jsx';

// //render your react application