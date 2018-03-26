<template>
    <div>
        <h2>Вы активированы, как <strong>{{ activeUser.login}}</strong></h2>
        <h2><strong style="color:green;"> Книги в пользовании {{ activeUser.useBooksId.length }}</strong></h2>
        <h2>Наименования книг: </h2>
        <div class="books-in-use"  v-for='book in inUse()'>
            <h2><strong>Книга: <br><span >{{ book.title }}
                     <button  class="button is-warning is-small " @click='pushToReturn(book)'>Вернуть книгу
            </button>
                </span></strong></h2>


            <br>

        </div>

        <returnBookModal/>
</div>


</template>

<script>

    import activeUser from 'store/activeUser.js';
    import Users from 'store/users.js';
    import booksInUse from 'store/booksInUse.js';
    import addBookButton from 'components/addBookButton'
    import returnBookModal from 'components/returnBookModal'
    import {mapActions, mapState, mapMutations} from 'vuex';


    export default {
        components: {
            returnBookModal,
        },
        data: function () {
            return {
                activeUser,

                // use: this.inUse(),
            }
        },

        computed: mapState([
            'is_return_open',
            'books',
        ]),
        methods: {
            inUse: function () {
                    var arr = [];
                    const activeUserBooks = this.activeUser.useBooksId;
                    for(const bookItem of activeUserBooks){

                        const book = this.books.filter(b =>{
                            return b.bookId === bookItem

                        });
                        arr.push(...book);
                    };
//                    console.log(arr)
                return arr
            },
            pushToReturn(book){
                localStorage.setItem('bookIdKey', book.bookId);
                this.open()

            },
            deleteBook(){

            },
            ...mapMutations({
                open: 'RETURN_MODAL_TOGGLE'})
        },

    }
</script>
<style>
    .books-in-use {
        display: block;
        border: 1px solid #bbb;
        padding: 10px;
    }
</style>