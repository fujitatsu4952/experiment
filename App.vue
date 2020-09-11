<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <button @click="create">osuosu</button>
    </div>
    <router-view />
  </div>
</template>

<script>
import Methods from "@/api/methods";

export default {
  methods: {
    // サーバーから返ってくる値をログに出力したいのでasyncとawaitを行う
    async create() {
      console.log("3000");
      let response = await Methods.testPosting();
      console.log(response.data);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
