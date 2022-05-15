<template>
  <div class="home">
    <div class="my-swipe">
      <div class="welcome">
        <h3>秒杀进行时</h3>
        <p>
          此系统为尊敬的客户提供三湘银行存款秒杀产品，用户登录后即可参与活动，机不可失失不再来！
        </p>
      </div>
      <home-image-swipe :swiperImages="swiperImages" />
    </div>
    <home-current-products :currentProducts="currentProducts" />
    <home-future-products :futureProducts="futureProducts" />
    <home-announcements :announcements="announcements" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "vuex"
import HomeImageSwipe from "./cpns/home-image-swipe.vue"
import HomeCurrentProducts from "./cpns/home-current-products.vue"
import HomeFutureProducts from "./cpns/home-future-products.vue"
import HomeAnnouncements from "./cpns/home-announcements.vue"

export default defineComponent({
  components: {
    HomeImageSwipe,
    HomeCurrentProducts,
    HomeFutureProducts,
    HomeAnnouncements
  },
  setup() {
    const store = useStore()

    store.dispatch("home/getSwipeImagesAction")
    store.dispatch("home/getCurrentProductsAction")
    store.dispatch("home/getFutureProductsAction")
    store.dispatch("home/getAnnouncementsActions")

    const swiperImages = computed(() => store.state.home.swiperImages)
    const currentProducts = computed(() => store.state.home.currentProducts)
    const futureProducts = computed(() => store.state.home.futureProducts)
    const announcements = computed(() => store.state.home.announcements)

    return {
      swiperImages,
      currentProducts,
      futureProducts,
      announcements
    }
  }
})
</script>

<style lang="less" scoped>
.home {
  .my-swipe {
    position: relative;
    height: 14.359rem;
    .welcome {
      position: absolute;
      top: 1rem;
      right: 0.7692rem;
      width: 5.3846rem;
      text-align: right;
      color: #fff;
      z-index: 1;
      h3 {
        position: relative;
        font-size: 0.6667rem;
        font-weight: 600;
        margin-bottom: 0.7692rem;
        &::after {
          position: absolute;
          right: 0;
          bottom: -0.4103rem;
          content: "";
          width: 3.5897rem;
          border-bottom: 1px solid #fff;
        }
      }
      p {
        font-size: 0.4103rem;
      }
    }
  }
}
</style>
