import React, { useEffect } from 'react'
import FakeCounterAPI from './FakeCounterAPI'
import { useDispatch } from 'react-redux'
import { setFakeData } from '../../store/actions';
import { fetchdata } from '../../Services/indexfetch';
import Header from './Header';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './About';
import Contact from './Contact';
import LogReg from './LogReg';

export default function AppReduxAPI() {
    const dispatch = useDispatch();
    useEffect(() => {
        // fetch('https://fakestoreapi.com/products')
        //     .then(res => res.json())
        fetchdata().then(json => dispatch(setFakeData(json)))
    }, [])

    return (<>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/home' element={<FakeCounterAPI />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/logreg' element={<LogReg />}></Route>

            </Routes>
        </BrowserRouter>

    </>)
}


