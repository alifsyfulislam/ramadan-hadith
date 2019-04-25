var namajTiming = [
    { h: 4, m: 10, s: 0,i:0,azanName: "Fajar"},
    { h: 12, m: 45, s: 0,i:1,azanName: "Zohur"},
    { h: 16, m: 30, s: 0,i:2,azanName: "Asar"},
    { h: 18, m: 25, s: 0,i:3,azanName: "Magrib"},
    { h: 19, m: 45, s: 0,i:4,azanName: "Esha"}
];

var hadithTeller = [
    {j:"ইফতার করার পূর্বে ওজু করে নেয়া সুন্নত!"},
    {j:"রামাজানে প্রতিটি আরবি হরফ পাঠ করিলে ৭০ নেকি লাভ করা যায়।"},
    {j:"রমজান মাসে খেজুরের সামান্য অংশ সদকা করে হলেও নিজেদের জাহান্নাম থেকে রক্ষা করো!"},
    {j:"রামজান এ জান্নাতের সকল দুয়ার খুলে যায় অন্নদিকে জাহান্নাম এর সকল দুয়ার বন্ধ হয়ে যায়!"},
    {j:"যে বেক্তি নিয়িমিত রোজা রাখবে আল্লাহ তালা স্বয়ং তাকে নিজ হাতে পুরস্কার দিবেন!"},
]


var adArea = document.querySelector('.ad_area');
var countDown = document.getElementById('countDown');
var title = document.getElementById('title');
var hadith = document.getElementById('hadith');
var dateReminder = document.getElementById('dateReminder');
var audioFile = document.getElementById('audioFile');
var audioFile2 = document.getElementById('audioFile2');




setInterval(function () {
    checkAzanTime();
    playCounter();
    hadithReminder();
},1000)


function hadithReminder() {
    var today = new Date();
    var currentDate = today.getDate();

    switch (currentDate) {
        case 1:
            readHadith(1);
            dateReminder.innerHTML = "২৬ রমাজান";
            break;
        case 2:
            readHadith(2);
            dateReminder.innerHTML = "২৭ রমাজান";
            break;
        case 3:
            readHadith(3);
            dateReminder.innerHTML = "২৮ রমাজান";
            break;
        case 4:
            readHadith(4);
            dateReminder.innerHTML = "২৯ রমাজান";
            break;
        case 5:
            readHadith(1);
            dateReminder.innerHTML = "৩০ রমাজান";
            break;
        case 6:
            readHadith(2);
            dateReminder.innerHTML = "১ রমাজান";
            break;
        case 7:
            readHadith(3);
            dateReminder.innerHTML = "২ রমাজান";
            break;
        case 8:
            readHadith(4);
            dateReminder.innerHTML = "৩ রমাজান";
            break;
        case 9:
            readHadith(2);
            dateReminder.innerHTML = "৪ রমাজান";
            break;
        case 10:
            readHadith(1);
            dateReminder.innerHTML = "৫ রমাজান";
            break;
        case 11:
            readHadith(2);
            dateReminder.innerHTML = "৬ রমাজান";
            break;
        case 12:
            readHadith(3);
            dateReminder.innerHTML = "৭ রমাজান";
            break;
        case 13:
            readHadith(4);
            dateReminder.innerHTML = "৮ রমাজান";
            break;
        case 14:
            readHadith(3);
            dateReminder.innerHTML = "৯ রমাজান";
            break;
        case 15:
            readHadith(1);
            dateReminder.innerHTML = "১০ রমাজান";
            break;
        case 16:
            readHadith(2);
            dateReminder.innerHTML = "১১ রমাজান";
            break;
        case 17:
            readHadith(3);
            dateReminder.innerHTML = "১২ রমাজান";
            break;
        case 18:
            readHadith(4);
            dateReminder.innerHTML = "১৩ রমাজান";
            break;
        case 19:
            readHadith(1);
            dateReminder.innerHTML = "১৪ রমাজান";
            break;
        case 20:
            readHadith(2);
            dateReminder.innerHTML = "১৫ রমাজান";
            break;
        case 21:
            readHadith(3);
            dateReminder.innerHTML = "১৬ রমাজান";
            break;
        case 22:
            readHadith(4);
            dateReminder.innerHTML = "১৭ রমাজান";
            break;
        case 23:
            readHadith(1);
            dateReminder.innerHTML = "১৮ রমাজান";
            break;
        case 24:
            readHadith(2);
            dateReminder.innerHTML = "১৯ রমাজান";
            break;
        case 25 :
            readHadith(4);
            dateReminder.innerHTML = "২০ রমাজান";
            break;
        case 26:
            readHadith(3);
            dateReminder.innerHTML = "২১ রমাজান";
            break;
        case 27:
            readHadith(2);
            dateReminder.innerHTML = "২২ রমাজান";
            break;
        case 28:
            readHadith(1);
            dateReminder.innerHTML = "২৩ রমাজান";
            break;
        case 29:
            readHadith(3);
            dateReminder.innerHTML = "২৪ রমাজান";
            break;
        case 30:
            readHadith(2);
            dateReminder.innerHTML = "২৫ রমাজান";
            break;
        default :
            readHadith(4);
            break;
    }
}

function readHadith(count) {
    hadith.innerHTML = hadithTeller[count].j;
}

function checkAzanTime() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var currentHour     = today.getHours();
    var currentMin      = today.getMinutes();
    var currentSec      = today.getSeconds();
    namajTiming.forEach(item=>{
        if ( (item.i == 0)&& currentHour == item.h && currentMin == item.m && currentSec == item.s){
            audioFile.autoplay = true;
            audioFile.load();
        }
        else if (item.i == 1,2,3,4 && currentHour ==item.h && currentMin == item.m && currentSec == item.s) {
            audioFile2.autoplay = true;
            audioFile2.load();
        }
    })
}


function playCounter() {
    var today = new Date();
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    namajTiming.forEach(item=>{
        if (item.i == 0 && timeTosec(item.h, item.m, item.s)- timeTosec(parseInt(today.getHours()),parseInt(today.getMinutes()),parseInt(today.getSeconds()))> 0 &&
            (timeTosec(item.h, item.m, item.s)-timeTosec(parseInt(today.getHours()),parseInt(today.getMinutes()),parseInt(today.getSeconds()))<=4*60*60)){
            countDown.innerText = printTimer(timeTosec(item.h, item.m, item.s)-timeTosec(parseInt(today.getHours()),parseInt(today.getMinutes()),parseInt(today.getSeconds())));
            title.innerText = "Sehri Time";
        }
        else if (item.i == 3 && timeTosec(item.h, item.m, item.s) - timeTosec(parseInt(today.getHours()),parseInt(today.getMinutes()),parseInt(today.getSeconds()))> 0 &&
            (timeTosec(item.h, item.m, item.s)-timeTosec(parseInt(today.getHours()),parseInt(today.getMinutes()),parseInt(today.getSeconds()))<=12*60*60)){
            countDown.innerText = printTimer(timeTosec(item.h, item.m, item.s)-timeTosec(parseInt(today.getHours()),parseInt(today.getMinutes()),parseInt(today.getSeconds())));
            title.innerText = "Iftar Time";
        }
        // else{
        //     title.innerText = "Current Time";
        //     countDown.innerText = (today.getHours()<10?"0"+today.getHours() : today.getHours()) + ":" + (today.getMinutes()<10? "0"+today.getMinutes(): today.getMinutes()) + ":" + (today.getSeconds()<10 ? "0"+today.getSeconds():today.getSeconds());
        // }
    })
}




function printTimer(sec) {
    hr = Math.floor(sec / 3600) % 24;
    mm = Math.floor(sec / 60) % 60;
    ss = sec % 60;

    var x = hr < 10? "0"+hr : hr;
    var y = mm < 10? "0"+mm : mm;
    var z = ss < 10? "0"+ss : ss;
    return ( x+":"+y+":"+z)
}
function timeTosec(h, m, s) {
    return h*60*60+m*60+s;
}


adArea.addEventListener('click', function () {
    window.open("https://www.wizardsbd.com/");
})


let fazar = document.getElementById('fazar');
let zohur = document.getElementById('zohur');
let asar = document.getElementById('asar');
let magrib = document.getElementById('magrib');
let esha = document.getElementById('esha');


fazar.innerHTML = namajTiming[0].h +":"+ namajTiming[0].m;
zohur.innerHTML = namajTiming[1].h +":"+ namajTiming[1].m;
asar.innerHTML = namajTiming[2].h +":"+ namajTiming[2].m;
magrib.innerHTML = namajTiming[3].h +":"+ namajTiming[3].m;
esha.innerHTML = namajTiming[4].h +":"+ namajTiming[4].m;


