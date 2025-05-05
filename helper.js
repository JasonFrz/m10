// helper.js - Fungsi utilitas untuk perhitungan Vektor 3D

const Vector3 = {
    /**
     * Membuat objek vektor 3D baru.
     * @param {number} [x=0] - Komponen x.
     * @param {number} [y=0] - Komponen y.
     * @param {number} [z=0] - Komponen z.
     * @returns {{x: number, y: number, z: number}} Objek vektor.
     */
    create: (x = 0, y = 0, z = 0) => ({ x, y, z }),

    /**
     * Menjumlahkan dua vektor.
     * @param {{x: number, y: number, z: number}} v1 - Vektor pertama.
     * @param {{x: number, y: number, z: number}} v2 - Vektor kedua.
     * @returns {{x: number, y: number, z: number}} Hasil penjumlahan vektor.
     */
    add: (v1, v2) => ({
        x: v1.x + v2.x,
        y: v1.y + v2.y,
        z: v1.z + v2.z
    }),

    /**
     * Mengurangkan vektor v2 dari v1 (v1 - v2).
     * @param {{x: number, y: number, z: number}} v1 - Vektor pertama (minuend).
     * @param {{x: number, y: number, z: number}} v2 - Vektor kedua (subtrahend).
     * @returns {{x: number, y: number, z: number}} Hasil pengurangan vektor.
     */
    subtract: (v1, v2) => ({
        x: v1.x - v2.x,
        y: v1.y - v2.y,
        z: v1.z - v2.z
    }),

    /**
     * Mengalikan vektor dengan skalar.
     * @param {{x: number, y: number, z: number}} v - Vektor.
     * @param {number} s - Skalar.
     * @returns {{x: number, y: number, z: number}} Hasil perkalian vektor dengan skalar.
     */
    multiply: (v, s) => ({
        x: v.x * s,
        y: v.y * s,
        z: v.z * s
    }),

    /**
     * Menghitung dot product dari dua vektor.
     * @param {{x: number, y: number, z: number}} v1 - Vektor pertama.
     * @param {{x: number, y: number, z: number}} v2 - Vektor kedua.
     * @returns {number} Hasil dot product.
     */
    dot: (v1, v2) => v1.x * v2.x + v1.y * v2.y + v1.z * v2.z,

    /**
     * Menghitung kuadrat panjang (magnitude) vektor. Lebih cepat dari length() jika hanya perlu perbandingan.
     * @param {{x: number, y: number, z: number}} v - Vektor.
     * @returns {number} Kuadrat panjang vektor.
     */
    lengthSquared: (v) => Vector3.dot(v, v),

    /**
     * Menghitung panjang (magnitude) vektor.
     * @param {{x: number, y: number, z: number}} v - Vektor.
     * @returns {number} Panjang vektor.
     */
    length: (v) => Math.sqrt(Vector3.lengthSquared(v)),

    /**
     * Menghasilkan vektor satuan (vektor dengan panjang 1) dari vektor yang diberikan.
     * @param {{x: number, y: number, z: number}} v - Vektor yang akan dinormalisasi.
     * @returns {{x: number, y: number, z: number}} Vektor hasil normalisasi. Mengembalikan vektor nol jika input adalah vektor nol.
     */
    normalize: (v) => {
        const len = Vector3.length(v);
        if (len === 0) return Vector3.create(0, 0, 0); // Hindari pembagian dengan nol
        const invLen = 1.0 / len;
        return {
            x: v.x * invLen,
            y: v.y * invLen,
            z: v.z * invLen
        };
    }
};

// Fungsi-fungsi tambahan sesuai dengan yang diminta
function createVector(x = 0, y = 0, z = 0) { 
    return { x: x, y: y, z: z }; 
}

function addVectors(v1, v2) { 
    return { x: v1.x + v2.x, y: v1.y + v2.y, z: v1.z + v2.z }; 
}

function subtractVectors(v1, v2) { 
    return { x: v1.x - v2.x, y: v1.y - v2.y, z: v1.z - v2.z }; 
}

function multiplyVectorByScalar(v, s) { 
    return { x: v.x * s, y: v.y * s, z: v.z * s }; 
}

function dotVectors(v1, v2) { 
    return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z; 
}

function vectorLengthSq(v) { 
    return v.x * v.x + v.y * v.y + v.z * v.z; 
}

function vectorLength(v) { 
    return Math.sqrt(vectorLengthSq(v)); 
}

function normalizeVector(v) { 
    const len = vectorLength(v); 
    if (len === 0) return createVector(0, 0, 0); 
    return multiplyVectorByScalar(v, 1 / len); 
}