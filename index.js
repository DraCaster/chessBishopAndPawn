const challengeFunction = function(bishop, pawn){

    let values = {'A':1,'B':2,'C':3,'D':4,'E':5,'F':6,'G':7,'H':8}

    let posBishop = bishop.split("")
    let posPawn = pawn.split("")

    let ejeX = (values[posBishop[0]] - values[posPawn[0]])*2
    let ejeY = (parseInt(posBishop[1]) - parseInt(posPawn[1]))*2

   if(ejeX === 0 || ejeY === 0)
       return false

    return ejeX === ejeY;
}

module.exports = challengeFunction
