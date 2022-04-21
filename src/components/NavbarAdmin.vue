<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #FDB0BA;">
    <div class="container-fluid">
      <div class="d-flax algin-items-center">
        <router-link to="/admin" class="navbar-brand logo-title"><img style="width:100px;" src="https://storage.googleapis.com/vue-course-api.appspot.com/xqrass-hexschool/1648890692897.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=KlZJiIkkzMqmBv60JVpt%2B0h%2FdJj8qmITNBwUQxpMmf%2BUhTFAdVyAfNQGpEg%2Bx5JN2xeCxCPN9fwrJWkyCLeU0CuQ%2F3SvZF9rvTaHOD9fyEMfdtMz61mvo%2BoBlBN8RnzkEV6hOqhzYVlstD1tnlexL6kZitv92WJoJkPhVvDZtdg5Gr72foTsnruJ2YQVRQjIi6gkBYIYNignqWNtftAmncBKRCccukxZPKQ7fayyfL8Tur19h8UhoDrRk6Ot4OrN%2BfDwfx7%2Fzsty2TublKnbUvC0CHjvnXwpvlKY8gPpBjAqPunGvF2AU%2BlCE5eOs5OZiXdWeo51gn27Z8WNVzlusQ%3D%3D" alt=""></router-link>
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
<style>
  .navbar-light .navbar-brand {
    color: #a82d2d;
  }
  @media (min-width: 768px) {
    .logout{
      position: absolute;
    }
}
</style>

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
