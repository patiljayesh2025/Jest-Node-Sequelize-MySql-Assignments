let Library = [{
        "bookid": 1,
        "bookname": "Alchemist",
        "author": "Paulo Cheolo",
        "cost": 500
    },
    {
        "bookid": 2,
        "bookname": "Rich dad poor dad",
        "author": "Robert Kiwosaki",
        "cost": 3000
    }

];

function returnDataById(num) {
    let book = Library.find(book => book.bookid == num);
    if (book == undefined)
        return null;
    else
        return book;
}

function mapbookids() {
    let result = Library.map(a => a.bookid);
    return result;
}

module.exports = {
    returnDataById,
    mapbookids
}