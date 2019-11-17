<template>
  <div class="dump-navbar">
    <nav class="navbar navbar-expand-lg navbar-absolute navbar-transparent">
      <div class="container-fluid">
        <div class="navbar-wrapper">
          <div class="navbar-minimize d-inline">
            <button
              class="minimize-sidebar btn btn-link btn-just-icon"
              rel="tooltip"
              data-original-title="Sidebar toggle"
              data-placement="right"
            >
              <i
                class="tim-icons icon-align-center visible-on-sidebar-regular"
              ></i>
              <i
                class="tim-icons icon-bullet-list-67 visible-on-sidebar-mini"
              ></i>
            </button>
          </div>
          <div class="navbar-toggle d-inline">
            <button type="button" class="navbar-toggler">
              <span class="navbar-toggler-bar bar1"></span>
              <span class="navbar-toggler-bar bar2"></span>
              <span class="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <a class="navbar-brand" href="javascript:void(0)">{{
            currentRoute
          }}</a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-bar navbar-kebab"></span>
          <span class="navbar-toggler-bar navbar-kebab"></span>
          <span class="navbar-toggler-bar navbar-kebab"></span>
        </button>
        <ul class="navbar-nav">
          <locale-dropdown />
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li> -->
        </ul>

        <div class="collapse navbar-collapse" id="navigation">
          <ul class="navbar-nav ml-auto">
            <el-dropdown>
              <span class="el-dropdown-link">
                Hi, {{ user.name }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  @click.native="$router.push({ name: 'profile' })"
                  >Profile</el-dropdown-item
                >
                <!-- <el-dropdown-item
                  @click.native="$router.push({ name: 'settings.profile' })"
                  >Setting</el-dropdown-item
                > -->
                <el-dropdown-item @click.native="logout" divided
                  >Log Out</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
            <li class="separator d-lg-none"></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LocaleDropdown from "./LocaleDropdown";
export default {
  components: {
    LocaleDropdown
  },
  data: () => ({
    appName: window.config.appName
  }),
  computed: {
    ...mapGetters("auth", ["user"]),

    currentRoute() {
      return this.$route.name;
    }
  },
  methods: {
    async logout() {
      // Log out the user.
      await this.$store.dispatch("auth/logout");
      // Redirect to login.
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style scoped>
.profile-photo {
  width: 2rem;
  height: 2rem;
  margin: -0.375rem 0;
}
</style>
