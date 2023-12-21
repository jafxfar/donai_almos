import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/productView',
    name: 'productView',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductView.vue')
  },
  {
    path: '/partnerView',
    name: 'PartnerView',
    component: () => import(/* webpackChunkName: "about" */ '../views/PartnerView.vue')
  },
  {
    path: '/aboutUs',
    name: 'aboutUs',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/whyChooseUs',
    name: 'whyChooseUs',
    component: () => import(/* webpackChunkName: "about" */ '../components/WhyChooseUs.vue')
  },
  {
    path: '/geography',
    name: 'the-geography',
    component: () => import(/* webpackChunkName: "about" */ '../components/Geography.vue')
  },
  {
    path: '/variation',
    name: 'the-variation',
    component: () => import(/* webpackChunkName: "about" */ '../components/Variation.vue')
  },
  {
    path: '/contact',
    name: 'the-contact',
    component: () => import(/* webpackChunkName: "about" */ '../components/Contact.vue')
  },
  {
    path: '/product-single-one',
    name: 'product-single-one',
    component: () => import('../components/products/ProductSingleOne.vue')
  }, {
    path: '/product-single-two',
    name: 'product-single-two',
    component: () => import('../components/products/ProductSingleTwo.vue')
  },
  {
    path: '/product-single-three',
    name: 'product-single-three',
    component: () => import('../components/products/ProductSingleThree.vue')
  },
  {
    path: '/product-single-four',
    name: 'product-single-four',
    component: () => import('../components/products/ProductSingleFour.vue')
  },
  {
    path: '/product-single-five',
    name: 'product-single-five',
    component: () => import('../components/products/ProductSingleFive.vue')
  },
  {
    path: '/product-single-six',
    name: 'product-single-six',
    component: () => import('../components/products/ProductSingleSix.vue')
  },
  {
    path: '/product-single-seven',
    name: 'product-single-seven',
    component: () => import('../components/products/ProductSingleSeven.vue')
  }, {
    path: '/product-single-eight',
    name: 'product-single-eight',
    component: () => import('../components/products/ProductSingleEight.vue')
  },
  {
    path: '/product-single-nine',
    name: 'product-single-nine',
    component: () => import('../components/products/ProductSingleNine.vue')
  },
  {
    path: '/product-single-ten',
    name: 'product-single-ten',
    component: () => import('../components/products/ProductSingleTen.vue')
  },
  {
    path: '/product-single-eleven',
    name: 'product-single-eleven',
    component: () => import('../components/products/ProductSingleEleven.vue')
  }, {
    path: '/product-single-twelwe',
    name: 'product-single-twelwe',
    component: () => import('../components/products/ProductSingleTwelwe.vue')
  }, {
    path: '/product-single-thirdteen',
    name: 'product-single-thirdteen',
    component: () => import('../components/products/ProductSingleThirdteen.vue')
  }, {
    path: '/product-single-fourteen',
    name: 'product-single-fourteen',
    component: () => import('../components/products/ProductSingleFourteen.vue')
  }, {
    path: '/product-single-fiveteen',
    name: 'product-single-fiveteen',
    component: () => import('../components/products/ProductSingleFiveteen.vue')
  }, {
    path: '/product-single-sixteen',
    name: 'product-single-sixteen',
    component: () => import('../components/products/ProductSingleSixteen.vue')
  }, {
    path: '/product-single-seventeen',
    name: 'product-single-seventeen',
    component: () => import('../components/products/ProductSingleSeventeen.vue')
  },
  {
    path: '/product-single-eightteen',
    name: 'product-single-eightteen',
    component: () => import('../components/products/ProductSingleEightteen.vue')
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});


export default router
