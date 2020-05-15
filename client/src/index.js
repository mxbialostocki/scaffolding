import React from 'react'
import { render } from 'react-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router } from 'react-router-dom'

import typography from './typography'

import App from './components/App.jsx'

const theme = createMuiTheme({
  typography,
  overrides: {
    MuiButton: {
      text: {
        color: 'white'
      }
    }
  }
})

render(
  <Router>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
)
