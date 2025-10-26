<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollY = ref(0)

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
  <section id="features" class="py-12 md:py-16 lg:py-20 bg-gray-50 relative">
    <div 
      class="max-w-container mx-auto px-4 text-center"
      :style="{ transform: `translateY(${Math.max(0, scrollY * 0.05)}px)` }"
    >
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Features</h2>
      <p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8 md:mb-12">
        Powerful features to help you manage your tickets with ease
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Easy Management</h3>
          <p class="text-gray-600 text-sm">Create, update, and track tickets effortlessly</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Real-time Updates</h3>
          <p class="text-gray-600 text-sm">Stay updated with instant notifications</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
          <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Analytics</h3>
          <p class="text-gray-600 text-sm">Track performance with detailed insights</p>
        </div>
      </div>
    </div>
  </section>
</template>
