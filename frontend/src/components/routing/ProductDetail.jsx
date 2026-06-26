import {useParams, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProductDetails(){
    const {id} = useParams() // URL se ':id' ko bahar nikal liya
    const navigate = useNavigate() // Page ko programmatically piche-aage bhejne ke liye
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => setProduct(res.data))     
    },[id]) // Agar ID badle, toh fir se fetch karo

    if(!product) return <h2>Fetching specific product</h2>;

    return(
        <div style={{ padding: "20px" }}>
      <button onClick={() => navigate(-1)}>← Go Back</button>
      <div style={{ marginTop: "20px" }}>
        <h1>{product.title}</h1>
        <img src={product.image} alt={product.title} style={{ width: "200px" }} />
        <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "green" }}>Price: ${product.price}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Category:</strong> {product.category}</p>
      </div>
    </div>
    )
}
