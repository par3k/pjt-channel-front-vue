<template>
  <!-- teamIntroduce -->
  <div>
    <!-- About -->
    <swiper-slide>
      <div id="teamIntroduce" class="basic-6">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-container bg-gray">
                <h2 style="text-weight: bold">팀원을 소개합니다.</h2>
                <p>
                  팀원 소개 문구 생각!
                </p>
              </div>
              <!-- end of text-container -->
              <div class="image-container">
                <img
                  class="img-fluid"
                  src="../../assets/images/about.jpg"
                  alt="alternative"
                />
              </div>
              <!-- end of image-container -->
            </div>
            <!-- end of col -->
          </div>
          <!-- end of row -->
        </div>
        <!-- end of container -->
      </div>
      <!-- end of basic-6 -->
      <!-- end of about -->
    </swiper-slide>
    <!-- team -->
    <div id="team" class="slider-1">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <swiper ref="mySwiper" :options="swiperOptions">
              <swiper-slide>
                <!-- Slide -->
                <div class="swiper-slide">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="image-container">
                        <img class="img-fluid" alt="이은수" />
                      </div>
                      <!-- end of image-container -->
                    </div>
                    <!-- end of col -->
                    <div class="col-lg-6">
                      <div class="text-container">
                        <h4 style="font-weight:bold">이은수</h4>
                        <p>
                          18 ~ 20 - BJTU (China) SW Engineering - Graduate<br />
                        </p>

                        <p class="testimonial-text" style="font-weight:bold">
                          자기소개!<br />
                        </p>
                        <div class="testimonial-author">
                          &nbsp;
                        </div>
                      </div>
                      <!-- end of text-container -->
                    </div>
                    <!-- end of col -->
                  </div>
                  <!-- end of row -->
                </div>
                <!-- end of swiper-slide -->
              </swiper-slide>
              <swiper-slide>
                <!-- Slide -->
                <div class="swiper-slide">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="image-container">
                        <img class="img-fluid" alt="신채민" />
                      </div>
                      <!-- end of image-container -->
                    </div>
                    <!-- end of col -->
                    <div class="col-lg-6">
                      <div class="text-container">
                        <h4 style="font-weight:bold">신채민</h4>
                        <p>경력 입력!<br /></p>

                        <p class="testimonial-text" style="font-weight:bold">
                          자기소개!<br />
                        </p>
                        <div class="testimonial-author">
                          &nbsp;
                        </div>
                      </div>
                      <!-- end of text-container -->
                    </div>
                    <!-- end of col -->
                  </div>
                  <!-- end of row -->
                </div>
                <!-- end of swiper-slide -->
                <!-- end of slide -->
              </swiper-slide>
              <swiper-slide>
                <!-- Slide -->
                <div class="swiper-slide">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="image-container">
                        <img
                          class="img-fluid"
                          src="../../assets/images/park.png"
                          alt="박회재"
                        />
                      </div>
                      <!-- end of image-container -->
                    </div>
                    <!-- end of col -->
                    <div class="col-lg-6">
                      <div class="text-container">
                        <h4 style="font-weight:bold">박회재</h4>
                        <p>
                          21.08 ~ 현재 - 삼성카드 통합플랫폼 "모니모" 서비스
                          개발<br />
                          21.01 ~ 21.07 - 삼성 청년 소프트웨어 아카데미 5기
                          수료<br />
                        </p>

                        <p class="testimonial-text" style="font-weight:bold">
                          안녕하세요! 중국에서 소프트웨어 공학을 전공하고 현재
                          삼성카드 통합플랫폼 백엔드 개발자로 일하고 있습니다.
                          자바를 이용한 서버 개발 및 클라우드 서비스를 이용한
                          인프라 개발에 관심이 있습니다.<br />
                        </p>
                        <div class="testimonial-author">
                          &nbsp;
                        </div>
                      </div>
                      <!-- end of text-container -->
                    </div>
                    <!-- end of col -->
                  </div>
                  <!-- end of row -->
                </div>
                <!-- end of swiper-slide -->
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>

            <!-- end of text slider -->
          </div>
          <!-- end of col -->
        </div>
        <!-- end of row -->
      </div>
      <!-- end of container -->
    </div>
    <!-- end of slider-1 -->
    <!-- end of projects -->
  </div>
</template>

<style scoped>
@import "../../assets/css/swiper.css";
</style>
