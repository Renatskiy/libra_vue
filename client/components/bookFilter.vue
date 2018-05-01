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
    export default {
        computed: {
            ...mapGetters([
                'get_book_for_find'
            ]),
            findBook: {
                get: function () {
                    return this.bookForFind
                },
                set: function (value) {
                    this.SET_FIND_BOOK(value)
                }
            },
        },
        data: function(){
            return{

            }

        },
        methods: {
            ...mapMutations([
                'SET_FIND_BOOK',
            ]),
            
        },
    }



</script>
