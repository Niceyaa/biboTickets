<template>
    <div class="about-us">
        <div class="about-title">关于我们</div>
        <div class="about-content">
            <div class="about-left">
                <div @click="changeName(name)" :class="{'is-active':name === currentName}" v-for="name in tabInfo">{{name}}</div>
            </div>
            <div class="about-right">
                <div class="content-container" v-if="currentName === tabInfo[0]">
                    <el-divider content-position="left">{{currentName}}</el-divider>
                    <div class="description">
                        <p>1、客服热线：10102266</p>
                        <p>2、服务时间：10:00-19:00(周一至周日)</p>
                        <p>3、公司注册地址：上海市杨浦区伟德路6号1003-22室</p>
                    </div>
                </div>
                <div class="content-container" v-if="currentName === tabInfo[1]">
                    <el-divider content-position="left">{{currentName}}</el-divider>
                    <div class="description">
                        <p>可以选座吗？</p>
                        <p>摩天轮票务的部分演出提供在线选座，点击“选座购买”可进入选座模式。不提供在线选座的场次，我们将根据您所选票面提供相应的随机座位进行出票。</p>
                    </div>
                </div>
                <div class="content-container" v-if="currentName === tabInfo[2]">
                    <el-divider content-position="left">{{currentName}}</el-divider>
                    <div class="description">
                        <p>快递</p>
                        <p>摩天轮默认发顺丰快递，快递发出后，用户可在订单中查看物流信息，提交订单时请仔细确认收货人信息，避免因个人疏失快递无法及时送达。</p>
                    </div>
                    <div class="description">
                        <p>现场取票</p>
                        <p>如用户选择现场取票，我们将在成功配票后发送含取票码的短信，并在演出开演前将取票联系信息发送至订单联系手机。用户可凭取票码在演出开场前到现场取票点取票入场，请妥善保管取票码及相关信息，以防被他人冒领。</p>
                    </div>

                </div>
                <div class="content-container" v-if="currentName === tabInfo[3]">
                    <el-divider content-position="left">{{currentName}}</el-divider>
                </div>
                <div class="content-container" v-if="currentName === tabInfo[4]">
                    <el-divider content-position="left">{{currentName}}</el-divider>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                tabInfo:["联系我们", "大事记", "公司介绍", "问题反馈", "隐私政策"],
                currentName: "联系我们"
            }
        },
        methods:{
            changeName(name){
                this.currentName = name;
            }
        },
        created(){
            this.currentName = this.$route.params.sendName;
        }
    }
</script>

<style scoped lang="less">
    .about-us{
        width: 100%;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        padding-bottom: 40px;
        .about-title{
            font-size: 20px;
            padding: 20px 0;
            color: #777;
        }
        .about-content{
            display: flex;
            .about-left{
                flex: .15;
                background: #f7f7f7;
                height: 255px;
                div{
                    display: block;
                    text-decoration: none;
                    color: #777;
                    font-size: 16px;
                    padding: 15px 0;
                    text-align: center;
                    cursor: pointer;
                    &:hover{
                        color: #000;
                    }
                    &.is-active{
                        background: linear-gradient(to right,palevioletred,orangered);
                        color: #000;
                    }
                }
            }
            .about-right{
                flex: .85;
                padding: 0 40px;
                .content-container{
                    width: 100%;
                    .el-divider__text{
                        font-size: 16px;
                        color: #888;
                    }
                    .description{
                        border-bottom: 1px solid #DCDFE6;
                        padding-bottom: 10px;
                        p{
                            margin: 0;
                            padding: 8px;
                            font-size: 15px;
                        }
                    }
                }
            }
        }
    }
</style>