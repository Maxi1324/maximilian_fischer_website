import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import IndexPage from './Pages/IndexPage'

import "./css/Style.css"

ReactDOM.render(
  <Suspense fallback={<div>Loading... </div>}>
          <IndexPage />
  </Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
