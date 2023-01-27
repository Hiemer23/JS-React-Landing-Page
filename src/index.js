import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './styles/global-styles'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import Home from './templates/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
)
