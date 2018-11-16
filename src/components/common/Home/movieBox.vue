<template>
 
 <div  ref="root" class="app-film-list"> 
     <div>
<movie-Item
 v-for="movie in movieList"
 :key="movie.id"
 :info="movie">
 
 </movie-Item></div> </div>
</template>
<script>
import movieItem from'@c/common/Home/movieItem'
import scroll from '@util/scroll'
export default{
      components:{
          
          movieItem
      },
      data(){
          return {
              movieList:[]
          }
      },
      watch:{
          type:{
              immediate:true,
                handler(){
                    this.movieList=[]
                    this.getFilms()
                    /*  this.$http({
            url: '/maoyan/ajax/movieOnInfoList?token= ',
             
         })
         .then(result => {
             this.movieList=result.movieList 
              
         })*/
                }
          } 
      },
      methods:{
          async getFilms(){
                  
             
         let result=await this.$http({
            url: '/maoyan/ajax/movieOnInfoList?token=',
            
         })
         console.log(result.movieList,11)
             this.movieList=this.movieList.concat(result.movieList) 
            
         }
      },
      mounted(){
          scroll({
              el:this.$refs.root,
              handler:this.getFilms.bind(this),
              
          })
      }
    }
 
</script>
<style lang="scss">
 .app-film-list{
      flex:1 1;
      overflow: hidden;
 }
 
</style>