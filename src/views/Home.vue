<template>
  <div class="container" style="text-align: center;">
    <img src="@/assets/logo.png" alt="Logo" />
    <h2>Welcome to CRUD Single Page Application</h2>
    <router-link :to="{ name: 'List' }">
      <b-button type="is-success">List of items</b-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
