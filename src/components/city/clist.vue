<template>

    <ul class="lv-indexlist__content" id="lv-indexlist__content" >
          <div class="recommend-city">
            <div class="gprs-city">
              <div class="city-index-title">GPS定位你所在城市</div>
              <ul class="city-index-detail">
                <li class="city-item-detail city-item-detail-gprs">
                  <div class="city-item-text">定位失败</div>
                </li>
              </ul>
            </div>
            <div class="hot-city">
              <div class="city-index-title">热门城市</div>
              <ul class="city-index-detail">
                <li class="city-item-detail" v-for="item in hotList"
                :key="item.cityId">
                  <div class="city-item-text"> {{item.name}}</div>
                </li>
              </ul>
            </div>
          </div>
          <div ref="wrapper" id='box'>
            <ul>
              <li class="lv-indexsection" v-for="city in newCityList"
              :key="city.pinyin" :ref="city.py">
                <p class="lv-indexsection__index">{{city.py}}</p>
                <ul>
                  <li v-for="cities in city.list"
                  :key="cities.cityId">
                {{cities.name}}
                  </li>
                </ul>
              </li>
          </ul>
        </div>
    </ul>

</template>
<script>
import eventBus from '@/model/eventBus.js'
import Bscroll from 'better-scroll'

export default {
  name: 'clist',
  props: ['newCityList', 'hotList'],
  data () {
    return {
      letter: ''
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        console.log(element)
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    eventBus.$on('change', (letter) => {
      this.letter = letter
      console.log(this.letter)
    })
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true
    })
  }
}
</script>
<style lang="less" scoped>
@import '~@/styles/common/mixin.less';

// #box{
//   overflow-y: scroll;
// }
  .recommend-city {
      padding-left: 15px;
      padding-top: 15px;

      .city-index-title {
        font-size: 13px;
        color: #797d82;
        margin-bottom: 10px;
      }

      .city-index-detail {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        .city-item-detail {
          width: 33.33%;
          text-align: center;
          padding-bottom: 15px;
          box-sizing: border-box;
          float: left;

          .city-item-text {
            height: 30px;
            line-height: 30px;
            background-color: #f4f4f4;
            border-radius: 3px;
            box-sizing: border-box;
            margin: 0 7.5px;
            font-size: 14px;
            color: #191a1b;
          }
        }
      }
    }
.lv-indexsection {
      &__index {
        background-color: #f4f4f4;
        color: #797d82;
        padding-left: 15px;
        height: 30px;
        line-height: 30px;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0 15px;
        margin-bottom: -1px;
        li {
          .border-bottom;
          position: relative;
          width: 100%;
          height: 48px;
          line-height: 48px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }
</style>
