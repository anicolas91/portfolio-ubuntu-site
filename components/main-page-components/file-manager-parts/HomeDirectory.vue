<script setup lang="ts">
import { useFileManagerStore } from '@/stores'
import type { FolderType } from '@/types'
import Folder from './Folder.vue'

defineProps<{
  maximized: boolean
}>()

const fileManagerStore = useFileManagerStore()

type HomeFoldersType = {
  type: FolderType
  text: string
  handler: () => void
}

const folders: HomeFoldersType[] = [
  {
    type: 'documents',
    text: 'Documents',
    handler: () => fileManagerStore.setCurrentDirectory('documents'),
  },
  {
    type: 'music',
    text: 'Music',
    handler: () => fileManagerStore.setCurrentDirectory('music'),
  },
  {
    type: 'pictures',
    text: 'Pictures',
    handler: () => fileManagerStore.setCurrentDirectory('pictures'),
  },
]
</script>

<template>
  <div
    :class="[
      maximized
        ? 'md:grid-cols-4 lg:grid-cols-8'
        : 'md:grid-cols-3 lg:grid-cols-5',
      'p-xs gap-3 grid grid-cols-2 justify-items-center',
    ]"
  >
    <Folder
      v-for="(item, idx) in folders"
      :key="idx"
      :type="item.type"
      :text="item.text"
      @folder-click="item.handler"
    />
  </div>
</template>

<style scoped></style>
