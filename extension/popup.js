    
// fetching url from address bar & converting into a string & saving in a var named full_url
const full_url = window.location.toString();

//url is class & domain is an obj which is created, full_url is parameter
let domain = (new URL(full_url));

// domain is variable which stores hostname like (www.example.com)
domain = domain.hostname;
console.log(domain); 


//includes fn returns boolean values therefore it checks if www is present in hostname or not
if (domain.includes("www")){

    domain = domain.replace('www.','');
    console.log(domain); 
}

//xmlhttpreq interacts with servers & retrieves data

var request = new XMLHttpRequest();


request.open('GET', 'https://192.168.0.108/cgi-bin/prod.py?x=' +domain);
console.log('https://192.168.0.108/cgi-bin/prod.py?x=' +domain);
request.send();

request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        
        //alert(this.responseText);

            
    }
};
    





  


