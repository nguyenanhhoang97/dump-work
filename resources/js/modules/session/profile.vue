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
          <el-form-item label="Username">
            <el-input placeholder="Please Input Username" v-model="form.name"></el-input>
          </el-form-item>
          <!--  -->
          <el-form-item label="Full Name">
            <el-input placeholder="Please Input Full Name" v-model="form.fullname"></el-input>
          </el-form-item>
          <!--  -->
          <el-form-item label="Email">
            <el-input placeholder="Please Input Email" v-model="form.email"></el-input>
          </el-form-item>
          <el-button type="primary" @click="onSubmit">Save</el-button>
          <el-button>Cancel</el-button>
        </el-form>
      </el-tab-pane>
      <!-- Change Password -->
      <el-tab-pane label="Change Password" name="changepassword">
        <el-form ref="form" :model="form" label-width="130px">
          <!--  -->
          <el-form-item label="Old Password">
            <el-input placeholder="Please Input Password" v-model="form.oldpassword" show-password></el-input>
          </el-form-item>
          <!--  -->
          <el-form-item label="New Password">
            <el-input placeholder="Please New Password" v-model="form.newpassword" show-password></el-input>
          </el-form-item>
          <!--  -->
          <el-form-item label="Confirm Password">
            <el-input
              placeholder="Please Input Password To Confirm"
              v-model="form.confirmpassword"
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
      activeName: "first",
      form: {
        name: "",
        fullname: "",
        email: "",
        oldpassword: "",
        newpassword: "",
        confirmpassword: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleClick() {
      return;
    }
  }
};
</script>

<style>
</style>