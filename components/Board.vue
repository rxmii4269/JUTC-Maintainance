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
        <b-modal
          centered
          id="addMech-todo"
          title="Add Task"
          ok-variant="success"
          ok-title="Save"
          cancel-variant="danger"
          @ok="handleMechTodo"
          @show="resetMechTodo"
          @hidden="resetMechTodo"
        >
          <b-form
            v-if="mechTodoShow"
            ref="mechTodoForm"
            @submit.stop.prevent="submitMechTodo"
          >
            <b-form-group
              description="Give it a catchy name."
              :state="mechTodoNameState"
              invalid-feedback="Task Name is required"
            >
              <label for="title" class="d-block"
                ><font-awesome-icon :icon="['fa', 'align-justify']" />
                Title</label
              >
              <b-form-input
                id="title"
                v-model="mechTodoForm.title"
                required
                type="text"
                placeholder="' Change Oil Filter '"
                size="sm"
                :state="mechTodoNameState"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              :state="mechTodoDescriptionState"
              invalid-feedback="Description is required"
            >
              <label for="description" class="d-block"
                ><font-awesome-icon :icon="['fa', 'align-right']" />
                Description</label
              >
              <b-form-textarea
                v-model="mechTodoForm.description"
                id="description"
                size="sm"
                :state="mechTodoDescriptionState"
                required
              ></b-form-textarea>
            </b-form-group>
            <b-form-group
              :state="mechTodoMemberState"
              invalid-feedback="You must assign task to at least one member"
            >
              <label for="mechTodoMember" class="d-block"
                ><font-awesome-icon :icon="['fa', 'users']" /> Assign To</label
              >
              <b-form-select
                v-model="mechTodoForm.members"
                :state="mechTodoMemberState"
                id="mechTodoMember"
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
              <label for="mechTodoAttachments" class="d-block"
                ><font-awesome-icon :icon="['fa', 'paperclip']" /> Add
                Attachments</label
              >
              <b-form-file multiple id="mechTodoAttachments"></b-form-file>
            </b-form-group>

            <b-form-group>
              <label for="mechTodoDueDate"
                ><font-awesome-icon :icon="['fa', 'clock']" /> Due Date</label
              >
              <b-form-datepicker
                v-model="mechTodoForm.dueDate"
                id="mechTodoDueDate"
                right
                locale="en-US"
                today-button
                reset-button
                close-button
                :state="mechTodoDueDateState"
              ></b-form-datepicker>
            </b-form-group>
          </b-form>
        </b-modal>
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
        <b-modal
          id="addElec-todo"
          centered
          title="Add Task"
          ok-variant="success"
          ok-title="Save"
          cancel-variant="danger"
          @ok="handleElecTodo"
          @show="resetElecTodo"
          @hidden="resetElecTodo"
        >
          <b-form
            v-if="elecTodoShow"
            ref="elecTodoForm"
            @submit.stop.prevent="submitElecTodo"
          >
            <b-form-group
              description="Give it a catchy name."
              :state="elecTodoNameState"
              invalid-feedback="Task Name is required"
            >
              <label for="title" class="d-block"
                ><font-awesome-icon :icon="['fa', 'align-justify']" />
                Title</label
              >
              <b-form-input
                id="title"
                v-model="elecTodoForm.title"
                required
                type="text"
                placeholder="' Change Oil Filter '"
                size="sm"
                :state="elecTodoNameState"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              :state="elecTodoDescriptionState"
              invalid-feedback="Description is required"
            >
              <label for="description" class="d-block"
                ><font-awesome-icon :icon="['fa', 'align-right']" />
                Description</label
              >
              <b-form-textarea
                v-model="elecTodoForm.description"
                id="description"
                size="sm"
                :state="elecTodoDescriptionState"
                required
              ></b-form-textarea>
            </b-form-group>
            <b-form-group
              :state="elecTodoMemberState"
              invalid-feedback="You must assign task to at least one member"
            >
              <label for="elecTodoMember" class="d-block"
                ><font-awesome-icon :icon="['fa', 'users']" /> Assign To</label
              >
              <b-form-select
                v-model="elecTodoForm.members"
                :state="elecTodoMemberState"
                id="elecTodoMember"
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
              <label for="elecTodoAttachments" class="d-block"
                ><font-awesome-icon :icon="['fa', 'paperclip']" /> Add
                Attachments</label
              >
              <b-form-file multiple id="elecTodoAttachments"></b-form-file>
            </b-form-group>

            <b-form-group>
              <label for="elecTodoDueDate"
                ><font-awesome-icon :icon="['fa', 'clock']" /> Due Date</label
              >
              <b-form-datepicker
                v-model="elecTodoForm.dueDate"
                id="elecTodoDueDate"
                right
                locale="en-US"
                today-button
                reset-button
                close-button
                :state="elecTodoDueDateState"
              ></b-form-datepicker>
            </b-form-group>
          </b-form>
        </b-modal>
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
        <b-modal id="addCust-todo" centered
          title="Add Task"
          ok-variant="success"
          ok-title="Save"
          cancel-variant="danger"
          @ok="handleCustTodo"
          @show="resetCustTodo"
          @hidden="resetCustTodo">
          <b-form
            v-if="custTodoShow"
            ref="custTodoForm"
            @submit.stop.prevent="submitCustTodo"
          >
            <b-form-group
              description="Give it a catchy name."
              :state="custTodoNameState"
              invalid-feedback="Task Name is required"
            >
              <label for="title" class="d-block"
                ><font-awesome-icon :icon="['fa', 'align-justify']" />
                Title</label
              >
              <b-form-input
                id="title"
                v-model="custTodoForm.title"
                required
                type="text"
                placeholder="' Change Oil Filter '"
                size="sm"
                :state="custTodoNameState"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              :state="custTodoDescriptionState"
              invalid-feedback="Description is required"
            >
              <label for="description" class="d-block"
                ><font-awesome-icon :icon="['fa', 'align-right']" />
                Description</label
              >
              <b-form-textarea
                v-model="custTodoForm.description"
                id="description"
                size="sm"
                :state="custTodoDescriptionState"
                required
              ></b-form-textarea>
            </b-form-group>
            <b-form-group
              :state="custTodoMemberState"
              invalid-feedback="You must assign task to at least one member"
            >
              <label for="custTodoMember" class="d-block"
                ><font-awesome-icon :icon="['fa', 'users']" /> Assign To</label
              >
              <b-form-select
                v-model="custTodoForm.members"
                :state="custTodoMemberState"
                id="custTodoMember"
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
              <label for="custTodoAttachments" class="d-block"
                ><font-awesome-icon :icon="['fa', 'paperclip']" /> Add
                Attachments</label
              >
              <b-form-file multiple id="custTodoAttachments"></b-form-file>
            </b-form-group>

            <b-form-group>
              <label for="custTodoDueDate"
                ><font-awesome-icon :icon="['fa', 'clock']" /> Due Date</label
              >
              <b-form-datepicker
                v-model="custTodoForm.dueDate"
                id="custTodoDueDate"
                right
                locale="en-US"
                today-button
                reset-button
                close-button
                :state="custTodoDueDateState"
              ></b-form-datepicker>
            </b-form-group>
          </b-form>
          </b-modal>
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
    return {
      mechTodoForm: {
        title: "",
        description: "",
        members: null,
        attachments: "",
        dueDate: "",
        created: "",
      },
      elecTodoForm: {
        title: "",
        description: "",
        members: null,
        attachments: "",
        dueDate: "",
        created: "",
      },
      custTodoForm: {
        title: "",
        description: "",
        members: null,
        attachments: "",
        dueDate: "",
        created: "",
      },
      mechTodoNameState: null,
      mechTodoDescriptionState: null,
      mechTodoMemberState: null,
      mechTodoDueDateState: null,
      elecTodoNameState: null,
      elecTodoDescriptionState: null,
      elecTodoMemberState: null,
      elecTodoDueDateState: null,
      custTodoNameState: null,
      custTodoDescriptionState: null,
      custTodoMemberState: null,
      custTodoDueDateState: null,
      members: this.$store.state.users,
      mechTodoShow: true,
      elecTodoShow: true,
      custTodoShow: true,
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
  methods: {
    mechTodoFormValidity() {
      const valid = this.$refs.mechTodoForm.checkValidity();
      this.mechTodoNameState = valid;
      this.mechTodoDescriptionState = valid;
      this.mechTodoMemberState = valid;
      this.mechTodoDueDateState = valid;
      return valid;
    },
    elecTodoFormValidity(){
      const valid = this.$refs.elecTodoForm.checkValidity();
      this.elecTodoNameState = valid;
      this.elecTodoDescriptionState = valid;
      this.elecTodoMemberState = valid;
      this.elecTodoDueDateState = valid;
      return valid;
    },
    custTodoFormValidity(){
      const valid = this.$refs.custTodoForm.checkValidity();
      this.custTodoNameState = valid;
      this.custTodoDescriptionState = valid;
      this.custTodoMemberState = valid;
      this.custTodoDueDateState = valid;
      return valid;
    },
    handleMechTodo(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.submitMechTodo();
    },
    handleElecTodo(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.submitElecTodo();
    },
    handleCustTodo(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.submitCustTodo();
    },
    submitMechTodo() {
      if (!this.mechTodoFormValidity()) {
        return;
      }
      let currentDate = new Date();
      this.mechTodoForm.created = `${currentDate.getFullYear()}-${
        currentDate.getMonth() + 1
      }-${currentDate.getDate()}`;
      console.log(JSON.stringify(this.mechTodoForm));
      this.$nextTick(() => {
        this.$bvModal.hide("addMech-todo");
      });
    },
    submitElecTodo() {
      if (!this.elecTodoFormValidity()) {
        return;
      }
      let currentDate = new Date();
      this.elecTodoForm.created = `${currentDate.getFullYear()}-${
        currentDate.getMonth() + 1
      }-${currentDate.getDate()}`;
      console.log(JSON.stringify(this.elecTodoForm));
      this.$nextTick(() => {
        this.$bvModal.hide("addElec-todo");
      });
    },
    submitCustTodo() {
      if (!this.custTodoFormValidity()) {
        return;
      }
      let currentDate = new Date();
      this.custTodoForm.created = `${currentDate.getFullYear()}-${
        currentDate.getMonth() + 1
      }-${currentDate.getDate()}`;
      console.log(JSON.stringify(this.custTodoForm));
      this.$nextTick(() => {
        this.$bvModal.hide("addCust-todo");
      });
    },
    resetMechTodo() {
      this.mechTodoForm.title = "";
      this.mechTodoForm.description = "";
      this.mechTodoForm.members = null;
      this.mechTodoForm.attachments = null;
      this.mechTodoForm.dueDate = "";
      this.mechTodoForm.created = "";
      this.mechTodoNameState = null;
      this.mechTodoDescriptionState = null;
      this.mechTodoMemberState = null;
      this.mechTodoDueDateState = null;
      this.mechTodoShow = false;
      this.$nextTick(() => {
        this.mechTodoShow = true;
      });
    },
    resetElecTodo() {
      this.elecTodoForm.title = "";
      this.elecTodoForm.description = "";
      this.elecTodoForm.members = null;
      this.elecTodoForm.attachments = null;
      this.elecTodoForm.dueDate = "";
      this.elecTodoForm.created = "";
      this.elecTodoNameState = null;
      this.elecTodoDescriptionState = null;
      this.elecTodoMemberState = null;
      this.elecTodoDueDateState = null;
      this.elecTodoShow = false;
      this.$nextTick(() => {
        this.elecTodoShow = true;
      });
    },
    resetCustTodo() {
      this.custTodoForm.title = "";
      this.custTodoForm.description = "";
      this.custTodoForm.members = null;
      this.custTodoForm.attachments = null;
      this.custTodoForm.dueDate = "";
      this.custTodoForm.created = "";
      this.custTodoNameState = null;
      this.custTodoDescriptionState = null;
      this.custTodoMemberState = null;
      this.custTodoDueDateState = null;
      this.custTodoShow = false;
      this.$nextTick(() => {
        this.custTodoShow = true;
      });
    },
  },
};
</script>
