<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useTicketsStore } from '@/stores/tickets'

const router = useRouter()
const authStore = useAuthStore()
const ticketsStore = useTicketsStore()

const tickets = computed(() => ticketsStore.tickets)

const handleLogout = () => {
  authStore.logout()
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <div class="bg-white shadow">
      <div class="max-w-container mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 class="text-3xl font-bold text-gray-900">Ticket Management</h1>
            <p class="text-gray-600">Manage your support tickets</p>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <router-link
              to="/dashboard"
              class="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Dashboard
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

    <div class="max-w-container mx-auto px-4 py-8">
      <div class="text-center py-12">
        <p class="text-gray-500">Ticket Management UI coming soon...</p>
      </div>
    </div>
  </div>
</template>
