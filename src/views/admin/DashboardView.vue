<template>
  <Navbar/>
  <div class="container-fluid mt-3 position-relative">
    <ToastMessages/>
    <router-view v-if="status"/>
  </div>
</template>

<script>
import emitter from '@/methods/eventBus'
import ToastMessages from '@/components/ToastMessages.vue'
import Navbar from '@/components/NavbarAdmin.vue'

export default {
  components: {
    Navbar,
    ToastMessages
  },
  data () {
    return {
      status: false
    }
  },
  provide () {
    return {
      emitter
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = `${token}`
    const api = `${process.env.VUE_APP_API}/api/user/check`
    this.$http.post(api)
      .then((response) => {
        this.status = true
      }).catch(() => {
        this.$router.push('/login')
      })
  }
}
</script>
