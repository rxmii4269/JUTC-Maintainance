<template>
  <b-card-group deck>
    <b-card title="To Do" title-tag="h5" class="shadow" body-class="pt-2">
      <div v-if="mechanicsTodo && this.tab === 'Mechanics'">
        <Task
          v-for="task in mechanicsTodo"
          :key="task.id"
          :title="task.title"
          :id="task.id"
          :status="task.status"
          :description="task.description"
          :created="task.created"
          :date="task.duedate"
          :assignee="task.assignee"
        />
      </div>
      <b-button block variant="light" size="sm"
        ><font-awesome-icon :icon="['fa', 'plus']" /> Add another Task</b-button
      >
    </b-card>
    <b-card title="Doing" title-tag="h5" class="shadow" body-class="pt-2">
      <div v-if="mechanicsDoing && this.tab === 'Mechanics'">
        <Task
          v-for="task in mechanicsDoing"
          :key="task.id"
          :title="task.title"
          :id="task.id"
          :status="task.status"
          :description="task.description"
          :created="task.created"
          :date="task.duedate"
          :assignee="task.assignee"
        />
      </div>
      <b-button block variant="light" size="sm"
        ><font-awesome-icon :icon="['fa', 'plus']" /> Add another Task</b-button
      >
    </b-card>
    <b-card title="Done" title-tag="h5" class="shadow" body-class="pt-2">
      <div v-if="mechanicsDone && this.tab === 'Mechanics'">
        <Task
          v-for="task in mechanicsDone"
          :key="task.id"
          :title="task.title"
          :id="task.id"
          :status="task.status"
          :description="task.description"
          :created="task.created"
          :date="task.duedate"
          :assignee="task.assignee"
        />
      </div>
      <b-button block variant="light" size="sm"
        ><font-awesome-icon :icon="['fa', 'plus']" /> Add another Task</b-button
      >
    </b-card>
  </b-card-group>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    tab: {
      type: String,
      required: true,
    },
  },
  watch: {
    tab: function (newVal, oldVal) {
      console.log("Prop changed: ", newVal, " | was: ", oldVal);
    },
  },
  computed: {
    mechanicsTodo: function () {
      return this.$store.state.mechanicTasks.filter(function (u) {
        if (u.status == "todo") {
          return u;
        }
      });
    },
    mechanicsDoing: function () {
      return this.$store.state.mechanicTasks.filter(function (u) {
        if (u.status == "doing") {
          return u;
        }
      });
    },
    mechanicsDone: function () {
      return this.$store.state.mechanicTasks.filter(function (u) {
        if (u.status == "done") {
          return u;
        }
      });
    },
    electricianTodo: function () {
      return this.$store.state.electricianTasks.filter(function (u) {
        if (u.status == "todo") {
          return u;
        }
      });
    },
    electricianDoing: function () {
      return this.$store.state.electricianTasks.filter(function (u) {
        if (u.status == "doing") {
          return u;
        }
      });
    },
    electricianDone: function () {
      return this.$store.state.electricianTasks.filter(function (u) {
        if (u.status == "done") {
          return u;
        }
      });
    },
    custodianTodo: function () {
      return this.$store.state.custodianTasks.filter(function (u) {
        if (u.status == "todo") {
          return u;
        }
      });
    },
    custodianDoing: function () {
      return this.$store.state.custodianTasks.filter(function (u) {
        if (u.status == "doing") {
          return u;
        }
      });
    },
    custodianDone: function () {
      return this.$store.state.custodianTasks.filter(function (u) {
        if (u.status == "done") {
          return u;
        }
      });
    },
  },
};
</script>
