    <template>
        <div class="modal is-active" v-if="is_book_descr_modal_open">
            <div class="modal-background">
                <div class="modal-content">
                    <div class="box">
                        <div class="books">


                            <figure class="media-left" >
                                <p>
                                    <strong class="title"></strong>
                                    <br>
                                    <small>{{ currentBook.author }}</small>
                                    <br>
                                </p>
                                <p class="image">
                                <img :src="currentBook.img" >
                                </p>
                            </figure>
                            <div class="media-content">
                                <div class="content">

                                    <small>{{ currentBook.descr }}</small>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="modal-close is-large" aria-label="close" @click='BOOK_DESCRIPT_MODAL'></div>
            </div>
        </div>

    </template>
    <style>
    .books{
    display: flex;
    }
    </style>

    <script>
        import {mapActions, mapGetters, mapState, mapMutations} from 'vuex';
        import books from 'store/books.js';
        import selectBook from 'components/books.vue';
        import bookIdForShow from 'store/thisBookIdForShow.js';

        export default {
            components:{
            },
            data(){
                return{
                    books,
                    index: '1',
                    selectBook,
                }

            },
            methods: {
                ...mapMutations([
                    'BOOK_DESCRIPT_MODAL',]),
                // thisBook: function () {
                //     return books[this.item]
                // },
            },
            computed:{
                currentBook() {
                    var self = this;
                    return books.filter(function (item) {

                        return item.bookId === self.thisBookIdForShow
                    })[0]
                },
                ...mapGetters([
                    'thisBookIdForShow'
                ]),
                ...mapState([
                    'is_book_descr_modal_open']),

                item(){

                    var it = localStorage.getItem('selectedBook');
                    return it-1;

                },

            },
            mounted(){
//                console.log(this.item)
                console.log(selectBook);
//                console.log(books[this.index])
            },
        }
    </script>