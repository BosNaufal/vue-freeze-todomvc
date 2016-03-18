<template>
	<h3>The TODO App</h3>
	<todo-list></todo-list>
	<todo-input></todo-input>
</template>



<script>

	import todoList from './todoList.vue';
	import todoInput from './todoInput.vue';

	export default {
		components: { todoList, todoInput }
	};

</script>
