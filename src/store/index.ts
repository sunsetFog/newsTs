import { createStore } from 'vuex'

import apple from './modular/apple'
import menu from './modular/menu'

export default createStore({
    modules: {
        apple,
        menu
    }
})
