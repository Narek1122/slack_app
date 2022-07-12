<template>
    <div class="">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse">
                <div class="navbar-nav" >
                    <router-link to="/login" class="nav-item nav-link" v-if="!getUserToken()">Login</router-link >
                    <router-link to="/sign_up" class="nav-item nav-link" v-if="!getUserToken()">Sign Up</router-link>
                    <button v-else class="btn" v-on:click="logout">Logout</button>
                </div>
            </div>
        </nav>
        <br/>

        <router-view class="container"></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: ''
            }
        },
        methods: {
            logout(){
                this.$store.dispatch('logout', this.getUserToken())
                 this.$router.push({name: "home"})
            }
        },
    }
</script>
