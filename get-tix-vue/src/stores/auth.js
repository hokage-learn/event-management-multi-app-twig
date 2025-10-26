import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const loading = ref(false)

  const isAuthenticated = computed(() => !!user.value)

  // Load user from localStorage on init
  const loadUser = () => {
    try {
      const session = localStorage.getItem('ticketapp_session')
      if (session) {
        user.value = JSON.parse(session)
      }
    } catch (error) {
      console.error('Error loading session:', error)
      localStorage.removeItem('ticketapp_session')
    }
  }

  const login = async (email, password) => {
    loading.value = true
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Check for demo admin user
      if (email === 'admin@gettix.com' && password === 'password123') {
        const userData = {
          id: '1',
          email: email,
          name: 'Admin User',
          role: 'admin'
        }
        localStorage.setItem('ticketapp_session', JSON.stringify(userData))
        user.value = userData
        return { success: true }
      }

      // Check for registered users
      const registeredUsers = JSON.parse(localStorage.getItem('ticketapp_users') || '[]')
      const foundUser = registeredUsers.find(u => u.email === email)

      if (foundUser) {
        localStorage.setItem('ticketapp_session', JSON.stringify(foundUser))
        user.value = foundUser
        return { success: true }
      }

      return { success: false, error: 'Invalid credentials' }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, error: 'Login failed' }
    } finally {
      loading.value = false
    }
  }

  const signup = async (name, email, password) => {
    loading.value = true
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Check if user already exists
      const existingUsers = JSON.parse(localStorage.getItem('ticketapp_users') || '[]')
      const userExists = existingUsers.find(u => u.email === email)

      if (userExists) {
        return { success: false, error: 'User already exists' }
      }

      // Create new user
      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        role: 'user'
      }

      existingUsers.push(newUser)
      localStorage.setItem('ticketapp_users', JSON.stringify(existingUsers))
      localStorage.setItem('ticketapp_session', JSON.stringify(newUser))
      user.value = newUser

      return { success: true }
    } catch (error) {
      console.error('Signup error:', error)
      return { success: false, error: 'Signup failed' }
    } finally {
      loading.value = false
    }
  }

  const logout = () => {
    localStorage.removeItem('ticketapp_session')
    user.value = null
  }

  // Initialize on load
  loadUser()

  return {
    user,
    loading,
    isAuthenticated,
    login,
    signup,
    logout
  }
})
