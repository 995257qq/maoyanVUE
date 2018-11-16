<template>
<div class="come-list">
   
  <wish-box></wish-box>
  <come-box></come-box>
 </div>
</template>

<script>
  
  import ComeBox from '@c/base/comeBox'
  import WishBox from '@c/base/wishBox'
 export default{
     components:{
        
         ComeBox,
         WishBox
     }
 }
</script>
<style lang="scss">
 .come-list{
     height: 100%;
     overflow: hidden;
 }
</style>