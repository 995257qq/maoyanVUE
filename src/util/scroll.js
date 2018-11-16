import BetterScroll from 'better-scroll';
 const scroll=({ 
    el,
    handler
 })=>{
   let scroll= new BetterScroll(el,{
        probeType:2,
        pullUpLoad:{
            threshold:50
        }
    })
    
    scroll.on('pullingUp',async()=>{
        await handler()
        scroll.finishPullUp()
        scroll.refresh()
    })

 }
 export default  scroll
    
 