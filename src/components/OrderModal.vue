<template>
  <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>訂單細節</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12">
              <h3>用戶資料</h3>
              <table class="table">
                <tbody v-if="tempOrder.user">
                  <tr>
                    <th style="width: 100px">姓名</th>
                    <input
                      type="text"
                      class="form-control rounded-0"
                      id="name"
                      placeholder="姓名"
                      v-model="tempOrder.user.name"
                    />
                  </tr>
                  <tr>
                    <th>Email</th>
                    <input
                      type="text"
                      class="form-control rounded-0"
                      id="email"
                      placeholder="Email"
                      v-model="tempOrder.user.email"
                    />
                  </tr>
                  <tr>
                    <th>電話</th>
                    <input
                      type="number"
                      class="form-control rounded-0"
                      id="tel"
                      placeholder="電話"
                      v-model.number="tempOrder.user.tel"
                    />
                  </tr>
                  <tr>
                    <th>地址</th>
                    <input
                      type="text"
                      class="form-control rounded-0"
                      id="address"
                      placeholder="地址"
                      v-model="tempOrder.user.address"
                    />
                  </tr>
                  <tr>
                    <th>留言</th>
                    <input
                      type="text"
                      class="form-control rounded-0"
                      id="address"
                      placeholder="留言"
                      v-model="tempOrder.message"
                    />
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-12">
              <h3>訂單細節</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <th style="width: 100px">訂單編號</th>
                    <td>{{ tempOrder.id }}</td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td>{{ $filters.date(tempOrder.create_at) }}</td>
                  </tr>
                  <tr>
                    <th>付款時間</th>
                    <td>
                      <span v-if="tempOrder.paid_date">
                        {{ $filters.date(tempOrder.paid_date) }}
                      </span>
                      <span v-else>時間不正確</span>
                    </td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <strong v-if="tempOrder.is_paid" class="text-success">已付款</strong>
                      <span v-else class="text-muted">尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <td>
                      {{ $filters.currency(tempOrder.total) }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>選購商品</h3>
              <table class="table">
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr v-for="item in tempOrder.products" :key="item.id">
                    <th>
                      {{ item.product.title }}
                    </th>
                    <td>{{ item.qty }} / {{ item.product.unit }}</td>
                    <td class="text-end">
                      {{ $filters.currency(item.final_total) }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-end">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                    v-model="tempOrder.is_paid" />
                  <label class="form-check-label" for="flexCheckDefault">
                    <span v-if="tempOrder.is_paid">已付款</span>
                    <span v-else>未付款</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <!-- @click="$emit('update-paid', tempOrder)" -->
          <button type="button" class="btn btn-primary" @click="$emit('update-paid', tempOrder)">
            修改付款狀態
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import modalMixin from '@/mixins/modalMixin'

export default {
  props: {
    order: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      status: {},
      modal: '',
      tempOrder: {},
      isPaid: false
    }
  },
  emits: ['update-paid'],
  mixins: [modalMixin],
  inject: ['emitter'],
  watch: {
    order () {
      this.tempOrder = this.order
    }
  }
}

</script>
