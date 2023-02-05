<template>
  <!--单例模式，name相同则复用一个无界实例，改变url则子应用重新渲染实例到对应路由 -->
  <WujieVue width="100%" height="100%" name="app1" :url="viteUrl"></WujieVue>
</template>

<script>
import hostMap from "../hostMap";
export default {
  data() {
    return {
      viteUrl: hostMap("//localhost:3001/"),
    };
  },
};
</script>

<style lang="scss" scoped></style>