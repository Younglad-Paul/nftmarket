var img = document.getElementById('Buy_NFT')
// var sp = document.getElementsByClassName('.spn')
var a = document.getElementById('1')
var a2 = document.getElementById('1_1')
var b = document.getElementById('2')
var b2 = document.getElementById('2_2')
var c = document.getElementById('3')
var c2 = document.getElementById('3_3')
var d = document.getElementById('4')
var d2 = document.getElementById('4_4')

var xy = document.getElementById('returns')


function az() {
    $('#nfts').css('display', 'none')
    $('#purchase').css('display', 'block')
    $('#spn').html('Tourism #1')
    img.innerHTML= "<img src='../assets/images/acom nft/TEAM TOURISM/white bunny 1.jpg'>"
}
function bz() {
    $('#nfts').css('display', 'none')
    $('#purchase').css('display', 'block')
    $('#spn').html('Tourism #2')
    img.innerHTML = "<img src='../assets/images/acom nft/TEAM TOURISM/white bunny 2.jpg'>"
}
function cz() {
    $('#nfts').css('display', 'none')
    $('#purchase').css('display', 'block')
    $('#spn').html('Tourism #3')
    img.innerHTML = "<img src='../assets/images/acom nft/TEAM TOURISM/white bunny 3.jpg'>"
}
function dz() {
    $('#nfts').css('display', 'none')
    $('#purchase').css('display', 'block')
    $('#spn').html('Tourism #4')
    img.innerHTML = "<img src='../assets/images/acom nft/TEAM TOURISM/white bunny 4.jpg'>"
}

function return0 () {
    $('#nfts').css('display', 'inline-flex')
    $('#purchase').css('display', 'none')
}


a.addEventListener('click', az);
a2.addEventListener('click', az);
b.addEventListener('click', bz);
b2.addEventListener('click', bz);
c.addEventListener('click', cz);
c2.addEventListener('click', cz);
d.addEventListener('click', dz);
d2.addEventListener('click', dz);

xy.addEventListener('click', return0)
