import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";
import router from "../src/router/index";
import Cookies from "js-cookie";
const store = createStore({
  state() {
    return {
      token: "",
      proFile: "",
      userID: "",
      userName: "",
      role: "",
      isChatbotEnabled: false,
      photo: "",
    };
  },
  getters: {},
  mutations: {
    toggleChatbot(state) {
      state.isChatbotEnabled = !state.isChatbotEnabled;
    },
    setPhoto(state, photo) {
      console.log(photo);
      state.photo = photo;
      const expirationTime = new Date();
      expirationTime.setTime(expirationTime.getTime() + 3 * 60 * 60 * 1000); // Set expiration time to 3 hours from now
      Cookies.set("photo", photo, { expires: expirationTime });
    },
    setToken(state, token) {
      state.token = token;
      const expirationTime = new Date();
      expirationTime.setTime(expirationTime.getTime() + 3 * 60 * 60 * 1000); // Set expiration time to 3 hours from now
      Cookies.set("token", token, { expires: expirationTime });
    },
    setUserName(state, userName) {
      state.userName = userName;
      const expirationTime = new Date();
      expirationTime.setTime(expirationTime.getTime() + 3 * 60 * 60 * 1000); // Set expiration time to 3 hours from now
      Cookies.set("userName", userName, { expires: expirationTime });
    },
    setRole(state, role) {
      state.role = role;
      console.log(state.role);
      const expirationTime = new Date();
      expirationTime.setTime(expirationTime.getTime() + 3 * 60 * 60 * 1000); // Set expiration time to 3 hours from now
      Cookies.set("role", role, { expires: expirationTime });
    },
    setUserID(state, UserID) {
      state.userID = UserID;
      const expirationTime = new Date();
      expirationTime.setTime(expirationTime.getTime() + 3 * 60 * 60 * 1000); // Set expiration time to 3 hours from now
      Cookies.set("UserID", UserID, { expires: expirationTime });
    },
    removeToken(state) {
      state.token = "";
      state.proFile = {};
      state.userID = "";
      state.userName = "";
      state.role = "";
      state.photo = "";
      Cookies.remove("token");
      Cookies.remove("proFile");
      Cookies.remove("UserID");
      Cookies.remove("role");
      Cookies.remove("userName");
      Cookies.remove("photo");
    },
    setProfile(state, proFile) {
      state.proFile = proFile;
      const expirationTime = new Date();
      expirationTime.setTime(expirationTime.getTime() + 3 * 60 * 60 * 1000); // Set expiration time to 3 hours from now
      Cookies.set("proFile", JSON.stringify(proFile), {
        expires: expirationTime,
      });
    },
  },
});
const app = createApp(App);
app.config.globalProperties.$cookies = Cookies;
app.use(router);
app.use(store);
app.mount("#app");
