<template>
    <div class="field">
        <label class="label">Найти книгу</label>
        <p class="control has-icons-left has-icons-right">
            <input v-model="findBook" class="input" type="text" placeholder="Найти книгу">

            <span class="icon is-small is-left">
		      <i class="fa fa-book"></i>
		    </span>
        </p>
    </div>
</template>
<script>
    import {mapActions, mapGetters, mapState, mapMutations} from 'vuex';
    import bookFilterStore from 'store/bookFilter.js'
    import books from 'store/books.js'
    export default {
        computed: {
            ...mapGetters([
                'bookForFind'
            ]),
            findBook: {
                get: function () {
                    return this.bookForFind

                },
                set: function (e) {
                    this.SET_FIND_BOOK(e)
//                    console.log(e)
                }
            },
        },
        data: function(){
            return{
                //test,

            }

        },
        methods: {
            ...mapMutations(['SET_FIND_BOOK']),
        },
    }



</script>
