import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { incCounter } from '../../store/actions'

export default function () {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count)
    // console.log(state.count);
    console.log(count);

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => dispatch(incCounter(count + 1))}>Inc</button>
            <button onClick={() => dispatch(incCounter(count - 1))}>Dec</button>
        </div>
    )
}





