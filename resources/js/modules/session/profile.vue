<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>Update Profile</span>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <!-- Profile -->
      <el-tab-pane :label="$t('button.profile')" name="profile">
        <el-form
          ref="profileForm"
          :model="profileForm"
          :rules="profileFormRules"
          :label-width="labelWidth"
          label-position="left"
        >
          <el-form-item :label="$t('label.full_name')" prop="name">
            <el-input
              placeholder="Please Input Full Name"
              v-model="profileForm.name"
            ></el-input>
          </el-form-item>
          <el-form-item label="Email" prop="email">
            <el-input
              placeholder="Please Input Email "
              name="email"
              v-model="profileForm.email"
            ></el-input>
          </el-form-item>
          <el-button type="primary" @click.native="handleSaveProfile"
            >{{$t('button.save')}}</el-button
          >
        </el-form>
      </el-tab-pane>
      <!-- Change Password -->
      <el-tab-pane :label="$t('label.change_password')" name="changePassword">
        <el-form
          ref="changePassForm"
          :model="changePassForm"
          :rules="changePassFormRules"
          :label-width="labelWidth"
          label-position="left"
        >
          <el-form-item :label="$t('label.new_password')" prop="password">
            <el-input
              :placeholder="$t('placeholder.please_input_new_password')"
              v-model="changePassForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item :label="$t('label.confirm_password')" prop="confirmPass">
            <el-input
              :placeholder="$t('placeholder.please_input_password_to_confirm')"
              v-model="changePassForm.confirmPass"
              show-password
            ></el-input>
          </el-form-item>
          <el-button type="primary" @click="handleSavePassword">{{$t('button.save')}}</el-button>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  middleware: "auth",

  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (this.changePassForm.confirmPass !== "") {
          this.$refs.changePassForm.validateField("confirmPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== this.changePassForm.password) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
    return {
      activeName: "profile",
      labelWidth: "200px",
      profileForm: {
        name: "",
        email: ""
      },
      changePassForm: {
        password: "",
        confirmPass: ""
      },
      profileFormRules: {
        name: [
          {
            required: true,
            message: "Please input fullname",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: "Please input email address",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Please input correct email address",
            trigger: ["blur", "change"]
          }
        ]
      },
      changePassFormRules: {
        password: [
          {
            required: true
          },
          { validator: validatePass, trigger: "blur" }
        ],
        confirmPass: [
          {
            required: true
          },
          { validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },

  computed: {
    ...mapState("auth", ["user"])
  },

  created() {
    this.fillDataToProfileForm();
  },

  methods: {
    ...mapActions("session", ["updateProfile", "updatePassword"]),

    fillDataToProfileForm() {
      if (this.user) {
        this.profileForm = { ...this.user };
      }
    },

    handleSaveProfile() {
      this.$refs["profileForm"].validate(async valid => {
        if (valid) {
          this.updateProfile({ ...this.profileForm }).then(res => {
            if (res && res.data && res.statusText === "OK") {
              this.$message({
                message: "Profile updated",
                type: "success"
              });
            } else {
              this.$message.error("Error");
            }
          });
        } else {
          return false;
        }
      });
    },

    handleSavePassword() {
      this.$refs["changePassForm"].validate(async valid => {
        if (valid) {
          if (res && res.statusText === "OK") {
            this.$message({
              message: "Password updated",
              type: "success"
            });
          } else {
            this.$message.error("Error");
          }
        } else {
          return false;
        }
      });
    },

    onSubmit() {
      return;
    },

    handleClick() {
      return;
    }
  }
};
</script>

<style></style>
