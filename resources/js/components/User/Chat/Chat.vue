<template>
  <li class="clearfix">
        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar">
        <div class="about">
        <div class="name">{{ data.name }}</div>
        <div class="status">
            <button class="btn btn-sm" v-on:click="destroyChat(data.id)">
                Delete
            </button>
        </div>
        </div>
  </li>

</template>
<script>
export default {
  name: "Chat",
  data() {
    return {
      dat:{

      },
      error:''
    }
  },
   props: {
    data: {
      type: Object, default: () => {
      }
    }
  },
  mounted() {

  },
  methods:{
    destroyChat(id){
        let data = {
                    token: this.getUserToken(),
                    id
                    }
            this.$store.dispatch('destroyChat', data)
    }
  }
}
</script>


