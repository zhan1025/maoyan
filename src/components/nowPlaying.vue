// 正在上映电影列表组件

<template>
  <ul class="film-list">
    <li class="film-item" v-for="film in filmList" :key="film.id">
      <img class="film-img" :src="film.img" alt="">
      <div class="film-info">
        <h2>{{ film.nm }}</h2>
        <p v-if="film.sc">观众评<span class="grade">{{ film.sc }}</span></p>
        <p v-else><span class="grade wish">{{ film.wish }}</span>人想看</p>
        <p class="actor">主演: {{ film.star }}</p>
        <p>{{ film.showInfo }}</p>
      </div>
      <div class="buy-btn" v-if="film.globalReleased">
        购票
      </div>
      <div class="buy-btn reserve" v-else >
        预购
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    filmList: Array
  }
}
</script>

<style lang="less">
@import '~@/styles/common/variable.less';
.film-list{
  .film-item{
    display: flex;
    padding: 15px;
    height: 94px;
    position: relative;
    align-items: center;
    .film-img{
      width:64px;
    }
    .film-info{
      width: 241px;
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      color: @filmTextColor;
      font-size: 13px;
      h2{
        font-size: 17px;
        color: #333;
        font-weight: 700;
        padding-right: 5px;
        flex-shrink: 1;
      }
      p{
        margin-top: 6px;
        line-height: 15px;
        &{
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .grade{
          margin-left: 5px;
          font-weight: 700;
          color: #faaf00;
          font-size: 15px;
        }
        .wish{
          margin: 0 5px 0 0;
        }
      }
    }
    .buy-btn{
      width: 47px;
      height: 27px;
      line-height: 28px;
      text-align: center;
      box-sizing: border-box;
      background-color: #f03d37;
      color: #fff;
      margin-left: 6px;
      border-radius: 4px;
      white-space: nowrap;
      font-size: 12px;
      cursor: pointer;
    }
    .reserve{
      background-color: #3c9fe6
    }
  }
}
</style>
