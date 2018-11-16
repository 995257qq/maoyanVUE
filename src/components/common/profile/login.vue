<template>
  <div>   
            <section>
                  <form>
                      <div class="login">
                            <div class="meituan">
                                  <a class="log">美团账号登录</a>
                            </div>
                            <div class="phone">
                                  <a class="log active">手机验证登录</a>
                            </div>
                            <div class="slide"></div>
                      </div>
                      <div class="input">
                            <div class="user">
                                  <input type="text" v-model="phone" placeholder="请输入手机号">
                                  <span v-if ="!isCodeShow" class="getcode">获取验证码</span>
                                  <span v-else  class="sendcode" @click="sendCode">{{isResend?'重发('+resendTime+')':'发送验证码'}}</span>
                            </div>
                            <div class="pswd">
                                  <input type="text" placeholder="请输入短信验证码">
                            </div>
                      </div>
                      <div class="btn">
                            <button type="submit">登录</button>
                      </div>
                </form>
                <div class="subline">
                      <div class="register"><a href="">立即注册</a></div>
                      <div class="seek"><a href="">找回密码</a></div>
                </div>
                <div v-if="Showerror"  class="error">
                    <p>请勿重复点击</p>
                </div>
            </section>
            
    
</div>
</template>

<script>
 export default{
     data(){
         return {
             isCodeShow:false,
             phone:' ',
             isResend:false,
             resendTime:60,
             Showerror:false
         }
     },
     methods:{
         async sendCode(){
             console.log(1) 
             if(!this.isResend){
                 //ajax 
               /*   let result=await this.$http({
                      url:' /my/account/custom/mobilelogincode2',
                    method:'post',
                 })
                 console.log(result) */
                 this.isResend=true
               this.timer=setInterval(()=>{
                     this.resendTime--
                     if(this.resendTime==0){
                         clearInterval(this.timer)
                          this.isResend=false
                     }
                 },1000)
             } else{
                  this.Showerror=true

             }
         },
        
     },
     watch:{
         phone:{
             immediate:true,
             handler(val){
                 let result=/^[1][3,4,5,7,8][0-9]{9}$/.test(this.phone.trim())
                 this.isCodeShow=result
             }
         }
     }
 }
</script>
<style lang="scss">
 
  
.login{
    height: 1.12rem;
    width:100%;
    position:relative;

    display:flex;
    
    border-bottom: .106667rem solid #d6d6d6;
}
.meituan,.phone{
    text-align: center;
    height: .373333rem;
    width: 4.733333rem;
}
.log{
    padding-top: .373333rem;
    padding-bottom: .266667rem;
    display: block;
    color: inherit;
    height: 100%;
    
    text-overflow: ellipsis;
    white-space: nowrap;
    text-decoration: none;
    font-size: .373333rem;
    
}
.log.active{
    color:#df2d2d;
}
.slide{
    position: absolute;
    left: 5rem;
    width: 4.733333rem;
    bottom: -0.106667rem;
    border-bottom: .106667rem solid #df2d2d;
    -webkit-transition: left .2s ease-in;
    
}
.user,.pswd{
    height: .4rem;
    width: 9.466667rem;
    display:flex;
    padding: .373333rem .266667rem .373333rem .266667rem;
    border-bottom: 1px solid #d6d6d6;
}
.user input{
    display: block;
    height: .8rem;
    width: 6.533333rem;
    border: 0;
    text-indent: .133333rem;
    line-height: .8rem;
    font-size: .4rem;
    border-radius: .08rem;
    padding: 0;
    margin: -0.2rem 0;
    margin-right: .266667rem;
}
.user span{
    height: .8rem;
    
    display: block;
    border: 0;
    text-indent: .133333rem;
    line-height: .8rem;
    font-size: .373333rem;
    color:#999;
    padding: 0 .2rem;
    margin: -0.2rem 0;
    border-radius: .08rem;
        background: #dcdcdc;
   
}
.pswd input{
    width: 100%;
    display: block;
    border: 0;
    height: .8rem;
    margin: -0.2rem 0;
    text-indent: .133333rem;
    line-height: 1;
    font-size: .4rem;
    border-radius: .08rem;
    padding: 0;
        background-color: rgb(235, 235, 228);
}

.user input:focus{
    outline:none;
    background-color: rgb(235, 235, 228);
}
.btn{
    height: 1.253333rem;
    width: 9.466667rem;
    margin: .373333rem .266667rem;
    
}
.btn button{
    height: 100%;
    width: 9.466667rem;
    padding: 0 .426667rem;
    font-size: .64rem;
    background:#dcdcdc;
    border-radius: .08rem;
    color: #999;
    border: 0;
}
.subline{
    height: .373333rem;
    width: 9.466667rem;
    margin: .373333rem .266667rem;
    display:flex;
}
.register{
    height:100%;
    width: 4.733333rem;
}
.seek{
    height:100%;
    width: 4.733333rem;
    text-align: right;
}
.register a,.seek a{
    height: .373333rem;
    width: 1.493333rem;
    text-decoration: none;
    color:#df2d2d;
}
.phone-num{
    text-align: center;

}
.phone-num a{
    text-decoration: none;
    color: #df2d2d;
}
.user .sendcode{
    border: .02rem solid #df2d2d;
    padding: 0 .3rem;
    background: 0;
    color: #df2d2d;
}
@-webkit-keyframes fadeInOut {
   0% {
        opacity:0;
     }
     
    50%{
        opacity:1;
    }
     100%{
         opacity:0; 
    }
}
.error{
    -webkit-animation-name: fadeInOut;
     -webkit-animation-duration: 6s; 
    margin: 1.333333rem 2.133333rem;
    width: 5.333333rem;
    height: 2.133333rem;
    background:rgb(128,128,128);
    opacity:0;
    text-align:center;
   line-height: 2.133333rem;
   border-radius:5%;
     
  
}

</style>