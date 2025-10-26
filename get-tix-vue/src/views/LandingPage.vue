<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import Navbar from '@/components/Navbar.vue'

const router = useRouter()
const authStore = useAuthStore()
const isLoading = ref(false)

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
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-emerald-600 to-green-700">
      <div class="absolute inset-0">
        <div class="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
      </div>
      
      <div class="relative z-10 max-w-container mx-auto px-4 py-32 text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
          Streamline Your Ticket Management
        </h1>
        <p class="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Efficient ticket tracking and management system for modern teams
        </p>
        <button
          @click="handleGetStarted"
          :disabled="isLoading"
          class="px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="isLoading">Loading...</span>
          <span v-else>Get Started</span>
        </button>
      </div>
      
      <div class="absolute bottom-0 left-0 right-0">
        <img src="/src/assets/wave-background.svg" alt="Wave" class="w-full h-full" />
      </div>
    </section>
    
    <!-- Placeholder sections -->
    <section id="about" class="py-20 bg-white">
      <div class="max-w-container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">About GetTix</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Your one-stop solution for managing tickets efficiently and effectively.
        </p>
      </div>
    </section>
    
    <section id="features" class="py-20 bg-gray-50">
      <div class="max-w-container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Features</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Powerful features to help you manage your tickets with ease.
        </p>
      </div>
    </section>
    
    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-container mx-auto px-4 text-center">
        <p class="text-gray-400">&copy; 2024 GetTix. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
