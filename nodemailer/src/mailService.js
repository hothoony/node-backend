const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    host: 'smtp.gmail.com',
    secure: false,
    requireTLS: true,
    auth: {
        user: 'user01@gmail.com',
        pass: '', // 구글 계정관리 > 보안 > 2단계 인증 > 앱 비밀번호
    }
});

module.exports = {
    mailService: transport
}
