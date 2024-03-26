
# ffmpeg 패키지 설치
```bash
npm install fluent-ffmpeg
npm install ffmpeg
```

# ffmpeg 옵션
```bash
-f fmt (input/output)
    Force input or output file format. The format is normally auto detected for input files and guessed from the file extension for output files, so this option is not needed in most cases.

-i url (input)
    input file url

-y (global)
    Overwrite output files without asking.

-n (global)
    Do not overwrite output files, and exit immediately if a specified output file already exists.

-c[:stream_specifier] codec (input/output,per-stream)
-codec[:stream_specifier] codec (input/output,per-stream)
    Select an encoder (when used before an output file) or a decoder (when used before an input file) for one or more streams. codec is the name of a decoder/encoder or a special value copy (output only) to indicate that the stream is not to be re-encoded.

-vf filtergraph (output)
    Create the filtergraph specified by filtergraph and use it to filter the stream.
    This is an alias for -filter:v, see the -filter option.

-b:v는 비디오 스트림의 비트레이트를 나타내는 옵션입니다.

-auto-alt-ref 옵션은 VP9 비디오 코덱을 사용할 때 VP9 프로파일 2를 활성화하는 데 사용됩니다.
    - VP9은 구글에서 개발한 고성능 비디오 코덱 중 하나이며, -auto-alt-ref 옵션을 사용하여 VP9 프로파일 2를 활성화할 수 있습니다. 이 옵션은 VP9의 품질을 향상시키고 압축률을 최적화하는데 도움이 됩니다.
    - 일반적으로 -auto-alt-ref 옵션은 VP9으로 인코딩할 때 사용됩니다. 이 옵션이 적용된 경우 VP9 비디오 스트림의 더 나은 인코딩 결과를 기대할 수 있습니다.
```

# ffmpeg 사용 예제

### 동영상 포멧 변환
- mp4 를 mov 로 변환
```bash
ffmpeg -i aa.mp4 -f mov aa2.mov
```

### 녹색 배경 제거
```bash
# 실행안됨
ffmpeg -i aa.mp4 -c:v vp9 -vf 'colorkey=0x00FF00:similarity=0.2:blend=0.3' -c copy -f webm out2.webm
ffmpeg -i aa.mp4 -c:v libvpx -vf 'colorkey=0x00FF00:similarity=0.2:blend=0.3' -c copy -f webm out2.webm

# 녹색 배경 제거 => 배경 제거 안됨
ffmpeg -i aa.mp4 -vf "chromakey=0x00ff00:0.1:0.2" out2.webm

# 녹색 배경 제거 => 테두리 거침
ffmpeg -i aa.mp4 -c:v libvpx -vf "colorkey=0x00b140:0.1:0.0,format=yuva420p" -b:v 2M -auto-alt-ref 0 out1.webm

# 녹색 배경 제거 => 테두리 부드러움
ffmpeg -i aa.mp4 -c:v libvpx -vf 'colorkey=0x00FF00:similarity=0.2:blend=0.3' -b:v 2M -auto-alt-ref 0 out2.webm
ffmpeg -i aa.mp4 -c:v libvpx -vf 'colorkey=0x00FF00:similarity=0.2:blend=0.3' -b:v 2M -auto-alt-ref 0 -f webm out2.webm

# mov 로 변환 테스트
ffmpeg -i aa.mp4 -c:v libvpx -vf 'colorkey=0x00FF00:similarity=0.2:blend=0.3' -b:v 2M -auto-alt-ref 0 -f mov out2.mov # X
ffmpeg -i aa.mp4 -c:v libvpx -f mov out2.mov # X
ffmpeg -i aa.mp4 -vf 'colorkey=0x00FF00:similarity=0.2:blend=0.3' -f mov out2.mov # X
ffmpeg -i aa.mp4 -b:v 2M -auto-alt-ref 0 -f mov out2.mov # O
ffmpeg -i aa.mp4 -vf 'colorkey=0x00FF00:similarity=0.2:blend=0.3' -b:v 2M -auto-alt-ref 0 -f mov out2.mov # X
```

```bash
# encodes all video streams with libx264 and copies all audio streams.
ffmpeg -i INPUT -map 0 -c:v libx264 -c:a copy OUTPUT

# will copy all the streams except the second video, which will be encoded with libx264, and the 138th audio, which will be encoded with libvorbis.
ffmpeg -i INPUT -map 0 -c copy -c:v:1 libx264 -c:a:137 libvorbis OUTPUT

# 아래 명령은 입력 파일 input.mp4를 1000kbps의 비트레이트로 인코딩하여 output.mp4로 저장합니다.
ffmpeg -i input.mp4 -b:v 1000k output.mp4
```
