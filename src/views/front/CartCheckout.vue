<template>
  <Loading :active="isLoading" :z-index="1060"></Loading>
  <div class="main">
    <div class="container-fluid">
      <div class="row">
        <div class="cart-img d-flex justify-content-center"></div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row mx-1 mx-md-0 shopping-process position-relative d-flex justify-content-center align-items-center">
        <ul class="d-flex justify-content-between w-md-75 w-100 w-lg-50 mx-auto ">
          <li class="d-flex flex-column align-items-center">
            <div class="d-flex align-items-center justify-content-center circle rounded-circle mb-2">
              1 </div>
            <p>購物車</p>
          </li>
          <li class="d-flex flex-column align-items-center">
            <div class="d-flex align-items-center justify-content-center circle rounded-circle mb-2"> 2 </div>
            <p>填寫資訊</p>
          </li>
          <li class="d-flex flex-column align-items-center">
            <div class="d-flex align-items-center justify-content-center circle rounded-circle mb-2 circle-active"> 3
            </div>
            <p class="process">確認訂單</p>
          </li>
          <li class="d-flex flex-column align-items-center">
            <div class="d-flex align-items-center justify-content-center circle rounded-circle mb-2"> 4 </div>
            <p>完成購物</p>
          </li>
        </ul>
        <div class="line position-absolute"></div>
      </div>
    </div>
    <div class="container rounded my-5">
      <div class="row mx-1 mx-md-0 cart-title-bar cart-title d-flex align-items-center justify-content-center rounded-top">
        <div class="col d-flex align-items-center justify-content-center text-white">STEP 3 : 確認訂單</div>
      </div>
      <div class="row mx-1 mx-md-0 py-3 justify-content-center align-items-top border" @click.prevent="payOrder">
        <div class="col-12 col-md-6">
          <table class="table align-middle">
            <thead>
              <th class="cart-table-img">產品</th>
              <th>品名</th>
              <th>數量</th>
              <th class="text-end">價錢</th>
            </thead>
            <tbody class="border-top">
              <tr v-for="item in order.products" :key="item.id">
                <td><img :src="item.product.imageUrl" alt="item.title" class="picture"></td>
                <td>{{ item.product.title }}</td>
                <td>{{ item.qty }}/{{ item.product.unit }}</td>
                <td class="text-end">NT${{ item.final_total }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-end"></td>
                <td class="text-end">總計 : NT${{ order.total }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="col-12 col-md-6">
          <table class="table ">
            <thead>
              <th>購買者資訊</th>
            </thead>
            <tbody class="border-top">
              <tr>
                <th width="100">Email</th>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <th>姓名</th>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <th>收件人電話</th>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <th>收件人地址</th>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr>
                <th>付款狀態</th>
                <td>
                  <span v-if="!order.is_paid">尚未付款</span>
                  <span v-else class="text-success">付款完成</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-12">
          <div class="text-end" v-if="order.is_paid === false">
            <button type="button" class="btn btn-danger" @click="payOrder">確認付款</button>
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
      order: {
        user: {}
      },
      orderId: '',
      isLoading: false
    }
  },
  inject: ['emitter'],
  methods: {
    getOrder () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.isLoading = true
      this.$http
        .get(url)
        .then((response) => {
          this.order = response.data.order
          this.isLoading = false
        })
        .catch((error) => {
          this.isLoading = false
          this.$httpMessageState(error.response, '錯誤訊息')
        })
    },
    payOrder () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.isLoading = true
      this.$http
        .post(url)
        .then((response) => {
          emitter.emit('get-cart')
          this.$router.push(`/final/${this.orderId}`)
          this.isLoading = false
        })
        .catch((error) => {
          this.isLoading = false
          this.$httpMessageState(error.response, '錯誤訊息')
        })
    }
  },
  mounted () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}

</script>
