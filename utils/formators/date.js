export const ModifyDate = (date) => {
    var d = date?.split('T')[0];
    const DateObj = new Date(d);
  
    return `${DateObj.getDate()} ${DateObj.toLocaleString('en-US', { month: 'long' })} ${DateObj.getFullYear()}`;
  };

  export const dateFormatter = (date, noTime) => {
    const d = new Date(date);
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    const monthsName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return  noTime ?  `${d.getDate()} ${monthsName[d.getMonth()]} ${d.getFullYear()}` : `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${strTime}`;
  };