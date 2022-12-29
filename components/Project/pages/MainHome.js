import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ContactUsPage from './ContactUsPage'
import AboutUsPage from './AboutUsPage'
import LoginPage from './LoginPage'
import RegistrationPage from './RegistrationPage'
import './common.css'
import { Typography } from '@mui/material'

export default function MainHome() {
    return (
        // <>
        //     <Header />
        //     <div className='body-container'>
        //         <Body />
        //     </div>
        //     <Footer />
        // </>

        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path='/' element={<Body />} />
                <Route path='/about' element={<AboutUsPage />} />
                <Route path='/contact' element={<ContactUsPage />} />
                <Route path='/register' element={<RegistrationPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='*' element={
                    <Typography variant="h1" component="h2">Error 404 :not found</Typography>
                } />

            </Routes>
            <Footer />
        </BrowserRouter>
    )
}








