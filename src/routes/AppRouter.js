import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Business from '../components/pages/Business';
import Entertainment from '../components/pages/Entertainment';
import GeneralScreen from '../components/pages/GeneralScreen';
import Health from '../components/pages/Health';
import Science from '../components/pages/Science';
import Sports from '../components/pages/Sports';
import Technology from '../components/pages/Technology';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/felixthetimes" element={<GeneralScreen />} />
                <Route path="/entertainment" element={<Entertainment />} />
                <Route path="/business" element={<Business />} />
                <Route path="/health" element={<Health />} />
                <Route path="/science" element={<Science />} />
                <Route path="/sports" element={<Sports />} />
                <Route path="/technology" element={<Technology />} />


            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter
