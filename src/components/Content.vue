<template>
  <div class="content">
    <div class="nav">
      <h3>个人简历</h3>
    </div>
    <div class="banner">
      <MessageInput :msg=msgName />
      <Personalntroduction/>
      <Experience/>
      <SkillTree/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {
    MessageInput: () => import("./assembly/MessageInput.vue"),
    Personalntroduction: () => import("./assembly/Personalntroduction.vue"),
    Experience:() => import("./assembly/Experience.vue"),
    SkillTree:() => import("./assembly/SkillTree.vue"),
  }
})
export default class Content extends Vue {
  public msgName: string = "姓名：";
  mounted() {
    console.log("这是内容区域");
  }
}
</script>

<style>
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
.messageInput,.personalntroduction,.experience,.skillTree {
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
  padding: 10px 30px;
}
h2,h3,h4,h5,h6{
  display: flex;
  flex-direction: row;
  cursor: pointer;
}
.el-input{
  width: auto;
  margin-left: 20px;
}
</style>
