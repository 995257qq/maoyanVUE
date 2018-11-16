<template>
  <div id="app">
    <app-header v-if="isshow"></app-header>
    <main>
       <keep-alive include="position">
       <router-view></router-view>
       </keep-alive>
    </main>
    <app-footer v-if="isshow"></app-footer>
  </div>
</template>
<script>
/* import AppHome from'@pages/home' */
 
import AppHeader from'@c/layout/AppHeader'
import AppFooter from'@c/layout/AppFooter'
export default {
   components:{
      
       
      AppHeader,
      AppFooter
   },
   data(){
     return { isshow:true}
    
   },
   watch:{
     $route(e){
       if(e.path=='/position'){
         this.isshow=false;
       }
       else{
         this.isshow=true
       }
     }
   }
      
  
    
 
}
</script>

<style lang="scss">
    #app,html,body,main{
      height: 100%
    }
</style>
