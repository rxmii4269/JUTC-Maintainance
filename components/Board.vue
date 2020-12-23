<template>
  <b-card-group deck>
    <b-card title="To Do" title-tag="h5" class="shadow" body-class="pt-2">

      <Task />
      <b-button block variant="light" size="sm"><font-awesome-icon :icon="['fa', 'plus']" /> Add another Task</b-button>
    </b-card>
    <b-card title="Doing" title-tag="h5" class="shadow" body-class="pt-2">
      <b-button block variant="light" size="sm"><font-awesome-icon :icon="['fa', 'plus']" /> Add another Task</b-button>
    </b-card>
    <b-card title="Done" title-tag="h5" class="shadow" body-class="pt-2">
      <b-button block variant="light" size="sm"><font-awesome-icon :icon="['fa', 'plus']" /> Add another Task</b-button>
    </b-card>
  </b-card-group>
</template>
<script>
export default {
    data(){
      return{

      }
    }
}
</script>