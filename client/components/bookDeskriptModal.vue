    <template>
        <div class="modal is-active" v-if="is_book_descr_modal_open">
            <div class="modal-background">
                <div class="modal-content">
                    <div class="box">
                        <div class="books"">

                            <figure class="media-left" >
                                <p class="image">
                                <img :src="books[this.item].img" >
                                </p>
                            </figure>
                            <div class="media-content">
                                <div class="content">
                                    <p>
                                        <strong class="title"></strong>
                                        <br>
                                        <small>{{ books[this.item].author }}</small>
                                        <br>
                                    </p>
                                    <small>{{ books[this.item].descr }}</small>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="modal-close is-large" aria-label="close" @click='BOOK_DESCRIPT_MODAL'></div>
            </div>
        </div>

    </template>

    <script>
        import {mapMutations, mapState} from 'vuex';
        import books from 'store/books.js';

        export default {
            components:{
            },
            data(){
                return{
                    books,
                    index: '1',
                }

            },
            methods: {
                ...mapMutations([
                    'BOOK_DESCRIPT_MODAL']),
                thisBook: function () {
                    return books[this.item]
                },
            },
            computed:{
                ...mapState([
                    'is_book_descr_modal_open']),

                item(){

                    var it = localStorage.getItem('selectedBook');
                    return it-1;

                },

            },
            mounted(){
                console.log(this.item)
//                console.log(books[this.index])
            },
        }
    </script>