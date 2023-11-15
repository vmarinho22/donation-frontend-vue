<template>
  <logged-out-header />
  <main class="home">
    <small>{{ $t('pages.home.hint') }}</small>
    <h2>{{ $t('pages.home.title') }}</h2>
    <h3>{{ $t('pages.home.subtitle') }}</h3>
    <p>{{ $t('pages.home.text') }}</p>
    <section class="buttons">
      <v-btn
        prepend-icon="mdi-account-plus-outline"
        :color="Colors.bloodRed[500]"
        @click="goTo('/signup')"
      >
        {{ $t('buttons.signup') }}
      </v-btn>
      <v-btn
        variant="outlined"
        prepend-icon="mdi-account-key"
        :color="Colors.bloodRed[500]"
        @click="goTo('/auth/login')"
      >
        {{ $t('buttons.signin') }}
      </v-btn>
    </section>
    <small class="security-text">{{ $t('pages.home.security') }}</small>
    <br />
    <section class="benefits">
      <div class="benefit">
        <v-icon :color="Colors.bloodRed[500]">mdi-shield-check-outline</v-icon>
        <div>
          <h4>{{ $t('pages.home.benefits.security.title') }}</h4>
          <p>{{ $t('pages.home.benefits.security.text') }}</p>
        </div>
      </div>
      <div class="benefit">
        <v-icon :color="Colors.bloodRed[500]">mdi-speedometer</v-icon>
        <div>
          <h4>{{ $t('pages.home.benefits.speed.title') }}</h4>
          <p>{{ $t('pages.home.benefits.speed.text') }}</p>
        </div>
      </div>
      <div class="benefit">
        <v-icon :color="Colors.bloodRed[500]">mdi-emoticon-happy-outline</v-icon>
        <div>
          <h4>{{ $t('pages.home.benefits.gratitude.title') }}</h4>
          <p>{{ $t('pages.home.benefits.gratitude.text') }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import LoggedOutHeader from '@/components/Headers/LoggedOutHeader/LoggedOutHeader.vue'
import { Colors } from '@/constants/colors'
import { useRouter } from 'vue-router'

const router = useRouter()

function goTo(url: string) {
  router.push(url)
}
</script>

<style scoped lang="scss" src="./HomeView.scss" />
