<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>Updape Profile</span>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <!-- Profile -->
      <el-tab-pane label="Profile" name="first">
        <!--  -->
        <label for="usrNm" class="el-form-item__label" style="width: 0px;">Username</label>
        <div class="el-form-item__content" style="margin-left: 120px;">
          <el-input placeholder="Please input username" v-model="input" clearable></el-input>
        </div>
        <!--  -->
        <label for="fullName" class="el-form-item__label" style="width: 80px;">Full Name</label>
        <div class="el-form-item__content" style="margin-left: 120px;">
          <el-input placeholder="Please input fullname" v-model="input" clearable></el-input>
        </div>
        <!-- -->
        <label for="email" class="el-form-item__label" style="width: 0px;">Email</label>
        <div class="el-form-item__content" style="margin-left: 120px;">
          <el-input placeholder="Please input email" v-model="input" clearable></el-input>
        </div>
        <div class="el-form-item__content" style="margin-left: 120px;">
          <button
            data-v-6de003ed
            type="button"
            class="el-button el-button--primary el-button--small"
          >
            <!---->
            <!---->
            <span>Save</span>
          </button>
          <button
            data-v-6de003ed
            type="button"
            class="el-button el-button--default el-button--small"
          >
            <!---->
            <!---->
            <span>Cancel</span>
          </button>
          <!---->
        </div>
      </el-tab-pane>
      <!-- Change Password -->
      <el-tab-pane label="Change Password" name="second">
        <!--  -->
        <label for="oldPassword" class="el-form-item__label" style="width: 105px;">Old Password</label>
        <div class="el-form-item__content" style="margin-left: 240px;">
          <el-input placeholder="Please input old password" v-model="input" show-password></el-input>
        </div>
        <!-- -->
        <label for="oldPassword" class="el-form-item__label" style="width: 110px;">New Password</label>
        <div class="el-form-item__content" style="margin-left: 240px;">
          <el-input placeholder="Please input new password" v-model="input" show-password></el-input>
        </div>
        <!--  -->
        <label
          for="confirmPassword"
          class="el-form-item__label"
          style="width: 160px;"
        >Confirm New Password</label>
        <div class="el-form-item__content" style="margin-left: 240px;">
          <el-input placeholder="Please confirm input password" v-model="input" show-password></el-input>
        </div>
        <!--  -->
        <div class="el-form-item__content" style="margin-left: 120px;">
          <button
            data-v-6de003ed
            type="button"
            class="el-button el-button--primary el-button--small"
          >
            <!---->
            <!---->
            <span>Save</span>
          </button>
          <button
            data-v-6de003ed
            type="button"
            class="el-button el-button--default el-button--small"
          >
            <!---->
            <!---->
            <span>Cancel</span>
          </button>
          <!---->
        </div>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      input: ""
    };
  },

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style>
</style>