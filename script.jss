// ------------Horário--------------------
     
      var time = new Date();
      var horario = document.getElementsByClassName("time");
      horario[0].innerText = time;

//---------------Verificação Submit no formulário-----------

    function verify(formulario) {
       	 if (formulario["nome"].value =="" || formulario["endereco"].value =="") {
                window.alert("Campos Obrigatórios:Nome & Endereço. Favor verifique.");
            return false;     
       	 }
       	 else {
       	 	return true;
       	 }
       }

       var formulario = document.querySelector("form");
       formulario.onsubmit = function() {return verify(formulario)};