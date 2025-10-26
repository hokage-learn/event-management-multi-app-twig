<script setup>
import Navbar from '@/components/Navbar.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import FeaturesSection from '@/components/sections/FeaturesSection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import FAQSection from '@/components/sections/FAQSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <FeaturesSection />
    <TestimonialsSection />
    <FAQSection />
    <FooterSection />
  </div>
</template>
