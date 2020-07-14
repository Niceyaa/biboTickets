<template>
  <div class="all-container">
    <div class="home" @click="matchFlagFalse">
      <div class="home-top">
        <div class="home-logo">
          <div class="logo">
            <img src="../../assets/img/logo.png" alt="">
          </div>
          <div class="city" >
            <div class="city-container" @mouseover="showCityDesc('block')" @mouseout="showCityDesc('none')">
              <span class="city-value">
                {{currentCity}}<i class="el-icon-caret-bottom"></i>
              </span>
              <div id="all-city" class="all-city">
                <div class="current-city">
                  <span>当前城市：</span>
                  <span class="current-value">{{currentCity}}</span>
                </div>
                <div class="hot-city">
                  <span>热门城市：</span>
                  <div class="hot-container">
                    <div @click="changeCity(item)" v-for="(item,i) in hotCity" :key="i">{{item}}</div>
                  </div>
                </div>
                <el-divider></el-divider>
                <div class="order">
                  <div>按字母查找：</div>
                  <div class="all-order">
                    <span @click="goToTarget(item.type)" v-for="item in allCity" :key="item.id">{{item.type}}</span>
                  </div>
                </div>
                <div ref="cityWrapper" class="desc-city">
                  <div>
                    <div class="container" :id="item.type" v-for="item in allCity" :key="item.id">
                      <span class="left-order">{{item.type}}</span>
                      <div class="right-wrapper">
                        <span @click="changeCity(city)" v-for="(city,i) in item.city" :key="i">{{city}}</span>
                      </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="home-search">
          <div class="search" style="position: relative;">
            <div class="big-wrapper" style="margin-top: 8px;">
              <el-input class="input-sign"  placeholder="搜索明星、演出、场馆" v-model="searchValue">
                <el-button @click="searchTickets" slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
            <div v-show="matchFlag" class="search-wrapper">
              <ul>
                <li @click="showDetail(item)" v-for="item in searchList">{{item.detail}}</li>
              </ul>
            </div>
          </div>
          <div class="search-history">
            <div v-for="item in searchHistory" :key="item.id" @click="showDetail(item)">{{item.city}}</div>
          </div>
        </div>
        <div class="home-top-right">
          <div>
            <el-dropdown placement="bottom-start">
            <span class="el-dropdown-link">
              <i class="el-icon-mobile-phone"></i>手机端
            </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <img src="https://www.moretickets.com/svg/app-qrcode-d942aa80f0.svg" alt="">
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div @click="showLogin" class="login">
            <i class="el-icon-user" style="font-size: 16px"></i>
            <span>登录/注册</span>
          </div>
        </div>
      </div>
      <div class="home-nav">
        <router-link :class="{isActive:$route.path === '/'}" to="/">首页</router-link>
        <router-link :class="{isActive:$route.path === '/vocalConcert'}" to="/vocalConcert">演唱会</router-link>
        <router-link :class="{isActive:$route.path === '/drama'}" to="/drama">话剧歌剧</router-link>
        <router-link :class="{isActive:$route.path === '/nativeLife'}" to="/nativeLife">本地生活</router-link>
        <router-link :class="{isActive:$route.path === '/concert'}" to="/concert">音乐会</router-link>
        <router-link :class="{isActive:$route.path === '/kids'}" to="/kids">儿童亲子</router-link>
        <router-link :class="{isActive:$route.path === '/dancing'}" to="/dancing">舞蹈芭蕾</router-link>
        <router-link :class="{isActive:$route.path === '/exhibition'}" to="/exhibition">休闲展览</router-link>
        <router-link :class="{isActive:$route.path === '/tittleTattle'}" to="/tittleTattle">曲艺杂谈</router-link>
        <router-link :class="{isActive:$route.path === '/sports'}" to="/sports">体育赛事</router-link>
      </div>
      <div class="home-body">
        <router-view v-if="isRouterActive"></router-view>
      </div>
      <!--底部-->
      <div class="home-footer">
        <div class="left-wrap">
          <img src="https://www.moretickets.com/images/logo-b17998409b.png" alt="">
          <div class="item help">
            <div class="title">帮助中心</div>
            <div><router-link :to="{name:'help',params:{sendName:'预售演出'}}">预售演出</router-link></div>
            <div><router-link :to="{name:'help',params:{sendName:'关于座位'}}">关于座位</router-link></div>
            <div><router-link :to="{name:'help',params:{sendName:'配送方式'}}">配送方式</router-link></div>
            <div><router-link :to="{name:'help',params:{sendName:'无票赔付'}}">无票赔付</router-link></div>
            <div><router-link :to="{name:'help',params:{sendName:'订票提示'}}">订票提示</router-link></div>
          </div>
          <div class="item about-us">
            <div class="title">关于我们</div>
            <div><router-link :to="{name:'about',params:{sendName:'联系我们'}}">联系我们</router-link></div>
            <div><router-link :to="{name:'about',params:{sendName:'大事记'}}">大事记</router-link></div>
            <div><router-link :to="{name:'about',params:{sendName:'公司介绍'}}">公司介绍</router-link></div>
            <div><router-link :to="{name:'about',params:{sendName:'问题反馈'}}">问题反馈</router-link></div>
            <div><router-link :to="{name:'about',params:{sendName:'隐私政策'}}">隐私政策</router-link></div>
          </div>
          <div class="item pay-way">
            <div class="title">支付方式</div>
            <div>支付宝</div>
            <div>微信支付</div>
          </div>
          <div class="item attention-us">
            <div class="title">关注我们</div>
            <div>微信公众号</div>
          </div>
        </div>
        <div class="right-wrap">
          <p>1111111</p>
          <p>周一至周日  10:00-19:00</p>
          <router-link to="">联系客服</router-link>
        </div>
      </div>
      <!--授权-->
      <div class="copy-right" style="padding-bottom: 40px">
        <div style="text-align: center;font-size: 14px">Copyright©2015-2020 上海唯鱼文化传媒有限公司 All Rights Reserved | 沪ICP备20019346号</div>
      </div>
      <el-backtop></el-backtop>
    </div>
    <login :showFlag.sync="showLoginFlag"></login>
  </div>


</template>

<script>
import BS from "better-scroll";
import login from "../login/login";
export default {
  data() {
    return {
      showLoginFlag: false,
      isRouterActive: true,
      currentCity: "",
      searchValue: "",
      allList: [
        {id:0,url: "https://img0.tking.cn/mtl/default/img/zTmcHXHCd5_.jpg",price: 99,type:"drama",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.06.03-2020.11.20",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: 8.5},
        {id:1,url: "https://img0.tking.cn/mtl/default/img/7CRRma2SXP_.jpg",price: 59,type:"concert",detail: "阿斯蒂芬",onSale: 1,date:"2020.05.03-2020.06.20",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: null},
        {id:2,url: "https://img0.tking.cn/mtl/default/img/Q5ZntxZABQ_.jpg",price: 199,type:"dancing",detail: "阿萨德饭是",onSale: 0,date:"2020.05.30-2020.07.10",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: 7.5},
        {id:3,url: "https://img0.tking.cn/mtl/default/img/PFiTaQjFGz_.jpg",price: 299,type:"drama",detail: "仙玉《忘情歌》2020 Live",onSale: 1,date:"2020.06.12-2020.11.20",address:"猛追湾游泳馆",browser:14323,like:703,city:"成都",discount: 8.0},
        {id:4,url: "https://img0.tking.cn/mtl/default/img/weDJyjGR2N_.jpg",price: 91,type:"exhibition",detail: "阿萨德饭是",onSale: 0,date:"2020.06.01-2020.08.20",address:"猛追湾游泳馆",browser:14323,like:823,city:"杭州",discount: null},
        {id:5,url: "https://img0.tking.cn/mtl/default/img/jhAjxnEMsd_.jpg",price: 99,type:"drama",detail: "凤凰科技2020 Live",onSale: 1,date:"2020.07.03-2020.09.20",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: null},
        {id:6,url: "https://img0.tking.cn/mtl/default/img/zTmcHXHCd5_.jpg",price: 99,type:"kids",detail: "公社是公司",onSale: 0,date:"2020.07.12-2020.09.10",address:"猛追湾游泳馆",browser:14323,like:803,city:"广州",discount: 9.8},
        {id:7,url: "https://img0.tking.cn/mtl/default/img/zTmcHXHCd5_.jpg",price: 99,type:"nativeLife",detail: "阿斯顿发文",onSale: 1,date:"2020.07.12-2020.09.10",address:"猛追湾游泳馆",browser:14323,like:5603,city:"杭州",discount: 9.8},
        {id:8,url: "https://img0.tking.cn/mtl/default/img/zTmcHXHCd5_.jpg",price: 99,type:"drama",detail: "安慰法阿斯蒂芬",onSale: 0,date:"2020.06.03-2020.11.20",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: 8.5},
        {id:9,url: "https://img0.tking.cn/mtl/default/img/7CRRma2SXP_.jpg",price: 59,type:"concert",detail: "仙玉《忘情歌》2020 Live",onSale: 1,date:"2020.05.03-2020.06.20",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: null},
        {id:10,url: "https://img0.tking.cn/mtl/default/img/Q5ZntxZABQ_.jpg",price: 199,type:"dancing",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.05.30-2020.07.10",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: 7.5},
        {id:11,url: "https://img0.tking.cn/mtl/default/img/PFiTaQjFGz_.jpg",price: 299,type:"drama",detail: "仙玉《忘情歌》2020 Live",onSale: 1,date:"2020.06.12-2020.11.20",address:"猛追湾游泳馆",browser:14323,like:703,city:"成都",discount: 8.0},
        {id:12,url: "https://img0.tking.cn/mtl/default/img/Q5ZntxZABQ_.jpg",price: 199,type:"dancing",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.05.30-2020.07.10",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: 7.5},
        {id:13,url: "https://img0.tking.cn/mtl/default/img/zTmcHXHCd5_.jpg",price: 99,type:"drama",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.06.03-2020.11.20",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: 8.5},
        {id:14,url: "https://img0.tking.cn/mtl/default/img/7CRRma2SXP_.jpg",price: 59,type:"concert",detail: "仙玉《忘情歌》2020 Live",onSale: 1,date:"2020.05.03-2020.06.20",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: null},
        {id:15,url: "https://img0.tking.cn/mtl/default/img/Q5ZntxZABQ_.jpg",price: 199,type:"dancing",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.05.30-2020.07.10",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: 7.5},
        {id:16,url: "https://img0.tking.cn/mtl/default/img/PFiTaQjFGz_.jpg",price: 299,type:"drama",detail: "仙玉《忘情歌》2020 Live",onSale: 1,date:"2020.06.12-2020.11.20",address:"猛追湾游泳馆",browser:14323,like:703,city:"成都",discount: 8.0},
        {id:17,url: "https://img0.tking.cn/mtl/default/img/Q5ZntxZABQ_.jpg",price: 199,type:"dancing",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.05.30-2020.07.10",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: 7.5},
        {id:18,url:"https://img0.tking.cn/mtl/default/img/HweBNjxKSP_.jpg",type:"vocalConcert",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100,browser:14323,like:803,city:"成都",discount: 8.5},
        {id:19,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"vocalConcert",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100,browser:14323,like:803,city:"成都",discount: 8.5},
        {id:20,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"tittleTattle",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100,browser:14323,like:803,city:"成都",discount: 8.5},
        {id:21,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"vocalConcert",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100,browser:14323,like:803,city:"成都",discount: 8.5},
        {id:22,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"tittleTattle",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100,browser:14323,like:803,city:"成都",discount: 8.5},
        {id:23,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"vocalConcert",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100,browser:14323,like:803,city:"成都",discount: 8.5},
        {id:24,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"kids",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100,browser:14323,like:803,city:"成都",discount: 8.5}
      ],
      searchList: [
        {id:0,url: "https://img0.tking.cn/mtl/default/img/zTmcHXHCd5_.jpg",price: 99,type:"drama",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.06.03-2020.11.20",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: 8.5},
        {id:1,url: "https://img0.tking.cn/mtl/default/img/7CRRma2SXP_.jpg",price: 59,type:"concert",detail: "阿斯蒂芬",onSale: 1,date:"2020.05.03-2020.06.20",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: null},
        {id:2,url: "https://img0.tking.cn/mtl/default/img/Q5ZntxZABQ_.jpg",price: 199,type:"dancing",detail: "阿萨德饭是",onSale: 0,date:"2020.05.30-2020.07.10",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: 7.5},
        {id:3,url: "https://img0.tking.cn/mtl/default/img/PFiTaQjFGz_.jpg",price: 299,type:"drama",detail: "仙玉《忘情歌》2020 Live",onSale: 1,date:"2020.06.12-2020.11.20",address:"猛追湾游泳馆",browser:14323,like:703,city:"成都",discount: 8.0},
        {id:4,url: "https://img0.tking.cn/mtl/default/img/weDJyjGR2N_.jpg",price: 91,type:"exhibition",detail: "阿萨德饭是",onSale: 0,date:"2020.06.01-2020.08.20",address:"猛追湾游泳馆",browser:14323,like:823,city:"杭州",discount: null},
        {id:5,url: "https://img0.tking.cn/mtl/default/img/jhAjxnEMsd_.jpg",price: 99,type:"drama",detail: "凤凰科技2020 Live",onSale: 1,date:"2020.07.03-2020.09.20",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: null},
        {id:6,url: "https://img0.tking.cn/mtl/default/img/zTmcHXHCd5_.jpg",price: 99,type:"kids",detail: "公社是公司",onSale: 0,date:"2020.07.12-2020.09.10",address:"猛追湾游泳馆",browser:14323,like:803,city:"广州",discount: 9.8},
        {id:7,url: "https://img0.tking.cn/mtl/default/img/zTmcHXHCd5_.jpg",price: 99,type:"nativeLife",detail: "阿斯顿发文",onSale: 1,date:"2020.07.12-2020.09.10",address:"猛追湾游泳馆",browser:14323,like:5603,city:"杭州",discount: 9.8},
        {id:8,url: "https://img0.tking.cn/mtl/default/img/zTmcHXHCd5_.jpg",price: 99,type:"drama",detail: "安慰法阿斯蒂芬",onSale: 0,date:"2020.06.03-2020.11.20",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: 8.5},
        {id:9,url: "https://img0.tking.cn/mtl/default/img/7CRRma2SXP_.jpg",price: 59,type:"concert",detail: "仙玉《忘情歌》2020 Live",onSale: 1,date:"2020.05.03-2020.06.20",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: null},
        {id:10,url: "https://img0.tking.cn/mtl/default/img/Q5ZntxZABQ_.jpg",price: 199,type:"dancing",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.05.30-2020.07.10",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: 7.5},
        {id:11,url: "https://img0.tking.cn/mtl/default/img/PFiTaQjFGz_.jpg",price: 299,type:"drama",detail: "仙玉《忘情歌》2020 Live",onSale: 1,date:"2020.06.12-2020.11.20",address:"猛追湾游泳馆",browser:14323,like:703,city:"成都",discount: 8.0},
        {id:12,url: "https://img0.tking.cn/mtl/default/img/Q5ZntxZABQ_.jpg",price: 199,type:"dancing",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.05.30-2020.07.10",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: 7.5},
        {id:13,url: "https://img0.tking.cn/mtl/default/img/zTmcHXHCd5_.jpg",price: 99,type:"drama",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.06.03-2020.11.20",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: 8.5},
        {id:14,url: "https://img0.tking.cn/mtl/default/img/7CRRma2SXP_.jpg",price: 59,type:"concert",detail: "仙玉《忘情歌》2020 Live",onSale: 1,date:"2020.05.03-2020.06.20",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: null},
        {id:15,url: "https://img0.tking.cn/mtl/default/img/Q5ZntxZABQ_.jpg",price: 199,type:"dancing",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.05.30-2020.07.10",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: 7.5},
        {id:16,url: "https://img0.tking.cn/mtl/default/img/PFiTaQjFGz_.jpg",price: 299,type:"drama",detail: "仙玉《忘情歌》2020 Live",onSale: 1,date:"2020.06.12-2020.11.20",address:"猛追湾游泳馆",browser:14323,like:703,city:"成都",discount: 8.0},
        {id:17,url: "https://img0.tking.cn/mtl/default/img/Q5ZntxZABQ_.jpg",price: 199,type:"dancing",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.05.30-2020.07.10",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: 7.5},
        {id:18,url:"https://img0.tking.cn/mtl/default/img/HweBNjxKSP_.jpg",type:"vocalConcert",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100,browser:14323,like:803,city:"成都",discount: 8.5},
        {id:19,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"vocalConcert",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100,browser:14323,like:803,city:"成都",discount: 8.5},
        {id:20,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"vocalConcert",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100,browser:14323,like:803,city:"成都",discount: 8.5},
        {id:21,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"vocalConcert",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100,browser:14323,like:803,city:"成都",discount: 8.5},
        {id:22,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"vocalConcert",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100,browser:14323,like:803,city:"成都",discount: 8.5},
        {id:23,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"vocalConcert",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100,browser:14323,like:803,city:"成都",discount: 8.5},
        {id:24,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"vocalConcert",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100,browser:14323,like:803,city:"成都",discount: 8.5}
      ],
      matchFlag: false,
      searchHistory: [
              {id:1,url: "https://img0.tking.cn/mtl/default/img/7CRRma2SXP_.jpg",price: 59,type:"concert",detail: "阿斯蒂芬",onSale: 1,date:"2020.05.03-2020.06.20",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: null},
              {id:12,url: "https://img0.tking.cn/mtl/default/img/Q5ZntxZABQ_.jpg",price: 199,type:"dancing",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.05.30-2020.07.10",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: 7.5},
              {id:22,url:"https://img0.tking.cn/assets/img/N7iAHzM2tz_.jpg",type:"vocalConcert",detail:"【成都站】北京爆笑感动话剧《夜未央》",date:"2020.05.22 21.15",address:"四川大剧院",price: 100,browser:14323,like:803,city:"成都",discount: 8.5},
              {id:15,url: "https://img0.tking.cn/mtl/default/img/Q5ZntxZABQ_.jpg",price: 199,type:"dancing",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.05.30-2020.07.10",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都",discount: 7.5},
              {id:6,url: "https://img0.tking.cn/mtl/default/img/zTmcHXHCd5_.jpg",price: 99,type:"kids",detail: "公社是公司",onSale: 0,date:"2020.07.12-2020.09.10",address:"猛追湾游泳馆",browser:14323,like:803,city:"广州",discount: 9.8},

      ],
      hotCity:["北京","上海","广州","深圳","成都","西安","云南","重庆","南京","长沙","黑龙江","天津",""],
      allCity: [
        {id:0,type:"A",city:["阿拉善","鞍山","安庆","安阳","阿坝","安顺","阿里","安康","阿克苏","阿勒泰","阿拉尔","澳门",]},
        {id:1,type:"B",city:["北京","保定","包头","巴彦淖尔","本溪","白山","白城","蚌埠","亳州","滨州","北海","百色","白沙","保亭","巴中","毕节","保山","宝鸡","白银","博尔塔拉","巴音郭楞"]},
        {id:2,type:"C",city:["承德","沧州","长治","赤峰","朝阳","长春","常州","滁州","池州","长沙","常德","郴州","潮州","崇左","澄迈","昌江","重庆","成都","楚雄","昌都","昌吉"]},
        {id:3,type:"D",city:["定州","大同","大连","丹东","大庆","大兴安岭","东营","德州","东莞","儋州","东方","定安","德阳","达州","大理","德宏","迪庆","定西"]},
        {id:5,type:"E",city:["鄂尔多斯","鄂州","恩施","恩施土家族苗"]},
        {id:6,type:"F",city:["抚顺","阜新","阜阳","福州","抚州","佛山","防城港"]},
        {id:7,type:"G",city:["赣州","广州","桂林","贵港","广元","广安","甘孜","贵阳","甘南","果洛","固原"]},
        {id:9,type:"H",city:["邯郸","衡水","呼和浩特","呼伦贝尔","葫芦岛","哈尔滨","鹤岗","黑河","淮安","杭州","湖州","合肥","淮南","淮北","黄山","菏泽","鹤壁","黄石","黄冈","衡阳","怀化","惠州","河源","贺州","河池","海口","红河","汉中","海东","海北","黄南","海南","海西","哈密","和田"]},
        {id:10,type:"J",city:["晋城","晋中","锦州","吉林","鸡西","佳木斯","嘉兴","金华","景德镇","九江","吉安","济南","济宁","焦作","济源","荆门","荆州","江门","揭阳","嘉峪关","金昌","酒泉"]},
        {id:11,type:"K",city:["昆山","开封","昆明","克拉玛依","克孜勒苏","喀什"]},
        {id:12,type:"L",city:["廊坊","临汾","吕梁","辽阳","辽源","连云港","丽水","六安","龙岩","莱芜","临沂","聊城","洛阳","漯河","娄底","柳州","来宾","临高","乐东","陵水","泸州","乐山","凉山","六盘水","丽江","临沧","拉萨","林芝","兰州","陇南","临夏"]},
        {id:13,type:"M",city:["牡丹江","马鞍山","茂名","梅州","绵阳","眉山"]},
        {id:14,type:"N",city:["南京","南通","宁波","南平","宁德","南昌","南阳","南宁","内江","南充","怒江","那曲"]},
        {id:15,type:"P",city:["盘锦","莆田","萍乡","平顶山","濮阳","攀枝花","普洱","平凉"]},
        {id:16,type:"Q",city:["秦皇岛","齐齐哈尔","七台河","衢州","泉州","青岛","潜江","清远","钦州","琼海","琼中","黔西南","黔东南","黔南","曲靖","庆阳"]},
        {id:17,type:"R",city:["日照","日喀则"]},
        {id:18,type:"S",city:["石家庄","朔州","沈阳","四平","松原","双鸭山","绥化","上海","苏州","宿迁","绍兴","宿州","三明","上饶","三门峡","商丘","十堰","随州","神农架","邵阳","韶关","深圳","汕头","汕尾","三亚","三沙","遂宁","山南","商洛","石嘴山","石河子"]},
        {id:97,type:"T",city:["天津","唐山","太原","通辽","铁岭","通化","泰州","台州","铜陵","泰安","天门","屯昌","铜仁","铜川","天水","吐鲁番","塔城","图木舒克","台湾"]},
        {id:20,type:"W",city:["乌海","乌兰察布","无锡","温州","芜湖","潍坊","威海","武汉","梧州","五指山","文昌","万宁","文山","渭南","武威","吴忠","乌鲁木齐","五家渠"]},
        {id:21,type:"X",city:["邢台","忻州","兴安","锡林郭勒","徐州","宣城","厦门","新余","新乡","许昌","信阳","襄阳","孝感","咸宁","仙桃","湘潭","湘西","襄樊","西双版纳","西安","咸阳","西宁","新疆","香港"]},
        {id:22,type:"Y",city:["阳泉","运城","营口","延边","伊春","盐城","扬州","鹰潭","宜春","烟台","宜昌","岳阳","益阳","永州","阳江","云浮","玉林","宜宾","雅安","玉溪","延安","榆林","玉树","银川","伊犁"]},
        {id:23,type:"Z",city:["张家口","镇江","舟山","漳州","淄博","枣庄","郑州","周口","驻马店","株洲","张家界","珠海","湛江","肇庆","中山","自贡","资阳","遵义","昭通","张掖","中卫"]},
      ]
    }
  },
  /*provide(){
    return {
      reload: this.reload
    }
  },*/
  components:{
    login
  },
  watch:{
    searchValue(v){
      if (v.length === 0) {
        this.searchList = this.allList;
      }
      let list = [];
      this.matchFlag = true;
      this.allList.forEach(item => {
        if (item.detail.search(v) !== -1) {
          list.push(item);
        }
      });
      this.searchList = list;
    },
    '$route.path'(){ // 通过监听当前页面的路由变化来刷新页面
      this.reload();// 强制刷新界面
    },
    currentCity(){
      // 可以通过城市的切换来获取不同的信息
      console.log(1111);
    }
  },
  methods:{
    searchTickets(){
      sessionStorage.setItem("searchList",JSON.stringify(this.searchList));
      this.$router.push(`/searchPage/${this.searchValue.charCodeAt(0)}`);
      this.searchValue = "";
      this.reload();
    },
    showDetail(item){
      sessionStorage.setItem("ticketInfo",JSON.stringify(item));
      if (typeof this.$route.meta === "object"){
        sessionStorage.setItem("detailPath",JSON.stringify(this.getMeta(item.type)));
      } else {
        sessionStorage.setItem("detailPath",JSON.stringify({path:this.$route.path,name:this.$route.meta}));
      }
      this.searchValue = "";
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
    reload(){
      this.matchFlag = false;
      this.isRouterActive = false;
      this.$nextTick(()=>{
        this.isRouterActive = true;
      })
    },
    matchFlagFalse(){
      this.matchFlag = false;
    },
    searchHandle(e){
      if (e.keyCode === 13) {
        this.searchTickets();
      }
    },
    showLogin(){
      this.showLoginFlag = true;
    },
    getCity(){
        let _this = this;
        AMap.plugin('AMap.CitySearch', function () {
            var citySearch = new AMap.CitySearch()
            citySearch.getLocalCity(function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    // 查询成功，result即为当前所在城市信息
                  console.log("定位执行了")
                    _this.currentCity = result.city.slice(0, -1)
                }
            })
        })
    },
    changeCity(city){
      this.currentCity = city;
      document.querySelector("#all-city").style.display = "none";
    },
    showCityDesc(flag){
      document.querySelector("#all-city").style.display = flag;
    },
    goToTarget(type){
      // document.querySelector(".desc-city").querySelector(`#${type}`).scrollIntoView(true);
      this.cityWrapper = new BS(this.$refs.cityWrapper,{
        click: true
      });
      let el = document.querySelector(`#${type}`);
      console.log(el)
      this.cityWrapper.scrollToElement(el,300);
    }
  },
  // 使用elementUI组件的元素在绑定事件的时候（第一层元素没有该节点）一定要在mounted中绑定，
  // 在created周期中，节点还没有生成，只绑定了data
  mounted(){
    document.querySelector(".input-sign input").addEventListener("keyup",this.searchHandle);
    this.getCity();
  }
}
</script>
<style lang="less">
  .all-container {
    width: 100%;
    height: 100%;
    position: relative;
    .home {
      width: 1200px;
      margin: 0 auto;
      .home-top {
        width: 100%;
        height: 70px;
        padding: 15px 0;
        margin: 0 auto;
        min-width: 1200px;
        display: flex;
        justify-content: space-between;

        .home-logo {
          flex: .3;
          display: flex;
          align-items: center;
          position: relative;
          .logo {
            img {
              width: 160px;
              height: 70px;
            }
          }
          .city {
            .city-container{
              position: relative;
              .city-value{
                font-size: 20px;
                color: #444;
                padding: 40px 0;
              }
              .all-city{
                display: none;
                background: #fff;
                position: absolute;
                top: 35px;
                left: -60px;
                width: 500px;
                box-shadow: 0 2px 12px 0 rgba(0, 0,0,0.2);
                z-index: 999;
                padding: 15px;
                border-radius: 8px;
                .current-city{
                  padding-bottom: 20px;
                  .current-value{
                    color: #fff;
                    margin-left: 20px;
                    background: linear-gradient(to right,red,yellow);
                    padding: 0 20px;
                  }
                }
                .hot-city{
                  display: flex;
                  span{
                    flex: 0 80px;
                  }
                  .hot-container{
                    flex: 1;
                    display: flex;
                    flex-wrap: wrap;
                    div{
                      padding: 3px 15px;
                      cursor: pointer;
                    }
                  }
                }
                .order{
                  .all-order{
                    display: flex;
                    flex-wrap: wrap;
                    padding-bottom: 15px;
                    span{
                      background: #999;
                      margin: 8px;
                      padding: 2px 6px;
                      cursor: pointer;
                    }
                  }
                }
                .desc-city{
                  height: 250px;
                  overflow: hidden;
                  margin-left: 8px;
                  .container{
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: 20px;
                    .left-order{
                      height: 21px;
                      flex: 0 20px;
                      background: #999;
                      padding: 1px 2px;
                      text-align: center;
                    }
                    .right-wrapper{
                      flex: 1;
                      span{
                        padding: 0 8px;
                        white-space: nowrap;
                        cursor: pointer;
                      }
                    }
                  }
                }
              }
            }
          }
        }

        .home-search {
          flex: .4;

          .search {
            position: relative;

            .big-wrapper {
              .el-input {
                input {
                  border-bottom-left-radius: 20px;
                  border-top-left-radius: 20px;
                  border: 2px solid #ff4655;
                  padding: 2px 0 2px 30px;
                  height: 44px;
                  font-size: 12px;
                }

                .el-input-group__append {
                  color: #fff;
                  border: 2px solid #ff4655;
                  border-radius: 0 20px 20px 0;
                  background: linear-gradient(to left, #ff4655, #ff4287);
                }
              }
            }

            .search-wrapper {
              position: absolute;
              top: 44px;
              left: 30px;
              background: #fff;
              color: #777;
              font-size: 14px;
              box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
              padding: 0 15px;
              z-index: 9;
              height: 390px;
              overflow: hidden;
              border-radius: 5px;
              width: 310px;

              ul {
                padding: 0;
                margin: 0;
                list-style: none;

                li {
                  padding: 10px 0;
                  margin: 0;
                  cursor: pointer;

                  &:hover {
                    background: lightgray;
                    color: red;
                  }
                }
              }
            }
          }

          .search-history {
            font-size: 12px;
            -padding-left: 30px;
            padding: 4px 0 0 30px;
            display: flex;

            div {
              padding: 0 10px 0 0;
              color: #777777;
              cursor: pointer;
              text-decoration: none;

              &:hover {
                color: darkred;
              }
            }
          }
        }

        .home-top-right {
          flex: .3;
          display: flex;
          align-items: center;
          justify-content: center;

          .el-dropdown {
            &:hover {
              cursor: pointer;
              color: indianred;
            }
          }

          .login {
            padding: 6px 15px 0 15px;
            color: #606266;
            font-size: 14px;
            height: 21px;

            &:hover {
              cursor: pointer;
              color: indianred;
            }
          }
        }
      }

      .home-nav {
        width: 100%;
        margin-top: 30px;
        display: flex;
        justify-content: space-between;

        a {
          text-align: center;
          font-size: 20px;
          color: #323038;
          text-decoration: none;
          height: 60px;
          line-height: 60px;

          &:hover {
            color: #ff4655;
          }

          &.isActive {
            font-size: 30px;
          }
        }
      }

      .home-body {
        width: 100%;
        position: relative;
      }

      .home-footer {
        position: relative;
        display: flex;
        padding: 40px 0;

        .left-wrap {
          flex: .78;
          display: flex;

          img {
            width: 160px;
            margin-right: 80px;
            height: 70px;
          }

          .item {
            width: 160px;
            color: #494949;

            .title {
              font-size: 14px;
              font-weight: bolder;
            }

            a {
              font-size: 12px;
              color: #494949;
              text-decoration: none;
              padding: 3px 0;

              &:hover {
                color: lightcoral;
              }
            }
          }
        }

        .right-wrap {
          flex: .22;

          p {
            padding: 5px 0 20px 0;
            margin: 0;
            color: #777777;
            font-size: 14px;

            &:first-child {
              font-size: 20px;
              padding: 5px 0;
            }
          }

          a {
            text-decoration: none;
            color: red;
            padding: 3px 15px;
            border: 1px solid red;
            border-radius: 16px;
          }
        }
      }
    }
  }
</style>
