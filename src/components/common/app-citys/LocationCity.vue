<template>
     <section>
            <div id="locate" class="city-title">
               {{title}}
            </div>
            <div class="city-list city-list-inline clearfix">
                <slot></slot>
            </div>
        </section>
</template>
<script>
export default {
    props:['title']
}
</script>
<style lang="scss">
.city-title {
    padding-left: .4rem;
    line-height: .8rem;
}
.city-list-inline {
    background-color: white;
    padding-bottom: .213333rem;
}
.city-list {
    padding-right: .8rem;
}
  
.clearfix:after {
    content: " ";
    display: table;
    clear: both;
}
</style>
