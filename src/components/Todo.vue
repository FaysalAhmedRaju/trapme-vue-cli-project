<template>
<div>
<h5>todo(child of child component)</h5>
<div>
<h6>{{todo.title}}</h6>
</div>
	

</div>
</template>
<script>
export default{
	props: ['todo']
};
</script>
<style>
</style>