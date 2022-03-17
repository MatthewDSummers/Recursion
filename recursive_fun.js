
// Recursion To Do 2

// Recursive Fibonacci
function rFib(num){
    if (num<=0){
        return 0
    }
    else if (num==1){
        return num
    }
    else{
        return(rFib(num -1) + rFib(num-2))
    }
}

console.log("Fib of 10 is", rFib(10))
console.log("Fib of negative 2 is", rFib(-2))

// Recursive “Tribonacci”
function rTrib(num){
    // var x = -3;

    if (num<=0){
        return 0
    }
    else if (num==1){
        return 0
    }
    else if (num==2){
        return 1
    }
    else{
        return(rTrib(num -1) + rTrib(num-2) + rTrib(num-3))
    }
}

console.log("Trib of 10 is", rTrib(10))
console.log("Trib of negative 8 is", rFib(-8))

// Paging Dr. Ackermann
function ack(m, n){
    let ans = 0;
    if (m==0){
        ans = n+1
    }
    else if (n==0){
        ans = ack(m-1, 1);
    }
    else{
        ans = ack(m-1, ack(m,n-1));
    }
    return (ans);
}

console.log("Ackermann(3,1) is", ack(3,1))
console.log("Ackermann(0,1) is", ack(0,1))
console.log("Ackermann(3,0) is", ack(3,0))