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
decToBin(10);

module.exports = main;
module.exports = decToBin;