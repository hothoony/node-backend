const { mailService } = require('./src/mailService');

mailService.sendMail({
    from: 'user01@gmail.com',
    to: 'user02@gmail.com',
    subject: '메일 제목 TEST',
    text: '메일 내용 TEST',
}, function(err, info) {
    if (err) {
        console.log('err', err);
    } else {
        console.log('email sent: ', info.response);
    }
});
