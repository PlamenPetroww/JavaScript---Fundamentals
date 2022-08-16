function requiredReading(numOfPages, pagePerHour, numOfDays) {

    let neededTime = numOfPages / pagePerHour;
    let hoursPerDay = neededTime / numOfDays;
    console.log(hoursPerDay)

}

requiredReading(432,
    15 ,
    4  )