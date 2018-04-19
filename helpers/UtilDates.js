// recibe una fecha en formato yyyy-mm-dd,
// retorna un Date con el dia lunes
function getMonday(dateStr) {
    const [yearD, monthD, dayD] = dateStr.split('-');
    try {
      let d = new Date(yearD, monthD - 1, dayD);
      if ( isNaN ( d.getTime())) {
          return null;
      }

      if (( d.getFullYear()  !== parseInt(yearD)) ||
          ( d.getMonth()  !== parseInt(monthD,10)-1  ) ||
          ( d.getDate()  !== parseInt(dayD,10))) {
          return null;
       }

      let day = d.getDay();
      let diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
      d.setHours(0,0,0,0);
      return new Date(d.setDate(diff));
  } catch ( e ){
      return null;
  }
}

module.exports.getMonday = getMonday;
