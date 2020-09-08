<template>
  <div class="container">
    <h2>Detail</h2>
    <formItem
      :isEditing="isEditing"
      @onItemSave="updateItem"
      :item="getEditingItem"
    ></formItem>
  </div>
</template>

<script>
import formItem from "@/components/FormItem";

export default {
  name: "List",
  components: {
    formItem,
  },
  data() {
    return {
      isEditing: true,
    };
  },
  methods: {
    updateItem(item) {
      console.log(item);
      this.$store.commit("updateItem", item);
      this.$router.push({ path: "/list" });
    },
  },
  computed: {
    getEditingItem() {
      return this.$store.getters.getItems.find(
        (item) => item.id === this.$route.params.id
      );
    },
  },
};
</script>
