//
import './index.scss';
//
import 'bootstrap/dist/css/bootstrap.css';
//
import React from 'react';
import ReactDOM from 'react-dom';
//
import { App } from './components/app/app';
//
const container = document.getElementById('container');
//
interface TestInterface {}

ReactDOM.render(<App />, container);