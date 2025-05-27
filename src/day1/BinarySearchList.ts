export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    do {
        const median = Math.floor(low + (high - low) / 2);
        const value = haystack[median];

        if (value === needle) {
            return true;
        } else if (value > needle) {
            high = median;
        } else {
            low = median + 1;
        }
    } while (low < high);

    return false;
}
