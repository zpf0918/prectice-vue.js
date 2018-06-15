Vue.component('task-menu', {
  props: ['items'],
  template: `
    <div class="col-md-1 mt-5">
      <div class="btn-group-vertical" role="group" v-for="item in items">
        <button type="button" class="btn btn-secondary" v-on:click="onSelected(item.tag)">{{ item.text }}</button>
      </div>
    </div>
  `,
  methods: {
    onSelected(tag) {
      this.$emit('click-select', tag);
    }
  }
});
