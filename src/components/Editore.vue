<template>
  <div class="editore">
      <div class="nav">
        <span>添加描述</span>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Editore extends Vue {
  mounted() {
      console.log('这是编辑区域')
  }
}
</script>
<style scoped>
.editore {
  border-radius: 0;
}
.nav{
  height: 35px;
  background:#409EFF;
  color:#fff;
  line-height: 35px;
  padding-left: 18px;
}
</style>
