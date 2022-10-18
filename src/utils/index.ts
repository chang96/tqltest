function calculateAge(timestamp: string):string{
    let toNumber:number = Number(timestamp);
    if(isNaN(toNumber)){
        return "invalid date of birth value"
    }
    if(toNumber > Date.now()){
        return "Burn in the future?"
    }
    if(toNumber < 0){
        return "Sorry, valid date of birth starts from January 1, 1970"
    }
    let currentDate:number = Date.now();
    let currentAgeInMs = currentDate - toNumber
    let year = 1000*60*60*24*365
    let age = currentAgeInMs / year
    let rounded = Math.round(age)
    return rounded === 1? `${rounded} year` : `${rounded} years`
}

export {
    calculateAge
}