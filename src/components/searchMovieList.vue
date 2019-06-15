<template>
  <div class="m-list">
    <h1>电影/电视剧/综艺</h1>
        <router-link tag="div" class="movie" v-for="item in movies" :key="item.id" to='/film' >
          <img :src="item.img" alt="">
          <div class="info line_ellipsis">
            <div class="title line_ellipsis"><span class="t-inner line_ellipsis">{{item.nm}}</span>
            <span class="wish line_ellipsis" v-if="!item.sc">{{item.wish}} <i>人想看</i></span>
            <span class="wish " v-else>{{item.sc}} <i>分</i></span>
            </div>
            <div>{{item.cat}}</div>
            <div v-if="item.enm" class="line_ellipsis">
              <span class="enm line_ellipsis">{{item.enm}}</span>
              <i class="want" v-if="!item.globalReleased">想看</i>
            </div>
            <div>{{item.rt}}</div>
          </div>
        </router-link>
  </div>
</template>
<script>
export default {
  name: 'movieList',
  props: {
    movies: Array
  }
}
</script>
<style lang="less" scoped>
.line_ellipsis{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  ::-webkit-scrollbar{ display: none}
  .m-list{
    display: flex;
    flex-direction: column;
    h1{
      font-size: 15px;
      display: block;
      height: 20px;
      line-height: 20px;
      color: #999;
      padding: 9px 15px;
      border-bottom: 1px solid #ccc;
      }
    .movie{
      display: flex;
      padding: 12px 0;
      border-bottom:1px solid #e6e6e6;
      }
      img{
        width: 64px;
        height:90px;
        margin: 0 10px;
        background: #eee;
      }
      .info{
        div{
        display: flex;
        flex: 1;
        padding-right: 10px;
        margin-bottom: 5px;
        color: #777;
        font-size: 13px;
        .want{
        display: block;
        border-radius: 3px;
        width: 48px;
        height: 27px;
        background: #FFAA00;
        color:#fff;
        font-size: 12px;
        text-align: center;
        line-height: 27px;
        .title{
          font-size: 17px;
          flex: 1;
          .t-inner{
            color: #000;
          }
        }
      }
        .wish{
          font-size: 16px;
          color:#FFAA00;
          flex: 0 1 auto;
          i{
            font-size: 12px;
          }
        }
        .enm{
          flex:1;
        }
      }
    }
  }
</style>
