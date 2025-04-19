// para a listaMedidas para os outros .js
export default function getListaMedidas() {
    return JSON.parse(localStorage.getItem('medidasGYM')) || []
}

const medidas = getListaMedidas()
console.log("Medidas salvas:", medidas[medidas.length - 1])

// localStorage.clear();

// const NovaMedida = [
//     {
//         "Data": "2025-02-10",
//         "Altura": 180,
//         "Peso": 74.9,
//         "Ombro": 120.5,
//         "Peito": 99,
//         "Bíceps D": 36,
//         "Bíceps E": 36,
//         "Antebraço D": 27.5,
//         "Antebraço E": 27,
//         "Punhos": 16,
//         "Cintura": 83,
//         "Quadril": 99.5,
//         "Coxa D": 60.5,
//         "Coxa E": 60,
//         "Coxa Inf. D": 49.5,
//         "Coxa Inf. E": 49.5,
//         "Panturrilha D": 37.5,
//         "Panturrilha E": 37
//     }
// ]
// localStorage.setItem('medidasGYM', JSON.stringify(NovaMedida));