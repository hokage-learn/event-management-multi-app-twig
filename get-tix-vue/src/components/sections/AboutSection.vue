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
          <div class="relative overflow-hidden rounded-2xl shadow-2xl">
            <svg viewBox="0 0 800 600" class="w-full h-auto bg-gradient-to-br from-primary to-accent">
              <!-- Background -->
              <rect width="800" height="600" fill="url(#gradient)"/>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#7c3aed;stop-opacity:1" />
                </linearGradient>
              </defs>
              
              <!-- Window Chrome -->
              <rect x="50" y="30" width="700" height="500" rx="8" fill="#ffffff" opacity="0.95"/>
              
              <!-- Title Bar -->
              <rect x="50" y="30" width="700" height="40" fill="#f3f4f6"/>
              <circle cx="70" cy="50" r="6" fill="#ef4444"/>
              <circle cx="95" cy="50" r="6" fill="#f59e0b"/>
              <circle cx="120" cy="50" r="6" fill="#10b981"/>
              <text x="370" y="52" font-family="sans-serif" font-size="14" font-weight="600" fill="#1f2937">GetTix Dashboard</text>
              
              <!-- Sidebar -->
              <rect x="50" y="70" width="180" height="460" fill="#f9fafb"/>
              <rect x="60" y="90" width="160" height="4" rx="2" fill="#e5e7eb"/>
              <rect x="60" y="110" width="120" height="4" rx="2" fill="#e5e7eb"/>
              <rect x="60" y="130" width="140" height="4" rx="2" fill="#2563eb"/>
              <rect x="60" y="150" width="100" height="4" rx="2" fill="#e5e7eb"/>
              
              <!-- Main Content -->
              <rect x="250" y="90" width="480" height="32" rx="4" fill="#e5e7eb" opacity="0.5"/>
              <rect x="250" y="140" width="480" height="80" rx="6" fill="#dbeafe"/>
              <rect x="250" y="240" width="220" height="280" rx="6" fill="#ede9fe"/>
              <rect x="490" y="240" width="240" height="280" rx="6" fill="#fce7f3"/>
              
              <!-- Stats Cards -->
              <rect x="250" y="150" width="100" height="60" rx="4" fill="#2563eb" opacity="0.8"/>
              <rect x="365" y="150" width="100" height="60" rx="4" fill="#10b981" opacity="0.8"/>
              <rect x="480" y="150" width="100" height="60" rx="4" fill="#f59e0b" opacity="0.8"/>
              <rect x="595" y="150" width="100" height="60" rx="4" fill="#6b7280" opacity="0.8"/>
              
              <!-- Chart Elements -->
              <line x1="280" y1="440" x2="280" y2="280" stroke="#2563eb" stroke-width="8" stroke-linecap="round"/>
              <line x1="310" y1="380" x2="310" y2="280" stroke="#2563eb" stroke-width="8" stroke-linecap="round"/>
              <line x1="340" y1="420" x2="340" y2="280" stroke="#2563eb" stroke-width="8" stroke-linecap="round"/>
              <line x1="370" y1="400" x2="370" y2="280" stroke="#2563eb" stroke-width="8" stroke-linecap="round"/>
              <line x1="400" y1="450" x2="400" y2="280" stroke="#2563eb" stroke-width="8" stroke-linecap="round"/>
            </svg>
          </div>
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
