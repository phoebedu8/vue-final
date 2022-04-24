<template>
  <template>
    <div>
      <div class="container d-flex align-items-center justify-content-center bug-page">
        <div class="row">
          <div class="col-lg-8 col-xl-6 offset-lg-2 offset-xl-3">
            <div class="text-center">
              <img src="@/assets/images/404.png" alt="404" class="w-100" />
              <div class="">
                <div class="mb-5">
                  <h2 class="h5">找不到指定的頁面</h2>
                  <p>
                    感謝您使用Cosmos冰淇淋星球。
                    對不起，有您正在搜索的頁面嗎？
                    由於名稱變更，暫時無法使用。
                  </p>
                </div>
                <RouterLink to="/products" class="btn btn-danger">
                  返回頁面
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>
