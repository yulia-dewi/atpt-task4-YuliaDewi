export function randomName():string {
    const firstNames = ['Siti', 'Budi', 'Andi', 'Jono', 'Supri', 'Aldi', 'Bona', 'Rio'];
    const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];

    return `${randomFirst}`;
}

export function getRandomFiveDigitString() {
    const number = Math.floor(Math.random() * 99999) + 1;
    
    return number.toString().padStart(5, '0');
}