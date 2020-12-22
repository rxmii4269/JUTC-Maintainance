<template>
  <div>
    <b-card @click="showModal" class="shadow mb-3">
      <b-card-title :title="this.title" class="text-capitalize"></b-card-title>
    </b-card>

    <b-modal
      ref="taskModal"
      :title="this.id +':'+ this.title"
      header-class="text-capitalize"
      centered
      size="lg"
    >
      <b-container>
        <b-row>
          <b-col cols="8">
            <b-card class="mb-3 border-0">
              <p>Assigned To:</p>
              <p>Description:</p>
            </b-card>
            <b-card title="Activity" title-tag="h6" class="border-0">
              <b-textarea placeholder="Write a comment" size="sm"> </b-textarea>
            </b-card>
          </b-col>
          <b-col>
            <b-card class="border-0" body-class="pt-1" title="Add to Task" title-tag="h5">
              <b-col>
              <b-dropdown text="Members" size="sm" block no-caret class="mb-3" variant="outline-dark" ></b-dropdown>
              <b-button size="sm" block class="mb-3" variant="outline-dark" title="Due Date">Due Date</b-button>
              <b-form-datepicker size="sm" class="mb-3" button-variant="outline-dark"></b-form-datepicker>
              <b-dropdown text="Attachment" size="sm" block no-caret class="mb-3" variant="outline-dark"></b-dropdown>

              </b-col>
            </b-card>
            <b-card class="border-0"></b-card>
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
      required: true
    },
    status: {
      type: String,
      default: "Todo",
      required: true,
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
  methods: {
    showModal() {
      this.$refs["taskModal"].show();
    },
    hideModal() {
      this.$refs["taskModal"].hide();
    },
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
}
</style>