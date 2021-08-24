const stringLength = (string) => {
    if(string.length < 1 && string.length > 10){
        throw('String must be at least 1 character long and not longer than 10 chars');
    }else{
        return string.length;
    }
}

module.exports = stringLength;