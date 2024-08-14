// import { storeToRefs } from "pinia";
import { useUserStore } from "~~/store/user";
const ProtectedRoutes = [
  "/checkout",
  "/compare",
  "/wishlist",
  "/account/dashboard",
  "/account/notifications",
  "/account/addresses",
  "account/wallet",
  "/account/point",
  "/account/order",
  "/account/refund",
  "/account/bank-details",
];

const SetUser = async () => {
  let { UserInfo } = storeToRefs(useUserStore());
  let ToReturn = true;
  let { data: user, error } = await useFetch("self", {
    baseURL: BaseUrl,
    headers: GetHeaders(),
    method: "get",
    cache: false,
    key: `GetSelfInfo`,
  });
  if (!error.value) {
    useUserStore().SetUserInfo({ user: user.value });
  } else {
    ToReturn = false;
    // console.log("not done");
  }
  return ToReturn;
};

export default defineNuxtRouteMiddleware(async (to, from) => {
  useCookie("isLoggedin").value && (await SetUser());
  useCookie("isLoggedin").value && (useUserStore().User.isLoggedIn = true);

  // console.log("1 + 1");

  if (ProtectedRoutes.some((paths) => to.path.includes(paths))) {
    if (useUserStore().User.isLoggedIn == false) {
      return navigateTo("/auth/login");
    }
  }
  if (
    useUserStore().User.isLoggedIn &&
    (to.path == "/auth/login" || to.path == "/auth/register")
  ) {
    return navigateTo("/");
  }

  if (process.client) {
    setTimeout(() => {
      SetBGImage();
    }, 2000);
  }
  // console.log(process);
  // console.log(to);
  // console.log(from);
  // console.log(useUserStore().UserInfo);
  // console.log(useUserStore().User.isLoggedIn);
});
