<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="mb-4">Contador: {{ getCount }}</h2>
        <button class="btn btn-danger mr-2" @click="decrementValue">
          Decrementar
        </button>
        <button class="btn btn-primary" @click="increment">Incrementar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'CounterView',

  components: {},

  data() {
    return {};
  },

  computed: {
    ...mapState('counter', ['count']),

    ...mapGetters('counter', ['getCount']),
  },

  methods: {
    ...mapMutations('counter', ['increment', 'decrement']),

    decrementValue() {
      if (this.count <= 0) return;
      this.decrement();
    },
  },
};
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
