$(document).ready(function(){
    $('header button').on('click',function() {
        $('form').slideDown();
    })
})

$('#botao-limpar').on('click',function() {
    $('form').slideUp();
    $('ul').empty();
})

$('form').on('submit', function(e) {
    e.preventDefault();
    const tarefa = $('#tarefa').val();
    if (tarefa === '') {
        alert('Favor informar uma tarefa.');
        return false;
    }
    
    const novoItem = $('<li style="display: none"></li>');
    novoItem.text(tarefa);
    $('ul').append(novoItem);
    novoItem.fadeIn(1000);

    $('#tarefa').val('');
    return false;
})