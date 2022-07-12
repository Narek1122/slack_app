export const getUserToken = {
    install(Vue, options) {
        Vue.prototype.getUserToken = () => {
            let token = localStorage.getItem('user_token');
            if (token) {
                return token;
            }

            return null;
        }
    },
};