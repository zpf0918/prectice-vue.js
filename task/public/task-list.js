Vue.component('task-list', {
  props: ['items','tag'],
  template: `
    <div class="col-md-6 mt-5">
      <div class="list-group">
        <task-item v-bind:item="item" v-on:click-complete="onCompleted" v-bind:tag="tag" v-for="item in items"></task-item>
      </div>
    </div>
  `,
  methods: {
    onCompleted(id) {
      this.$emit('click-complete' ,id);
    }
  }
});
