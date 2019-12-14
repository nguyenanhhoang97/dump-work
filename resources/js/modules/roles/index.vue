<template>
  <div class="users">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Roles</span>
      </div>
      <el-table :data="roles" stripe style="width: 100%">
        <el-table-column type="index" width="50"> </el-table-column>
        <el-table-column prop="role_name" label="Name"></el-table-column>
        <el-table-column prop="role_code" label="Role Code"></el-table-column>
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
    </el-card>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  middleware: "auth",
  layout: "default",

  data() {
    return {
      currentPage: 1,
      listFilter: {
        pageIndex: 0,
        pageSize: 10,
        search: ""
      }
    };
  },

  computed: {
    ...mapState("roles", ["roles", "total"]),
    ...mapState("auth", ["user"]),
    ...mapState("global", ["routes"]),

    currentRoute() {
      return this.$route.name;
    }
  },

  created() {
    if (!this.checkRolePage()) {
      this.$router.push({ name: "*" });
    }
    this.initData();
  },

  methods: {
    ...mapActions("roles", ["getRoles"]),

    initData() {
      this.getRoles({ ...this.listFilter });
    },

    handleSizeChange(val) {
      this.listFilter.pageSize = val;
      this.getRoles({ ...this.listFilter });
    },

    handleCurrentChange(val) {
      this.listFilter.pageIndex = val - 1;
      this.getRoles({ ...this.listFilter });
    },

    checkRolePage() {
      const currentRole = this.currentRoute;
      const idx = this.routes.findIndex(elm => elm.name === currentRole);
      const { roles } = this.routes[idx];
      const { role_code: role } = this.user;
      const checked = roles.includes(role);
      return !!checked;
    }
  }
};
</script>

<style lang="scss" scoped></style>
