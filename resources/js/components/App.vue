<template>
  <div class="wrapper">
    <sidebar />
    <div class="main-panel" data="green">
      <navbar />
      <!-- Content -->
      <div class="content">
        <router-view></router-view>
      </div>
      <app-footer />
    </div>
  </div>
</template>

<style>
</style>


<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import AppFooter from "./AppFooter";

export default {
  name: "App",

  components: {
    Navbar,
    Sidebar,
    AppFooter
  }
};
</script>