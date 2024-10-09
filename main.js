function DateStyle1() {
     const data = new Date()
     const month = data.getMonth() + 1
     const date = data.getDate()
     const year = data.getFullYear()
 const time = data.toLocaleTimeString()
    const result = `${month}/${date}/${year} ${time} `
    console.log(result);
}
DateStyle1()
function DateStyle2() {
    const data = new Date()
    const month = data.getMonth() + 1
    const date = data.getDate()
    const year = data.getFullYear()
    const time = data.toLocaleTimeString()
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const day=data.getDay()
    const result = `${dayNames[day]} ${month}/${date}/${year} ${time} `
    console.log(result);
}
DateStyle2()

function DateStyle3() {
    const data = new Date()
    const month = data.getMonth() + 1
    const date = data.getDate()
    const year = data.getFullYear()
    const time = data.toLocaleTimeString()
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day=data.getDay()
    const result = `${year}/${month}/${date} ${time} ${dayNames[day]}`
    console.log(result);}
    DateStyle3()

    function DateStyle4() {
        const data = new Date()
        const month = data.getMonth() + 1
        const date = data.getDate()
        const year = data.getFullYear()
        const time = data.toLocaleTimeString()
        const monthName= ["January","February","March","April","May","June","July","August","September","October","November","December"];    const day=data.getDay()
        const result = ` ${monthName[month]} ${date}th ${year} ${time}`
        console.log(result);
    }
    DateStyle4()
    function DateStyle5() {
        const data = new Date()
        const month = data.getMonth() + 1
        const date = data.getDate()
        const year = data.getFullYear()
        const time = data.toLocaleTimeString()
        const monthName= ["January","February","March","April","May","June","July","August","September","October","November","December"];    const day=data.getDay()
        const result = `${date} ${monthName[month]} ${year} at ${time}`
        console.log(result);
    }
    DateStyle5()
    
