 <template>
  <div><div class="foot">
 </div>
        <footer class="foot-one">
        <router-link active-class="current" to='/home' class="movies  nav-link">
                <span class="iconfont icon-dianying"></span>  
                <span class="nav-text">
                       电影
                    </span>
        </router-link>
        <router-link active-class="current" to='/cinema' class="cinema nav-link">
        <span class="iconfont icon-yingyuana"></span>  
        <span class="nav-text">
                影院
            </span>
        </router-link>
     <router-link active-class="current" to='/profile' class="my nav-link">
         <span class="iconfont icon-aui-icon-my">
         </span>
         <span class="nav-text">
               我的
            </span>
     </router-link>
    </footer>
 </div>
 </template>
 <script>
  export default{
      
  }
 </script>
 <style lang="scss">
 .iconfont{
     
    font-size: .666667rem;
}
   .foot{
    width: 10rem;
    height: 1.28rem;
   color:#666;
     
}
.foot-one{
    width: 10rem;
    height: 1.28rem;
    position: fixed;
    border-top: .013333rem solid #b0b0b0;
    display: flex;
    background: #fff;
    z-index:9999;
    line-height: 1.013333rem;
    text-align: center;
    bottom: 0;
 
}
.movies{
    float: left;
    width: 3.333333rem;
    height: 1.28rem;
    position: relative;
}
.my{
    float: left;
    width: 3.333333rem;
    height: 1.28rem;
    position: relative;
}
.cinema{
    float: left;
    width: 3.333333rem;
    height: 1.28rem; 
    position: relative;
}
.nav-text {
    line-height: .32rem;
    position: absolute;
    top: 33px;
    left: 0;
    right: 0;
    font-size: .266667rem;
    
}
.nav-link{
     color:#696969;
}
 .current{
    color: #f03d37; 
}
 </style>
 