function getCurrentTime(){
    const date=new Date();
    const hours=date.getHours();
    const minutes=date.getMinutes();
    const seconds=date.getSeconds();


    const twelveHorursFormat = hours > 12 ? hours-12:hours;

    const formatHours = twelveHorursFormat < 10 ? '0' + twelveHorursFormat : twelveHorursFormat;

    const formatMinutes = minutes < 10 ? '0' + minutes : minutes;

    const formatSeconds = seconds < 10 ? '0' + seconds : seconds;

//Templet string;

    document.write(`${formatHours} : ${formatMinutes} : ${formatSeconds}`);

}


const timer = setInterval(() =>
{

    getCurrentTime();


},1000);//1000 milisecond time out;

getCurrentTime(timer);

//clearInterval(timer);

