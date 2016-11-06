import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { render } from 'react-dom'

import App from './components/App'

injectTapEventPlugin();

render(
  <App />,
  document.getElementById('root')
)
