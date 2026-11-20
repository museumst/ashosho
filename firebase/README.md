# Photography Firebase setup

1. Firebase Console에서 **Storage**를 처음 한 번 활성화합니다.
2. Firestore의 규칙 편집기에 `firestore.rules` 내용을 적용합니다.
3. Storage의 규칙 편집기에 `storage.rules` 내용을 적용합니다.

두 규칙은 `museumst@gmail.com`만 Photography 사진과 Board 게시물을 만들고 수정하거나 삭제할 수 있게 제한합니다. 공개 갤러리와 Board는 누구나 읽을 수 있습니다.

## 사진 관리 활성화

- 사진 관리에는 최신 Firestore 및 Storage 규칙이 모두 필요합니다. `hiddenPhotos` 문서와 `photography-private/` 파일은 인증된 관리자만 읽을 수 있습니다. 다른 용도로 콘솔에 추가한 규칙이 있다면 보존하세요.
- 브라우저에서 인증된 이미지 다운로드가 차단되면 [버킷 CORS 설정](https://cloud.google.com/storage/docs/using-cors)에 `storage-cors.json`의 허용 출처와 `GET`을 적용합니다. 기존 CORS 설정이 없다면 `firebase` 폴더에서 아래 명령으로 적용할 수 있습니다.

  ```sh
  gcloud storage buckets update gs://grayrockclub-51ed3.firebasestorage.app --cors-file=storage-cors.json
  ```

- 사진을 가리면 원본과 썸네일을 비공개 경로에 복사한 뒤 기존 공개 파일 두 개를 삭제합니다. 정리 실패가 표시되면 관리 화면에서 재시도해야 이전 링크가 차단됩니다. 다시 공개되면 새 링크가 발급됩니다. 이미 다운로드되거나 캐시에 저장된 사본은 회수할 수 없습니다.
- 적용 후 테스트 사진으로 가리기 전 원본 및 썸네일 링크를 기록하고, 가린 뒤 두 링크가 시크릿 창에서 열리지 않는지 확인하세요. 다시 공개한 사진은 새 링크로만 열려야 합니다.
