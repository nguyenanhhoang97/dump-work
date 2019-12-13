<template>
  <div class="create-project-card">
    <div
      class="friend-item friend-groups create-group"
      data-mh="friend-groups-item"
      style="height: 391px;"
    >
      <a href="#" class="full-block" data-toggle="modal" data-target="#create-friend-group-1"></a>
      <div class="content">
        <el-button type="primary" icon="el-icon-plus" circle></el-button>

        <div class="author-content">
          <a href="#" class="h5 author-name">{{$t('button.new_project')}}</a>
          <div class="country">{{$t('label.create_new_project')}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.create-project-card {
  .create-group {
    background-color: transparent;
    border: 2px dashed #bbc0d5;
    position: relative;

    .content {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: 90%;
      text-align: center;

      .bg-blue {
        background-color: #38a9ff;
      }

      .author-content {
        margin-top: 1rem;
      }
    }
  }

  .friend-item {
    border-radius: 5px;
    overflow: hidden;
  }
}
</style>