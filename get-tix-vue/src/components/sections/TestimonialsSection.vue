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
        <section class="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div class="max-w-container mx-auto px-4" :style="{ transform: `translateY(${Math.max(0, scrollY * 0.06)}px)` }">
          <div class="text-center mb-10 md:mb-12">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Trusted by Teams Worldwide</h2>
            <p class="text-base text-gray-600">See what our users are saying about GetTix</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div class="flex items-center mb-6">
            <div class="w-14 h-14 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              JD
            </div>
            <div>
              <h4 class="font-bold text-gray-900">John Davis</h4>
              <p class="text-sm text-gray-600">Product Manager at TechCorp</p>
            </div>
          </div>
          <div class="flex mb-4">
            <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p class="text-gray-700 leading-relaxed">
            "GetTix has completely transformed our ticket management workflow. We've reduced resolution time by 40% and improved team productivity significantly."
          </p>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div class="flex items-center mb-6">
            <div class="w-14 h-14 bg-gradient-to-br from-secondary to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              SM
            </div>
            <div>
              <h4 class="font-bold text-gray-900">Sarah Mitchell</h4>
              <p class="text-sm text-gray-600">Team Lead at DesignStudio</p>
            </div>
          </div>
          <div class="flex mb-4">
            <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p class="text-gray-700 leading-relaxed">
            "The interface is incredibly intuitive. Our entire team adopted it within days. The real-time updates and collaborative features are game-changers."
          </p>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div class="flex items-center mb-6">
            <div class="w-14 h-14 bg-gradient-to-br from-accent to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              MK
            </div>
            <div>
              <h4 class="font-bold text-gray-900">Michael Kim</h4>
              <p class="text-sm text-gray-600">CTO at StartupHub</p>
            </div>
          </div>
          <div class="flex mb-4">
            <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p class="text-gray-700 leading-relaxed">
            "Best ticket management system we've tried. The analytics and reporting features give us incredible insights into our operations. Highly recommend!"
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
