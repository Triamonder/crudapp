import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import Vuelidate from "vuelidate";
import "buefy/dist/buefy.css";
import VueLodash from "vue-lodash";
import lodash from "lodash";

Vue.use(VueLodash, { lodash: lodash });

Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
