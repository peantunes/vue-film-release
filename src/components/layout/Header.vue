<template>
  <div class="header-title">
    <h1>New Releases App</h1>
    <div id="nav">
      <router-link to="/">home</router-link>|
      <router-link to="/about">about</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header-title {
  border-bottom: 2px solid #fff;
  background-color: #00a;
  padding: 20px;
  color: #fff;
  text-align: center;
}
a {
  color: #fff;
  padding-left: 10px;
  padding-right: 10px;
}
h1 {
  padding: 0px;
  margin: 0px;
}
</style>
