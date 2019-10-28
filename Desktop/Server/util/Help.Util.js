const HelpUtil = {};
HelpUtil.dateToString = function() {
    let now = new Date();
    return (now.getTime());
}
HelpUtil.stringToDate = function(str){
    let num = Number(str);
    let date = new Date(num);
    let arr = date.toString().split(" ")
    return arr[4] + " " + arr[2] +"-"+ arr[1] +"-"+ arr[3];
}
HelpUtil.stringToArray = function(str){
    let otherStr = str.split(/, /g);
    return otherStr;
}
module.exports = HelpUtil;