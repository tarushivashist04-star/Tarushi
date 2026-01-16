setInterval(() => { //repetation of that task
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    /* 12hr =360
    1hr =360/12=30
    */ //60min=30,1=1/2
    mrotation = 6*mtime;
    /*60min =360
    1min=6 */
    srotation = 6*stime;
    /*60sec=360
    1sec=6 */

    hour.style.transform = `rotate(${hrotation}deg)`;
    //rotate is for rotation
    //css tranform prop
    //deg degreee
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);