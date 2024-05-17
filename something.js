// write a program to get the the sum of all the multiples of 3 or 5 below the number passed in

function solution(number) {
    var sum = 0;
    var multiples = []
    for (var i = 0; i < number; i++){
        if (i % 3 === 0 || i % 5 === 0) {
            multiples.push(i);
            sum += i;
        }
        
    }
    console.log(multiples);
        console.log(`Sum: ${sum}`)
        return sum;
}
solution(15); //you can try passing different numbers like 10, 16,20, 33, 100 etc.