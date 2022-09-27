//处理传递的属性
export function getAttrs(attrs){
    // attrs是一个数组
    let attrStr = ''

    attrs.forEach(item=>{
        attrStr += item.key + '=' + item.value + '  '
    })

    return attrStr
}