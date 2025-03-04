const today = new Date();
const year = getfullYear ();
const month = today.getMonth();
const date = today.getDate();

const formattedDate = `${year}年${month}月${date}日`;

console.log(formattedDate);