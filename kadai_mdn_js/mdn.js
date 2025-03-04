const today = new Date();
const year = today.getfullYear ();
const month = today.getfullMonth();
const date = today.getfullDate();

const formattedDate = `${year}年${month}月${date}日`;

console.log(formattedDate);