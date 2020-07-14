<template>
    <div v-if="showFlag" class="login">
        <div class="login-wrapper">
            <div class="user">
                <input type="text" placeholder="用户名">
                <i class="el-icon-user"></i>
            </div>
            <div class="pwd">
                <input type="password" placeholder="密码">
                <i class="el-icon-lock"></i>
            </div>
            <button class="login-btn">立即登录</button>
            <div class="close-btn" @click="changeShowFlag">
                <i class="el-icon-close"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["showFlag"],
        methods:{
            changeShowFlag(){
                this.$emit("update:showFlag",false)
            }
        }
    }
</script>

<style scoped lang="less">
.login{
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.6);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    .login-wrapper{
        background: #fff;
        padding: 60px 40px 20px 30px;
        border-radius: 8px;
        position: relative;
        .user{
            margin-bottom: 20px;
            position: relative;
        }
        input{
            outline: none;
            width: 200px;
            height: 30px;
            padding-left: 20px;
            border: none;
            background: #f7f7f7;
            border-radius: 5px;

        }
        i{
            position: absolute;
            left: 0;
            top: 0;
            height: 34px;
            line-height: 34px;
        }
        .pwd{
            position: relative;
        }
        button{
            outline: none;
            width: 100%;
            border: none;
            margin: 20px 0;
            padding: 10px 0;
            background: lightpink;
            border-radius: 30px;
            cursor: pointer;
            font-size: 16px;
            color: #fff;
        }
        .close-btn{
            position: absolute;
            right: 28px;
            top: 0;
            i{
                color: red;
                font-size: 20px;
                font-weight: bolder;
                cursor: pointer;
            }
        }
    }
}
</style>
