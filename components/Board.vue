<template>
  <div>
    <b-card-group deck>
      <b-card title="To Do" title-tag="h5" class="shadow" body-class="pt-2">
        <div v-if="mechanicsTodo && this.tab === 'Mechanics'">
          <draggable
            class="list-group"
            v-model="mechanicsTodo"
            group="people"
            @start="drag = true"
            @end="drag = false"
          >
            <Task
              v-for="task in mechanicsTodo"
              :key="task.id"
              :title.sync="task.title"
              :id="task.id"
              :status="task.status"
              :description="task.description"
              :created="task.created"
              :date="task.duedate"
              :assignee="task.assignee"
            />
          </draggable>
          <b-button
            @click="
              showAddTaskModal();
              changeStatus('To Do');
            "
            block
            variant="light"
            size="sm"
            ><font-awesome-icon :icon="['fa', 'plus']" /> Add
            <span v-if="mechanicsTodo.length > 0">another</span> Task</b-button
          >
        </div>
        <div v-if="electricianTodo && this.tab === 'Electronics'">
          <draggable
            class="list-group"
            v-model="electricianTodo"
            group="people"
            @start="drag = true"
            @end="drag = false"
          >
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
          </draggable>
          <b-button
            @click="
              showAddTaskModal();
              changeStatus('To Do');
            "
            block
            variant="light"
            size="sm"
            ><font-awesome-icon :icon="['fa', 'plus']" /> Add
            <span v-if="electricianTodo.length > 0">another</span>
            Task</b-button
          >
        </div>
        <div v-if="custodianTodo && this.tab === 'Custodian'">
          <draggable
            class="list-group"
            v-model="custodianTodo"
            group="people"
            @start="drag = true"
            @end="drag = false"
          >
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
          </draggable>
          <b-button
            @click="
              showAddTaskModal();
              changeStatus('To Do');
            "
            block
            variant="light"
            size="sm"
            ><font-awesome-icon :icon="['fa', 'plus']" /> Add
            <span v-if="custodianTodo.length > 0">another</span> Task</b-button
          >
        </div>
      </b-card>
      <b-card title="Doing" title-tag="h5" class="shadow" body-class="pt-2">
        <div v-if="mechanicsDoing && this.tab === 'Mechanics'">
          <draggable
            class="list-group"
            v-model="mechanicsDoing"
            group="people"
            @start="drag = true"
            @end="drag = false"
          >
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
          </draggable>
          <b-button
            @click="
              showAddTaskModal();
              changeStatus('Doing');
            "
            block
            variant="light"
            size="sm"
            ><font-awesome-icon :icon="['fa', 'plus']" /> Add
            <span v-if="mechanicsDoing.length > 0">another</span> Task</b-button
          >
        </div>
        <div v-if="electricianDoing && this.tab === 'Electronics'">
          <draggable
            class="list-group"
            v-model="electricianDoing"
            group="people"
            @start="drag = true"
            @end="drag = false"
          >
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
          </draggable>
          <b-button
            @click="
              showAddTaskModal();
              changeStatus('Doing');
            "
            block
            variant="light"
            size="sm"
            ><font-awesome-icon :icon="['fa', 'plus']" /> Add
            <span v-if="electricianDoing.length > 0">another</span>
            Task</b-button
          >
        </div>
        <div v-if="custodianDoing && this.tab === 'Custodian'">
          <draggable
            class="list-group"
            v-model="custodianDoing"
            group="people"
            @start="drag = true"
            @end="drag = false"
          >
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
          </draggable>
          <b-button
            @click="
              showAddTaskModal();
              changeStatus('Doing');
            "
            block
            variant="light"
            size="sm"
            ><font-awesome-icon :icon="['fa', 'plus']" /> Add
            <span v-if="custodianDoing.length > 0">another</span> Task</b-button
          >
        </div>
      </b-card>
      <b-card title="Done" title-tag="h5" class="shadow" body-class="pt-2">
        <div v-if="mechanicsDone && this.tab === 'Mechanics'">
          <draggable
            class="list-group"
            v-model="mechanicsDone"
            group="people"
            @start="drag = true"
            @end="drag = false"
          >
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
          </draggable>
          <b-button
            @click="
              showAddTaskModal();
              changeStatus('Done');
            "
            block
            variant="light"
            size="sm"
            ><font-awesome-icon :icon="['fa', 'plus']" /> Add
            <span v-if="mechanicsDone.length > 0">another</span> Task</b-button
          >
        </div>
        <div v-if="electricianDone && this.tab === 'Electronics'">
          <draggable
            class="list-group"
            v-model="electricianDone"
            group="people"
            @start="drag = true"
            @end="drag = false"
          >
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
          </draggable>
          <b-button
            @click="
              showAddTaskModal();
              changeStatus('Done');
            "
            block
            variant="light"
            size="sm"
            ><font-awesome-icon :icon="['fa', 'plus']" /> Add
            <span v-if="electricianDone.length > 0">another</span>
            Task</b-button
          >
        </div>
        <div v-if="custodianDone && this.tab === 'Custodian'">
          <draggable
            class="list-group"
            v-model="custodianDone"
            group="people"
            @start="drag = true"
            @end="drag = false"
          >
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
          </draggable>
          <b-button
            @click="
              showAddTaskModal();
              changeStatus('Done');
            "
            block
            variant="light"
            size="sm"
            ><font-awesome-icon :icon="['fa', 'plus']" /> Add
            <span v-if="custodianDone.length > 0">another</span> Task</b-button
          >
        </div>
      </b-card>
    </b-card-group>

    <b-modal
      centered
      ref="addTaskModal"
      id="addTaskModal"
      title="Add Task"
      ok-variant="success"
      ok-title="Save"
      cancel-variant="danger"
      @ok="handleAddTask"
      @hidden="resetAddTask"
    >
      <b-form
        v-if="addTaskShow"
        ref="addTaskFormModal"
        @submit.stop.prevent="submitAddTask"
      >
        <b-form-group
          description="Give it a catchy name."
          :state="nameState"
          invalid-feedback="Task Name is required"
        >
          <label for="title" class="d-block"
            ><font-awesome-icon :icon="['fa', 'align-justify']" /> Title</label
          >
          <b-form-input
            id="formTitle"
            v-model.lazy="addTaskForm.title"
            required
            type="text"
            placeholder="' Change Oil Filter '"
            size="sm"
            :state="nameState"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          :state="descriptionState"
          invalid-feedback="Description is required"
        >
          <label for="description" class="d-block"
            ><font-awesome-icon :icon="['fa', 'align-right']" />
            Description</label
          >
          <b-form-textarea
            v-model="addTaskForm.description"
            id="formDescription"
            size="sm"
            :state="descriptionState"
            required
          ></b-form-textarea>
        </b-form-group>
        <b-form-group
          :state="memberState"
          invalid-feedback="You must assign task to at least one member"
        >
          <label for="members" class="d-block"
            ><font-awesome-icon :icon="['fa', 'users']" /> Assign To</label
          >
          <b-form-select
            v-model="addTaskForm.assignee"
            :state="memberState"
            id="formMembers"
            required
            multiple
            :select-size="4"
          >
            <b-form-select-option :value="null" disabled>
              Please select a Member
            </b-form-select-option>
            <b-form-select-option
              v-for="member in members"
              :key="member.id"
              :value="member.username"
              >{{ member.username }}</b-form-select-option
            >
          </b-form-select>
        </b-form-group>
        <b-form-group>
          <label for="attachments" class="d-block"
            ><font-awesome-icon :icon="['fa', 'paperclip']" /> Add
            Attachments</label
          >
          <b-form-file multiple id="formAttachments"></b-form-file>
        </b-form-group>

        <b-form-group>
          <label for="dueDate"
            ><font-awesome-icon :icon="['fa', 'clock']" /> Due Date</label
          >
          <b-form-datepicker
            v-model="addTaskForm.duedate"
            id="formDueDate"
            right
            locale="en-US"
            today-button
            reset-button
            close-button
            :state="dueDateState"
          ></b-form-datepicker>
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  data() {
    return {
      addTaskForm: {
        title: "",
        description: "",
        assignee: [],
        assigner: "",
        comments: "",
        attachments: null,
        duedate: "",
        created: "",
        status: "",
      },
      status: "",
      nameState: null,
      descriptionState: null,
      memberState: null,
      dueDateState: null,
      id: 2,
      localMechanicTasks: null,
      members: this.$store.state.users,
      addTaskShow: true,
    };
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
    computedMechanicTasks: "addTodo",
  },
  computed: {
    mechanicsTodo: {
      get() {
        return this.$store.getters.mechanicsTodo;
      },
      set(value) {
        console.log(value);
        this.$store.commit("updateMechanicsTodo", value);
      },
    },
    mechanicsDoing: {
      get() {
        return this.$store.getters.mechanicsDoing;
      },
      set(value) {
        console.log(value);
        this.$store.commit("updateMechanicsDoing", value);
      },
    },
    mechanicsDone: {
      get() {
        return this.$store.getters.mechanicsDone;
      },
      set(value) {
        this.$store.commit("updateMechanicsDone", value);
      },
    },
    electricianTodo: {
      get() {
        return this.$store.getters.electricianTodo;
      },
      set(value) {
        this.$store.commit("updateElectricianTodo", value);
      },
    },
    electricianDoing: {
      get() {
        return this.$store.getters.electricianDoing;
      },
      set(value) {
        this.$store.commit("updateElectricianDoing", value);
      },
    },
    electricianDone: {
      get() {
        return this.$store.getters.electricianDone;
      },
      set(value) {
        this.$store.commit("updateElectricianDone", value);
      },
    },
    custodianTodo: {
      get() {
        return this.$store.getters.custodianTodo;
      },
      set(value) {
        this.$store.commit("updateCustodianTodo", value);
      },
    },
    custodianDoing: {
      get() {
        return this.$store.getters.custodianDoing;
      },
      set(value) {
        this.$store.commit("updateCustodianDoing", value);
      },
    },
    custodianDone: {
      get() {
        return this.$store.getters.custodianDone;
      },
      set(value) {
        this.$store.commit("updateCustodianDone", value);
      },
    },
  },
  methods: {
    showAddTaskModal() {
      this.$refs["addTaskModal"].show();
    },
    changeStatus(stat) {
      this.status = stat;
    },
    addTaskFormValidity() {
      const valid = this.$refs.addTaskFormModal.checkValidity();
      this.nameState = valid;
      this.descriptionState = valid;
      this.memberState = valid;
      this.dueDateState = valid;
      return valid;
    },

    handleAddTask(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.submitAddTask();
    },
    submitAddTask() {
      if (!this.addTaskFormValidity()) {
        return;
      }
      let currentDate = new Date();
      this.addTaskForm.created = `${currentDate.getFullYear()}-${
        currentDate.getMonth() + 1
      }-${currentDate.getDate()}`;
      console.log(JSON.stringify(this.addTaskForm));
      this.addTaskForm.status = this.status;
      if (this.tab === "Mechanics") {
        this.id++;
        this.addTaskForm["id"] = "M0" + this.id;
        this.$store.dispatch("addTodoTask", this.addTaskForm);
      }

      this.$nextTick(() => {
        this.$bvModal.hide("addTaskModal");
        console.log(this.$bvModal);
      });
    },

    resetAddTask() {
      this.addTaskForm.title = "";
      this.addTaskForm.description = "";
      this.addTaskForm.assignee = [];
      this.addTaskForm.attachments = null;
      this.addTaskForm.duedate = "";
      this.addTaskForm.created = "";
      this.addTaskForm.status = "";
      this.status = "";
      this.nameState = null;
      this.descriptionState = null;
      this.memberState = null;
      this.dueDateState = null;
      this.addTaskShow = false;

      this.$nextTick(() => {
        this.addTaskShow = true;
      });
    },
  },
  mounted: function () {
    if (this.mechanicTasks) {
      this.localMechanicTasks = this.mechanicTasks;
    }
  },
};
</script>
