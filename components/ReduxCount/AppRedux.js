import React, { Component } from 'react'
import Counter from './Counter'
import { Provider } from 'react-redux'
// import store from "./store/store"
import store from '../../store/store'




export default class AppRedux extends Component {
    render() {
        return (
            <Provider store={store}>
                <Counter />
            </Provider>
        )
    }
}



