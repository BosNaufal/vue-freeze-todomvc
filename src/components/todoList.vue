<template>
	<div v-if="$state.todoApp.todos">
		<ul>
			<li v-for="todo in mutable($state.todoApp.todos)">
				<span>{{ todo.content }}</span>
				<button style="color:red;" @click.prevent="del($index)">X</button>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {

		methods: {
			del(i){
				this.$action('todo:delete',i)
			}
		},

	};
</script>
