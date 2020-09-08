<template>
  <b-message :type="isImportant ? 'is-info' : ''">
    <div class="item__header">{{ title }}</div>
    <div class="item__body">{{ body }}</div>
    <div class="buttons">
      <router-link :to="{ name: 'Detail', params: { id: id } }">
        <b-button type="is-warning is-light">Edit</b-button>
      </router-link>
      <b-button @click.prevent="removeItem(id)" type="is-danger is-light"
        >Remove</b-button
      >
    </div>
  </b-message>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    id: Number,
    title: String,
    body: String,
    isImportant: Boolean,
  },
  methods: {
    removeItem(id) {
      this.$store.commit("removeItem", id);
    },
  },
};
</script>
