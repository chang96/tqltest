function calculateAge(timestamp: string):any{
    let toNumber:any = Number(timestamp);
    let validDate = new Date(toNumber).getFullYear()
    if(isNaN(toNumber) || isNaN(validDate)){
        return null //"invalid date of birth value"
    }
    return Math.abs(new Date().getFullYear() - new Date(toNumber).getUTCFullYear())
}

export {
    calculateAge
}