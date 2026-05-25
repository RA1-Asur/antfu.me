<script setup lang="ts">
import type { Photo } from '../../../photos/data'
import { blurhashToGradientCssObject } from '@unpic/placeholder'

defineProps<{
  photos: Photo[]
  view?: 'cover' | 'contain'
}>()
</script>

<template>
  <div class="photos grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" max-w-500 mx-auto>
    <div v-for="photo, idx in photos" :key="idx" class="flex flex-col">
      <img
        :src="photo.url"
        :alt="photo.text"
        :data-photo-index="idx"
        :style="photo.blurhash && view !== 'contain' ? blurhashToGradientCssObject(photo.blurhash) as any : ''"
        loading="lazy"
        w-full
        :class="view === 'contain' ? 'object-contain sm:aspect-square' : 'object-cover aspect-square'"
      >
      <div v-if="photo.text || photo.name" class="mt-2 px-1">
        <a v-if="photo.link" :href="photo.link" target="_blank" class="font-bold text-sm hover:underline">
          {{ photo.name }}
        </a>
        <span v-else-if="photo.name" class="font-bold text-sm">{{ photo.name }}</span>
        <p v-if="photo.text" class="text-xs op50 mt-0.5">{{ photo.text }}</p>
      </div>
    </div>
  </div>
</template>
