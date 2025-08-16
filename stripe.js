
import Stripe from 'stripe';
export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).json({message:'Method not allowed'});
  const pk=process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY; const sk=process.env.STRIPE_SECRET_KEY;
  if(!pk||!sk){ return res.status(200).json({ok:true,url:null,simulated:true}); }
  try{ const stripe=new Stripe(sk); const session=await stripe.checkout.sessions.create({
      mode:'payment', payment_method_types:['card'],
      line_items:[{ price_data:{currency:'usd', product_data:{name:'FadalShoping order'}, unit_amount:2000}, quantity:1 }],
      success_url:`${req.headers.origin}/?success=1`, cancel_url:`${req.headers.origin}/checkout?canceled=1`
    }); return res.status(200).json({url:session.url}); } catch(err){ return res.status(500).json({message:err.message}); }
}
