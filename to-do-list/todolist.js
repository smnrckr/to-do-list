// Listeye boş karakter eklenemiyor. Bununla birlikte hiçbir şey yazılmadığında da aynı hatayı veriyor.
// Yazacağınız JavaScript kodu içerisinde element eklemeyi sağlayan bir fonksiyon, element silmeyi sağlayan bir fonksiyon, yapıldı işaretlenmesini sağlayan bir fonksiyon olması gerekiyor.
// Element eklendiğinde ve hata verirken sağ üstte uyarı verdiğini fark etmişsinizdir. Bunu sağlayan Bootstrap Toast bildirimdir. Sayfaya gidip toast nedir nasıl yapılır bunu araştırın ve kodunuza ekleyin.
// Önce ana fonksiyonlar için uğraşın. Yapıldı, toast bildirim bunlar biraz daha için artistliği. Öncelikli amacını sağlıyor olması lazım.
// Yazdığınız js dosyasını projenize eklemeyi unutmayın.
// Yaptığınız yapıya Local Storage'ı da ekleyip verilerin kaybolmamasını sağlayın.

let addingMess = document.querySelector("#liveToast");
let empty = document.querySelector("#liveToast2")
let newInput = document.querySelector("#task");
let ekle = document.querySelector("#liveToastBtn");
let liste = document.querySelector("#list");
let toDO = document.querySelector("#formInput")
toDO.addEventListener('submit', formSubmit);



//eklendi mesajı
function success(){ 
    let successAdding =new bootstrap.Toast(addingMess);
    successAdding.show();
}
//boş girdi vermeyiniz mesajı
function emptyAdd(){
    let empAdding =new bootstrap.Toast(empty);
    empAdding.show();
}
//local storageye ekleme
function addLocalStorage(){
    localStorage.setItem("toDo", liste.innerHTML)
}

// yapıldı işaretle
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

//listeye ekleme ve x'e basarak silme
function newElement(){
  
    if (newInput.value === "") {
        emptyAdd();
    }
    else {
        //listeye ekle
        let li = document.createElement("li");
        li.innerHTML = newInput.value;
        liste.appendChild(li);
        newInput.value="";
        //remove işaretini ekle
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        //x'e basıldığında remove etsin
        let close = document.getElementsByClassName("close");
        for (let i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
        //eklendi mesajı göster ve storageye ekle
        success();
        addLocalStorage();
    }
}





