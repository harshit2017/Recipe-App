import React from 'react';
import { render } from 'react-dom';
import Menu from './components/Menu';
import data from './data/data';
import './index.css';



render(<Menu recipes={data} title="Hasty Tasty"/>, document.getElementById('root'))