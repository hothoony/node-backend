const ffmpeg = require('fluent-ffmpeg');

// // 동영상 포멧 변환
// ffmpeg()
//     .input('./files/original.mp4')
//     .saveToFile('./files/out.mov')
//     // .on('start', (commandLine) => {
//     //     console.log('start', commandLine);
//     // })
//     .on('progress', (progress) => {
//         if (progress.percent) {
//             console.log(`processing ${progress.percent}`);
//         }
//     })
//     .on('end', () => {
//         console.log('end');
//     })
//     .on('error', (err) => {
//         console.log('err', err);
//     })
// ;

// // 동영상 크기 변경
// ffmpeg()
//     .input('./files/original.mp4')
//     .outputOptions('-vf', 'scale=-2:200')
//     .saveToFile('./files/scale.mp4')
//     .on('progress', (progress) => {
//         if (progress.percent) {
//             console.log(`processing ${progress.percent}`);
//         }
//     })
//     .on('end', () => {
//         console.log('end');
//     })
//     .on('error', (err) => {
//         console.log('err', err);
//     })
// ;

// // 동영상에서 사운드 추출
// ffmpeg()
//     .input('./files/original.mp4')
//     .outputOptions('-ab', '195k')
//     .saveToFile('./files/audio.mp3')
//     .on('progress', (progress) => {
//         if (progress.percent) {
//             console.log(`processing ${progress.percent}`);
//         }
//     })
//     .on('end', () => {
//         console.log('end');
//     })
//     .on('error', (err) => {
//         console.log('err', err);
//     })
// ;

// // 동영상에서 사운드 제거
// ffmpeg()
//     .input('./files/original.mp4')
//     .noAudio()
//     .outputOptions('-codec', 'copy')
//     .saveToFile('./files/no-audio.mp4')
//     .on('progress', (progress) => {
//         if (progress.percent) {
//             console.log(`processing ${progress.percent}`);
//         }
//     })
//     .on('end', () => {
//         console.log('end');
//     })
//     .on('error', (err) => {
//         console.log('err', err);
//     })
// ;

// 동영상에서 썸네일 이미지 추출
ffmpeg()
    .input('./files/original.mp4')
    // .screenshots({
    //     timestamps: [20, 40, 60, 80, 100], // 초를 입력
    //     filename: 'thumbnail-%i-%s.png',
    //     folder: './files',
    //     size: '320x240',
    // })
    .screenshots({
        count: 3,
        filename: 'thumbnail-%i-%s.png',
        folder: './files',
        size: '320x240',
    })
    .on('progress', (progress) => {
        if (progress.percent) {
            console.log(`processing ${progress.percent}`);
        }
    })
    .on('end', () => {
        console.log('end');
    })
    .on('error', (err) => {
        console.log('err', err);
    })
;
