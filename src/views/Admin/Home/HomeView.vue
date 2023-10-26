<template>
    <h2>{{ $t('pages.admin.home.title') }}</h2>
    <p> {{ $t('pages.admin.home.subtitle') }}</p>
    <v-item-group selected-class="bg-primary">
    <v-container>
      <v-row>
        <v-col
          v-for="menuItem in menu"
          :key="menuItem.id"
          cols="12"
          md="4"
        >
          <v-item :value="menuItem.id" v-slot="{ value }">
            <v-card
              class="d-flex align-center"
              dark
              height="200"
              @click="goTo(value as string)"
            >
              <div
                class="text-h3 flex-grow-1 text-center"
              >
                {{$t(`menu.${menuItem.localeKey}`)}} 
              </div>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script setup lang="ts">
import menu from '@/templates/Logged/Admin/menu';
import { useRouter } from 'vue-router';

const router = useRouter();

function goTo(id: string) {
  router.push(`admin/${id}`);
}
</script>