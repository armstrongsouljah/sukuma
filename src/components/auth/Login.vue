<template>
  <base-card>
    <template slot="card-title">
      <h4 class="center">Login</h4>
    </template>

    <template slot="card-content">
      <form class="row">
        <text-input
          input-label="Username"
          placeholder="username or email"
          i-d="username"
          :input-type="'email'"
          :visual-classes="visualClasses"
        />
        <text-input
          input-label="Password"
          placeholder="Password"
          i-d="password"
          :input-type="'password'"
          :visual-classes="visualClasses"
        />
        <base-button
          :button-classes="buttonClasses"
          :wrapper-classes="visualClasses"
          button-type="submit"
        >Login</base-button>
      </form>
    </template>
  </base-card>
</template>
<script>
import BaseCard from "@/components/generics/BaseCard.vue";
import TextInput from "@/components/generics/TextInput";
import BaseButton from "@/components/generics/BaseButton";

export default {
  name: "Login",
  components: {
    BaseCard,
    TextInput,
    BaseButton,
  },
  computed: {
    visualClasses() {
      let classes = ["col", "s12", "input-field"];
      return classes;
    },
    buttonClasses() {
      return ["btn", "btn-waves", "teal"];
    },
  },
};
</script>