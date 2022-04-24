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
            <div class="d-flex align-items-center justify-content-center circle rounded-circle mb-2"> 2 </div>
            <p>填寫資訊</p>
          </li>
          <li class="d-flex flex-column align-items-center">
            <div class="d-flex align-items-center justify-content-center circle rounded-circle mb-2"> 3 </div>
            <p>確認訂單</p>
          </li>
          <li class="d-flex flex-column align-items-center">
            <div class="d-flex align-items-center justify-content-center circle rounded-circle mb-2 circle-active"> 4
            </div>
            <p class="process">完成購物</p>
          </li>
        </ul>
        <div class="line position-absolute"></div>
      </div>
    </div>
    <div class="container rounded my-5">
      <div class="row cart-title-bar mx-1 mx-md-0 cart-title d-flex align-items-center justify-content-center rounded-top">
        <div class="col d-flex align-items-center justify-content-center text-white">STEP 4 : 完成購物</div>
      </div>
      <div class="row mx-1 py-3 mx-md-0 border">
        <div class="col-12 text-center my-5 ">完成訂單，感謝您的購買</div>
        <div class="col-12 text-center mb-5">
          <router-link to="/">
            <div class="w-25 btn btn-outline-secondary mx-1" type="button">回到首頁</div>
          </router-link>
          <router-link to="/products">
            <div class="w-25 btn btn-outline-danger mx-1" type="button">繼續購物</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
