const BookPage = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()
    const monthName = monthNames[month]
    const year = date.getFullYear()
    return(
        <>
            book
        </>
    )
}

export default BookPage