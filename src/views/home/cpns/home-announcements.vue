<template>
  <div class="home-announcements">
    <div class="title">活动公告</div>
    <div class="wrap">
      <div class="announcements">
        <div
          class="announcement"
          v-for="(item, index) in announcements"
          :key="index"
        >
          <p>{{ item.title }}</p>
          <span>{{ item.lastUpdateTimeFormat.split(" ")[0] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    announcements: {
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
.home-announcements {
  .title {
    position: relative;
    height: 3.0769rem;
    line-height: 3.0769rem;
    color: var(--theme-color);
    font-size: 0.6667rem;
    text-align: center;
    &::after {
      position: absolute;
      left: 50%;
      bottom: 0.7692rem;
      content: "";
      width: 1.641rem;
      transform: translateX(-50%);
      border-bottom: 1px solid var(--theme-color);
    }
  }
  .wrap {
    margin: 0 0.9231rem 1.5385rem;
    overflow: hidden;
    .announcements {
      display: flex;
      flex-direction: column;
      height: 4.1026rem;
      overflow-x: hidden;
      overflow-y: scroll;
      .announcement {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #e1e1e1;
        color: #a4a4a4;
        height: 0.9744rem;
        align-items: center;
        font-size: 0.4615rem;
      }
    }
  }
}
</style>
