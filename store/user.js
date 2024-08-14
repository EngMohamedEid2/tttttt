import { useCartStore } from "./cart";
export const useUserStore = defineStore("user-store", () => {
  var User = ref({
      isLoggedIn: false,
    }),
    UserInfo = ref({});
  const setDefaultUser = () => {
    if (process.client) {
      if (localStorage.getItem("user-data")) {
        User.value.isLoggedIn = useCookie("isLoggedin").value;
        // console.log("user if", User.value.isLoggedIn);
      } else {
        User.value.isLoggedIn = false;
        // console.log("user else", User.value.isLoggedIn);
      }
    }
  };
  // console.log("user if", User.value.isLoggedIn);
  // console.log("UserInfo", UserInfo);
  const SetUser = (user) => {
    User.value = user;
  };
  const SetUserInfo = ({ user }) => {
    UserInfo.value = user;
  };

  const UpdateUserInfo = async () => {
    let { data: user, error } = await HandleRequest("self", {
      // key: `GetSelfInfo`,
    });
    if (!error.value) {
      UserInfo.value = user.value;
      // console.log(user.value);
    }
  };
  // UpdateUserInfo();
  // console.log(UserInfo.value);

  const LogoutUser = async () => {
    useCookie("uat").value = null;
    UserInfo.value = {};
    User.value.isLoggedIn = false;
    localStorage.removeItem("user-data");
    localStorage.removeItem("user-data2");
    useCookie("isLoggedin").value = null;
    navigateTo("/auth/login");
  };

  const GetUserInfo = async () => {
    await UpdateUserInfo();
  };

  return {
    User,
    UserInfo,
    SetUser,
    SetUserInfo,
    LogoutUser,
    UpdateUserInfo,
    GetUserInfo,
    setDefaultUser,
  };
});
