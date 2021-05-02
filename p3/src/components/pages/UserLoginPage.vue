<template>
  <div id="account-page">
    <div v-if="user">
      <button v-on:click="logout" data-test="logout-button">Logout</button>
    </div>

    <div v-else id="loginForm">
      <h2>Login</h2>
      <small>
        (Form is prefilled for demonstration purposes; remove in final
        application)
      </small>
      <div>
        <label>
          Email:
          <input type="text" v-model="data.email" data-test="email-input" />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            v-model="data.password"
            data-test="password-input"
          />
        </label>
      </div>

      <button v-on:click="login" data-test="login-button">Login</button>

      <ul v-if="errors">
        <li class="error" v-for="(error, index) in errors" :key="index">
          {{ error }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
  data() {
    return {
      // Form is prefilled for demonstration purposes; remove in final application
      // jill@harvard.edu/asdfasdf is one of our seed users from e28api/seeds/user.json
      data: {
        email: "",
        password: "",
      },
      errors: null,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    async createNewUser() {
      const response = await axios.post("newUser", {
        username: this.username,
        password: this.password,
      });
      if (response.status === "success") {
        this.$store.commit("setUser", response.data.username);
        this.$store.commit("setPassword", response.data.password);
      }
    },
    async logout() {
      axios.post("logout").then((response) => {
        if (response.status === "success") {
          this.$store.commit("setUser", null);
          this.$store.commit("setPassword", null);
        }
      });
    },
  },
  watch: {
    user() {
      this.loadFavorites();
    },
  },
  mounted() {
    this.loadFavorites();
  },
};
</script>