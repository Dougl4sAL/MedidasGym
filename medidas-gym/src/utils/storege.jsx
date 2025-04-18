// para a listaMedidas para os outros .js
export default function getListaMedidas() {
    return JSON.parse(localStorage.getItem('medidasGYM')) || []
}
