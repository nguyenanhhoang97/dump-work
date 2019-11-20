<template>
  <div class="projects">
    <div class="main-header">
      <div class="content-bg-wrap bg-group"></div>
      <div class="container">
        <div class="row">
          <div class="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
            <div class="main-header-content">
              <h1>Welcome to dump-work!</h1>
              <p>
                Welcome to dump-work! This is the testing message. Blah blah
                blah blah blah blah blah blah blah blah blah blah blah blah blah
                blah blah blah blah blah blah blah blah blah blah blah blah blah
                blah blah blah blah blah.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        class="img-bottom"
        src="http://html.crumina.net/html-olympus/img/group-bottom.png"
        alt="friends"
      />
    </div>
    <el-row :gutter="20">
      <el-col :span="4">
        <create-project-card
          @click.native="handleOpenProjectDialog('create')"
        ></create-project-card>
      </el-col>
      <el-col :span="4" v-for="item in projects" :key="item.id">
        <project-card :project="item" @change="handleProjectActionChange"></project-card>
      </el-col>
    </el-row>

    <!-- Create/Update Project Dialog -->
    <el-dialog
      :title="projectTitleDialog"
      :visible.sync="projectDialogFormVisible"
    >
      <el-form :model="projectForm" label-position="left">
        <el-form-item label="Project Name" :label-width="formLabelWidth">
          <el-input
            v-model="projectForm.projectName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Project Description" :label-width="formLabelWidth">
          <el-input
            v-model="projectForm.projectDescription"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Team Size" :label-width="formLabelWidth">
          <el-input
            v-model="projectForm.teamSize"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Git Url" :label-width="formLabelWidth">
          <el-input v-model="projectForm.gitUrl" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Excution Time" :label-width="formLabelWidth">
          <el-input
            v-model="projectForm.excutionTime"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Income" :label-width="formLabelWidth">
          <el-input v-model="projectForm.incom" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Guarantee" :label-width="formLabelWidth">
          <el-input
            v-model="projectForm.guarantee"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >Confirm</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CreateProjectCard from "./CreateProjectCard/index.vue";
import ProjectCard from "./ProjectCard/index.vue";

export default {
  middleware: "auth",
  layout: "default",

  components: {
    CreateProjectCard,
    ProjectCard
  },

  data() {
    return {
      projectTitleDialog: "",
      projectForm: {},
      formLabelWidth: "220px",
      projectDialogFormVisible: false,
      listFilter: {
        pageIndex: 0,
        pageSize: 1000,
        search: ""
      },
      selectedProject: {}
    };
  },

  computed: {
    ...mapState("projects", ["projects"])
  },

  created() {
    this.initData();
  },

  methods: {
    ...mapActions("projects", ["getProjects"]),

    initData() {
      this.getProjects({ ...this.listFilter });
    },

    handleProjectActionChange(type, item) {
      if (type === "update") {
        this.selectedProject = item;
        this.handleOpenProjectDialog("update");
      } else if (type === "delete") {
        this.selectedProject = item;
      }
    },

    handleOpenProjectDialog(type) {
      this.projectDialogFormVisible = true;
      if (type === "create") {
        this.projectTitleDialog = "Create New Project";
      } else if (type === "update") {
        this.projectTitleDialog = "Update Project"
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.projects {
  .el-card {
    width: 18rem;
    .project-info {
      .project-thumb {
        margin: auto;
        width: 50%;
        width: 120px;
        height: 120px;
        border-radius: 100px;
        line-height: 120px;
        background-color: #d7d9e5;
        margin-bottom: 20px;
        overflow: hidden;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        img {
          border: none;
          display: block;
          margin: auto;
        }
        @keyframes slide {
          from {
            background-position: 0 0;
          }
          to {
            background-position: -4000px 0;
          }
        }
      }
      .project-name {
        margin: auto;
        width: 50%;
        p,
        pre {
          text-align: center;
        }
      }
    }
    .project-action {
      margin-top: 1.5rem;
      padding-left: 2.8rem;
    }
  }
  .main-header {
    padding: 70px 0 70px 0;
    margin: 0 auto 30px;
    position: relative;
    background-position: 50% 50%;
    .bg-group {
      background-image: url(http://html.crumina.net/html-olympus/img/bg-group.png);
    }
    .content-bg-wrap {
      background-position: 0 0;
      background-repeat: repeat;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      text-align: center;
      box-sizing: border-box;
      -webkit-animation: slide 50s linear infinite;
      animation: slide 50s linear infinite;
      will-change: background-position;
      background-size: auto;
    }
    .content-bg-wrap:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 1;
      z-index: auto;
    }
    .container {
      h1 {
        color: #fff;
        text-align: center;
      }
      p {
        color: #fff;
        text-align: center;
      }
    }
    .img-bottom {
      position: relative;
      display: block;
      margin: 20px auto 0;
      margin-bottom: -70px;
    }
  }
}
</style>
