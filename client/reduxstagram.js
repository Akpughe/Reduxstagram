// let's go!
import React from 'react';

import {render} from 'react-dom';

//import CSS
import css from './styles/style.styl'
//import Component
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// imprt react-router deps

render(<Main/>, document.getElementById('root'))