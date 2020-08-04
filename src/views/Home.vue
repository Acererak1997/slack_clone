<template>
  <div class="flex h-screen">
    <div class="w-1/5 bg-gray-800 text-white pt-3 px-4">
      <h1 class="font-semibold text-xl leading-tight">Slack Clone</h1>
      <div class="flex items-center">
        <span class="bg-yellow-400 rounded-full w-3 h-3 mr-2"></span>
        <div class="opacity-50">{{ user.email }}</div>
      </div>
      <div class="mt-5 flex justify-between items-center">
        <div class="font-bold opacity-50 text-lg">チャンネル</div>
        <span class="font-bold">+</span>
      </div>
      <div
        class="opacity-50 mt-1"
        v-for="channel in channels"
        :key="channel.id"
      >{{ channel.channel_name }}</div>
      <div class="mt-5 flex justify-between items-center">
        <div class="font-bold opacity-50 text-lg">ダイレクトメッセージ</div>
      </div>
      <div class="mt-2 flex items-center" v-for="user in users" :key="user.user_id">
        <span class="bg-yellow-400 rounded-full w-3 h-3 mr-2"></span>
        <span class="opacity-50">{{ user.email }}</span>
      </div>
    </div>
    <div class="flex-grow bg-gray-100">
      <header class="border-b">
        <div class="flex justify-between m-3">
          <div class="font-bold text-lg">{{ user.email }}</div>
          <div>
            <button class="py-1 px-4 bg-gray-800 text-white rounded" @click="singOut">サインアウト</button>
          </div>
        </div>
      </header>
      <main class="h-full overflow-y-scroll">
        <div class="h-full flex flex-col ml-6">
          <div class="flex-grow overflow-y-scroll">
            <p>メッセージ一覧</p>
          <div class="flex-grow overflow-y-scroll">
            <div class="mt-2 mb-4 flex">
              <Avator :user="user.email" />
              <div class="ml-2">
                <div class="font-bold">{{ user.email }}</div>
                <div>初めてのメッセージ</div>
              </div>
            </div>
          </div>
          </div>
          <div class="border border-gray-900 rounded mb-4">
            <textarea class="w-full pt-4 pl-8 outline-none" placeholder="XXXXさんへのメッセージ"></textarea>
            <div class="bg-gray-100 p-2">
              <button class="bg-green-900 text-sm text-white font-bold py-1 px-2 rounded">送信</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import Avator from "../components/Avator";

export default {
  data() {
    return {
      user: "",
      users: [
        {
          user_id: 11,
          email: "john@example.com",
        },
        {
          user_id: 12,
          email: "kevin@example.com",
        },
        {
          user_id: 13,
          email: "susan@example.com",
        },
      ],
      channels: [
        {
          id: 1,
          channel_name: "営業",
        },
        {
          id: 2,
          channel_name: "マーケティング",
        },
        {
          id: 3,
          channel_name: "情報システム",
        },
      ],
    };
  },
  components: {
    Avator,
  },
  methods: {
    singOut() {
      firebase.auth().signOut();
      this.$router.push("/signin");
    },
  },
  mounted() {
    this.user = firebase.auth().currentUser;
  },
};
</script>

<style>
</style>