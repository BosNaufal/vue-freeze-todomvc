<template>
  <div>
    <div style="display:inline-block;width:25%;float:left;">
      <h3>The TODO App</h3>
      <todo-list></todo-list>
      <todo-input></todo-input>
    </div>

    <div style="display:inline-block;width:30%;float:left;margin-right:50px;">
      <h3>Global State</h3>
      <pre style="background:#f9f9f9;">
        {{ state | json }}
      </pre>
    </div>

    <div style="display:inline-block;width:35%;float:left;">
      <h3>Immutabillity Testing</h3>
      <immutability-test></immutability-test>
    </div>
  </div>
</template>



<script>

  import todoList from './todoList.vue';
  import todoInput from './todoInput.vue';
  import immutabilityTest from './immutability-test.vue';

  export default {
    components: { todoList, todoInput, immutabilityTest }
  };

</script>
