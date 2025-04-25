function myfunction(){
    var a=document.getElementById("unm").value;
    var b=document.getElementById("psw").value;
    if(a==""||b=="")
    {
        alert("User Name And Password Mandatory");
        return false;
    } 
    else if(a.length<4)
        {
        alert("User Name Must 4 Characters");
        return false;
        }

        else if(b.length<8)
            {
            alert("Password Must 8 Characters");
            return false;
            }else
          
       {
        true;
    }  
}