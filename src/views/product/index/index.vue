<template>
    <div>
        <header>
            首页{{greeting}}{{count}}
        </header>
        <section>
            <cInput></cInput>
        </section>
        <footer>
            <cNavBar></cNavBar>
        </footer>
    </div>
</template>
<script>
    //组件
    import cNavBar from "./../../../components/navBar.vue";
    import cInput from "./components/input/index.vue";
    export default {
        data(){
            return {
                greeting:"test"
            }
        },
        components:{
            cNavBar,
            cInput
        },
        vuex:{
            getters:{
                testText:state => state.activeNote.text
            }
        }
    }
</script>
<style lang="sass" scope>

</style>