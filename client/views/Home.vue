<template>
	<div>
		<section class="hero is-defa">
	      <div class="hero-body">
	        <div class="container">
	          <h1 class="title">
	           	DEFAry
	          </h1>
	          <h2 class="subtitle">
	            Список книг офиса.
	          </h2>
				<bookFilter/>
				<autorizationButton></autorizationButton>
	          	<addBookButton></addBookButton>
				<newUserButton/>
				<activeUser/>
			</div>
	      </div>
	    </section>
	    <books></books>
	    <addBookModal></addBookModal>
		<autorizationModal/>
		<newUserModal/>
		<bookDeskriptModal/>
		<!--<autorizationModal/>-->

	    <takeBookModal/>
	</div>
</template>
 
<script>
import Counter from 'components/Counter'
// import autorizationModal from 'components/autorizationModal'
import books from 'components/books'
import addBookModal from 'components/addBookModal'
import addBookForm from 'components/addBookForm'
import addBookButton from 'components/addBookButton'
import takeBookForm from 'components/takeBookForm'
import takeBookModal from 'components/takeBookModal'
import order from 'components/order'
import orderedBooks from 'components/orderedBooks'
import autorizationButton from 'components/autorizationButton'
import autorizationModal from 'components/autorizationModal'
import activeUser from 'components/activeUser'
import newUserButton from 'components/newUserButton'
import newUserModal from 'components/newUserModal'
import newUserForm from 'components/newUserForm'
import bookFilter from 'components/bookFilter'
import bookDeskriptModal from 'components/bookDeskriptModal'

// import returnBookButton from 'components/returnBookButton'


export default {
  components: {
    Counter,
    books,
    addBookModal,
    addBookForm,
    addBookButton,
    takeBookForm,
    takeBookModal,
    order,
    orderedBooks,
  	autorizationButton,
      autorizationModal,
      activeUser,
      newUserButton,
      newUserModal,
      newUserForm,
      bookFilter,
      bookDeskriptModal
    
  }
}
</script>

<style>
	.addButton {
		position: absolute;
		top: 50%;
		right: 0;
		translate: transform(0, -50%);
	}
	.d-color {
		color: #00b259;
	}
	.d-bg {
		background-color: #00b259;
	}
	.hero.is-defa {
		background-color: #00b259;
		color: whitesmoke;
	}
	.hero.is-defa .title {
		color: whitesmoke;
	}
	.hero.is-defa .subtitle {
		color: whitesmoke;
	}
	.takeButton{
		margin-right: 100px;
	}
</style>
