const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function toDate(number, type) {
  var date = new Date(number);
  var Y = date.getFullYear() + '/';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/';
  var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var HH = date.getHours();
  var MM = date.getMinutes();
  var SS = date.getSeconds();
  if (HH <= 9) {
    HH = "0" + HH;
  }
  if (MM <= 9) {
    MM = "0" + MM;
  }
  if (SS <= 9) {
    SS = "0" + SS;
  }
  var send = null;
  if (type == 'dateTime') {
    send = (Y + M + D + '    ' + HH + ":" + MM + ":" + SS);
  } else if ('time') {
    send = (M + D + "  " + HH + ":" + MM);
  } else if ('times') {
    send = (HH + ":" + MM + ":" + SS);
  } else {
    send = (Y + M + D);
  }
  return send;
}

function getHour(startTime, endTime) {
  //计算出相差天数 
  var date = endTime - startTime;
  var days = Math.floor(date / (24 * 3600 * 1000))

  //计算出小时数  
  var leave1 = date % (24 * 3600 * 1000)    //计算天数后剩余的毫秒数  
  var hours = Math.floor(leave1 / (3600 * 1000))

  //计算相差分钟数  
  var leave2 = leave1 % (3600 * 1000)        //计算小时数后剩余的毫秒数  
  var minutes = Math.floor(leave2 / (60 * 1000))

  //计算相差秒数  
  var leave3 = leave2 % (60 * 1000)      //计算分钟数后剩余的毫秒数  
  var seconds = Math.round(leave3 / 1000)
  var time = days + "天" + hours + "小时" + minutes + "分" + seconds + "秒";

  return time;
}

module.exports = {
  formatTime: formatTime,
  toDate: toDate,
  getHour: getHour
}
