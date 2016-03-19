
<template>
  <div>
    <input type="text" v-model="input" @keydown.enter="todoAdd"/>
    <p class="status">{{ state.ui.typing ? 'User Is Typing....' : '' }}</p>
  </div>
</template>

<script>

  export default {

    data(){
      return{
        input: ""
      };
    },

    watch:{
      input(val, old){
        if(val !== "") return this.$action('user:typing',true)
        return this.$action('user:typing',false)
      }
    },

    methods: {
      todoAdd(){
        let me = this
        this.$action('todo:add',{
          content: me.input,
          done: false
        })
        me.input = ""
      }
    }

  };
</script>
