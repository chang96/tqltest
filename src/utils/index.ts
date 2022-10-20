function calculateAge(timestamp: string):any{
    let toNumber:any = Number(timestamp);
    let validDate = new Date(toNumber).getFullYear()
    console.log(validDate)
    if(isNaN(toNumber) || isNaN(validDate)){
        return null //"invalid date of birth value"
    }
    console.log(new Date(toNumber))
    let diff = Date.now()>toNumber?  Date.now() - toNumber : toNumber - Date.now()
    let age = new Date(diff)
    console.log(age.getUTCFullYear(), age)
    return Math.abs(new Date().getFullYear() - new Date(toNumber).getUTCFullYear())
}

export {
    calculateAge
}