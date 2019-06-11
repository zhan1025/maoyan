<template>
     <div class="lv-indexlist__nav">
          <ul>
            <li v-for="item in indexList"
            :key="item"
            :ref="item"
            @click="handleLetter"
           >
               {{item}}
            </li>
          </ul>
        </div>
</template>


<script>
import eventBus from '@/model/eventBus.js'
export default {
  name:'cAlphabet',

  props:['indexList'],

   data() {
    return {
      touchStatus: false
    }
  },
  //  updated() {
  //   this.startY = this.$refs['A'][0].offsetTop
  
  // },

  methods:{
    handleLetter(e){
      // console.log(e.target.innerText)
      eventBus.$emit('change',e.target.innerText)

    },
  }
}
</script>




<style lang="less" scoped>
.lv-indexlist {
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    background: #fff;
    overflow: hidden;
    position: relative;
    &__nav {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18px;
      height: 100%;

      li {
        height: 18px;
        font-size: 12px;
        color: #191a1b;
        padding: 0 6px;
      }
    }
}
</style>
