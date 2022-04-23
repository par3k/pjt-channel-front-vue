<template>
  <div>
    <div id="contact" class="form-11">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2>회원가입</h2>
            <br />
            <br />
          </div>
          <!-- end of col -->
        </div>
        <!-- end of row -->
        <div class="row">
          <div class="col-lg-12">
            <!-- Contact Form -->
            <form id="contactForm">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control-input"
                  id="emailAdr"
                  ref="emailAdr"
                  v-model="emailAdr"
                />
                <label class="label-control">이메일 주소</label>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control-input"
                  id="userNm"
                  ref="userNm"
                  placeholder=""
                  v-model="userNm"
                />
                <label class="label-control">이름</label>
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control-input"
                  id="userPwd"
                  ref="userPwd"
                  placeholder=""
                  v-model="userPwd"
                />
                <label class="label-control">비밀번호</label>
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control-input"
                  ref="pwdChk"
                  v-model="pwdChk"
                />
                <label class="label-control">비밀번호 확인</label>
              </div>
              <div class="form-group">
                <select class="form-control-input" v-model="userGender">
                  <option
                    v-for="(item, index) in genderList"
                    :key="index"
                    :value="item.value"
                  >
                    {{ item.text }}
                  </option>
                </select>
                <label class="label-control">성별</label>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control-input"
                  id="userBirdD"
                  ref="userBirdD"
                  v-model="userBirdD"
                />
                <label class="label-control">생년월일</label>
              </div>
              <br /><br />
              <div class="form-group">
                <button
                  type="button"
                  class="form-control-submit-button"
                  @click="checkValidation"
                >
                  회원가입
                </button>
              </div>
            </form>
            <!-- end of contact form -->
          </div>
          <!-- end of col -->
        </div>
        <!-- end of row -->
      </div>
      <!-- end of container -->
    </div>
    <!-- end of form-1 -->
    <!-- end of contact -->
  </div>
</template>

<script>
import axios from "@/util/common";

export default {
  data() {
    return {
      emailAdr: "",
      userPwd: "",
      userNm: "",
      pwdChk: "",
      userGender: "",
      userBirdD: "",
      genderList: [
        { value: "M", text: "남성" },
        { value: "F", text: "여성" }
      ]
    };
  },
  methods: {
    checkValidation() {
      let err = true;
      let msg = "";

      !this.userNm &&
        ((msg = "이름을 입력해주세요"),
        (err = false),
        this.$refs.userNm.focus());
      err &&
        !this.emailAdr &&
        ((msg = "이메일을 입력해주세요"),
        (err = false),
        this.$refs.emailAdr.focus());
      err &&
        !this.userPwd &&
        ((msg = "비밀번호를 입력해주세요"),
        (err = false),
        this.$refs.userPwd.focus());
      err &&
        !this.pwdChk &&
        ((msg = "비밀번호를 입력해주세요"),
        (err = false),
        this.$refs.pwdChk.focus());
      err &&
        !this.userGender &&
        ((msg = "성별을 선택해주세요"),
        (err = false),
        this.$refs.userGender.focus());
      err &&
        !this.userBirdD &&
        ((msg = "생년월일을 입력해주세요"),
        (err = false),
        this.$refs.userBirdD.focus());

      if (!err) alert(msg);
      else this.regist();
    },

    regist() {
      axios
        .post("/user/userRegist", {
          userNm: this.userNm,
          emailAdr: this.emailAdr,
          userPwd: this.userPwd,
          userGender: this.userGender,
          userBirdD: this.userBirdD
        })
        .then(res => {
          if (res.data === 1) {
            alert("회원가입에 성공했습니다.");
            this.$router.push("/zipsin/user/login");
          } else {
            alert("이미 가입한 이메일 주소입니다. 다시 시도하세요");
            this.$router.push("/zipsin/user/regist");
          }
        });
    }
  }
};
</script>

<style>
input {
  text-align: center;
}
</style>
