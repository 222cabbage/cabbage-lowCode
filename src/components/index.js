import TextComp from "./textComp.vue";

let obj = {
    TextComp
}

function install(vue){
    Object.keys(obj).forEach(key => {
        vue.component(key,obj[key])
    })
}

let API = {
    version:'1.0',
    install
}

export default API