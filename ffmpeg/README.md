
## 패키지 설치
```bash
npm install fluent-ffmpeg
npm install ffmpeg
```

## 크로마키 배경 제거
```bash
ffmpeg -i aa.mp4 -c:v libvpx -vf "colorkey=0x00b140:0.1:0.0,format=yuva420p" -b:v 2M -auto-alt-ref 0 out.webm
ffmpeg -i aa.mp4 -c:v libvpx -vf 'colorkey=0x00FF00:similarity=0.2:blend=0.3' -b:v 2M -auto-alt-ref 0 out2.webm
```
