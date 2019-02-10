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
