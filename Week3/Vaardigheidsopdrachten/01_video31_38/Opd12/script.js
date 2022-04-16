function studie (opleiding, leeftijd) {
    if (opleiding === 'Vwo' | 'Havo' | 'VMBO' && leeftijd > 10) {
        return true;
    } else {
        return false;
    }
}

console.log(studie('Vwo', 12));