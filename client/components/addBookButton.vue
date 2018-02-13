<template>

		<button class="button is-warning is-small addButton" @click='open'>Добавить книгу</button>
</template>

<script>
	import {mapActions, mapState, mapMutations} from 'vuex';
    import activeUser from 'store/activeUser.js';
	export default {
		mounted() {
			// console.log(activeUser)

		},

		components: {
		  	// addBookModal
		},
		 methods: {
             ...mapMutations({
                 openWindow: 'SET_MODAL_VISIBILITY'
             }),
			 open() {
                 if(activeUser.login.length>0) {
                     this.openWindow();
                     return true;
                 }else{
                     alert('нужна авторизация')
				 }
			 },
		  },
	}
</script>
<style>
	.button.is-small{
		position: relative;
	}
</style>