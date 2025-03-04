const today = new date();
const year = today.getYear ();
const month = today.getMonth();
const date = today.getData();

const formattedDate = `${year}年${month}月${day}日`;

console.log(formattedDate);