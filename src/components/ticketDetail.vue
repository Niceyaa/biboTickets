<template>
    <div class="ticket-detail">
       <div class="breadcrumb">
           <el-breadcrumb separator-class="el-icon-arrow-right">
               <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
               <el-breadcrumb-item :to="{ path: detailPath.path }" >{{detailPath.name}}</el-breadcrumb-item>
               <el-breadcrumb-item>{{ticketInfo.detail}}</el-breadcrumb-item>
           </el-breadcrumb>
       </div>
        <div class="ticket-desc">
           <div class="desc-box">
               <div class="desc-left">
                   <img :src="ticketInfo.url" alt="">
                   <div class="show-icon">
                       <div>
                           <i class="el-icon-view"></i>
                           <span>{{ticketInfo.browser}}浏览</span>
                       </div>
                       <div>
                           <i class="el-icon-star-on"></i>
                           <span>{{ticketInfo.like}}人喜欢</span>
                       </div>
                   </div>
               </div>
               <div class="desc-right">
                   <div class="detail">{{ticketInfo.detail}}</div>
                   <div class="date-address">
                       <span>{{ticketInfo.date}}</span>
                       <span>{{ticketInfo.address}}</span>
                   </div>
                   <div class="coupon">
                       <span class="coupon-title">优惠券:</span>
                       <div class="coupon-detail">新用户注册即送168红包</div>
                       <span class="take">领取</span>
                   </div>
                   <div class="date-i">
                       <span class="left-title">选择日期</span>
                       <el-calendar v-model="ca">
                       </el-calendar>
                   </div>
                   <div class="choose-session">
                       <span class="left-title">选择场次</span>
                       <div class="session-type">
                           <span class="is-active">2020.04.02 周六 19:20</span>
                           <span>2020.05.24 周二 18:20</span>
                       </div>
                   </div>
                   <div class="choose-ticket">
                       <span class="left-title">选择票面</span>
                       <div class="ticket-type">
                           <div class="is-active">
                               <span>99</span>
                               <span>电子票</span>
                           </div>
                           <div>
                               <span>199</span>
                               <span>电子票</span>
                           </div>
                       </div>
                   </div>
                   <div class="choose-num">
                       <span class="left-title">选择数量</span>
                       <div class="num">
                           <button :disabled="ticketNum===1" @click="changeNum(-1)">-</button>
                           <span>{{ticketNum}}</span>
                           <button @click="changeNum(1)">+</button>
                       </div>
                   </div>
                   <div class="num-tips">
                       <i class="el-icon-check"></i>同一订单3张及以内保证连座
                   </div>
                   <div class="total-price">
                       <span class="left-title">总计</span>
                       <div class="price">
                           <span>99元</span>
                           <span>99/张</span>
                       </div>
                   </div>
                   <div class="buy-tickets">
                       <button @click="buyTicket()">立即购票</button>
                   </div>
               </div>
           </div>
        </div>
        <div class="performance-info">
            <div class="performance-left">
                <div class="per-nav">
                    <a @click="tabName='introduce'" :class="{'is-active':tabName === 'introduce'}" href="#showIntroduce">演出介绍</a>
                    <a @click="tabName='flow'" :class="{'is-active':tabName === 'flow'}" href="#buyFlow">购买流程</a>
                    <a @click="tabName='tip'" :class="{'is-active':tabName === 'tip'}" href="#buyTip">购票提示</a>
                </div>
                <div class="performance-desc">
                    <div class="little-wrapper" id="showIntroduce" style="height: 500px;">
                        <h4>演出介绍</h4>
                    </div>
                    <div class="little-wrapper" id="buyFlow">
                        <h4>购买流程</h4>
                        <img src="../assets/img/buystep.jpg" alt="">
                    </div>
                    <div class="little-wrapper" id="buyTip">
                        <h4>购票提示</h4>
                        <div class="know-tip">
                            <div class="tip-top">
                                <i class="el-icon-alarm-clock"></i>
                                <span>演出时长</span>
                            </div>
                            <div class="tip-bottom">以现场为准</div>
                        </div>
                        <div class="know-tip">
                            <div class="tip-top">
                                <i class="el-icon-alarm-clock"></i>
                                <span>限购说明</span>
                            </div>
                            <div class="tip-bottom">本节目最多可以购买6张(如有多张票务需求请拨打10086)</div>
                        </div>
                        <div class="know-tip">
                            <div class="tip-top">
                                <i class="el-icon-alarm-clock"></i>
                                <span>入场时间</span>
                            </div>
                            <div class="tip-bottom">以现场为准</div>
                        </div>
                        <div class="know-tip">
                            <div class="tip-top">
                                <i class="el-icon-alarm-clock"></i>
                                <span>物品寄存</span>
                            </div>
                            <div class="tip-bottom">以现场为准</div>
                        </div>
                        <div class="know-tip">
                            <div class="tip-top">
                                <i class="el-icon-alarm-clock"></i>
                                <span>儿童说明</span>
                            </div>
                            <div class="tip-bottom">以现场为准</div>
                        </div>
                        <div class="know-tip">
                            <div class="tip-top">
                                <i class="el-icon-alarm-clock"></i>
                                <span>禁止携带物品</span>
                            </div>
                            <div class="tip-bottom">以现场为准</div>
                        </div>
                        <div class="know-tip">
                            <div class="tip-top">
                                <i class="el-icon-alarm-clock"></i>
                                <span>发票说明</span>
                            </div>
                            <div class="tip-bottom">如需开具发票，表演结束之后可致电或者在线客服，工作时间:10点-19点</div>
                        </div>
                        <div class="know-tip">
                            <div class="tip-top">
                                <i class="el-icon-alarm-clock"></i>
                                <span>票品及入场</span>
                            </div>
                            <div class="tip-bottom">以现场为准</div>
                        </div>
                        <div class="know-tip">
                            <div class="tip-top">
                                <i class="el-icon-alarm-clock"></i>
                                <span>座位类型</span>
                            </div>
                            <div class="tip-bottom">以现场为准</div>
                        </div>
                        <div class="know-tip">
                            <div class="tip-top">
                                <i class="el-icon-alarm-clock"></i>
                                <span>演出语言</span>
                            </div>
                            <div class="tip-bottom">以现场为准</div>
                        </div>
                        <div class="know-tip">
                            <div class="tip-top">
                                <i class="el-icon-alarm-clock"></i>
                                <span>退换政策</span>
                            </div>
                            <div class="tip-bottom">以现场为准</div>
                        </div>
                        <div class="know-tip">
                            <div class="tip-top">
                                <i class="el-icon-alarm-clock"></i>
                                <span>购票须知</span>
                            </div>
                            <div class="tip-bottom">以现场为准</div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="performance-right">
                <div class="right-title">扫码下载</div>
                <div class="qr-code">
                    <div class="code-left">
                        <span>hhhAPP</span>
                        <span>低至9元抢门票</span>
                        <span>0元免费抢门票</span>
                    </div>
                    <div class="code-right">
                        <img src="https://www.moretickets.com/images/appewm-cf869fbaba.png" alt="">
                    </div>
                </div>
                <div class="right-title">相关演出</div>
                <div class="relative-show">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                ticketInfo: {},
                detailPath: {},
                ca: new Date(),
                tabName: "introduce",// 定义tab切换标识
                ticketNum: 1
            }
        },
        created() {
            this.detailPath = JSON.parse(sessionStorage.getItem("detailPath"));
            this.ticketInfo = JSON.parse(sessionStorage.getItem("ticketInfo"));
        },
        methods:{
            buyTicket(){
                console.log(this.ticketInfo)
            },
            changeNum(n){
                this.ticketNum += n;
            }
        }
    }
</script>

<style lang="less">
.ticket-detail{
    width: 100%;
    .ticket-desc{
        position: relative;
        box-sizing: border-box;
        width: 100%;
        padding: 30px;
        .desc-box{
            width: 100%;
            border-radius: 10px;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            display: flex;
            padding-top: 40px;
            position: relative;
            .desc-left{
                position: relative;
                left: -20px;
                top: 0;
                img{
                    width: 250px;
                    height: 350px;
                    border-radius: 4px;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.4);
                }
                .show-icon{
                    display: flex;
                    justify-content: center;
                    text-align: center;
                    font-size: 12px;
                    div{
                        height: 40px;
                        line-height: 40px;
                        i{
                            font-size: 18px;
                            vertical-align: middle;
                            color: gold;
                            padding: 0 8px;
                        }
                        span{
                            vertical-align: middle;
                            color: #777;
                        }
                    }

                }
            }
            .desc-right{
                padding-left: 20px;
                .detail{
                    font-size: 24px;
                }
                .date-address{
                    padding: 4px 0;
                    color: #777;
                    font-size: 14px;
                    span{
                        margin-right: 20px;
                    }
                }
                .coupon{
                    width: 100%;
                    display: flex;
                    margin-top: 20px;
                    .coupon-title{
                        color: #777;
                        padding-right: 40px;
                    }
                    .coupon-detail{
                        padding: 5px 20px;
                        font-size: 14px;
                        color: #fff;
                        background: linear-gradient(to left,red,yellow);
                        border-radius: 2px;
                    }
                    .take{
                        margin-left: 30px;
                        color: #fff;
                        background: lightseagreen;
                        cursor: pointer;
                        padding: 2px 6px;
                        font-size: 14px;
                        border-radius: 3px;
                    }
                }
                .date-i{
                    display: flex;
                    .left-title{
                        padding-top: 42px;
                        color: #777;
                    }
                    .el-calendar{
                        width: 380px;
                        margin: 30px 0 0 40px;
                        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                        border-radius: 10px;
                        .el-calendar__body{
                            padding: 12px 20px 20px;
                            thead{
                                th{
                                    font-size: 13px;
                                }
                            }
                            td{

                                &.is-selected{
                                    color: gold;
                                    background: darkred;
                                }
                                .el-calendar-day{
                                    padding: 5px 2px;
                                    height: 30px;
                                    text-align: center;
                                    font-size: 12px;
                                }
                            }
                        }
                    }
                }
                .choose-session{
                    display: flex;
                    .left-title{
                        color: #777;
                        padding-top: 30px;
                    }
                    .session-type{
                        margin: 50px 0 0 40px;
                        span{
                            padding: 12px 6px;
                            margin-right: 20px;
                            font-size: 14px;
                            cursor: pointer;
                            background: lightgray;
                            border-radius: 3px;
                            &.is-active{
                                background: lightsalmon;
                                font-weight: bold;
                                color: #fff;
                            }
                        }
                    }
                }
                .choose-ticket{
                    display: flex;
                    .left-title{
                        color: #777;
                        padding-top: 35px;
                    }
                    .ticket-type{
                        margin: 40px 0 0 40px;
                        display: flex;
                        div{
                            background: lightgray;
                            font-size: 14px;
                            cursor: pointer;
                            border-radius: 3px;
                            padding: 12px 15px;
                            margin-right: 20px;
                            line-height: 20px;
                            &.is-active{
                                background: lightsalmon;
                                font-weight: bold;
                                color: #fff;
                            }
                            span{
                                &:last-child{
                                    margin-left: 8px;
                                    color: red;
                                    border: 1px solid red;
                                    font-size: 12px;
                                    font-weight: normal;
                                }
                            }
                        }
                    }
                }
                .choose-num{
                    display: flex;
                    .left-title{
                        color: #777;
                        padding-top: 35px;
                    }
                    .num{
                        margin: 30px 0 0 40px;
                        display: flex;
                        button{
                            background: lightgray;
                            font-size: 20px;
                            cursor: pointer;
                            border-radius: 5px;
                            padding: 3px 10px;
                            font-weight: bolder;
                            color: #fff;
                            border: none;
                            outline: none;
                            &:first-child{
                                font-size: 24px;
                                padding: 3px 13px;
                            }
                        }
                        span{
                            padding: 0 10px;
                            background: #fff;
                            color: gold;
                            font-size: 20px;
                            font-weight: bolder;
                            line-height: 38px;
                          }
                    }
                }
                .num-tips{
                    padding: 5px 0 0 104px;
                    font-size: 12px;
                    color: lightsalmon;
                    i{
                        margin-right: 3px;
                        font-size: 12px;
                        border-radius: 8px;
                        border: 1px solid gold;
                    }
                }
                .total-price{
                    display: flex;
                    .left-title{
                        color: #777;
                        padding-top: 35px;
                    }
                    .price{
                        margin: 30px 0 0 72px;
                        display: flex;
                        span{
                            font-size: 20px;
                            cursor: pointer;
                            border-radius: 5px;
                            padding: 3px 10px;
                            font-weight: bolder;
                            color: lightsalmon;
                            &:first-child{
                                font-size: 24px;
                                padding: 3px 13px;
                            }
                            &:nth-child(2){
                                font-weight: normal;
                                color: #777;
                                font-size: 14px;
                                line-height: 37px;
                            }
                        }
                    }
                }
                .buy-tickets{
                    margin: 20px 0 50px 108px;
                    button{
                        cursor: pointer;
                        color: #fff;
                        padding: 10px 40px;
                        background: linear-gradient(to right,lightsalmon,lightpink);
                        border: none;
                        border-radius: 30px;
                        font-size: 20px;
                        font-weight: bold;
                        outline: none;
                    }
                }
            }
        }
    }
    .performance-info{
        display: flex;
        padding: 15px 30px;
        .performance-left{
            flex: .75;
            .per-nav{
                display: flex;
                a{
                    margin-right: 60px;
                    font-size: 20px;
                    color: #334;
                    text-decoration: none;
                    cursor: pointer;
                    height: 40px;
                    line-height: 40px;
                    &:hover{
                        color: gold;
                    }
                    &.is-active{
                        color: hotpink;
                        font-size: 30px;
                    }
                }
            }
            .performance-desc{
                padding: 15px 0 50px 0;
                margin: 30px 30px 0 0;
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                border-radius: 20px;
                .little-wrapper{
                    width: 100%;
                    padding: 10px 0;
                    h4{
                        text-align: center;
                        color: #777;
                        margin: 0;
                    }
                    img{
                        display: block;
                        width: 75%;
                        margin: 0 auto;
                    }
                    .know-tip{
                        padding: 10px 110px;
                        .tip-top{
                            font-size: 14px;
                            color: #222;
                            i{
                                margin-right: 5px;
                            }
                        }
                        .tip-bottom{
                            padding-left: 19px;
                            color: #777;
                        }
                    }
                }
            }
        }
        .performance-right{
            flex: .25;
            .right-title{
                font-size: 30px;
            }
            .qr-code{
                display: flex;
                justify-content: space-between;
                padding: 20px 15px;
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                margin: 20px 0;
                border-radius: 10px;
                .code-left{
                    span{
                        display: block;
                        color: #777;
                        font-size: 14px;
                        padding: 3px 0;
                        &:first-child{
                            font-size: 20px;
                            color: #111;
                            padding-bottom: 8px;
                        }
                    }
                }
                .code-right{
                    img{
                        width: 85px;
                        height: 85px;
                    }
                }
            }
        }
    }
}
</style>