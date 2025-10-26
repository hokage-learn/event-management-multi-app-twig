<script setup>
import { ref } from 'vue'

const faqs = [
  {
    id: 1,
    question: "How do I create a new ticket?",
    answer: "Simply click the 'Create Ticket' button on the Ticket Management page and fill in the required details including title, description, status, and priority."
  },
  {
    id: 2,
    question: "Can I track multiple projects?",
    answer: "Yes! GetTix allows you to manage tickets across multiple projects efficiently with our organized dashboard and filtering options."
  },
  {
    id: 3,
    question: "Is there a mobile app?",
    answer: "Currently, GetTix is web-based and fully responsive. A mobile app is in development and will be available soon."
  },
  {
    id: 4,
    question: "How secure is my data?",
    answer: "We take data security seriously. All your data is encrypted and stored securely. We never share your information with third parties."
  }
]

const openFaq = ref(null)

const toggleFaq = (id) => {
  openFaq.value = openFaq.value === id ? null : id
}
</script>

<template>
  <section class="py-12 md:py-16 lg:py-20 bg-gray-50">
    <div class="max-w-3xl mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
        Frequently Asked Questions
      </h2>
      
      <div class="space-y-4">
        <div
          v-for="faq in faqs"
          :key="faq.id"
          class="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <button
            @click="toggleFaq(faq.id)"
            class="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
          >
            <span class="font-semibold text-gray-900">{{ faq.question }}</span>
            <svg
              :class="['w-5 h-5 text-gray-500 transition-transform', openFaq === faq.id && 'rotate-180']"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            v-if="openFaq === faq.id"
            class="px-6 pb-4 text-gray-600"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
