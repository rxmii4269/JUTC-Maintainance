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
      ok-title="Save"
      @ok="submitModal"
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
              <b-card-title
                title-tag="h6"
                class="text-muted text-uppercase"
                v-if="this.assignee.length > 0"
                >Assigned To</b-card-title
              >
              <b-avatar-group
                class="mb-4"
                v-if="this.assignee.length > 0"
                size="50px"
              >
                <b-avatar
                  variant="primary"
                  v-for="member in taskMembers"
                  :key="member.id"
                  :text="member.firstname[0] + member.lastname[0]"
                  :title="member.username"
                ></b-avatar>
              </b-avatar-group>
              <b-card-sub-title class="text-uppercase"
                >Description</b-card-sub-title
              >
              <p>{{ this.description }}</p>
            </b-card>
            <b-card
              v-if="this.attachments.length > 0 || this.url.length > 0"
              class="mb-3 border-0"
              body-class="pt-1"
            >
              <b-card-title title-tag="h6" class="text-uppercase text-muted">
                <font-awesome-icon :icon="['fa', 'paperclip']" /> Attachments
              </b-card-title>
              <b-container fluid>
                <b-row>
                  <b-row
                    v-for="(file, index) in files"
                    :key="index"
                    class="mb-2"
                  >
                    <b-col v-for="(img, index) in file" :key="index">
                      <b-img-lazy
                        fluid
                        thumbnail
                        :src="url[index]"
                        :alt="img.name"
                        :title="img.name"
                        width="200"
                        height="200"
                      ></b-img-lazy>
                    </b-col>
                  </b-row>
                  <b-col
                    v-for="(attachment, index) in this.attachments"
                    :key="index"
                  >
                    <b-img
                      fluid
                      thumbnail
                      :src="attachment"
                      width="150"
                      height="150"
                      :alt="attachment"
                    ></b-img>
                  </b-col>
                </b-row>
              </b-container>
            </b-card>
            <b-card class="border-0">
              <b-card-title title-tag="h6" class="text-muted text-uppercase"
                ><font-awesome-icon :icon="['fa', 'comment-alt']" />
                Comments</b-card-title
              >
              <b-textarea placeholder="Write a comment" size="sm"> </b-textarea>
            </b-card>
          </b-col>
          <b-col>
            <b-card class="border-0" body-class="pt-1">
              <b-card-title
                title="Add to Task"
                title-tag="h6"
                class="text-uppercase pl-3 text-muted"
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

                <label
                  class="custom-file-upload btn btn-outline-dark btn-block btn-sm"
                >
                  <input
                    type="file"
                    class="d-none"
                    @change="previewFiles"
                    ref="myFiles"
                    accept=".jpg, .png, .webp"
                    multiple
                  />
                  <font-awesome-icon :icon="['fa', 'paperclip']" /> Attachment
                </label>
                <label for="example-input">Due Date</label>
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
                class="text-uppercase pl-3 text-muted"
              ></b-card-title>
              <b-col>
                <b-form-select v-model="selectedStatus" size="sm">
                  <b-form-select-option :value="null"
                  disabled
                    >Change Status</b-form-select-option
                  >
                  <b-form-select-option
                    v-for="status in this.statuses"
                    :key="status.index"
                    :value="status"
                  >
                    {{ status }}
                  </b-form-select-option>
                </b-form-select>
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
let self = this;
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
      type: Array,
      default() {
        return [];
      },
    },
    assignee: {
      type: Array,
      default() {
        return [];
      },
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
      taskMembers: [],
      hasAttachment: false,
      files: [],
      url: [],
      members: this.$store.state.users,
      selectedStatus: this.status,
      member: "",
    };
  },
  methods: {
    showModal() {
      this.$refs.taskModal.show();
    },
    hideModal() {
      this.$refs.taskModal.hide();
    },
    submitModal() {},
    onContext(ctx) {
      this.selected = ctx.selectedYMD;
    },
    handleHover(hovered) {
      this.isHovered = hovered;
    },
    previewFiles() {
      this.url = [];
      this.files.push(this.$refs.myFiles.files);
      console.log(this.files);
      this.files.forEach((file) => {
        file.forEach((f) => {
          const url = URL.createObjectURL(f);
          console.log(url);
          this.url.push(url);
        });
      });
    },
  },
  mounted: function () {
    this.assignee.forEach((assignee) => {
      this.taskMembers.push(this.$store.getters.getTaskMembers(assignee));
    });
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
}
</style>
