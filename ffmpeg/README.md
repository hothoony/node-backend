
## 패키지 설치
```bash
npm install fluent-ffmpeg
npm install ffmpeg
```

## 녹색 배경 제거
```bash
# 실행안됨
ffmpeg -i aa.mp4 -c:v vp9 -vf 'colorkey=0x00FF00:similarity=0.2:blend=0.3' -c copy -f webm out2.webm
ffmpeg -i aa.mp4 -c:v libvpx -vf 'colorkey=0x00FF00:similarity=0.2:blend=0.3' -c copy -f webm out2.webm

# 녹색 배경 제거
ffmpeg -i aa.mp4 -c:v libvpx -vf "colorkey=0x00b140:0.1:0.0,format=yuva420p" -b:v 2M -auto-alt-ref 0 out1.webm  # 테두리 거침
ffmpeg -i aa.mp4 -c:v libvpx -vf 'colorkey=0x00FF00:similarity=0.2:blend=0.3' -b:v 2M -auto-alt-ref 0 out2.webm # 테두리 부드러움
```
