<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>Updape Profile</span>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <!-- Profile -->
      <el-tab-pane label="Profile" name="profile">
        <!--  -->
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="Username" name="userName">
            <el-input placeholder="Please Input Username" v-model="form.usrerName"></el-input>
          </el-form-item>
          <!--  -->
          <el-form-item label="Full Name" name="fullName">
            <el-input placeholder="Please Input Full Name" v-model="form.fullName"></el-input>
          </el-form-item>
          <!--  -->
          <el-form-item label="Email">
            <el-input placeholder="Please Input Email "  name="email" v-model="form.email"></el-input>
          </el-form-item>
          <el-button type="primary" @click="onSubmit">Save</el-button>
          <el-button>Cancel</el-button>
        </el-form>
      </el-tab-pane>
      <!-- Cha nge Password -->
      <el-tab-pane label="Change Password" name="changePassword">
        <el-form ref="form" :model="form" label-width="130px">
          <!--  -->
          <el-form-item label="Old Password" name="oldPassword" >
            <el-input placeholder="Please Input Password" v-model="form.oldPassword" show-password></el-input>
          </el-form-item>
          <!--  -->
          <el-form-item label="New Password" name="newPassword">
            <el-input placeholder="Please New Password" v-model="form.newPassword" show-password></el-input>
          </el-form-item>
          <!--  -->
          <el-form-item label="Confirm Password" name="confirmPassword">
            <el-input
              placeholder="Please Input Password To Confirm"
              v-model="form.confirmPassword"
              show-password
            ></el-input>
          </el-form-item>
          <el-button type="primary" @click="onSubmit">Save</el-button>
          <el-button>Cancel</el-button>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      activeName: "profile",
      form: {
        userName: "",
        fullName: "",
        email: "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
      }
    };
  },
  methods: {
    onSubmit() {
      return;
    },
    handleClick() {
      return;
    }
  }
};
</script>

<style>
</style>