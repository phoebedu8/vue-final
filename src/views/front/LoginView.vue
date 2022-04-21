<template>
  <div class="container-fluid" style="background-color: #FDB0BA;">
    <form class="row justify-content-center align-items-center" style="height: 100vh;" @submit.prevent="signIn">
      <div class="col-10 col-md-4  bg-white p-5 shadow bg-body rounded-3">
        <div class="text-center">
          <img class="" style="width:120px;" src="https://storage.googleapis.com/vue-course-api.appspot.com/xqrass-hexschool/1648890160308.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pCQefMHT9AdcorsMUlIU%2Fs4GksMaxx5cASOi9ji4%2B%2BAIY8UW2pyHXWzHpzw%2FsBqPJ8DyjYGjPjM3uYUu9x5Y%2BIVBVcrNmexM32vs9hWnU1dRjDleEJ3ulULZj6n8%2Froo6jUXFQD5%2BDNMCutwqkiYtKCO0ky%2BAm6wxGO%2B0RxEckFn0YNPm11iOmkDwr3Qtukngb05qEt%2FxaJE4yZtRX8wGRQw3cO6f9ePtqTmQdH%2FRUM5AGeN5l%2BrchcZwZmXen7SuPAJiLrB4mH41Et6WMwsBs3lgOwwuUjDCx4qMiGe7hSjhbZzgiJIswoUjutdoRNfnTG29Alqnhr0yhgTTZOV7Q%3D%3D" alt="">
        </div>
        <h1 class="h3 m-3 mb-4 font-weight-normal text-center">後台管理系統</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only mb-2">Email address</label>
          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="user.username"
            required autofocus />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only mb-2">Password</label>
          <input type="password" id="inputPassword" class="form-control" v-model="user.password" placeholder="Password"
            required />
        </div>
        <div class="text-end mt-4 ">
          <button class="btn btn-md btn-danger btn-block" type="submit">
            登入
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

export default {

  data () {
    return {
      isLoading: false,
      user: {}
    }
  },

  methods: {
    signIn () {
      const api = `${process.env.VUE_APP_API}/admin/signin`
      this.isLoading = true
      this.$http
        .post(api, this.user)
        .then((response) => {
          const { token, expired } = response.data
          document.cookie = `hexToken=${token};expires=${new Date(expired)};`
          this.isLoading = false
          this.$router.push('/admin')
          this.$swal({
            title: '登入成功',
            icon: 'success',
            confirmButtonColor: '#dc3545'
          })
        })
        .catch(() => {
          this.isLoading = false
          this.$swal({
            title: '登入失敗，請重新登入',
            icon: 'error',
            confirmButtonColor: '#dc3545'
          })
        })
    }
  }
}
</script>
