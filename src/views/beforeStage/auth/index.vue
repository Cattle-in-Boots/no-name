<template>
    <div>
        AUTH
    </div>
</template>
<script>
    import sAuth from "./../../../services/authService.js";
    export default{
        data(){
            sAuth.checkLogin();
        },
        methods:{

        }
    }
</script>
<style>
    @import "./../../../assets/sass/base.scss";
</style>