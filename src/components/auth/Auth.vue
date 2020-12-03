<template>
  <div class="container">
    <base-card>
      <template slot="card-title">
        <h4 class="center">{{ cardTitle }}</h4>
      </template>
      <Login slot="card-content" v-if="showLogin" />
      <signup slot="card-content" v-if="showSignup" />
      <template slot="card-footer">
        <div class="row">
          <div class="col s12">
            <ul class="tabs">
              <li class="tab col s6">
                <a @click="displayLogin">Login</a>
              </li>
              <li class="tab col s6">
                <a @click="displaySignup" class="active">Signup</a>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </base-card>
  </div>
</template>
<script>
import Login from "@/components/auth/Login.vue";
import Signup from "@/components/auth/Signup.vue";
import BaseCard from "@/components/generics/BaseCard.vue";

export default {
  name: "Auth",
  components: {
    Login,
    Signup,
    BaseCard,
  },
  data() {
    return {
      showLogin: true,
      showSignup: false,
      cardTitle: "",
    };
  },
  mounted() {
    if (this.showLogin) {
      this.cardTitle = "Login";
    }
  },
  methods: {
    displayLogin() {
      this.cardTitle = 'Login';
      this.showSignup = false;
      this.showLogin = true;
    },
    displaySignup() {
      this.cardTitle = 'Signup';
      this.showSignup = true;
      this.showLogin = false;
    },
  },
};
</script>
<style scoped>
a:hover {
  cursor: pointer;
}
</style>