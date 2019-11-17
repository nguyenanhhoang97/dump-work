<template>
  <div class="project-card">
    <div class="ui-block" data-mh="friend-groups-item" style="height: 391px;">
      <!-- Friend Item -->

      <div class="friend-item friend-groups">
        <div class="friend-item-content">
          <!-- <div class="more">
            <el-dropdown>
              <span class="el-dropdown-link">
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item disabled>Action 4</el-dropdown-item>
                <el-dropdown-item divided>Action 5</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div> -->
          <div class="friend-avatar">
            <div class="author-thumb">
              <!-- <img src="http://html.crumina.net/html-olympus/img/friend-group1.png" alt="photo" /> -->
              <el-avatar :size="120"> {{ getCharImg(project.project_name) }} </el-avatar>
            </div>
            <div class="author-content">
              <a href="#" class="h5 author-name">{{ project.project_name }}</a>
              <div class="country">{{ project.project_description }}</div>
            </div>
          </div>

          <div class="control-block-button">
            <el-button type="success" icon="el-icon-edit" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </div>
        </div>
      </div>

      <!-- ... end Friend Item -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: { type: Object, default: null },
  },

  methods: {
    getCharImg(content) {
      return (content.match(/\b(\w)/g)).join('');
    }
  }
};
</script>

<style lang="scss" scoped>
.el-avatar {
  font-size: 40px;
  font-weight: bold;
  background: linear-gradient(0deg, #0098f0 0%, #00f2c3 100%);
}

.project-card {
  .ui-block {
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #e6ecf5;
    margin-bottom: 15px;

    .friend-item {
      border-radius: 5px;
      overflow: hidden;

      .friend-item-content {
        padding: 25px;
        text-align: center;
        position: relative;

        .more {
          top: 0;
          right: 10px;
          z-index: 5;
          position: absolute;
          font-size: 16px;
          padding: 10px;
          transition: all 0.3s ease;
          color: #888da8;
          fill: #c0c4d8;
        }

        .friend-avatar {
          margin-top: 2rem;
          position: relative;
          margin-bottom: 30px;

          .author-content {
            margin-top: 1rem;

            .author-thumb {
              width: 120px;
              height: 120px;
              border-radius: 100px;
              line-height: 120px;
              background-color: #d7d9e5;
              margin-bottom: 20px;
              overflow: hidden;
              display: flex;
              margin: 0 auto;
              position: relative;
            }
            .h5 {
              font-size: 1rem;
              margin-bottom: 0.5rem;
              font-weight: 700;
              line-height: 1.3;
            }
          }
        }

        .country {
          font-size: 11px;
        }

        ul {
          list-style: none;
          padding: 0;
          margin-top: 0;
        }

        .control-block-button {
          margin-bottom: 15px;
          position: relative;
        }
      }
    }

    .el-avatar .el-avatar--circle {
      font-size: xx-large;
    }
  }
}
</style>
