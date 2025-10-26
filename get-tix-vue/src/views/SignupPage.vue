<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errors = ref({})
const isLoading = ref(false)

const validateForm = () => {
  errors.value = {}
  
  if (!name.value || name.value.length < 2) {
    errors.value.name = 'Name must be at least 2 characters'
  }
  
  if (!email.value) {
    errors.value.email = 'Email is required'
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    errors.value.email = 'Invalid email address'
  }
  
  if (!password.value || password.value.length < 6) {
    errors.value.password = 'Password must be at least 6 characters'
  }
  
  if (password.value !== confirmPassword.value) {
    errors.value.confirmPassword = 'Passwords must match'
  }
  
  return Object.keys(errors.value).length === 0
}

const handleSubmit = async (e) => {
  e.preventDefault()
  
  if (!validateForm()) return
  
  isLoading.value = true
  
  const result = await authStore.signup(name.value, email.value, password.value)
  
  if (result.success) {
    router.push('/dashboard')
  } else {
    errors.value.general = result.error || 'Signup failed'
  }
  
  isLoading.value = false
}
</script>

<template>
  <div class="min-h-screen flex bg-white">
    <!-- Left Side - Image -->
    <div class="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary via-emerald-600 to-green-700 relative overflow-hidden">
      <div class="absolute inset-0 flex items-center justify-center p-12">
        <div class="text-center text-white z-10">
          <div class="mb-8 flex justify-center">
            <div class="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
          </div>
          <h1 class="text-4xl font-bold mb-4">Get Started!</h1>
          <p class="text-xl text-white/90 max-w-md mx-auto">
            Create your account and start managing tickets with GetTix today
          </p>
        </div>
      </div>
      
      <div class="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      <div class="absolute bottom-20 left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
    </div>

    <!-- Right Side - Form -->
    <div class="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      <!-- Back Link -->
      <router-link to="/" class="absolute top-6 left-6 flex items-center text-gray-600 hover:text-primary transition-colors">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Home
      </router-link>

      <div class="max-w-md w-full space-y-8">
        <!-- Mobile Logo -->
        <div class="lg:hidden text-center mb-8">
          <div class="inline-flex items-center space-x-2 mb-4">
            <div class="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>
            <span class="text-2xl font-bold text-gray-900">GetTix</span>
          </div>
        </div>

        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p class="mt-2 text-sm text-gray-600">
            Or
            <router-link to="/auth/login" class="font-medium text-primary hover:text-primary-hover">
              sign in to your existing account
            </router-link>
          </p>
        </div>

        <form class="mt-8 space-y-6" @submit="handleSubmit">
          <div class="space-y-4">
            <!-- General Error -->
            <div v-if="errors.general" class="text-sm text-red-600 bg-red-50 p-3 rounded-md">
              {{ errors.general }}
            </div>

            <!-- Name Field -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                id="name"
                v-model="name"
                type="text"
                required
                class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Enter your name"
              />
              <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
            </div>

            <!-- Email Field -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                id="email"
                v-model="email"
                type="email"
                required
                class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Enter your email"
              />
              <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
            </div>

            <!-- Password Field -->
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                v-model="password"
                type="password"
                required
                class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Enter your password"
              />
              <p v-if="errors.password" class="mt-1 text-sm text-red-600">{{ errors.password }}</p>
            </div>

            <!-- Confirm Password Field -->
            <div>
              <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                v-model="confirmPassword"
                type="password"
                required
                class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Confirm your password"
              />
              <p v-if="errors.confirmPassword" class="mt-1 text-sm text-red-600">{{ errors.confirmPassword }}</p>
            </div>
          </div>

          <div>
            <button
              type="submit"
              :disabled="isLoading"
              :class="[
                'group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary',
                isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-primary-hover'
              ]"
            >
              {{ isLoading ? 'Creating account...' : 'Create account' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
