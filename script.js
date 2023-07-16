const days_div_id = document.getElementById('days_div_id')
const hours_div_id = document.getElementById('hours_div_id')
const secs_div_id = document.getElementById('secs_div_id')
const mins_div_id = document.getElementById('mins_div_id')



function timerCounter(){
    let currentDate = new Date()
    const birthdayDate = new Date('2023-12-18 23:59:59');

    console.log('Date: ',currentDate.getDate())
    console.log('Month: ',currentDate.getMonth() + 1)
    console.log('Year: ',currentDate.getFullYear())
    console.log('Hours: ',currentDate.getHours())
    console.log('Seconds: ',currentDate.getSeconds())
    console.log('currentDate: ',currentDate)
    console.log('birthdayDate: ',birthdayDate)
    console.log('comparison: ',currentDate>=birthdayDate)
    if(currentDate>=birthdayDate){
        loader_timer_container_id.style.display = 'none'
    }
    days_div_id.innerText = Math.round((birthdayDate.getTime()-currentDate.getTime())/ (1000 * 60 * 60 * 24))
    hours_div_id.innerText = Math.round((((birthdayDate.getTime()-currentDate.getTime())/ (1000))/( 60 * 60 )))
    mins_div_id.innerText = Math.round((((birthdayDate.getTime() - currentDate.getTime())/1000)/60))
    secs_div_id.innerText = Math.round((birthdayDate.getTime()-currentDate.getTime())/ (1000))
}

setInterval(() => {
    timerCounter()
}, 1000);
 


const main_body_container_id = document.getElementById('main_body_container_id')
const bird_id = document.getElementById('bird_id')

const main_body_content_height = main_body_container_id.offsetHeight;
const bird_id_height = bird_id.offsetHeight;

const content_main_container_id = document.getElementById('content_main_container_id')

content_main_container_id.style.height = (main_body_content_height - (2*bird_id_height)) + 'px'
content_main_container_id.style.marginTop = bird_id_height + 'px'

const left_half_heart_id = document.getElementById('left_half_heart_id')
const right_half_heart_id = document.getElementById('right_half_heart_id')
const love_h3_id = document.getElementById('love_h3_id')
const loveAnimationId = document.getElementById('loveAnimationId')

const distanceToMove = (love_h3_id.offsetWidth-2)/2

function loveAnimation(){
    left_half_heart_id.style.translate = '-'+distanceToMove + 'px'
    right_half_heart_id.style.translate = distanceToMove + 'px'
    loveAnimationId.style.display = 'none'
}

function closeAnimation(){
    left_half_heart_id.style.translate = '2px'
    right_half_heart_id.style.translate = '-2px'
    loveAnimationId.style.display = 'block'
}
