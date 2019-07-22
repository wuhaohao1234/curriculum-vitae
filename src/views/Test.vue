<template>
  <div class="Test">
    <div class="content">
      <!-- 头部 -->
      <div class="header">
        <span>
          <i class="el-icon-eleme"></i>
          小强
        </span>
      </div>
      <!-- 主体 -->
      <div class="banner">
        <div class="banner_content">
          <div class="contentUser">
            <ul>
              <li v-for="(item , itemKey) in msg" :key="itemKey">
                <div :class="item.user? 'item': 'item item_right'">
                  <i :class="item.user? 'el-icon-eleme': ''"></i>
                  <span class="item_data">我是时间</span>
                  <span class="item_content">
                    <span v-for="(itemVal, valKey) in item.value" :key="valKey"  >
                      {{itemVal}} <br>
                    </span>
                    <a :href="item.dataUrl" target="_blank" v-text="item.dataUrl"></a>
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <!-- 滚动条 -->
          <div class="scrollBar" @mousedown="move"></div>
        </div>
      </div>
      <!-- 输入框 -->
      <div class="footer">
        <!-- <el-input type="textarea" :rows="1" autofocus placeholder="请输入内容" v-model="input"></el-input> -->
        <textarea v-model="input" autofocus class="el-input" rows="1"></textarea>
        <el-button @click="putMessage" type="primary">发送</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class Test extends Vue {
  public input = "";
  public msg = [
    {
      user: "小强",
      value: [
        "数据1",
        "数据1",
        "数据1",
      ],
      dataUrl: "http://www.baidu.com"
    },
    {
      value: ["我是数据"]
    },
    {
      value: ["我是数据"]
    }
  ];
  mounted() {
    this.$socket = new WebSocket("ws://localhost:8001");
    const _this = this;
    window.onbeforeunload = function(event) {
      console.log("关闭WebSocket连接！");
      _this.$socket.close();
    };
    this.$socket.onopen = () => {
      console.log("服务以及链接");
    };
    this.$socket.onmessage = (evt: any) => {
      let received_msg = evt.data;
      const result = JSON.parse(received_msg);
      if (result.value.length !== 0) {
        console.log(result.value)
        this.msg.push(result);
      }
    };
  }
  /**
   * move
   */
  public move(e: any) {
    let Module = e.target; //获取目标元素
    let _this = this;
    //算出鼠标相对元素的位置
    let disX = e.clientX - Module.offsetLeft;
    let disY = e.clientY - Module.offsetTop;
    document.onmousemove = function(e: any) {
      //鼠标按下并移动的事件
      //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
      let top = e.clientY - disY;
      // this.positionY = left;
      //移动当前元素
      if (top < 0) {
        top = 0;
      }
      Module.style.top = top + "px";
    };
    document.onmouseup = e => {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  }
  /**
   * putMessage
   */
  public putMessage() {
    this.$socket.send(
      JSON.stringify({
        value: this.input
      })
    );
    this.input = "";
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
li {
  list-style: none;
  margin: 40px;
  min-height: 74px;
}
li::after {
  content: ".";
  display: block;
  height: 0;
  clear: left;
  visibility: hidden;
}
.content {
  width: 800px;
  margin: 20px auto;
  border-radius: 20px;
  box-shadow: 0 0 10px #ccc;
  overflow: hidden;
  padding-bottom: 10px;
}
.header {
  background: #409eff;
  height: 48px;
  color: #fff;
  padding-left: 30px;
  font-size: 16px;
}
.header span {
  color: #fff;
  line-height: 48px;
}
.el-icon-eleme {
  font-size: 30px;
  position: relative;
  top: 5px;
  color: #fff;
}
.banner {
  height: 500px;
  background: rgba(200, 200, 200, 0.7);
  overflow: hidden;
}
.footer {
  background: #fff;
  padding: 10px 30px;
  display: flex;
  flex-direction: row;
}
.el-button {
  margin-left: 20px;
}
.el-textarea__inner {
  overflow: hidden;
}

.banner_content {
  position: relative;
  height: 100%;
}
.contentUser,
.scrollBar {
  position: absolute;
}
.contentUser {
  position: absolute;
  bottom: 0;
  min-height: 100%;
  left: 0;
  width: 100%;
}
.item {
  width: 280px;
  background: #ccc;
  position: relative;
  border-radius: 10px;
}
.item_right {
  float: right;
}
.item i {
  position: absolute;
  top: 0;
  left: -32px;
}
.item span {
  padding: 12px;
}
.item .item_data {
  display: block;
  color: #eee;
  padding-bottom: 0;
}
.item .item_content {
  display: block;
  padding-top: 8px;
}
.scrollBar {
  width: 7px;
  top: 20px;
  right: 10px;
  height: 100px;
  background: #42b983;
  border-radius: 10px;
  cursor: pointer;
  opacity: 1;
  z-index: 99;
  transition: all 0.5s;
}
.scrollBar:hover {
  opacity: 1;
}
</style>
