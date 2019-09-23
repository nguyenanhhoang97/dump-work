<template>
  <div class="wrapper">
    <navbar />
    <sidebar />
    <child />
    <footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Footer from "../components/RightBar";

export default {
  components: {
    Navbar,
    SideBar,
    Footer
  }
};
</script>

<style>
</style>