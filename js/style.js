// Kiểm tra Email - CheckFunction
function isEmail(emailStr)
{
    var emailPat=/^(.+)@(.+)$/
    var specialChars="\\(\\)<>@,;:\\\\\\\"\\.\\[\\]"
    var validChars="\[^\\s" + specialChars + "\]"
    var quotedUser="(\"[^\"]*\")"
    var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/
    var atom=validChars + '+'
    var word="(" + atom + "|" + quotedUser + ")"
    var userPat=new RegExp("^" + word + "(\\." + word + ")*$")
    var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$")
    var matchArray=emailStr.match(emailPat)
    if (matchArray==null) {
        return false
    }
    var user=matchArray[1]
    var domain=matchArray[2]

    // See if "user" is valid
    if (user.match(userPat)==null) {
        return false
    }
    var IPArray=domain.match(ipDomainPat)
    if (IPArray!=null) {
        // this is an IP address
        for (var i=1;i<=4;i++) {
            if (IPArray[i]>255) {
                return false
            }
        }
        return true
    }
    var domainArray=domain.match(domainPat)
    if (domainArray==null) {
        return false
    }

    var atomPat=new RegExp(atom,"g")
    var domArr=domain.match(atomPat)
    var len=domArr.length

    if (domArr[domArr.length-1].length<2 ||
        domArr[domArr.length-1].length>3) {
        return false
    }

    // Make sure there's a host name preceding the domain.
    if (len<2)
    {
        return false
    }

    // If we've gotten this far, everything's valid!
    return true;
}


// Lấy dữ liệu từ input và check
    function showErr(){
        let email = document.getElementById('email');
        let textErr = document.getElementById('warning');
        if (!isEmail(email.value)) {
            email.parentElement.classList.add('err')
            textErr.innerText = 'Email không hợp lệ!!!'
        } else {
            email.parentElement.classList.remove('err');
        }
    }

    document.getElementById('next').onclick = function () {
        showErr();
    }

// Làm Media home
    let image = document.getElementById('media-images');
    let previous = document.getElementById('previous');
    let next = document.getElementById('next');
    let index = 1;
    next.addEventListener('click', function () {
        if(index == 5) {
            index = 1;
            image.src = `images/home${index}.jpg`
        } else {
            index++;
            image.src = `images/home${index}.jpg`
        }
    })
    previous.addEventListener('click', function () {
        if(index == 1) {
            index = 5;
            image.src = `images/home${index}.jpg`
        } else {
            index--;
            image.src = `images/home${index}.jpg`
        }
    })

// Phần mobile
var box = document.querySelector('.boxbox');
var btnMobile = document.querySelector('.header-right-mobile');
var menuMobile = document.querySelector('.mobile-container');
// var headerMobile = document.querySelector('.header-mobile');
var xClose = document.querySelector('.mobile-container a:last-child');

xClose.onclick = function (){
    menuMobile.classList.remove('show');
};
box.onclick = function (){
    menuMobile.classList.remove('show');
};
menuMobile.onclick = function (e) {
    e.stopPropagation();
};
btnMobile.onclick = function (e){
    e.stopPropagation();
    menuMobile.classList.toggle('show');
};
