
var moment = require('moment');

function timestamp(date){
return moment(date).format('DDTHH:mm:ss.SSS')
}

module.exports=timestamp;