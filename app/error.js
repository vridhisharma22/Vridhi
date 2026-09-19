'use client';
import {useEffect} from 'react';
export default function Error({error,reset}){
  useEffect(()=>{console.error(error)},[error]);
  return <main style={{minHeight:'100vh',display:'grid',placeItems:'center',background:'#080b0a',color:'#eef4ef',padding:24}}><div style={{maxWidth:560,textAlign:'center'}}><div style={{fontSize:12,letterSpacing:'.14em',color:'#718078',fontWeight:800}}>VRIDHI ENGINEERING OS</div><h1 style={{fontSize:28,margin:'10px 0'}}>Something went wrong</h1><p style={{color:'#87938c',lineHeight:1.6}}>Your local progress is stored in this browser. Try loading the manager again before resetting anything.</p><button onClick={()=>reset()} style={{marginTop:12,border:0,borderRadius:9,padding:'10px 14px',fontWeight:800,cursor:'pointer'}}>Try again</button></div></main>
}
