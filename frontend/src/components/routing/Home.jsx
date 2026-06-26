import { useState,useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function Home(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        // Axios se API call karna
        axios.get("https://fakestoreapi.com/products?limit=5")
        .then((res) => {
            setProducts(res.data); // Axios me data hamesha response.data me hota hai
            setLoading(false);
        })
        .catch((error) =>{
            console.error("Data not fetched",error);
            setLoading(false);
        })
    },[]) // [] means Only run on page load

    if(loading) return <h2>Loading amazing products...</h2>;

    return(
       <div style={{ padding: "20px" }}>
      <h1>Product Store</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {products.map((product) => (
           <div key={product.id} style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px" }}>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            {/* Dynamic Link jo user ko single product page par le jayegi */}
            <Link to={`product/${product.id}`} style={{ color: "blue", fontWeight: "bold" }}>
            View Details </Link>
            </div>
        ))}
        </div>
        </div>
    )
}