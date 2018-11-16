<template>
   <div class="movie-message">
                <div class="zhongying add-item">
                    <div class="title">
                        <span> {{info.nm}}</span>
                        <span>
                            <span class="price">{{info.sellPrice}}</span>
                            <span class="q">元起</span>
                        </span>
                    </div>
                    <div class="location">
                        <div class="address">{{info.addr}}</div>
                        <div class="range">{{info.distance}}</div>
                    </div>
                    <div class="lable">
                        <div class="snake">小吃</div>
                        <div class="vipTag">折扣卡</div>
                        <div v-for="item in info.tag.hallType" :key="item.index" class="hallType">{{item}} </div>
                    </div>
                    <div v-if='info.promotion.cardPromotionTag' class="discount">
                        <div class="dis-img">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==">
                        </div>
                        <div class="dis-text">{{info.promotion.cardPromotionTag}}</div>
                    </div>
                </div>
   </div>
</template>

<script>
  
 export default{
     props:['info']
 }
</script>
<style lang="scss">
body{
    font-family: PingFangSC-Regular,Hiragino Sans GB,sans-serif;
}
 .movie-message{
    margin-top: 0;
     
    
}
.add-item{
    border-top: .026667rem solid #e8e8e8;
}
.zhongying{
    
    width: 8.746667rem;
    padding: 13px 15px 13px 0;
    margin-left: 15px;
    background-color: #fff;
    position: relative;
    overflow: hidden;
}
.title{
    height: .613333rem;
    line-height: .613333rem;
    font-size: .426667rem;
    color: #000;
}
.price{
    font-size: .48rem;
    color: #f03d37;
    line-height: 1.5;
    padding-left: .133333rem;
}
.q{
    margin-left: .08rem;
    font-size: 11px;
    color: #f03d37;
    line-height: 1.5;
}
.location{
    width: 8.746667rem;
    height: .506667rem;
    margin-top: .16rem;
    font-size: .346667rem;
    color: #666;
    display:flex;
}
.address{
    -webkit-box-flex: 1;
    flex: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.range{
    margin-left: .133333rem;
}
.lable{
    height: .453333rem;
    line-height: .453333rem;
    margin-top: .106667rem;
    margin-bottom: .106667rem;
    overflow: hidden;
    display:flex;
    flex-shrink: 0;
    margin: .106667rem 0;
}
.snake{
    color: #f90;
    border: .026667rem solid #f90;
    padding: 0 3px;
     font-size:.32rem;
}
.vipTag{
    color: #f90;
    border: .026667rem solid #f90;
    margin-left: .133333rem;
    padding: 0 3px;
     font-size:.32rem;
}
.hallType{
    color: #589daf;
    border: .026667rem solid #589daf;
    margin-left: .133333rem;
    padding: 0 3px;
    font-size:.32rem;
}
.discount{
    color: #999;
    margin-bottom: .106667rem;
    width: 8.746667rem;
    height: .56rem;
    display:flex;
    margin-bottom: .106667rem;
}
.dis-img img{
    height: .373333rem;
    width: .4rem;
    margin-top: .08rem;
}
.dis-text{
    display: inline-block;
    height: .48rem;
    margin-left: .08rem;
    font-size: .293333rem;
}
</style>