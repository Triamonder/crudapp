<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.container {
  padding: 0px 15px;
}

#app {
  padding: 30px 0 50px 0;
}

h2 {
  font-size: 32px !important;
  margin-bottom: 20px !important;
}

.item__header {
  font-weight: bold;
  margin-bottom: 10px;
}

.item__body,
.button-sort {
  margin-bottom: 20px;
}

.buttons a {
  text-decoration: none !important;
}
</style>
