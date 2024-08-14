<template>
  <div class="mobile-menu d-md-none d-block mobile-cart">
    <ul>
      <li  :class="{ 'active': menu.active }" v-for="menu in menuItem" :key="menu">
        <nuxt-link :to="menu.path" @click="activeMenu(menu)">
          <Icon :name="menu.active ? `${menu.icon}-fill` : `${menu.icon}-line`"></Icon>
          <span>{{ menu.title }}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
let menuItem = [
  {
    id: 1,
    active: true,
    title: 'Home',
    icon: 'ri-home-2',
    path: '/'
  },
  {
    id: 2,
    active: false,
    title: 'Category',
    icon: 'ri-apps',
    path: '/collections'
  },
  {
    id: 3,
    active: false,
    title: 'Search',
    icon: 'ri-search-2',
    path: '/search'
  },
  {
    id: 4,
    active: false,
    title: 'My Wish',
    icon: 'ri-heart-3',
    path: '/wishlist'
  },
  {
    id: 5,
    active: false,
    title: 'Cart',
    icon: 'ri-shopping-bag',
    path: '/cart'
  }
]
let router = useRouter()
let route = useRoute()

const handleNavigation = () => {
  menuItem.forEach((menu) => {
    menu.active = false
    if (route?.path === menu.path) {
      menu.active = true
    }
  })
}

function activeMenu(menu) {
  menuItem.forEach(item => {
    menuItem.includes(menu)
    item.active = false;
  })
  menu.active = !menu.active
}

onMounted(() => {
  menuItem.forEach((menu) => {
    menu.active = false
    if (route?.path === menu.path) {
      menu.active = true
    }
  })
  // Subscribe to route changes
  router.afterEach(handleNavigation())
})
</script>