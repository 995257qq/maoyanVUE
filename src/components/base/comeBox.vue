<template>
  <div ref="come" class="coming-list">
      <div>
     <!--        <p class="group-date">10月17日 周三</p>
  <come v-for="movie in coming" :key="movie.id" :info="movie"></come> -->
    <div v-for="(coming,key) of groupedMovies" :key="key">
        <p class="group-date">{{ key }}</p>
        <!-- <movie-item :item="item" v-for="item of value" :key="item.id"></movie-item> -->
        <come v-for="movie in coming" :key="movie.id" :info="movie"></come>
      </div></div>
  </div>
</template>

<script>
 import Come from "@c/base/come"
 import _ from 'lodash'
 import scroll from '@util/scroll'
 export default{
     components:{
         
         Come
     }, 
      data(){
          return {
              coming:[]
          }
      },
   
  computed: {
    groupedMovies () {
      return _.groupBy(this.coming, (info) => {
        return info.comingTitle
      })
    }
  },     
    watch:{
          type:{
              immediate:true,
                handler(){
                    this.coming=[]
                     this.$http({
            url: '/maoyan/ajax/comingList?token=',
             params:{
                    ci:1,
                    limit:10
            }
         })
         .then(result => {
             this.coming=result.coming 
              
         })
                }
          }
      },
      methods:{
          async getFilms(){
                  
            
         let result=await this.$http({
           url: '/maoyan/ajax/comingList? ci:1&limit:10&token='+this.type,
             params:{
                
                    
            }
            
         })
             this.coming=this.coming.concat(result.coming) 
            
         }
      },
      mounted(){
          scroll({
              el:this.$refs.come,
              handler:this.getFilms.bind(this),
              
          })
      }
    }
</script>
<style lang="scss">
 .coming-list{
    flex: 1 1;
     overflow: hidden;
     height: 100%;
 }
</style>