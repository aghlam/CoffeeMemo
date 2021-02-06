import React from 'react'

import Home from './pages/Home/Home'
import About from './pages/About/About'

const Routes = {
    "/": () => <Home />,
    "/about": () => <About />
}

export default Routes