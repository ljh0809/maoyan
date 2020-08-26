import {VIEW_BAR} from '../types/home'

export const showBottom= (data) => {
    return {
        type: VIEW_BAR,
        payload: data
    }
}

