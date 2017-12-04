var titulo = document.querySelector('.titulo');
titulo.textContent = "Pacientes Nutricionais";

var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++){
    //atribuir paciente para pacientes
    var paciente = pacientes[i];
    //achar o peso
    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    //achar altura no document
    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    //achar imc no document
    var tdImc = paciente.querySelector('.info-imc');

    //validação para fazer calculo
    var pesoValido = true;
    var alturaValida = true;

    if(peso <= 0 || peso >= 500){
        pesoValido = false;
        alert('Verificar peso, peso inserido é invalido');
        tdImc.textContent = "Peso Invalido";
        //style
        paciente.classList.add("campo-invalido");
    }

    if(altura <= 0 || altura >= 3){
        alturaValida = false;
        alert('Verificar altura, altura inserida é invalida');
        tdImc.textContent = "Altura Invalida";
        //style
        paciente.classList.add("campo-invalido");
    }

    if(pesoValido && alturaValida){
        //fazer o caluclo IMC
        var imc = peso / (altura * altura);
        //substituir value do imc = 0 por imc calculado
        tdImc.textContent = imc.toFixed(2);
    }

}

//Cadastrar novo paciente
var botaoAdicionarPaciente = document.querySelector('#adicionar-paciente');

botaoAdicionarPaciente.addEventListener('click', function(event){

  event.preventDefault();

  //acessar o form
  var form =  document.querySelector('#form-adiciona');

  console.log(form.nome.value);
  console.log(form.peso.value);
  console.log(form.altura.value);
  console.log(form.gordura.value);

});
