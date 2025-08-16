
import { useEffect,useState } from 'react';
export default function Checkout(){
  const [total,setTotal]=useState(0); const [status,setStatus]=useState('');
  useEffect(()=>{const items=JSON.parse(localStorage.getItem('cart')||'[]'); setTotal(items.reduce((a,i)=>a+i.price*i.qty,0));},[]);
  const pay=async()=>{ setStatus('processing...'); try{ const r=await fetch('/api/checkout/stripe',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({})}); const d=await r.json();
    if(d.url){ location.href=d.url } else { setStatus('Test mode: payment simulated ✅'); localStorage.removeItem('cart'); } } catch(e){ setStatus('Error: '+e.message) } };
  return(<div className="card p-6">
    <h1 className="text-2xl font-bold mb-2">Checkout</h1>
    <p className="mb-4">Total: <b>${total.toFixed(2)}</b></p>
    <button className="btn" onClick={pay}>Pay now</button>
    {status && <p className="mt-4">{status}</p>}
    <p className="opacity-70 mt-6">Use Stripe test card 4242 4242 4242 4242.</p>
  </div>);
}
