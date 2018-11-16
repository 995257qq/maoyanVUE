<template>
     
 <div class="location-city"><slot></slot> </div>
            
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
 
 .city-item,.location-city {
    float: left;
    background: #fff;
    width: 29%;
    height: .88rem;
    margin-top: .4rem;
    margin-left: 4%;
    padding: 0 4px;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    line-height: .88rem;
    text-align: center;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.location-city {
    width: auto;
    min-width: 30%;
    padding: 0 .533333rem
}
 
</style>
