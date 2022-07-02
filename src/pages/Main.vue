<template>
  <div>
    <topPage />
    <projectIntroduce />
    <findRealestate />
    <teamIntroduce />
  </div>
</template>

<script>
// @ is an alias to /src
import topPage from "../components/main/MAIN001M0.vue";
import projectIntroduce from "../components/main/MAIN002M0.vue";
import findRealestate from "../components/main/MAIN003M0.vue";
import teamIntroduce from "../components/main/MAIN004M0.vue";

export default {
  name: "Home",
  components: {
    // Main
    topPage,
    findRealestate,
    projectIntroduce,
    teamIntroduce
  }
};
</script>

<style scoped>
@import "../assets/css/main_styles.css";
@import "../assets/css/main_page.css";
</style>
