var books = require('./Library');

test('Book', () => {

    expect(books.returnBookDataById(1)).toBeNull();
});

test('bookid', () => {
    var bookId = 1;
    expect(books.mapallbookids()).toContain(bookId);
});