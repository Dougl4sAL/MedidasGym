// para a listaMedidas para os outros .js
export default function getListaMedidas() {
    return JSON.parse(localStorage.getItem('medidasGYM')) || []
}

const medidas = getListaMedidas()
console.log("Medidas salvas:", medidas)

// localStorage.clear()

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
//     },
//     {
//         "Data": "2025-03-17",
//         "Altura": 180,
//         "Peso": 78.7,
//         "Ombro": 121.5,
//         "Peito": 101.5,
//         "Bíceps D": 37,
//         "Bíceps E": 37,
//         "Antebraço D": 28.5,
//         "Antebraço E": 28,
//         "Punhos": 16.5,
//         "Cintura": 85.5,
//         "Quadril": 101.5,
//         "Coxa D": 61,
//         "Coxa E": 61,
//         "Coxa Inf. D": 50,
//         "Coxa Inf. E": 49.5,
//         "Panturrilha D": 38.5,
//         "Panturrilha E": 38
//     },
//      {
//             "Data": "2025-04-10",
//             "Altura": 180, 
//             "Peso": 79.5,
//             "Ombro": 122.5,
//             "Peito": 102.5,
//             "Bíceps D": 38,
//             "Bíceps E": 38,
//             "Antebraço D": 29.5,
//             "Antebraço E": 29,
//             "Punhos": 17,
//             "Cintura": 84.5,
//             "Quadril": 102.5,
//             "Coxa D": 62,
//             "Coxa E": 62,
//             "Coxa Inf. D": 51,
//             "Coxa Inf. E": 50.5,
//             "Panturrilha D": 39,
//             "Panturrilha E": 38.5
//         }
// ]
// localStorage.setItem('medidasGYM', JSON.stringify(NovaMedida))