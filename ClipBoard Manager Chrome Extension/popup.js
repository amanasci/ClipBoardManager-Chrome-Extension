window.onload=function(){
    var field =document.getElementById("data");
    field.value='';
    field.select();
    document.execCommand('paste');
    field.readOnly=true;
};
