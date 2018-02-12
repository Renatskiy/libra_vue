<template>
	<button class="button is-warning is-small addButton" @click='SET_MODAL_VISIBILITY'>Добавить книгу</button>
</template> 

<script>
	import {mapActions, mapState, mapMutations} from 'vuex';
	export default {
		mounted() {
			return console.log('addBookButton component')
		},

		components: {
		  	// addBookModal
		},
		 methods: {
		    ...mapMutations([
				'SET_MODAL_VISIBILITY'
				])
		  },
	}
</script>
<style>
	.button.is-small{
		position: relative;
	}
</style>