(function() {

    let nombre = ''
    let apellido = ''
    let dominio = ''
    const form = document.getElementById('form')
    const result= document.getElementById('result')



 form.addEventListener('submit', function(e){
     e.preventDefault();
     nombre= document.getElementById('name').value;
     apellido= document.getElementById('last').value;
     dominio = document.getElementById('domain').value;
     let n = nombre.charAt(0);
     let a = apellido.charAt(0);

        let logic =
        apellido+'@'+dominio +
        '<br>' +
        nombre+'@'+dominio +
        '<br>' +
        apellido+n+'@'+dominio +
        '<br>' +
        apellido+'.'+n+'@'+dominio +
        '<br>'+
         nombre+apellido+'@'+dominio +
        '<br>' +
        nombre+'-'+apellido+'@'+dominio +
        '<br>'+
        nombre+'_'+apellido+'@'+dominio +
        '<br>'
        + nombre+'.'+apellido+'@'+dominio +
        '<br>' 
        + n + apellido +'@'+dominio +
        '<br>' 
        + n + '.'+ apellido +'@'+dominio +
        '<br>' 
        + a + '.'+ nombre +'@'+dominio +
        '<br>' 
        + a +  nombre +'@'+dominio 
     result.innerHTML= logic
     

 });









})();