import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import About from "@/views/About.vue";
import Frontend from "../layout/Frontend.vue";
import FrontendAfterLogin from "../layout/Frontend_After_Login/FrontendAfterLogin.vue"
import Product from "@/views/FrontendviewsAfterLogin/Product.vue";
import Cart from "@/views/FrontendviewsAfterLogin/Cart.vue";
import Contact from "@/views/Contact.vue";
import AboutAfterlogin from "../views/FrontendviewsAfterLogin/AboutAfterlogin.vue";
import contactAfterlogin from "../views/FrontendviewsAfterLogin/ContactAfterlogin.vue"
import NotFound from "../views/NotFound.vue"
import Backend from "../layout/Backend/Backend.vue"
import Dashboard from "../views/Backend.vue/Dashboard.vue"
import Check_items_for_sale from "../views/Backend.vue/Check_items_for_sale.vue";
import Increase_and_decrease_the_product from "../views/Backend.vue/Increase_and_decrease_the_product.vue";
import Login_admin from "../views/FrontendviewsAfterLogin/Login_admin.vue"

function authGuard(to, from, next) {
  let authen = false;
  if (localStorage.getItem("user")) {
    authen = true;
  } else {
    authen = false;
  }

  if (authen) {
    next();
  } else {
    next({ name: "Signin" });
  }
}




Vue.use(VueRouter);

const routes = [
  {
    // ก่อน Login
    path: "/",
    name: "Frontend",
    component: Frontend,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "register",
        name: "Register",
        component: Register,
      },
      {
        path: "login",
        name: "Login",
        component: Login,
      }, 
      {
        path: "about",
        name: "about",
        component: About,
      },
      {
        path: "contact",
        name: "Contact",
        component: Contact,
      },

       {
        path: "login_admin",
        name: "Login_admin",
        component:Login_admin,
      },
    ],
  },


    // หลัง Login
  {
    path: "/frontend",
    name: "FrontendAfterLogin",
    component: FrontendAfterLogin,
    beforeEnter: authGuard,
    children: [
      {
        path: "product",
        name: "Product",
        component: Product,
      },
      {
        path: "cart",
        name: "Cart",
        component: Cart,
      },
      {
        path: "aboutAfterlogin",
        name: "AboutAfterlogin",
        component: AboutAfterlogin,
      },
      {
        path: "contactAfterlogin",
        name: "ContactAfterlogin",
        component:contactAfterlogin,
      },
     

    ],

  },

  {
    path: "/backend",
    name: "Backend",
    component: Backend,
    beforeEnter: authGuard,
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "check_items_for_sale",
        name: "Check_items_for_sale",
        component: Check_items_for_sale,
      },
      {
        path: "increase_and_decrease_the_product",
        name: "Increase_and_decrease_the_product",
        component: Increase_and_decrease_the_product,
      },
      
    ]

  },
  {
    path:"/:catchAll(.*)",
    component : NotFound
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
