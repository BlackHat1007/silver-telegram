import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card'

export default function FakeCounterAPI() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.fakeData)
    return (<>
        <div className='outer-container'>
            {data.map((item) => (
                <Card cardItem={item} />
            ))}
        </div>
    </>)
}
