//状态管理
let initState = {
    toggle: false,
}
export function counter(state=initState, action) {
    let stateCopy = {...state}
    switch (action.type) {
        case toggle:
            stateCopy.toggle
            ? stateCopy.toggle=false
            : stateCopy.toggle=true;
            return stateCopy;
        default:
            //初始状态
            return stateCopy;
    }
}

//action creator 创建action
export function toggle() {
    return {type:toggle}
}