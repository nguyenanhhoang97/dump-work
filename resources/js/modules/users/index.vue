<template>
  <div class="users">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ $t("label.user_list") }}</span>
        <el-button
          style="float: right"
          type="primary"
          plain
          @click="handleOpenCreateDialog()"
          >{{ $t("button.create_user") }}</el-button
        >
      </div>
      <el-table :data="users" stripe style="width: 100%">
        <el-table-column type="index" width="50"> </el-table-column>
        <el-table-column prop="email" label="Email"></el-table-column>
        <el-table-column
          prop="name"
          :label="$t('label.name')"
        ></el-table-column>
        <el-table-column fixed="right" label width="120">
          <template slot-scope="scope">
            <!-- Edit -->
            <el-button
              type="primary"
              icon="el-icon-edit"
              plain
              @click="handleOpenEditDialog(scope.row)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="sizes, prev, pager, next"
        :total="total"
      ></el-pagination>
      <!-- Dialog Create -->
      <el-dialog
        :title="$t('header.create_new_user')"
        :visible.sync="createDialogVisible"
      >
        <el-form
          :model="createForm"
          ref="createForm"
          :rules="createFormRules"
          label-position="left"
        >
          <el-form-item
            :label="$t('label.name')"
            :label-width="formLabelWidth"
            prop="name"
          >
            <el-input
              :placeholder="$t('placeholder.please_input_username')"
              v-model="createForm.name"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="Email"
            :label-width="formLabelWidth"
            prop="email"
          >
            <el-input
              :placeholder="$t('placeholder.please_input_email')"
              v-model="createForm.email"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            :label="$t('label.password')"
            :label-width="formLabelWidth"
            prop="password"
          >
            <el-input
              :placeholder="$t('placeholder.please_input_password')"
              v-model="createForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item
            :label="$t('label.confirm_password')"
            :label-width="formLabelWidth"
            prop="confirmPass"
          >
            <el-input
              :placeholder="$t('placeholder.please_input_password_to_confirm')"
              v-model="createForm.confirmPass"
              show-password
            ></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="createDialogVisible = false">{{
            $t("button.cancel")
          }}</el-button>
          <el-button
            type="primary"
            @click="handleSubmitForm('create', 'createForm')"
            >{{ $t("button.confirm") }}</el-button
          >
        </span>
      </el-dialog>
      <!-- Dialog Edit -->
      <el-dialog
        :title="$t('header.edit_user')"
        :visible.sync="editDialogVisible"
      >
        <el-form
          :model="editForm"
          ref="editForm"
          :rules="editFormRules"
          label-position="left"
        >
          <el-form-item label="Name" :label-width="formLabelWidth" prop="name">
            <el-input
              placeholder="Please input name you want update"
              v-model="editForm.name"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="Email"
            :label-width="formLabelWidth"
            prop="email"
          >
            <el-input
              placeholder="Please input eamil you want update"
              v-model="editForm.email"
            ></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false">{{
            $t("button.cancel")
          }}</el-button>
          <el-button
            type="primary"
            @click="handleSubmitForm('update', 'editForm')"
            >{{$t('button.confirm')}}</el-button
          >
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  middleware: "auth",
  layout: "default",

  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please Input The Password"));
      } else {
        if (this.createForm.confirmPass !== "") {
          this.$refs.createForm.validateField("confirmPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please Input The Password Again"));
      } else if (value !== this.createForm.password) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
    return {
      editDialogVisible: false,
      createDialogVisible: false,
      editForm: {},
      createForm: {},
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      editFormRules: {
        name: [
          {
            required: true,
            message: "Please input Fullname",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: "Please Input Email",
            trigger: "change"
          }
        ]
      },
      createFormRules: {
        name: [
          {
            required: true,
            message: "Please Input Fullname",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: "Please Input Email",
            trigger: "change"
          }
        ],
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
      },
      currentPage: 1,
      formLabelWidth: "180px",
      listFilter: {
        pageIndex: 0,
        pageSize: 10,
        search: ""
      }
    };
  },

  computed: {
    ...mapState("users", ["users", "total"])
  },

  created() {
    this.initData();
  },

  methods: {
    ...mapActions("users", ["getUsers", "updateUser", "createUser"]),
    ...mapActions("session", ["createNewUser"]),

    initData() {
      this.getUsers({ ...this.listFilter });
    },

    handleSizeChange(val) {
      this.listFilter.pageSize = val;
      this.getUsers({ ...this.listFilter });
    },

    handleCurrentChange(val) {
      this.listFilter.pageIndex = val - 1;
      this.getUsers({ ...this.listFilter });
    },

    handleOpenEditDialog(val) {
      if (this.$refs["editForm"]) {
        this.$refs["editForm"].resetFields();
      }
      this.editForm = {
        id: val.id,
        name: val.name,
        email: val.email
      };
      this.editDialogVisible = true;
    },

    handleOpenCreateDialog() {
      if (this.$refs["createForm"]) {
        this.$refs["createForm"].resetFields();
      }
      this.createDialogVisible = true;
    },

    handleSubmitForm(type, formRef) {
      this.$refs[formRef].validate(valid => {
        if (valid) {
          if (type === "create") {
            this.createNewUser({ ...this.createForm }).then(res => {
              if (res && res.data && res.statusText === "Created") {
                this.createUser({ ...res.data }).then(() => {
                  this.createDialogVisible = false;
                  this.$refs[formRef].resetFields();
                  this.$message({
                    message: "Created new user successfully",
                    type: "success"
                  });
                });
              } else {
                this.$message.error("Error");
              }
            });
          } else if (type === "update") {
            this.updateUser({ ...this.editForm }).then(res => {
              if (res) {
                this.editDialogVisible = false;
                this.$refs[formRef].resetFields();
                this.$message({
                  message: "User is updated",
                  type: "success"
                });
              } else {
                this.$message.error("Error");
              }
            });
          }
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
