<template>
  <Loading :active="isLoading" :z-index="1060"></Loading>
  <div class="main">
    <div class="container-fluid">
      <div class="row">
        <div class="cart-img d-flex justify-content-center"></div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row shopping-process position-relative d-flex justify-content-center align-items-center">
        <ul class="d-flex justify-content-around w-md-75 w-100 w-lg-50 mx-auto ">
          <li class="d-flex flex-column align-items-center">
            <div class="d-flex align-items-center justify-content-center circle rounded-circle mb-2">
              1 </div>
            <p>購物車</p>
          </li>
          <li class="d-flex flex-column align-items-center">
            <div class="d-flex align-items-center justify-content-center circle rounded-circle mb-2 circle-active"> 2
            </div>
            <p style="color:#e25c5c;">填寫資訊</p>
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
    <div class="container rounded my-5">
      <div class="row cart-title d-flex align-items-center justify-content-center rounded-top" style="height:40px;">
        <div class="col d-flex align-items-center justify-content-center text-white">STEP 2 : 填寫資訊</div>
      </div>
      <div class="row py-3 justify-content-center border d-none d-md-block">
        <Form ref="form" v-slot="{ errors }" @submit="createOrder">
          <div class="row">
            <div class="col-6">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <Field id="email" name="email" type="email" class="form-control"
                  :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required"
                  v-model="form.user.email">
                </Field>
                <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
              </div>
            </div>
            <div class="col-6">
              <div class="mb-3">
                <label for="name" class="form-label">收件人姓名</label>
                <Field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
                  placeholder="請輸入姓名" rules="required" v-model="form.user.name">
                </Field>
                <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="mb-3">
                <label for="tel" class="form-label">收件人手機</label>
                <Field id="tel" name="電話" type="tel" class="form-control" :class="{ 'is-invalid': errors['電話']}"
                  oninput="value=value.replace(/[^\d]/g,'')" placeholder="請輸入手機" :rules="isPhone"
                  v-model="form.user.tel">
                </Field>
                <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
              </div>
            </div>
            <div class="col-6">
              <div class="mb-3">
                <label for="address" class="form-label">收件人地址</label>
                <Field id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
                  placeholder="請輸入地址" rules="required" v-model="form.user.address">
                </Field>
                <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="mb-3">
                <label for="message" class="form-label">留言</label>
                <textarea name="" id="message" class="form-control" cols="30" rows="10" v-model="form.message">
          </textarea>
              </div>
            </div>

          </div>
          <div class="row">
            <div class="text-end">
              <button class="btn btn-danger" type="submit">送出訂單</button>
            </div>
          </div>
        </Form>
      </div>
      <div class="row py-3 justify-content-center border d-block d-md-none">
        <Form ref="form" class="col-md-6" v-slot="{ errors }" @submit="createOrder">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <Field id="email" name="email" type="email" class="form-control" :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email" rules="email|required" v-model="form.user.email">
            </Field>
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名</label>
            <Field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名" rules="required" v-model="form.user.name">
            </Field>
            <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="tel" class="form-label">收件人手機</label>
            <Field id="tel" name="電話" type="tel" class="form-control" :class="{ 'is-invalid': errors['電話']}"
              oninput="value=value.replace(/[^\d]/g,'')" placeholder="請輸入手機" :rules="isPhone" v-model="form.user.tel">
            </Field>
            <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <Field id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址" rules="required" v-model="form.user.address">
            </Field>
            <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea name="" id="message" class="form-control" cols="30" rows="10" v-model="form.message">
          </textarea>
          </div>
          <div class="text-end">
            <button class="btn btn-danger" type="submit">送出訂單</button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      isLoading: false
    }
  },
  methods: {
    createOrder () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http
        .post(url, {
          data: order
        })
        .then((response) => {
          this.$swal({
            title: '填寫資料成功',
            icon: 'success',
            confirmButtonColor: '#dc3545'
          })
          this.$router.push(`/checkout/${response.data.orderId}`)
          this.$refs.form.resetForm()
          this.isLoading = false
        })
        .catch((error) => {
          this.isLoading = false
          this.$httpMessageState(error.response, '建立訂單')
        })
    },
    // 手機驗證
    isPhone (value) {
      const phoneNumber = /0?[789](?:\d{8}|\d{9})$/
      return phoneNumber.test(value) ? true : '請輸入正確手機號碼'
    }
  }
}

</script>
