export async function totalPriceCalculation(value: string[]): Promise<string> {
    let price: number[] = new Array();

    for (let i: number = 0; i < value.length; i++) {    // mengubah string di dalam array price menjadi angka
        const itemPrice = value[i].replace('Rs. ', '');
        price.push(parseInt(itemPrice));
    }

    const total = price.reduce((sum, current) => sum + current, 0); // Untuk menjumlah semua angka di dalam array price

    return "Rs. " + total;
}