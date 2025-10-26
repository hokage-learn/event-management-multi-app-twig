import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useAuthStore } from './auth'

export const useTicketsStore = defineStore('tickets', () => {
  const tickets = ref([])
  const loading = ref(false)
  const authStore = useAuthStore()

  // Load tickets for current user
  const loadTickets = () => {
    if (!authStore.user) {
      tickets.value = []
      return
    }

    try {
      const allTickets = JSON.parse(localStorage.getItem('ticketapp_tickets') || '[]')
      tickets.value = allTickets.filter(ticket => ticket.userId === authStore.user.id)
    } catch (error) {
      console.error('Error loading tickets:', error)
      tickets.value = []
    }
  }

  const createTicket = (ticketData) => {
    if (!authStore.user) {
      return { success: false, error: 'Not authenticated' }
    }

    const newTicket = {
      id: Date.now().toString(),
      userId: authStore.user.id,
      ...ticketData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    tickets.value.push(newTicket)

    const allTickets = JSON.parse(localStorage.getItem('ticketapp_tickets') || '[]')
    allTickets.push(newTicket)
    localStorage.setItem('ticketapp_tickets', JSON.stringify(allTickets))

    return { success: true, ticket: newTicket }
  }

  const updateTicket = (id, updates) => {
    if (!authStore.user) {
      return { success: false, error: 'Not authenticated' }
    }

    const index = tickets.value.findIndex(t => t.id === id)
    if (index === -1) {
      return { success: false, error: 'Ticket not found' }
    }

    tickets.value[index] = {
      ...tickets.value[index],
      ...updates,
      updatedAt: new Date().toISOString()
    }

    const allTickets = JSON.parse(localStorage.getItem('ticketapp_tickets') || '[]')
    const allIndex = allTickets.findIndex(t => t.id === id)
    if (allIndex !== -1) {
      allTickets[allIndex] = { ...allTickets[allIndex], ...updates, updatedAt: new Date().toISOString() }
      localStorage.setItem('ticketapp_tickets', JSON.stringify(allTickets))
    }

    return { success: true }
  }

  const deleteTicket = (id) => {
    if (!authStore.user) {
      return { success: false, error: 'Not authenticated' }
    }

    tickets.value = tickets.value.filter(t => t.id !== id)

    const allTickets = JSON.parse(localStorage.getItem('ticketapp_tickets') || '[]')
    const updated = allTickets.filter(t => t.id !== id)
    localStorage.setItem('ticketapp_tickets', JSON.stringify(updated))

    return { success: true }
  }

  const stats = computed(() => {
    return {
      total: tickets.value.length,
      open: tickets.value.filter(t => t.status === 'open').length,
      inProgress: tickets.value.filter(t => t.status === 'in_progress').length,
      closed: tickets.value.filter(t => t.status === 'closed').length
    }
  })

  // Watch for user changes
  authStore.$subscribe((mutation, state) => {
    if (mutation.storeId === 'auth') {
      loadTickets()
    }
  })

  // Initial load
  loadTickets()

  return {
    tickets,
    loading,
    stats,
    loadTickets,
    createTicket,
    updateTicket,
    deleteTicket
  }
})
