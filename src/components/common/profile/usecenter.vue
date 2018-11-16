<template>

    <div class="not-found">
        <div class="mycenter">
            <div class="header">
                    <img src="../../../assets/logo.png" alt="">
                    <div class="name"></div>
            </div>
            <div class="container">
                    <div class="group">
                        <div class="order">
                            <div class="title">
                                    我的订单
                            </div>
                            <div class="title-line"></div>
                            <div class="list">
                                <div class="film">
                                    <a href="">
                                        <p>电影</p>
                                    </a>
                                </div>
                                <div class="store">
                                    <a href="">
                                        <p>商城</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="group">
                        <div class="tb">
                            <div><a href=""><span>在线观影</span><i></i></a></div>
                            <div><a href=""><span>优惠券</span><i></i></a></div>
                            <div><a href=""><span>折扣卡</span><i></i></a></div>
                        </div>
                    </div>
                   
            </div>
        </div>
    </div>
</template>
<script>
export default {
  
} 
 console.log(1)
</script>
<style lang="scss">
    .not-found{
        .header{
            height:4rem;
            width:100%;
            background-color: #f03d37;
            background-image: url(../../../assets/6.png);
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: 100% 4rem;
            height: 4rem;
            overflow: hidden;
            text-align: center;
            -webkit-tap-highlight-color: transparent;
            img{
                display: inline-block;
                margin-top: .8rem;
                width: 1.6rem;
                height: 1.6rem;
                border-radius: 1.6rem;
                border: .08rem solid #fff;
            }
            .name{
                    margin-top: .186667rem;
                    font-size: .426667rem;
                    line-height: .6rem;
                    color: #fff;
            }
        }
        .container{
            -webkit-box-flex: 1;
            flex: 1;
            text-align:center;
            .group{
                    margin-top: .266667rem;
                    background: #fff;
                    .order{
                        width:100%;
                        height:3.973333rem;
                        position: relative;

                        .title{
                                position: relative;
                                margin: .346667rem 0 0;
                                font-size: .4rem;
                                line-height: .56rem;
                                height: .56rem;
                                color: #333;
                                z-index: 9;
                                display: inline-block;
                                width: 2.133333rem;
                                background-color: #fff;
                                
                        }
                        .title-line{
                                    position: absolute;
                                    top: .613333rem;
                                    left: 50%;
                                    margin-left: -2.133333rem;
                                    width: 4.266667rem;
                                    height: 1px;
                                    background-size: 1px 1px;
                                    background:url(../../../assets/7.png) 0 bottom repeat-x;
                        }
                        .list{
                                overflow: hidden;
                                height:3.066667rem;
                                width:9.2rem;
                                margin-left:.373333rem;
                                a{
                                        display: block;
                                        height: 2.4rem;
                                        text-decoration: none;
                                        
                                }
                                p{
                                        position: relative;
                                        top: 1.413333rem;
                                        text-align: center;
                                        font-size: .4rem;
                                        line-height: .56rem;
                                        height: .56rem;
                                        margin: 0;
                                        color: #333;
                                }
                                .film{
                                    height:2.586667rem;
                                    width: 50%;
                                    background-image: url(../../../assets/8.png);
                                    float: left;
                                    height: 2.586667rem;
                                    background-repeat: no-repeat;
                                    background-position: top;
                                    background-size: 1.12rem auto;
                                    margin-top: .48rem;
                                    
                                }
                                .store{
                                    height:2.586667rem;
                                    width: 50%;
                                    background-image: url(../../../assets/9.png);
                                    float: left;
                                    height: 2.586667rem;
                                    background-repeat: no-repeat;
                                    background-position: top;
                                    background-size: 1.12rem auto;
                                    margin-top: .48rem;
                                }
                        }
                    }
                    .tb{
                        div{
                                position: relative;
                                height: 1.173333rem;
                                line-height: 1.173333rem;
                                font-size: .4rem;
                                margin-left: .4rem;
                                padding-right: .4rem;
                                a{
                                    display: block;
                                    color: #333;
                                    text-decoration: none;
                                    text-align: left;
                                    i{
                                            position: absolute;
                                            right: .4rem;
                                            top: .48rem;
                                            display: inline-block;
                                            content: "";
                                            width: .213333rem;
                                            height: .213333rem;
                                            border-left: 1px solid #ccc;
                                            border-top: 1px solid #ccc;
                                            -webkit-transform: rotate(135deg);
                                            transform: rotate(135deg);
                                    }
                                }
                        }
                    }
            }
        }
    }

        
</style>
