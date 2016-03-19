<template>
  <div>
    <p>Global State UI Typing : {{ state.ui.typing }}</p>
    <button @click="tryMutate">Try Direct Mutate!</button>
  </div>
</template>

<script>
  export default {

    methods: {
      tryMutate(){
        // here the immutable work~
        // direct mutate will not affecting the global state
        // it's just affecting the internal state only
        this.state.ui.typing = !this.state.ui.typing
        console.log('Immutabillity Test',this.state.ui.typing); // true

        // yet the global action will effect to our global state
        // this.$action('user:typing',true); // uncoment this
      },
    },

  };
</script>
