<template>
    <div class="wrapper"
    @dragover="dragOver"
    @drop="drop"
    @click="selectComp">
        <div
        v-for="(item,index) in pageComponents"
        :id="item.info.id"
        :key="index">
        </div>
        <div class="borderStyle" v-if="currentComp" :style="setBorderStyle"></div>
    </div>
</template>
<script>
import { genId } from '../utils/genId'
import getComponent from '@/templates';
import { mountedComponent } from '@/utils/mountedComponent'
export default {
    data(){
        return {
            //承载画布上的组件
            pageComponents:[],
            componentZindex:0,
            currentComp:null
        }
    },
    computed:{
        setBorderStyle(){
            let comWidth = 0
            let comHeight = 0
            if(this.currentComp){
                this.currentComp.attribute.forEach(item=>{
                    if(item.key === 'width')[
                        comWidth = item.value
                    ]
                    if(item.key === 'height')[
                        comHeight = item.value
                    ]
                })
                return {
                    width:`${comWidth}px`,
                    height:`${comHeight}px`,
                    left:`${this.currentComp.position.left}px`,
                    top:`${this.currentComp.position.top}px`,
                    zIndex:`${this.currentComp.position.zIndex}`
                }
            }else{
                return {}
            }
        }
    },
    methods: {
        // 拖拽移动回调
        dragOver(e){
            e.preventDefault();
        },
        // 拖拽松开回调
        drop(e){
            e.preventDefault();
            let info = JSON.parse(e.dataTransfer.getData('info'))//获取拖拽的组件传递信息，type与name
            info.id = genId()//为每个控件设置唯一id
            let component = getComponent(info) //控件相关属性，模板，获得组件
            this.componentZindex++
            //设置组件位置，将拖拽的组件放入pageComponents中
            // 获取组件宽高
            let componentWidth = 0
            let componentHeight = 0
            component.attribute.forEach(item => {
                if(item.key === 'width'){
                    componentWidth = item.value
                }
                if(item.key === 'height'){
                    componentHeight = item.value
                }
            })
            let left = e.offsetX - componentWidth / 2
            let top = e.offsetY - componentHeight / 2
            if(left < 0){
                left = 0
            }
            if(top < 0){
                left = 0
            }
            component.position = {left,top,zIndex:this.componentZindex}
            this.pageComponents.push(component)
            console.log(this.pageComponents[0])
            mountedComponent(component)
        },
        selectComp(e){
            let reg = /\w{8}-\w{4}/;
            let node = e.target
            let count = 0
            while(node && !reg.test(node.id)){
                count++
                if(count > 20){
                    return //避免死循环
                }
                node = node.parentNode
            }
            if(node && node.id){
                this.currentComp = this.pageComponents.find(item=>{
                    if(item.info.id === node.id){
                        return item
                    }
                })
            }else{
                this.currentComp = null
            }
            console.log('2',this.currentComp)
        }
    }
}
</script>
<style lang="less" scoped>
.wrapper {
    box-sizing: border-box;
    position: relative;
    flex: 1;
    height: calc(100vh - 60px);
    .borderStyle {
        border:  2px solid blue;
        position: absolute;
    }
}

</style>