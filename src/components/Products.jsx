import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat,sort}) => {
  const [products,setPtoducts] = useState([]);
  const [filteredProducts,setFilteredPtoducts] = useState([]);
  
  useEffect(()=>{
    const getProducts = async ()=>{
      try{
        const res= await axios.get(
          cat 
            ? `http://localhost:5000/api/products?category=${cat}`
            :`http://localhost:5000/api/products`
        );
        setPtoducts(res.data);
        
      }catch(err)
      {}
    };
    getProducts();
  },[cat]);
  //uncomplete
  useEffect(()=>{
    if(sort ==="newest"){
      setFilteredPtoducts(prev=>
        [...prev].sort((a,b)=>a.createdAt - b.createdAt)
        );
    }
    else if(sort ==="asc"){
      setFilteredPtoducts(prev=>
        [...prev].sort((a,b)=>a.price - b.price)
        );
    }
    else{
      setFilteredPtoducts(prev=>
        [...prev].sort((a,b)=>b.price - a.price)
        );
    }
  },[sort])
  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
