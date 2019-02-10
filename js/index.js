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

window.addEventListener('load', getCurrency)
document.querySelector('.update-currency')
    .addEventListener('click', getCurency)

function getCurrency(){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState ===4 && xhr.status===200){
            const currency = JSON.parse(xhr.responseText);
            document.querySelector('.currency-continer')
                .innerText = currency.USD_UAH.val;
        }
    }
    xhr.open('GET', 'https://free.currencyconverterapi.com/api/v6/convert?q=USD_UAH&compact=y', true)
    xhr.send();
}