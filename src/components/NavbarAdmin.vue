<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <div class="d-flax algin-items-center">
        <router-link to="/admin" class="navbar-brand logo-title"><img src="@/assets/images/logo.png" alt="nav-logo"></router-link>
      </div>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNavAltMarkup" >
        <div class="navbar-nav d-flex position-relative w-100">
          <router-link to="/admin" class="nav-link">產品管理</router-link>
          <router-link to="/admin/orders" class="nav-link ">訂單管理</router-link>
          <router-link to="/admin/coupons" class="nav-link">優惠券管理</router-link>
          <button @click.prevent="logout" class="btn btn-outline-danger me-2 end-0 logout" type="button">登出</button>
        </div>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  inject: ['emitter'],
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}/logout`
      this.$http.post(api)
        .then((response) => {
          if (response.data.success) {
            this.$router.push('/login')
          }
        })
    }
  }
}

</script>
