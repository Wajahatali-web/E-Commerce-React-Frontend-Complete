import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../components/Breadcrum/Breadcrums'
import ProductDisplay from '../components/Product-display/ProductDisplay'
import Discriptionbox from '../components/DiscriptionBox/Discriptionbox'
import Relatedproduct from '../components/RelatedProduct/Relatedproduct'

const Product = () => {
   const {all_products} = useContext(ShopContext)
   const {productId} = useParams()
   const product = all_products.find((e)=>e.id === Number(productId));
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <Discriptionbox/>
      <Relatedproduct/>
    </div>
  )
}

export default Product
