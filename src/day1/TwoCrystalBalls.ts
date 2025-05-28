export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpValue = Math.floor(Math.sqrt(breaks.length));
    let index = jumpValue;
    for (; index < breaks.length; index += jumpValue) {
        const found = breaks[index];
        if (found) break;
    }
    // go back from found value
    index -= jumpValue;

    for (let j = 0; j <= jumpValue && index < breaks.length; ++j, ++index) {
        const found = breaks[index];
        if (found) return index;
    }
    return -1;
}
