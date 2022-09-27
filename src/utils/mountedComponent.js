import Vue from 'vue'
export function mountedComponent(component){
    let data = {}
    let componentWidth = 0
    let componentHeight = 0
    if(component.attribute){
        component.attribute.forEach(item => {
            data[item.key] = item.value
            if(item.key === 'width'){
                componentWidth = item.value
            }
            if(item.key === 'height'){
                componentHeight = item.value
            }
        })
    }
    let id = component.info.id
    setTimeout(() => {
        new Vue({
            el:document.getElementById(id),
            template:component.template,
            name:id.toString(),
            data(){
                return data
            },
            mounted(){
                console.log(component.position)
                this.$el.id = id
                this.$el.style.position = 'absolute'
                this.$el.style.cursor = 'pointer'
                this.$el.style.left = `${component.position.left}px`
                this.$el.style.top = `${component.position.top}px`
                this.$el.style.zIndex = component.position.zIndex
                this.$el.style.width = `${componentWidth}px`
                this.$el.style.height = `${componentHeight}px`
            }
        })
        console.log('1232')
    }, 500);
}