<template>
  <!-- findRealestate -->
  <!--매물 찾기 -->
  <div id="findRealestate" class="basic-1">
    <div class="container">
      <div class="text-container2">
        <div class="dong_search">
          <h1
            class="dong_search_title"
            style="font-weight: bold; color : white"
          >
            서울시 아파트 매물 검색하기
          </h1>
          <br />
          <form method="get" action="" id="searchForm">
            <select class="selects sido" name="si">
              <option value="서울특별시">서울시</option>
            </select>
            <select
              class="selects gu"
              name="gu"
              v-model="selected"
              @change="categoryChange()"
            >
            </select>
            <select
              class="selects dong"
              name="dong"
              id="dong"
              v-model="selectedDong"
            >
            </select>
            <button class="search_dong" type="button" @click="searchDong()">
              검색하기
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
