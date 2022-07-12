import Vue from 'vue'
import Vuex from "vuex";
import axios from "axios";
import { routes } from './routes';
import VueAxios from "vue-axios";
Vue.use(Vuex);

let authAxios;

function Auth(token) {
    authAxios = axios.create({
        baseURL: 'api',
        headers: {
            Authorization: `Bearer ` + token,
        }
    })
}



export default new Vuex.Store({
    state: {
        user: '',
        chats: '',
        generated_names: ''
    },
    getters: {
        getChats(state) {
            return state.chats
        },

        getGenName(state) {
            return state.generated_names
        }
    },
    actions: {
        getChats(ctx, data) {
            Auth(data.token)
            authAxios.get('workspace')
                .then((res) => {
                    console.log(res.data.data)
                    ctx.commit('chatMut', res.data.data)
                })
        },

        storeChats(ctx, data) {
            Auth(data.token)
            authAxios.post('workspace/store', data)
                .then((res) => {
                    if (res.data.data.generated) {
                        ctx.commit('setGenName', res.data.data.generated)
                    } else {
                        console.log(res.data.data)
                        ctx.commit('storeChats', res.data.data)
                        ctx.commit('destroyGenName')


                    }


                })
        },

        destroyChat(ctx, data) {
            Auth(data.token)
            authAxios.delete('workspace/destroy/' + data.id)
                .then((res) => {

                    ctx.commit('destroyChat', data.id)
                })
        },

        logout(ctx, token) {
            Auth(token)
            authAxios.post('auth/logout')
                .then((res) => {
                    localStorage.removeItem('user_token');
                })
        }



    },
    mutations: {
        destroyChat(state, data) {
            // let dat = state.chats
            // for (let i = 0; i < dat.length; i++) {
            //     if (dat[i].id == data) {
            //         dat.splice(dat[i], 1)
            //     }
            // }

            var index = state.chats.findIndex(c => c.id == data);
            state.chats.splice(index, 1);

            console.log(data)
        },

        chatMut(state, data) {
            state.chats = data
        },

        storeChats(state, data) {
            state.chats.push(data)
        },

        setGenName(state, data) {
            state.generated_names = data
        },

        destroyGenName(state) {
            state.generated_names = null
        }
    }
})