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
        <create-project-card></create-project-card>
      </el-col>
      <el-col :span="4">
        <project-card></project-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CreateProjectCard from "./CreateProjectCard/index.vue";
import ProjectCard from "./ProjectCard/index.vue";
export default {
  middleware: 'auth',
  layout: "default",

  components: {
    CreateProjectCard,
    ProjectCard
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
