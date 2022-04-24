<template>
    <div class="footer container-fluid text-white">
        <div class="row py-4">
            <div class="col">
                <div class="text-center my-3">
                    <img class="footer-logo" src="@/assets/images/logo.png" alt="footer-logo">
                </div>
                <p class="text-center">本網站僅供個人作品使用，不提供商業用途
                    <span class="mx-2"> | </span>
                    <router-link to="/login" class="text-white">登入後台</router-link>
                </p>
                <p class="text-center fs-7">Copyright ©Cosmos All Rights Reserved. Designed by Phoebe Du</p>
                <div class="d-flex justify-content-center">
                    <a href="#" class="text-decoration-none text-white mx-2" target="_blank">
                        <i class="fs-3 bi bi-facebook"></i>
                    </a>
                    <a href="#" class="text-decoration-none text-white mx-2" target="_blank">
                        <i class="fs-3 bi bi-instagram"></i>
                    </a>
                    <a href="#" class="text-decoration-none text-white mx-2" target="_blank">
                        <i class="fs-3 bi bi-envelope"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
