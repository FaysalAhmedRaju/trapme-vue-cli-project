<template>
<div> <h3>Todos List(Child component)</h3>

 <!-- <to-do v-for="(todo, index) in $store.state.todos" :key="index"/> -->

 <to-do v-for="(todo, index) in todos" :key="index" :todo="todo"/>
</div>
</template>
<script>

import Todo from './Todo.vue';
export default{
	components:{
	'to-do' : Todo
	},
	computed:{
		todos(){
				return this.$store.state.todos;
		}
	}
};
</script>
<style>
</style>