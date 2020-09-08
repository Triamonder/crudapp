<template>
  <div class="container">
    <form @submit.prevent="saveForm">
      <b-field label="Title">
        <b-input v-model="title" required></b-input>
      </b-field>
      <b-field label="Body">
        <b-input v-model="body" required></b-input>
      </b-field>
      <b-field>
        <b-checkbox v-model="isImportant" :value="isImportant"
          >Important</b-checkbox
        >
      </b-field>
      <b-button native-type="submit" type="is-primary">{{
        isEditing ? "Update" : "Create"
      }}</b-button>
    </form>
  </div>
</template>

<script>
import { minLength, maxLength } from "vuelidate/lib/validators";

export default {
  name: "FormItem",
  props: {
    item: Object,
    isEditing: Boolean,
    itemId: Number,
  },
  data() {
    return {
      id: 0,
      title: "",
      body: "",
      isImportant: false,
    };
  },
  validations: {
    form: {
      title: { min: minLength(4), max: maxLength(80) },
      body: { min: minLength(4), max: maxLength(200) },
    },
  },
  mounted() {
    if (this.isEditing && this.item) {
      console.log(this.item);
      this.id = this.item.id;
      this.title = this.item.title;
      this.body = this.item.body;
      this.isImportant = this.item.isImportant;
    }
  },
  methods: {
    clearForm() {
      this.title = "";
      this.body = "";
      this.isImportant = false;
    },
    saveForm() {
      this.$v.form.$touch();
      if (this.$v.form.$error) return;
      this.$emit("onItemSave", {
        id: this.id,
        title: this.title,
        body: this.body,
        isImportant: this.isImportant,
      });
      this.clearForm();
    },
  },
};
</script>
