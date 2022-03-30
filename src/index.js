import React  from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const title = 'dupa with Webpack and Babel'

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

module.hot.accept();