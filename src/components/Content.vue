<template>
  <div class="content">
    <div class="nav">
      <h3>个人简历</h3>
    </div>
    <div class="banner">
      <MessageInput :msg=msgName />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {
    MessageInput: () => import("./assembly/MessageInput.vue")
  }
})
export default class Content extends Vue {
  public msgName: string = "姓名：";
  mounted() {
    console.log("这是内容区域");
  }
}
</script>

<style scoped>
.nav {
  height: 45px;
  line-height: 45px;
  padding-left: 30px;
  background: #409eff;
  color: #fff;
}
.banner {
  padding: 10px 30px;
}
.messageInput {
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
}
</style>
