// Nội dung đề bài:
// Nhập vào một số nguyên dương N, biến đổi N từ cơ số X sang cơ số Y. 
// Biết rằng, Trong các hệ đếm toán học, cơ số là số các chữ số của hệ 
// đếm, bao gồm cả số 0 được dùng để biểu diễn số trong hệ đếm. 
// Ví dụ, với hệ thập phân (hệ đếm sử dụng phổ biến nhất hiện này) cơ số 
// là 10, vì hệ đếm này dùng mười chữ số từ 0 đến 9.
// Giới hạn sử dụng các cơ số 2, 8, 10 và 16.
// Đầu vào có dạng N X Y

// Input và Output mẫu:
// Input            // Output
// 10 10 2          // 1010
// 1024 8 10        // 532
// 101101 2 16      // 2D



// Add new functions, variables here

function main(input) {

}

function decToBin(num) {
    let remainder;
    let arr = [];
    while (num != 0) {
        remainder = num % 2;
        num = Math.floor(num / 2);
        arr.push(remainder);
    }
    for (let i = arr.length - 1; i > -1; i--) {
        console.log(arr[i]);
    }
}

function binToDec(input) {
    let temp = [];
    temp = input.toString().split("");
    temp = temp.reverse();
    let kq = 0;
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] == 1) {
            kq += 1 * 2 * Math.pow(2, i);
        }
    }
    return kq;
}

function binToHex(n) {
    n = n.toString();
    for (let i = 0; i < nLength; i++) {
        if ((n.length) % 4 != 0) {
            n = "0" + n;
        }
    }
    let temp = [];
    for (let i = 0; i < n.length; i++) {
        temp.push(n.substring(i, i + 4))
    }
    for (let i = 0; i < temp.length; i++) {
        kq = kq + hex(temp[i]);
    }
    return kq;
}

function hex(n) {
    switch (n) {
        case 0000:
            return '0';
        case 0001:
            return '1';
        case 0010:
            return '2';
        case 0011:
            return '3';
        case 0100:
            return '4';
        case 0101:
            return '5';
        case 0110:
            return '6';
        case 0111:
            return '7';
        case 1000:
            return '8';
        case 1001:
            return '9';
        case 1010:
            return 'A';
        case 1011:
            return 'B';
        case 1100:
            return 'C';
        case 1101:
            return 'D';
        case 1110:
            return 'E';
        case 1111:
            return 'F';
        default:
            break;
    }
}





module.exports = main;