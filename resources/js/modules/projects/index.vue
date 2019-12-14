<template>
  <div class="projects">
    <div class="main-header">
      <div class="content-bg-wrap bg-group"></div>
      <div class="container">
        <div class="row">
          <div class="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
            <div class="main-header-content">
              <h1>{{$t('label.welcome_to_dump_work')}}</h1>
              <p>
                Welcome to dump-work! <br> Have a good Day ^.^ <br> Blah blah
                blah blah blah blah blah blah blah blah blah blah blah blah blah.
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
        <project-card
          :project="item"
          @change="handleProjectActionChange"
        ></project-card>
      </el-col>
    </el-row>

    <!-- Create/Update Project Dialog -->
    <el-dialog
      :title="projectTitleDialog"
      :visible.sync="projectDialogFormVisible"
    >
      <el-form
        :model="projectForm"
        :rules="projectFormRules"
        ref="projectForm"
        label-position="left"
      >
        <el-form-item
          :label="$t('label.project_name')"
          :label-width="formLabelWidth"
          prop="projectName"
        >
          <el-input
            v-model="projectForm.projectName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          :label="$t('label.project_description')"
          :label-width="formLabelWidth"
          prop="projectDescription"
        >
          <el-input
            v-model="projectForm.projectDescription"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          :label="$t('label.team_size')"
          :label-width="formLabelWidth"
          prop="teamSize"
        >
          <el-input
            v-model="projectForm.teamSize"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="Git Url"
          :label-width="formLabelWidth"
          prop="gitUrl"
        >
          <el-input v-model="projectForm.gitUrl" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          :label="$t('label.excution_time')"
          :label-width="formLabelWidth"
          prop="excutionTime"
        >
          <el-input
            v-model="projectForm.excutionTime"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('label.cost')" :label-width="formLabelWidth" prop="cost">
          <el-input v-model="projectForm.cost" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item :label="$t('label.income')" :label-width="formLabelWidth" prop="incom">
          <el-input v-model="projectForm.incom" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          :label="$t('label.guarantee')"
          :label-width="formLabelWidth"
          prop="guarantee"
        >
          <el-input
            v-model="projectForm.guarantee"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{$t('button.cancel')}}</el-button>
        <el-button type="primary" @click.native="handleSubmitForm()"
          >{{$t('button.confirm')}}</el-button
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
      selectedProject: {},
      currentFormType: "",
      projectFormRules: {
        projectName: [
          {
            required: true,
            message: "Please input Project name",
            trigger: "blur"
          }
        ],
        projectDescription: [
          {
            required: true,
            message: "Please input Project Description",
            trigger: "change"
          }
        ],
        teamSize: [
          {
            required: true,
            message: "Please input Team Size",
            trigger: "change"
          }
        ],
        gitUrl: [
          {
            required: true,
            message: "Please input Git Url",
            trigger: "change"
          }
        ],
        excutionTime: [
          {
            required: true,
            message: "Please input Git Url",
            trigger: "change"
          }
        ],
        cost: [
          {
            required: true,
            message: "Please input Cost",
            trigger: "change"
          }
        ],
        incom: [
          {
            required: true,
            message: "Please input Income",
            trigger: "change"
          }
        ],
        guarantee: [
          {
            required: true,
            message: "Please input Guarantee",
            trigger: "change"
          }
        ]
      }
    };
  },

  computed: {
    ...mapState("projects", ["projects"])
  },

  created() {
    this.initData();
  },

  methods: {
    ...mapActions("projects", [
      "getProjects",
      "createNewProject",
      "updateProject",
      "deleteProject"
    ]),

    initData() {
      this.getProjects({ ...this.listFilter });
    },

    handleProjectActionChange(type, item) {
      if (type === "update") {
        this.selectedProject = item;
        this.projectForm = {
          id: this.selectedProject.id,
          projectName: this.selectedProject.project_name,
          projectDescription: this.selectedProject.project_description,
          teamSize: this.selectedProject.team_size,
          gitUrl: this.selectedProject.git_url,
          excutionTime: this.selectedProject.execution_time,
          cost: this.selectedProject.cost,
          incom: this.selectedProject.incom,
          guarantee: this.selectedProject.guarantee
        };
        this.handleOpenProjectDialog("update");
      } else if (type === "delete") {
        this.selectedProject = item;
        this.projectForm = {
          id: this.selectedProject.id
        };
        this.$confirm("Are you sure to delete this project?", "Warning", {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning"
        })
          .then(() => {
            this.deleteProject({ ...this.projectForm }).then(res => {
              if (res && res.project) {
                this.projectForm = {};
                this.$notify({
                  title: "Success",
                  message: res.message,
                  type: "success"
                });
              }
            });
          })
          .catch(() => {
            return false;
          });
      }
    },

    handleOpenProjectDialog(type) {
      if (this.$refs["projectForm"]) {
        this.$refs["projectForm"].resetFields();
      }
      this.projectDialogFormVisible = true;
      if (type === "create") {
        this.projectForm = {};
        this.projectTitleDialog = "Create New Project";
        this.currentFormType = type;
      } else if (type === "update") {
        this.projectTitleDialog = "Update Project";
        this.currentFormType = type;
      }
    },

    handleSubmitForm() {
      this.$refs["projectForm"].validate(valid => {
        if (valid) {
          if (this.currentFormType === "create") {
            this.createNewProject({ ...this.projectForm }).then(res => {
              if (res && res.project) {
                this.projectDialogFormVisible = false;
                this.$refs["projectForm"].resetFields();
                this.projectForm = {};
                this.$notify({
                  title: "Success",
                  message: res.message,
                  type: "success"
                });
              }
            });
          } else if (this.currentFormType === "update") {
            this.updateProject({ ...this.projectForm }).then(res => {
              if (res && res.project) {
                this.projectDialogFormVisible = false;
                this.$refs["projectForm"].resetFields();
                this.projectForm = {};
                this.$notify({
                  title: "Success",
                  message: res.message,
                  type: "success"
                });
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
