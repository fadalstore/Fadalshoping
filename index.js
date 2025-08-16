
import ProductCard from '../components/ProductCard';
export async function getStaticProps(){const products=require('../data/products.json');return{props:{products}}}
export default function Home({products}){
  return(<div>
    <section className="card mb-8"><div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-2">FadalShoping</h1>
      <p className="opacity-80">Affordable products. Somali & English.</p>
    </div></section>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(p=><ProductCard key={p.slug} p={p}/>)}
    </div>
  </div>);
}
