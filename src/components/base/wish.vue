<template>
 
                    <div class="expected-item">
                        <div class="posters default-img-bg">
                           <img :src="info.img | replaceWH('170.230')">
                            <span class="wish-bg"></span>
                            <span class="wish"><span class="wish-num">{{info.wish}}</span>人想看</span>
                            <div class="toggle-wish">
                                <span></span>
                            </div>
                        </div>
                        <h5 class="name">{{info.nm}}</h5>
                        <p class="date">{{info.comingTitle}}</p>
                    </div>
              
</template>

<script>
  
 export default{
      
      props:['info']
   
 }
</script>
<style lang="scss">
 
 .most-expected .expected-item{display:inline-block;width:2.266667rem;overflow:hidden;margin-right:.266667rem;}
 .most-expected .expected-item .posters{width:2.266667rem;height:3.066667rem;position:relative;margin-bottom:.16rem}
 .most-expected .expected-item .posters img{width:100%;height:100%}
 .most-expected .expected-item .posters .wish-bg{display:inline-block;width:100%;height:.933333rem;position:absolute;bottom:0;left:0;background-image:-webkit-linear-gradient(top, rgba(77,77,77,0), #000);background-image:linear-gradient(-180deg, rgba(77,77,77,0), #000)}
 .most-expected .expected-item .posters .wish{position:absolute;left:.106667rem;bottom:.053333rem;color:#faaf00;font-size:.293333rem;font-weight:600}
 .most-expected .expected-item .posters .toggle-wish{width:.746667rem;line-height:.746667rem;background:rgba(61,63,71,0.6);text-align:center;border-bottom-right-radius:.266667rem;position:absolute;top:0;left:0}
 .most-expected .expected-item .posters .toggle-wish span{display:inline-block;width:.266667rem;height:.266667rem;background:url("../../image/like.png");background-size:100%;background-repeat:no-repeat}.name{margin:0 0 .08rem;font-size:.346667rem;color:#222;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.date{margin:0;font-size:.32rem;color:#999}
 .group-date{padding:.32rem .4rem 0;margin:0;font-size:.373333rem;color:#333}.btn-block .btn.pre{background-color:#3c9fe6}
</style>