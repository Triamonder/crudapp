<template>
  <div class="container">
    <h2>New item</h2>
    <formItem :isEditing="isEditing" @onItemSave="saveItem"></formItem>
    <hr />
    <h2>List of items</h2>
    <b-button
      @click="reverseSort = !reverseSort"
      v-if="getItems.length"
      type="is-light button-sort"
      >Reverse sort</b-button
    >
    <listItem
      v-for="item in getItems"
      :id="item.id"
      :title="item.title"
      :body="item.body"
      :isImportant="item.isImportant"
      :key="item.id"
    ></listItem>
  </div>
</template>

<script>
import formItem from "@/components/FormItem";
import listItem from "@/components/ListItem";

import Vue from "vue";
import VueLodash from "vue-lodash";
import lodash from "lodash";

Vue.use(VueLodash, { lodash: lodash });

export default {
  name: "List",
  components: {
    formItem,
    listItem,
  },
  data() {
    return {
      isEditing: false,
      items: [{ title: "title 1", body: "body 1", isImportant: "1" }],
      reverseSort: false,
    };
  },
  methods: {
    saveItem(item) {
      this.$store.commit("addNewItem", item);
    },
  },
  computed: {
    getItems() {
      return Vue.lodash.orderBy(
        this.$store.getters.getItems,
        "title",
        this.reverseSort ? "desc" : "asc"
      );
    },
  },
};
</script>
