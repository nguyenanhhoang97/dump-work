<template>
  <div>
    <h1>dump-work</h1>

    <p>
      <router-link :to="{ name: 'home' }">Home</router-link>|
      <router-link :to="{ name: 'hello-world' }">Hello World</router-link>
    </p>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {};
</script>