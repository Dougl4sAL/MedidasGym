import { getListaMedidas } from "./utilitarios.js"

const listaMedidas = getListaMedidas()
const form = document.getElementById('form-medidas')

// Adicionar nova medida na listaMedidas
form.addEventListener('submit', function (event) {
    event.preventDefault()
    
    // id com incremento para a listaMedidas
    const novoId = listaMedidas.length > 0
        ? listaMedidas[listaMedidas.length - 1].id + 1 : 1

    const novaMedida = {
        id: novoId,
        data: document.getElementById('m-data').value,
        altura: parseFloat(document.getElementById('m-altura').value),
        peso: parseFloat(document.getElementById('m-peso').value),
        ombro: parseFloat(document.getElementById('m-ombro').value),
        peito: parseFloat(document.getElementById('m-peito').value),
        bicepsD: parseFloat(document.getElementById('m-bicepsD').value),
        bicepsE: parseFloat(document.getElementById('m-bicepsE').value),
        antebracoD: parseFloat(document.getElementById('m-antebracoD').value),
        antebracoE: parseFloat(document.getElementById('m-antebracoE').value),
        punho: parseFloat(document.getElementById('m-punho').value),
        cintura: parseFloat(document.getElementById('m-cintura').value),
        quadril: parseFloat(document.getElementById('m-quadril').value),
        coxaD: parseFloat(document.getElementById('m-coxaD').value),
        coxaE: parseFloat(document.getElementById('m-coxaE').value),
        coxaInfD: parseFloat(document.getElementById('m-coxaInfD').value),
        coxaInfE: parseFloat(document.getElementById('m-coxaInfE').value),
        panturrilhaD: parseFloat(document.getElementById('m-panturrilhaD').value),
        panturrilhaE: parseFloat(document.getElementById('m-panturrilhaE').value)
    }

    listaMedidas.push(novaMedida)

    localStorage.setItem('medidasGYM', JSON.stringify(listaMedidas))

    alert("Medidas salvas com sucesso!")

    form.reset()

    console.log('Nova medida adicionada:', novaMedida)

    // Para voltar a pagina index.html
    window.location.href = 'index.html'
})