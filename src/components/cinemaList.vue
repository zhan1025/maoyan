<template>
  <div class="cinema_list" ref="c_list">
    <router-link
    tag="div"
    class="item"
    v-for="item in cinemas"
    :key="item.id"
    to='/film'>
      <div class="title line_ellipsis">
        {{item.nm}}
        <span class="price">
          {{item.sellPrice}}
          <i>元起</i>
        </span>
      </div>
      <div class="addr">
        <div class="line_ellipsis">{{item.addr}} </div>
        <span class="distance">{{item.distance}}</span>
      </div>
      <!-- <div class="tags"><span >{{}}</span></div> -->
      <div class="promotion" v-if="item.promotion.cardPromotionTag">
        <img src="@/assets/cart.png" alt="">
        {{item.promotion.cardPromotionTag}}
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    cinemas: Array,
    paging: Object
  },
  methods: {
    /**
       *@param {number} clientHeight 有效高度
       *@param {number} height 有效高度
       *@param {number} scroll 有效高度
       *@param {number} result 计算结果
       */
    countScroll () {
      //  可视区域的高度,有效高度
      let cHeight = this.$refs['c_list'].clientHeight
      // 浏览高度
      let height = this.$refs['c_list'].scrollHeight
      //  滚动高度
      let scroll = this.$refs['c_list'].scrollTop
      let result = height - cHeight - scroll
      if (result <= 0 && this.paging.hasMore) {
        this.$emit('scroll')
        console.log(1111)
      }
    }
  },
  mounted () {
    this.$refs['c_list'].addEventListener('scroll', this.countScroll)
  }
}
</script>

<style lang="less" scoped>
  .line_ellipsis{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .cinema_list{
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    .item{
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-width: 382px;
      padding: 13px 15px 13px  0;
      margin-left: 16px;
      div{
        margin-top: 7px;
      }
      .price{
        color:#f03d37;
        font-size: 18px;
        i{
          font-size: 12px;
        }
      }
      .addr{
        display: flex;
        font-size: 13px;
        color: #666;
        div{
          width: 270px;
          }
        .distance{
          position: absolute;
          right: 15px;
        }
      }
      .promotion{
        color:#999;
        font-size: 12px;
        img{
          width: 15px;
          margin-right: 5px;
          vertical-align: top;
        }
      }
    }
  }
</style>
