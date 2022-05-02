<template>
<div class="container">
    <div class="row">
      <div class="col" v-for="item in tempProducts" :key="item.id">
      <div class="text-center">
        <router-link
          :to="`/product/${item.id}`"
          class="sushiBtn btn"
          style="width: -webkit-fill-available"
          @click.prevent="emitProdId(item.id)"
        >
          <img
            :src="item.imageUrl"
            :alt="item.title"
            class="w-100 rounded-3"
          />
          <h5 class="sushiTitle text-truncate w-100 mt-3 mx-auto">
            {{ item.title }}
          </h5>
          <div class="h5 my-2 text-danger">NT${{ $filters.currency(item.price) }} 元
          <div><del class="h6 ms-auto text-gray">原價
            : {{ $filters.currency(item.origin_price) }} 元
          </del>
          </div>
        </div>
        </router-link>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tempProducts: {}
    }
  },

  methods: {
    getProducts () {
      this.$http
        .get(
            `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
        )
        .then((res) => {
          this.tempProducts = res.data.products
          // 隨機亂數排列
          this.tempProducts.sort(() => {
            return 0.6 - Math.random()
          })
          this.tempProducts = this.tempProducts.slice(0, 6)
        })
        .catch((err) => {
          console.dir(err)
        })
    },
    emitProdId (id) {
      this.$emit('emit-id', id)
    }
  },
  mounted () {
    this.getProducts()
  }
}

</script>
