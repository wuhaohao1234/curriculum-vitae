<template>
  <div class="Test">
    我是测试
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class Test extends Vue {
  mounted() {

  }
}
</script>

<style scoped>
.content,.editore {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px #ccc;
}
</style>
