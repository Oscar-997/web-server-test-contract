const mongoose = require('mongoose') // import thư viện mongoose để quản lý mongodb vs nodejs

async function connect() {// tạo 1 hàm bất đồng bộ async tên connect
    try {// connect mongoose với địa chỉ ib của mongodb để có thể quản lý và xuất dữ liệu
        await mongoose.connect('mongodb+srv://binswap_database:75QqfBKmp19v8VO2@cluster0.b58up.mongodb.net/Token?retryWrites=true&w=majority', { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        // console.log('Connect successfully!!!');// thành công in ra 
    } catch (error) {
        console.log('Connect failure!!!');// thất bại in ra ở terminal
    }
    // password : 75QqfBKmp19v8VO2
}

module.exports = { connect }