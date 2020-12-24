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
              <b-card-title title-tag="h6" class="text-muted"
                >Assigned To</b-card-title
              >
              <b-avatar-group class="mb-4">
                <b-avatar variant="success"></b-avatar>
              </b-avatar-group>
              <b-card-sub-title>Description</b-card-sub-title>
              <p>{{ this.description }}</p>
            </b-card>
            <b-card
              v-if="this.attachments.length < 1"
              class="mb-3 border-0"
              body-class="pt-1"
            >
              <b-card-title title-tag="h6" class="text-uppercase text-muted">
                <font-awesome-icon :icon="['fa', 'paperclip']" /> Attachments
              </b-card-title>
              <b-container fluid>
                <b-row cols="3">
                  <b-col
                    v-for="(imgurl, index) in url"
                    :key="index"
                    class="mb-2"
                  >
                    <b-img-lazy
                      fluid
                      thumbnail
                      :src="imgurl"
                      :alt="files[index].name"
                      :title="files[index].name"
                      width="150"
                      height="150"
                    ></b-img-lazy>
                  </b-col>
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
// import { writeFile } from 'fs-web';
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
      default(){
        return []
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
      members: this.$store.state.users,
      hasAttachment: false,
      files: [],
      url: [],
      taskAssignee: this.assignee
    };
  },
  computed:{
    taskMembers(){
      return this.members.find(member=>member.username === this.assignee);
    }
  },
  methods: {
    showModal() {
      this.$refs.taskModal.show();
    },
    hideModal() {
      this.$refs.taskModal.hide();
    },
    onContext(ctx) {
      this.selected = ctx.selectedYMD;
      // console.log(this.selected);
    },
    handleHover(hovered) {
      this.isHovered = hovered;
    },
    previewFiles() {
      this.files = this.$refs.myFiles.files;

      this.files.forEach((file, index) => {
        const url = URL.createObjectURL(this.files[index]);
        this.url.push(url);
      });
    },
    
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
}
</style>
