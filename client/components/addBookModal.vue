<template>
	<div class="modal is-active" v-if="isModalVisible">
	  <div class="modal-background"></div>
	  <div class="modal-content">
	  	<div class="box">
	    	<addBookForm></addBookForm>
	  	</div>
	  </div>
	  <button class="modal-close is-large" aria-label="close" @click='SET_MODAL_VISIBILITY'></button>
	</div>
</template>
 
<script>
	import addBookForm from 'components/addBookForm'
	import addBookButton from 'components/addBookButton'
	import {mapState, mapActions, mapMutations} from 'vuex';
	export default {
		mounted() {
			
		},
		computed: mapState([
			'isModalVisible'
		]),
		components: {
		    addBookForm,
		    //addBookButton
		},
		data() {
			return {
			}
		},
		methods: {
			...mapMutations([
				'SET_MODAL_VISIBILITY'
			])
		}

	}

</script>