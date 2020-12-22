<template>
  <header>
    <nav class="navbar header navbar-expand-lg navbar-light fixed-top">
      <h1 class="navbar-brand text-white"><Logo />TaskWind - Task Management System</h1>
      <Avatar v-if="$route.name !=='index'" class="ml-auto"/>
    </nav>
  </header>
</template>
