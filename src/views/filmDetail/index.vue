<template>
  <div class="body">
    <header class="navbar">
      <router-link tag="div" class="nav-wrap-left" to="/film/now"><i class="iconfont icon-left"></i></router-link>
      <h1 class="nav-header">
        {{ movieDetail.nm }}
      </h1>
    </header>
    <div class="movie-detail">
      <div class="movie-filter"></div>
      <div class="poster-bg" :style="`background-image:url(${ movieDetail.img })`">
      </div>
      <div class="detail-content" >
        <img class="detail-img" :src="movieDetail.img" alt="">
        <div class="content">
          <h4 class="name">{{ movieDetail.nm }}</h4>
          <p class="titel">{{ movieDetail.musicStar }}</p>
          <p class="titel" v-if="movieDetail.sc">
            <span class="grade">{{ movieDetail.sc }}</span>
            ({{ movieDetail.snum }}人评)
          </p>
          <p v-else>暂无评分</p>
          <p>{{ movieDetail.cat }}</p>
          <p>{{ movieDetail.src }}/{{ movieDetail.dur }}分钟</p>
          <p>{{ movieDetail.pubDesc }}</p>
        </div>
      </div>
    </div>
    <div class="cinema">
      抱歉，你所在的位置暂无影院放映
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      movieId: this.$route.params.id,
      active: 0
    }
  },
  computed: {
    ...mapState('film', ['movieDetail'])
  },
  methods: {
    ...mapActions('film', ['getMovieDetail'])
  },
  created () {
    this.getMovieDetail(this.movieId)
  }
}
</script>

<style lang="less">
.body{
  display: flex;
  flex-direction: column;
  .navbar{
    height: 50.5px;
    color: #fff;
    background: #e54847;
    border-bottom: 1px solid #e54847;
    display: flex;
    position: relative;
    .nav-wrap-left{
      height: 50px;
      width: 22.5px;
      line-height: 50px;
      padding: 0 15px;
      .iconfont{
        font-size: 22px;
        font-weight: 100;
      }
    }
    .nav-header{
      flex: 1;
      font-size: 18px;
      font-weight: 400;
      text-align: center;
      line-height: 50px;
      margin: 0 52.5px 0 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .movie-detail{
    height: 188px;
    position: relative;
    cursor: pointer;
    .movie-filter{
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-color: #333;
    }
    .poster-bg{
      width: 100%;
      height: 100%;
      z-index: -1;
      overflow: hidden;
      position: absolute;
      filter: blur(1.2rem);
      background-size: cover;
      background-repeat: no-repeat;
      opacity: .55;
    }
    .detail-content{
      height: 150px;
      padding: 19px 30px 19px 15px;
      display: flex;
      position: relative;
      .detail-img{
        width: 110px;
        height: 150px;
      }
      .content{
        flex: 1;
        overflow-x: hidden;
        margin-left: 12.5px;
        line-height: 1;
        color: #fff;
        .name{
          font-size: 20px;
          margin-top: 2px;
          font-weight: 700;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .titel{
          margin-top: 10px;
          font-size: 12px;
          color: #fff;
          opacity: .8;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          .grade{
            font-size: 18px;
            font-weight: 700;
            color: #fc0;
          }
        }
        p{
          margin-top: 10px;
          font-size: 12px;
          color: #fff;
          opacity: .8;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
  }
  .cinema{
    flex: 1;
    text-align: center;
    line-height: 300px;
  }
}

</style>
