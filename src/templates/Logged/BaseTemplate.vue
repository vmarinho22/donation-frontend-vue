<template>
  <v-layout class="base-template">
    <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
      <v-list>
        <v-list-item
          :prepend-avatar="account.user.photoUrl"
          :title="
            account.user.socialName
              ? account.user.socialName
              : `${account.user.firstName.split(' ')[0]} ${account.user.lastName}`
          "
          :subtitle="$t(`roles.${account.user.role}`)"
        >
          <template v-slot:append>
            <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail" />
          </template>
        </v-list-item>
      </v-list>

      <v-list density="compact" nav v-for="item in menu" v-bind:key="item.id">
        <v-list-item
          :prepend-icon="item.icon"
          :title="$t(`menu.${item.localeKey}`)"
          :value="item.id"
          :active="routeInfo.fullPath.startsWith(`/${item.id}`)"
          @click="goTo(`/${item.id}`)"
        />
      </v-list>

      <template v-slot:append>
        <div class="config-buttons">
          <toggle-theme />
          <v-menu transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-account-circle" variant="text" v-bind="props"></v-btn>
            </template>
            <v-list>
              <v-list-item @click="console.log('config')">
                <v-list-item-title>{{ $t('menu.userMenu.config') }}</v-list-item-title>
              </v-list-item>
              <v-list-item @click="signOut()">
                <v-list-item-title>{{ $t('menu.userMenu.signOut') }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <br />
        </div>
      </template>
    </v-navigation-drawer>

    <v-main>
      <v-toolbar
        density="compact"
        title="Donation System"
        color="transparent"
        style="margin-bottom: 16px"
      >
        <toggle-theme />
      </v-toolbar>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ToggleTheme from '@/components/Buttons/ToggleTheme/ToggleTheme.vue'
import { useAccount } from '@/stores/account'
import type { Menu } from '@/types/menu'
import { useRoute, useRouter } from 'vue-router'

const { menu } = defineProps<{
  menu: Menu[]
}>()

const drawer = ref(true)
const rail = ref(true)

const { account, signOff } = useAccount()
const router = useRouter()
const routeInfo = useRoute()

function goTo(route: string) {
  router.push(route)
}

function signOut() {
  signOff()
  router.push('/auth/login')
}
</script>

<style scoped lang="scss" src="./BaseTemplate.scss" />
