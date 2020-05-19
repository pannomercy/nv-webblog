import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
//  มันยัด ไฟล์ที่สร้าง vuex ไว้ในนี้เป็นหน้าเดียวกัน แต่ของ udemy Stephen เขาจะแยกไฟล์ state getters actions mutations ไว้ต่างหาก แล้วจะมาใส่ในไฟล์ center ที่ชื่อ index.js  โดยไฟล์ index.js(ไม่ใช้ routes นะ) จะคล้ายกับไฟล์นี้ store.js มีการเรียกใช้ vuex แต่ใน export default จะเป็น modules: {ใส่ไฟล์ vuex.js ในนี้แทน}
export default new Vuex.Store({
    strict: true,
    plugins: [
        createPersistedState()
    ],
    state: {
        token: null,
        user: null,
        isUserLoggedIn: false
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            state.isUserLoggedIn = !!(token)
        },
        setUser(state, user) {
            state.user=user
        }
    },
    actions: {
        setToken({commit}, token) {
            commit('setToken', token)
        },
        setUser({commit}, user) {
            commit('setUser', user)
        }
    }
})
