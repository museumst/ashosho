# Photography Firebase setup

1. Firebase Console에서 **Storage**를 처음 한 번 활성화합니다.
2. Firestore의 규칙 편집기에 `firestore.rules` 내용을 적용합니다.
3. Storage의 규칙 편집기에 `storage.rules` 내용을 적용합니다.

두 규칙은 `museumst@gmail.com`만 Photography 사진과 Board 게시물을 만들고 수정하거나 삭제할 수 있게 제한합니다. 공개 갤러리와 Board는 누구나 읽을 수 있습니다.
