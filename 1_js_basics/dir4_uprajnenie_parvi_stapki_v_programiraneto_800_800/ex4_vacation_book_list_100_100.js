function hoursNeededToReadBook(...args) {
    const totalPages = parseInt(args[0]);
    const pagesPerHour = parseInt(args[1]);
    const daysForReadingTheBook = parseInt(args[2]);
    let result = (totalPages / pagesPerHour) / daysForReadingTheBook
    console.log(result)
}

hoursNeededToReadBook('432', '15', '4');