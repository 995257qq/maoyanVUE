<template>
<div class="app-films">
<movie-Nav></movie-Nav>
<router-view></router-view>
 </div>
</template>

<script>
import movieNav from'@c/common/Home/movieNav'
/* import movieBox from'@c/common/Home/movieBox' */
    export default{
      components:{
          movieNav,
          
      },
      
    }
</script>
<style lang="scss">
 .app-films{
     height:100%;
     
     display: flex;
     flex-flow: column;
     }
</style>
