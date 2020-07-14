<template>
    <div class="dancing">
        <common-model :good-list="danceList"></common-model>
    </div>
</template>

<script>
    import commonModel from "../../components/commonModel"
    export default {
        data(){
            return{
                danceList: [
                    {id:0,url: "https://img0.tking.cn/mtl/default/img/zTmcHXHCd5_.jpg",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.06.03-2020.11.20",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都"},
                    {id:1,url: "https://img0.tking.cn/mtl/default/img/7CRRma2SXP_.jpg",detail: "仙玉《忘情歌》2020 Live",onSale: 1,date:"2020.05.03-2020.06.20",address:"猛追湾游泳馆",browser:14323,like:803,city:"广州"},
                    {id:2,url: "https://img0.tking.cn/mtl/default/img/Q5ZntxZABQ_.jpg",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.05.30-2020.07.10",address:"猛追湾游泳馆",browser:14323,like:803,city:"北京"},
                    {id:3,url: "https://img0.tking.cn/mtl/default/img/PFiTaQjFGz_.jpg",detail: "仙玉《忘情歌》2020 Live",onSale: 1,date:"2020.06.12-2020.11.20",address:"猛追湾游泳馆",browser:14323,like:803,city:"成都"},
                    {id:4,url: "https://img0.tking.cn/mtl/default/img/weDJyjGR2N_.jpg",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.06.01-2020.08.20",address:"猛追湾游泳馆",browser:14323,like:803,city:"杭州"},
                    {id:5,url: "https://img0.tking.cn/mtl/default/img/jhAjxnEMsd_.jpg",detail: "仙玉《忘情歌》2020 Live",onSale: 1,date:"2020.07.03-2020.09.20",address:"猛追湾游泳馆",browser:14323,like:803,city:"杭州"},
                    {id:6,url: "https://img0.tking.cn/mtl/default/img/zTmcHXHCd5_.jpg",detail: "仙玉《忘情歌》2020 Live",onSale: 0,date:"2020.07.12-2020.09.10",address:"猛追湾游泳馆",browser:14323,like:803,city:"贵阳"}
                ]
            }
        },
        components:{commonModel}
    }
</script>

<style scoped>

</style>