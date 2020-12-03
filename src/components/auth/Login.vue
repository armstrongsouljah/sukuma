<template>
  <div>
      <form class="row">
        <text-input
          input-label="Username"
          placeholder="username or email"
          i-d="username"
          :input-type="'email'"
          :visual-classes="visualClasses"
          :value="userName"
          v-model="userName"
        />
        <text-input
          input-label="Password"
          placeholder="Password"
          i-d="password"
          :input-type="'password'"
          :visual-classes="visualClasses"
          :value="password"
          v-model="password"
        />
        <base-button
          :button-classes="buttonClasses"
          :wrapper-classes="visualClasses"
          button-type="submit"
        >Login</base-button>
      </form>
  </div>
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
  data(){
     return {
         userName: '',
         password: ''
     }
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