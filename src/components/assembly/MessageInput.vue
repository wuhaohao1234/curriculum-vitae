<template>
  <div class="messageInput">
    <h2>
      <span>{{msg}}</span>
       <el-input></el-input>
    </h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MessageInput extends Vue {
  @Prop() private msg!: string;
  public user = {
      userName: '吴昊',
      message: '名称'
  }
  mounted() {
    console.log("这是内容区域");
  }
}
</script>

<style scoped>
.messageInput {
  padding: 10px 30px;
}
h2{
  display: flex;
  flex-direction: row;
}
.el-input{
  width: auto;
  margin-left: 20px;
}
</style>
