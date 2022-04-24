<template>
  <div class="container-fluid kv position-relative">
    <div class="row py-4 d-flex justify-content-center align-items-center">
      <div class="col-12 col-md-6 d-flex justify-content-center text-center text-lg-start my-3 order-2 order-lg-1">
        <div class="pb-0">
          <h1 class="text-white kv-title-main">Cosmos</h1>
          <h3 class="text-white kv-title-sub">手工冰淇淋專賣店</h3>
          <p class="kv-title-text">超高人氣 の 草莓甜筒冰淇淋</p>
          <router-link to="/products" class="px-2">
            <a class="rounded-pill kv-btn">More</a>
          </router-link>
        </div>
      </div>
      <div class="col-12 col-md-4 text-center order-1 order-lg-2 ">
        <img class="img-fluid main-kv" src="@/assets/images/kv01.png" alt="main-kv">
      </div>
      <div class="col-12 col-md-2 text-center order-1 order-lg-2 d-none d-md-block">
        <img class="img-fluid kv-group" src="@/assets/images/kv-group.png" alt="kv-group">
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row justify-content-center">
      <h2 class="text-center text-danger my-5">探索熱銷系列商品</h2>
      <div class="col-12 col-md-4 ">
        <img class="img-fluid mb-4 mb-md-0 mx-auto d-block" src="@/assets/images/series-icecream.png" alt="series-icecream">
      </div>
      <div class="col-12 col-md-4">
        <img class="img-fluid mb-4 mb-md-0 mx-auto d-block" src="@/assets/images/series-popsicle.png" alt="series-popsicle">
      </div>
      <div class="col-12 col-md-4">
        <img class="img-fluid mb-4 mb-md-0 mx-auto d-block" src="@/assets/images/series-smoothie.png" alt="series-smoothie">
      </div>
    </div>
  </div>
  <!-- 甜筒系列 -->
  <div class="series-group series-icecream">
    <div class="container-fluid ">
      <div class="row series-icecream-bg mt-5"></div>
    </div>
    <div class="container">
      <div class="row series-content py-2 mx-2 mx-md-0">
        <div class="series-bg"></div>
        <div class="col-12 col-sm-12 col-md-6">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-md-4 d-flex d-md-block justify-content-center order-2 order-md-1">
                <div class="series-change-img series-change-img01 mx-md-auto"></div>
                <div class="series-change-img series-change-img02 mx-md-auto"></div>
                <div class="series-change-img series-change-img03 mx-md-auto"></div>
              </div>
              <div class="col-12 col-md-8 align-self-center order-1 order-md-2">
                <div class="series-main-img mx-auto mt-4 mt-md-0"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-6 my-4 px-4 align-self-center">
          <h2 class="title">甜筒系列</h2>
          <h3 class="sub-title">IceCreamCone Series</h3>
          <hr class="series-line">
          <p class="content-text">夏冰淇淋愛好者們都將冰淇淋視為好吃無負擔的甜點~
            Cosmos 冰淇淋始終堅守品質至上的信念，讓消費者吃得開心也吃得安心！</p>
          <router-link class="btn btn-outline-danger rounded-pill" to="/products">
            More
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- 冰棒系列 -->
  <div class="series-group series-popsicle">
    <div class="container-fluid ">
      <div class="row series-popsicle-bg mt-5"></div>
    </div>
    <div class="container">
      <div class="row series-content py-2 mx-2 mx-md-0">
        <div class="series-reverse-bg"></div>
        <div class="col-12 col-sm-12 col-md-6 my-4 order-2 order-md-1 px-4 align-self-center">
          <h2 class="title">冰棒系列</h2>
          <h3 class="sub-title">Popsicle Serie</h3>
          <hr class="series-line">
          <p class="content-text">炎炎夏日來一支清爽可口的 Cosmos 冰棒~入口清涼消暑意～濃郁淳香滋味美～開懷共享好時光！Cosmos 的好滋味給您更多種選擇！</p>
          <router-link class="btn btn-outline-danger rounded-pill" to="/products">
            More
          </router-link>
        </div>
        <div class="col-12 col-sm-12 col-md-6 order-1 order-md-2">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-md-8 justify-content-center align-self-center order-1 order-md-1">
                <div class="series-main-img mx-auto mt-4 mt-md-0"></div>
              </div>
              <div class="col-12 col-md-4 d-flex d-md-block justify-content-center order-2 order-md-2">
                <div class="series-change-img series-change-img01 mx-auto"></div>
                <div class="series-change-img series-change-img02 mx-auto"></div>
                <div class="series-change-img series-change-img03 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 冰沙系列 -->
  <div class="series-group series-smoothie">
    <div class="container-fluid ">
      <div class="row series-smoothie-bg mt-5"></div>
    </div>
    <div class="container">
      <div class="row series-content py-2 mx-2 mx-md-0">
        <div class="series-bg"></div>
        <div class="col-12 col-sm-12 col-md-6">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-md-4 d-flex d-md-block justify-content-center order-2 order-md-1">
                <div class="series-change-img series-change-img01 mx-auto"></div>
                <div class="series-change-img series-change-img02 mx-auto"></div>
                <div class="series-change-img series-change-img03 mx-auto"></div>
              </div>
              <div class="col-12 col-md-8 align-self-center order-1 order-md-2">
                <div class="series-main-img mx-auto mt-4 mt-md-0"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-6 my-4 px-4 align-self-center">
          <h2 class="title">冰沙系列</h2>
          <h3 class="sub-title">Smoothie Serie</h3>
          <hr class="series-line">
          <p class="content-text">選用台灣農產水果製成的冰沙~甜度＆酸度絕對是台灣首屈一指！甜甜的好滋味，讓你如同孩童般嘴饞想一吃再吃，美味無窮得好選擇~</p>
          <router-link class="btn btn-outline-danger rounded-pill" to="/products">
            More
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="container my-5 px-4">
    <h2 class="text-center text-danger mb-4">關於品牌</h2>
    <div class="row d-flex justify-content-around px-2">
      <div class="col-md-4 d-flex justify-content-center mb-5 mb-md-0">
        <img src="@/assets/images/me.png" class="me rounded-pill" alt="brand-img">
      </div>
      <div class="col-md-8 d-flex align-items-center ps-4">
        <p class="lh-lg text-secondary">
          冰淇淋星球的創始者是一位愛吃冰淇淋的女孩-菲比(Phoebe Du)，
          懷抱著對冰淇淋的熱愛，製作出營養兼美味無負擔的冰淇淋，
          為了與更多人分享這份獨特的冰淇淋，菲比於2022年在網路架設門市，
          分享給更多廣大愛好冰淇淋的顧客。
        </p>
      </div>
    </div>
  </div>

</template>
