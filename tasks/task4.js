const capitalize = (string) => {
    if(string.length < 1){
        throw('String length must be greater than 1');
    }
    else if(typeof string !== "string"){
     throw('Only accept string');
    }
    else {
      let low = string.toLowerCase();
      return string.charAt(0).toUpperCase() + low.slice(1);
    }

}
module.exports = capitalize;