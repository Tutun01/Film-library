export function generateYear(from: number, defaultYear: null | number): void {

    const yearSelect = document.getElementById('movieYears') as HTMLSelectElement;

    for (let i = 1960; i <= 2025; i++) {
        const singleYear = document.createElement('option');
        singleYear.value = i.toString();
        singleYear.textContent = i.toString();

        if (i === defaultYear) {
            singleYear.selected = true;
        }

        yearSelect.append(singleYear);
    }
}