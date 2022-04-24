<template>
  <Loading :active="isLoading" :z-index="1060"></Loading>
  <div class="container-fluid">
    <div class="row">
      <div class="product-img d-flex justify-content-center align-items-center"></div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2 class="text-center text-danger my-5">Cosmos 手工冰淇淋</h2>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <ul class="col-12 d-flex justify-content-center category mb-5">
        <li class="category-btn" :class="isActive === '' ? 'active' : '' " @click="getProducts('',1)">
          <router-link :to=" { query: { category: 'all', page: 1 } }">
            全部商品
          </router-link>
        </li>
        <li class="category-btn" :class="isActive === '甜筒' ? 'active' : '' " @click="getProducts('甜筒'),1">
          <router-link :to=" { query: { category: '甜筒', page: 1 } }">
            甜筒系列
          </router-link>
        </li>
        <li class="category-btn" :class="isActive === '冰沙' ? 'active' : '' " @click="getProducts('冰沙',1)">
          <router-link :to=" { query: { category: '冰沙', page: 1} }">
            冰沙系列
          </router-link>
        </li>
        <li class="category-btn" :class="isActive === '冰棒' ? 'active' : '' " @click="getProducts('冰棒',1)">
          <router-link :to=" { query: { category: '冰棒', page: 1 } }">
            冰棒系列
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  <div class="container">
    <div class="row row-cols-2 row-cols-sm-3 row-cols-lg-5 g-4 mb-13">
      <div class="col" v-for="item in products" :key="item.id">
        <div class="card">
          <router-link :to="`/product/${ item.id }`" class="card-img card-img-rotate">
            <img :src="item.imageUrl" class="card-img-top rounded-3" alt="item.title">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">NT${{ item.price }}
                <span class="card-text text-danger ms-2 fs-6">
                  <del class="text-danger ">NT${{ item.origin_price }}</del>
                </span>
              </p>
            </div>
          </router-link>
          <div class="product-btn-group">
            <button type="button" class="add-favorite btn btn-danger rounded-circle"
              @click="toggleFavorite(item.id)" v-if="favorite.includes(item.id)">
              <i class="bi bi-heart-fill"></i>
            </button>
            <button type="button" class="add-favorite btn btn-outline-danger rounded-circle"
              @click="toggleFavorite(item.id)" v-else>
              <i class="bi bi-heart"></i>
            </button>
            <button type="button" class="add-cart-btn btn btn-outline-danger" @click="addToCart(item.id)">
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-12 my-5">
        <PaginationView :pages="pagination"
          @emit-pages="getProducts(category, $event)">
        </PaginationView>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/eventBus'
import PaginationView from '@/components/PaginationView.vue'

export default {
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
      product: {},
      status: {
        loadingItem: ''
      },
      coupon_code: '',
      currentPage: 1,
      cart: {},
      isActive: '',
      category: '',
      favorite: JSON.parse(localStorage.getItem('favorite')) || []
    }
  },
  inject: ['emitter'],
  components: {
    PaginationView
  },
  methods: {
    getProducts (category, page = 1) {
      this.isLoading = true
      this.currentPage = page
      this.isActive = ''
      this.category = category
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`
      if (category) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?category=${category}&page=${page}`
        this.isActive = category
      }
      this.$http.get(api).then((response) => {
        this.products = response.data.products
        this.pagination = response.data.pagination
        this.isLoading = false
      }).catch((error) => {
        this.isLoading = false
        this.$httpMessageState(error.response, '錯誤訊息')
      })
    },
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    },
    addToCart (id, qty = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty
      }
      this.$http.post(url, {
        data: cart
      }).then((response) => {
        emitter.emit('get-cart')
        this.isLoading = false
        this.$swal({
          title: '成功加入購物車',
          icon: 'success',
          confirmButtonColor: '#dc3545'
        })
        // this.getCart()
      }).catch((error) => {
        this.isLoading = false
        this.$httpMessageState(error.response, '錯誤訊息')
      })
    },
    toggleFavorite (id) {
      emitter.emit('get-favorite')
      console.log(id)
      const favoriteIndex = this.favorite.findIndex(item => item === id)
      if (favoriteIndex === -1) {
        this.favorite.push(id)
      } else {
        this.favorite.splice(favoriteIndex, 1)
      }
      console.log(this.favorite)
    }
  },
  watch: {
    favorite: {
      handler () {
        localStorage.setItem('favorite', JSON.stringify(this.favorite))
      },
      deep: true
    }
  },
  mounted () {
    this.getProducts()
  }
}

</script>
