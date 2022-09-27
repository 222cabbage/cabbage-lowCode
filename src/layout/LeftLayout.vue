<template>
    <div class="wrapper">
        <div>常用控件</div>
        <div class="menuItem" 
            :data-type="item.type"
            :data-name="item.name"
            draggable="true" 
            v-for="(item,index) in menus" 
            :key="index"
            @dragstart="dragStart">
            {{ item.name }}
        </div>
    </div>
</template>
<script>
import LeftMenuList from './LeftMenuList.js'
export default {
    data(){
        return {
            menus:LeftMenuList
        }
    },
    methods:{
        dragStart(e){
            let info = {
                type:e.target.getAttribute('data-type'),
                name:e.target.getAttribute('data-name')
            }
            e.dataTransfer.setData('info',JSON.stringify(info))
        }
    }
}
</script>
<style lang="less" scoped>
.wrapper {
    box-sizing: border-box;
    position: relative;
    width: 300px;
    height: calc(100vh - 60px);
    background-color: rgb(235, 235, 235);
    padding: 9px;
    .menuItem {
        background-color: white;
        width: 130px;
        height: 50px;
        float: left;
        margin: 5px;
        text-align: center;
        line-height: 50px;
        cursor: pointer;
    }
}
</style>