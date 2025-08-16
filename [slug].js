
import { useRouter } from 'next/router'; import Link from 'next/link';
export async function getStaticPaths(){const products=require('../../data/products.json');return{paths:products.map(p=>({params:{slug:p.slug}})),fallback:false}}
export async function getStaticProps({params}){const products=require('../../data/products.json');const product=products.find(x=>x.slug===params.slug)||null;return{props:{product}}}
export default function ProductPage({product}){
  const router=useRouter(); if(!product) return <p>Not found</p>;
  const add=()=>{const cart=JSON.parse(localStorage.getItem('cart')||'[]');const ex=cart.find(x=>x.slug===product.slug);
    if(ex){ex.qty+=1}else{cart.push({slug:product.slug,name:product.name,price:product.price,image:product.image,qty:1})}
    localStorage.setItem('cart',JSON.stringify(cart)); router.push('/cart');};
  return(<div className="grid md:grid-cols-2 gap-6">
    <img src={product.image} className="w-full h-80 object-cover rounded-lg" alt={product.name}/>
    <div><h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="opacity-80 mt-1">{product.description?.so} / {product.description?.en}</p>
      <p className="text-xl font-semibold mt-3">${product.price.toFixed(2)}</p>
      <div className="flex gap-3 mt-6">
        <button className="btn" onClick={add}>Add to cart</button>
        <Link href="/" className="btn">Back</Link>
      </div>
    </div>
  </div>);
}
