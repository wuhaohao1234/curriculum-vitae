<template>
  <div class="home">
    <div class="container">主页</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ViewModel from '../store/index'
@Component({
  components: {}
})
export default class Home extends Vue {
  public state = new ViewModel()
  mounted() {
    console.log(this.state.age)
  }
}
</script>

<style scoped>
</style>
