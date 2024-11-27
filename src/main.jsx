import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette: {
    primary:{
      main: "#4A90E2",
      dark:'#2A5CA8',
      secondary:'#007BB5'
    },
    error:{
      main: "#FF6B6B6",
    },
    background:{
      paper: "#FFFFFF",
    },
    text:{
      primary: "#212121",
      secondary: "#9E9E9E",
    }
  },
  typography:{
    fontFamily: "'Roboto', 'Poppins', 'Arial', sans-serif",
    h1:{
      fontFamily:"'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: "2rem",
    },
    h2:{
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: "1.75rem",
    },
    body1:{
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
    },
    button:{
      fontFamily: "'Poppins', sans-serif",
      fontWeight:500,
      textTransform: 'none',
    },
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
