import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// import { NavBar } from '../components'

import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'

function App() {
    return (
        <Router>
            <NavBar />
        </Router>
    )
}

export default App