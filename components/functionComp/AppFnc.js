import { useEffect, useState } from "react";
import FetchFake from "./FetchFake";


function Example() {
    // const [data, setData] = useState({ numbers: 0 });
    // console.log(data);

    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then(res => res.json())
    //         .then(json => console.log(json))
    // }, [data])

    return (<div>
        {/* {data.numbers}
        <button onClick={() => setData({ numbers: data.numbers + 1 })}>Inc</button>
        <button onClick={() => setData({ numbers: data.numbers - 1 })}>Dec</button> */}
        <FetchFake />
    </div>)
}
export default Example
