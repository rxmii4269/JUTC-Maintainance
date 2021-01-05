<template>
    <b-tabs content-class="mt-3" active-nav-item-class="font-weight-bold" nav-class="font-lg" justified pills card >
     <b-tab title="Mechanics">
         <Board tab="Mechanics" />
     </b-tab>
     <b-tab title="Electronics">
         <Board tab="Electronics"/>
     </b-tab>
     <b-tab title="Custodian">
         <Board tab="Custodian"/>
     </b-tab>
     
   </b-tabs>
</template>
<style>
.font-lg{
    font-size: 1.5rem;
}
</style>