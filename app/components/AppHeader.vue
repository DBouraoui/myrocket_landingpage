<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

const items = computed(() => [{
  label: 'Découverte',
  to: '#features',
  active: activeHeadings.value.includes('features') && !activeHeadings.value.includes('pricing')
}, {
  label: 'Tarif',
  to: '#pricing',
  active: activeHeadings.value.includes('pricing')
}
])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#features'),
    document.querySelector('#pricing')
  ].filter(Boolean) as Element[])
})
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <AppLogo class="w-auto h-6 shrink-0" />
      </NuxtLink>

      <TemplateMenu />
    </template>

    <template #right>
      <UNavigationMenu
        :items="items"
        variant="link"
        class="hidden lg:block"
      />
      <UButton
        label="M'inscrire"
        class="hidden lg:block cursor-pointer"
      />

      <UButton
        label="Me connecter"
        variant="subtle"
        class="hidden lg:block cursor-pointer"
      />

      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
      <UButton
        class="mt-4 cursor-pointer"
        label="M'inscrire"
        block
      />
      <UButton
        class="mt-4 cursor-pointer"
        label="Me connecter"
        variant="subtle"
        block
      />
    </template>
  </UHeader>
</template>
