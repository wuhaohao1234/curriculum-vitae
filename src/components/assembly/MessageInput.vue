<template>
  <div class="messageInput">
    <h2>
      <span v-text="user.message" ></span>
       <el-input v-model="user.userName" ></el-input>
    </h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MessageInput extends Vue {
  @Prop() private msg!: string;
  public user = {
      userName: '阿布',
      message: '姓名：'
  }
  mounted() {
    
  }
}
</script>

<style scoped>

</style>
