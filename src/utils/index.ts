function calculateAge(timestamp: string):any{
    let toNumber:any = timestamp === ''? NaN : Number(timestamp);
    let validDate = new Date(toNumber).getFullYear()
    if(toNumber > Date.now()){
        return null
    }
    if(isNaN(toNumber) || isNaN(validDate)){
        return null
    } else
    return Math.abs(new Date().getFullYear() - new Date(toNumber).getUTCFullYear())
}

export {
    calculateAge
}