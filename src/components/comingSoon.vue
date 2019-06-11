// 即将上映电影列表组件
<template>
  <div>
    <div class="expected">
      <p class="title">近期最受期待</p>
      <ul class="expected-list">
        <li class="expected-item" v-for="a in 10" :key="a">
          <img class="popular-img" src="https://p0.meituan.net/170.230/movie/e11213b2676bcf6f4eac41c482af2bdd327884.jpg" alt="">
          <h5 class="popular-name">少年的你</h5>
          <p class="popular-day">6月27日</p>
        </li>
      </ul>
    </div>
    <ul class="film-list">
      <li class="film-item">
        <img class="film-img">
        <div class="film-info">
          <h2>{ film.nm }</h2>
          <p><span class="grade wish">{ film.wish }</span>人想看</p>
          <p class="actor">主演: { film.star }</p>
          <p>{ film.showInfo }</p>
        </div>
        <div class="buy-btn reserve" >
          预购
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="less">
.expected{
  width: 370px;
  padding: 12px 0 12px 15px;
  background-color: #fff;
  margin-bottom: 10px;
  .title{
    margin: 0 0 12px;
    font-size: 14px;
    color: #333;
  }
  .expected-list{
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    .expected-item{
      line-height: 16px;
      margin-right: 10px;
      .popular-img{
        width: 85px;
      }
      .popular-name{
        margin: 0 0 3px;
        font-size: 13px;
        color: #222;
        font-weight: 900;
      }
      .popular-day{
        margin: 0;
        font-size: 12px;
        color: #999;
      }
    }
  }

}
</style>

