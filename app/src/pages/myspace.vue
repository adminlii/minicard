<template>
<div class="article">
    <van-nav-bar 
        :title=pagetitle 
        left-text="返回"
        left-arrow
        @click-left="back"
        />



</div>

</template>
<script>
export default {
    data(){
        return{
            pagetitle:"个人中心"

        }
    },
    methods:{
        back:function(){
            this.$router.push("/home");
        }
    }
}
</script>
<style scoped>

</style>

