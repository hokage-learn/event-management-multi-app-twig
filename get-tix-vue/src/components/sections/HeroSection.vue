<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()
const isLoading = ref(false)
const scrollY = ref(0)

const handleGetStarted = async () => {
  isLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 500))
  
  if (authStore.isAuthenticated) {
    router.push('/dashboard')
  } else {
    router.push('/auth/signup')
  }
  isLoading.value = false
}

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section class="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-blue-600 to-indigo-700">
    <!-- Background elements with parallax -->
    <div 
      class="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
      :style="{ transform: `translateY(${scrollY * 0.3}px)` }"
    ></div>
    <div 
      class="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
      :style="{ transform: `translateY(${scrollY * 0.2}px)` }"
    ></div>
    
    <!-- Content with slight parallax -->
    <div 
      class="relative z-10 max-w-container mx-auto px-4 py-12 md:py-16 text-center mt-20"
      :style="{ transform: `translateY(${scrollY * 0.1}px)` }"
    >
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
        Streamline Your Ticket Management
      </h1>
      <p class="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto">
        Efficient ticket tracking and management system for modern teams
      </p>
      <button
        @click="handleGetStarted"
        :disabled="isLoading"
        class="px-6 py-2.5 bg-white text-primary rounded-lg font-semibold text-sm md:text-base hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span v-if="isLoading">Loading...</span>
        <span v-else>Get Started</span>
      </button>
    </div>
    
    <!-- Wave with parallax -->
    <div 
      class="absolute bottom-0 left-0 right-0"
      :style="{ transform: `translateY(${scrollY * 0.15}px)` }"
    >
      <img src="/src/assets/wave-background.svg" alt="Wave" class="w-full h-20 md:h-32" />
    </div>
  </section>
</template>
