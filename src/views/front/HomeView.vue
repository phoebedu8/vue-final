<template>
  <div class="container-fluid kv position-relative" style="background-color: #FF909F; border-top:1px solid #fff;">
    <div class="row py-4 d-flex justify-content-center align-items-center">
      <div
        class="col-12 col-lg-7 d-flex justify-content-center text-center text-lg-start my-3 pb-lg-5 order-2 order-lg-1">
        <div class="pb-0 pb-lg-5">
          <h1 class="text-white kv-title01">Cosmos</h1>
          <h3 class="text-white kv-title02">手工冰淇淋專賣店</h3>
          <p style="color: #FFDD9B;" class="kv-title03">超高人氣 の 草莓甜筒冰淇淋</p>
          <router-link to="/products" class="px-2"><a style="background-color: #FFDD9B; padding: 10px 70px;"
              class="rounded-pill">More</a></router-link>
        </div>
      </div>
      <div class="col-12 col-lg-5 text-center text-lg-start mt-lg-2 mt-0 order-1 order-lg-2"><img class="kv01"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/xqrass-hexschool/1648915463286.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=VF3jYZ%2BSY9ULp%2Bc%2FfC3aFJv9NWMzwB4VTzpub6NyY6Y%2FTJlBeSvD87f9V9gb4eNj%2FmIbYSiDcJLAtIN%2FVvpxl548%2B8gt7rdNbtJq7RRFvKx7w1FMBjxVwWH3AnV1As%2BtZ5UoXzXp4ac1GqfdwYcB0a9Flw6pvn5xc%2BZP%2FHUR%2FapGRLOnSJZhic%2BEA0P55yLWqKVasErg710C1xazkygp0CiX5r54imasy%2BuUPBvMW42ArM5gE0Jux9y9JoXNgEZFsaPF%2FX6%2FTWb56gb1oN05%2BmHFZMTwZZCyCmGdBxUjjhlO%2BzGUAcJWiwvsdEzJwjEsXqwAW%2F4NZl21UTrnd9XCMA%3D%3D"
          alt=""></div>
    </div>
    <div class="kv-bar">
      <img class="kv-bar-img"
        src="https://storage.googleapis.com/vue-course-api.appspot.com/xqrass-hexschool/1648977118539.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hTdRI%2FWags0A8EUunVDFZbM9v%2B2Rp18r53GGuVATnVsSc%2BS1%2FZjYg4941E1YCHl%2B4qEQ89aU79GjJDSlVemMmVFMcsSLliTlPo2dBWGbYPauZO3xhC%2BHH%2FGTAvOpQbeTqK5%2BLEtc%2BqAeqydpoMmoSv%2FDGB9Md6CRTljgU6L6olq6bTgZx4fTF5xUuiqriirjeGp5IYaMYWwwRz1LSX1pRis3ymk1QEO%2BFjSGO5Yij0sHRbGdZrK4%2BLJUaAYeg7Ywz2S8FHqMfrOb6sQO8l6RLVuX4PHVZ3Ahug4EVAB9MLAwU8PXbsPb5rxQ8E%2FdFYV2jh8evrli5%2BMfVq0ukVmnnA%3D%3D"
        alt="">
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2 class="text-center text-danger my-5">探索熱銷系列商品</h2>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-4 ">
        <img class="img-fluid mb-4 mb-md-0 mx-auto d-block" src="@/assets/images/series-icecream.png" alt="">
      </div>
      <div class="col-12 col-md-4">
        <img class="img-fluid mb-4 mb-md-0 mx-auto d-block" src="@/assets/images/series-popsicle.png" alt="">
      </div>
      <div class="col-12 col-md-4">
        <img class="img-fluid mb-4 mb-md-0 mx-auto d-block" src="@/assets/images/series-smoothie.png" alt="">
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
                <div class="series-change-img series-change-img01 mx-1 mx-md-auto"></div>
                <div class="series-change-img series-change-img02 mx-1 mx-md-auto"></div>
                <div class="series-change-img series-change-img03 mx-1 mx-md-auto"></div>
              </div>
              <div class="col-12 col-md-8 align-self-center order-1 order-md-2">
                <div class="series-main-img mx-auto mt-4 mt-md-0"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-6 my-5 px-4 align-self-center">
          <h2 class="title">甜筒系列</h2>
          <h3 class="sub-title">IceCreamCone Series</h3>
          <hr class="series-line">
          <p class="content-text">夏冰淇淋愛好者們都將 Cosmos 冰淇淋視為好吃無負擔的甜點~
          Cosmos 冰淇淋始終堅守品質至上的信念，讓消費者吃得開心也吃得安心！</p>
          <button type="button" class="btn btn-outline-danger rounded-pill">More</button>
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
        <div class="col-12 col-sm-12 col-md-6 my-5 order-2 order-md-1 px-4 align-self-center">
          <h2 class="title">冰棒系列</h2>
          <h3 class="sub-title">Popsicle Serie</h3>
          <hr class="series-line">
          <p class="content-text">炎炎夏日來一支清爽可口的 Cosmos 冰棒~入口清涼消暑意～濃郁淳香滋味美～開懷共享好時光！Cosmos 的好滋味給您更多種選擇！</p>
          <button type="button" class="btn btn-outline-danger rounded-pill">More</button>
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
        <div class="col-12 col-sm-12 col-md-6 my-5 px-4 align-self-center">
          <h2 class="title">冰沙系列</h2>
          <h3 class="sub-title">Smoothie Serie</h3>
          <hr class="series-line">
          <p class="content-text">選用台灣農產水果製成的冰沙~甜度＆酸度絕對是台灣首屈一指！甜甜的好滋味，讓你如同孩童般嘴饞想一吃再吃~</p>
          <button type="button" class="btn btn-outline-danger rounded-pill">More</button>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="container">
    <div class="row">
      <div class="col">
        <h2 class="text-center text-danger my-5">好評推薦</h2>
      </div>
    </div>
  </div> -->
  <div class="container my-5 px-4">
    <h2 class="text-center text-danger mb-4">關於品牌</h2>
    <div class="row d-flex justify-content-around px-2">
      <div class="col-lg-5 d-flex justify-content-center">
        <img src="@/assets/images/me.png" class="w-75 rounded-pill" alt="">
      </div>
      <div class="col-lg-6 d-flex align-items-center ps-4">
        <p class="lh-lg text-secondary">
          冰淇淋星球的創始者是一位愛吃冰淇淋的女孩-菲比(Phoebe Du)，
          懷抱著對冰淇淋的熱愛，製作出營養兼美味無負擔的冰淇淋，
          為了與更多人分享這份獨特的冰淇淋，菲比於2022年在網路架設門市，
          分享給更多廣大愛好冰淇淋的顧客。
        </p>
      </div>
    </div>
  </div>
    <div class="container my-5 px-4">
    <h2 class="text-center text-danger mb-4">聯絡我們</h2>
    <div class="row d-flex justify-content-around px-2">
      <div class="col-lg-5 d-flex justify-content-center">
        <img src="@/assets/images/contact.png" class="w-75 rounded-pill" alt="">
      </div>
      <div class="col-lg-6 d-flex align-items-center ps-4">
        <ul class="list-unstyled text-secondary">
          <li class="lh-lg"> 客服電話：(02)-888-3030 </li>
          <li class="lh-lg"> 客服信箱：cosmos@service.com </li>
          <li class="lh-lg"> 客服時間：週一至週五：10:00 am - 20:30 pm </li>
          <li class="lh-lg"> Instgram：@cosmos_tw </li>
          <li class="lh-lg"> Facebook：cosmos_tw </li>
          <li class="lh-lg">
            <a href="#" class="text-decoration-none text-danger mx-1" target="_blank">
              <i class="fs-3 bi bi-facebook"></i>
            </a>
            <a href="#" class="text-decoration-none text-danger mx-1" target="_blank">
              <i class="fs-3 bi bi-instagram"></i>
            </a>
            <a href="#" class="text-decoration-none text-danger mx-1" target="_blank">
              <i class="fs-3 bi bi-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
