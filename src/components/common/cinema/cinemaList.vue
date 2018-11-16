<template>
<div class="cinema-list"  ref="cinemas">
    <div>
<cinema v-for="cinema in cinemas"
 :key="cinema.id"
 :info="cinema"></cinema></div></div>
</template>

<script>
 import scroll from '@util/scroll' 
 import Cinema from "@c/common/cinema/cinema"
 export default{
     components:{
         
        Cinema
     },
      data(){
          return {
              cinemas:[],
              offset:0
          }
      },
     watch:{
          type:{
              immediate:true,
                handler(){
                    this.cinemas=[]
                    this.getFilms()
                }
          }
      },
      methods:{
          async getFilms(){  
               
          let result=await this.$http({
            url: '/maoyan/ajax/cinemaList?%20'+this.type,
            params:{
                offset:this.offset,
                limit:20
            }
         })
         this.offset++
             this.cinemas=this.cinemas.concat(result.cinemas) 
            
         }
      },
      mounted(){
          scroll({
              el:this.$refs.cinemas,
              handler:this.getFilms.bind(this),
              
          })
      }
    }
</script>
<style lang="scss">
.cinema-list{
    flex:1 1;
    overflow: hidden;
    height: 100%;
}
</style>