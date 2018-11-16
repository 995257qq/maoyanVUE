<template>
 
            <section class="movie">
            <div class="poster">  
                    <img :src="info.img | replaceWH('128.180')">	
            </div>
            <div class="item-right">
                <div class="movie-title">
                   
                    <div class="titleone">
                        {{info.nm}}
                    </div>
                    <span v-if="info.version=='v3d imax'" class="version imax"></span>
                    <span v-if="info.version=='v3d'" class="version D"></span>
                </div>
                <div class="score" v-if="info.globalReleased">
                    <span class="spectator" >
                        观众评
                    </span>
                    <span class="grade">
                       {{info.sc}}
                    </span>
                </div>
                <div class="score" v-else>
                    <span class="grade">
                       {{info.wish}}
                    </span>
                    <span class="spectator" >
                        人想看
                    </span>
                    
                </div>
                <div class="actor">主演:{{info.star}} </div>
                <div class="show-info"> {{info.showInfo}}</div>
            </div>
            <div class="btn-block">
                <div class="prebtn normal" v-if="info.showst==4">
                    <span class="book" >预售</span>
                </div>
                 <div class="want normal" v-else>
                    <span class="book" >想看</span>
                </div>
            </div>
        </section>
              
</template>

<script>
  
 export default{
      
      props:['info']
   
 }
</script>
<style lang="scss">
 .want{
     background-color: #faaf00;
      width: 1.253333rem;
        height: .72rem;
        line-height: .746667rem;
        text-align: center;
        box-sizing: border-box;
        
        color: #fff;
        border-radius: .106667rem;
        white-space: nowrap;
        font-size: .32rem;
        cursor: pointer;
 }
  
</style>