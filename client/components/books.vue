<template>
	<section class="section">

	<div class="row" v-if="">
		<div class="books_preview books_preview--first-row">

			<div class="books_index"  style="cursor: pointer;" v-for="(book, index) in filteredBookForShow()" @click='click(book.bookId)'>
				<div class="media box first-row"  @click="thisBookIdForShowFun(book.bookId)">
					<div class="media-content">
						<div class="content">
								<p class="image">
									<img :src="book.img">
								</p>

							<div>
								<strong class="title">{{ book.title }}</strong>
								<small>{{ book.author }}</small>
							</div>
							<br>
							<br>


						</div>
					</div>
				</div>

			</div>
		</div>
	</div>

	</section>
</template>



<script>
    import {mapActions, mapGetters, mapState, mapMutations} from 'vuex';
    import bookFilterStore from 'store/bookFilter.js';
    import bookIdForShow from 'store/thisBookIdForShow.js';
    import API from 'lib/api.js'



    export default {
        data() {
            return {
                selektedIndex: '0',
				posts: [],
				errors: [],
				filtered: [],
            }
        },

        computed: {

            selectedBook: function(){
                return this.filteredBookForShow()[this.selektedIndex];
            },
            ...mapGetters([
                'thisBookIdForShow',
				'get_all_books'
            ]),

        },
		async mounted(){
			await this.get_books()


		},

		methods: {
            thisBookIdForShowFun(e){
                this.BOOK_ID_FOR_SHOW(e)
            },
            ...mapMutations({
                    show: 'BOOK_DESCRIPT_MODAL',
                	BOOK_ID_FOR_SHOW: 'BOOK_ID_FOR_SHOW'
            }),
			...mapActions([
			    'get_books'
			]),

				click: function(selectedBook){
						this.show();

						var thisBook = JSON.stringify(selectedBook)
						localStorage.setItem('selectedBook', thisBook);

						var x = localStorage.getItem('selectedBook')

					},
					showBook: function(index){
						this.selektedIndex = index;
//                        console.log(this.selektedIndex)
					},


					filteredBookForShow: function () {


                        const books = this.get_all_books;
                        const bookForFind = bookFilterStore.state.bookForFind;
                        const find = books.filter(i=>{return i.title.toLowerCase().indexOf(bookForFind.toLowerCase()) > -1});
                        if(find.length<=0){

                            return {};
						}else{
                            return (find)
                        	};

                    }
			}
		}
		
</script>
<style>
	.books_find-item{
		border: 1px solid #bbb;
		margin-bottom: 20px;
	}
	body {
		font-size: 16px !important;
	}

	.media-content{
		height: 100%;
	}
	.media-content > .content {
		height: 100%;
		display: flex;
	}
	.row{
		display: flex;
	}
	.books_preview{
		width: 40%;
	}
	.books_preview.books_preview--first-row{
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.media.box.first-row{
		height: 100px;
		width: 100%;
		display: block;
	}
	.media+.media{
		margin-top: 0;

	}
	figure .image {
		height: 200px;
	}
	.image{
		height: 100%;
		width: 128px;
	}
	.image > img {
		height: 100%;
		width: unset;
	}
	.title{
		font-size: 1rem;
	}
	.books {
		height: 100%;
	}
	.media.box.order-book{
		height: 100%;
	}
	.content > div > strong {
		display: block;
	}
	.books_index {
		width: 60%;
		margin-bottom: 20px;
	}


</style>
