<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useTicketsStore } from '@/stores/tickets'

const router = useRouter()
const authStore = useAuthStore()
const ticketsStore = useTicketsStore()

const stats = computed(() => ticketsStore.stats)

const handleLogout = () => {
  authStore.logout()
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen">
    <!-- Header -->
    <div class="bg-white shadow">
      <div class="max-w-container mx-auto px-4 py-6">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p class="text-gray-600">Welcome back, {{ authStore.user?.name || 'User' }}!</p>
          </div>
          <div class="flex items-center gap-4">
            <router-link
              to="/tickets"
              class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-hover transition-colors"
            >
              Manage Tickets
            </router-link>
            <button
              @click="handleLogout"
              class="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="max-w-container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div class="flex items-center">
            <div class="p-3 rounded-full bg-blue-100">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Total Tickets</p>
              <p class="text-2xl font-bold text-gray-900">{{ stats.total }}</p>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div class="flex items-center">
            <div class="p-3 rounded-full bg-green-100">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Open Tickets</p>
              <p class="text-2xl font-bold text-gray-900">{{ stats.open }}</p>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div class="flex items-center">
            <div class="p-3 rounded-full bg-yellow-100">
              <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">In Progress</p>
              <p class="text-2xl font-bold text-gray-900">{{ stats.inProgress }}</p>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div class="flex items-center">
            <div class="p-3 rounded-full bg-gray-100">
              <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Closed Tickets</p>
              <p class="text-2xl font-bold text-gray-900">{{ stats.closed }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
