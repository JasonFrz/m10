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
     * Menghitung dot product dari dua vektor.
     * @param {{x: number, y: number, z: number}} v1 - Vektor pertama.
     * @param {{x: number, y: number, z: number}} v2 - Vektor kedua.
     * @returns {number} Hasil dot product.
     */
    dot: (v1, v2) => v1.x * v2.x + v1.y * v2.y + v1.z * v2.z,

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

// (Anda bisa menambahkan fungsi vektor/matrix lainnya di sini jika diperlukan di masa depan)