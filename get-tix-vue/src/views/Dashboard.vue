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
        <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <h1 class="text-2xl md:text-3xl font-bold text-gray-900">Dashboard</h1>
            <p class="text-sm md:text-base text-gray-600">Welcome back, {{ authStore.user?.name || 'User' }}!</p>
          </div>
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
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

      <!-- Quick Actions -->
      <div class="mt-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Create Ticket Card -->
          <router-link
            to="/tickets"
            class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group"
            @click="e => { e.preventDefault(); router.push('/tickets'); }"
          >
            <div class="flex items-center space-x-4">
              <div class="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-1">Create New Ticket</h3>
                <p class="text-gray-600">Start a new ticket to track an issue or request</p>
              </div>
            </div>
            <div class="mt-6 flex items-center text-primary font-medium group-hover:text-primary-hover transition-colors">
              <span>Go to Ticket Management</span>
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </router-link>

          <!-- Manage Tickets Card -->
          <router-link
            to="/tickets"
            class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group"
            @click="e => { e.preventDefault(); router.push('/tickets'); }"
          >
            <div class="flex items-center space-x-4">
              <div class="p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-1">Manage Tickets</h3>
                <p class="text-gray-600">View, edit, and update all your tickets in one place</p>
              </div>
            </div>
            <div class="mt-6 flex items-center text-accent font-medium group-hover:text-accent-hover transition-colors">
              <span>View All Tickets</span>
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Recent Activity or Empty State -->
      <div class="mt-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
        <div v-if="stats.total === 0" class="bg-white p-12 rounded-xl shadow-lg border border-gray-100 text-center">
          <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">No tickets yet</h3>
          <p class="text-gray-600 mb-6">Get started by creating your first ticket</p>
          <router-link
            to="/tickets"
            class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-hover transition-colors"
          >
            Create Your First Ticket
          </router-link>
        </div>
        <div v-else class="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <p class="text-gray-600 text-center py-8">You have {{ stats.total }} ticket{{ stats.total !== 1 ? 's' : '' }} in total</p>
          <div class="flex justify-center">
            <router-link
              to="/tickets"
              class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-hover transition-colors"
            >
              View All Tickets
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
