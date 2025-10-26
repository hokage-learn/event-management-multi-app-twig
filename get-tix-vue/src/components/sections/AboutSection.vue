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
        <section id="about" class="py-12 md:py-16 lg:py-20 bg-white relative border-t border-b border-gray-200">
    <div class="max-w-container mx-auto px-4" :style="{ transform: `translateY(${Math.max(0, scrollY * 0.05)}px)` }">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Side - Dashboard Image -->
        <div class="relative">
          <img src="/src/assets/SSO.png" alt="Dashboard" class="w-full h-full object-cover rounded-3xl shadow-lg" />
          <!-- Decorative elements -->
          <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-3xl -z-10"></div>
          <div class="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        </div>

                    <!-- Right Side - Content -->
            <div>
              <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Manage Tickets Like Never Before
              </h2>
              <p class="text-base text-gray-600 mb-5 leading-relaxed">
            GetTix is a powerful ticket management system designed to streamline your workflow. 
            Create, track, and resolve tickets with ease using our intuitive interface built for modern teams.
          </p>
          
                        <div class="space-y-3">
                <div class="flex items-start space-x-3">
                  <div class="flex-shrink-0 w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-0.5 text-sm">Simple & Intuitive</h3>
                    <p class="text-gray-600 text-xs">Clean interface designed for efficiency</p>
                  </div>
                </div>

            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0 w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-0.5 text-sm">Real-time Updates</h3>
                <p class="text-gray-600 text-xs">Stay synchronized with instant notifications</p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0 w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-0.5 text-sm">Powerful Analytics</h3>
                <p class="text-gray-600 text-xs">Make data-driven decisions with insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
