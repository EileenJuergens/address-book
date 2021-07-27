export const sortData = (data, sortTerm, sortOrder) => {
    return data.sort((prev, next) => {
        // ASC: ascending order (0->9 or A->Z)
        if (sortOrder === 'ASC') {
            if (next[sortTerm] > prev[sortTerm]) return -1;
            if (prev[sortTerm] > next[sortTerm]) return 1;
            return 0;
        } else {
            // DESC: descending order (9->0 or Z->A)
            if (prev[sortTerm] > next[sortTerm]) return -1;
            if (next[sortTerm] > prev[sortTerm]) return 1;
            return 0;
        }
    });
};