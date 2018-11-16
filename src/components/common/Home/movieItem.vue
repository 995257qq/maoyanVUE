 <template>
  <div id="moiveList">
   
        <section class="movie">
            <div class="poster">
                    <img :src="info.img | replaceWH('128.180')">	
            </div>
            <div class="item-right">
                <div class="movie-title">
                   
                    <div class="titleone">
                        {{info.nm}}
                    </div>
                    <span v-if="info.version=='v3d imax'" class="version imax"></span>
                    <span v-if="info.version=='v3d'" class="version D"></span>
                </div>
                <div class="score" v-if="info.globalReleased">
                    <span class="spectator" >
                        观众评
                    </span>
                    <span class="grade">
                       {{info.sc}}
                    </span>
                </div>
                <div class="score" v-else>
                    <span class="grade">
                       {{info.wish}}
                    </span>
                    <span class="spectator" >
                        人想看
                    </span>
                    
                </div>
                <div class="actor">主演:{{info.star}} </div>
                <div class="show-info"> {{info.showInfo}}</div>
            </div>
            <div class="btn-block">
                <div class="btn normal" v-if="info.globalReleased">
                    <span class="book" >购票</span>
                </div>
                 <div class="prebtn normal" v-else>
                    <span class="book" >预售</span>
                </div>
            </div>
        </section>
  </div>    
  
 </template>
 <script>
  export default{
      props:['info'],
      

  }
  
 </script>
 <style lang="scss">
  
  .movie{
    width: 9.527778rem;
    height: 3.166667rem;
    padding-left: .416667rem;
    display: flex;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    border-bottom: .013333rem solid #e6e6e6;  
}
.poster{
    width: 1.706667rem;
    height: 2.4rem;
    //position: relative;
    margin-top: .32rem;
    float: left;
     img{
        height: 2.4rem;
        width: 100%;
     }
}
.item-right{
    width: 5.44rem;
    padding: .32rem .32rem .32rem 0;
    margin-left: .266667rem;
    margin-right:.133333rem; 
    height: 2.4rem;
    max-height: 2.4rem;
}
 
.movie-title{
    max-height: .64rem;
    margin-bottom: .093333rem;
    line-height: .64rem;
    overflow: hidden;
    display: flex;
     text-overflow: ellipsis;
    .titleone{
         
    font-size: .453333rem;
    color: #333;
    font-weight: 700;
    padding-right: .133333rem;
    flex-shrink: 1;
   overflow: hidden;
   
    }
}
 
.version {
    background-size: contain;
    background-repeat: no-repeat;
    height: .373333rem;
    width: .453333rem;
    display: inline-block;
    margin-top: .133333rem;
    -webkit-box-flex: 0;
    flex: 0 0 auto;
    margin-right: .08rem;
}
.imax {
    width: 1.146667rem;
    background-image: url("../../../image/2d.png");
}
.D {
    width: 1.146667rem;
    background-image: url("../../../image/3D.png");
}
.score,.actor,.show-info{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: .346667rem;
    color: #666;
}
.score{
    
    .grade{
        font-weight: 700;
        color: #faaf00;
        font-size: 15px;
    }
}
.actor,.show-info{
   
    margin-top: .16rem;
    line-height: .4rem;
}
.btn-block {
    font-size: .32rem;
    right: .373333rem;
    top: 0;
    bottom: 0;
    height: .72rem;
    margin: auto;
  .btn {
        width: 1.253333rem;
        height: .72rem;
        line-height: .746667rem;
        text-align: center;
        box-sizing: border-box;
        background-color: #f03d37;
        color: #fff;
        border-radius: .106667rem;
        white-space: nowrap;
        font-size: .32rem;
        cursor: pointer;
    }
    .prebtn {
        width: 1.253333rem;
        height: .72rem;
        line-height: .746667rem;
        text-align: center;
        box-sizing: border-box;
        background-color: #3c9fe6;
        color: #fff;
        border-radius: .106667rem;
        white-space: nowrap;
        font-size: .32rem;
        cursor: pointer;
    }
}
 </style>
 
