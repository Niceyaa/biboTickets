<template>
    <div class="search-page">
        <div class="item-filter">
            <div class="filter-top">
                <span>按城市:</span>
                <div  :class="{active:city === currentCity}" v-for="(city,i) in cityArr" :key="i" @click="changeCity(city)">{{city}}</div>
            </div>
            <div class="filter-bottom">
                <span>按时间:</span>
                <div :class="{active:currentDateType === dateItem}" v-for="(dateItem,i) in dateType" :key="i" @click="changeType(dateItem)">{{dateItem}}</div>
            </div>
            <div class="filter-bottom">
                <span>按类型:</span>
                <div :class="{active:currentType === type}" v-for="(type,i) in types" :key="i" @click="getType(type)">{{type}}</div>
            </div>
        </div>
        <div class="kinds">
            <div :class="{active: currentKind === kind}" v-for="(kind,i) in kinds" :key="i" @click="changeKind(kind)">{{kind}}</div>
        </div>
        <div class="good-card">
            <div @click="showDetail(item)" class="card-box" v-for="(item,idx) in ticketList" :key="item.id" v-if="pageDivision<idx&&idx<nowPage*pageSize">
                <div class="card-top">
                    <img :src="item.url" alt="">
                    <div class="card-right">
                        <div class="show-detail">【{{item.city}}站】{{item.detail}}</div>
                        <span v-if="item.onSale === 0" class="show-sale">未开售</span>
                        <span v-else class="show-sale" style="visibility: hidden;">未开售</span>
                        <div class="show-time">{{item.date}}</div>
                        <div class="show-address">{{item.address}}</div>
                    </div>
                    <div v-if="item.discount" class="show-discount">
                        <div>{{item.discount}}</div>
                        <span>折起</span>
                    </div>
                </div>
                <div class="card-bottom">
                    <div>
                        <i class="el-icon-view"></i>
                        <span>{{item.browser}}浏览</span>
                    </div>
                    <div>
                        <i class="el-icon-star-on"></i>
                        <span>{{item.like}}人喜欢</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-division">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :page-size="pageSize"
                    :total="ticketList.length"
                    @current-change="sizeChange"
                    :current-page="nowPage"
                    hide-on-single-page>
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                types: ["演唱会","话剧歌剧","本地生活","音乐会","儿童亲子","舞蹈芭蕾","休闲展览","曲艺杂谈","体育赛事"],
                currentType: "演唱会",
                cityArr: [],
                currentCity: "成都",
                dateType: ["全部","一周内","一月内","本周末"],
                currentDateType: "全部",
                kinds: ["近期热门","最近开场","折扣最优"],
                currentKind: "近期热门",
                ticketList: [],
                saveList: [],
                pageSize: 6,
                nowPage: 1
            }
        },
        computed:{
            pageDivision(){
                return this.pageSize * (this.nowPage-1) -1;
            }
        },
        created(){
            // 保存goodList
            this.ticketList = JSON.parse(sessionStorage.getItem("searchList"));
            this.saveList = this.ticketList;
            // 获取城市列表
            this.ticketList.forEach(item =>{
                if (!this.cityArr.includes(item.city)) {
                    this.cityArr.push(item.city);
                }
            });
            //this.changeCity(this.cityArr[0]);
        },
        methods:{
            // 按城市
            changeCity(v){
                let cityList = []
                this.currentCity = v;
                this.saveList.forEach(item => {
                    if (item.city === v) {
                        cityList.push(item);
                    }
                })
                this.ticketList = cityList;
            },
            // 按时间
            changeType(t){
                this.currentDateType = t;
                // 当前时间
                let now = new Date();
                let month = now.getMonth()+1;
                let dd = now.getDay();
                console.log(dd)
                switch (t) {
                    case "一周内":
                    case "一月内":
                    case "本周末":
                    default:
                        this.ticketList = this.saveList;

                }
                console.log(t)
            },
            // 按类型
            getType(item){
                this.currentType = item;
                switch (item) {
                    case "演唱会":
                        item = "vocalConcert";
                        break;
                    case "音乐会":
                        item = "concert";
                        break;
                    case "本地生活":
                        item = "nativeLife";
                        break;
                    case "儿童亲子":
                        item = "kids";
                        break;
                    case "舞蹈芭蕾":
                        item = "dancing";
                        break;
                    case "休闲展览":
                        item = "exhibition";
                        break;
                    case "曲艺杂谈":
                        item = "tittleTattle";
                        break;
                    case "体育赛事":
                        item = "sports";
                        break;
                    case "话剧歌剧":
                        item = "drama";
                        break;
                }
                let list = [];
                this.saveList.forEach(val => {
                    if (val.type === item) {
                        list.push(val);
                    }
                });
                this.ticketList = list;
            },
            // 近期热门 最近开场 折扣最优
            changeKind(k){
                this.changeCity(this.currentCity)
                this.currentKind = k;
                let dateArr = [];
                let now = new Date();
                switch (k) {
                    case "最近开场":
                        this.ticketList.forEach((item,idx) => {
                            let interval = Math.abs(now.getTime() - new Date(item.date.split("-")[0]).getTime());
                            console.log(interval)
                            dateArr.push({id:idx,interval});
                        });
                        dateArr.sort(this.dateSort);
                        let tempList = [];
                        for (let i = 0; i < dateArr.length; i++) {
                            tempList[i] = this.ticketList[dateArr[i].id]
                        }
                        this.ticketList = tempList;
                        break;
                    case "折扣最优":
                        let discountArr = [];
                        let tempArr = [];
                        this.ticketList.forEach((item,idx) => {
                            if (item.discount) {
                                discountArr.push({id:idx,discount:item.discount});
                            }else  {
                                tempArr.push(item);
                            }
                        });
                        let afterSort = discountArr.sort(this.discountSort);
                        for (let i = afterSort.length -1; i >= 0; i--) {
                            tempArr.unshift(this.ticketList[afterSort[i].id]);
                        }
                        this.ticketList = tempArr;
                        break;
                    case "近期热门":
                        this.ticketList = this.ticketList;
                        break;
                }
            },
            // 定义一个排序函数--最近开场（根据距离当前时间时间间隔进行排序）
            dateSort(a,b){
                return a.interval - b.interval;
            },
            // 定义一个排序函数--折扣最优（根据票折扣进行排序）
            discountSort(a,b){
                return a.discount - b.discount;
            },
            // 定义展示ticket详情
            showDetail(item){
                sessionStorage.setItem("ticketInfo",JSON.stringify(item));
                sessionStorage.setItem("detailPath",JSON.stringify({path:this.$route.path,name:this.$route.meta}))
                this.$router.push(`/ticketDetail/${item.id}`);
            },
            sizeChange(v){
                this.nowPage = v;
                console.log(v)
            }
        },
    }
</script>

<style scoped lang="less">
    .search-page{
        width: 100%;
        margin-top: 40px;
        /*分类*/
        .item-filter{
            box-sizing: border-box;
            width: 100%;
            border-radius: 10px;
            font-size: 14px;
            border: 1px solid #ededed;
            .filter-top{
                padding: 30px 0;
                display: flex;
                align-items: center;
                span{
                    display: block;
                    padding: 0 30px;
                }
                div{
                    cursor: pointer;
                    padding: 2px 25px;
                    &:hover{
                        color: lightseagreen;
                    }
                    &.active{
                        color: #fff;
                        background: lightcoral;
                        border-radius: 10px;
                    }
                }
            }
            .filter-bottom{
                padding: 30px 0;
                display: flex;
                align-items: center;
                span{
                    display: block;
                    padding: 0 30px;
                }
                div{
                    cursor: pointer;
                    padding: 2px 25px;
                    &:hover{
                        color: lightseagreen;
                    }
                    &.active{
                        color: #fff;
                        background: lightcoral;
                        border-radius: 10px;
                    }
                }
            }
        }
        /*近期热门，最近开场，折扣最优*/
        .kinds{
            width: 100%;
            border-radius: 10px;
            border: 1px solid #ededed;
            margin-top: 20px;
            display: flex;
            box-sizing: border-box;
            div{
                padding: 20px 30px;
                font-size: 14px;
                cursor: pointer;
                &.active{
                    color: lightseagreen;
                    font-weight: bold;
                }
                &:hover{
                    color: lightseagreen;
                }
            }
        }
        .good-card{
            width: 100%;
            margin-top: 40px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .card-box{
                box-sizing: border-box;
                width: 44%;
                box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
                margin: 30px 0 60px 30px;
                padding: 10px 20px;
                cursor: pointer;
                .card-top{
                    position: relative;
                    display: flex;
                    img{
                        position: relative;
                        top: -30px;
                        left: -50px;
                        width: 150px;
                        height: 210px;
                        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
                    }
                    .card-right{
                        margin-left: -20px;
                        .show-detail{
                            height: 46px;
                            margin-bottom: 20px;
                        }
                        .show-sale{
                            color: red;
                            border: 1px solid red;
                            font-size: 14px;
                            padding: 3px;
                        }
                        .show-time{
                            font-size: 12px;
                            color: #777777;
                            padding-top: 60px;
                        }
                        .show-address{
                            font-size: 12px;
                            color: #777777;

                        }
                    }
                    .show-discount{
                        position: absolute;
                        width: 35px;
                        height: 50px;
                        top: -30px;
                        left: -30px;
                        background-image: linear-gradient(#ff4655, #ff4287);
                        color: #fff;
                        text-align: center;
                        box-sizing: border-box;
                        overflow: hidden;
                        border-radius: 2px;
                        div{
                            font-size: 20px;
                        }
                        span{
                            font-size: 11px;
                            line-height: 20px;
                        }
                    }
                }
                .card-bottom{
                    width: 100%;
                    height: 20px;
                    border-top: 1px solid #ededed;;
                    display: flex;
                    align-items: center;
                    div{
                        color: #777;
                        font-size: 12px;
                        padding-top: 10px;
                        margin-right: 25px;
                        i{
                            font-size: 20px;
                            color: darkgoldenrod;
                            vertical-align: middle;
                        }
                        span{
                            padding: 0 10px;
                            line-height: 45px;
                        }
                    }
                }
            }
        }
        .page-division{
            width: 100%;
            padding: 30px 0;
            .el-pagination{
                display: flex;
                justify-content: center;
            }
        }
    }

</style>
