import { useEffect, useState } from "react"
import "./FetchFake.css"

export default function FetchFake() {
    const [data, setData] = useState([]);
    const [card, setCard] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(result => setData(result))
    }, []);
    console.log(data);

    const handleClick = (item) => {
        setCard(item);
    }
    const handleBack = () => {
        setCard("");
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
        // console.log(e)
    }

    return (<>
        <input placeholder="search here..." id="search" onChange={handleSearch} />
        <div className="main_div">
            {
                card.length === 0 ?
                    data
                        .filter(
                            (data) =>
                                data.category.includes(search)
                        )
                        .map((item, index) => (
                            <div key={index} className="product_div">
                                <h3>{item.category}</h3>
                                <img src={item.image} style={{ height: "100px", width: "100px" }} />
                                <h3>{item.title}</h3>
                                <h3>${item.price}</h3>
                                <button onClick={() => handleClick(item)}>Select me</button>
                            </div>
                        ))
                    :
                    <div className="product_div">
                        <h3>{card.id}</h3>
                        <img src={card.image} style={{ height: "100px", width: "100px" }} />
                        <h3>{card.description}</h3>
                        <button onClick={handleBack}>Go Back</button>
                    </div>
            }</div>
    </>)
}





