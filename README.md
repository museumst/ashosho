# grayrockclub

GitHub Pages로 배포되는 정적 미니 앱 모음입니다. 새 앱을 만들거나 기존 앱을 수정할 때는 이 문서를 먼저 읽고, 현재 구조와 배포 흐름을 유지하세요.

## 프로젝트 핵심 정보

- 로컬 작업 폴더: `/Users/museumst/myapps/ashosho`
- GitHub repository: `museumst/ashosho`
- 기본 Pages 주소: `https://museumst.github.io/ashosho/`
- 커스텀 도메인: `https://grayrockclub.com/`
- 배포 방식: GitHub Pages, `main` branch, repository root
- 도메인 설정 파일: `CNAME`

폴더명과 repo 이름은 아직 `ashosho`이지만, 서비스/프로젝트 표시 이름은 `grayrockclub`으로 사용합니다.

## 주요 파일

- `index.html`: 메인 포털 페이지입니다. 메뉴, 상세 영역, 로그인 UI, 언어 선택을 포함합니다.
- `assets/app-catalog.js`: 메인 포털에 표시되는 앱 목록, 다국어 텍스트, 앱 실행 URL을 관리합니다.
- `assets/styles.css`: 메인 포털과 여러 앱에서 공유하는 스타일입니다.
- `assets/firebase-auth-default.js`: Firebase Auth/Firestore 공용 모듈입니다.
- `apps/`: 각 앱의 정적 HTML/CSS/JS가 들어갑니다.
- `CNAME`: GitHub Pages 커스텀 도메인 `grayrockclub.com` 설정입니다.

## 현재 앱 목록

- `apps/periodic_table/index.html`: 원소주기율표
- `apps/lotto/index.html`: 로또번호 생성기
- `apps/puzzle/index.html`: 4x4 슬라이딩 퍼즐
- `apps/puzzle-3x3/index.html`: 3x3 슬라이딩 퍼즐
- `apps/globe/index.html`: 세계지도
- `apps/joseon/index.html`: 조선왕조 가계도
- `apps/vocabulary/index.html`: 나의 단어장
- `apps/greekmyth/index.html`: 그리스 신화 계보
- `apps/harmony/index.html`: Harmony
- `apps/meditation/index.html`: 명상 사운드
- `apps/leadership/index.html`: 나의 리더십 유형
- `apps/connect4/CONNET4PRO.html`: 커넥트 4

메인 포털에 노출되는 앱 정보는 `assets/app-catalog.js`의 `apps` 배열이 기준입니다.

## 새 앱 추가 절차

1. `apps/{app-slug}/index.html` 형태로 새 앱 폴더를 만듭니다.
2. 앱은 가능하면 정적 HTML/CSS/JS만 사용합니다. 빌드 과정이 필요한 구조는 피합니다.
3. `assets/app-catalog.js`의 `apps` 배열에 새 앱 항목을 추가합니다.
4. 앱 항목에는 `title`, `description`, `i18n`, `category`, `thumbnail`, `app_url`, `status`, `tags`를 기존 패턴에 맞춰 넣습니다.
5. 앱 URL은 보통 `apps/{app-slug}/index.html`입니다. 캐시 갱신이 필요하면 `?v=...` query를 붙입니다.
6. 메인 포털에서 앱 이름을 클릭했을 때 오른쪽 상세 영역과 `go` 링크가 정상 동작하는지 확인합니다.
7. 모바일과 데스크톱에서 앱 화면을 확인합니다.
8. 필요한 파일만 stage, commit, push 합니다.

## 다국어 처리

메인 포털은 `assets/app-catalog.js` 안의 `i18n` 객체를 사용합니다. 새 앱을 추가할 때는 기존 언어 구성을 유지하세요.

- `ko`: 한국어
- `en`: 영어
- `ja`: 일본어
- `zh`: 중국어 간체
- `es`: 스페인어

`go` 버튼 텍스트는 언어와 관계없이 `go`로 유지합니다.

## Firebase 사용 앱

로그인/클라우드 저장이 필요한 앱은 `assets/firebase-auth-default.js`를 사용합니다.

- Auth domain은 `grayrockclub-51ed3.firebaseapp.com`을 사용합니다.
- Firestore 저장 경로는 보통 `users/{uid}/...` 구조를 따릅니다.
- 로그인 사용자 데이터와 로그아웃/익명 로컬 데이터가 섞이지 않도록 저장 키를 분리해야 합니다.
- Firebase helper 파일을 직접 바꿀 때는 모바일 로그인과 GitHub Pages 배포 환경을 함께 확인하세요.

## 작업 시 주의사항

- 변경 전 항상 `git status --short --branch`를 확인합니다.
- 요청 범위와 무관한 변경 파일은 건드리거나 stage하지 않습니다.
- 특히 이미지, 임시 폴더, 문서, 실험 파일이 untracked 상태로 남아 있을 수 있습니다.
- 수동 편집은 필요한 파일에만 적용합니다.
- 앱을 수정하면 가능하면 로컬 정적 서버와 실제 Pages URL 양쪽에서 확인합니다.
- 수정 후에는 commit하고 `origin main`에 push합니다.

## 로컬 확인

정적 서버 예시:

```bash
python3 -m http.server 4273
```

브라우저에서 확인:

```text
http://127.0.0.1:4273/
```

특정 앱 확인 예시:

```text
http://127.0.0.1:4273/apps/vocabulary/index.html
```

## 배포 확인

push 후 GitHub Pages 빌드 상태와 실제 반영을 확인합니다.

```bash
gh api repos/museumst/ashosho/pages/builds/latest
```

실제 배포 URL:

```text
https://grayrockclub.com/
```

캐시 때문에 바로 안 보이면 `?v=YYYYMMDD-task-name` 같은 query를 붙여 확인합니다.
