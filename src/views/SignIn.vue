<template>
  <div>
   <header class="flex justify-between p-4 border-b items-center">
      <h1 class="font-semibold text-xl leading-tight">Slack Clone</h1>
      <button class="py-1 px-4 border-2 border-green-800 rounded">
        <router-link to="/signin">Slackをはじめる</router-link>
      </button>
    </header>
    <div>
      <form @submit.prevent="signIn">
        <div class="mb-2">
          <input
            type="email"
            placeholder="example@example.com"
            class="text-xl w-3/5 p-3 border rounded"
            v-model="email"
          />
        </div>
        <div class="mb-2">
          <input
            type="password"
            class="text-xl w-3/5 p-3 border rounded"
            placeholder="パスワード"
            v-model="password"
          />
        </div>
        <button type="submit" class="text-x1 w-3/5 bg-green-800 text-white py-2 rounded">サインイン</button>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signIn(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(response =>{
        console.log(response);
        this.$router.push("/")
      })
      .catch(e =>{
        console.log(e);
      })
    }
  }
};
</script>