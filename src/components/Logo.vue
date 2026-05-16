<template>
  <img
    src="/logo.png"
    alt="ASM Logo"
    width="40"
    height="40"
    style="object-fit: contain;"
    class="logo-img"
  />
</template>

<style scoped>
.logo-img {
  filter: brightness(1);
}
.dark .logo-img {
  filter: brightness(0) invert(1);
}
</style>
