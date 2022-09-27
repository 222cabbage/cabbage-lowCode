import TextComp from './textComp'

let obj = {
    TextComp
}
// info.type是组件的名称
let getComponent = (info) => {
    let component = obj[info.type]()
    component.info = info
    return component
}

export default getComponent