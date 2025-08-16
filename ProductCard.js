
import Link from 'next/link';
export default function ProductCard({p}){
  return(<div className="card">
    <img src={p.image} alt={p.name} className="w-full h-44 object-cover"/>
    <div className="p-4">
      <h3 className="font-semibold">{p.name}</h3>
      <p className="text-sm opacity-80">{p.category}</p>
      <div className="flex items-center justify-between mt-3">
        <span className="font-bold">${p.price.toFixed(2)}</span>
        <Link href={`/product/${encodeURIComponent(p.slug)}`} className="btn">View</Link>
      </div>
    </div>
  </div>);
}
