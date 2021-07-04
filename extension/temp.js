var request = new XMLHttpRequest();

request.open('GET', 'https://192.168.8.108/result.html');
request.send();

request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        
        //alert(this.responseText);
        jsop1.innerHTML= this.responseText;
        
            
    }
};
