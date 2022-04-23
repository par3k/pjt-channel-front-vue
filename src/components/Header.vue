<template>
  <nav
    class="navbar navbar-expand-lg fixed-top navbar-dark"
    style="background-color: black"
  >
    <div class="container">
      <a href="/" class="navbar-brand logo-text page-scroll">Zipsin</a>
      <button
        class="navbar-toggler p-0 border-0"
        type="button"
        data-toggle="offcanvas"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="navbar-collapse offcanvas-collapse"
        id="navbarsExampleDefault"
      >
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="" class="nav-link page-scroll">매물검색</a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link page-scroll">서비스소개</a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link page-scroll">팀원소개</a>
          </li>
          <li class="nav-item">
            <router-link to="" class="nav-link page-scroll">게시판</router-link>
          </li>

          <div v-if="lgnSts">
            <li class="nav-item">
              <router-link to="" class="nav-link page-scroll"
                >내 정보</router-link
              >
            </li>
          </div>
          <div v-if="lgnSts">
            <li class="nav-item">
              <a @click="logout" class="nav-link page-scroll">로그아웃</a>
            </li>
          </div>

          <div v-if="!lgnSts">
            <li class="nav-item">
              <router-link to="/zipsin/user/login" class="nav-link page-scroll"
                >로그인</router-link
              >
            </li>
          </div>

          <div v-if="!lgnSts">
            <li class="nav-item">
              <router-link to="/zipsin/user/regist" class="nav-link page-scroll"
                >회원가입</router-link
              >
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  namd: "Header",
  data() {
    return {
      lgnSts: false,
      userNm: ""
    };
  },
  mounted() {
    this.lgnChk();
  },
  methods: {
    // 로그인 상태 체크 >> 세션에 토큰이 있는지 확인
    lgnChk() {
      // 세션이 없다면 비로그인(false), 있다면 로그인(true) 상태
      if (sessionStorage.getItem("accessToken")) {
        this.lgnSts = true;
      } else {
        this.lgnSts = false;
      }
    },
    lgnOut() {
      alert("로그아웃 되었습니다.");
      sessionStorage.clear();
      location.href = "/";
    }
  }
};
</script>

<style scoped>
@import "../assets/css/header.css";
</style>
