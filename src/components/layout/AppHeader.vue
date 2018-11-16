 <template>
 <div>
    <header class="top-one nav-link home-title">
         <h1>{{title}}</h1>
   
 </header> <div class="top"></div>
 </div>
 </template>
 <script>
  export default{
      data(){
          return {
          title:'猫眼电影'
          }
      },
created(){
    this.title=this.createTitle()
    this.$router.beforeEach((to,from,next)=>{
       this.title=this.createTitle(to.path)
      next()
  })
},
methods:{
    createTitle(path){
     switch(path||this.$route.path){
          case '/cinema':return '影院'; 
          default:return '猫眼电影'; 
          }
      }
}
}
 </script>
 <style lang="scss" scoped>
  .top{
    width: 10rem;
    height:1.346667rem; 
}

.top-one{
    position: fixed;
    z-index: 9999;
    width: 10rem;
    height:1.346667rem;
    color: #fff;
    background: #e54847;
    border-bottom: .013333rem solid #e54847;
    text-align: center;
    line-height: 1.346667rem;
    h1{
        font-size: .48rem;
    font-weight: 400;
    }
}
 </style>
 