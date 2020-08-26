import {VIEW_BAR} from '../types/home'
const initialState = {
    show:true
}
export default (state=initialState, {type, payload}) => {
    switch (type) {
        case VIEW_BAR:
           return payload
        default:
            return state
    }
}