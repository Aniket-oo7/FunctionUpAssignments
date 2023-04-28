import './ProductCard.css'

export default function ProductCard ({productDetail}){
    function booking(){
    
        alert('productDetails -: '+ productDetail.Brand + ' ' + productDetail.productName + " costs "+
        productDetail.price + ' is added to  the cart')
        
    }
    return (
    <div className='cardStyle'>
      <div className='card2'>
       <img src={productDetail.productImg} alt=''/>
        <h3 style={productDetail.colors}>{productDetail.Brand}</h3>
        <p>{productDetail.productDescription}</p>
        <h3 style={productDetail.colors}>{productDetail.price}</h3>
        <h5>{productDetail.rating}</h5>
        <button
        style={productDetail.buttonStyle}
         onClick={booking}  
         >ADD TO CART </button>
  </div> 
  </div>
    )
}