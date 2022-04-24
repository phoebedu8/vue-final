<template>
  <Loading :active="isLoading" :z-index="1060"></Loading>
  <div class="main">
    <div class="container-fluid">
      <div class="row">
        <div class="cart-img d-flex justify-content-center"></div>
      </div>
    </div>
    <div class="container pt-5">
      <div class="row shopping-process position-relative d-flex justify-content-center align-items-center">
        <ul class="d-flex justify-content-around w-100 mx-auto ">
          <li class="d-flex flex-column align-items-center">
            <div class="d-flex align-items-center justify-content-center circle rounded-circle mb-2 circle-active">
              1 </div>
            <p class="process">購物車</p>
          </li>
          <li class="d-flex flex-column align-items-center">
            <div class="d-flex align-items-center justify-content-center circle rounded-circle mb-2"> 2 </div>
            <p>填寫資訊</p>
          </li>
          <li class="d-flex flex-column align-items-center">
            <div class="d-flex align-items-center justify-content-center circle rounded-circle mb-2"> 3 </div>
            <p>確認訂單</p>
          </li>
          <li class="d-flex flex-column align-items-center">
            <div class="d-flex align-items-center justify-content-center circle rounded-circle mb-2"> 4 </div>
            <p>完成購物</p>
          </li>
        </ul>
        <div class="line position-absolute"></div>
      </div>
    </div>
    <div class="container rounded my-5 ">
      <div class="row cart-title-bar cart-title d-flex align-items-center justify-content-center rounded-top">
        <div class="col d-flex align-items-center justify-content-center text-white">STEP 1 : 購物車</div>
      </div>
      <!-- 購物車列表 -->
      <div class="row py-3 justify-content-center border">
        <div class="my-5" v-if="cart.carts.length<=0">
          <p class="text-center mb-4">請加入產品</p>
          <div class="d-flex align-items-center justify-content-center">
            <router-link to="/products">
              <div class="btn btn-outline-danger" type="button"> 返回繼續購物</div>
            </router-link>
          </div>
        </div>
        <div v-else>
          <!-- 購物車列表桌面 -->
          <div class="w-100 d-none d-md-block">
            <div class="container">
              <div class="row border-bottom">
                <div class="col-1 fw-bolder text-center">取消</div>
                <div class="col-2 fw-bolder text-center">產品</div>
                <div class="col fw-bolder">品名</div>
                <div class="col fw-bolder">單價</div>
                <div class="col-3 fw-bolder">數量</div>
                <div class="col fw-bolder text-end">總價</div>
              </div>
              <template v-for="item in cart.carts" :key="item.id">
                <div class="row align-items-center border-bottom">
                  <div class="col-1 text-center">
                    <button type="button" class="mb-2 btn btn-outline-danger btn-sm"
                      :disabled="status.loadingItem === item.id" @click="removeCartItem(item.id)">
                      <i class="bi bi-x"></i>
                    </button>
                  </div>
                  <div class="col-2">
                    <img :src="item.product.imageUrl" alt="item.title" class="img-fluid text-center">
                  </div>
                  <div class="col align-items-center">
                    <div class="mb-2">{{ item.product.title }}</div>
                  </div>
                  <div class="col">
                    NT${{ item.product.price }}
                  </div>
                  <div class="col-3">
                    <input class="w-75 text-center" type="number" min="1" v-model.number="item.qty"
                      @change="updateCart(item)" />
                  </div>
                  <div class="col text-end">
                    <small v-if="cart.final_total !== cart.total" class="text-success">折扣價：</small>
                    NT {{ $filters.currency(item.final_total) }}
                  </div>
                </div>
              </template>
              <div class="row border-bottom">
                <div class="input-group my-3">
                  <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼" />
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                      套用優惠碼
                    </button>
                  </div>
                </div>
              </div>
              <div class="row border-bottom">
                <div class="col-4 my-3">
                  <a class=" w-100 text-secondary" @click.prevent="deleteAllCarts">
                    <i class="bi bi-trash"></i>
                    清空購物車
                  </a>
                </div>
                <div class="col-8 my-3 text-end">
                  <div>
                    <span v-if="cart.final_total !== cart.total" class="text-success text-end">折扣價：</span>
                    <span v-else> 總價: </span>
                    NT {{ $filters.currency(cart.final_total) }}
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-3 my-3 align-self-center">
                  <router-link to="/products" class="text-secondary">
                    <i class="bi bi-chevron-left"></i>
                    返回繼續購物
                  </router-link>
                </div>
                <div class="col-3 my-3 ms-auto align-self-center">
                  <router-link to="/cartInfo" class="btn btn-danger w-100" type="button">
                  前往結帳
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- 購物車列表手機 -->
          <div class="cart d-block d-md-none">
            <template v-for="item in cart.carts" :key="item.id">
              <div class="row align-items-center">
                <div class="col-4">
                  <img :src="item.product.imageUrl" alt="item.title" class="img-fluid">
                </div>
                <div class="col-8 d-flex align-self-center">
                  <div>
                    <div class="mb-2">{{ item.product.title }}</div>
                    <div class="mb-2 d-flex input-group input-group-sm">
                      <input class="w-75 text-center" type="number" min="1" v-model.number="item.qty"
                        @change="updateCart(item)" />
                    </div>
                  </div>
                  <div class="text-end w-50 align-self-center">
                    <div class="mb-2 "> NT${{ item.product.price }} </div>
                    <button type="button" class="mb-2 btn btn-outline-danger btn-sm"
                      :disabled="status.loadingItem === item.id" @click="removeCartItem(item.id)">
                      <i class="bi bi-x"></i>
                    </button>
                  </div>
                </div>
              </div>
              <hr>
            </template>
            <div class="row">
              <div class="input-group">
                <input type="text" class="form-control mb-3" v-model="coupon_code" placeholder="請輸入優惠碼" />
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                    套用優惠碼
                  </button>
                </div>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col-4">
                <a class=" w-100 text-secondary" @click.prevent="deleteAllCarts">
                  <i class="bi bi-trash"></i>
                  清空購物車
                </a>
              </div>
              <div class="col-8 text-end">
                <div>
                  <span v-if="cart.final_total !== cart.total" class="text-success text-end">折扣價：</span>
                  <span v-else> 總價: </span>
                  NT {{ $filters.currency(cart.final_total) }}
                </div>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-5 align-self-center">
                <router-link to="/products">
                  <div class="text-secondary">
                    <i class="bi bi-chevron-left"></i>
                    返回繼續購物
                  </div>
                </router-link>
              </div>
              <div class="col-7 align-self-center">
                <router-link to="/cartInfo" class="btn btn-danger w-100" type="button">前往結帳</router-link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/eventBus'
export default {
  data () {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: ''
      },
      cart: [],
      isLoading: false,
      coupon_code: '',
      qty: ''
    }
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http
        .get(url)
        .then((response) => {
          this.cart = response.data.data
          this.isLoading = false
        })
        .catch((error) => {
          this.isLoading = false
          this.$httpMessageState(error.response, '錯誤訊息')
        })
    },
    removeCartItem (id) {
      this.status.loadingItem = id
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.isLoading = true
      this.$http
        .delete(url)
        .then((response) => {
          emitter.emit('get-cart')
          this.$swal({
            title: '移除購物車品項',
            icon: 'success',
            confirmButtonColor: '#dc3545'
          })
          this.status.loadingItem = ''
          this.isLoading = false
          this.getCart()
        })
        .catch((error) => {
          this.isLoading = false
          this.$httpMessageState(error.response, '移除購物車品項失敗')
        })
    },
    deleteAllCarts () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`
      this.$http
        .delete(url)
        .then((response) => {
          emitter.emit('get-cart')
          this.$swal({
            title: '移除所有品項',
            icon: 'success',
            confirmButtonColor: '#dc3545'
          })
          this.getCart()
          this.isLoading = false
        })
        .catch((error) => {
          this.isLoading = false
          this.$httpMessageState(error.response, '移除所有品項失敗')
        })
    },
    updateCart (data) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${data.id}`
      const cart = {
        product_id: data.product_id,
        qty: data.qty
      }
      this.$http
        .put(url, {
          data: cart
        })
        .then((response) => {
          this.$swal({
            title: '更新數量成功',
            icon: 'success',
            confirmButtonColor: '#dc3545'
          })
          this.isLoading = false
          this.getCart()
        })
        .catch((error) => {
          this.isLoading = false
          this.$httpMessageState(error.response, '更新數量失敗')
        })
    },
    addCouponCode () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.coupon_code
      }
      this.isLoading = true
      this.$http
        .post(url, {
          data: coupon
        })
        .then((response) => {
          this.$swal({
            title: '加入優惠券成功',
            icon: 'success',
            confirmButtonColor: '#dc3545'
          })
          this.getCart()
          this.isLoading = false
        })
        .catch((error) => {
          this.isLoading = false
          this.$httpMessageState(error.response, '加入優惠券失敗')
        })
    }
  },
  created () {
    this.getCart()
  }
}

</script>
