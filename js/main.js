// The user will enter a date. 
// Use that date to get the NASA picture of the day 
// from that date! https://api.nasa.gov/
let btn = document.querySelector('button').addEventListener('click', goNasa)
// let img,desc,name;
function hideImg() {
    document.querySelector('.img').style.display = 'none';
}
function hideVid() {
    document.querySelector('.iframe').style.display = 'none'
}

function goNasa(){
let date = document.querySelector('#input').value

    let url = `https://api.nasa.gov/planetary/apod?api_key=1uw46VepDLgntL3QDq1ZU73LDbMaKQdET4bssXaZ&date=${date}` 
fetch(url)
.then(res => res.json())
.then(data => {
    // console.log(data);
    document.querySelector('h2').innerText= data.title
if(data.media_type === 'image'){
    hideVid()
    document.querySelector('.img').src = data.hdurl;
} else if (data.media_type === 'video'){
    hideImg()
    document.querySelector('iframe').src = data.url;
}
document.querySelector('h3').innerText = data.explanation
})
}