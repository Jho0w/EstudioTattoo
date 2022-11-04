
const button = document.querySelector("#send");

button.addEventListener("click", function(e){

  e.preventDefault();
  const nome = document.querySelector("#nome").value;
  
  var servico = document.getElementsByName("servico");
  var content = '';
  for (var i = 0; i < servico.length; i++) {
    if (servico[i].checked) {
      content = servico[i].value;
    }
  }
  
  const ideia = document.querySelector("#ideia").value;
  const local = document.querySelector("#local").value;
  const tamanho = document.querySelector("#tamanho").value;
  var celular = "5541985216770";

  var texto = "*Nome:* " + nome + "\n*Serviço:* " + content + "\n*Ideia:* " + ideia + "\n*Local:* " + local + "\n*Tamanho:* " + tamanho;
  texto = window.encodeURIComponent(texto);

  window.open("https://api.whatsapp.com/send?phone=" + celular + "&text=" + texto, "_system");

})