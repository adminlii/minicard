<template>
    <div class="login">
        <h2>正阳堂微名片系统</h2>
        <h3>登录</h3>
        <div class="card-main">
            <van-field
                v-model="logininfo.username"
                required
                clearable
                label="手机号"
                placeholder="请输入登录手机号"
            />
            <van-field
                v-model="logininfo.password"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
                autocomplete="new-password" 
            />  
            <p class="tiptext"><router-link to="/register">没有账号？去注册</router-link></p>
            <van-button type="primary" size="large" class="loginbtn" @click="loginfun">登录</van-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            logininfo:{
                username:"",
                password:""
            },
        }
    },
    methods:{
        loginfun:function(){
            if(this.logininfo.username==""||this.logininfo.password==""){
                this.$toast("请您输入账号密码后登录");
                return;
            }
            if(!(/^1[345678]\d{9}$/.test(this.logininfo.username))){ 
                this.$toast("手机号码有误，请重填");  
                return false; 
            } 
         this.$toast.loading({forbidClick: true});
            this.$axios({
                url:"/api/user/userlogin",
                method:"POST",
                data:this.logininfo
            }).then((res)=>{
                this.$toast.clear();
                if(res.data.code==0){
                    this.$toast(res.data.msg)
                }else if(res.data.code==100){
                    var loginstate={
                        state:1,
                        user:this.logininfo.username
                    }
                    this.$cookie.setCookie('loginstate', JSON.stringify(loginstate),this.$store.state.cookieouttime);
                    this.$toast.success(res.data.msg);
                    if(this.$route.query.user!=undefined){
                        this.$router.push({path:"/page",query:{user:this.$route.query.user}});
                    }else if(this.$route.query.articleid!=undefined){
                        this.$router.push({path:"/article",query:{article:this.$route.query.articleid}});
                    }else if(this.$route.query.path!=undefined&&this.$route.query.path!="/"){
                        this.$router.push(this.$route.query.path);
                    }else{
                        this.$router.push({path:"/home",query:{change:true}});
                    }
                }
            },(res)=>{
                this.$toast.clear();
                this.$toast("系统错误,请您稍后重试")
            })
            }
    },
    mounted:function(){
        var loginstate=JSON.parse(this.$cookie.getCookie('loginstate'));
        if(loginstate!=null&&loginstate.state==1){
            this.$router.push({path:"/home"});
        }
    }
}
</script>

<style>
.login h2{
    font-size: 1.5em;
    line-height:5em;
    text-align: center;
    font-weight: normal;
}
.card-main{
    padding: 1rem;
}
.loginbtn{
    display: block;
    margin: 1em auto;
}
.tiptext{
    text-align: right;
}
.tiptext a{
    font-size: 12px;
    color:#666;
}
.login h3{
    text-align: center;
    line-height: 3em;
}
</style>