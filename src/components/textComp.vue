<template>
    <div :style="setStyle">
        {{ dataString }}
    </div>
</template>
<script>
export default {
    data(){
        return {
            dataString:JSON.parse(this.data).text
        }
    },
    props: {
        width:{
            type:[String,Number]
        },
        height:{
            type:[String,Number]
        },
        color:{
            type:[String,Number]
        },
        fontSize:{
            type:[String,Number]
        },
        data:{
            type:String,
        },
    },
    computed:{
        setStyle(){
            return {
                width:this.width + 'px',
                height:this.height + 'px',
                fontSize:this.fontSize + 'px',
                color:this.color
            }
        }
    }
}
</script>
<style scoped> 

</style>