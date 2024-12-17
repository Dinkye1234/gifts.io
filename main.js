function form1() {
    var emailPhone=document.getElementById("emailPhone").value;

    if(emailPhone==null || emailPhone==""){
        document.getElementById("errorbox").innerHTML="Email эсвэл утасны дугараа оруулна уу";
        return false;
    }
}
function form2(){
    var emailPhone=document.getElementById("emailPhone").value;

    if(emailPhone==null || emailPhone==""){
        document.getElementById("errorbox").innerHTML="Бүх талбарыг бөглөнө үү";
        return false;
    }
    else {
        alert("Амжилтай бүртгүүллэ")
    }
}

const product =[
    {
        id:0,
        Image: './img/hair3.jpg'
    }
]

function validate(){
    var username = document.getElementById("emailPhone").value;
    var password = document.getElementById("password").value;
    if (username == "94262044" || username=="Dnkye"){
        if(password=="1234"){
            alert("Амжилттай нэвтэрлээ")
        }
        else{
            document.getElementById("errorbox").innerHTML="Нууц үг буруу байна";
            return false;
        }
    }
    else{
        document.getElementById("errorbox").innerHTML="Нэвтрэх нэр эсвэл нууц үг буруу байна"
        return false;
    }
}
function validate(){
    var username = document.getElementById("emailPhone").value;
    if (username == "94262044" || username=="dnkye@gmail.com"){
        alert("Амжилттай нэвтэрлээ")
    }
    else{
        document.getElementById("errorbox").innerHTML="И-мэйл хаяг эсвэл утасны дугаар буруу байна"
        return false;
    }
}