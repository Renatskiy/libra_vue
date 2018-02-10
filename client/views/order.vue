<template>
  <div>
    <section class="hero is-defa">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              DEFAry
            </h1>
            <h2 class="subtitle">
              Книги в пользовании.
            </h2>
              <addBookButton></addBookButton>
          </div>
        </div>
      </section>
      <!-- <order/> -->
      <orderedBooks/>
      <addBookModal></addBookModal>
      <returnBookModal/>
  </div>
</template>
 
<script>
import orderedBooks from 'components/orderedBooks'
import order from 'components/order'
// import books from 'components/books'
import addBookModal from 'components/addBookModal'
import addBookForm from 'components/addBookForm'
import addBookButton from 'components/addBookButton'
import returnBookModal from 'components/returnBookModal'


export default {
  components: {
    // books,
    order,
    addBookModal,
    addBookForm,
    addBookButton,
    orderedBooks,
    returnBookModal
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
</style>
