<template>
  <div>
    <b-card
      @click="showModal"
      :bg-variant="isHovered ? 'secondary' : 'light'"
      :text-variant="isHovered ? 'light' : ''"
      class="shadow-sm mb-3 mx-0"
      body-class="p-2"
      v-b-hover="handleHover"
    >
      <b-card-title
        :title="this.title"
        title-tag="h6"
        class="text-capitalize mb-0"
      ></b-card-title>
    </b-card>

    <b-modal
      ref="taskModal"
      :title="this.id + ':' + this.title"
      header-class="text-capitalize"
      centered
      size="lg"
    >
      <b-container>
        <b-row>
          <b-col cols="8">
            <b-card class="mb-3 border-0">
              <p>Assigned To: {{ this.assignee }}</p>
              <p>Description: {{ this.description }}</p>
            </b-card>
            <b-card title="Activity" title-tag="h6" class="border-0">
              <b-textarea placeholder="Write a comment" size="sm"> </b-textarea>
            </b-card>
          </b-col>
          <b-col>
            <b-card class="border-0" body-class="pt-1">
              <b-card-title
                title="Add to Task"
                title-tag="h6"
                class="text-uppercase pl-3"
              ></b-card-title>
              <b-col>
                <b-dropdown
                  text="Members"
                  size="sm"
                  block
                  no-caret
                  class="mb-3"
                  variant="outline-dark"
                >
                  <b-dropdown-item v-for="member in members" :key="member.id">
                    {{ member.username }}
                  </b-dropdown-item>
                </b-dropdown>
                <b-dropdown
                  text="Attachment"
                  size="sm"
                  block
                  no-caret
                  class="mb-3"
                  variant="outline-dark"
                ></b-dropdown>
                <label for="example-input">Due Date:</label>
                <b-input-group class="mb-3" size="sm">
                  <b-form-input
                    id="example-input"
                    v-model="value"
                    type="text"
                    placeholder="YYYY-MM-DD"
                    autocomplete="off"
                    size="sm"
                  ></b-form-input>
                  <b-input-group-append>
                    <b-form-datepicker
                      v-model="value"
                      button-only
                      right
                      locale="en-US"
                      aria-controls="example-input"
                      @context="onContext"
                      size="sm"
                      button-variant="outline-dark"
                      today-button
                      reset-button
                    ></b-form-datepicker>
                  </b-input-group-append>
                </b-input-group>
              </b-col>
            </b-card>
            <b-card class="border-0">
              <b-card-title
                title="Actions"
                title-tag="h6"
                class="text-uppercase pl-3"
              ></b-card-title>
              <b-col>
                <b-dropdown
                  text="Status"
                  size="sm"
                  block
                  no-caret
                  class="mb-3"
                  variant="outline-dark"
                >
                  <b-dropdown-item
                    v-for="status in this.statuses"
                    :key="status"
                  >
                    {{ status }}
                  </b-dropdown-item>
                </b-dropdown>
              </b-col>
            </b-card>
            <b-card class="border-0">
              <b-card-sub-title class="float-right">
                <small class="ml-5">Created: {{ this.created }}</small>
                <small class="ml-5">Updated: {{ this.updated }}</small>
              </b-card-sub-title>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "title",
      required: true,
    },
    id: {
      type: String,
      default: "M02",
      required: true,
    },
    status: {
      type: String,
      default: "To Do",
      required: true,
    },
    description: {
      type: String,
      default: "Description",
    },
    created: {
      type: String,
      default: "2020-09-12",
    },
    updated: {
      type: String,
      default: "2020-09-12",
    },
    date: {
      type: String,
      default: "2020-09-12",
    },
    attachments: {
      type: Object,
      default() {
        return { attachments: [] };
      },
    },
    assignee: {
      type: String,
      default: "",
    },
    assigner: {
      type: String,
      default: "",
    },
    comments: {
      type: Object,
      default() {
        return { comments: [] };
      },
    },
  },
  data() {
    return {
      value: this.date,
      selected: "",
      isHovered: false,
      statuses: this.$store.state.statuses,
      members: this.$store.state.users,
    };
  },
  methods: {
    showModal() {
      this.$refs["taskModal"].show();
    },
    hideModal() {
      this.$refs["taskModal"].hide();
    },
    onContext(ctx) {
      this.selected = ctx.selectedYMD;
      console.log(this.selected);
    },
    handleHover(hovered) {
      this.isHovered = hovered;
    },
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
}
</style>