<template>
    <div class="iii">
        <!--轮播图-->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=107109555,3186370723&fm=26&gp=0.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2993563192,3622280513&fm=26&gp=0.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2284441195,2239568538&fm=26&gp=0.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3149296511,858083239&fm=11&gp=0.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3059059802,2673806828&fm=11&gp=0.jpg" alt="">
                </div>
            </div>
            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        <!--近期热门-->
        <div class="hot">
            <div class="hot-left">
                <div class="top">
                    <span>近期热门</span>
                    <router-link to="/more">查看更多</router-link>
                </div>
                <div class="content">
                    <div class="goto" v-for="item in hotGoods" :key="item.id" @click="showDetail(item)">
                        <img :src="item.url" alt="">
                        <div class="detail">{{item.detail}}</div>
                        <div class="price">
                            {{item.price}}<span>元起</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hot-right">
                <div class="top">
                    <span>人气TOP 5</span>
                    <router-link to="/more">查看更多</router-link>
                </div>
                <div class="content">
                    <div @click="showDetail(item)" class="top5-item" v-for="(item,index) in top5" :key="item.id">
                        <div class="num">{{index+1}}</div>
                        <img v-if="index === 0" :src="item.url" alt="">
                        <div class="detail">
                            <p>{{item.detail}}</p>
                            <p>{{item.date}}</p>
                            <p>{{item.address}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--折扣专区-->
        <div class="discount">
            <div class="top">
                <span>折扣专区</span>
                <router-link to="/more">查看更多</router-link>
            </div>
            <div class="content">
                <div class="goto" @click="showDetail(item)" v-for="item in discountGoods" :key="item.id">
                    <img :src="item.url" alt="">
                    <div class="detail">{{item.detail}}</div>
                    <div class="price">
                        {{item.price}}<span>元起</span>
                    </div>
                    <div class="desc-discount">
                        {{item.discount}}<span>折起</span>
                    </div>
                </div>
            </div>
        </div>
        <!--演唱会-->
        <div class="vocal-concert">
            <div class="top">
                <span>演唱会</span>
                <router-link to="/vocalConcert">查看更多</router-link>
            </div>
            <div class="content">
                <div class="left">
                    <img @click="showDetail(vocalList[0])" :src="vocalList[0].url" alt="">
                </div>
                <div class="right">
                    <div v-if="idx>0" class="goto" @click="showDetail(item)" v-for="(item,idx) in vocalList" :key="item.id">
                        <img :src="item.url" alt="">
                        <div>
                            <div class="detail">{{item.detail}}</div>
                            <div class="date-address">
                                <p>{{item.date}}</p>
                                <p>{{item.address}}</p>
                            </div>
                            <div class="price">
                                {{item.price}}<span>元起</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!--话剧歌剧-->
        <div class="drama">
            <div class="top">
                <span>话剧歌剧</span>
                <router-link to="/drama">查看更多</router-link>
            </div>
            <div class="content">
                <div class="left">
                    <img @click="showDetail(dramaList[0])" :src="dramaList[0].url" alt="">
                </div>
                <div class="right">
                    <div v-if="idx>0" class="goto" @click="showDetail(item)" v-for="(item,idx) in dramaList" :key="item.id">
                        <img :src="item.url" alt="">
                        <div>
                            <div class="detail">{{item.detail}}</div>
                            <div class="date-address">
                                <p>{{item.date}}</p>
                                <p>{{item.address}}</p>
                            </div>
                            <div class="price">
                                {{item.price}}<span>元起</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!--展览休闲-->
        <div class="exhibition">
            <div class="top">
                <span>展览休闲</span>
                <router-link to="/exhibition">查看更多</router-link>
            </div>
            <div class="content">
                <div class="left">
                    <img @click="showDetail(exhibitionList[0])" :src="exhibitionList[0].url" alt="">
                </div>
                <div class="right">
                    <div v-if="idx>0" class="goto" @click="showDetail(item)" v-for="(item,idx) in exhibitionList" :key="item.id">
                        <img :src="item.url" alt="">
                        <div>
                            <div class="detail">{{item.detail}}</div>
                            <div class="date-address">
                                <p>{{item.date}}</p>
                                <p>{{item.address}}</p>
                            </div>
                            <div class="price">
                                {{item.price}}<span>元起</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!--音乐会-->
        <div class="concert">
            <div class="top">
                <span>音乐会</span>
                <router-link to="/concert">查看更多</router-link>
            </div>
            <div class="content">
                <div class="left">
                    <img @click="showDetail(concertList[0])" :src="concertList[0].url" alt="">
                </div>
                <div class="right">
                    <div v-if="idx>0" class="goto" @click="showDetail(item)" v-for="(item,idx) in concertList" :key="item.id">
                        <img :src="item.url" alt="">
                        <div>
                            <div class="detail">{{item.detail}}</div>
                            <div class="date-address">
                                <p>{{item.date}}</p>
                                <p>{{item.address}}</p>
                            </div>
                            <div class="price">
                                {{item.price}}<span>元起</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!--专题推荐-->
        <div class="special">
            <div class="top">
                <span>专题推荐</span>
                <router-link to="/more">查看更多</router-link>
            </div>
            <div class="content">
                <router-link to="/more">
                    <img src="https://img0.tking.cn/mtl/default/img/JSnfG5eA4F_.jpg" alt="">
                    <div>墨仓就是考虑到</div>
                    <div>爱现场，爱生活</div>
                </router-link>
                <router-link to="/more">
                    <img src="https://img0.tking.cn/mtl/default/img/JSnfG5eA4F_.jpg" alt="">
                    <div>墨仓就是考虑到</div>
                    <div>爱现场，爱生活</div>
                </router-link>
                <router-link to="/more">
                    <img src="https://img0.tking.cn/mtl/default/img/JSnfG5eA4F_.jpg" alt="">
                    <div>墨仓就是考虑到</div>
                    <div>爱现场，爱生活</div>
                </router-link>
            </div>
        </div>
        <!--演出日历-->
        <div class="show-calender">
            <div class="top">演出日历</div>
            <div class="calendar-content">
                <div class="calendar-left">
                    <el-calendar class="my-calendar" v-model="currentDate">
                    </el-calendar>
                </div>
                <div class="right">
                    <div class="right-top">
                        <div class="top-left">
                            <span>{{currentDate}}  </span>共有<span>{{showTimes}}</span>场演出
                        </div>
                        <router-link to="/more" class="top-right">查看更多</router-link>
                    </div>
                    <div class="desc">
                        <router-link to="/desc">
                            <img style="width: 150px;" src="https://img0.moretickets.com/zbf/assets/img/6HGnrR2Gci_.jpeg" alt="">
                            <p>【成都站】恋爱一条街</p>
                            <p>2020.02.23-2020.07.20</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <!--买票保障-->
        <div class="tickets-safeguard">
            <img class="safeguard" src="https://www.moretickets.com/images/assurance-bg-0007cd6678.png" alt="">
            <img class="cooperation" src="https://www.moretickets.com/images/companions-3aa1317ab0.png" alt="">
        </div>
    </div>
</template>

<script>
// 引入swiper
import Swiper from 'swiper';
export default {
    data() {
        return {
            hotGoods: [
                {id:0,url: "https://img0.tking.cn/mtl/default/img/zTmcHXHCd5_.jpg",price: 99,type:"drama",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.06.03-2020.11.20",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: 8.5},
                {id:1,url: "https://img0.tking.cn/mtl/default/img/7CRRma2SXP_.jpg",price: 59,type:"concert",detail: "仙玉《忘情歌》2020 Live",onSale: 1,date:"2020.05.03-2020.06.20",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: null},
                {id:2,url: "https://img0.tking.cn/mtl/default/img/Q5ZntxZABQ_.jpg",price: 199,type:"dancing",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.05.30-2020.07.10",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: 7.5},
                {id:3,url: "https://img0.tking.cn/mtl/default/img/PFiTaQjFGz_.jpg",price: 299,type:"drama",detail: "仙玉《忘情歌》2020 Live",onSale: 1,date:"2020.06.12-2020.11.20",address:"猛追湾游泳馆",browser:14323,like:703,city:"成都",discount: 8.0},
                {id:4,url: "https://img0.tking.cn/mtl/default/img/weDJyjGR2N_.jpg",price: 91,type:"exhibition",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.06.01-2020.08.20",address:"猛追湾游泳馆",browser:14323,like:823,city:"杭州",discount: null},
                {id:5,url: "https://img0.tking.cn/mtl/default/img/jhAjxnEMsd_.jpg",price: 99,type:"drama",detail: "仙玉《忘情歌》2020 Live",onSale: 1,date:"2020.07.03-2020.09.20",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: null},
                {id:6,url: "https://img0.tking.cn/mtl/default/img/zTmcHXHCd5_.jpg",price: 99,type:"kids",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.07.12-2020.09.10",address:"猛追湾游泳馆",browser:14323,like:803,city:"广州",discount: 9.8},
                {id:7,url: "https://img0.tking.cn/mtl/default/img/zTmcHXHCd5_.jpg",price: 99,type:"nativeLife",detail: "仙玉《忘情歌》2020 Live",onSale: 1,date:"2020.07.12-2020.09.10",address:"猛追湾游泳馆",browser:14323,like:5603,city:"杭州",discount: 9.8},
            ],
            top5: [
                {id:0,url: "https://img0.tking.cn/mtl/default/img/zTmcHXHCd5_.jpg",price: 99,type:"drama",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.06.03-2020.11.20",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: 8.5},
                {id:1,url: "https://img0.tking.cn/mtl/default/img/7CRRma2SXP_.jpg",price: 59,type:"concert",detail: "仙玉《忘情歌》2020 Live",onSale: 1,date:"2020.05.03-2020.06.20",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: null},
                {id:2,url: "https://img0.tking.cn/mtl/default/img/Q5ZntxZABQ_.jpg",price: 199,type:"dancing",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.05.30-2020.07.10",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: 7.5},
                {id:3,url: "https://img0.tking.cn/mtl/default/img/PFiTaQjFGz_.jpg",price: 299,type:"drama",detail: "仙玉《忘情歌》2020 Live",onSale: 1,date:"2020.06.12-2020.11.20",address:"猛追湾游泳馆",browser:14323,like:703,city:"成都",discount: 8.0},
                {id:4,url: "https://img0.tking.cn/mtl/default/img/Q5ZntxZABQ_.jpg",price: 199,type:"dancing",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.05.30-2020.07.10",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: 7.5},
            ],
            discountGoods: [
                {id:0,url: "https://img0.tking.cn/mtl/default/img/zTmcHXHCd5_.jpg",price: 99,type:"drama",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.06.03-2020.11.20",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: 8.5},
                {id:1,url: "https://img0.tking.cn/mtl/default/img/7CRRma2SXP_.jpg",price: 59,type:"concert",detail: "仙玉《忘情歌》2020 Live",onSale: 1,date:"2020.05.03-2020.06.20",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: null},
                {id:2,url: "https://img0.tking.cn/mtl/default/img/Q5ZntxZABQ_.jpg",price: 199,type:"dancing",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.05.30-2020.07.10",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: 7.5},
                {id:3,url: "https://img0.tking.cn/mtl/default/img/PFiTaQjFGz_.jpg",price: 299,type:"drama",detail: "仙玉《忘情歌》2020 Live",onSale: 1,date:"2020.06.12-2020.11.20",address:"猛追湾游泳馆",browser:14323,like:703,city:"成都",discount: 8.0},
                {id:4,url: "https://img0.tking.cn/mtl/default/img/Q5ZntxZABQ_.jpg",price: 199,type:"dancing",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.05.30-2020.07.10",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: 7.5},
            ],
            vocalList: [
                {id:0,url:"https://img0.tking.cn/mtl/default/img/HweBNjxKSP_.jpg",type:"vocalConcert",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100,browser:14323,like:803,city:"成都",discount: 8.5},
                {id:1,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"vocalConcert",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100,browser:14323,like:803,city:"成都",discount: 8.5},
                {id:2,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"vocalConcert",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100,browser:14323,like:803,city:"成都",discount: 8.5},
                {id:3,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"vocalConcert",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100,browser:14323,like:803,city:"成都",discount: 8.5},
                {id:4,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"vocalConcert",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100,browser:14323,like:803,city:"成都",discount: 8.5},
                {id:5,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"vocalConcert",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100,browser:14323,like:803,city:"成都",discount: 8.5},
                {id:6,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"vocalConcert",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100,browser:14323,like:803,city:"成都",discount: 8.5}
            ],
            exhibitionList: [
                {id:0,url:"https://img0.tking.cn/mtl/default/img/HweBNjxKSP_.jpg",type:"exhibition",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100},
                {id:1,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"exhibition",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100},
                {id:2,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"exhibition",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100},
                {id:3,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"exhibition",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100},
                {id:4,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"exhibition",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100},
                {id:5,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"exhibition",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100},
                {id:6,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"exhibition",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100}
            ],
            concertList: [
                {id:0,url:"https://img0.tking.cn/mtl/default/img/HweBNjxKSP_.jpg",type:"concert",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100},
                {id:1,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"concert",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100},
                {id:2,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"concert",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100},
                {id:3,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"concert",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100},
                {id:4,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"concert",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100},
                {id:5,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"concert",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100},
                {id:6,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"concert",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100}
            ],
            dramaList: [
                {id:0,url:"https://img0.tking.cn/mtl/default/img/HweBNjxKSP_.jpg",type:"drama",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100},
                {id:1,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"drama",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100},
                {id:2,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"drama",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100},
                {id:3,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"drama",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100},
                {id:4,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"drama",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100},
                {id:5,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"drama",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100},
                {id:6,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"drama",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100}
            ],
            currentDate: new Date(),
            showTimes: 1
        }
    },
    watch:{
      currentDate(currentTime){
          this.currentDate = this.formatDate(currentTime);
      }
    },
    mounted(){
        // 定义轮播图
        var mySwiper = new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay: true,
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            effect : 'coverflow',
            slidesPerView: 3,
            centeredSlides: true,
        });
        this.currentDate = this.formatDate(this.currentDate);
    },
    methods:{
        // 定义展示ticket详情
        showDetail(item){
            sessionStorage.setItem("ticketInfo",JSON.stringify(item));
            if (typeof this.$route.meta === "object"){
                sessionStorage.setItem("detailPath",JSON.stringify(this.getMeta(item.type)));
            } else {
                sessionStorage.setItem("detailPath",JSON.stringify({path:this.$route.path,name:this.$route.meta}));
            }
            this.$router.push(`/ticketDetail/${item.id}`);
        },
        getMeta(type){
            switch (type) {
                case "concert":
                    return {name:"音乐会",path:type};
                case "dancing":
                    return {name:"舞蹈芭蕾",path:type};
                case "drama":
                    return {name:"话剧歌剧",path:type};
                case "exhibition":
                    return {name:"休闲展览",path:type};
                case "kids":
                    return {name:"儿童亲子",path:type};
                case "nativeLife":
                    return {name:"本地生活",path:type};
                case "sports":
                    return {name:"体育赛事",path:type};
                case "tittleTattle":
                    return {name:"曲艺杂谈",path:type};
                case "vocalConcert":
                    return {name:"演唱会",path:type};
            }
        },
        formatDate(d){
            let t = new Date(d);
            let y = t.getFullYear();
            let m = t.getMonth()+1;
            let day = t.getDate();
            return `${y}-${m}-${day}`
        }
    }
}
</script>

<style scoped lang="less">
@import "../../../node_modules/swiper/css/swiper.css";
.iii{
    width: 100%;
    margin-top: 60px;
    /*轮播图*/
    .swiper-container{
        width: 100%;
        height: 360px;
        margin-top: 50px;
        img{
            width: 100%;
            height: 360px;
        }
    }
    /*近期热门*/
    .hot{
        display: flex;
        justify-content: space-between;
        padding-top: 80px;
        .hot-left{
            flex: .65;
            margin-right: 50px;
            .top{
                padding-bottom: 30px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 30px;
                a{
                    text-decoration: none;
                    color: #ff4655;
                    font-size: 20px;
                }
            }
            .content{
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                .goto{
                    width: 150px;
                    display: block;
                    margin-bottom: 30px;
                    cursor: pointer;
                    img{
                        width: 150px;
                        height: 210px;
                        border-radius: 5px;
                    }
                    .detail{
                        padding: 15px 0 5px;
                        height: 40px;
                        font-size: 14px;
                    }
                    .price{
                        font-size: 20px;
                        color: #ff4655;
                        padding: 5px 0 0;
                        span{
                            padding-left: 10px;
                            font-size: 12px;
                        }
                    }
                }
            }
        }
        .hot-right{
            flex: .35;
            .top {
                padding-bottom: 40px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 30px;
                a{
                    text-decoration: none;
                    color: #ff4655;
                    font-size: 20px;
                }
            }
            .content{
                .top5-item{
                    display: flex;
                    cursor: pointer;
                    .num{
                        width: 24px;
                        height: 24px;
                        font-size: 14px;
                        margin-right: 20px;
                        border-radius: 12px;
                        text-align: center;
                        line-height: 24px;
                        background-image: linear-gradient(#ff4655,#ff4287);
                        color: #fff;
                    }
                    img{
                        width: 80px;
                        height: 106px;
                        padding: 0 20px 15px 0;
                    }
                    .detail{
                        padding: 0 0 20px 0;
                        p{
                            font-size: 12px;
                            color: #777777;
                            margin: 5px 0;
                            padding: 0;
                            &:first-child{
                                margin: 0;
                                font-size: 14px;
                                color: #323038;
                            }
                        }

                    }
                }
            }
        }
    }
    /*折扣专区*/
    .discount{
        padding-top: 60px;
        .top{
            padding-bottom: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 30px;
            a{
                text-decoration: none;
                color: #ff4655;
                font-size: 20px;
            }
        }
        .content{
            display: flex;
            .goto{
                position: relative;
                width: 150px;
                display: block;
                margin: 0 50px 30px 0;
                cursor: pointer;
                img{
                    width: 150px;
                    height: 210px;
                    border-radius: 5px;
                }
                .detail{
                    padding: 15px 0 5px;
                    height: 40px;
                    font-size: 14px;
                }
                .price{
                    font-size: 20px;
                    color: #ff4655;
                    padding: 5px 0 0;
                    span{
                        padding-left: 10px;
                        font-size: 12px;
                    }
                }
                .desc-discount{
                    position: absolute;
                    width: 35px;
                    height: 55px;
                    top: 0;
                    left: 12px;
                    font-size: 20px;
                    background-image: linear-gradient(#ff4655,#ff4287);
                    color: #fff;
                    text-align: center;
                    box-sizing: border-box;
                    overflow: hidden;
                    border-radius: 2px;
                    span{
                        font-size: 11px;
                        line-height: 20px;
                    }
                }
            }
        }
    }
    /*演唱会*/
    .vocal-concert{
        padding-top: 60px;
        .top{
            padding-bottom: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 30px;
            a{
                text-decoration: none;
                color: #ff4655;
                font-size: 20px;
            }
        }
        .content{
            display: flex;
            .left{
                width: 250px;
                img{
                    width: 250px;
                    height: 350px;
                    border-radius: 5px;
                    cursor: pointer;
                }
            }
            .right{
                display: flex;
                flex-wrap: wrap;
                .goto{
                    cursor: pointer;
                    display: flex;
                    padding-bottom: 40px;
                    img{
                        width: 110px;
                        height: 154px;
                        padding: 0 5px 0 50px;
                        border-radius: 3px;
                    }
                    div{
                        width: 135px;
                        font-size: 14px;
                        .detail{
                            width: 135px;
                            height: 40px;
                            overflow: hidden;
                            padding: 3px 0 18px 0;
                            color: #595959;
                        }
                        .date-address{
                            width: 100%;
                            overflow: hidden;
                            p{
                                margin: 0;
                                padding: 0;
                                color: #777777;
                            }
                        }
                        .price{
                            padding-top: 28px;
                            font-size: 20px;
                            color: gold;
                            span{
                                font-size: 14px;
                                padding-left: 10px;
                            }
                        }
                    }
                }
            }
        }
    }
    /*话剧歌剧*/
    .drama{
        padding-top: 60px;
        .top{
            padding-bottom: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 30px;
            a{
                text-decoration: none;
                color: #ff4655;
                font-size: 20px;
            }
        }
        .content{
            display: flex;
            .left{
                width: 250px;
                img{
                    width: 250px;
                    height: 350px;
                    border-radius: 5px;
                    cursor: pointer;
                }
            }
            .right{
                display: flex;
                flex-wrap: wrap;
                .goto{
                    cursor: pointer;
                    display: flex;
                    padding-bottom: 40px;
                    img{
                        width: 110px;
                        height: 154px;
                        padding: 0 15px 0 50px;
                        border-radius: 3px;
                    }
                    div{
                        width: 135px;
                        font-size: 14px;
                        .detail{
                            width: 135px;
                            height: 40px;
                            overflow: hidden;
                            padding: 3px 0 18px 0;
                            color: #595959;
                        }
                        .date-address{
                            width: 100%;
                            overflow: hidden;
                            p{
                                margin: 0;
                                padding: 0;
                                color: #777777;
                            }
                        }
                        .price{
                            padding-top: 28px;
                            font-size: 20px;
                            color: gold;
                            span{
                                font-size: 14px;
                                padding-left: 10px;
                            }
                        }
                    }
                }
            }
        }
    }
    /*展览休闲*/
    .exhibition{
        padding-top: 60px;
        .top{
            padding-bottom: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 30px;
            a{
                text-decoration: none;
                color: #ff4655;
                font-size: 20px;
            }
        }
        .content{
            display: flex;
            .left{
                width: 250px;
                img{
                    width: 250px;
                    height: 350px;
                    border-radius: 5px;
                    cursor: pointer;
                }
            }
            .right{
                display: flex;
                flex-wrap: wrap;
                .goto{
                    cursor: pointer;
                    display: flex;
                    padding-bottom: 40px;
                    img{
                        width: 110px;
                        height: 154px;
                        padding: 0 15px 0 50px;
                        border-radius: 3px;
                    }
                    div{
                        width: 135px;
                        font-size: 14px;
                        .detail{
                            width: 135px;
                            height: 40px;
                            overflow: hidden;
                            padding: 3px 0 18px 0;
                            color: #595959;
                        }
                        .date-address{
                            width: 100%;
                            overflow: hidden;
                            p{
                                margin: 0;
                                padding: 0;
                                color: #777777;
                            }
                        }
                        .price{
                            padding-top: 28px;
                            font-size: 20px;
                            color: gold;
                            span{
                                font-size: 14px;
                                padding-left: 10px;
                            }
                        }
                    }
                }
            }
        }
    }
    /*音乐会*/
    .concert{
        padding-top: 60px;
        .top{
            padding-bottom: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 30px;
            a{
                text-decoration: none;
                color: #ff4655;
                font-size: 20px;
            }
        }
        .content{
            display: flex;
            .left{
                width: 250px;
                img{
                    width: 250px;
                    height: 350px;
                    border-radius: 5px;
                    cursor: pointer;
                }
            }
            .right{
                display: flex;
                flex-wrap: wrap;
                .goto{
                    display: flex;
                    padding-bottom: 40px;
                    img{
                        width: 110px;
                        height: 154px;
                        padding: 0 15px 0 50px;
                        border-radius: 3px;
                    }
                    div{
                        width: 135px;
                        font-size: 14px;
                        .detail{
                            width: 135px;
                            height: 40px;
                            overflow: hidden;
                            padding: 3px 0 18px 0;
                            color: #595959;
                        }
                        .date-address{
                            width: 100%;
                            overflow: hidden;
                            p{
                                margin: 0;
                                padding: 0;
                                color: #777777;
                            }
                        }
                        .price{
                            padding-top: 28px;
                            font-size: 20px;
                            color: gold;
                            span{
                                font-size: 14px;
                                padding-left: 10px;
                            }
                        }
                    }
                }
            }
        }
    }
    /*专题推荐*/
    .special{
        padding-top: 60px;
        .top{
            padding-bottom: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 30px;
            a{
                text-decoration: none;
                color: #ff4655;
                font-size: 20px;
            }
        }
        .content{
            display: flex;
            justify-content: space-between;
            a{
                flex: .31;
                text-decoration: none;
                color: #777777;
                font-size: 14px;
                img{
                    width: 100%;
                    height: auto;
                    border-radius: 5px;
                }
                div{
                    &:first-child{
                        font-size: 18px;
                    }
                }
            }
        }
    }
    /*演出日历*/
    .show-calender{
        padding-top: 60px;
        .top{
            padding-bottom: 30px;
            font-size: 30px;
        }
        .calendar-content{
            display: flex;
            .calendar-left{
                flex: .3;
                margin-right: 30px;
                display: flex;
                    .el-calendar{
                        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                        border-radius: 10px;
                        .el-calendar__header{
                            border: 1px solid red;
                            background: #000;
                        }
                    }

            }
            .right{
                flex: .7;
                .right-top{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 12px 0 30px 0;
                    height: 30px;
                    .top-left{
                        color: #68676c;
                        font-size: 18px;
                        span{
                            &:last-child{
                                padding: 0 5px;
                                color: red;
                            }
                        }
                    }
                    .top-right{
                        color: red;
                        text-decoration: none;
                        font-size: 20px;
                    }
                }
                .desc{
                    a{
                        color: #777777;
                        text-decoration: none;
                        font-size: 14px;
                        img{
                            border-radius: 5px;
                        }
                    }
                }
            }
        }
    }
    /*买票保障*/
    .tickets-safeguard{
        width: 100%;
        padding-top: 60px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        .safeguard{
            width: 90%;
        }
        .cooperation{
            margin-top: 10px;
            width: 60%;
        }
    }
    /*底部和授权*/
}
</style>