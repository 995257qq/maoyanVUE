 <template>
 <div>
    <div class="nav">
  <div class="city-entry">
      <router-link tag="div" to="/position" class="city-name">{{chunks.city?chunks.city.cityName:''}}</router-link><i class="city-entry-arrow"></i>
       
  <!-- <div class="item">
      <div class="show active">
        <a> 正在热映</a>
      </div>
      <div class="come">
         <a> 即将上映</a>
      </div>
  </div> -->
  <div class="switch-hot" data-active=".n-hot">
      
      <router-link tag="div" to="/home/hot" active-class="active choosing" class="hot-item ">正在热映</router-link>
        <router-link tag="div" to="/home/coming" active-class="active choosing" class="hot-item">即将上映</router-link>
    </div>
  <div class="search">
      
  </div>
 </div></div>
 <div class="nav-one">
  </div></div>
 </template>
 <script>
 import {mapState} from 'vuex'
  export default{
      beforeCreate(){
          this.$store.dispatch({type:"chunks/getCurrentPosition"})
      },
      data(){
          return {

          }
      },
      computed: mapState(['chunks']),
     
      created(){
           //console.log(this.chunks)
      }
  }
 </script>
 <style lang="scss" scoped>
   .nav-one{
    width: 10rem;
    height: 1.2rem;
    flex:0 0;
}
.nav{
    flex:0 0;
    width: 10rem;
    height: 1.173333rem;
    position: fixed;
    border-bottom: .013333rem solid #e6e6e6;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
   z-index: 999;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background: #fff;
}
.city-entry {
    padding-left: .416667rem;
    font-size: .388889rem;
    color: #666;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    .city-name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: .933333rem;
        
    }
    .city-entry-arrow {
        margin-right: .138889rem;
        width: 0;
        height: 0;
        border: .111111rem solid #b0b0b0;
        border-left-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        display: inline-block;
        margin-left: .111111rem;
        margin-top: .138889rem;
    }
}
 
.search{
    width: .533333rem;
    height: .533333rem;
    background: url("../../../image/下载.png") 10px no-repeat;
    background-size: .533333rem;
    padding: .266667rem .4rem .266667rem .266667rem;
    margin-left: .906667rem;
}
.switch-hot {
    display: -webkit-box;
    display: flex;
    height: 44px;
    line-height: 44px;
    position: relative;
    margin-left: .666667rem;
}
.switch-hot[data-active=".n-hot"]:after {
    left: .32rem;
    
}
 
.switch-hot .hot-item {
    font-size: 15px;
    color: #666;
    width: 80px;
    width: 21.33333vw;
    text-align: center;
    margin: 0 12px;
    font-weight: 700;
}
.switch-hot .hot-item.active {
    color: #ef4238;
}
.choosing{
    color: #fe6e00;
    border-bottom: solid;
}
 </style>
 