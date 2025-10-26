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
        <section id="features" class="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-white relative">
        <div
          class="max-w-container mx-auto px-4"
          :style="{ transform: `translateY(${Math.max(0, scrollY * 0.05)}px)` }"
        >
          <div class="text-center mb-10 md:mb-12">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Powerful Features</h2>
            <p class="text-base text-gray-600 max-w-2xl mx-auto">
          Everything you need to manage tickets efficiently
        </p>
      </div>
      
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Feature 1 -->
                    <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                    <div class="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Create & Edit</h3>
              <p class="text-gray-600 leading-relaxed text-sm">
            Create tickets instantly with all essential details. Edit on-the-fly with our inline editing capabilities and auto-save functionality.
          </p>
        </div>

        <!-- Feature 2 -->
        <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div class="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">Organize & Track</h3>
          <p class="text-gray-600 leading-relaxed text-sm">
            Organize tickets by status, priority, or custom tags. Track progress with visual status indicators and timeline views.
          </p>
        </div>

        <!-- Feature 3 -->
        <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div class="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">Smart Search</h3>
          <p class="text-gray-600 leading-relaxed text-sm">
            Find tickets instantly with our powerful search engine. Filter by multiple criteria and save custom search queries for quick access.
          </p>
        </div>

        <!-- Feature 4 -->
        <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div class="w-12 h-12 bg-secondary-light rounded-xl flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">Real-time Sync</h3>
          <p class="text-gray-600 leading-relaxed text-sm">
            Stay synchronized across all devices with real-time updates. Changes sync instantly, keeping your team on the same page.
          </p>
        </div>

        <!-- Feature 5 -->
        <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div class="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">Secure & Private</h3>
          <p class="text-gray-600 leading-relaxed text-sm">
            Your data is encrypted and secure. Enterprise-grade security with role-based access control and audit trails.
          </p>
        </div>

        <!-- Feature 6 -->
        <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div class="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">Advanced Analytics</h3>
          <p class="text-gray-600 leading-relaxed text-sm">
            Get insights with comprehensive analytics and reports. Track team performance, resolution times, and ticket trends.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
