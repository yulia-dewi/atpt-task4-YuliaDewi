export function randomName():string {
    const Names = ['Siti', 'Budi', 'Andi', 'Jono', 'Supri', 'Aldi', 'Bona', 'Rio'];
    const randomName = Names[Math.floor(Math.random() * Names.length)];

    return randomName;
}

export function getRandomFiveDigit():string {
    const number = Math.floor(Math.random() * 99999) + 1;

    return number.toString().padStart(5, '0');
}