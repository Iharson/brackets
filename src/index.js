module.exports = function check(str, bracketsConfig) {

      if (str.length % 2 !== 0) {
          return false;
      }

      let newBracketStr = str;
          for(let i=0; i< str.length; i++){
              for(let j=0; j<bracketsConfig.length; j++){
                  let bracketsStr = bracketsConfig[j][0] + bracketsConfig[j][1];
                  newBracketStr=newBracketStr.replace(bracketsStr,"");
              }
          }
          return newBracketStr.length===0;
}
