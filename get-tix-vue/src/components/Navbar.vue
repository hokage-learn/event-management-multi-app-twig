<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  mobileMenuOpen.value = false
}
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-white shadow-lg border-b border-gray-200' : 'bg-transparent'
    ]"
  >
    <div class="max-w-container mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2">
          <div class="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
          </div>
          <span :class="['text-2xl font-bold transition-colors', scrolled ? 'text-gray-900' : 'text-white']">
            GetTix
          </span>
        </router-link>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            <template v-else>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </template>
          </svg>
        </button>

        <!-- Center Links -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            to="/"
            :class="['font-medium transition-colors', route.path === '/' ? 'text-primary' : scrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary-light']"
          >
            Home
          </router-link>
          <a
            href="#"
            @click.prevent="scrollToSection('features')"
            :class="['font-medium transition-colors', scrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary-light']"
          >
            Features
          </a>
          <a
            href="#"
            @click.prevent="scrollToSection('about')"
            :class="['font-medium transition-colors', scrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary-light']"
          >
            About
          </a>
        </div>

        <!-- Auth CTAs - Hidden on mobile -->
        <div class="hidden md:flex items-center space-x-4 z-50 relative">
          <router-link
            to="/auth/login"
            class="px-4 py-2 rounded-lg font-medium transition-all text-white border border-white/50 hover:bg-white/10"
          >
            Login
          </router-link>
          <router-link
            to="/auth/signup"
            class="px-6 py-2 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
          >
            Get Started
          </router-link>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-200 bg-white">
        <div class="px-4 py-4 space-y-4">
          <router-link
            to="/"
            @click="mobileMenuOpen = false"
            :class="['block py-2 font-medium', route.path === '/' ? 'text-primary' : 'text-gray-700']"
          >
            Home
          </router-link>
          <a
            href="#"
            @click.prevent="scrollToSection('features')"
            class="block py-2 font-medium text-gray-700"
          >
            Features
          </a>
          <a
            href="#"
            @click.prevent="scrollToSection('about')"
            class="block py-2 font-medium text-gray-700"
          >
            About
          </a>
          <div class="pt-4 space-y-3 border-t border-gray-200">
            <router-link
              to="/auth/login"
              @click="mobileMenuOpen = false"
              class="block w-full text-center px-4 py-2 rounded-lg font-medium text-gray-700 border border-gray-300 hover:border-primary"
            >
              Login
            </router-link>
            <router-link
              to="/auth/signup"
              @click="mobileMenuOpen = false"
              class="block w-full text-center px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-primary to-accent hover:from-primary-hover hover:to-accent-hover"
            >
              Get Started
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
