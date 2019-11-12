<template>
  <div class="dump-sidebar">
    <div class="navbar-minimize-fixed">
      <button class="minimize-sidebar btn btn-link btn-just-icon">
        <i class="tim-icons icon-align-center visible-on-sidebar-regular text-muted"></i>
        <i class="tim-icons icon-bullet-list-67 visible-on-sidebar-mini text-muted"></i>
      </button>
    </div>
    <div class="sidebar" data="green">
      <!--
        Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red"
      -->
      <div class="sidebar-wrapper">
        <div class="logo">
          <a href="javascript:void(0)" class="simple-text logo-mini">DW</a>
          <a href="javascript:void(0)" class="simple-text logo-normal">dump-work</a>
        </div>
        <ul class="nav">
          <li
            v-for="menu in menus"
            :key="menu.id"
            :class="menu.route == currentRoute ? 'active' : ''"
          >
            <router-link :to="{ name: menu.route }">
              <i :class="menu.icon"></i>
              <p>{{ menu.name }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState("global", ["loading", "menus"]),

    currentRoute() {
      return this.$route.name;
    }
  }
};
</script>

<style>
</style>