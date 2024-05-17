function solution(number) {
    var sum = 0;
    var multiples = []
    for (var i = 0; i < number; i++){
        if (i % 3 === 0 || i % 5 === 0) {
            multiples.push(i);
            sum += i;
        }
        console.log(multiples);
        console.log(`Sum: ${sum}`)
        return sum;
    }
}
solution(15);