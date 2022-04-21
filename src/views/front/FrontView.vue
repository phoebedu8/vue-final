<template>
  <NavbarUser :page='page'></NavbarUser>
  <ToastMessages/>
  <router-view/>
  <FooterView/>
</template>

<script>
import emitter from '@/methods/eventBus'
import ToastMessages from '@/components/ToastMessages.vue'
import NavbarUser from '@/components/NavbarUser.vue'
import FooterView from '@/components/FooterView.vue'

export default {
  data () {
    return {
      status: false,
      page: ''
    }
  },
  provide () {
    return {
      emitter
    }
  },
  components: {
    NavbarUser,
    ToastMessages,
    FooterView
  },
  // updated () {
  //   this.page = this.$route.name
  // },
  mounted () {
    this.page = this.$route.name
  }

}
</script>
