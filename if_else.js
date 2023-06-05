// -------------------- problem 1 --------------------

/*
let a = -1

function musbat(a) {
    if (a > 0) {
        return true
    } else {
        return false
    }
}

console.log(musbat(a))
*/

// -------------------- problem 2 --------------------

/*
let a = 11

function manfiy(a) {
    if (a % 2) {
        return true
    } else {
        return false
    }
}

console.log(manfiy(a));
*/

// -------------------- problem 3 --------------------

/*
let a = 12

function manfiy(a) {
    if (a % 2) {
        return false
    } else {
        return true
    }
}

console.log(manfiy(a));
*/

// -------------------- problem 4 --------------------

/*
let a = 12
let b = 43

function check(a, b){
    if (a > 0 && b > 0) {
        return true
    } else {
        return false
    }
}

console.log(check(a, b));
*/

// -------------------- problem 5 --------------------

/*
let a = 32
let b = 20
let c = 19

function checkABC(a, b, c) {
    if (a > b && b > c) {
        return true
    } else {
        return false
    }
}

console.log(checkABC(a, b, c));
*/

// -------------------- problem 6 --------------------

/*
let a = 21
let b = 12
let c = 9

function checkABC(a, b, c) {
    if ((a > b && b > c) || (a < b && b < c)) {
        return true
    } else {
        return false
    }
}

console.log(checkABC(a, b, c));
*/

// -------------------- problem 7 --------------------

/*
let a = 11
let b = 43

function idOdd(a, b) {
    if (a % 2 && b % 2) {
        return true
    } else {
        return false
    }
}

console.log(idOdd(a, b));
*/

// -------------------- problem 8 --------------------

/*
let a = 1
let b = 2
let c = 3
let d = -2

function check(a, b, c, d) {
    if (a > 0 && b > 0 && c > 0 && d > 0) {
        return true
    } else {
        return false
    }
}

console.log(check(a, b, c, d));
*/

// -------------------- problem 9 --------------------

/*
let a = -3
let b = 4
let c = 9

function check(a, b) {
    if ((a > 0 && b > 0) || (b > 0 && c > 0) || (a > 0 && c > 0)){
        return true
    } else {
        return false
    }
}

console.log(check(a, b));
*/

// -------------------- problem 10 --------------------

/*
let num = 1

function weekDays(num){
    switch(num){
        case 1:
            return 'Monday';
            break
        case 2:
            return 'Tuesday';
            break
        case 3:
            return 'Wednesday';
            break
        case 4:
            return 'Thursday';
            break
        case 5:
            return 'Friday';
            break
        case 6:
            return 'Saturday';
            break
        case 7:
            return 'Sunday';
            break
        default:
            return 'This weekday is not fund!';
            break
    }
}

console.log(weekDays(num));
*/

// -------------------- problem 11 --------------------

/*
let pNumber = 908905689
let SpNumber = pNumber.toString()

code = SpNumber.substring(0, 2)

if (code == 99 || code == 78) {
    console.log('Uzmobile');
} else if (code == 91 || code == 90) {
    console.log('Beeline');
} else if (code == 97) {
    console.log('Ucel');
}
*/

// -------------------- problem 12 --------------------

/*
let a = 0

if (a > 0){
    a++
} else {
    a--
}

console.log(a);
*/

// -------------------- problem 13 --------------------

/*
let a = -4

if (a > 0) {
    a+=3
} else {
    a-=2
}

console.log(a);
*/

// -------------------- problem 14 --------------------

/*
let a = 43
let b = 89

if (a > b){
    console.log(a);
} else {
    console.log(b);
}
*/

// -------------------- problem 15 --------------------

/*
let a = 2
let b = 4
let c = 9

console.log(Math.max(a, b, c));
*/

// -------------------- problem 16 --------------------

/*
let a = 4
let b = 2
let c = 0

console.log(Math.min(a, b, c));
*/

// -------------------- problem 19 --------------------

/*
let num = -1

if (num > 0 && num % 2 == 0) {
    console.log('juft musbat');
} else if (num > 0 && num % 2) {
    console.log('toq musbat');
} else if (num < 0 && num % 2 == 0) {
    console.log('juft manfiy');
} else if (num < 0 && num % 2) {
    console.log('toq manfiy');
}
*/

// -------------------- problem 20 --------------------

/*
let year = 2007

console.log(2023 - year);
*/

// -------------------- problem 21 --------------------

/*
let a = 12
let b = 21
let c = 65

if (a <= b && b <= c) {
    console.log(true);
} else {
    console.log(false);
}
*/

// -------------------- problem 22 --------------------

/*
let a = 10
let b = 30

if (a % 2 && b % 2) {
    console.log(false);
} else if ((a % 2 || b % 2)) {
    console.log(true);
} else if (a % 2 == 0 && b % 2 == 0) {
    console.log(false);
}
*/

// -------------------- problem 23 --------------------

/*
let a = 23
let b = 43
let c = 45

if (a > 0 && b > 0 && c > 0) {
    console.log(true);
} else {
    console.log(false);
}
*/

// -------------------- problem 24  --------------------

/*
let a = -1;
let b = 2;
let c = -3;

if (a > 0 && b < 0 && c < 0) {
    console.log("true");
} else if (a < 0 && b > 0 && c < 0) {
    console.log("true");
} else if (a < 0 && b < 0 && c > 0) {
    console.log("true");
} else {
    console.log("false");
}
*/

// -------------------- problem 25  --------------------

/*
let num = 122
let str = num.toString();

console.log(str.length === new Set(str).size);
*/

// -------------------- problem 26  --------------------

/*
let num = 123
let str = num.toString();

console.log(str === str.split('').sort().join(''));
*/