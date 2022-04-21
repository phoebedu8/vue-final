<template>
  <nav class="navbar navbar-expand-lg navbar-light sticky-top sticky-md-top" >
    <div class="container-fluid " >
      <router-link to="/" class="navbar-brand logo-title"> <img style="width:150px;"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/xqrass-hexschool/1648890692897.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=KlZJiIkkzMqmBv60JVpt%2B0h%2FdJj8qmITNBwUQxpMmf%2BUhTFAdVyAfNQGpEg%2Bx5JN2xeCxCPN9fwrJWkyCLeU0CuQ%2F3SvZF9rvTaHOD9fyEMfdtMz61mvo%2BoBlBN8RnzkEV6hOqhzYVlstD1tnlexL6kZitv92WJoJkPhVvDZtdg5Gr72foTsnruJ2YQVRQjIi6gkBYIYNignqWNtftAmncBKRCccukxZPKQ7fayyfL8Tur19h8UhoDrRk6Ot4OrN%2BfDwfx7%2Fzsty2TublKnbUvC0CHjvnXwpvlKY8gPpBjAqPunGvF2AU%2BlCE5eOs5OZiXdWeo51gn27Z8WNVzlusQ%3D%3D"
          alt=""></router-link>
      <button ref="navbarBtn" class="hamburger-icon navbar-toggler border-0" type="button" @click="openNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" ref="navbarcollapse" id="navbarNavAltMarkup" :class="toggleNav ? 'show' : ''">
        <div class="navbar-nav d-flex align-items-center">
          <router-link to="/about" class="px-2 nav-text" @click="closeNav">品牌介紹</router-link>
          <span class="px-1 d-none d-lg-block nav-text-line">/</span>
          <router-link to="/products?category=all&page=1" class="px-2 nav-text" @click="closeNav">選購產品</router-link>
          <span class="px-1 d-none d-lg-block nav-text-line">/</span>
          <router-link to="/contact" class="px-2 nav-text" @click="closeNav">聯絡我們</router-link>
        </div>
      </div>
    </div>
  <div class="dropdown nav-cart cart-icon" v-if="showCart">
          <a class=" dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
            aria-expanded="false">
            <i class="bi bi-cart2 fs-3 text-black "></i>
            <span class="position-absolute top-30 start-40 translate-middle badge rounded-pill bg-danger fs-7">
              {{carts?.length}}
              <span class="visually-hidden">unread messages</span>
            </span>
          </a>
          <ul class="cart-dropdown-content dropdown-menu dropdown-menu-end px-2" aria-labelledby="navbarDarkDropdownMenuLink">
            <li
              v-if="carts.length <= 0"
              class="my-4 text-center">
              目前購物車沒有商品
            </li>
            <li
              v-for="item in carts"
              :key="item.id"
              v-else
              class="d-flex m-2 align-items-center position-relative border-bottom pb-2"
              >
                <img :src="item.product.imageUrl" alt="" style="width:80px">
                <div class="ms-2">
                  <p class="m-0">{{ item.product.title }}</p>
                  <p class="m-0">NT${{ item.product.price }}
                    <span class="card-text text-danger ms-1 fs-7">
                      <del class="text-danger ">NT${{ item.product.origin_price }}</del>
                    </span>
                  </p>
                  <input
                    class="w-50 text-center rounded border border-secondary"
                    type="number"
                    min="1"
                    v-model="item.qty"
                    @change="updateCart(item)"
                  />
                </div>
                <div class="position-absolute end-0">
                  <a
                    @click.prevent="removeCartItem(item.id)"
                    href="#"
                    class="btn btn-outline-danger btn-sm">
                    <i class="bi bi-x"></i>
                  </a>
                </div>
            </li>
            <div class="m-2">
              <a
                v-if="carts.length <= 0"
                @click.prevent="goToTarget('products')"
                href=""
                class="btn btn-outline-danger w-100">
                前往產品頁
              </a>
              <a
                v-else
                @click.prevent="goToTarget('cart')"
                href=""
                class=" btn btn-danger w-100">
                前往購物車
              </a>
            </div>
          </ul>
        </div>
  </nav>
</template>

<script>
import emitter from '@/methods/eventBus'

const showCartRoute = ['home', 'products', 'product', 'about', 'contact']

export default {
  props: {
    page: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      toggleNav: false,
      carts: [],
      products: [],
      product: {},
      status: {
        loadingItem: ''
      },
      cart: {},
      isLoading: false,
      coupon_code: '',
      showCart: true,
      favorite: JSON.parse(localStorage.getItem('favorite')) || []
    }
  },

  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.carts = response.data.data.carts
        this.isLoading = false
      }).catch((error) => {
        this.isLoading = false
        this.$httpMessageState(error.response, '錯誤訊息')
      })
    },
    removeCartItem (id) {
      this.status.loadingItem = id
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.isLoading = true
      this.$http.delete(url).then((response) => {
        emitter.emit('get-cart')
        this.$swal({
          title: '移除購物車品項',
          icon: 'success',
          confirmButtonColor: '#dc3545'
        })
        this.status.loadingItem = ''
        this.isLoading = false
        this.getCart()
      }).catch((error) => {
        this.isLoading = false
        this.$httpMessageState(error.response, '移除購物車品項')
      })
    },
    updateCart (data) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${data.id}`
      const cart = {
        product_id: data.product_id,
        qty: data.qty
      }
      this.$http.put(url, {
        data: cart
      }).then((response) => {
        this.$swal({
          title: '更新數量成功',
          icon: 'success',
          confirmButtonColor: '#dc3545'
        })
        this.isLoading = false
        this.getCart()
      }).catch((error) => {
        this.isLoading = false
        this.$httpMessageState(error.response, '更新購物車')
      })
    },
    goToTarget (page) {
      this.$router.push(`/${page}`)
    },
    openNav () {
      this.toggleNav = !this.toggleNav
      if (this.toggleNav) {
        this.toggleNav = true
      } else {
        this.closeNav()
      }
    },
    closeNav () {
      this.toggleNav = false
    }
  },
  watch: {
    page () {
      this.showCart = showCartRoute.includes(this.page) || this.page === ''
    }
  },
  created () {
    this.getCart()
    emitter.on('get-cart', () => {
      this.getCart()
    })
  }

}

</script>
