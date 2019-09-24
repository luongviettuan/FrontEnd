const HelpUtil = {};
HelpUtil.dateToString = function() {
    let now = new Date();
    return (now.getTime);
}
HelpUtil.stringToDate = function(str){
    let num = Number(str);
    let date = new Date(num);
    return date;
}
HelpUtil.stringToArray = function(str){
    let otherStr = str.split(/, /g);
    return otherStr;
}
module.exports = HelpUtil;