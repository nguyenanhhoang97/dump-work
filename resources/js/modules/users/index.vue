<template>
  <div class="users">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{$t('label.user_list')}}</span>
        <el-button style="float: right" type="primary" plain @click="handleOpenCreateDialog()">Create User</el-button>
      </div>
      <el-table :data="users" stripe style="width: 100%">
        <el-table-column prop="id" label="ID" width="100"></el-table-column>
        <el-table-column prop="email" label="Email"></el-table-column>
        <el-table-column prop="name" :label="$t('label.name')"></el-table-column>
        <el-table-column fixed="right" label width="120">
          <template slot-scope="scope">
            <!-- Edit -->
            <el-button type="primary" icon="el-icon-edit" plain @click="handleOpenEditDialog(scope.row)"></el-button>
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
      <el-dialog title="Create New User" :visible.sync="createDialogVisible">
        <el-form :model="createForm" ref="createForm" :rules="createFormRules" label-position="left">
          <el-form-item :label="$t('label.name')" :label-width="formLabelWidth" prop="name">
            <el-input
              placeholder="Please input name"
              v-model="createForm.name"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="Email" :label-width="formLabelWidth" prop="email">
            <el-input
              placeholder="Please input your email"
              v-model="createForm.email"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item :label="$t('label.password')" :label-width="formLabelWidth" prop="password">
            <el-input
              placeholder="Please New Password"
              v-model="createForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item label="Confirm Password" :label-width="formLabelWidth" prop="confirmPass">
            <el-input
              placeholder="Please Input Password To Confirm"
              v-model="createForm.confirmPass"
              show-password
            ></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="createDialogVisible = false">{{$t('button.cancel')}}</el-button>
          <el-button type="primary" @click="handleSubmitForm('create', 'createForm')"
            >Confirm</el-button
          >
        </span>
      </el-dialog>
      <!-- Dialog Edit -->
      <el-dialog title="Edit User" :visible.sync="editDialogVisible">
        <el-form :model="editForm" ref="editForm" :rules="editFormRules" label-position="left">
          <el-form-item label="Name" :label-width="formLabelWidth" prop="name">
            <el-input
              placeholder="Please input name you want update"
              v-model="editForm.name"
            ></el-input>
          </el-form-item>
          <el-form-item label="Email" :label-width="formLabelWidth" prop="email">
            <el-input
              placeholder="Please input eamil you want update"
              v-model="editForm.email"
            ></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="handleSubmitForm('update', 'editForm')"
            >Confirm</el-button
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
        callback(new Error("Please input the password"));
      } else {
        if (this.createForm.confirmPass !== "") {
          this.$refs.createForm.validateField("confirmPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password again"));
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
            message: "Please input Email",
            trigger: "change"
          }
        ],
      },
      createFormRules: {
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
            message: "Please input Email",
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
        pageSize: 100,
        search: ""
      }
    };
  },

  computed: {
    ...mapState("users", ["users", "total"]),
  },

  created() {
    this.initData();
  },

  methods: {
    ...mapActions("users", ["getUsers", "updateUser", "createUser"]),
    ...mapActions("session", ["updateProfile", "createNewUser"]),

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
                this.createUser({...res.data}).then(() => {
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
            this.updateProfile({ ...this.editForm }).then(res => {
              if (res && res.data && res.statusText === "OK") {
                this.updateUser({...res.data}).then(() => {
                  this.editDialogVisible = false;
                  this.$refs[formRef].resetFields();
                  this.$message({
                    message: "Profile updated",
                    type: "success"
                  });
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
  },
};
</script>

<style lang="scss" scoped></style>
