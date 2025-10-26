<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useTicketsStore } from '@/stores/tickets'
import { useToast } from '@/plugins/toast'

const { toast } = useToast()

const router = useRouter()
const authStore = useAuthStore()
const ticketsStore = useTicketsStore()

const tickets = computed(() => ticketsStore.tickets)
const loading = computed(() => ticketsStore.loading)

const viewMode = ref('table')
const showCreateModal = ref(false)
const showEditModal = ref(false)
const showDeleteModal = ref(false)
const selectedTicket = ref(null)
const searchQuery = ref('')
const statusFilter = ref('all')

const formData = ref({
  title: '',
  description: '',
  status: 'open',
  priority: 'medium'
})

const errors = ref({})

const filteredTickets = computed(() => {
  return tickets.value.filter(ticket => {
    const matchesSearch = searchQuery.value.trim() === '' || 
      ticket.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      (ticket.description || '').toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesStatus = statusFilter.value === 'all' || ticket.status === statusFilter.value
    return matchesSearch && matchesStatus
  })
})

const handleInputChange = (e) => {
  const { name, value } = e.target
  formData.value[name] = value
  if (errors.value[name]) {
    errors.value[name] = ''
  }
}

const validateForm = () => {
  const newErrors = {}
  if (!formData.value.title.trim()) {
    newErrors.title = 'Title is required'
  }
  if (!formData.value.status || !['open', 'in_progress', 'closed'].includes(formData.value.status)) {
    newErrors.status = 'Status must be one of: open, in_progress, or closed'
  }
  errors.value = newErrors
  return Object.keys(newErrors).length === 0
}

const handleCreate = () => {
  if (!validateForm()) return
  const result = ticketsStore.createTicket(formData.value)
  if (result.success) {
    toast.success('Ticket created successfully!')
    showCreateModal.value = false
    formData.value = { title: '', description: '', status: 'open', priority: 'medium' }
    errors.value = {}
  } else {
    toast.error(result.error || 'Failed to create ticket')
  }
}

const handleEdit = (ticket) => {
  selectedTicket.value = ticket
  formData.value = {
    title: ticket.title,
    description: ticket.description || '',
    status: ticket.status,
    priority: ticket.priority || 'medium'
  }
  showEditModal.value = true
  errors.value = {}
}

const handleUpdate = () => {
  if (!validateForm()) return
  const result = ticketsStore.updateTicket(selectedTicket.value.id, formData.value)
  if (result.success) {
    toast.success('Ticket updated successfully!')
    showEditModal.value = false
    selectedTicket.value = null
    formData.value = { title: '', description: '', status: 'open', priority: 'medium' }
    errors.value = {}
  } else {
    toast.error(result.error || 'Failed to update ticket')
  }
}

const handleDeleteClick = (ticket) => {
  selectedTicket.value = ticket
  showDeleteModal.value = true
}

const confirmDelete = () => {
  const result = ticketsStore.deleteTicket(selectedTicket.value.id)
  if (result.success) {
    toast.success('Ticket deleted successfully!')
    showDeleteModal.value = false
    selectedTicket.value = null
  } else {
    toast.error(result.error || 'Failed to delete ticket')
  }
}

const handleLogout = () => {
  authStore.logout()
  router.push('/')
}

const openCreateModal = () => {
  formData.value = { title: '', description: '', status: 'open', priority: 'medium' }
  errors.value = {}
  showCreateModal.value = true
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Loading State -->
    <div v-if="loading" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p class="text-gray-600">Loading tickets...</p>
      </div>
    </div>

    <!-- Main Content -->
    <div v-else>
      <!-- Header -->
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

      <!-- Search and Filters -->
      <div class="max-w-container mx-auto px-4 py-8">
        <div class="bg-white rounded-lg shadow mb-6 p-4">
          <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div class="flex-1 w-full md:w-auto">
              <input
                type="text"
                placeholder="Search tickets..."
                v-model="searchQuery"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            <div class="w-full md:w-auto">
              <select
                v-model="statusFilter"
                class="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="all">All Statuses</option>
                <option value="open">Open</option>
                <option value="in_progress">In Progress</option>
                <option value="closed">Closed</option>
              </select>
            </div>
            
            <div class="flex gap-2 w-full md:w-auto">
              <button
                @click="viewMode = 'table'"
                :class="[
                  'px-4 py-2 rounded-md transition-colors',
                  viewMode === 'table'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
              >
                Table
              </button>
              <button
                @click="viewMode = 'card'"
                :class="[
                  'px-4 py-2 rounded-md transition-colors',
                  viewMode === 'card'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
              >
                Cards
              </button>
            </div>
            
            <button
              @click="openCreateModal"
              class="w-full md:w-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-hover transition-colors"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Create Ticket
            </button>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredTickets.length === 0" class="bg-white rounded-lg shadow p-12 text-center">
          <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">No tickets found</h3>
          <p class="text-gray-600 mb-4">
            {{ searchQuery || statusFilter !== 'all' 
              ? 'Try adjusting your filters to see more tickets.'
              : 'Get started by creating your first ticket.'}}
          </p>
          <button
            v-if="!searchQuery && statusFilter === 'all'"
            @click="openCreateModal"
            class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-hover transition-colors"
          >
            Create Your First Ticket
          </button>
        </div>

        <!-- Table View -->
        <div v-else-if="viewMode === 'table'" class="bg-white rounded-lg shadow overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="ticket in filteredTickets" :key="ticket.id" class="hover:bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-gray-900">{{ ticket.title }}</div>
                    <div class="text-sm text-gray-500">{{ (ticket.description || '').substring(0, 50) }}...</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span :class="`status-badge status-${ticket.status.replace('_', '-')}`">
                      {{ ticket.status.replace('_', ' ') }}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                    {{ ticket.priority || 'medium' }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ new Date(ticket.createdAt).toLocaleDateString() }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      @click="handleEdit(ticket)"
                      class="text-primary hover:text-primary-hover mr-3"
                    >
                      Edit
                    </button>
                    <button
                      @click="handleDeleteClick(ticket)"
                      class="text-red-600 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Card View -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="ticket in filteredTickets"
            :key="ticket.id"
            class="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow"
          >
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-lg font-semibold text-gray-900">{{ ticket.title }}</h3>
              <span :class="`status-badge status-${ticket.status.replace('_', '-')}`">
                {{ ticket.status.replace('_', ' ') }}
              </span>
            </div>
            <p class="text-sm text-gray-600 mb-4 line-clamp-3">
              {{ ticket.description || 'No description' }}
            </p>
            <div class="flex justify-between items-center text-sm text-gray-500 mb-4">
              <span class="capitalize">Priority: {{ ticket.priority || 'medium' }}</span>
              <span>{{ new Date(ticket.createdAt).toLocaleDateString() }}</span>
            </div>
            <div class="flex gap-2">
              <button
                @click="handleEdit(ticket)"
                class="flex-1 px-4 py-2 text-sm font-medium text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition-colors"
              >
                Edit
              </button>
              <button
                @click="handleDeleteClick(ticket)"
                class="flex-1 px-4 py-2 text-sm font-medium text-red-600 border border-red-600 rounded-md hover:bg-red-600 hover:text-white transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Create/Edit Modal -->
      <div v-if="showCreateModal || showEditModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">
              {{ showCreateModal ? 'Create New Ticket' : 'Edit Ticket' }}
            </h2>
            
            <form @submit.prevent="showCreateModal ? handleCreate() : handleUpdate()">
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    Title <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    v-model="formData.title"
                    @input="handleInputChange"
                    :class="[
                      'w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent',
                      errors.title ? 'border-red-500' : 'border-gray-300'
                    ]"
                    required
                  />
                  <p v-if="errors.title" class="error-message">{{ errors.title }}</p>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    name="description"
                    v-model="formData.description"
                    @input="handleInputChange"
                    rows="4"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    Status <span class="text-red-500">*</span>
                  </label>
                  <select
                    name="status"
                    v-model="formData.status"
                    @change="handleInputChange"
                    :class="[
                      'w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent',
                      errors.status ? 'border-red-500' : 'border-gray-300'
                    ]"
                    required
                  >
                    <option value="open">Open</option>
                    <option value="in_progress">In Progress</option>
                    <option value="closed">Closed</option>
                  </select>
                  <p v-if="errors.status" class="error-message">{{ errors.status }}</p>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                  <select
                    name="priority"
                    v-model="formData.priority"
                    @change="handleInputChange"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>

              <div class="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  @click="showCreateModal = false; showEditModal = false; errors = {}"
                  class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  class="px-4 py-2 border border-transparent rounded-md text-white bg-primary hover:bg-primary-hover transition-colors"
                >
                  {{ showCreateModal ? 'Create Ticket' : 'Update Ticket' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Delete Modal -->
      <div v-if="showDeleteModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div class="bg-white rounded-lg max-w-md w-full p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Confirm Delete</h2>
          <p class="text-gray-600 mb-6">
            Are you sure you want to delete the ticket "{{ selectedTicket?.title }}"?" This action cannot be undone.
          </p>
          <div class="flex justify-end gap-3">
            <button
              @click="showDeleteModal = false; selectedTicket = null"
              class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              @click="confirmDelete"
              class="px-4 py-2 border border-transparent rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
