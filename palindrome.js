document.getElementById("btn btn-outline-secondary").onclick=function(){
    const str=document.getElementById("myText").value;
    var flag="It is palindrome";
    const replaced = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const len = replaced.length;
    for (let i = 0; i < len/2; i++) {
        if (replaced[i] != replaced[len - 1 - i])
        flag="It is not palindrome";
    }
    alert(flag);
}