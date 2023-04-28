// / import logo from './logo.svg';
import './App.css';
// import ProductCard from './productCard';
import ProductCard from './productcard';

export default function App() {
  const productOneDetail = {  
    productId:'2',
     productImg:'data:image/jpeg;base64,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',
   productName : 'Shoes',
    Brand : 'A D I D A S',
    productDescription : 'All Time Run Machine for the Active Folks',
    price : '$70',
    rating:'4.8',
    colors:{color:'red'},
    buttonStyle:{backgroundColor:'red',
    color: "white",
    border: "1px solid grey",
    height:'100%',
    width: "100%",
    borderRadius: "2px"}
  }
  const productTwoDetail ={
    productId : '2',
    productImg: 'https://img.freepik.com/premium-psd/black-t-shirt-mockup_125540-430.jpg?w=740',
    productName : 'T-Shirt',
    Brand : 'A  L L E N - S O L Y',
    productDescription : 'This is not a BUG...but This is A Feature...',
    price : '$20',
    rating:'4.3',
    colors:{color:'indianred'},
    buttonStyle:{backgroundColor:'indianred',
    color: "white",
    border: "1px solid grey",
    height:'10%',
    width: "100%",
    borderRadius: "2px"
                    }
  }  
  const productThreeDetail = {
    productId : '3',
    productImg: 'https://media.istockphoto.com/id/180844253/photo/wrist-watch.jpg?s=612x612&w=0&k=20&c=691PYMPrS-0IOElorkF8kQ6Z7bv-J5-27XcUxkHpcG0=',
    productName : 'Watch',
    Brand : 'F I R E B O L T',
    productDescription : 'Write your own TIME...',
    price : '$20',
    rating:'4.9',
    colors:{color:'black'},
    buttonStyle:{backgroundColor:'black', 
    color: "white",
    border: "1px solid grey",
    height:'10%',
    width: "100%",
    borderRadius: "2px"}
   }
   const productFourDetail = {
    productId : '4',
    productImg: 'https://media.istockphoto.com/id/1222731044/photo/yellow-sneakers-isolated-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GPevzvYFsPobBajeDpHEUB870OKvOGUy--Tx-umbh9s=',
    productName : 'Sneakers',
    Brand : 'V A N S',
    productDescription : 'Gives you the height Which gives you a different eyesite',
    price : '$70',
    rating:'5',
    colors:{color:'orange'},
    buttonStyle:{backgroundColor:'orange',
    color: "white",
    border: "1px solid grey",
    height:'10%',
    width: "100%",
    borderRadius: "2px"}
   }
   const productFiveDetail = {
    productId : '5',
    productImg: 'https://media.gettyimages.com/id/1161148084/photo/directly-above-shot-of-jeans-pant-over-white-background.jpg?s=612x612&w=0&k=20&c=yF_RMbZn7M907qqkUoEa_qyQQlhSH4sTwcXF2cE1pns=',
    productName : 'Jeans',
    Brand : 'K I L L E R - X',
    productDescription : 'No matter what the wheather is Just keep Hustling...',
    price : '$40',
    rating:'3.9',
    colors:{color:'teal'},
    buttonStyle:{backgroundColor:'teal',
    color: "white",
    border: "1px solid grey",
    height:'100%',
    width: "100%",
    borderRadius: "2px"
    }
   }
   return (
  <div className='childContainer'>
    <ProductCard 
    productDetail = {productOneDetail} />
  
   <ProductCard 
    productDetail = {productFourDetail} />
     <ProductCard 
    productDetail = {productThreeDetail} />
   <ProductCard 
    productDetail = {productFiveDetail} />
   <ProductCard 
    productDetail = {productTwoDetail} />
    </div>
  );
}