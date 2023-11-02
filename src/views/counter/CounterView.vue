<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="mb-4">Contador: {{ count }}</h2>
        <button class="btn btn-primary mr-2" @click="increment">
          Incrementar
        </button>
        <button class="btn btn-danger" @click="decrement">Decrementar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CounterView',

  components: {},

  data() {
    return {
      count: 0,
    };
  },

  computed: {},

  methods: {
    increment() {
      this.count++;
    },

    decrement() {
      this.count--;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
