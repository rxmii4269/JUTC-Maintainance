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
        <b-button v-b-modal.addMech-todo block variant="light" size="sm"
          ><font-awesome-icon :icon="['fa', 'plus']" /> Add
          <span v-if="mechanicsTodo.length > 0">another</span> Task</b-button
        >
        <b-modal id="addMech-todo"></b-modal>
      </div>
      <div v-if="electricianTodo && this.tab === 'Electronics'">
        <Task
          v-for="task in electricianTodo"
          :key="task.id"
          :title="task.title"
          :id="task.id"
          :status="task.status"
          :description="task.description"
          :created="task.created"
          :date="task.duedate"
          :assignee="task.assignee"
        />
        <b-button v-b-modal.addElec-todo block variant="light" size="sm"
          ><font-awesome-icon :icon="['fa', 'plus']" /> Add
          <span v-if="electricianTodo.length > 0">another</span> Task</b-button
        >
        <b-modal id="addElec-todo"></b-modal>
      </div>
      <div v-if="custodianTodo && this.tab === 'Custodian'">
        <Task
          v-for="task in custodianTodo"
          :key="task.id"
          :title="task.title"
          :id="task.id"
          :status="task.status"
          :description="task.description"
          :created="task.created"
          :date="task.duedate"
          :assignee="task.assignee"
        />
        <b-button v-b-modal.addCust-todo block variant="light" size="sm"
          ><font-awesome-icon :icon="['fa', 'plus']" /> Add
          <span v-if="custodianTodo.length > 0">another</span> Task</b-button
        >
        <b-modal id="addCust-todo"></b-modal>
      </div>
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
        <b-button v-b-modal.addMech-doing block variant="light" size="sm"
          ><font-awesome-icon :icon="['fa', 'plus']" /> Add
          <span v-if="mechanicsDoing.length > 0">another</span> Task</b-button
        >
        <b-modal id="addMech-doing"></b-modal>
      </div>
      <div v-if="electricianDoing && this.tab === 'Electronics'">
        <Task
          v-for="task in electricianDoing"
          :key="task.id"
          :title="task.title"
          :id="task.id"
          :status="task.status"
          :description="task.description"
          :created="task.created"
          :date="task.duedate"
          :assignee="task.assignee"
        />
        <b-button v-b-modal.addElec-doing block variant="light" size="sm"
          ><font-awesome-icon :icon="['fa', 'plus']" /> Add
          <span v-if="electricianDoing.length > 0">another</span> Task</b-button
        >
        <b-modal id="addElec-doing"></b-modal>
      </div>
      <div v-if="custodianDoing && this.tab === 'Custodian'">
        <Task
          v-for="task in custodianDoing"
          :key="task.id"
          :title="task.title"
          :id="task.id"
          :status="task.status"
          :description="task.description"
          :created="task.created"
          :date="task.duedate"
          :assignee="task.assignee"
        />
        <b-button v-b-modal.addCust-doing block variant="light" size="sm"
          ><font-awesome-icon :icon="['fa', 'plus']" /> Add
          <span v-if="custodianDoing.length > 0">another</span> Task</b-button
        >
        <b-modal id="addCust-doing"></b-modal>
      </div>
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
        <b-button v-b-modal.addMech-done block variant="light" size="sm"
          ><font-awesome-icon :icon="['fa', 'plus']" /> Add
          <span v-if="mechanicsDone.length > 0">another</span> Task</b-button
        >
        <b-modal id="addMech-done"></b-modal>
      </div>
      <div v-if="electricianDone && this.tab === 'Electronics'">
        <Task
          v-for="task in electricianDone"
          :key="task.id"
          :title="task.title"
          :id="task.id"
          :status="task.status"
          :description="task.description"
          :created="task.created"
          :date="task.duedate"
          :assignee="task.assignee"
        />
        <b-button v-b-modal.addElec-done block variant="light" size="sm"
          ><font-awesome-icon :icon="['fa', 'plus']" /> Add
          <span v-if="electricianDone.length > 0">another</span> Task</b-button
        >
        <b-modal id="addElec-done"></b-modal>
      </div>
      <div v-if="custodianDone && this.tab === 'Custodian'">
        <Task
          v-for="task in custodianDone"
          :key="task.id"
          :title="task.title"
          :id="task.id"
          :status="task.status"
          :description="task.description"
          :created="task.created"
          :date="task.duedate"
          :assignee="task.assignee"
        />
        <b-button v-b-modal.addCust-done block variant="light" size="sm"
          ><font-awesome-icon :icon="['fa', 'plus']" /> Add
          <span v-if="custodianDone.length > 0">another</span> Task</b-button
        >
        <b-modal id="addCust-done"></b-modal>
      </div>
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
        if (u.status == "To Do") {
          return u;
        }
      });
    },
    mechanicsDoing: function () {
      return this.$store.state.mechanicTasks.filter(function (u) {
        if (u.status == "Doing") {
          return u;
        }
      });
    },
    mechanicsDone: function () {
      return this.$store.state.mechanicTasks.filter(function (u) {
        if (u.status == "Done") {
          return u;
        }
      });
    },
    electricianTodo: function () {
      return this.$store.state.electricianTasks.filter(function (u) {
        if (u.status == "To Do") {
          return u;
        }
      });
    },
    electricianDoing: function () {
      return this.$store.state.electricianTasks.filter(function (u) {
        if (u.status == "Doing") {
          return u;
        }
      });
    },
    electricianDone: function () {
      return this.$store.state.electricianTasks.filter(function (u) {
        if (u.status == "Done") {
          return u;
        }
      });
    },
    custodianTodo: function () {
      return this.$store.state.custodianTasks.filter(function (u) {
        if (u.status == "To Do") {
          return u;
        }
      });
    },
    custodianDoing: function () {
      return this.$store.state.custodianTasks.filter(function (u) {
        if (u.status == "Doing") {
          return u;
        }
      });
    },
    custodianDone: function () {
      return this.$store.state.custodianTasks.filter(function (u) {
        if (u.status == "Done") {
          return u;
        }
      });
    },
  },
};
</script>
