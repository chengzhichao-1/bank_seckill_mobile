<template>
  <div class="home-image-swipe">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item class="item" v-for="image in swiperImages" :key="image">
        <!-- <img :src="image.imageUrl" :alt="image.id" /> -->
        <div
          class="img"
          :style="{
            backgroundImage: `url(${image.imageUrl})`,
            backgroundPosition: '85% 0%',
            backgroundSize: '200% 100%'
          }"
        ></div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    swiperImages: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.item {
  // position: relative;
}
.img {
  width: 100%;
  height: 14.359rem;
  // position: absolute;
  // clip: rect(0% 100% 100% 50%);
  // background-size: 100% 100%;
}
/deep/ .van-swipe__indicator {
  width: 0.5128rem;
  height: 0.5128rem;
}
/deep/ .van-swipe__indicator--active {
  background-color: #fff;
}
/deep/ .van-swipe__indicators {
  bottom: 0.5128rem;
}
</style>
