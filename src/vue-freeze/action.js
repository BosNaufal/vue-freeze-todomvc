
export default function (store) {

	// When User Typing
	store.on('user:typing', (status) => {
		store.get().ui.set({ typing: status })
	})

	// When User Press Enter
	store.on('todo:add', (todo) => {
		store.get().todoApp.todos.push(todo)
	})

	// When User Delete it
	store.on('todo:delete', (i) => {
		store.get().todoApp.todos.splice(i,1)
	})

}
