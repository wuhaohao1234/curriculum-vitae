<template>
  <div class="personalntroduction">
    <h2>个人介绍：</h2>
    <div class="context" >
      <h4 v-for="(item,keys) in userMessage" :key="keys" >
        <span v-text="item.message" ></span>
        <el-input v-model="item.value" ></el-input>
      </h4>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Personalntroduction extends Vue {
  public userMessage = [
    {
      message: '学校名称',
      value: '某某大学'
    },
    {
      message: '个人博客',
      value: 'wuhaohao1234.github.io'
    },
    {
      message: '联系方式',
      value: '18329723317'
    },
    {
      message: '个人邮箱',
      value: '1611499758@qq.com'
    },
  ]
  mounted() {
    console.log("这是个人介绍");
  }
}
</script>

<style scoped>
h2 {
  padding-bottom: 20px;
}
h4 {
  line-height: 40px;
  margin-bottom: 15px;
}
</style>
