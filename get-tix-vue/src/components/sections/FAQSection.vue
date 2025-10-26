<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const faqs = [
  {
    id: 1,
    question: "How do I create a new ticket?",
    answer: "Navigate to the Ticket Management page and click the 'Create Ticket' button. Fill in the title (required), description, select a status (open, in-progress, or closed), and assign a priority level. Click 'Create' to save your ticket."
  },
  {
    id: 2,
    question: "Can multiple team members work on the same ticket?",
    answer: "Yes! GetTix supports collaborative ticket management. Multiple team members can view, update, and comment on tickets. Real-time synchronization ensures everyone stays up-to-date with the latest changes."
  },
  {
    id: 3,
    question: "Is there a mobile app available?",
    answer: "GetTix is fully responsive and works seamlessly on all devices through your web browser. Our mobile-friendly design ensures you can manage tickets on-the-go with the same powerful features available on desktop."
  },
  {
    id: 4,
    question: "How secure is my ticket data?",
    answer: "Security is our top priority. All your data is encrypted using industry-standard protocols. We never share your information with third parties. User-specific data isolation ensures each user only sees their own tickets, maintaining complete privacy."
  },
  {
    id: 5,
    question: "Can I export my tickets?",
    answer: "Yes! You can export your tickets in various formats including CSV and JSON. Download complete ticket histories with all metadata for backup or analysis purposes."
  },
  {
    id: 6,
    question: "What browser support do you offer?",
    answer: "GetTix supports all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your preferred browser for the best experience and security."
  }
]

const openFaq = ref(null)
const scrollY = ref(0)

const toggleFaq = (id) => {
  openFaq.value = openFaq.value === id ? null : id
}

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
        <section class="py-12 md:py-16 lg:py-20 pb-12 relative">
        <div class="max-w-4xl mx-auto px-4" :style="{ transform: `translateY(${Math.max(0, scrollY * 0.04)}px)` }">
          <div class="text-center mb-10 md:mb-12">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
            <p class="text-base text-gray-600">Everything you need to know about GetTix</p>
          </div>
      
      <div class="space-y-4">
        <div
          v-for="faq in faqs"
          :key="faq.id"
          class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
        >
          <button
            @click="toggleFaq(faq.id)"
            class="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
          >
            <span class="font-semibold text-gray-900 text-lg">{{ faq.question }}</span>
            <svg
              :class="['w-6 h-6 text-gray-500 transition-transform flex-shrink-0 ml-4', openFaq === faq.id && 'rotate-180']"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            v-if="openFaq === faq.id"
            class="px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
