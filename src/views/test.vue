<template>
    <div class="test">
      <div class="container">
          111
      </div>
    </div>
</template>

<script>
export default {
methods:{
    show(flag){
        document.querySelector("#gg").style.display = flag;
    }
}
}
</script>

<style scoped lang="less">
.test{
    width: 400px;
    height: 500px;
    background: lightpink;
    margin-top: 200px;
    .container{
        width: 60px;
        height: 60px;
        background: red;
    }
}
</style>
