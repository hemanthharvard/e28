<template>
  <div id="account-page">
    <div id="loginForm">
      <h2>Login</h2>
      <div>
        <label>
          Username:
          <input type="text" v-model="data.username" data-test="text" />
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
import { default as axios } from "@/common/app.js";

export default {
  data() {
    return {
      data: {
        username: "",
        password: "",
      },
      errors: [],
    };
  },
  methods: {
    async login() {
      const response = await axios.post("loginUser", {
        username: this.data.username,
        password: this.data.password,
      });
      if (response.status === "success") {
        this.$store.commit("setUser", response.data.username);
        this.$store.commit("setPassword", response.data.password);
        this.$router.push("/");
      } else {
        this.errors.push(response.message);
      }
    },
    async createNewUser() {
      const response = await axios.post("newUser", {
        username: this.username,
        password: this.password,
      });
      if (response.status === "success") {
        this.$store.commit("setUser", response.data.username);
        this.$store.commit("setPassword", response.data.password);
        this.$router.push("/login");
      } else {
        this.errors.push(response.message);
      }
    },
  },
};
</script>