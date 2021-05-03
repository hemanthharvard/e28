<template>
  <div id="account-page">
    <form id="loginForm">
      <h2 v-if="createNewUserAccount">Create an account</h2>
      <h2 v-else>Login</h2>
      <div class="form-item">
        <label>
          Username:
          <input
            type="text"
            autocomplete="current-username"
            v-model="data.username"
            data-test="text"
          />
        </label>
      </div>
      <div class="form-item">
        <label>
          Password:
          <input
            type="password"
            autocomplete="current-password"
            v-model="data.password"
            data-test="password-input"
          />
        </label>
      </div>

      <button
        v-if="createNewUserAccount"
        v-on:click="signup"
        data-test="signup-button"
      >
        Signup
      </button>
      <button v-else v-on:click="login" data-test="login-button">Login</button>

      <p class="form-button" v-on:click="toggleForm">
        {{ createNewUserAccount ? "Back to login" : "Create a new account" }}
      </p>

      <ul v-if="errors">
        <li class="error" v-for="(error, index) in errors" :key="index">
          {{ error }}
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
import { default as axios } from "@/common/app.js";

export default {
  data() {
    return {
      createNewUserAccount: false,
      data: {
        username: "",
        password: "",
      },
      errors: [],
    };
  },
  methods: {
    toggleForm() {
      this.createNewUserAccount = !this.createNewUserAccount;
    },
    async login() {
      const response = await axios.post("loginUser", {
        username: this.data.username,
        password: this.data.password,
      });
      if (response.data.status === "success") {
        this.$store.commit("setUsername", this.data.username);
        this.$router.push("/");
      } else {
        this.errors.push(response.data.message);
      }
    },
    async signup() {
      const response = await axios.post("newUser", {
        username: this.data.username,
        password: this.data.password,
      });
      if (response.data.status === "success") {
        this.$store.commit("setUsername", this.data.username);
        this.$router.push("/login");
      } else {
        this.errors.push(response.data.message);
      }
    },
  },
};
</script>