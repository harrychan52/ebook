<template>
    <div class="body">
      <Header></Header>
      <main class="container">
        <slot/>
      </main>
    </div>
</template>
<style>
.body {
    min-width: 1000px;
    @apply bg-gray-100 flex flex-col min-h-screen;
}
</style>
