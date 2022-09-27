import { getAttrs } from '../utils/getAttrs'

let handle = () => {
    let attribute = [{
        key:'width',
        name:'宽度',
        value:'100',
        type:'input',
        placeholder:'清输入宽度'
    },{
        key:'height',
        name:'高度',
        value:'50',
        type:'input',
        placeholder:'清输入高度'
    },{
        key:'fontSize',
        name:'字体大小',
        value:'16',
        type:'input',
        placeholder:'清输入字体大小'
    },{
        key:'color',
        name:'文本颜色',
        value:'black',
        type:'color',
        placeholder:'清设置文本颜色'
    }]
    let data = {
        text:'文本控件'
    }
    let template = `<TextComp ${getAttrs(attribute)} data='${JSON.stringify(data)}'></TextComp>`
    return {attribute,data,template}
}

export default handle