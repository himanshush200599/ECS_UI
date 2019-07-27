import Dexie from "dexie";
const db = new Dexie("BookApp");

db.version(1).stores({
  books:
    "bookID,title,authors,average_rating,isbn,language_code,ratings_count,price"
});

db.open();

export default db;
