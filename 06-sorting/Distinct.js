function solution(A) {
    return solutionSet(A);
}

function solutionArray(A) {
    const res = [];

    A.forEach(el => {
        res[el] = true;
    });

    return res.filter(el => !!el).length
}


function solutionSet(A) {
    const set = new Set(A);

    return set.size;
}