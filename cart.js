
import { useEffect,useState } from 'react'; import Link from 'next/link'; import { useRouter } from 'next/router';
export default function Cart(){
  const [items,setItems]=useState([]); const router=useRouter();
  useEffect(()=>{const c=JSON.parse(localStorage.getItem('cart')||'[]'); setItems(c);},[]);
  const total=items.reduce((a,i)=>a+i.price*i.qty,0);
  const qty=(slug,d)=>{const n=items.map(i=>i.slug===slug?{...i,qty:Math.max(1,i.qty+d)}:i); setItems(n); localStorage.setItem('cart',JSON.stringify(n));}
  const remove=(slug)=>{const n=items.filter(i=>i.slug!==slug); setItems(n); localStorage.setItem('cart',JSON.stringify(n));}
  const checkout=()=>{location.href='/checkout'}
  if(items.length===0) return(<div><p>Cart is empty.</p><Link className="btn mt-4 inline-block" href="/">Go shopping</Link></div>);
  return(<div className="grid md:grid-cols-3 gap-6">
    <div className="md:col-span-2 card p-4">{items.map(i=>(
      <div key={i.slug} className="flex items-center gap-3 py-3 border-b">
        <img src={i.image} className="w-16 h-16 object-cover rounded"/>
        <div className="flex-1"><p className="font-medium">{i.name}</p><p className="opacity-70">${i.price.toFixed(2)}</p></div>
        <div className="flex items-center gap-2">
          <button className="btn" onClick={()=>qty(i.slug,-1)}>-</button><span>{i.qty}</span><button className="btn" onClick={()=>qty(i.slug,1)}>+</button>
        </div><button className="btn" onClick={()=>remove(i.slug)}>Remove</button>
      </div>))}
    </div>
    <div className="card p-4 h-max"><h3 className="font-semibold mb-2">Summary</h3>
      <p className="mb-4">Total: <b>${total.toFixed(2)}</b></p>
      <button className="btn w-full" onClick={checkout}>Checkout</button>
    </div>
  </div>);
}
