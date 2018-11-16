<template>
 
    <div class="list-wrap">
            <div class="most-expected">
                <p class="title">
                    近期最受期待
                </p>
                <div class="most-expected-list">
 <wish v-for="movie in coming"
 :key="movie.id"
 :info="movie"></wish>
   </div>
            </div>
 </div>
 
</template>

<script>
  
 import Wish from "@c/base/wish"
 export default{
     components:{
         
         Wish
     },
      data(){
          return {
              coming:[]
          }
      },
       created(){
         this.$http({
            url: '/maoyan/ajax/mostExpected?ci=1&limit=10&offset=0&token=',
            
         })
         .then(result => {
             this.coming=result.coming 
             console.log(this.coming)
         })
      }
    
    }
</script>
<style lang="scss">
 .list-wrap{width:9.493333rem;height:6.026667rem;background:#f6f6f6;flex:0 0}
 .most-expected{padding:.32rem 0 .32rem .4rem;width:9.146667rem;height:5.12rem;background:#fff;margin-bottom:.266667rem}
 .most-expected .title{margin:0 0 .32rem;font-size:.373333rem;color:#333}
 .most-expected .most-expected-list{overflow:scroll;white-space:nowrap}
</style>