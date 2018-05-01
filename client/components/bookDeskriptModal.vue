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
                        <button class="button is-warning is-small" @click="openClose()">Взять книгу</button>

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
        import selectBook from 'components/books.vue';
        import bookIdForShow from 'store/thisBookIdForShow.js';

        export default {
            components:{
            },
            data(){
                return{
                    index: '1',
                    selectBook,
                }

            },
            methods: {
                ...mapMutations({
                    BOOK_DESCRIPT_MODAL: 'BOOK_DESCRIPT_MODAL',
                    TAKE_MODAL_TOGGLE: 'TAKE_MODAL_TOGGLE',
                }),
                openClose(){
                    this.TAKE_MODAL_TOGGLE();
                    this.BOOK_DESCRIPT_MODAL();
                }
            },
            computed:{
                currentBook() {
                    var self = this;
                    return this.books.filter(function (item) {
                        return item.bookId === self.get_thisBookIdForShow
                    })[0]
                },
                ...mapGetters([
                    'get_thisBookIdForShow'
                ]),
                ...mapState([
                    'is_book_descr_modal_open',
                'books']),

                item(){

                    var it = localStorage.getItem('selectedBook');
                    return it-1;

                },

            },
            mounted(){

            },
        }
    </script>