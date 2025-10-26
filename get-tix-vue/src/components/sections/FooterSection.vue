<script setup></script>

<template>
  <footer class="bg-gradient-to-b from-gray-900 to-gray-950 text-white border-t border-gray-800">
    <div class="max-w-container mx-auto px-4 py-12 md:py-16">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
        <!-- Brand Section -->
        <div class="lg:col-span-1">
          <div class="flex items-center space-x-2 mb-4">
            <div class="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>
            <span class="text-xl font-bold">GetTix</span>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed mb-4">
            Streamline your ticket management workflow with our powerful and intuitive platform.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-primary transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-primary transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-primary transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Product Section -->
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Product</h3>
          <ul class="space-y-3">
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition-colors text-sm">Features</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition-colors text-sm">Pricing</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition-colors text-sm">Updates</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition-colors text-sm">API</a>
            </li>
          </ul>
        </div>

        <!-- Company Section -->
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Company</h3>
          <ul class="space-y-3">
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition-colors text-sm">About</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition-colors text-sm">Blog</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition-colors text-sm">Careers</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
            </li>
          </ul>
        </div>

        <!-- Support Section -->
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Support</h3>
          <ul class="space-y-3">
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition-colors text-sm">Help Center</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition-colors text-sm">Documentation</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition-colors text-sm">Status</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition-colors text-sm">Terms & Privacy</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-sm text-gray-400">
            &copy; 2024 GetTix. All rights reserved.
          </p>
          <div class="flex space-x-6 text-sm">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
