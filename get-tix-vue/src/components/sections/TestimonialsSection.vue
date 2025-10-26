<script setup></script>

<template>
  <section class="py-12 md:py-16 lg:py-20 bg-white">
    <div class="max-w-container mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
        What Our Users Say
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div class="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              JD
            </div>
            <div>
              <h4 class="font-semibold text-gray-900">John Doe</h4>
              <p class="text-sm text-gray-600">Product Manager</p>
            </div>
          </div>
          <p class="text-gray-700 italic">
            "GetTix has transformed how we manage our support tickets. Highly recommended!"
          </p>
        </div>

        <div class="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              SM
            </div>
            <div>
              <h4 class="font-semibold text-gray-900">Sarah Miller</h4>
              <p class="text-sm text-gray-600">Team Lead</p>
            </div>
          </div>
          <p class="text-gray-700 italic">
            "The interface is clean and intuitive. Our team adoption was seamless."
          </p>
        </div>

        <div class="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              MK
            </div>
            <div>
              <h4 class="font-semibold text-gray-900">Michael Kim</h4>
              <p class="text-sm text-gray-600">Developer</p>
            </div>
          </div>
          <p class="text-gray-700 italic">
            "Best ticket management system I've used. Makes my job much easier."
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
