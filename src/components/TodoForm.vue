<template>
<div>
<h4>Todo Form(Child Component)</h4>
	<input type="text" v-model="newtodoitem"/>
	<button @click="addNewTodoItem()">Submit</button>
</div>
</template>
<script>
export default{
	data(){
	return {
	newtodoitem:""
	}
	},
	methods:{
	addNewTodoItem(){
	this.$store.dispatch('addNewTodo',this.newtodoitem)
	}
	}
};
</script>
<style>
</style>