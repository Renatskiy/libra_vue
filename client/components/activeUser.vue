<template>
    <div>
        <h2>Вы активированы, как <strong>{{ activeUser.login}}</strong></h2>
        <h2><strong style="color:green;"> Книг в пользовании {{ activeUser.useBooksId.length }}</strong></h2>
        <h2><strong>Наименования книг: <br><span v-for='book in inUse()'>{{ book.title }}<br></span></strong></h2>
</div>


</template>

<script>

    import activeUser from 'store/activeUser.js';
    import Users from 'store/users.js';
    import books from 'store/books.js';
    import booksInUse from 'store/booksInUse.js';

    export default {
        data: function () {
            return {
                activeUser,
                books,
                // use: this.inUse(),
            }
        },
        methods: {
            inUse: function () {
                    var arr = [];
                    const activeUserBooks = this.activeUser.useBooksId;
                    // console.log(activeUserBooks)
                    for(const bookItem of activeUserBooks){

                        const book = books.filter(b =>{
                            console.log(activeUserBooks)
                            return b.bookId === bookItem

                        });
                        arr.push(...book);
                        // console.log(...book)
                    };
                    console.log(arr[1].title)
                return arr
            }
        }
    }
</script>