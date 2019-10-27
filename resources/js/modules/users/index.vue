<template>
  <div class="users">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>USER LIST</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">Create</el-button> -->
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          @click="dialogFormCreate = true"
        >Create User</el-button>
      </div>

      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="userName" label="User Name" width="180"></el-table-column>
        <el-table-column prop="email" label="Email" width="180"></el-table-column>
        <el-table-column prop="url"></el-table-column>
        <el-table-column fixed="right" label width="120">
          <!-- Edit -->
          <el-button type="text" @click="dialogFormVisible = true">Edit</el-button>
          <!-- Delete -->
          <el-button type="text" @click="centerDialogVisible = true">Delete</el-button>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="sizes, prev, pager, next"
        :total="1000"
      ></el-pagination>
      <!-- Dialog Create -->
      <el-dialog title="Create New User" :visible.sync="dialogFormCreate">
        <el-form :model="form">
          <el-form-item label="Name" :label-width="formLabelWidth">
            <el-input placeholder="Please input name" v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Email" :label-width="formLabelWidth">
            <el-input placeholder="Please input your email" v-model="form.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Password" :label-width="formLabelWidth">
            <el-input placeholder="Please input password" v-model="form.passwork" show-password></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogFormCreate = false">Cancel</el-button>
          <el-button type="primary" @click="dialogFormCreate = false">Confirm</el-button>
        </span>
      </el-dialog>
      <!-- Dialog Edit -->
      <el-dialog title="Edit User" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="Name" :label-width="formLabelWidth">
            <el-input placeholder="Please input name you want update" v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Email" :label-width="formLabelWidth">
            <el-input placeholder="Please input eamil you want update" v-model="form.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Password" :label-width="formLabelWidth">
            <el-input placeholder="Please input password" v-model="form.passwork" show-password></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
        </span>
      </el-dialog>
      <!-- Dialog Delete -->
      <el-dialog title="Warning" :visible.sync="centerDialogVisible" width="20%" center>
        <span>You want to Delete ?</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">Confirm</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>  


 <script>
export default {
  data() {
    return {
      tableData: [
        {
          userName: "Martin Garrix",
          email: "martingarrix@gmail.com"
        },
        {
          userName: "Nicky Romero",
          email: "nickyromero@gmail.com"
        },
        {
          userName: "Dimitri Vegas",
          email: "dimitrivegas@gmail.com"
        },
        {
          userName: "Afrojack",
          email: "afrojack@gmail.com"
        },
        {
          userName: "Like Mike",
          email: "likemike@gmail.com"
        },
        {
          userName: "Steve Aoki",
          email: "steveaoki@gmail.com"
        }
      ],
      dialogFormVisible: false,
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
      currentPage: 1,
      formLabelWidth: "120px",
      centerDialogVisible: false,
      dialogFormCreate: false
    };
  },
  methods: {
    handleSizeChange() {
      return;
    },
    handleCurrentChange() {
      return;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>