<template>
  <Loading :active="isLoading" :z-index="1060"></Loading>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-5 me-md-5">
          <img :src="product.imageUrl" class="rounded-3 img-fluid mb-3">
      </div>
      <div class="col-12 col-md-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">首頁</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/products">全部產品</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link :to="{
                name: 'products',
                query: { category: product.category , page: 1 }
              }">
                {{ product.category }}
              </router-link>
            </li>
            <li class="breadcrumb-item active">{{ product.title }}</li>
          </ol>
        </nav>
        <h2 class="my-3">{{ product.title }}</h2>
        <div class="h4 my-2 text-danger">NT${{ $filters.currency(product.price) }} 元
          <del class="h6 ms-2 text-gray">原價
            : {{ $filters.currency(product.origin_price) }} 元
          </del>
        </div>
        <hr>
        <div class="my-4 lh-lg">{{ product.content }}</div>
        <div class="my-4 lh-lg">{{ product.description }}</div>

          <div class="row">
            <div class="col-12 col-md-6 mb-3">
              <div class="qty-groups d-flex">
                <button class="qty-btn" type="button" @click="minsQty" :disabled="qty<=1">-</button>
                <input class="text-center qty-input" type="number" min="1" v-model="qty" @change="checkQty" />
                <button class="qty-btn" type="button" @click="addQty">+</button>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <button type="button" class="btn btn-outline-danger w-100" @click="addToCart(product.id, qty)">
                加到購物車
              </button>
            </div>
          </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row my-5 ">
          <h3 class="mb-5 text-center"> 加購其他產品</h3>
          <SwiperComp @emit-id="getProduct"></SwiperComp>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/eventBus'
import SwiperComp from '@/components/SwiperComp'
export default {
  data () {
    return {
      tempProducts: {},
      qty: 1,
      failQty: false,
      isLoading: false,
      product: {},
      id: '',
      prod: []

    }
  },
  components: {
    SwiperComp
  },
  inject: ['emitter'],
  methods: {
    addQty () {
      this.failQty = false
      this.qty += 1
    },
    minsQty () {
      this.qty -= 1
    },
    checkQty () {
      if (this.qty <= 1) {
        this.failQty = true
        this.qty = 1
      }
    },
    getProduct (id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.isLoading = true
      this.$http
        .get(api)
        .then((response) => {
          this.product = response.data.product
          this.isLoading = false
        })
    },
    getProdIdFromComp (id) {
      const loader = this.$loading.show()
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.id}`
        )
        .then((res) => {
          loader.hide()
          this.product = res.data.product
        })
        .catch((err) => {
          loader.hide()
          console.dir(err)
        })
    },
    addToCart (id, qty) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty
      }
      this.isLoading = true
      this.$http
        .post(url, {
          data: cart
        })
        .then((response) => {
          this.qty = 1
          emitter.emit('get-cart')
          this.isLoading = false
          this.$swal({
            title: '成功加入購物車',
            icon: 'success',
            confirmButtonColor: '#dc3545'
          })
        })
        .catch((error) => {
          this.isLoading = false
          this.$httpMessageState(error.response, '加入購物車')
        })
    }
  },
  watch: {
    // 監聽動態路由 id，重新取得產品頁面
    $route () {
      this.id = this.$route.params.productId
      if (this.id !== undefined) {
        this.getProduct()
      }
    }
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
  }
}

</script>
