<template>
 
 <div class="app-cinema">
 <section class="local">
    <div class="cinma-city-entry">
         <router-link tag="div" to="/position" class="city-name">{{chunks.city?chunks.city.cityName:''}} <i class="city-arrow"></i></router-link> 
      
    </div>
    <div class="cinma-search">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwFJREFUSA3FVs1qU0EUTibBRQiCRF3UB3BTcFHwJ0XRJ+gDhDaQ5vcJ3PgCfYL80AYSyQP4BIKQiosuhLoQXOjCbqQIJUgoyY3fdzNnmCRzk3uvBQfmzrlzzvm+OTNzz7mJxH9qyTC83W733mQyeTKbzbbQc8lk8hL9Ip1OfyqVSr/CYCzbBBKDQHU6nX2MZfQ8HNWyM949LOAU/bharb7F6DlsnFNOYhDmp9NpGx7bTi/35HkqlaphAadu9eLsCjFIS57nNRHlLct0AnmIiL5ivETPQf8Q4y56Gt1v0F8rpRog78pc0LhATFJEemIZXwHoKJvNNguFwm9r3hcHg8Gd0WjUwEJfY+K26BH54SZyQ8ztBcB7K9IzAO01Go2fAhg0NpvNB9C9Q9+hjY781bpt9y8MyBTP1CZFpC/CkJKIdrSHyMUmiKPxXBeSJvOb2mq1DiDLRbqCvFer1f7QIGzT9nuwpz/bNnZxfy6uPv0VYWvKouKZho1UfGTUkR/JOyI3uDIno2JygMEzPTHhRRJlnFH78yvglueJ78JRzEhQyFkMXbfX5Rg0p/2HWi/4K+YKq9qSWf2dymvs0cax8W1AEuesCSaHm2gGZwnfYCuszhhh1l6EMYohGJwlfANF4gt5w+qYBv+52Tg2vg2sWNowIVVll2nQNogqa3/mcDZP48/frKdiPcWqpKKkmXstfWRR+/uFg7hB9VpSpikMTPg690YmpR/834gjiI9FXh79IoEzUUibn6GUtHnG3Bslbbbb7QxIfwDjriY5r9frj0Aux7jALSnTYxGH0bXW7gDkQ9jIdaRfLFLCfEefUXA1UxapvKl6bBF1EXUZAa0sYIFYyBFt7D8QHBu/kuebyFeINXnsf65KpfIR94WXqrSO3ElMB33hDrBNh5DX/mVCf4It7ctFwntyE3kgsbXaRL/fvz8ejx8DMPR/9SbyUMT2IqLIa8mjAMWxdZB/y2QyT80/cRzQMD78lNDKOHOa84fwZbFYtCtiGJj4Noy81+uZcvkXH+aXwmK6+EsAAAAASUVORK5CYII=">
        <span>搜影院</span>
    </div>
</section>
<section style="height:2.24rem;width:100%;"></section>
<section class="body">
    <div class="cinma-top-nav">
        <div class="cinma-item">
            全城
            <span class="drop"></span>
        </div>
        <div class="cinma-item">
           
            品牌
            <span class="drop"></span>
        </div>
        <div class="cinma-item">
            
            特色
            <span class="drop"></span>
        </div>
    </div> 
    <div style="height: 1.066667rem;"></div>
    <cinema-list></cinema-list>
</section>

</div>
 
</template>

<script>
 import CinemaList from '@c/common/cinema/cinemaList' 
    export default{
      components:{
          CinemaList
      }
      
    }
</script>
<style lang="scss">
.app-cinema{
    height:100%;
     
     display: flex;
     flex-flow: column;
}
 .local{
    height: 1.173333rem;
    width: 10rem;
    border-bottom: .026667rem solid #e6e6e6;
    background:#f5f5f5;
    display:flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    color:#777;
    position:fixed;
    top: 1.373333rem;
    z-index: 10;
    flex: 0 0;
}
.cinma-city-entry{
    width: 1.653333rem;
    height: .533333rem;
    padding-left: .4rem;
}
.cinma-city-entry .city-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: .4rem;
    
}
.city-arrow{
    margin-right: .133333rem;
    width: 0;
    height: 0;
    border: .106667rem solid #b0b0b0;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    display: inline-block;
    margin-left: .106667rem;
    margin-top: .133333rem;
}
.cinma-search{
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    height: .773333rem;
    width: 7.466667rem;
    font-size: .346667rem;
    color: #b2b2b2;
    margin-left: .48rem;
    border: .013333rem solid #e6e6e6;
    border-radius: .133333rem;
    margin-right: .4rem;
    background-color: #fff;
    
}
.cinma-search img{
    width: .373333rem;
    height: .373333rem;
    margin-left: .08rem;
    margin-right: .106667rem;
}
.body{
    height: 16.613333rem;

}
.cinma-top-nav{
    height: 1.066667rem;
    display:flex;
    position:fixed;
    top: 2.533333rem;
    z-index: 10;
    background: #fff;
    flex: 0 0;
 
}
.cinma-item{
    height: 1.066667rem;
    width: 3.333333rem;
    -webkit-box-flex: 1;
    flex: 1;
    text-align: center;
    line-height: 1.066667rem;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    font-size: .346667rem;
    color:#777;
    text-overflow: ellipsis;
}
.cinma-item:before{
    content: "";
    display: block;
    position: absolute;
    height: 20px;
    top: 10px;
    left: 0;
    border-left: 1px solid #e8e8e8;
}
.drop{
    display: inline-block;
    position: absolute;
    top: 18px;
    width: 0;
    height: 0;
    margin-left: 4px;
    border: 4px solid transparent;
    border-top-color: #b0b0b0;
}
</style>
