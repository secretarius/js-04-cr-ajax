document.querySelector('.page-loaded')
    .innerText = (new Date()).toLocaleTimeString();
    
document.querySelector('.ajax-get-html')
    .addEventListener('click', ajaxGetHtml);
    
function ajaxGetHtml(){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState ===4 && xhr.status ===200) {
            document.querySelector('.html-container')
            .innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'client-data.html', true);
    xhr.send();
}

document.querySelector('.ajax-get-json')
    .addEventListener('click', ajaxGetJson)

function ajaxGetJson(){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState ===4 && xhr.status===200){
            const clientData = JSON.parse(xhr.responseText);
            document.querySelector('.client-name').innerText = clientData.name;
            document.querySelector('.client-account').innerText = clientData.account;
        }
    }
    xhr.open('GET', 'client-data.json', true)
    xhr.send();
}

