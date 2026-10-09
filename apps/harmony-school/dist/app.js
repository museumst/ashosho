(() => {
  // content/ko/ui.js
  var ui_default = {
    appTitle: "\uD558\uBAA8\uB2C8 \uC2A4\uCFE8",
    tagline: "\uC18C\uB9AC\uB85C \uBC30\uC6B0\uB294 \uD654\uC131\uD559 \uCCAB\uAC78\uC74C",
    solfege: ["\uB3C4", "\uB3C4\u266F", "\uB808", "\uB808\u266F", "\uBBF8", "\uD30C", "\uD30C\u266F", "\uC194", "\uC194\u266F", "\uB77C", "\uB77C\u266F", "\uC2DC"],
    keyboardLabel: "\uD53C\uC544\uB178 \uAC74\uBC18",
    // 홈
    unitProgress: "{done}/{total} \uC644\uB8CC",
    minutes: "{n}\uBD84",
    startLabel: "\uC2DC\uC791\uD558\uAE30",
    continueLabel: "\uC774\uC5B4\uC11C \uD558\uAE30",
    allDone: "\uC9C0\uAE08 \uC5F4\uB9B0 \uB808\uC2A8\uC744 \uBAA8\uB450 \uB9C8\uCCE4\uC5B4\uC694! \uB2E4\uC74C \uC720\uB2DB\uC744 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694.",
    // 레슨 공통
    next: "\uB2E4\uC74C",
    close: "\uB2EB\uAE30",
    retry: "\uB2E4\uC2DC \uD558\uAE30",
    toList: "\uBAA9\uB85D\uC73C\uB85C",
    nextLesson: "\uB2E4\uC74C \uB808\uC2A8",
    review: "\uBCF5\uC2B5 \xB7 \uC544\uAE4C \uD2C0\uB9B0 \uBB38\uC81C\uC608\uC694",
    listen: "\uB2E4\uC2DC \uB4E3\uAE30",
    tapKeysHint: "\uAC74\uBC18\uC744 \uC9C1\uC811 \uB20C\uB7EC \uC18C\uB9AC\uB97C \uB4E4\uC5B4\uBCFC \uC218\uB3C4 \uC788\uC5B4\uC694.",
    hearExample: "\uC18C\uB9AC \uB4E4\uC5B4\uBCF4\uAE30",
    correct: "\uC815\uB2F5\uC774\uC5D0\uC694!",
    wrong: "\uC544\uC26C\uC6CC\uC694.",
    keyAnswerHint: "\uB178\uB780 \uAC74\uBC18\uC774 \uC815\uB2F5\uC774\uC5D0\uC694.",
    hintOn: "\uD78C\uD2B8 \uCF1C\uAE30",
    hintOff: "\uD78C\uD2B8 \uB044\uAE30",
    restart: "\uCC98\uC74C\uBD80\uD130",
    playProgress: "{n} / {total}",
    buildDone: "\uC644\uC131! \uC138 \uC74C\uC774 \uBAA8\uB450 \uB9DE\uC544\uC694.",
    buildWrong: "\uC774 \uCF54\uB4DC\uC5D0 \uC5C6\uB294 \uC74C\uC774\uC5D0\uC694.",
    explorePick: "\uC704\uC5D0\uC11C \uCF54\uB4DC\uB97C \uBA3C\uC800 \uACE8\uB77C \uBCF4\uC138\uC694.",
    exploreTry: "\uC774\uC81C \uAC74\uBC18\uC744 \uB20C\uB7EC \uBCF4\uC138\uC694. \uCF54\uB4DC \uD1A4\uC740 \uCD08\uB85D, \uCF54\uB4DC \uBC16\uC758 \uC74C\uC740 \uB178\uB791\uC73C\uB85C \uBC18\uC9DD\uC5EC\uC694.",
    exploreTone: "\uCF54\uB4DC \uD1A4\uC774\uC5D0\uC694. \uC548\uC815\uC801\uC73C\uB85C \uC5B4\uC6B8\uB824\uC694.",
    exploreNon: "\uCF54\uB4DC \uBC16\uC758 \uC74C\uC774\uC5D0\uC694. \uC0B4\uC9DD \uAE34\uC7A5\uB418\uB294 \uC18C\uB9AC\uC608\uC694.",
    exploreShow: "\uCF54\uB4DC \uD1A4 \uD45C\uC2DC \uCF1C\uAE30",
    exploreHide: "\uCF54\uB4DC \uD1A4 \uD45C\uC2DC \uB044\uAE30",
    cofHint: "\uC6D0 \uC704\uC758 \uC74C\uC744 \uB20C\uB7EC \uBCF4\uC138\uC694",
    cofRelative: "\uB098\uB780\uD55C\uC870",
    playDone: "\uC798\uD588\uC5B4\uC694! \uB05D\uAE4C\uC9C0 \uCCE4\uC5B4\uC694.",
    playWrong: "\uB2E4\uB978 \uC74C\uC774\uC5D0\uC694. \uB2E4\uC2DC \uB20C\uB7EC\uBCF4\uC138\uC694.",
    resultPass: "\uD1B5\uACFC\uD588\uC5B4\uC694!",
    resultFail: "\uC870\uAE08\uB9CC \uB354 \uC5F0\uC2B5\uD574\uC694",
    resultPassSub: "\uB2E4\uC74C \uB808\uC2A8\uC774 \uC5F4\uB838\uC5B4\uC694.",
    resultFailSub: "\uC815\uB2F5\uB960 {need}% \uC774\uC0C1\uC774\uBA74 \uD1B5\uACFC\uC608\uC694. \uD55C \uBC88 \uB354 \uB3C4\uC804\uD574 \uBCF4\uC138\uC694.",
    // 복습
    reviewFrom: "\uBCF5\uC2B5 \xB7 {lesson}",
    reviewDueTitle: "\uBCF5\uC2B5\uD560 \uBB38\uC81C {n}\uAC1C",
    reviewDueSub: "\uD2C0\uB838\uAC70\uB098 \uC2DC\uAC04\uC774 \uC9C0\uB09C \uBB38\uC81C\uB97C \uB2E4\uC2DC \uD480\uC5B4 \uBD10\uC694. \uD55C \uBC88\uC5D0 \uCD5C\uB300 {max}\uAC1C\uC608\uC694.",
    reviewStart: "\uBCF5\uC2B5 \uC2DC\uC791",
    reviewNoneTitle: "\uC9C0\uAE08 \uBCF5\uC2B5\uD560 \uBB38\uC81C\uAC00 \uC5C6\uC5B4\uC694",
    reviewNoneNext: "\uB2E4\uC74C \uBCF5\uC2B5: {when}",
    reviewEmpty: "\uB808\uC2A8\uC744 \uD480\uBA74 \uD2C0\uB9B0 \uBB38\uC81C\uC640 \uC624\uB798\uB41C \uBB38\uC81C\uAC00 \uC5EC\uAE30\uC5D0 \uBAA8\uC5EC\uC694.",
    reviewStats: "\uC775\uD78C \uBB38\uC81C {mastered} / \uD480\uC5B4 \uBCF8 \uBB38\uC81C {total}",
    reviewDone: "\uBCF5\uC2B5 \uC644\uB8CC!",
    reviewDoneSub: "\uC798 \uC678\uC6B4 \uBB38\uC81C\uC77C\uC218\uB85D \uB2E4\uC2DC \uB098\uC624\uB294 \uAC04\uACA9\uC774 \uAE38\uC5B4\uC838\uC694.",
    reviewMore: "\uB354 \uBCF5\uC2B5\uD558\uAE30",
    whenSoon: "\uACE7",
    whenHours: "{n}\uC2DC\uAC04 \uD6C4",
    whenDays: "{n}\uC77C \uD6C4",
    // 용어집
    glossaryTitle: "\uC6A9\uC5B4\uC9D1",
    glossaryIntro: "\uB808\uC2A8\uC5D0\uC11C \uB9CC\uB09C \uC6A9\uC5B4\uB97C \uBAA8\uC544 \uB193\uC558\uC5B4\uC694. \uB20C\uB7EC\uC11C \uC124\uBA85\uACFC \uC18C\uB9AC\uB97C \uD655\uC778\uD558\uC138\uC694.",
    // 코드 진행 놀이터
    pg: {
      title: "\uCF54\uB4DC \uC9C4\uD589 \uB180\uC774\uD130",
      intro: "\uC9C0\uAE08\uAE4C\uC9C0 \uBC30\uC6B4 \uCF54\uB4DC\uB97C \uBE14\uB85D\uCC98\uB7FC \uC774\uC5B4 \uBD99\uC5EC\uC11C \uB098\uB9CC\uC758 \uCF54\uB4DC \uC9C4\uD589\uC744 \uB9CC\uB4E4\uACE0 \uB4E4\uC5B4 \uBCF4\uC138\uC694. \uC544\uB798\uC758 \uCF54\uB4DC\uB97C \uB204\uB974\uBA74 \uC9C4\uD589\uC5D0 \uCD94\uAC00\uB3FC\uC694.",
      homeTitle: "\uCF54\uB4DC \uC9C4\uD589 \uB180\uC774\uD130",
      homeSub: "\uBC30\uC6B4 \uCF54\uB4DC\uB97C \uC774\uC5B4 \uBD99\uC5EC \uB098\uB9CC\uC758 \uC9C4\uD589\uC744 \uB9CC\uB4E4\uACE0 \uB4E4\uC5B4 \uBCF4\uC138\uC694.",
      key: "\uD0A4",
      major: "\uC7A5\uC870",
      minor: "\uB2E8\uC870",
      chordType: "\uCF54\uB4DC \uC885\uB958",
      triads: "3\uD654\uC74C",
      sevenths: "4\uD654\uC74C",
      voicing: "\uCF54\uB4DC \uBC30\uCE58",
      voicingRoot: "\uAE30\uBCF8\uD615",
      voicingSmooth: "\uBCF4\uC774\uC2A4 \uB9AC\uB529",
      voicingHint: "\uBCF4\uC774\uC2A4 \uB9AC\uB529\uC740 \uCF54\uB4DC\uAC00 \uBC14\uB014 \uB54C \uC74C\uC774 \uC801\uAC8C \uC6C0\uC9C1\uC774\uB3C4\uB85D \uC790\uB3D9\uC73C\uB85C \uBC30\uCE58\uD574 \uC918\uC694.",
      bass: "\uBCA0\uC774\uC2A4 \uC74C \uCD94\uAC00",
      pattern: "\uBC18\uC8FC",
      patterns: { block: "\uAE38\uAC8C \uD55C \uBC88", stroke: "4\uBD84\uC74C\uD45C", arp: "\uC544\uB974\uD398\uC9C0\uC624" },
      tempo: "\uD15C\uD3EC",
      bpm: "{n} BPM",
      loop: "\uBC18\uBCF5 \uC7AC\uC0DD",
      progTitle: "\uB0B4 \uC9C4\uD589",
      progHint: "\uD55C \uCE78 = \uD55C \uB9C8\uB514",
      empty: '\uC544\uB798\uC758 \uCF54\uB4DC\uB97C \uB20C\uB7EC\uC11C \uC9C4\uD589\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. \uCC98\uC74C\uC774\uB77C\uBA74 "\uC608\uC2DC \uC9C4\uD589"\uC744 \uB20C\uB7EC \uBCF4\uC138\uC694.',
      slotHint: "\uCE78\uC744 \uB204\uB974\uBA74 \uC120\uD0DD\uB3FC\uC694. \uCF54\uB4DC\uB97C \uCD94\uAC00\uD558\uBA74 \uC120\uD0DD\uD55C \uCE78 \uBC14\uB85C \uB4A4\uC5D0 \uB4E4\uC5B4\uAC00\uC694.",
      play: "\uC7AC\uC0DD",
      stop: "\uC815\uC9C0",
      copy: "\uBCF5\uC0AC",
      copied: "\uBCF5\uC0AC\uD588\uC5B4\uC694!",
      copyFail: "\uBCF5\uC0AC\uD560 \uC218 \uC5C6\uC5B4\uC694",
      left: "\u25C0 \uC55E\uC73C\uB85C",
      right: "\uB4A4\uB85C \u25B6",
      dup: "\uBCF5\uC81C",
      del: "\uC0AD\uC81C",
      undo: "\uB418\uB3CC\uB9AC\uAE30",
      clear: "\uBAA8\uB450 \uC9C0\uC6B0\uAE30",
      full: "\uC9C4\uD589\uC740 \uCD5C\uB300 16\uB9C8\uB514\uAE4C\uC9C0 \uB9CC\uB4E4 \uC218 \uC788\uC5B4\uC694.",
      inKey: "\uD0A4 \uC548\uC758 \uCF54\uB4DC",
      outKey: "\uD0A4 \uBC16\uC758 \uCF54\uB4DC",
      outKeyHint: "\uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8(V7/\u2026), \uCC28\uC6A9\uD654\uC74C(IVm, \u266DVII \u2026), \uD2B8\uB77C\uC774\uD1A4 \uC11C\uBE0C(\u266DII7)\uC608\uC694.",
      legend: "\uAE30\uB2A5 \uC0C9",
      fnT: "\uD1A0\uB2C9",
      fnSD: "\uC11C\uBE0C\uB3C4\uBBF8\uB10C\uD2B8",
      fnD: "\uB3C4\uBBF8\uB10C\uD2B8",
      fnX: "\uD0A4 \uBC16",
      presetsTitle: "\uC608\uC2DC \uC9C4\uD589",
      presets: {
        pop: "\uD31D \uC9C4\uD589 \xB7 I\u2013V\u2013VIm\u2013IV",
        "251": "2-5-1",
        "1625": "1-6-2-5",
        "36251": "3-6-2-5-1",
        canon: "\uCE74\uB17C \uD48D \xB7 I\u2013V\u2013VIm\u2013IIIm\u2013IV\u2013I\u2013IV\u2013V",
        secondary: "\uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8",
        borrowed: "\uCC28\uC6A9\uD654\uC74C \xB7 IVm",
        tritone: "\uD2B8\uB77C\uC774\uD1A4 \uC11C\uBE0C",
        m_pop: "i\u2013\u266DVI\u2013\u266DIII\u2013\u266DVII",
        m251: "\uB9C8\uC774\uB108 2-5-1",
        andalus: "i\u2013\u266DVII\u2013\u266DVI\u2013V (\uC548\uB2EC\uB8E8\uC2DC\uC544)",
        m_iv: "i\u2013iv\u2013V\u2013i"
      },
      mel: {
        title: "\uBA5C\uB85C\uB514",
        hint: "\uCF54\uB4DC \uC704\uC5D0 \uBA5C\uB85C\uB514\uB97C \uD55C \uC74C\uC529 \uC785\uB825\uD574 \uBCF4\uC138\uC694. \uC785\uB825\uD55C \uC74C\uC740 \uCF54\uB4DC\uC640\uC758 \uAD00\uACC4\uC5D0 \uB530\uB77C \uC0C9\uC774 \uB2EC\uB77C\uC838\uC694.",
        empty: "\uBA3C\uC800 \uC704\uC5D0\uC11C \uCF54\uB4DC \uC9C4\uD589\uC744 \uB9CC\uB4E4\uC5B4 \uC8FC\uC138\uC694.",
        durTitle: "\uC74C \uAE38\uC774",
        durations: { 0.5: "0.5\uBC15", 1: "1\uBC15", 1.5: "1.5\uBC15", 2: "2\uBC15", 3: "3\uBC15", 4: "4\uBC15" },
        rest: "\uC27C\uD45C",
        back: "\u232B \uC9C0\uC6B0\uAE30",
        clearBar: "\uB9C8\uB514 \uBE44\uC6B0\uAE30",
        clearAll: "\uBA5C\uB85C\uB514 \uC9C0\uC6B0\uAE30",
        generate: "\u{1F3B2} \uC790\uB3D9 \uBA5C\uB85C\uB514",
        generateHint: "\uCF54\uB4DC \uD1A4\uACFC \uACBD\uACFC\uC74C\xB7\uBCF4\uC870\uC74C \uADDC\uCE59\uC73C\uB85C \uBA5C\uB85C\uB514\uB97C \uB9CC\uB4E4\uC5B4 \uC918\uC694. \uB204\uB97C \uB54C\uB9C8\uB2E4 \uB2EC\uB77C\uC838\uC694.",
        showTones: "\uCF54\uB4DC \uD1A4 \uD45C\uC2DC",
        sound: "\uBA5C\uB85C\uB514 \uC18C\uB9AC",
        cursor: "\uC785\uB825 \uC704\uCE58: {bar}\uB9C8\uB514 {beat}\uBC15",
        cursorEnd: "\uC785\uB825 \uC704\uCE58: {bar}\uB9C8\uB514 \uB05D (\uB9C8\uB514\uB97C \uB20C\uB7EC \uC62E\uAE30\uC138\uC694)",
        tapHint: "\uB9C8\uB514\uC758 \uBE48 \uACF3\uC744 \uB204\uB974\uBA74 \uC785\uB825 \uC704\uCE58\uAC00 \uBC14\uB00C\uACE0, \uC74C\uC744 \uB204\uB974\uBA74 \uC120\uD0DD\uB3FC\uC694.",
        noteUp: "\u25B2 \uC74C \uC62C\uB9AC\uAE30",
        noteDown: "\u25BC \uC74C \uB0B4\uB9AC\uAE30",
        noteDelete: "\uC0AD\uC81C",
        analysisTitle: "\uBA5C\uB85C\uB514 \uBD84\uC11D",
        analysisEmpty: "\uBA5C\uB85C\uB514\uB97C \uC785\uB825\uD558\uBA74 \uCF54\uB4DC \uD1A4\uACFC \uBE44\uD654\uC131\uC74C\uC758 \uBE44\uC728, \uC870\uC5B8\uC744 \uC54C\uB824 \uB4DC\uB824\uC694.",
        legend: "\uC74C\uC758 \uC0C9",
        kinds: { chord: "\uCF54\uB4DC \uD1A4", tension: "\uD150\uC158", passing: "\uACBD\uACFC\uC74C", neighbor: "\uBCF4\uC870\uC74C", suspension: "\uACC4\uB958\uC74C", nonchord: "\uBE44\uD654\uC131\uC74C", out: "\uD0A4 \uBC16\uC758 \uC74C" },
        groups: { chord: "\uCF54\uB4DC \uD1A4", tension: "\uD150\uC158", nonchord: "\uBE44\uD654\uC131\uC74C", out: "\uD0A4 \uBC16" },
        tones: { root: "\uADFC\uC74C", third: "3\uC74C", fifth: "5\uC74C", seventh: "7\uC74C" },
        tensions: { 9: "9th", 11: "11th", 13: "13th", "#11": "\u266F11" },
        details: {
          chord: "{chord}\uC758 {tone}\uC774\uC5D0\uC694. \uC548\uC815\uC801\uC73C\uB85C \uC5B4\uC6B8\uB824\uC694.",
          tension: "{chord}\uC758 {tension} \uD150\uC158\uC774\uC5D0\uC694. \uCF54\uB4DC \uC548\uC758 \uC74C\uCC98\uB7FC \uC4F8 \uC218 \uC788\uC5B4\uC694.",
          passing: "\uB450 \uCF54\uB4DC \uD1A4 \uC0AC\uC774\uB97C \uACC4\uB2E8\uCC98\uB7FC \uC774\uC5B4 \uC8FC\uB294 \uACBD\uACFC\uC74C\uC774\uC5D0\uC694.",
          neighbor: "\uCF54\uB4DC \uD1A4\uC5D0\uC11C \uD55C \uCE78 \uAC14\uB2E4\uAC00 \uB3CC\uC544\uC624\uB294 \uBCF4\uC870\uC74C\uC774\uC5D0\uC694.",
          suspension: "\uC55E \uCF54\uB4DC\uC758 \uC74C\uC744 \uB0A8\uACA8 \uB480\uB2E4\uAC00 \uD55C \uCE78 \uC544\uB798\uB85C \uD480\uC5B4 \uC8FC\uB294 \uACC4\uB958\uC74C\uC774\uC5D0\uC694.",
          nonchord: "{chord}\uC5D0 \uC5C6\uB294 \uC74C\uC774\uC5D0\uC694. \uC9E7\uAC8C \uC9C0\uB098\uAC00\uAC70\uB098 \uB2E4\uC74C \uC74C\uC73C\uB85C \uD480\uC5B4 \uC8FC\uBA74 \uC790\uC5F0\uC2A4\uB7EC\uC6CC\uC694.",
          out: "\uC774 \uD0A4\uC758 \uC74C\uC774 \uC544\uB2C8\uC5D0\uC694. \uC758\uB3C4\uD55C \uC0C9\uC774 \uC544\uB2C8\uB77C\uBA74 \uD0A4 \uC548\uC758 \uC74C\uC73C\uB85C \uBC14\uAFD4 \uBCF4\uC138\uC694."
        },
        hints: {
          strong: "{bar}\uB9C8\uB514 {beat}\uBC15\uC5D0 \uCF54\uB4DC \uBC16\uC758 \uC74C\uC774 \uAE38\uAC8C \uB193\uC600\uC5B4\uC694. \uAE38\uAC8C \uBA38\uBB34\uB294 \uC74C\uC740 \uCF54\uB4DC \uD1A4\uC774 \uB354 \uC548\uC815\uC801\uC774\uC5D0\uC694.",
          out: "{bar}\uB9C8\uB514\uC5D0 \uD0A4 \uBC16\uC758 \uC74C\uC774 \uC788\uC5B4\uC694. \uC758\uB3C4\uD55C \uC0C9\uC774 \uC544\uB2C8\uB77C\uBA74 \uD0A4 \uC548\uC758 \uC74C\uC73C\uB85C \uBC14\uAFD4 \uBCF4\uC138\uC694.",
          end: "\uB9C8\uC9C0\uB9C9 \uC74C\uC774 \uCF54\uB4DC \uD1A4\uC774 \uC544\uB2C8\uC5D0\uC694. \uB05D\uB098\uB294 \uC74C\uC774 \uCF54\uB4DC \uD1A4(\uD2B9\uD788 \uC73C\uB738\uC74C)\uC774\uBA74 \uC548\uC815\uC801\uC73C\uB85C \uB05D\uB098\uC694.",
          allChord: "\uBAA8\uB450 \uCF54\uB4DC \uD1A4\uC774\uC5D0\uC694. \uC548\uC815\uC801\uC774\uC9C0\uB9CC, \uACBD\uACFC\uC74C\uC774\uB098 \uBCF4\uC870\uC74C\uC744 \uD55C\uB450 \uAC1C \uC11E\uC73C\uBA74 \uC6C0\uC9C1\uC784\uC774 \uC0DD\uACA8\uC694.",
          good: "\uCF54\uB4DC \uD1A4\uC744 \uC911\uC2EC\uC73C\uB85C \uBE44\uD654\uC131\uC74C\uC744 \uC798 \uC11E\uC5C8\uC5B4\uC694."
        },
        full: "\uB9C8\uC9C0\uB9C9 \uB9C8\uB514\uC758 \uB05D\uC774\uC5D0\uC694. \uB9C8\uB514\uB97C \uB20C\uB7EC\uC11C \uC785\uB825 \uC704\uCE58\uB97C \uC62E\uAE30\uC138\uC694.",
        prevChanged: '(\uC774\uC5B4\uC9C0\uB294 \uC74C \uB355\uBD84\uC5D0 \uC55E \uC74C {note}\uC758 \uBD84\uB958\uAC00 "{kind}"(\uC73C)\uB85C \uBC14\uB00C\uC5C8\uC5B4\uC694.)'
      },
      saveTitle: "\uC800\uC7A5\uD558\uAE30",
      savePlaceholder: "\uB0B4 \uC9C4\uD589 {n}",
      saveButton: "\uC800\uC7A5",
      savedTitle: "\uC800\uC7A5\uD55C \uC9C4\uD589",
      noSaved: "\uC800\uC7A5\uD55C \uC9C4\uD589\uC774 \uC5C6\uC5B4\uC694.",
      load: "\uBD88\uB7EC\uC624\uAE30",
      deleteSaved: "\uC0AD\uC81C",
      confirmDelete: "\uC774 \uC9C4\uD589\uC744 \uC0AD\uC81C\uD560\uAE4C\uC694?",
      maxSaved: "\uC800\uC7A5\uC740 \uCD5C\uB300 30\uAC1C\uAE4C\uC9C0 \uAC00\uB2A5\uD574\uC694.",
      emptySave: "\uC800\uC7A5\uD560 \uCF54\uB4DC\uAC00 \uC5C6\uC5B4\uC694.",
      saved: "\uC800\uC7A5\uD588\uC5B4\uC694!",
      keyLabel: "{key} {mode}"
    },
    // 설정
    settingsTitle: "\uC124\uC815",
    labelModeTitle: "\uAC74\uBC18 \uAE00\uC790 \uD45C\uC2DC",
    labelModeDesc: "\uAC74\uBC18\uC5D0 \uC5B4\uB5A4 \uC774\uB984\uC744 \uD45C\uC2DC\uD560\uC9C0 \uACE0\uB974\uC138\uC694. \uC775\uC219\uD574\uC9C0\uBA74 \uC228\uACA8\uC11C \uC5F0\uC2B5\uD574 \uBCF4\uC138\uC694.",
    labelModes: { both: "\uB3C4\uB808\uBBF8 + ABC", solfege: "\uB3C4\uB808\uBBF8\uB9CC", letter: "ABC\uB9CC", none: "\uC228\uAE30\uAE30" },
    unlockAll: "\uBAA8\uB4E0 \uB808\uC2A8 \uC5F4\uC5B4\uB450\uAE30",
    unlockAllDesc: "\uC21C\uC11C\uC640 \uC0C1\uAD00\uC5C6\uC774 \uC6D0\uD558\uB294 \uB808\uC2A8\uC744 \uBC14\uB85C \uC5F4 \uC218 \uC788\uC5B4\uC694.",
    resetTitle: "\uD559\uC2B5 \uAE30\uB85D",
    resetButton: "\uC9C4\uB3C4 \uCD08\uAE30\uD654",
    resetConfirm: "\uBAA8\uB4E0 \uD559\uC2B5 \uAE30\uB85D\uC774 \uC0AD\uC81C\uB3FC\uC694. \uACC4\uC18D\uD560\uAE4C\uC694?"
  };

  // content/ko/glossary.js
  var glossary_default = {
    "note-name": {
      term: "\uC74C\uC774\uB984",
      desc: "C D E F G A B\uCC98\uB7FC \uC54C\uD30C\uBCB3\uC73C\uB85C \uBD80\uB974\uB294 \uC74C\uC758 \uC774\uB984\uC774\uC5D0\uC694. \uB3C4\uB808\uBBF8\uD30C\uC194\uB77C\uC2DC\uC640 \uC9DD\uC774 \uC815\uD574\uC838 \uC788\uACE0(\uB3C4=C, \uB808=D, \uBBF8=E, \uD30C=F, \uC194=G, \uB77C=A, \uC2DC=B), \uCF54\uB4DC \uC774\uB984\uB3C4 \uC774 \uC54C\uD30C\uBCB3\uC73C\uB85C \uC368\uC694."
    },
    octave: {
      term: "\uC625\uD0C0\uBE0C",
      desc: "\uC774\uB984\uC774 \uAC19\uC740 \uC74C \uC911\uC5D0\uC11C \uAC00\uC7A5 \uAC00\uAE4C\uC6B4 \uB192\uC740(\uB610\uB294 \uB0AE\uC740) \uC74C\uAE4C\uC9C0\uC758 \uAC70\uB9AC\uC608\uC694. \uB3C4\uC5D0\uC11C \uB192\uC740 \uB3C4\uAE4C\uC9C0\uAC00 \uD55C \uC625\uD0C0\uBE0C\uC774\uACE0, \uB192\uC774\uB9CC \uB2E4\uB97C \uBFD0 \uAC19\uC740 \uC74C\uCC98\uB7FC \uB4E4\uB824\uC694. \uD55C \uC625\uD0C0\uBE0C \uC548\uC5D0\uB294 12\uAC1C\uC758 \uC74C\uC774 \uC788\uC5B4\uC694.",
      example: { midis: [60, 72], mode: "both" }
    },
    semitone: {
      term: "\uBC18\uC74C",
      desc: "\uAC74\uBC18\uC5D0\uC11C \uBC14\uB85C \uC606\uC5D0 \uC788\uB294 \uC74C\uAE4C\uC9C0\uC758 \uAC70\uB9AC\uC608\uC694. \uAC00\uC7A5 \uC9E7\uC740 \uAC78\uC74C\uC774\uACE0, \uD770\uAC74\uBC18\xB7\uAC80\uC740\uAC74\uBC18 \uAD6C\uBD84 \uC5C6\uC774 \uBC14\uB85C \uC606 \uAC74\uBC18\uC774\uBA74 \uBC18\uC74C\uC774\uC5D0\uC694.",
      example: { midis: [60, 61], mode: "seq" }
    },
    wholetone: {
      term: "\uC628\uC74C",
      desc: "\uBC18\uC74C \uB450 \uAC1C\uB97C \uD569\uCE5C \uAC70\uB9AC\uC608\uC694. \uAC74\uBC18\uC5D0\uC11C \uD55C \uCE78\uC744 \uAC74\uB108\uB6F4 \uC74C\uAE4C\uC9C0\uC758 \uAC70\uB9AC\uC608\uC694.",
      example: { midis: [60, 62], mode: "seq" }
    },
    sharp: {
      term: "\uC0E4\uD504(\u266F)",
      desc: "\uC74C\uC744 \uBC18\uC74C \uC62C\uB9AC\uB294 \uAE30\uD638\uC608\uC694. \uAC74\uBC18\uC5D0\uC11C \uC624\uB978\uCABD \uBC14\uB85C \uC606 \uC74C\uC774\uC5D0\uC694. \uB3C4\u266F\uC740 \uB3C4\uBCF4\uB2E4 \uBC18\uC74C \uB192\uC740 \uC74C\uC774\uC5D0\uC694.",
      example: { midis: [60, 61], mode: "seq" }
    },
    flat: {
      term: "\uD50C\uB7AB(\u266D)",
      desc: "\uC74C\uC744 \uBC18\uC74C \uB0B4\uB9AC\uB294 \uAE30\uD638\uC608\uC694. \uAC74\uBC18\uC5D0\uC11C \uC67C\uCABD \uBC14\uB85C \uC606 \uC74C\uC774\uC5D0\uC694. \uB808\u266D\uC740 \uB808\uBCF4\uB2E4 \uBC18\uC74C \uB0AE\uC740 \uC74C\uC774\uC5D0\uC694.",
      example: { midis: [62, 61], mode: "seq" }
    },
    enharmonic: {
      term: "\uC774\uBA85\uB3D9\uC74C",
      desc: "\uAC19\uC740 \uAC74\uBC18\uC778\uB370 \uC774\uB984\uC774 \uB450 \uAC1C\uC778 \uC74C\uC774\uC5D0\uC694. \uC608\uB97C \uB4E4\uC5B4 C\u266F\uACFC D\u266D\uC740 \uAC19\uC740 \uAC80\uC740\uAC74\uBC18\uC774\uC5D0\uC694. \uC5B4\uB290 \uC774\uB984\uC73C\uB85C \uC4F8\uC9C0\uB294 \uACE1\uC758 \uC870\uC131\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC838\uC694.",
      example: { midis: [61], mode: "chord" }
    },
    interval: {
      term: "\uC74C\uC815",
      desc: '\uB450 \uC74C \uC0AC\uC774\uC758 \uAC70\uB9AC\uC608\uC694. "\uBA87 \uB3C4"\uC640 "\uC7A5\xB7\uB2E8\xB7\uC644\uC804" \uAC19\uC740 \uC774\uB984\uC73C\uB85C \uBD88\uB7EC\uC694.'
    },
    degree: {
      term: "\uB3C4\uC218",
      desc: '\uC74C\uC815 \uC774\uB984\uC758 "\uBA87 \uB3C4"\uC5D0 \uD574\uB2F9\uD558\uB294 \uC22B\uC790\uC608\uC694. \uC2DC\uC791\uC74C\uC744 1\uB85C \uB193\uACE0 \uC74C \uC774\uB984\uC744 \uCC28\uB840\uB85C \uC138\uC694. \uB3C4\uC5D0\uC11C \uBBF8\uB294 \uB3C4(1) - \uB808(2) - \uBBF8(3)\uC774\uB2C8\uAE4C 3\uB3C4\uC608\uC694.'
    },
    "major-interval": {
      term: "\uC7A5\uC74C\uC815",
      desc: '\uC7A5(\u9577)\uC740 "\uD06C\uB2E4"\uB294 \uB73B\uC774\uC5D0\uC694. \uAC19\uC740 \uB3C4\uC218 \uC911\uC5D0\uC11C \uB354 \uB113\uC740 \uCABD \uC74C\uC815\uC774\uC5D0\uC694. \uC608: \uC7A53\uB3C4\uB294 \uBC18\uC74C 4\uAC1C \uAC70\uB9AC\uC608\uC694.'
    },
    "minor-interval": {
      term: "\uB2E8\uC74C\uC815",
      desc: '\uB2E8(\u77ED)\uC740 "\uC791\uB2E4"\uB294 \uB73B\uC774\uC5D0\uC694. \uAC19\uC740 \uB3C4\uC218 \uC911\uC5D0\uC11C \uBC18\uC74C \uD558\uB098 \uB354 \uC881\uC740 \uCABD \uC74C\uC815\uC774\uC5D0\uC694. \uC608: \uB2E83\uB3C4\uB294 \uBC18\uC74C 3\uAC1C \uAC70\uB9AC\uC608\uC694.'
    },
    perfect: {
      term: "\uC644\uC804\uC74C\uC815",
      desc: "4\uB3C4\xB75\uB3C4\xB78\uB3C4\uC5D0 \uBD99\uB294 \uC774\uB984\uC774\uC5D0\uC694. \uC7A5\xB7\uB2E8 \uAD6C\uBD84 \uC5C6\uC774 \uD558\uB098\uBFD0\uC774\uACE0, \uAC00\uC7A5 \uC548\uC815\uC801\uC73C\uB85C \uC5B4\uC6B8\uB824 \uB4E4\uB824\uC694."
    },
    tritone: {
      term: "\uD2B8\uB77C\uC774\uD1A4",
      desc: "\uBC18\uC74C 6\uAC1C \uAC70\uB9AC\uC758 \uC74C\uC815(\uC99D4\uB3C4 \uB610\uB294 \uAC105\uB3C4)\uC774\uC5D0\uC694. \uBD88\uC548\uC815\uD558\uACE0 \uAE34\uC7A5\uB418\uB294 \uC18C\uB9AC\uB77C\uC11C, \uB098\uC911\uC5D0 \uBC30\uC6B8 \uB3C4\uBBF8\uB10C\uD2B8 7th \uCF54\uB4DC\uC5D0\uC11C \uD575\uC2EC \uC5ED\uD560\uC744 \uD574\uC694.",
      example: { midis: [60, 66], mode: "both" }
    },
    scale: {
      term: "\uC2A4\uCF00\uC77C(\uC74C\uACC4)",
      desc: "\uC815\uD574\uC9C4 \uAC04\uACA9 \uADDC\uCE59\uC5D0 \uB530\uB77C \uC74C\uC744 \uACC4\uB2E8\uCC98\uB7FC \uCC28\uB840\uB85C \uB098\uC5F4\uD55C \uAC83\uC774\uC5D0\uC694."
    },
    "major-scale": {
      term: "\uBA54\uC774\uC800 \uC2A4\uCF00\uC77C",
      desc: "\uB3C4\uB808\uBBF8\uD30C\uC194\uB77C\uC2DC\uB3C4\uCC98\uB7FC \uBC1D\uACE0 \uC548\uC815\uC801\uC778 \uB290\uB08C\uC758 \uC2A4\uCF00\uC77C\uC774\uC5D0\uC694. \uAC04\uACA9 \uACF5\uC2DD\uC740 \uC628-\uC628-\uBC18-\uC628-\uC628-\uC628-\uBC18\uC774\uC5D0\uC694.",
      example: { midis: [60, 62, 64, 65, 67, 69, 71, 72], mode: "seq" }
    },
    tonic: {
      term: "\uC73C\uB738\uC74C",
      desc: '\uC2A4\uCF00\uC77C\uC758 \uCD9C\uBC1C\uC74C\uC774\uC790 \uC911\uC2EC\uC774 \uB418\uB294 \uC74C\uC774\uC5D0\uC694. \uACE1\uC774 \uB3CC\uC544\uC640 \uC26C\uACE0 \uC2F6\uC5B4 \uD558\uB294 "\uC9D1" \uAC19\uC740 \uC74C\uC774\uC5D0\uC694.'
    },
    "natural-minor": {
      term: "\uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108",
      desc: "\uAC00\uC7A5 \uAE30\uBCF8\uC774 \uB418\uB294 \uB9C8\uC774\uB108 \uC2A4\uCF00\uC77C\uC774\uC5D0\uC694. \uC5B4\uB461\uACE0 \uC4F8\uC4F8\uD55C \uBD84\uC704\uAE30\uAC00 \uB098\uC694. \uAC04\uACA9 \uACF5\uC2DD\uC740 \uC628-\uBC18-\uC628-\uC628-\uBC18-\uC628-\uC628\uC774\uC5D0\uC694.",
      example: { midis: [57, 59, 60, 62, 64, 65, 67, 69], mode: "seq" }
    },
    "harmonic-minor": {
      term: "\uD558\uBAA8\uB2C9 \uB9C8\uC774\uB108",
      desc: "\uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108\uC5D0\uC11C 7\uBC88\uC9F8 \uC74C\uC744 \uBC18\uC74C \uC62C\uB9B0 \uC2A4\uCF00\uC77C\uC774\uC5D0\uC694. \uC774\uAD6D\uC801\uC778 \uB290\uB08C\uC774 \uB098\uACE0, 7\uBC88\uC9F8 \uC74C\uC774 \uC73C\uB738\uC74C\uC73C\uB85C \uAC15\uD558\uAC8C \uB04C\uB824\uAC00\uC694.",
      example: { midis: [57, 59, 60, 62, 64, 65, 68, 69], mode: "seq" }
    },
    "melodic-minor": {
      term: "\uBA5C\uB85C\uB515 \uB9C8\uC774\uB108",
      desc: "\uC62C\uB77C\uAC08 \uB54C\uB294 6\uBC88\uC9F8\uC640 7\uBC88\uC9F8 \uC74C\uC744 \uBC18\uC74C \uC62C\uB9AC\uACE0, \uB0B4\uB824\uC62C \uB54C\uB294 \uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108\uB85C \uB3CC\uC544\uC624\uB294 \uC2A4\uCF00\uC77C\uC774\uC5D0\uC694. \uBA5C\uB85C\uB514\uAC00 \uBD80\uB4DC\uB7FD\uAC8C \uC774\uC5B4\uC9C0\uB3C4\uB85D \uB9CC\uB4E4\uC5B4\uC84C\uC5B4\uC694.",
      example: { midis: [57, 59, 60, 62, 64, 66, 68, 69], mode: "seq" }
    },
    // ── 유닛 3: 조(Key) ────────────────────────────────────────
    key: {
      term: "\uC870(Key)",
      desc: '\uACE1\uC774 \uC5B4\uB5A4 \uC73C\uB738\uC74C\uACFC \uC2A4\uCF00\uC77C\uC744 \uC911\uC2EC\uC73C\uB85C \uB9CC\uB4E4\uC5B4\uC84C\uB294\uC9C0\uB97C \uB9D0\uD574\uC694. "C \uBA54\uC774\uC800 \uD0A4"\uB294 C\uB97C \uC73C\uB738\uC74C\uC73C\uB85C \uD558\uB294 \uBA54\uC774\uC800 \uC2A4\uCF00\uC77C\uC758 \uC74C\uB4E4\uC774 \uC911\uC2EC\uC774\uB77C\uB294 \uB73B\uC774\uC5D0\uC694. \uBA54\uC774\uC800 \uD0A4\uB294 \uC7A5\uC870, \uB9C8\uC774\uB108 \uD0A4\uB294 \uB2E8\uC870\uB77C\uACE0\uB3C4 \uBD88\uB7EC\uC694.'
    },
    transpose: {
      term: "\uC870\uC62E\uAE40",
      desc: "\uBA5C\uB85C\uB514\uB098 \uCF54\uB4DC\uC758 \uBAA8\uB4E0 \uC74C\uC744 \uAC19\uC740 \uAC04\uACA9\uB9CC\uD07C \uC62E\uACA8\uC11C \uB2E4\uB978 \uD0A4\uB85C \uBC14\uAFB8\uB294 \uAC83\uC774\uC5D0\uC694. \uB192\uC774\uB9CC \uB2EC\uB77C\uC9C8 \uBFD0 \uC74C \uC0AC\uC774\uC758 \uAC04\uACA9(\uC74C\uC815)\uC740 \uADF8\uB300\uB85C\uC608\uC694.",
      example: { midis: [60, 60, 67, 67, 69, 69, 67], mode: "seq", gap: 0.4 }
    },
    "circle-of-fifths": {
      term: "5\uB3C4\uAD8C",
      desc: "12\uAC1C\uC758 \uD0A4\uB97C \uC644\uC8045\uB3C4 \uAC04\uACA9\uC73C\uB85C \uB465\uAE00\uAC8C \uBC30\uC5F4\uD55C \uC9C0\uB3C4\uC608\uC694. \uC2DC\uACC4 \uBC29\uD5A5\uC73C\uB85C \uD55C \uCE78 \uAC08 \uB54C\uB9C8\uB2E4 \uC0E4\uD504(\u266F)\uAC00 \uD558\uB098\uC529 \uB298\uACE0, \uBC18\uC2DC\uACC4 \uBC29\uD5A5\uC73C\uB85C \uAC00\uBA74 \uD50C\uB7AB(\u266D)\uC774 \uD558\uB098\uC529 \uB298\uC5B4\uC694."
    },
    "relative-key": {
      term: "\uB098\uB780\uD55C\uC870",
      desc: "\uC4F0\uB294 \uC74C\uC774 \uC644\uC804\uD788 \uAC19\uC740 \uBA54\uC774\uC800 \uD0A4\uC640 \uB9C8\uC774\uB108 \uD0A4\uC758 \uC9DD\uC774\uC5D0\uC694. \uBA54\uC774\uC800 \uD0A4\uC758 6\uBC88\uC9F8 \uC74C\uC5D0\uC11C \uC2DC\uC791\uD558\uB294 \uB9C8\uC774\uB108 \uD0A4\uAC00 \uB098\uB780\uD55C\uC870\uC608\uC694. \uC608: C \uBA54\uC774\uC800\uC640 A \uB9C8\uC774\uB108."
    },
    // ── 유닛 4: 3화음 ──────────────────────────────────────────
    chord: {
      term: "\uD654\uC74C(\uCF54\uB4DC)",
      desc: "\uB458 \uC774\uC0C1\uC758 \uC74C\uC774 \uB3D9\uC2DC\uC5D0 \uC6B8\uB9AC\uB294 \uAC83\uC774\uC5D0\uC694. \uBCF4\uD1B5 \uC138 \uC74C \uC774\uC0C1\uC73C\uB85C \uB9CC\uB4E4\uACE0, \uACE1\uC758 \uBD84\uC704\uAE30\uC640 \uD750\uB984\uC744 \uB9CC\uB4E4\uC5B4\uC694.",
      example: { midis: [60, 64, 67], mode: "chord" }
    },
    triad: {
      term: "3\uD654\uC74C",
      desc: "\uC74C 3\uAC1C\uB85C \uC774\uB8E8\uC5B4\uC9C4 \uAC00\uC7A5 \uAE30\uBCF8\uC801\uC778 \uD654\uC74C\uC774\uC5D0\uC694. \uADFC\uC74C \uC704\uC5D0 3\uB3C4\uB97C \uB450 \uBC88 \uC313\uC544\uC11C \uB9CC\uB4E4\uC5B4\uC694.",
      example: { midis: [60, 64, 67], mode: "both" }
    },
    root: {
      term: "\uADFC\uC74C(\uB8E8\uD2B8)",
      desc: "\uD654\uC74C\uC758 \uAC00\uC7A5 \uC544\uB798\uC5D0 \uB193\uC774\uB294 \uAE30\uC900 \uC74C\uC774\uC5D0\uC694. \uD654\uC74C\uC758 \uC774\uB984\uB3C4 \uADFC\uC74C\uC744 \uB530\uB77C \uBD99\uC5EC\uC694. C \uCF54\uB4DC\uC758 \uADFC\uC74C\uC740 C\uC608\uC694."
    },
    "major-triad": {
      term: "\uBA54\uC774\uC800 \uCF54\uB4DC",
      desc: "\uADFC\uC74C \uC704\uC5D0 \uC7A53\uB3C4(\uBC18\uC74C 4\uAC1C)\uC640 \uC644\uC8045\uB3C4(\uBC18\uC74C 7\uAC1C)\uB97C \uC313\uC740 3\uD654\uC74C\uC774\uC5D0\uC694. \uBC1D\uACE0 \uC548\uC815\uC801\uC73C\uB85C \uB4E4\uB824\uC694. \uD45C\uAE30\uB294 \uADFC\uC74C \uC774\uB984\uB9CC \uC368\uC694. \uC608: C.",
      example: { midis: [60, 64, 67], mode: "both" }
    },
    "minor-triad": {
      term: "\uB9C8\uC774\uB108 \uCF54\uB4DC",
      desc: "\uADFC\uC74C \uC704\uC5D0 \uB2E83\uB3C4(\uBC18\uC74C 3\uAC1C)\uC640 \uC644\uC8045\uB3C4(\uBC18\uC74C 7\uAC1C)\uB97C \uC313\uC740 3\uD654\uC74C\uC774\uC5D0\uC694. \uC5B4\uB461\uACE0 \uCC28\uBD84\uD558\uAC8C \uB4E4\uB824\uC694. \uD45C\uAE30\uB294 \uB4A4\uC5D0 m\uC744 \uBD99\uC5EC\uC694. \uC608: Cm.",
      example: { midis: [60, 63, 67], mode: "both" }
    },
    "dim-triad": {
      term: "\uAC10\uD654\uC74C(dim)",
      desc: "\uB2E83\uB3C4\uB97C \uB450 \uBC88 \uC313\uC740 3\uD654\uC74C\uC774\uC5D0\uC694. 5\uC74C\uC774 \uBC18\uC74C 6\uAC1C(\uAC105\uB3C4)\uB85C \uC881\uC544\uC838\uC11C \uBD88\uC548\uD558\uACE0 \uAE34\uC7A5\uB41C \uC18C\uB9AC\uAC00 \uB098\uC694. \uD45C\uAE30\uB294 dim. \uC608: Cdim.",
      example: { midis: [60, 63, 66], mode: "both" }
    },
    "aug-triad": {
      term: "\uC99D\uD654\uC74C(aug)",
      desc: "\uC7A53\uB3C4\uB97C \uB450 \uBC88 \uC313\uC740 3\uD654\uC74C\uC774\uC5D0\uC694. 5\uC74C\uC774 \uBC18\uC74C 8\uAC1C\uB85C \uB113\uC5B4\uC838\uC11C \uBD95 \uB72C \uB4EF\uD55C \uBABD\uD658\uC801\uC778 \uC18C\uB9AC\uAC00 \uB098\uC694. \uD45C\uAE30\uB294 aug \uB610\uB294 +. \uC608: Caug.",
      example: { midis: [60, 64, 68], mode: "both" }
    },
    // ── 유닛 5: 4화음과 코드 표기 ───────────────────────────────
    "seventh-chord": {
      term: "4\uD654\uC74C(7th \uCF54\uB4DC)",
      desc: '3\uD654\uC74C \uC704\uC5D0 3\uB3C4\uB97C \uD558\uB098 \uB354 \uC313\uC544\uC11C \uC74C 4\uAC1C\uB85C \uB9CC\uB4E0 \uD654\uC74C\uC774\uC5D0\uC694. \uC0C8\uB85C \uB354\uD574\uC9C4 \uC74C\uC740 \uADFC\uC74C\uC5D0\uC11C 7\uB3C4 \uB5A8\uC5B4\uC838\uC11C "7th(7\uC74C)"\uC774\uB77C\uACE0 \uBD88\uB7EC\uC694.',
      example: { midis: [60, 64, 67, 71], mode: "both" }
    },
    maj7: {
      term: "\uBA54\uC774\uC800 7th (maj7)",
      desc: "\uBA54\uC774\uC800 \uCF54\uB4DC \uC704\uC5D0 \uC7A57\uB3C4(\uBC18\uC74C 11\uAC1C)\uB97C \uC5B9\uC740 4\uD654\uC74C\uC774\uC5D0\uC694. \uBABD\uAE00\uBABD\uAE00\uD558\uACE0 \uC138\uB828\uB41C \uC18C\uB9AC\uAC00 \uB098\uC694. \uC608: Cmaj7 (C E G B).",
      example: { midis: [60, 64, 67, 71], mode: "both" }
    },
    dom7: {
      term: "\uB3C4\uBBF8\uB10C\uD2B8 7th (7)",
      desc: "\uBA54\uC774\uC800 \uCF54\uB4DC \uC704\uC5D0 \uB2E87\uB3C4(\uBC18\uC74C 10\uAC1C)\uB97C \uC5B9\uC740 4\uD654\uC74C\uC774\uC5D0\uC694. \uD33D\uD33D\uD55C \uAE34\uC7A5\uC774 \uC788\uC5B4\uC11C \uB2E4\uC74C \uCF54\uB4DC\uB85C \uAC00\uACE0 \uC2F6\uC5B4\uC9C0\uB294 \uC18C\uB9AC\uAC00 \uB098\uC694. \uD45C\uAE30\uB294 \uC22B\uC790 7\uB9CC \uC368\uC694. \uC608: C7 (C E G B\u266D).",
      example: { midis: [60, 64, 67, 70], mode: "both" }
    },
    m7: {
      term: "\uB9C8\uC774\uB108 7th (m7)",
      desc: "\uB9C8\uC774\uB108 \uCF54\uB4DC \uC704\uC5D0 \uB2E87\uB3C4(\uBC18\uC74C 10\uAC1C)\uB97C \uC5B9\uC740 4\uD654\uC74C\uC774\uC5D0\uC694. \uBD80\uB4DC\uB7FD\uACE0 \uCC28\uBD84\uD55C \uC18C\uB9AC\uAC00 \uB098\uC694. \uC608: Cm7 (C E\u266D G B\u266D).",
      example: { midis: [60, 63, 67, 70], mode: "both" }
    },
    m7b5: {
      term: "\uD558\uD504 \uB514\uBBF8\uB2C8\uC2DC\uB4DC (m7\u266D5)",
      desc: "\uAC10\uD654\uC74C \uC704\uC5D0 \uB2E87\uB3C4(\uBC18\uC74C 10\uAC1C)\uB97C \uC5B9\uC740 4\uD654\uC74C\uC774\uC5D0\uC694. \uB9C8\uC774\uB108 7th\uC5D0\uC11C 5\uC74C\uC744 \uBC18\uC74C \uB0B4\uB9B0 \uBAA8\uC591\uC774\uC5D0\uC694. \uC5B4\uB461\uACE0 \uBBF8\uBB18\uD558\uAC8C \uBD88\uC548\uD574\uC694. \uC608: Cm7\u266D5 (C E\u266D G\u266D B\u266D).",
      example: { midis: [60, 63, 66, 70], mode: "both" }
    },
    "chord-symbol": {
      term: "\uCF54\uB4DC \uC2EC\uBCFC",
      desc: '\uD654\uC74C\uC744 \uAE00\uC790\uB85C \uC904\uC5EC \uC4F4 \uC774\uB984\uC774\uC5D0\uC694. "\uADFC\uC74C \uC774\uB984 + \uC885\uB958" \uC21C\uC11C\uB85C \uC368\uC694. \uC608: C(\uBA54\uC774\uC800), Cm(\uB9C8\uC774\uB108), Cmaj7, Cm7, C7, Cdim.'
    },
    // ── 유닛 6: 다이어토닉 코드 ─────────────────────────────────
    diatonic: {
      term: "\uB2E4\uC774\uC5B4\uD1A0\uB2C9 \uCF54\uB4DC",
      desc: "\uD55C \uD0A4\uC758 \uC2A4\uCF00\uC77C\uC5D0 \uC788\uB294 \uC74C\uB9CC\uC73C\uB85C \uC313\uC740 \uD654\uC74C\uC774\uC5D0\uC694. \uC2A4\uCF00\uC77C\uC758 7\uAC1C \uC74C \uC704\uC5D0 \uD558\uB098\uC529, \uD0A4\uB9C8\uB2E4 7\uAC1C\uC758 \uCF54\uB4DC\uAC00 \uB098\uC640\uC694. \uADF8 \uD0A4 \uC548\uC5D0\uC11C \uAC00\uC7A5 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uC5B4\uC6B8\uB9AC\uB294 \uCF54\uB4DC\uB4E4\uC774\uC5D0\uC694."
    },
    roman: {
      term: "\uB85C\uB9C8 \uC22B\uC790 \uD45C\uAE30",
      desc: '\uCF54\uB4DC\uB97C "\uADF8 \uD0A4\uC758 \uBA87 \uBC88\uC9F8 \uC74C \uC704\uC758 \uCF54\uB4DC\uC778\uAC00"\uB85C \uBD80\uB974\uB294 \uBC29\uBC95\uC774\uC5D0\uC694. I, II, III, IV, V, VI, VII. \uD0A4\uAC00 \uB2EC\uB77C\uC838\uB3C4 \uAC19\uC740 \uBC88\uD638\uB294 \uAC19\uC740 \uC5ED\uD560\uC744 \uD574\uC11C, \uACE1\uC744 \uB2E4\uB978 \uD0A4\uB85C \uC62E\uAE30\uAE30 \uC26C\uC6CC\uC694.'
    },
    // ── 유닛 7: 코드의 기능 ─────────────────────────────────────
    function: {
      term: "\uCF54\uB4DC\uC758 \uAE30\uB2A5",
      desc: "\uD0A4 \uC548\uC5D0\uC11C \uCF54\uB4DC\uAC00 \uB9E1\uB294 \uC5ED\uD560\uC774\uC5D0\uC694. \uD06C\uAC8C \uD1A0\uB2C9(T), \uC11C\uBE0C\uB3C4\uBBF8\uB10C\uD2B8(SD), \uB3C4\uBBF8\uB10C\uD2B8(D) \uC138 \uAC00\uC9C0\uB85C \uB098\uB220\uC694. \uAC19\uC740 \uAE30\uB2A5\uC758 \uCF54\uB4DC\uB294 \uC11C\uB85C \uBC14\uAFD4 \uC368\uB3C4 \uBE44\uC2B7\uD55C \uD750\uB984\uC774 \uB3FC\uC694."
    },
    "tonic-chord": {
      term: "\uD1A0\uB2C9(T)",
      desc: "\uC9D1\uCC98\uB7FC \uC548\uC815\uB418\uACE0 \uD3B8\uC548\uD55C \uCF54\uB4DC\uC758 \uAE30\uB2A5\uC774\uC5D0\uC694. \uACE1\uC774 \uC2DC\uC791\uD558\uACE0 \uB05D\uB098\uB294 \uACF3\uC774\uC5D0\uC694. \uB300\uD45C \uCF54\uB4DC\uB294 I\uC774\uACE0, VIm\uB3C4 \uAC19\uC740 \uAE30\uB2A5\uC774\uC5D0\uC694. (\uC2A4\uCF00\uC77C\uC758 \uC73C\uB738\uC74C\uACFC\uB294 \uB2E4\uB978 \uB9D0\uC774\uC5D0\uC694.)"
    },
    subdominant: {
      term: "\uC11C\uBE0C\uB3C4\uBBF8\uB10C\uD2B8(SD)",
      desc: "\uD1A0\uB2C9\uC5D0\uC11C \uBC97\uC5B4\uB098 \uC6C0\uC9C1\uC774\uAE30 \uC2DC\uC791\uD558\uB294 \uCF54\uB4DC\uC758 \uAE30\uB2A5\uC774\uC5D0\uC694. \uC57D\uD55C \uAE34\uC7A5\uC774 \uC788\uACE0, \uBCF4\uD1B5 \uB3C4\uBBF8\uB10C\uD2B8\uB85C \uC774\uC5B4\uC838\uC694. \uB300\uD45C \uCF54\uB4DC\uB294 IV\uC640 IIm\uC774\uC5D0\uC694."
    },
    dominant: {
      term: "\uB3C4\uBBF8\uB10C\uD2B8(D)",
      desc: "\uAE34\uC7A5\uC774 \uAC00\uC7A5 \uCEE4\uC11C \uD1A0\uB2C9\uC73C\uB85C \uB3CC\uC544\uAC00\uACE0 \uC2F6\uAC8C \uB9CC\uB4DC\uB294 \uCF54\uB4DC\uC758 \uAE30\uB2A5\uC774\uC5D0\uC694. \uB300\uD45C \uCF54\uB4DC\uB294 V7\uC774\uC5D0\uC694."
    },
    // ── 유닛 13: 모드·대리코드·카덴스·곡 구조·전조 ──────────────────
    mode: {
      term: "\uBAA8\uB4DC",
      desc: "\uBA54\uC774\uC800 \uC2A4\uCF00\uC77C\uC758 \uC74C\uC740 \uADF8\uB300\uB85C \uB450\uACE0 \uC2DC\uC791\uD558\uB294 \uC74C\uB9CC \uBC14\uAFD4\uC11C \uB9CC\uB4E0 \uC2A4\uCF00\uC77C\uC774\uC5D0\uC694. 7\uAC1C\uAC00 \uC788\uC5B4\uC694: \uC774\uC624\uB2C8\uC548(=\uBA54\uC774\uC800), \uB3C4\uB9AC\uC548, \uD504\uB9AC\uC9C0\uC548, \uB9AC\uB514\uC548, \uBBF9\uC194\uB9AC\uB514\uC548, \uC5D0\uC62C\uB9AC\uC548(=\uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108), \uB85C\uD06C\uB9AC\uC548. \uC2DC\uC791\uC74C\uC774 \uBC14\uB00C\uBA74 \uC911\uC2EC\uC774 \uBC14\uB00C\uC5B4 \uBD84\uC704\uAE30\uAC00 \uB2EC\uB77C\uC838\uC694."
    },
    dorian: {
      term: "\uB3C4\uB9AC\uC548",
      desc: "\uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108\uC5D0\uC11C 6\uBC88\uC9F8 \uC74C\uC744 \uBC18\uC74C \uC62C\uB9B0 \uBAA8\uB4DC\uC608\uC694. \uB9C8\uC774\uB108\uC778\uB370 \uC5B4\uB461\uAE30\uB9CC \uD558\uC9C0 \uC54A\uACE0 \uBC1D\uC740 \uB290\uB08C\uC774 \uC11E\uC5EC\uC694. \uC7AC\uC988\uB098 \uD391\uD06C\uC5D0\uC11C \uC790\uC8FC \uC368\uC694. \uC608: \uB808\uC5D0\uC11C \uC2DC\uC791\uD558\uB294 \uD770\uAC74\uBC18 \uC2A4\uCF00\uC77C.",
      example: { midis: [62, 64, 65, 67, 69, 71, 72, 74], mode: "seq" }
    },
    mixolydian: {
      term: "\uBBF9\uC194\uB9AC\uB514\uC548",
      desc: "\uBA54\uC774\uC800 \uC2A4\uCF00\uC77C\uC5D0\uC11C 7\uBC88\uC9F8 \uC74C\uC744 \uBC18\uC74C \uB0B4\uB9B0 \uBAA8\uB4DC\uC608\uC694. \uBA54\uC774\uC800\uCC98\uB7FC \uBC1D\uC9C0\uB9CC \uC5EC\uC720\uB86D\uACE0 \uBE14\uB8E8\uC9C0\uD55C \uB290\uB08C\uC774 \uB098\uC694. \uB3C4\uBBF8\uB10C\uD2B8 7th \uCF54\uB4DC \uC704\uC5D0\uC11C \uC4F0\uB294 \uC2A4\uCF00\uC77C\uC774\uAE30\uB3C4 \uD574\uC694. \uC608: \uC194\uC5D0\uC11C \uC2DC\uC791\uD558\uB294 \uD770\uAC74\uBC18 \uC2A4\uCF00\uC77C.",
      example: { midis: [67, 69, 71, 72, 74, 76, 77, 79], mode: "seq" }
    },
    lydian: {
      term: "\uB9AC\uB514\uC548",
      desc: "\uBA54\uC774\uC800 \uC2A4\uCF00\uC77C\uC5D0\uC11C 4\uBC88\uC9F8 \uC74C\uC744 \uBC18\uC74C \uC62C\uB9B0 \uBAA8\uB4DC\uC608\uC694. \uBC1D\uACE0 \uBABD\uD658\uC801\uC774\uACE0 \uD658\uC0C1\uC801\uC778 \uB290\uB08C\uC774 \uB098\uC694. \uC601\uD654\uC74C\uC545\uC5D0\uC11C \uC790\uC8FC \uB9CC\uB098\uC694. \uC608: \uD30C\uC5D0\uC11C \uC2DC\uC791\uD558\uB294 \uD770\uAC74\uBC18 \uC2A4\uCF00\uC77C.",
      example: { midis: [65, 67, 69, 71, 72, 74, 76, 77], mode: "seq" }
    },
    substitution: {
      term: "\uB300\uB9AC\uCF54\uB4DC",
      desc: "\uC6D0\uB798 \uCF54\uB4DC \uB300\uC2E0 \uBE44\uC2B7\uD55C \uC5ED\uD560\uC744 \uD558\uB294 \uB2E4\uB978 \uCF54\uB4DC\uB97C \uC4F0\uB294 \uAC83\uC774\uC5D0\uC694. \uAD6C\uC131\uC74C\uC774 \uB9CE\uC774 \uACB9\uCE58\uAC70\uB098 \uAC19\uC740 \uAE30\uB2A5\uC744 \uAC00\uC9C4 \uCF54\uB4DC\uB07C\uB9AC \uBC14\uAFD4 \uC4F8 \uC218 \uC788\uC5B4\uC694. \uCF54\uB4DC \uCE58\uD658\uC774\uB77C\uACE0\uB3C4 \uD574\uC694."
    },
    "tritone-sub": {
      term: "\uD2B8\uB77C\uC774\uD1A4 \uC11C\uBE0C",
      desc: "V7 \uB300\uC2E0 \uADFC\uC74C\uC774 \uD2B8\uB77C\uC774\uD1A4(\uBC18\uC74C 6\uAC1C) \uB5A8\uC5B4\uC9C4 \u266DII7\uC744 \uC4F0\uB294 \uB300\uB9AC\uCF54\uB4DC\uC608\uC694. \uB450 \uCF54\uB4DC\uAC00 3\uC74C\uACFC 7\uC74C(\uD2B8\uB77C\uC774\uD1A4\uC744 \uC774\uB8E8\uB294 \uB450 \uC74C)\uC744 \uC11C\uB85C \uACF5\uC720\uD574\uC11C \uAC19\uC740 \uAE34\uC7A5\uAC10\uC774 \uB098\uC694. \uC608: G7 \uB300\uC2E0 D\u266D7. \uBCA0\uC774\uC2A4\uAC00 \uBC18\uC74C\uC529 \uB0B4\uB824\uAC00\uBA70 \uD574\uACB0\uB3FC\uC694.",
      example: { chords: [[62, 65, 69, 72], [61, 65, 68, 71], [60, 64, 67, 71]], mode: "prog", gap: 1 }
    },
    cadence: {
      term: "\uC885\uC9C0(\uCE74\uB374\uC2A4)",
      desc: '\uD504\uB808\uC774\uC988\uB098 \uACE1\uC744 \uB05D\uB9FA\uB294 \uCF54\uB4DC \uC9C4\uD589\uC774\uC5D0\uC694. \uAE00\uC5D0\uC11C \uB9C8\uCE68\uD45C\uB098 \uC27C\uD45C\uCC98\uB7FC "\uC5EC\uAE30\uC11C \uB05D\uB0AC\uB2E4", "\uC7A0\uAE50 \uC270\uB2E4" \uAC19\uC740 \uB290\uB08C\uC744 \uC918\uC694. \uC815\uACA9 \uC885\uC9C0, \uBCC0\uACA9 \uC885\uC9C0, \uBC18\uC885\uC9C0, \uC704\uC885\uC9C0\uAC00 \uB300\uD45C\uC801\uC774\uC5D0\uC694.'
    },
    "authentic-cadence": {
      term: "\uC815\uACA9 \uC885\uC9C0",
      desc: "V(V7)\uC5D0\uC11C I\uB85C \uB05D\uB098\uB294 \uC885\uC9C0\uC608\uC694. \uAE34\uC7A5\uC774 \uC644\uC804\uD788 \uD480\uB824\uC11C \uAC00\uC7A5 \uAC15\uD55C \uB9C8\uCE68\uD45C \uB290\uB08C\uC774 \uB098\uC694.",
      example: { chords: [[60, 64, 67], [65, 69, 72], [55, 59, 62, 65], [60, 64, 67]], mode: "prog", gap: 1 }
    },
    "plagal-cadence": {
      term: "\uBCC0\uACA9 \uC885\uC9C0",
      desc: 'IV\uC5D0\uC11C I\uB85C \uB05D\uB098\uB294 \uC885\uC9C0\uC608\uC694. \uBD80\uB4DC\uB7FD\uACE0 \uD3EC\uADFC\uD55C \uB9C8\uBB34\uB9AC\uC5EC\uC11C "\uC544\uBA58 \uC885\uC9C0"\uB77C\uACE0\uB3C4 \uBD88\uB7EC\uC694. \uC815\uACA9 \uC885\uC9C0\uBCF4\uB2E4 \uC57D\uD55C \uB9C8\uCE68\uD45C\uC608\uC694.',
      example: { chords: [[60, 64, 67], [65, 69, 72], [60, 64, 67]], mode: "prog", gap: 1 }
    },
    "half-cadence": {
      term: "\uBC18\uC885\uC9C0",
      desc: "V\uB85C \uB05D\uB098\uB294 \uC885\uC9C0\uC608\uC694. \uC544\uC9C1 \uB05D\uB098\uC9C0 \uC54A\uACE0 \uB2E4\uC74C\uC744 \uAE30\uB2E4\uB9AC\uAC8C \uD574\uC11C \uC27C\uD45C\uB098 \uBB3C\uC74C\uD45C \uAC19\uC740 \uB290\uB08C\uC774 \uB098\uC694. 8\uB9C8\uB514 \uC139\uC158\uC5D0\uC11C \uC55E 4\uB9C8\uB514\uC758 \uB05D\uC5D0 \uC790\uC8FC \uC368\uC694.",
      example: { chords: [[60, 64, 67], [69, 72, 76], [62, 65, 69], [67, 71, 74]], mode: "prog", gap: 1 }
    },
    "deceptive-cadence": {
      term: "\uC704\uC885\uC9C0",
      desc: "V(V7) \uB2E4\uC74C\uC5D0 I\uC774 \uC62C \uAC83 \uAC19\uC740\uB370 VIm\uC73C\uB85C \uAC00\uB294 \uC885\uC9C0\uC608\uC694. \uAE30\uB300\uB97C \uC0B4\uC9DD \uBC30\uC2E0\uD574\uC11C \uC758\uC678\uC758 \uC804\uD658\uC774\uB098 \uC774\uC57C\uAE30\uAC00 \uB354 \uC774\uC5B4\uC9C0\uB294 \uB290\uB08C\uC744 \uC918\uC694. (\uAC70\uC9D3 \uC885\uC9C0, \uC18D\uC784 \uC885\uC9C0\uB77C\uACE0\uB3C4 \uD574\uC694.)",
      example: { chords: [[60, 64, 67], [65, 69, 72], [55, 59, 62, 65], [69, 72, 76]], mode: "prog", gap: 1 }
    },
    phrase: {
      term: "\uD504\uB808\uC774\uC988",
      desc: "\uC74C\uC545\uC5D0\uC11C \uB9D0\uC758 \uD55C \uBB38\uC7A5 \uAC19\uC740 \uB2E8\uC704\uC608\uC694. \uBCF4\uD1B5 2\uB9C8\uB514\uB098 4\uB9C8\uB514\uC774\uACE0, \uB05D\uC5D0 \uC885\uC9C0(\uB9C8\uCE68\uD45C\uB098 \uC27C\uD45C)\uAC00 \uC788\uC5B4\uC694."
    },
    modulation: {
      term: "\uC804\uC870",
      desc: "\uACE1 \uC911\uAC04\uC5D0 \uD0A4\uAC00 \uBC14\uB00C\uB294 \uAC83\uC774\uC5D0\uC694. \uB9C8\uC9C0\uB9C9 \uD6C4\uB834\uC5D0\uC11C \uD0A4\uB97C \uC62C\uB824 \uBD84\uC704\uAE30\uB97C \uACE0\uC870\uC2DC\uD0A4\uAC70\uB098, \uC0C8 \uD0A4\uC758 V7\uC744 \uAC70\uCCD0 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uC62E\uACA8 \uAC00\uC694.",
      example: { chords: [[60, 64, 67], [65, 69, 72], [55, 59, 62, 65], [60, 64, 67], [62, 66, 69], [67, 71, 74], [57, 61, 64, 67], [62, 66, 69]], mode: "prog", gap: 0.8 }
    },
    // ── 유닛 12: 키 밖의 코드 ───────────────────────────────────
    "secondary-dominant": {
      term: "\uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8",
      desc: '\uD0A4 \uC548\uC758 \uCF54\uB4DC \uD558\uB098\uB97C "\uC784\uC2DC \uC9D1"\uC73C\uB85C \uC0BC\uC544\uC11C, \uADF8 \uCF54\uB4DC\uB85C \uD574\uACB0\uB418\uB294 \uB3C4\uBBF8\uB10C\uD2B8 7th\uB97C \uC55E\uC5D0 \uBD99\uC778 \uAC83\uC774\uC5D0\uC694. \uBAA9\uD45C \uCF54\uB4DC\uC758 \uADFC\uC74C\uC5D0\uC11C \uC644\uC8045\uB3C4 \uC704 \uC74C \uC704\uC5D0 \uB3C4\uBBF8\uB10C\uD2B8 7th\uB97C \uC313\uC544\uC694. \uC608: C \uD0A4\uC5D0\uC11C Dm7\uC73C\uB85C \uAC00\uAE30 \uC804\uC5D0 A7\uC744 \uB123\uAE30. V7/II\uB77C\uACE0 \uC77D\uACE0 "II\uC758 V7"\uC774\uB77C\uB294 \uB73B\uC774\uC5D0\uC694.',
      example: { chords: [[69, 73, 76, 79], [62, 65, 69, 72]], mode: "prog", gap: 1 }
    },
    "modal-interchange": {
      term: "\uCC28\uC6A9\uD654\uC74C(\uBAA8\uB2EC \uC778\uD130\uCCB4\uC778\uC9C0)",
      desc: "\uAC19\uC740 \uC73C\uB738\uC74C\uC744 \uC4F0\uB294 \uB2E4\uB978 \uC870(\uBCF4\uD1B5 \uBCD1\uD589 \uB2E8\uC870)\uC5D0\uC11C \uCF54\uB4DC\uB97C \uBE4C\uB824 \uC624\uB294 \uAC83\uC774\uC5D0\uC694. \uC608: C \uBA54\uC774\uC800 \uACE1\uC5D0 C \uB9C8\uC774\uB108\uC758 Fm, B\u266D, A\u266D \uAC19\uC740 \uCF54\uB4DC\uB97C \uB07C\uC6CC \uB123\uC5B4\uC694. \uC21C\uAC04\uC801\uC73C\uB85C \uC5B4\uB461\uACE0 \uAC10\uC131\uC801\uC778 \uC0C9\uC774 \uB354\uD574\uC838\uC694.",
      example: { chords: [[60, 64, 67], [65, 68, 72], [60, 64, 67]], mode: "prog", gap: 1 }
    },
    "parallel-key": {
      term: "\uBCD1\uD589\uC870",
      desc: '\uC73C\uB738\uC74C\uC774 \uAC19\uACE0 \uC74C\uACC4\uAC00 \uB2E4\uB978 \uBA54\uC774\uC800 \uD0A4\uC640 \uB9C8\uC774\uB108 \uD0A4\uC758 \uC9DD\uC774\uC5D0\uC694. C \uBA54\uC774\uC800\uC640 C \uB9C8\uC774\uB108\uAC00 \uBCD1\uD589\uC870\uC608\uC694. (\uC4F0\uB294 \uC74C\uC774 \uAC19\uC740 \uC9DD\uC740 "\uB098\uB780\uD55C\uC870"\uB77C\uC11C, \uBCD1\uD589\uC870\uC640\uB294 \uB2EC\uB77C\uC694.)'
    },
    // ── 유닛 11: 멜로디와 화성 ──────────────────────────────────
    "chord-tone": {
      term: "\uCF54\uB4DC \uD1A4",
      desc: "\uC9C0\uAE08 \uC6B8\uB9AC\uB294 \uCF54\uB4DC\uC5D0 \uB4E4\uC5B4 \uC788\uB294 \uC74C\uC774\uC5D0\uC694. C \uCF54\uB4DC \uC704\uC5D0\uC11C\uB294 \uB3C4\xB7\uBBF8\xB7\uC194\uC774 \uCF54\uB4DC \uD1A4\uC774\uC5D0\uC694. \uCF54\uB4DC\uC640 \uC798 \uC5B4\uC6B8\uB824\uC11C \uC548\uC815\uC801\uC73C\uB85C \uB4E4\uB9AC\uACE0, \uBA5C\uB85C\uB514\uAC00 \uC26C\uC5B4 \uAC00\uAE30 \uC88B\uC740 \uC74C\uC774\uC5D0\uC694."
    },
    "non-chord-tone": {
      term: "\uB17C\uCF54\uB4DC \uD1A4(\uBE44\uD654\uC131\uC74C)",
      desc: "\uC9C0\uAE08 \uC6B8\uB9AC\uB294 \uCF54\uB4DC\uC5D0 \uB4E4\uC5B4 \uC788\uC9C0 \uC54A\uC740 \uBA5C\uB85C\uB514 \uC74C\uC774\uC5D0\uC694. C \uCF54\uB4DC \uC704\uC758 \uB808\xB7\uD30C\xB7\uB77C\xB7\uC2DC\uAC00 \uADF8\uB798\uC694. \uC0B4\uC9DD \uAE34\uC7A5\uB418\uACE0 \uB2E4\uC74C \uC74C\uC73C\uB85C \uAC00\uACE0 \uC2F6\uC5B4\uC838\uC11C, \uBA5C\uB85C\uB514\uC5D0 \uC6C0\uC9C1\uC784\uACFC \uD45C\uC815\uC744 \uB9CC\uB4E4\uC5B4 \uC918\uC694."
    },
    "passing-tone": {
      term: "\uACBD\uACFC\uC74C",
      desc: "\uC11C\uB85C \uB2E4\uB978 \uB450 \uCF54\uB4DC \uD1A4 \uC0AC\uC774\uB97C \uACC4\uB2E8\uCC98\uB7FC \uD55C \uCE78\uC529 \uC774\uC5B4 \uC8FC\uB294 \uBE44\uD654\uC131\uC74C\uC774\uC5D0\uC694. \uC608: C \uCF54\uB4DC \uC704\uC5D0\uC11C \uBBF8 \u2192 \uB808 \u2192 \uB3C4\uC758 \uB808.",
      example: {
        mode: "song",
        bpm: 100,
        chords: [{ at: 0, len: 4, midis: [60, 64, 67] }],
        melody: [{ at: 0, len: 1, midi: 76 }, { at: 1, len: 1, midi: 74 }, { at: 2, len: 1, midi: 72 }]
      }
    },
    "neighbor-tone": {
      term: "\uBCF4\uC870\uC74C",
      desc: "\uCF54\uB4DC \uD1A4\uC5D0\uC11C \uD55C \uCE78 \uC704\uB098 \uC544\uB798\uB85C \uAC14\uB2E4\uAC00 \uAC19\uC740 \uCF54\uB4DC \uD1A4\uC73C\uB85C \uB3CC\uC544\uC624\uB294 \uBE44\uD654\uC131\uC74C\uC774\uC5D0\uC694. \uC608: C \uCF54\uB4DC \uC704\uC5D0\uC11C \uBBF8 \u2192 \uD30C \u2192 \uBBF8\uC758 \uD30C.",
      example: {
        mode: "song",
        bpm: 100,
        chords: [{ at: 0, len: 4, midis: [60, 64, 67] }],
        melody: [{ at: 0, len: 1, midi: 76 }, { at: 1, len: 1, midi: 77 }, { at: 2, len: 1, midi: 76 }]
      }
    },
    suspension: {
      term: "\uACC4\uB958\uC74C",
      desc: "\uC55E \uCF54\uB4DC\uC5D0\uC11C \uCF54\uB4DC \uD1A4\uC774\uC5C8\uB358 \uC74C\uC744 \uB2E4\uC74C \uCF54\uB4DC \uC704\uC5D0\uB3C4 \uADF8\uB300\uB85C \uB0A8\uACA8 \uB46C\uC11C \uC77C\uBD80\uB7EC \uBD80\uB52A\uD788\uAC8C \uD55C \uB2E4\uC74C, \uD55C \uCE78 \uC544\uB798\uC758 \uCF54\uB4DC \uD1A4\uC73C\uB85C \uD480\uC5B4 \uC8FC\uB294 \uBE44\uD654\uC131\uC74C\uC774\uC5D0\uC694. \uC608: F \uCF54\uB4DC\uC758 \uD30C\uB97C C \uCF54\uB4DC\uB85C \uBC14\uB010 \uB4A4\uC5D0\uB3C4 \uB0A8\uACA8 \uB480\uB2E4\uAC00 \uBBF8\uB85C \uD480\uAE30.",
      example: {
        mode: "song",
        bpm: 100,
        chords: [{ at: 0, len: 2, midis: [65, 69, 72] }, { at: 2, len: 4, midis: [60, 64, 67] }],
        melody: [{ at: 0, len: 2, midi: 77 }, { at: 2, len: 2, midi: 77 }, { at: 4, len: 2, midi: 76 }]
      }
    },
    // ── 유닛 10: 전위·보이싱·보이스 리딩 ─────────────────────────
    inversion: {
      term: "\uC804\uC704",
      desc: "\uD654\uC74C\uC758 \uAD6C\uC131\uC74C\uC740 \uADF8\uB300\uB85C \uB450\uACE0, \uB9E8 \uC544\uB798 \uC74C(\uBCA0\uC774\uC2A4)\uC744 \uBC14\uAFD4\uC11C \uBC30\uCE58\uD558\uB294 \uAC83\uC774\uC5D0\uC694. \uADFC\uC74C\uC774 \uB9E8 \uC544\uB798\uBA74 \uAE30\uBCF8\uD615, 3\uC74C\uC774 \uB9E8 \uC544\uB798\uBA74 1\uC804\uC704, 5\uC74C\uC774 \uB9E8 \uC544\uB798\uBA74 2\uC804\uC704\uC608\uC694.",
      example: { midis: [64, 67, 72], mode: "both" }
    },
    "slash-chord": {
      term: "\uC2AC\uB798\uC2DC \uCF54\uB4DC",
      desc: '"C/E"\uCC98\uB7FC \uCF54\uB4DC \uC774\uB984 \uB4A4\uC5D0 \uC2AC\uB798\uC2DC\uC640 \uC74C \uC774\uB984\uC744 \uBD99\uC778 \uD45C\uAE30\uC608\uC694. \uC55E\uC740 \uCF54\uB4DC, \uB4A4\uB294 \uB9E8 \uC544\uB798\uC5D0 \uB193\uC744 \uBCA0\uC774\uC2A4 \uC74C\uC774\uC5D0\uC694. C/E\uB294 C \uCF54\uB4DC\uB97C E\uAC00 \uB9E8 \uC544\uB798\uC5D0 \uC624\uAC8C \uCE5C\uB2E4\uB294 \uB73B\uC774\uC5D0\uC694. (\uC628 \uCF54\uB4DC, \uBD84\uC218 \uCF54\uB4DC\uB77C\uACE0\uB3C4 \uD574\uC694.)',
      example: { midis: [64, 67, 72], mode: "both" }
    },
    bass: {
      term: "\uBCA0\uC774\uC2A4",
      desc: "\uD654\uC74C\uC5D0\uC11C \uAC00\uC7A5 \uB0AE\uC740 \uC74C\uC774\uC5D0\uC694. \uD654\uC74C \uC804\uCCB4\uC758 \uBC14\uB2E5\uC744 \uBC1B\uCCD0\uC11C \uC18C\uB9AC\uC758 \uB290\uB08C\uC744 \uD06C\uAC8C \uC88C\uC6B0\uD574\uC694."
    },
    voicing: {
      term: "\uBCF4\uC774\uC2F1",
      desc: "\uAC19\uC740 \uCF54\uB4DC\uB97C \uC5B4\uB5A4 \uC74C\uC744 \uC5B4\uB290 \uB192\uC774\uC5D0 \uB193\uC744\uC9C0 \uC815\uD574\uC11C \uBC30\uCE58\uD558\uB294 \uAC83\uC774\uC5D0\uC694. \uAD6C\uC131\uC74C\uC774 \uAC19\uC544\uB3C4 \uBC30\uCE58\uC5D0 \uB530\uB77C \uC18C\uB9AC\uAC00 \uB2EC\uB77C\uC838\uC694."
    },
    "close-voicing": {
      term: "\uB2EB\uD78C \uBC30\uCE58",
      desc: "\uD654\uC74C\uC758 \uBAA8\uB4E0 \uC74C\uC774 \uD55C \uC625\uD0C0\uBE0C \uC548\uC5D0 \uAC00\uAE5D\uAC8C \uBAA8\uC5EC \uC788\uB294 \uBCF4\uC774\uC2F1\uC774\uC5D0\uC694. \uB610\uB837\uD558\uACE0 \uC751\uC9D1\uB41C \uC18C\uB9AC\uAC00 \uB098\uC694. \uC608: C = \uB3C4 \uBBF8 \uC194.",
      example: { midis: [60, 64, 67], mode: "chord" }
    },
    "open-voicing": {
      term: "\uC5F4\uB9B0 \uBC30\uCE58",
      desc: "\uC74C \uC0AC\uC774\uB97C \uB113\uAC8C \uBC8C\uB824\uC11C \uD55C \uC625\uD0C0\uBE0C\uB97C \uB118\uAC8C \uBC30\uCE58\uD55C \uBCF4\uC774\uC2F1\uC774\uC5D0\uC694. \uAC00\uC6B4\uB370 \uC74C\uC744 \uD55C \uC625\uD0C0\uBE0C \uC62C\uB9AC\uB294 \uC2DD\uC774\uC5D0\uC694. \uD0C1 \uD2B8\uC774\uACE0 \uD48D\uC131\uD55C \uC18C\uB9AC\uAC00 \uB098\uC694. \uC608: C = \uB3C4 \uC194 \uBBF8(\uB192\uC740 \uBBF8).",
      example: { midis: [60, 67, 76], mode: "chord" }
    },
    "voice-leading": {
      term: "\uBCF4\uC774\uC2A4 \uB9AC\uB529",
      desc: "\uCF54\uB4DC\uAC00 \uBC14\uB014 \uB54C \uAC01 \uC74C\uC774 \uAC00\uB2A5\uD55C \uD55C \uC801\uAC8C \uC6C0\uC9C1\uC774\uB3C4\uB85D \uC5F0\uACB0\uD558\uB294 \uBC29\uBC95\uC774\uC5D0\uC694. \uACF5\uD1B5\uC74C\uC740 \uADF8\uB300\uB85C \uB450\uACE0, \uB098\uBA38\uC9C0\uB294 \uAC00\uC7A5 \uAC00\uAE4C\uC6B4 \uC74C\uC73C\uB85C \uC62E\uACA8\uC694. \uCF54\uB4DC \uC9C4\uD589\uC774 \uD6E8\uC52C \uBD80\uB4DC\uB7FD\uAC8C \uB4E4\uB824\uC694."
    },
    "common-tone": {
      term: "\uACF5\uD1B5\uC74C",
      desc: "\uC774\uC5B4\uC9C0\uB294 \uB450 \uCF54\uB4DC\uC5D0 \uBAA8\uB450 \uB4E4\uC5B4 \uC788\uB294 \uC74C\uC774\uC5D0\uC694. \uBCF4\uC774\uC2A4 \uB9AC\uB529\uC5D0\uC11C\uB294 \uACF5\uD1B5\uC74C\uC744 \uC6C0\uC9C1\uC774\uC9C0 \uC54A\uACE0 \uADF8\uB300\uB85C \uC720\uC9C0\uD574\uC694. \uC608: C(\uB3C4 \uBBF8 \uC194)\uC640 F(\uD30C \uB77C \uB3C4)\uC758 \uACF5\uD1B5\uC74C\uC740 \uB3C4."
    },
    "bass-line": {
      term: "\uBCA0\uC774\uC2A4 \uB77C\uC778",
      desc: "\uCF54\uB4DC\uAC00 \uBC14\uB00C\uB294 \uB3D9\uC548 \uAC00\uC7A5 \uB0AE\uC740 \uC74C\uB4E4\uC774 \uC774\uC5B4\uC838 \uB9CC\uB4DC\uB294 \uC120\uC728\uC774\uC5D0\uC694. \uC804\uC704\uB97C \uC4F0\uBA74 \uBCA0\uC774\uC2A4\uAC00 \uACC4\uB2E8\uCC98\uB7FC \uBD80\uB4DC\uB7FD\uAC8C \uC6C0\uC9C1\uC774\uB294 \uB77C\uC778\uC744 \uB9CC\uB4E4 \uC218 \uC788\uC5B4\uC694."
    },
    // ── 유닛 9: 텐션 ────────────────────────────────────────────
    tension: {
      term: "\uD150\uC158",
      desc: "4\uD654\uC74C(1\xB73\xB75\xB77) \uC704\uC5D0 3\uB3C4\uB97C \uB354 \uC313\uC544 \uC5B9\uB294 \uC74C\uC774\uC5D0\uC694. 9th, 11th, 13th\uAC00 \uC788\uACE0, \uCF54\uB4DC\uC758 \uAE30\uBCF8 \uBF08\uB300\uB294 \uADF8\uB300\uB85C \uB450\uBA74\uC11C \uBD84\uC704\uAE30\uC758 \uC0C9\uAE54\uC744 \uB354\uD574 \uC918\uC694. \uCF54\uB4DC\uC758 \uAE30\uB2A5\uC740 \uBC14\uB00C\uC9C0 \uC54A\uC544\uC694.",
      example: { midis: [60, 64, 67, 71, 74], mode: "both" }
    },
    ninth: {
      term: "9th(9\uC74C)",
      desc: "\uADFC\uC74C\uC5D0\uC11C 2\uB3C4 \uC704(\uD55C \uC625\uD0C0\uBE0C \uB118\uC5B4\uC11C)\uC758 \uC74C\uC774\uC5D0\uC694. \uADFC\uC74C\uC5D0\uC11C \uBC18\uC74C 14\uAC1C \uAC70\uB9AC\uC608\uC694. \uAC00\uC7A5 \uC4F0\uAE30 \uC27D\uACE0 \uC790\uC5F0\uC2A4\uB7EC\uC6B4 \uD150\uC158\uC774\uC5D0\uC694. \uC608: Cmaj7\uC758 9th\uB294 \uB808(D).",
      example: { midis: [60, 74], mode: "both" }
    },
    "avoid-note": {
      term: "\uC5B4\uBCF4\uC774\uB4DC \uB178\uD2B8",
      desc: "\uCF54\uB4DC\uC5D0 \uC5B9\uC73C\uBA74 \uC18C\uB9AC\uAC00 \uD0C1\uD574\uC9C0\uB294 \uD150\uC158 \uC74C\uC774\uC5D0\uC694. \uBCF4\uD1B5 \uCF54\uB4DC\uC758 3\uC74C\uACFC \uBC18\uC74C\uC73C\uB85C \uBD80\uB52A\uD788\uB294 \uC74C\uC774\uC5D0\uC694. \uC608: Cmaj7\uC758 11th(\uD30C)\uB294 3\uC74C(\uBBF8)\uACFC \uBC18\uC74C\uC73C\uB85C \uBD99\uC5B4\uC11C \uD53C\uD574\uC694."
    },
    "altered-tension": {
      term: "\uC5BC\uD130\uB4DC(\uBCC0\uD615) \uD150\uC158",
      desc: "\uD150\uC158\uC744 \uBC18\uC74C \uC62C\uB9AC\uAC70\uB098(\u266F9, \u266F11) \uB0B4\uB9B0(\u266D9, \u266D13) \uAC83\uC774\uC5D0\uC694. \uC8FC\uB85C \uB3C4\uBBF8\uB10C\uD2B8 7th \uCF54\uB4DC\uC5D0\uC11C \uC4F0\uC774\uACE0, \uAE34\uC7A5\uC744 \uB354 \uC138\uAC8C \uB9CC\uB4E4\uC5B4\uC11C \uD1A0\uB2C9\uC73C\uB85C \uAC00\uB294 \uD798\uC744 \uD0A4\uC6CC \uC918\uC694.",
      example: { midis: [67, 71, 74, 77, 80], mode: "both" }
    },
    resolution: {
      term: "\uD574\uACB0",
      desc: "\uAE34\uC7A5\uB41C \uCF54\uB4DC\uB098 \uC74C\uC774 \uC548\uC815\uB41C \uACF3\uC73C\uB85C \uD480\uB9AC\uB294 \uAC83\uC774\uC5D0\uC694. \uB3C4\uBBF8\uB10C\uD2B8(V7)\uC5D0\uC11C \uD1A0\uB2C9(I)\uC73C\uB85C \uB3CC\uC544\uAC00\uB294 \uAC83\uC774 \uAC00\uC7A5 \uB300\uD45C\uC801\uC778 \uD574\uACB0\uC774\uC5D0\uC694.",
      example: { chords: [[55, 59, 62, 65], [60, 64, 67, 72]], mode: "prog", gap: 1 }
    }
  };

  // js/theory.js
  var LETTERS = ["C", "C\u266F", "D", "D\u266F", "E", "F", "F\u266F", "G", "G\u266F", "A", "A\u266F", "B"];
  var BLACK = /* @__PURE__ */ new Set([1, 3, 6, 8, 10]);
  var pc = (midi) => (midi % 12 + 12) % 12;
  var isBlack = (midi) => BLACK.has(pc(midi));
  var SCALES = {
    major: [0, 2, 4, 5, 7, 9, 11, 12],
    minor: [0, 2, 3, 5, 7, 8, 10, 12],
    harmonic: [0, 2, 3, 5, 7, 8, 11, 12],
    melodicUp: [0, 2, 3, 5, 7, 9, 11, 12],
    // 모드 (메이저 스케일의 음을 다른 음에서 시작한 스케일)
    dorian: [0, 2, 3, 5, 7, 9, 10, 12],
    phrygian: [0, 1, 3, 5, 7, 8, 10, 12],
    lydian: [0, 2, 4, 6, 7, 9, 11, 12],
    mixolydian: [0, 2, 4, 5, 7, 9, 10, 12],
    locrian: [0, 1, 3, 5, 6, 8, 10, 12]
  };
  var notes = (root2, offsets) => offsets.map((o) => root2 + o);
  var reversed = (arr) => [...arr].reverse();

  // js/chords.js
  var CHORD_INTERVALS = {
    "": [0, 4, 7],
    m: [0, 3, 7],
    dim: [0, 3, 6],
    aug: [0, 4, 8],
    maj7: [0, 4, 7, 11],
    m7: [0, 3, 7, 10],
    7: [0, 4, 7, 10],
    "m7\u266D5": [0, 3, 6, 10],
    // 텐션 (9 = +14, 11 = +17, 13 = +21 반음)
    maj9: [0, 4, 7, 11, 14],
    m9: [0, 3, 7, 10, 14],
    9: [0, 4, 7, 10, 14],
    m11: [0, 3, 7, 10, 14, 17],
    13: [0, 4, 7, 10, 14, 21],
    "maj7(\u266F11)": [0, 4, 7, 11, 18],
    "7(\u266D9)": [0, 4, 7, 10, 13],
    "7(\u266F9)": [0, 4, 7, 10, 15],
    "7(\u266D13)": [0, 4, 7, 10, 20]
  };
  var MAJOR_KEYS = ["C", "G", "D", "A", "E", "B", "F\u266F", "D\u266D", "A\u266D", "E\u266D", "B\u266D", "F"];
  var MINOR_KEYS = ["A", "E", "B", "F\u266F", "C\u266F", "G\u266F", "E\u266D", "B\u266D", "F", "C", "G", "D"];
  var LETTERS2 = ["C", "D", "E", "F", "G", "A", "B"];
  var NATURAL = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  var DEGREE_OF = [0, 1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];
  function parseNote(name) {
    const m = /^([A-G])([♯♭]?)$/.exec(name);
    if (!m) throw new Error(`\uC54C \uC218 \uC5C6\uB294 \uC74C \uC774\uB984: ${name}`);
    return { letter: m[1], pc: (NATURAL[m[1]] + (m[2] === "\u266F" ? 1 : m[2] === "\u266D" ? -1 : 0) + 12) % 12 };
  }
  var tonicPc = (name) => parseNote(name).pc;
  var ACC = { "-2": "\u266D\u266D", "-1": "\u266D", 0: "", 1: "\u266F", 2: "\u266F\u266F" };
  function spell(tonicName, off) {
    const { letter, pc: pc2 } = parseNote(tonicName);
    const L = LETTERS2[(LETTERS2.indexOf(letter) + DEGREE_OF[off]) % 7];
    let diff = ((pc2 + off - NATURAL[L]) % 12 + 12) % 12;
    if (diff > 6) diff -= 12;
    return L + (ACC[diff] ?? "");
  }
  var chordName = (tonicName, chord) => spell(tonicName, chord.off) + chord.suf;
  var RANGE = { lo: 55, hi: 77, center: 65 };
  function rootVoicing(rootPc, suf) {
    let root2 = 55 + ((rootPc - 55) % 12 + 12) % 12;
    return CHORD_INTERVALS[suf].map((i) => root2 + i);
  }
  function candidates(pcs, lo, hi, maxSpan = 16) {
    const options = pcs.map((p) => {
      const o = [];
      for (let m = lo; m <= hi; m++) if (m % 12 === p) o.push(m);
      return o;
    });
    const out = [];
    const rec = (i, cur) => {
      if (i === options.length) {
        const s = [...cur].sort((a, b) => a - b);
        if (s[s.length - 1] - s[0] <= maxSpan) out.push(s);
        return;
      }
      for (const m of options[i]) if (!cur.includes(m)) rec(i + 1, [...cur, m]);
    };
    rec(0, []);
    return out;
  }
  function moveCost(a, b) {
    const [s, l] = a.length <= b.length ? [a, b] : [b, a];
    let best = Infinity;
    const used = new Array(l.length).fill(false);
    const rec = (i, sum) => {
      if (sum >= best) return;
      if (i === s.length) {
        best = sum;
        return;
      }
      for (let j = 0; j < l.length; j++) {
        if (used[j]) continue;
        used[j] = true;
        rec(i + 1, sum + Math.abs(s[i] - l[j]));
        used[j] = false;
      }
    };
    rec(0, 0);
    return best + (l.length - s.length);
  }
  var avg = (a) => a.reduce((x, y) => x + y, 0) / a.length;
  function voiceLead(chords, tonic) {
    const out = [];
    let prev = null;
    for (const c of chords) {
      const rootPc = (tonic + c.off) % 12;
      const pcs = CHORD_INTERVALS[c.suf].map((i) => (rootPc + i) % 12);
      const cands = candidates(pcs, RANGE.lo, RANGE.hi);
      let best = null;
      let bestScore = Infinity;
      for (const cand of cands) {
        const bassBonus = cand[0] % 12 === rootPc ? 0 : 0.4;
        const centerPenalty = 0.12 * Math.abs(avg(cand) - RANGE.center);
        const score = prev ? moveCost(prev, cand) + centerPenalty + bassBonus : 0.5 * Math.abs(avg(cand) - RANGE.center) + (cand[0] % 12 === rootPc ? 0 : 3);
        if (score < bestScore) {
          bestScore = score;
          best = cand;
        }
      }
      out.push(best);
      prev = best;
    }
    return out;
  }
  var rootVoicings = (chords, tonic) => chords.map((c) => rootVoicing((tonic + c.off) % 12, c.suf));
  var PATTERNS = ["block", "stroke", "arp"];
  function barEvents(midis, bass, pattern) {
    const ev = [];
    const add = (at, len, midi, vel) => ev.push({ at, len, midi, vel });
    if (pattern === "stroke") {
      [0.62, 0.45, 0.52, 0.45].forEach((v, beat) => midis.forEach((m) => add(beat, 0.95, m, v)));
      if (bass != null) {
        add(0, 1.9, bass, 0.75);
        add(2, 1.9, bass, 0.7);
      }
    } else if (pattern === "arp") {
      const n = midis.length;
      const cycle = [];
      for (let i = 0; i < n; i++) cycle.push(i);
      for (let i = n - 2; i >= 1; i--) cycle.push(i);
      for (let step = 0; step < 8; step++) add(step * 0.5, 1.4, midis[cycle[step % cycle.length]], step % 2 ? 0.45 : 0.6);
      if (bass != null) add(0, 3.9, bass, 0.7);
    } else {
      midis.forEach((m) => add(0, 3.9, m, 0.55));
      if (bass != null) add(0, 3.9, bass, 0.75);
    }
    return ev;
  }

  // content/helpers.js
  var text = (title, body) => ({ type: "text", title, body });
  var listen = (body, items, range = [60, 72], title) => ({ type: "listen", title, body, items, range });
  var play = (body, pcs, range = [60, 72], hint = true, title) => ({ type: "play", title, body, pcs, range, hint });
  var q = (prompt, options, answer, explain) => ({ type: "choice", prompt, options, answer, explain });
  var ear = (prompt, midis, mode, options, answer, explain) => ({
    type: "choice",
    prompt,
    options,
    answer,
    explain,
    play: { midis, mode }
  });
  var earP = (prompt, chords, options, answer, explain, gap = 0.9) => ({
    type: "choice",
    prompt,
    options,
    answer,
    explain,
    play: { chords, mode: "prog", gap }
  });
  var key = (prompt, answerPc, range = [60, 72], explain) => ({ type: "key", prompt, answerPc, range, explain });
  var ROOTS = { C: 60, "C\u266F": 61, "D\u266D": 61, D: 62, "D\u266F": 63, "E\u266D": 63, E: 64, F: 65, "F\u266F": 66, "G\u266D": 66, G: 67, "G\u266F": 68, "A\u266D": 68, A: 69, "A\u266F": 70, "B\u266D": 70, B: 71 };
  var SUFFIX = CHORD_INTERVALS;
  function ch(name) {
    const [main, bass] = name.split("/");
    const m = main.match(/^([A-G][♯♭]?)(.*)$/);
    if (!m || ROOTS[m[1]] == null || !SUFFIX[m[2]]) throw new Error(`\uC54C \uC218 \uC5C6\uB294 \uCF54\uB4DC \uC774\uB984: ${name}`);
    let midis = SUFFIX[m[2]].map((o) => ROOTS[m[1]] + o);
    if (bass != null) {
      if (ROOTS[bass] == null || !midis.some((x) => pc(x) === pc(ROOTS[bass]))) {
        throw new Error(`\uBCA0\uC774\uC2A4 \uC74C\uC774 \uCF54\uB4DC\uC5D0 \uC5C6\uC5B4\uC694: ${name}`);
      }
      while (pc(midis[0]) !== pc(ROOTS[bass])) midis = [...midis.slice(1), midis[0] + 12];
    }
    return midis;
  }
  var pcsOf = (name) => ch(name).map(pc);
  var pm = (label, chords, gap = 1) => ({ label, chords, mode: "prog", gap });
  var earM = (prompt, chords, options, answer, explain, gap = 1) => ({
    type: "choice",
    prompt,
    options,
    answer,
    explain,
    play: { chords, mode: "prog", gap }
  });
  var prog = (names) => names.split(/\s+/).map(ch);
  var ci = (name, label, mode = "both") => ({ label: label ?? name, midis: ch(name), mode });
  var pi = (label, names, gap = 0.9) => ({ label, chords: prog(names), mode: "prog", gap });
  var earC = (prompt, name, options, answer, explain) => ear(prompt, ch(name), "both", options, answer, explain);
  var build = (body, name, { hint = true, range = [60, 83], title } = {}) => {
    const midis = ch(name);
    return { type: "build", title, body, pcs: [...new Set(midis.map(pc))], midis, range, hint };
  };
  var circle = (body, keys, labels, title) => ({ type: "circle", title, body, keys, labels });
  var song = (chords, melody, bpm = 100) => ({
    mode: "song",
    bpm,
    chords: chords.map(([name, at, len]) => ({ at, len, midis: ch(name) })),
    melody: melody.map(([midi, at, len]) => ({ at, len, midi }))
  });
  var si = (label, chords, melody, bpm) => ({ label, ...song(chords, melody, bpm) });
  var earS = (prompt, chords, melody, options, answer, explain, bpm) => ({
    type: "choice",
    prompt,
    options,
    answer,
    explain,
    play: song(chords, melody, bpm)
  });
  var explore = (body, names, range = [60, 84], title) => ({
    type: "explore",
    title,
    body,
    range,
    chords: names.map((n) => ({ label: n, midis: ch(n), pcs: [...new Set(ch(n).map(pc))] }))
  });

  // content/ko/units-chords.js
  var WIDE = [60, 83];
  var STAR = [0, 0, 7, 7, 9, 9, 7];
  var star = (root2) => STAR.map((o) => root2 + o);
  var COF_KEYS = [
    { major: "C", minor: "Am", root: 60, info: "\uC870\uD45C \uC5C6\uC74C (\u266F\xB7\u266D \uC5C6\uC74C)" },
    { major: "G", minor: "Em", root: 67, info: "\u266F 1\uAC1C: F\u266F" },
    { major: "D", minor: "Bm", root: 62, info: "\u266F 2\uAC1C: F\u266F C\u266F" },
    { major: "A", minor: "F\u266Fm", root: 69, info: "\u266F 3\uAC1C: F\u266F C\u266F G\u266F" },
    { major: "E", minor: "C\u266Fm", root: 64, info: "\u266F 4\uAC1C: F\u266F C\u266F G\u266F D\u266F" },
    { major: "B", minor: "G\u266Fm", root: 71, info: "\u266F 5\uAC1C: F\u266F C\u266F G\u266F D\u266F A\u266F" },
    { major: "F\u266F", minor: "D\u266Fm", root: 66, info: "\u266F 6\uAC1C (G\u266D \uD0A4\uB294 \u266D 6\uAC1C)" },
    { major: "D\u266D", minor: "B\u266Dm", root: 61, info: "\u266D 5\uAC1C: B\u266D E\u266D A\u266D D\u266D G\u266D" },
    { major: "A\u266D", minor: "Fm", root: 68, info: "\u266D 4\uAC1C: B\u266D E\u266D A\u266D D\u266D" },
    { major: "E\u266D", minor: "Cm", root: 63, info: "\u266D 3\uAC1C: B\u266D E\u266D A\u266D" },
    { major: "B\u266D", minor: "Gm", root: 70, info: "\u266D 2\uAC1C: B\u266D E\u266D" },
    { major: "F", minor: "Dm", root: 65, info: "\u266D 1\uAC1C: B\u266D" }
  ];
  var units_chords_default = [
    // ───────────────────────────────────────── 유닛 3
    {
      id: "u3",
      title: "\uC870(Key)\uC640 5\uB3C4\uAD8C",
      desc: '\uACE1\uC758 \uC911\uC2EC\uC774 \uB418\uB294 "\uD0A4"\uC640 12\uAC1C \uD0A4\uC758 \uC9C0\uB3C4\uB97C \uBC30\uC6CC\uC694.',
      lessons: [
        {
          id: "u3l1",
          title: "\uC870(Key)\uC640 \uC870\uC62E\uAE40",
          minutes: 6,
          steps: [
            text(
              "\uACE1\uC5D0\uB294 \uC911\uC2EC\uC774 \uC788\uC5B4\uC694",
              `\uACE1\uC774 \uC5B4\uB5A4 \uC73C\uB738\uC74C\uACFC \uC2A4\uCF00\uC77C\uC744 \uC911\uC2EC\uC73C\uB85C \uB9CC\uB4E4\uC5B4\uC84C\uB294\uC9C0\uB97C [[key|\uC870(Key)]]\uB77C\uACE0 \uD574\uC694.

- **C \uBA54\uC774\uC800 \uD0A4**: \uC73C\uB738\uC74C C, C \uBA54\uC774\uC800 \uC2A4\uCF00\uC77C(\uB3C4\uB808\uBBF8\uD30C\uC194\uB77C\uC2DC)\uC758 \uC74C\uC774 \uC911\uC2EC
- **A \uB9C8\uC774\uB108 \uD0A4**: \uC73C\uB738\uC74C A, A \uB9C8\uC774\uB108 \uC2A4\uCF00\uC77C\uC758 \uC74C\uC774 \uC911\uC2EC

\uBA54\uC774\uC800 \uD0A4\uC640 \uB9C8\uC774\uB108 \uD0A4\uAC00 12\uAC1C \uC74C\uB9C8\uB2E4 \uD558\uB098\uC529 \uC788\uC73C\uB2C8, \uD0A4\uB294 \uBAA8\uB450 **24\uAC1C**\uC608\uC694.

\uAC19\uC740 \uBA5C\uB85C\uB514\uB97C \uB2E4\uB978 \uD0A4\uB85C \uC62E\uACA8 \uBD80\uB97C \uC218\uB3C4 \uC788\uC5B4\uC694. \uBAA8\uB4E0 \uC74C\uC744 \uAC19\uC740 \uAC04\uACA9\uB9CC\uD07C \uC62E\uAE30\uB294 \uAC83\uC744 [[transpose|\uC870\uC62E\uAE40]]\uC774\uB77C\uACE0 \uD574\uC694. \uB192\uC774\uB9CC \uB2EC\uB77C\uC9C0\uACE0 \uBA5C\uB85C\uB514 \uBAA8\uC591\uC740 \uADF8\uB300\uB85C\uC608\uC694.`
            ),
            listen(
              '"\uBC18\uC9DD\uBC18\uC9DD \uC791\uC740\uBCC4" \uCCAB \uC18C\uC808\uC744 \uC138 \uAC00\uC9C0 \uD0A4\uB85C \uB4E4\uC5B4 \uBCF4\uC138\uC694. \uC2DC\uC791\uD558\uB294 \uC74C(\uC73C\uB738\uC74C)\uB9CC \uB2EC\uB77C\uC84C\uACE0 \uBA5C\uB85C\uB514 \uBAA8\uC591\uC740 \uAC19\uC544\uC694.',
              [
                { label: "C \uD0A4 (\uB3C4\uC5D0\uC11C \uC2DC\uC791)", midis: star(60), gap: 0.4 },
                { label: "D \uD0A4 (\uB808\uC5D0\uC11C \uC2DC\uC791)", midis: star(62), gap: 0.4 },
                { label: "G \uD0A4 (\uC194\uC5D0\uC11C \uC2DC\uC791)", midis: star(67), gap: 0.4 }
              ],
              [60, 79]
            ),
            q("\uBA5C\uB85C\uB514\uC758 \uBAA8\uB4E0 \uC74C\uC744 \uAC19\uC740 \uAC04\uACA9\uB9CC\uD07C \uC62E\uACA8\uC11C \uB2E4\uB978 \uD0A4\uB85C \uBC14\uAFB8\uB294 \uAC83\uC740?", ["\uC870\uC62E\uAE40", "\uC625\uD0C0\uBE0C", "\uB3C4\uC218", "\uBC18\uC74C"], 0, "\uC870\uC62E\uAE40\uC774\uC5D0\uC694. \uC74C \uC0AC\uC774\uC758 \uAC04\uACA9\uC740 \uADF8\uB300\uB85C \uB450\uACE0 \uC804\uCCB4 \uB192\uC774\uB9CC \uC62E\uACA8\uC694."),
            q("C \uBA54\uC774\uC800 \uD0A4\uC758 \uC73C\uB738\uC74C\uC740?", ["C (\uB3C4)", "E (\uBBF8)", "G (\uC194)", "A (\uB77C)"], 0, "\uD0A4\uC758 \uC774\uB984\uC774 \uACE7 \uC73C\uB738\uC74C\uC774\uC5D0\uC694."),
            q("\uBA54\uC774\uC800 \uD0A4 12\uAC1C, \uB9C8\uC774\uB108 \uD0A4 12\uAC1C\uB97C \uD569\uCE58\uBA74 \uD0A4\uB294 \uBAA8\uB450 \uBA87 \uAC1C\uC77C\uAE4C\uC694?", ["12\uAC1C", "14\uAC1C", "24\uAC1C", "36\uAC1C"], 2, "12 + 12 = 24\uAC1C\uC608\uC694."),
            key("G \uBA54\uC774\uC800 \uD0A4\uC758 **\uC73C\uB738\uC74C**\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 7, WIDE),
            play('"\uBC18\uC9DD\uBC18\uC9DD \uC791\uC740\uBCC4"\uC744 G \uD0A4\uB85C \uCCD0 \uBCF4\uC138\uC694. \uC73C\uB738\uC74C \uC194\uC5D0\uC11C \uC2DC\uC791\uD574\uC694. (\uC194 \uC194 \uB808 \uB808 \uBBF8 \uBBF8 \uB808)', [7, 7, 2, 2, 4, 4, 2], [67, 76])
          ]
        },
        {
          id: "u3l2",
          title: "5\uB3C4\uAD8C: 12\uAC1C \uD0A4\uC758 \uC9C0\uB3C4",
          minutes: 8,
          steps: [
            text(
              "\uD0A4\uB97C \uD55C\uB208\uC5D0 \uC815\uB9AC\uD558\uB294 \uC6D0",
              `C\uC5D0\uC11C \uC644\uC8045\uB3C4 \uC704\uB85C \uACC4\uC18D \uC62C\uB77C\uAC00\uBA74 **C \u2192 G \u2192 D \u2192 A \u2192 E \u2192 B \u2192 F\u266F** \uC21C\uC11C\uB85C \uD0A4\uAC00 \uC774\uC5B4\uC838\uC694. \uD55C \uCE78 \uAC08 \uB54C\uB9C8\uB2E4 **\uC0E4\uD504(\u266F)\uAC00 \uD558\uB098\uC529 \uB298\uC5B4\uC694.**

\uBC18\uB300\uB85C \uC644\uC8045\uB3C4 \uC544\uB798(= \uC644\uC8044\uB3C4 \uC704)\uB85C \uAC00\uBA74 **C \u2192 F \u2192 B\u266D \u2192 E\u266D \u2192 A\u266D \u2192 D\u266D**. \uC774\uCABD\uC740 **\uD50C\uB7AB(\u266D)\uC774 \uD558\uB098\uC529 \uB298\uC5B4\uC694.**

\uC774 12\uAC1C \uD0A4\uB97C \uC6D0\uC73C\uB85C \uBC30\uC5F4\uD55C \uAC83\uC774 [[circle-of-fifths|5\uB3C4\uAD8C]]\uC774\uC5D0\uC694. \uBC14\uAE65 \uC6D0\uC740 \uBA54\uC774\uC800 \uD0A4, \uC548\uCABD \uC6D0\uC740 \uB9C8\uC774\uB108 \uD0A4\uC608\uC694. \uB9E8 \uC544\uB798\uC758 F\u266F\uC740 G\u266D\uACFC \uAC19\uC740 \uD0A4\uC608\uC694(\u266F 6\uAC1C = \u266D 6\uAC1C). \uC9C1\uC811 \uB20C\uB7EC \uBCF4\uC138\uC694!`
            ),
            circle(
              "\uC6D0 \uC704\uC758 \uD0A4\uB97C \uB20C\uB7EC\uC11C \uC18C\uB9AC\uC640 \uC870\uD45C\uB97C \uD655\uC778\uD558\uC138\uC694. \uC2DC\uACC4 \uBC29\uD5A5\uC73C\uB85C \uD55C \uCE78\uB9C8\uB2E4 \u266F\uC774 \uD558\uB098\uC529 \uB298\uC5B4\uB098\uB294 \uAC83\uC744 \uD655\uC778\uD574 \uBCF4\uC138\uC694.",
              COF_KEYS,
              { major: " \uBA54\uC774\uC800", minor: " \uB9C8\uC774\uB108" }
            ),
            text(
              "\uC0E4\uD504\uC640 \uD50C\uB7AB\uC774 \uBD99\uB294 \uC21C\uC11C",
              `\uC0E4\uD504\uB294 \uD56D\uC0C1 **F \u2192 C \u2192 G \u2192 D \u2192 A \u2192 E \u2192 B** \uC21C\uC11C\uB85C \uBD99\uC5B4\uC694. \u266F\uC774 2\uAC1C\uC778 D \uD0A4\uB77C\uBA74 \uC55E\uC758 \uB450 \uAC1C, \uC989 F\u266F\uACFC C\u266F\uC774 \uBD99\uC5B4\uC694.

\uD50C\uB7AB\uC740 \uBC18\uB300 \uC21C\uC11C **B \u2192 E \u2192 A \u2192 D \u2192 G \u2192 C \u2192 F**\uB85C \uBD99\uC5B4\uC694. \u266D\uC774 2\uAC1C\uC778 B\u266D \uD0A4\uB77C\uBA74 B\u266D\uACFC E\u266D\uC774 \uBD99\uC5B4\uC694.

(\uD0A4\uB9C8\uB2E4 \uC4F0\uB294 \uC74C\uC744 \uC774\uB807\uAC8C \uAC04\uB2E8\uD788 \uC54C \uC218 \uC788\uC5B4\uC694. \uC678\uC6B0\uC9C0 \uB9D0\uACE0 5\uB3C4\uAD8C\uC744 \uBCF4\uBA70 \uC775\uC219\uD574\uC9C0\uC138\uC694.)`
            ),
            q("C\uC5D0\uC11C \uC644\uC8045\uB3C4 \uC704\uC5D0 \uC788\uB294 \uD0A4\uB294?", ["G", "F", "D", "A"], 0, "C\uC5D0\uC11C \uBC18\uC74C 7\uAC1C \uC704\uAC00 G\uC608\uC694. 5\uB3C4\uAD8C\uC5D0\uC11C C\uC758 \uC624\uB978\uCABD \uC774\uC6C3\uC774\uC5D0\uC694."),
            q("D \uBA54\uC774\uC800 \uD0A4\uC5D0\uC11C \uC0E4\uD504\uAC00 \uBD99\uB294 \uC74C\uC740?", ["F\u266F, C\u266F", "F\u266F", "F\u266F, C\u266F, G\u266F", "B\u266D, E\u266D"], 0, "D \uD0A4\uB294 \u266F\uC774 2\uAC1C: F\u266F\uACFC C\u266F\uC774\uC5D0\uC694."),
            q("F \uBA54\uC774\uC800 \uD0A4\uC5D0\uB294 \uC5B4\uB5A4 \uC74C\uC5D0 \uD50C\uB7AB\uC774 \uBD99\uC744\uAE4C\uC694?", ["B\u266D", "F\u266F", "E\u266D", "\uD50C\uB7AB\uC774 \uC5C6\uB2E4"], 0, "F \uD0A4\uB294 \u266D\uC774 1\uAC1C: B\u266D\uC774\uC5D0\uC694. F \uBA54\uC774\uC800 \uC2A4\uCF00\uC77C\uC740 F G A B\u266D C D E F."),
            q("A \uBA54\uC774\uC800 \uD0A4\uC5D0\uB294 \u266F\uC774 \uBA87 \uAC1C \uBD99\uC744\uAE4C\uC694?", ["1\uAC1C", "2\uAC1C", "3\uAC1C", "4\uAC1C"], 2, "5\uB3C4\uAD8C\uC5D0\uC11C C \u2192 G(1) \u2192 D(2) \u2192 A(3). \u266F\uC774 3\uAC1C(F\u266F C\u266F G\u266F)\uC608\uC694."),
            q("5\uB3C4\uAD8C\uC5D0\uC11C \uC2DC\uACC4 \uBC29\uD5A5\uC73C\uB85C \uD55C \uCE78 \uAC00\uBA74?", ["\u266F\uC774 \uD558\uB098 \uB298\uACE0 \uC644\uC8045\uB3C4 \uC704\uC758 \uD0A4\uAC00 \uB41C\uB2E4", "\u266D\uC774 \uD558\uB098 \uB298\uACE0 \uC644\uC8045\uB3C4 \uC704\uC758 \uD0A4\uAC00 \uB41C\uB2E4", "\uBC18\uC74C \uC704\uC758 \uD0A4\uAC00 \uB41C\uB2E4", "\uB9C8\uC774\uB108 \uD0A4\uAC00 \uB41C\uB2E4"], 0, "\uC2DC\uACC4 \uBC29\uD5A5 = \uC644\uC8045\uB3C4 \uC704 = \u266F \uD558\uB098 \uCD94\uAC00\uC608\uC694."),
            key("G \uBA54\uC774\uC800 \uD0A4\uC5D0\uC11C \uC0E4\uD504\uAC00 \uBD99\uB294 \uC74C **\uD30C\u266F(F\u266F)**\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 6, WIDE)
          ]
        },
        {
          id: "u3l3",
          title: "\uB098\uB780\uD55C\uC870: \uBA54\uC774\uC800\uC640 \uB9C8\uC774\uB108\uC758 \uC9DD",
          minutes: 6,
          steps: [
            text(
              "\uC4F0\uB294 \uC74C\uC774 \uB611\uAC19\uC740 \uD55C \uC30D",
              `C \uBA54\uC774\uC800(\uB3C4\uB808\uBBF8\uD30C\uC194\uB77C\uC2DC)\uC640 A \uB9C8\uC774\uB108(\uB77C\uC2DC\uB3C4\uB808\uBBF8\uD30C\uC194)\uB294 **\uC4F0\uB294 \uC74C\uC774 \uC644\uC804\uD788 \uAC19\uC544\uC694.** \uD770\uAC74\uBC18 7\uAC1C\uC608\uC694. \uC2DC\uC791\uD558\uB294 \uC74C\uB9CC \uB2EC\uB77C\uC11C \uC911\uC2EC\uC774 \uBC14\uB00C\uACE0 \uBD84\uC704\uAE30\uAC00 \uB2EC\uB77C\uC838\uC694.

\uC774\uB7F0 \uC9DD\uC744 [[relative-key|\uB098\uB780\uD55C\uC870]]\uB77C\uACE0 \uD574\uC694. \uCC3E\uB294 \uBC95\uC740 \uC26C\uC6CC\uC694. **\uBA54\uC774\uC800 \uD0A4\uC758 6\uBC88\uC9F8 \uC74C**\uC5D0\uC11C \uC2DC\uC791\uD558\uB294 \uB9C8\uC774\uB108 \uD0A4\uAC00 \uB098\uB780\uD55C\uC870\uC608\uC694.

C D E F G **A** B \u2192 6\uBC88\uC9F8\uAC00 A \u2192 C \uBA54\uC774\uC800\uC758 \uB098\uB780\uD55C\uC870\uB294 A \uB9C8\uC774\uB108.

5\uB3C4\uAD8C\uC758 \uC548\uCABD \uC6D0\uC774 \uBC14\uAE65 \uC6D0\uC758 \uB098\uB780\uD55C\uC870\uC608\uC694.`
            ),
            listen(
              "\uAC19\uC740 \uC74C\uB4E4\uB85C \uC774\uB8E8\uC5B4\uC9C4 \uB450 \uC2A4\uCF00\uC77C\uC744 \uBE44\uAD50\uD574 \uBCF4\uC138\uC694. \uAC74\uBC18\uC5D0 \uD45C\uC2DC\uB41C \uC74C\uC774 \uB611\uAC19\uC544\uC694.",
              [
                { label: "C \uBA54\uC774\uC800 (\uB3C4\uC5D0\uC11C \uC2DC\uC791)", midis: [60, 62, 64, 65, 67, 69, 71, 72], gap: 0.36 },
                { label: "A \uB9C8\uC774\uB108 (\uB77C\uC5D0\uC11C \uC2DC\uC791)", midis: [69, 71, 72, 74, 76, 77, 79, 81], gap: 0.36 }
              ],
              WIDE
            ),
            q("C \uBA54\uC774\uC800\uC758 \uB098\uB780\uD55C\uC870\uB294?", ["A \uB9C8\uC774\uB108", "E \uB9C8\uC774\uB108", "D \uB9C8\uC774\uB108", "C \uB9C8\uC774\uB108"], 0, "C D E F G A B\uC5D0\uC11C 6\uBC88\uC9F8 \uC74C\uC774 A\uC608\uC694."),
            q("G \uBA54\uC774\uC800(G A B C D E F\u266F)\uC758 \uB098\uB780\uD55C\uC870\uB294?", ["E \uB9C8\uC774\uB108", "A \uB9C8\uC774\uB108", "B \uB9C8\uC774\uB108", "D \uB9C8\uC774\uB108"], 0, "6\uBC88\uC9F8 \uC74C\uC774 E\uC608\uC694."),
            q("D \uBA54\uC774\uC800(D E F\u266F G A B C\u266F)\uC758 \uB098\uB780\uD55C\uC870\uB294?", ["B \uB9C8\uC774\uB108", "E \uB9C8\uC774\uB108", "F\u266F \uB9C8\uC774\uB108", "G \uB9C8\uC774\uB108"], 0, "6\uBC88\uC9F8 \uC74C\uC774 B\uC608\uC694."),
            q("A \uB9C8\uC774\uB108\uC640 \uC4F0\uB294 \uC74C\uC774 \uAC19\uC740 \uBA54\uC774\uC800 \uD0A4\uB294?", ["C \uBA54\uC774\uC800", "A \uBA54\uC774\uC800", "E \uBA54\uC774\uC800", "G \uBA54\uC774\uC800"], 0, "A \uB9C8\uC774\uB108\uC758 \uB098\uB780\uD55C\uC870\uB294 C \uBA54\uC774\uC800\uC608\uC694."),
            key("F \uBA54\uC774\uC800 \uD0A4(F G A B\u266D C D E)\uC758 **6\uBC88\uC9F8 \uC74C**\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694. \uC774 \uC74C\uC774 \uB098\uB780\uD55C\uC870 \uB9C8\uC774\uB108\uC758 \uC73C\uB738\uC74C\uC774\uC5D0\uC694.", 2, WIDE, "6\uBC88\uC9F8 \uC74C\uC740 D\uC608\uC694. F \uBA54\uC774\uC800\uC758 \uB098\uB780\uD55C\uC870\uB294 D \uB9C8\uC774\uB108\uC608\uC694."),
            play("E \uB9C8\uC774\uB108 \uC2A4\uCF00\uC77C\uC744 \uB20C\uB7EC \uBCF4\uC138\uC694. (G \uBA54\uC774\uC800\uC640 \uAC19\uC740 \uC74C\uC744 \uC4F0\uB294 \uC2A4\uCF00\uC77C\uC774\uC5D0\uC694.)", [4, 6, 7, 9, 11, 0, 2, 4], [64, 76])
          ]
        }
      ]
    },
    // ───────────────────────────────────────── 유닛 4
    {
      id: "u4",
      title: "3\uD654\uC74C",
      desc: "\uC74C \uC138 \uAC1C\uB85C \uB9CC\uB4DC\uB294 \uAC00\uC7A5 \uAE30\uBCF8\uC801\uC778 \uD654\uC74C 4\uC885\uB958\uB97C \uBC30\uC6CC\uC694.",
      lessons: [
        {
          id: "u4l1",
          title: "\uD654\uC74C\uC774\uB780? 3\uD654\uC74C \uC313\uAE30",
          minutes: 6,
          steps: [
            text(
              "\uC18C\uB9AC\uB97C \uACB9\uCE58\uBA74 \uD654\uC74C",
              `[[chord|\uD654\uC74C(\uCF54\uB4DC)]]\uC740 \uB458 \uC774\uC0C1\uC758 \uC74C\uC774 **\uB3D9\uC2DC\uC5D0** \uC6B8\uB9AC\uB294 \uAC83\uC774\uC5D0\uC694. \uADF8\uC911 \uAC00\uC7A5 \uAE30\uBCF8\uC774 \uC74C 3\uAC1C\uB85C \uB9CC\uB4DC\uB294 [[triad|3\uD654\uC74C]]\uC774\uC5D0\uC694.

\uB9CC\uB4DC\uB294 \uBC95\uC740 \uAC04\uB2E8\uD574\uC694. \uAE30\uC900\uC774 \uB418\uB294 \uC74C \uD558\uB098([[root|\uADFC\uC74C]])\uB97C \uC815\uD558\uACE0, \uADF8 \uC704\uC5D0 3\uB3C4\uB97C \uC313\uACE0, \uB610 3\uB3C4\uB97C \uC313\uC544\uC694. \uAC74\uBC18\uC5D0\uC11C **\uD55C \uCE78\uC529 \uAC74\uB108\uB6F0\uBA70** \uC138 \uC74C\uC744 \uACE0\uB974\uB294 \uAC70\uC608\uC694.

\uB3C4\uB97C \uADFC\uC74C\uC73C\uB85C \uD558\uBA74: \uB3C4 (\uB808\uB97C \uAC74\uB108\uB6F0\uACE0) \uBBF8 (\uD30C\uB97C \uAC74\uB108\uB6F0\uACE0) \uC194 \u2192 **\uB3C4-\uBBF8-\uC194**. \uC774 \uD654\uC74C\uC758 \uC774\uB984\uC740 \uADFC\uC74C\uC744 \uB530\uB77C **C \uCF54\uB4DC**\uC608\uC694.`
            ),
            listen(
              "\uD55C \uCE78\uC529 \uAC74\uB108\uB6F0\uBA70 \uC313\uC740 \uC138 \uAC00\uC9C0 \uD654\uC74C\uC744 \uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uCC28\uB840\uB85C \uD55C \uBC88, \uB3D9\uC2DC\uC5D0 \uD55C \uBC88 \uB4E4\uB824\uC918\uC694.)",
              [ci("C", "C (\uB3C4-\uBBF8-\uC194)"), ci("Dm", "\uB808 \uC704\uC5D0 \uC313\uAE30 (\uB808-\uD30C-\uB77C)"), ci("G", "\uC194 \uC704\uC5D0 \uC313\uAE30 (\uC194-\uC2DC-\uB808)")],
              WIDE
            ),
            build("\uB3C4(C) \uC704\uC5D0 \uD55C \uCE78\uC529 \uAC74\uB108 \uC313\uC544\uC11C **C \uCF54\uB4DC**\uB97C \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uB3C4, \uBBF8, \uC194\uC744 \uBAA8\uB450 \uB204\uB974\uAE30)", "C"),
            build("\uC774\uBC88\uC5D0\uB294 \uC194(G) \uC704\uC5D0 \uC313\uC544 \uBCF4\uC138\uC694. (\uC194, \uC2DC, \uB808)", "G"),
            q("3\uD654\uC74C\uC740 \uC74C\uC774 \uBA87 \uAC1C\uB85C \uC774\uB8E8\uC5B4\uC838 \uC788\uB098\uC694?", ["2\uAC1C", "3\uAC1C", "4\uAC1C", "5\uAC1C"], 1, "3\uD654\uC74C = \uC74C 3\uAC1C\uC608\uC694."),
            q("\uBBF8(E) \uC704\uC5D0 3\uB3C4\uB97C \uB450 \uBC88 \uC313\uC73C\uBA74 \uC5B4\uB5A4 \uC74C\uB4E4\uC774 \uB420\uAE4C\uC694? (\uBBF8, ?, ?)", ["\uBBF8-\uC194-\uC2DC", "\uBBF8-\uD30C-\uB77C", "\uBBF8-\uB77C-\uB3C4", "\uBBF8-\uB808-\uC194"], 0, "\uBBF8\uC5D0\uC11C \uD55C \uCE78 \uAC74\uB108 \uC194, \uB610 \uD55C \uCE78 \uAC74\uB108 \uC2DC\uC608\uC694."),
            key("F \uCF54\uB4DC(\uD30C-\uB77C-\uB3C4)\uC758 **\uAC00\uC6B4\uB370 \uC74C**\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 9, WIDE, "\uD30C \uC704\uC758 3\uB3C4\uB294 \uB77C(A)\uC608\uC694.")
          ]
        },
        {
          id: "u4l2",
          title: "\uBA54\uC774\uC800 \uCF54\uB4DC\uC640 \uB9C8\uC774\uB108 \uCF54\uB4DC",
          minutes: 8,
          steps: [
            text(
              "3\uC74C\uC774 \uD55C \uCE78 \uB0AE\uC544\uC9C0\uBA74 \uBD84\uC704\uAE30\uAC00 \uBC14\uB00C\uC5B4\uC694",
              `\uAC19\uC740 \uADFC\uC74C\uC5D0\uC11C \uC2DC\uC791\uD574\uB3C4 **\uAC00\uC6B4\uB370 \uC74C(3\uC74C)** \uC774 \uD55C \uCE78 \uB2EC\uB77C\uC9C0\uBA74 \uBD84\uC704\uAE30\uAC00 \uC644\uC804\uD788 \uB2EC\uB77C\uC838\uC694.

- 3\uC74C\uC774 \uADFC\uC74C\uC5D0\uC11C \uC7A53\uB3C4(\uBC18\uC74C 4\uAC1C) \u2192 [[major-triad|\uBA54\uC774\uC800 \uCF54\uB4DC]]: \uBC1D\uACE0 \uC548\uC815\uC801
- 3\uC74C\uC774 \uADFC\uC74C\uC5D0\uC11C \uB2E83\uB3C4(\uBC18\uC74C 3\uAC1C) \u2192 [[minor-triad|\uB9C8\uC774\uB108 \uCF54\uB4DC]]: \uC5B4\uB461\uACE0 \uCC28\uBD84

\uB9E8 \uC704\uC758 5\uC74C\uC740 \uB458 \uB2E4 \uC644\uC8045\uB3C4(\uBC18\uC74C 7\uAC1C)\uB85C \uAC19\uC544\uC694.

C = \uB3C4 - \uBBF8 - \uC194
Cm = \uB3C4 - \uBBF8\u266D - \uC194

\uD45C\uAE30\uB294 \uBA54\uC774\uC800\uB294 \uADFC\uC74C \uC774\uB984\uB9CC(C), \uB9C8\uC774\uB108\uB294 \uB4A4\uC5D0 m\uC744 \uBD99\uC5EC\uC694(Cm).`
            ),
            listen(
              "\uAC19\uC740 \uADFC\uC74C\uC758 \uBA54\uC774\uC800\uC640 \uB9C8\uC774\uB108\uB97C \uBC88\uAC08\uC544 \uB4E4\uC5B4 \uBCF4\uC138\uC694. \uAC00\uC6B4\uB370 \uC74C \uD558\uB098\uC758 \uCC28\uC774\uC608\uC694.",
              [ci("C"), ci("Cm"), ci("G"), ci("Gm"), ci("F"), ci("Fm")],
              WIDE
            ),
            earC("\uBA54\uC774\uC800 \uCF54\uB4DC\uC77C\uAE4C\uC694, \uB9C8\uC774\uB108 \uCF54\uB4DC\uC77C\uAE4C\uC694?", "C", ["\uBA54\uC774\uC800", "\uB9C8\uC774\uB108"], 0, "\uBC1D\uACE0 \uC548\uC815\uC801\uC778 C \uBA54\uC774\uC800\uC608\uC694."),
            earC("\uBA54\uC774\uC800 \uCF54\uB4DC\uC77C\uAE4C\uC694, \uB9C8\uC774\uB108 \uCF54\uB4DC\uC77C\uAE4C\uC694?", "Am", ["\uBA54\uC774\uC800", "\uB9C8\uC774\uB108"], 1, "A \uB9C8\uC774\uB108\uC608\uC694. \uC5B4\uB461\uACE0 \uCC28\uBD84\uD574\uC694."),
            earC("\uBA54\uC774\uC800 \uCF54\uB4DC\uC77C\uAE4C\uC694, \uB9C8\uC774\uB108 \uCF54\uB4DC\uC77C\uAE4C\uC694?", "Gm", ["\uBA54\uC774\uC800", "\uB9C8\uC774\uB108"], 1, "G \uB9C8\uC774\uB108\uC608\uC694."),
            earC("\uBA54\uC774\uC800 \uCF54\uB4DC\uC77C\uAE4C\uC694, \uB9C8\uC774\uB108 \uCF54\uB4DC\uC77C\uAE4C\uC694?", "F", ["\uBA54\uC774\uC800", "\uB9C8\uC774\uB108"], 0, "F \uBA54\uC774\uC800\uC608\uC694."),
            build("**Cm**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uB3C4, \uBBF8\u266D, \uC194)", "Cm"),
            build("**Am**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uB77C, \uB3C4, \uBBF8)", "Am"),
            q("C \uCF54\uB4DC\uC5D0\uC11C 3\uC74C(\uBBF8)\uC744 \uBC18\uC74C \uB0B4\uB9AC\uBA74 \uC5B4\uB5A4 \uCF54\uB4DC\uAC00 \uB420\uAE4C\uC694?", ["Cm", "Cdim", "C7", "F"], 0, "3\uC74C\uC774 \uBC18\uC74C \uB0B4\uB824\uAC00\uBA74 \uB9C8\uC774\uB108 \uCF54\uB4DC\uC608\uC694."),
            q("\uBA54\uC774\uC800 \uCF54\uB4DC\uC758 3\uC74C\uC740 \uADFC\uC74C\uC5D0\uC11C \uBC18\uC74C \uBA87 \uAC1C \uC704\uC5D0 \uC788\uC744\uAE4C\uC694?", ["3\uAC1C", "4\uAC1C", "5\uAC1C", "7\uAC1C"], 1, "\uC7A53\uB3C4 = \uBC18\uC74C 4\uAC1C\uC608\uC694. (\uB9C8\uC774\uB108\uB294 3\uAC1C)"),
            key("Am(\uB77C-\uB3C4-\uBBF8)\uC758 **3\uC74C**\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 0, WIDE, "A \uC704\uC758 3\uC74C\uC740 C\uC608\uC694. \uBC18\uC74C 3\uAC1C \uC704\uB77C\uC11C \uB9C8\uC774\uB108\uC608\uC694.")
          ]
        },
        {
          id: "u4l3",
          title: "\uAC10\uD654\uC74C\uACFC \uC99D\uD654\uC74C",
          minutes: 7,
          steps: [
            text(
              "3\uD654\uC74C 4\uC885\uB958",
              `3\uB3C4\uB97C \uC5B4\uB5A4 \uD06C\uAE30\uB85C \uC313\uB290\uB0D0\uC5D0 \uB530\uB77C 3\uD654\uC74C\uC740 \uB124 \uC885\uB958\uAC00 \uB098\uC640\uC694.

- \uBA54\uC774\uC800: \uC7A53\uB3C4 + \uB2E83\uB3C4 (\uBC18\uC74C 4 + 3) \u2192 \uD45C\uAE30 **C**
- \uB9C8\uC774\uB108: \uB2E83\uB3C4 + \uC7A53\uB3C4 (\uBC18\uC74C 3 + 4) \u2192 \uD45C\uAE30 **Cm**
- [[dim-triad|\uAC10\uD654\uC74C]]: \uB2E83\uB3C4 + \uB2E83\uB3C4 (\uBC18\uC74C 3 + 3) \u2192 \uD45C\uAE30 **Cdim**
- [[aug-triad|\uC99D\uD654\uC74C]]: \uC7A53\uB3C4 + \uC7A53\uB3C4 (\uBC18\uC74C 4 + 4) \u2192 \uD45C\uAE30 **Caug**

\uAC10\uD654\uC74C\uC740 5\uC74C\uC774 \uBC18\uC74C 6\uAC1C\uB85C \uC881\uC544\uC838\uC11C(\uD2B8\uB77C\uC774\uD1A4) \uBD88\uC548\uD558\uACE0 \uAE34\uC7A5\uB3FC\uC694. \uC99D\uD654\uC74C\uC740 5\uC74C\uC774 \uBC18\uC74C 8\uAC1C\uB85C \uB113\uC5B4\uC838\uC11C \uBD95 \uB72C \uB4EF\uD55C \uC18C\uB9AC\uAC00 \uB098\uC694.

\uAC10\uD654\uC74C\uC740 \uACE7 \uBC30\uC6B8 \uB2E4\uC774\uC5B4\uD1A0\uB2C9 \uCF54\uB4DC\uC5D0\uC11C \uC790\uC8FC \uB9CC\uB098\uC694. \uC99D\uD654\uC74C\uC740 \uC0C1\uB300\uC801\uC73C\uB85C \uAC00\uB054 \uB098\uC640\uC694.`
            ),
            listen("\uADFC\uC74C\uC774 C\uB85C \uAC19\uC740 \uB124 \uAC00\uC9C0\uB97C \uBE44\uAD50\uD574 \uBCF4\uC138\uC694.", [ci("C"), ci("Cm"), ci("Cdim"), ci("Caug")], WIDE),
            earC("\uC5B4\uB5A4 3\uD654\uC74C\uC77C\uAE4C\uC694?", "Cdim", ["\uBA54\uC774\uC800", "\uB9C8\uC774\uB108", "\uAC10\uD654\uC74C", "\uC99D\uD654\uC74C"], 2, "\uBD88\uC548\uD558\uAC8C \uC881\uC740 \uC18C\uB9AC\uB294 \uAC10\uD654\uC74C\uC774\uC5D0\uC694."),
            earC("\uC5B4\uB5A4 3\uD654\uC74C\uC77C\uAE4C\uC694?", "Caug", ["\uBA54\uC774\uC800", "\uB9C8\uC774\uB108", "\uAC10\uD654\uC74C", "\uC99D\uD654\uC74C"], 3, "\uBD95 \uB72C \uBABD\uD658\uC801\uC778 \uC18C\uB9AC\uB294 \uC99D\uD654\uC74C\uC774\uC5D0\uC694."),
            earC("\uC5B4\uB5A4 3\uD654\uC74C\uC77C\uAE4C\uC694?", "Cm", ["\uBA54\uC774\uC800", "\uB9C8\uC774\uB108", "\uAC10\uD654\uC74C", "\uC99D\uD654\uC74C"], 1, "\uC5B4\uB461\uACE0 \uCC28\uBD84\uD55C \uB9C8\uC774\uB108\uC608\uC694."),
            earC("\uC5B4\uB5A4 3\uD654\uC74C\uC77C\uAE4C\uC694?", "C", ["\uBA54\uC774\uC800", "\uB9C8\uC774\uB108", "\uAC10\uD654\uC74C", "\uC99D\uD654\uC74C"], 0, "\uBC1D\uACE0 \uC548\uC815\uC801\uC778 \uBA54\uC774\uC800\uC608\uC694."),
            build("**Cdim**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uB3C4, \uBBF8\u266D, \uC194\u266D)", "Cdim"),
            build("**Caug**\uB97C \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uB3C4, \uBBF8, \uC194\u266F)", "Caug"),
            q("5\uC74C\uC774 \uBC18\uC74C 6\uAC1C\uB85C \uB0AE\uC544\uC9C4 3\uD654\uC74C\uC740?", ["\uBA54\uC774\uC800", "\uB9C8\uC774\uB108", "\uAC10\uD654\uC74C", "\uC99D\uD654\uC74C"], 2, "\uAC10\uD654\uC74C = \uB2E83\uB3C4 + \uB2E83\uB3C4. \uADFC\uC74C\uACFC 5\uC74C\uC774 \uD2B8\uB77C\uC774\uD1A4\uC744 \uC774\uB904\uC694."),
            q("Caug\uC758 \uAD6C\uC131\uC74C\uC740?", ["C - E - G\u266F", "C - E\u266D - G", "C - E\u266D - G\u266D", "C - E - G"], 0, "\uC99D\uD654\uC74C\uC740 \uC7A53\uB3C4 + \uC7A53\uB3C4\uC608\uC694. C(0) E(4) G\u266F(8).")
          ]
        },
        {
          id: "u4l4",
          title: "3\uD654\uC74C \uC885\uD569 \uC810\uAC80",
          minutes: 7,
          steps: [
            text("\uC720\uB2DB \uB9C8\uBB34\uB9AC", `\uBA54\uC774\uC800, \uB9C8\uC774\uB108, \uAC10\uD654\uC74C, \uC99D\uD654\uC74C\uC744 \uC18C\uB9AC\uC640 \uAD6C\uC131\uC74C\uC73C\uB85C \uAD6C\uBD84\uD574 \uBCFC\uAC8C\uC694. \uD2C0\uB9B0 \uBB38\uC81C\uB294 \uB05D\uC5D0\uC11C \uD55C \uBC88 \uB354 \uB098\uC640\uC694.`),
            earC("\uC5B4\uB5A4 3\uD654\uC74C\uC77C\uAE4C\uC694?", "Em", ["\uBA54\uC774\uC800", "\uB9C8\uC774\uB108", "\uAC10\uD654\uC74C", "\uC99D\uD654\uC74C"], 1, "E \uB9C8\uC774\uB108\uC608\uC694."),
            earC("\uC5B4\uB5A4 3\uD654\uC74C\uC77C\uAE4C\uC694?", "D", ["\uBA54\uC774\uC800", "\uB9C8\uC774\uB108", "\uAC10\uD654\uC74C", "\uC99D\uD654\uC74C"], 0, "D \uBA54\uC774\uC800\uC608\uC694."),
            earC("\uC5B4\uB5A4 3\uD654\uC74C\uC77C\uAE4C\uC694?", "Bdim", ["\uBA54\uC774\uC800", "\uB9C8\uC774\uB108", "\uAC10\uD654\uC74C", "\uC99D\uD654\uC74C"], 2, "B \uAC10\uD654\uC74C\uC774\uC5D0\uC694."),
            earC("\uC5B4\uB5A4 3\uD654\uC74C\uC77C\uAE4C\uC694?", "Gaug", ["\uBA54\uC774\uC800", "\uB9C8\uC774\uB108", "\uAC10\uD654\uC74C", "\uC99D\uD654\uC74C"], 3, "G \uC99D\uD654\uC74C\uC774\uC5D0\uC694."),
            q("Dm\uC758 \uAD6C\uC131\uC74C\uC740?", ["D - F - A", "D - F\u266F - A", "D - F - A\u266D", "D - F\u266F - A\u266F"], 0, "D \uB9C8\uC774\uB108 = \uADFC\uC74C D + \uB2E83\uB3C4(F) + \uC644\uC8045\uB3C4(A)."),
            q("Bdim\uC758 \uAD6C\uC131\uC74C\uC740?", ["B - D - F", "B - D\u266F - F\u266F", "B - D - F\u266F", "B - D\u266F - F"], 0, "B \uAC10\uD654\uC74C = \uADFC\uC74C B + \uB2E83\uB3C4(D) + \uAC105\uB3C4(F)."),
            q("\uBA54\uC774\uC800 \uCF54\uB4DC\uC640 \uB9C8\uC774\uB108 \uCF54\uB4DC\uC758 \uCC28\uC774\uB294 \uBB34\uC5C7\uC77C\uAE4C\uC694?", ["3\uC74C\uC758 \uB192\uC774", "5\uC74C\uC758 \uB192\uC774", "\uADFC\uC74C\uC758 \uB192\uC774", "\uC74C\uC758 \uAC1C\uC218"], 0, "3\uC74C\uC774 \uBC18\uC74C \uD55C \uCE78 \uB2E4\uB974\uACE0, 5\uC74C\uC740 \uAC19\uC544\uC694."),
            build("**Fm**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uD30C, \uB77C\u266D, \uB3C4)", "Fm", { hint: false }),
            build("**E\u266D**(\uBBF8\u266D \uCF54\uB4DC)\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uBBF8\u266D, \uC194, \uC2DC\u266D)", "E\u266D", { hint: false })
          ]
        }
      ]
    },
    // ───────────────────────────────────────── 유닛 5
    {
      id: "u5",
      title: "4\uD654\uC74C\uACFC \uCF54\uB4DC \uD45C\uAE30",
      desc: "3\uD654\uC74C \uC704\uC5D0 \uC74C\uC744 \uD558\uB098 \uB354 \uC313\uACE0, \uCF54\uB4DC \uC774\uB984\uC744 \uC77D\uACE0 \uC4F0\uB294 \uBC95\uC744 \uBC30\uC6CC\uC694.",
      lessons: [
        {
          id: "u5l1",
          title: "\uBA54\uC774\uC800 7th\uC640 \uB3C4\uBBF8\uB10C\uD2B8 7th",
          minutes: 8,
          steps: [
            text(
              "\uC74C \uD558\uB098\uB97C \uB354 \uC313\uC73C\uBA74 4\uD654\uC74C",
              `3\uD654\uC74C \uC704\uC5D0 3\uB3C4\uB97C \uD558\uB098 \uB354 \uC313\uC73C\uBA74 \uC74C\uC774 4\uAC1C\uC778 [[seventh-chord|4\uD654\uC74C]]\uC774 \uB3FC\uC694. \uC0C8\uB85C \uC5B9\uC740 \uC74C\uC740 \uADFC\uC74C\uC5D0\uC11C 7\uB3C4 \uB5A8\uC5B4\uC838 \uC788\uC5B4\uC11C **7th(7\uC74C)** \uC774\uB77C\uACE0 \uBD88\uB7EC\uC694.

\uBA54\uC774\uC800 \uCF54\uB4DC \uC704\uC5D0 7th\uB97C \uC5B9\uB294 \uBC29\uBC95\uC740 \uB450 \uAC00\uC9C0\uC608\uC694.

- \uC7A57\uB3C4(\uBC18\uC74C 11\uAC1C) \u2192 [[maj7|\uBA54\uC774\uC800 7th]] **Cmaj7** = \uB3C4 \uBBF8 \uC194 \uC2DC. \uBABD\uAE00\uBABD\uAE00\uD558\uACE0 \uC138\uB828\uB41C \uC18C\uB9AC
- \uB2E87\uB3C4(\uBC18\uC74C 10\uAC1C) \u2192 [[dom7|\uB3C4\uBBF8\uB10C\uD2B8 7th]] **C7** = \uB3C4 \uBBF8 \uC194 \uC2DC\u266D. \uD33D\uD33D\uD55C \uAE34\uC7A5\uC774 \uC788\uC5B4\uC11C \uB2E4\uC74C\uC73C\uB85C \uAC00\uACE0 \uC2F6\uC740 \uC18C\uB9AC

C7\uC740 "\uB3C4\uBBF8\uB10C\uD2B8 7th"\uB97C \uC904\uC5EC\uC11C \uC22B\uC790 7\uB9CC \uC368\uC694. \uC774 7\uC740 maj7\uACFC\uB294 \uB2E4\uB978 \uCF54\uB4DC\uB2C8\uAE4C \uD5F7\uAC08\uB9AC\uC9C0 \uB9C8\uC138\uC694.`
            ),
            listen("3\uD654\uC74C C\uC640 \uB450 \uAC00\uC9C0 7th \uCF54\uB4DC\uB97C \uBE44\uAD50\uD574 \uBCF4\uC138\uC694.", [ci("C"), ci("Cmaj7"), ci("C7")], WIDE),
            build("**Cmaj7**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uB3C4, \uBBF8, \uC194, \uC2DC)", "Cmaj7"),
            build("**C7**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uB3C4, \uBBF8, \uC194, \uC2DC\u266D)", "C7"),
            build("**G7**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uC194, \uC2DC, \uB808, \uD30C)", "G7"),
            earC("\uC5B4\uB5A4 \uCF54\uB4DC\uC77C\uAE4C\uC694?", "Cmaj7", ["C (3\uD654\uC74C)", "Cmaj7", "C7"], 1, "\uBABD\uAE00\uBABD\uAE00\uD55C maj7\uC774\uC5D0\uC694. 7th\uAC00 \uC2DC(B)\uC608\uC694."),
            earC("\uC5B4\uB5A4 \uCF54\uB4DC\uC77C\uAE4C\uC694?", "C7", ["C (3\uD654\uC74C)", "Cmaj7", "C7"], 2, "\uAE34\uC7A5\uAC10 \uC788\uB294 \uB3C4\uBBF8\uB10C\uD2B8 7th\uC608\uC694. 7th\uAC00 \uC2DC\u266D(B\u266D)\uC774\uC5D0\uC694."),
            q("C7\uC758 7th(7\uC74C)\uC740 \uC5B4\uB5A4 \uC74C\uC77C\uAE4C\uC694?", ["B\u266D (\uC2DC\u266D)", "B (\uC2DC)", "A (\uB77C)", "C (\uB3C4)"], 0, "C7\uC740 \uADFC\uC74C\uC5D0\uC11C \uB2E87\uB3C4(\uBC18\uC74C 10\uAC1C) = B\u266D\uC774\uC5D0\uC694."),
            q("Cmaj7\uC758 7th(7\uC74C)\uC740 \uC5B4\uB5A4 \uC74C\uC77C\uAE4C\uC694?", ["B (\uC2DC)", "B\u266D (\uC2DC\u266D)", "A (\uB77C)", "D (\uB808)"], 0, "Cmaj7\uC740 \uC7A57\uB3C4(\uBC18\uC74C 11\uAC1C) = B\uC608\uC694.")
          ]
        },
        {
          id: "u5l2",
          title: "\uB9C8\uC774\uB108 7th\uC640 \uD558\uD504 \uB514\uBBF8\uB2C8\uC2DC\uB4DC",
          minutes: 8,
          steps: [
            text(
              "\uB9C8\uC774\uB108 \uACC4\uC5F4 4\uD654\uC74C \uB450 \uAC00\uC9C0",
              `\uC774\uBC88\uC5D0\uB294 \uB9C8\uC774\uB108 \uACC4\uC5F4 3\uD654\uC74C \uC704\uC5D0 7th\uB97C \uC5B9\uC5B4 \uBCFC\uAC8C\uC694.

- \uB9C8\uC774\uB108 \uCF54\uB4DC + \uB2E87\uB3C4 \u2192 [[m7|\uB9C8\uC774\uB108 7th]] **Cm7** = \uB3C4 \uBBF8\u266D \uC194 \uC2DC\u266D. \uBD80\uB4DC\uB7FD\uACE0 \uCC28\uBD84\uD55C \uC18C\uB9AC
- \uAC10\uD654\uC74C + \uB2E87\uB3C4 \u2192 [[m7b5|\uD558\uD504 \uB514\uBBF8\uB2C8\uC2DC\uB4DC]] **Cm7\u266D5** = \uB3C4 \uBBF8\u266D \uC194\u266D \uC2DC\u266D. \uB9C8\uC774\uB108 7th\uC5D0\uC11C 5\uC74C\uC744 \uBC18\uC74C \uB0B4\uB9B0 \uBAA8\uC591. \uC5B4\uB461\uACE0 \uBBF8\uBB18\uD558\uAC8C \uBD88\uC548\uD55C \uC18C\uB9AC

\uC5EC\uAE30\uAE4C\uC9C0 4\uD654\uC74C 4\uC885\uB958\uB97C \uBAA8\uB450 \uBC30\uC6E0\uC5B4\uC694. \uADFC\uC74C \uC704\uB85C \uC313\uC740 3\uB3C4\uC758 \uD06C\uAE30(\uBC18\uC74C \uAC1C\uC218)\uB85C \uC815\uB9AC\uD558\uBA74 \uC774\uB798\uC694.

- maj7: 4 + 3 + 4
- 7: 4 + 3 + 3
- m7: 3 + 4 + 3
- m7\u266D5: 3 + 3 + 4`
            ),
            listen("\uB9C8\uC774\uB108 3\uD654\uC74C\uACFC \uB9C8\uC774\uB108 \uACC4\uC5F4 4\uD654\uC74C\uC744 \uBE44\uAD50\uD574 \uBCF4\uC138\uC694.", [ci("Cm"), ci("Cm7"), ci("Cm7\u266D5")], WIDE),
            build("**Cm7**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uB3C4, \uBBF8\u266D, \uC194, \uC2DC\u266D)", "Cm7"),
            build("**Am7**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uB77C, \uB3C4, \uBBF8, \uC194)", "Am7"),
            build("**Bm7\u266D5**\uB97C \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uC2DC, \uB808, \uD30C, \uB77C)", "Bm7\u266D5"),
            earC("4\uD654\uC74C 4\uC885\uB958 \uC911 \uC5B4\uB5A4 \uCF54\uB4DC\uC77C\uAE4C\uC694?", "Cm7", ["maj7", "7", "m7", "m7\u266D5"], 2, "\uBD80\uB4DC\uB7FD\uACE0 \uCC28\uBD84\uD55C m7\uC774\uC5D0\uC694."),
            earC("4\uD654\uC74C 4\uC885\uB958 \uC911 \uC5B4\uB5A4 \uCF54\uB4DC\uC77C\uAE4C\uC694?", "Cm7\u266D5", ["maj7", "7", "m7", "m7\u266D5"], 3, "5\uC74C\uC774 \uBC18\uC74C \uB0AE\uC544\uC838 \uBD88\uC548\uD55C m7\u266D5\uC608\uC694."),
            earC("4\uD654\uC74C 4\uC885\uB958 \uC911 \uC5B4\uB5A4 \uCF54\uB4DC\uC77C\uAE4C\uC694?", "G7", ["maj7", "7", "m7", "m7\u266D5"], 1, "G7\uC740 \uAE34\uC7A5\uAC10 \uC788\uB294 \uB3C4\uBBF8\uB10C\uD2B8 7th\uC608\uC694."),
            earC("4\uD654\uC74C 4\uC885\uB958 \uC911 \uC5B4\uB5A4 \uCF54\uB4DC\uC77C\uAE4C\uC694?", "Fmaj7", ["maj7", "7", "m7", "m7\u266D5"], 0, "\uBABD\uAE00\uBABD\uAE00\uD55C maj7\uC774\uC5D0\uC694."),
            q("Cm7\uACFC Cm7\u266D5\uC758 \uCC28\uC774\uB294?", ["5\uC74C\uC774 \uBC18\uC74C \uB0AE\uC544\uC9C4\uB2E4", "3\uC74C\uC774 \uBC18\uC74C \uB0AE\uC544\uC9C4\uB2E4", "7\uC74C\uC774 \uBC18\uC74C \uB0AE\uC544\uC9C4\uB2E4", "\uADFC\uC74C\uC774 \uBC14\uB010\uB2E4"], 0, "m7\u266D5\uB294 Cm7\uC758 5\uC74C(\uC194)\uC744 \uC194\u266D\uC73C\uB85C \uBC18\uC74C \uB0B4\uB9B0 \uBAA8\uC591\uC774\uC5D0\uC694.")
          ]
        },
        {
          id: "u5l3",
          title: "\uCF54\uB4DC \uC774\uB984 \uC77D\uACE0 \uC4F0\uAE30",
          minutes: 8,
          steps: [
            text(
              "\uCF54\uB4DC \uC2EC\uBCFC \uC77D\uB294 \uBC95",
              `[[chord-symbol|\uCF54\uB4DC \uC2EC\uBCFC]]\uC740 **"\uADFC\uC74C \uC774\uB984 + \uD654\uC74C \uC885\uB958"** \uC21C\uC11C\uB85C \uC368\uC694. \uC9C0\uAE08\uAE4C\uC9C0 \uBC30\uC6B4 \uAC83\uC744 \uD55C \uBC88\uC5D0 \uC815\uB9AC\uD574 \uBCFC\uAC8C\uC694.

- C \u2192 \uBA54\uC774\uC800 (\uB3C4 \uBBF8 \uC194)
- Cm \u2192 \uB9C8\uC774\uB108 (\uB3C4 \uBBF8\u266D \uC194)
- Cdim \u2192 \uAC10\uD654\uC74C (\uB3C4 \uBBF8\u266D \uC194\u266D)
- Caug \u2192 \uC99D\uD654\uC74C (\uB3C4 \uBBF8 \uC194\u266F)
- Cmaj7 \u2192 \uBA54\uC774\uC800 7th (\uB3C4 \uBBF8 \uC194 \uC2DC)
- C7 \u2192 \uB3C4\uBBF8\uB10C\uD2B8 7th (\uB3C4 \uBBF8 \uC194 \uC2DC\u266D)
- Cm7 \u2192 \uB9C8\uC774\uB108 7th (\uB3C4 \uBBF8\u266D \uC194 \uC2DC\u266D)
- Cm7\u266D5 \u2192 \uD558\uD504 \uB514\uBBF8\uB2C8\uC2DC\uB4DC (\uB3C4 \uBBF8\u266D \uC194\u266D \uC2DC\u266D)

"7"\uC774 \uBD99\uC73C\uBA74 \uB2E87\uB3C4, "maj7"\uC774 \uBD99\uC73C\uBA74 \uC7A57\uB3C4\uC608\uC694. \uADF8\uB9AC\uACE0 "m"\uC774 \uBD99\uC73C\uBA74 3\uC74C\uC774 \uB0B4\uB824\uAC00\uC694. \uC774 \uB450 \uAC00\uC9C0 \uADDC\uCE59\uB9CC \uAE30\uC5B5\uD558\uBA74 \uB300\uBD80\uBD84 \uC77D\uC744 \uC218 \uC788\uC5B4\uC694.`
            ),
            q("Dm7\uC758 \uAD6C\uC131\uC74C\uC740?", ["D F A C", "D F\u266F A C", "D F A C\u266F", "D F\u266F A C\u266F"], 0, "D \uB9C8\uC774\uB108 7th: \uADFC\uC74C D, \uB2E83\uB3C4 F, \uC644\uC8045\uB3C4 A, \uB2E87\uB3C4 C."),
            q("G7\uC758 \uAD6C\uC131\uC74C\uC740?", ["G B D F", "G B D F\u266F", "G B\u266D D F", "G B D\u266D F"], 0, "G \uB3C4\uBBF8\uB10C\uD2B8 7th: \uADFC\uC74C G, \uC7A53\uB3C4 B, \uC644\uC8045\uB3C4 D, \uB2E87\uB3C4 F."),
            q("Fmaj7\uC758 \uAD6C\uC131\uC74C\uC740?", ["F A C E", "F A C E\u266D", "F A\u266D C E", "F A C G"], 0, "F \uBA54\uC774\uC800 7th: \uADFC\uC74C F, \uC7A53\uB3C4 A, \uC644\uC8045\uB3C4 C, \uC7A57\uB3C4 E."),
            q("Em7\u266D5\uC758 \uAD6C\uC131\uC74C\uC740?", ["E G B\u266D D", "E G\u266F B D", "E G B D", "E G B\u266D D\u266D"], 0, "E \uD558\uD504 \uB514\uBBF8\uB2C8\uC2DC\uB4DC: \uADFC\uC74C E, \uB2E83\uB3C4 G, \uAC105\uB3C4 B\u266D, \uB2E87\uB3C4 D."),
            q("\uADFC\uC74C D, 3\uC74C F\u266F, 5\uC74C A, 7\uC74C C\uB85C \uC774\uB8E8\uC5B4\uC9C4 \uCF54\uB4DC\uC758 \uC774\uB984\uC740?", ["D7", "Dmaj7", "Dm7", "Dm7\u266D5"], 0, "3\uC74C\uC774 \uC7A53\uB3C4(F\u266F)\uC774\uACE0 7\uC74C\uC774 \uB2E87\uB3C4(C)\uBA74 \uB3C4\uBBF8\uB10C\uD2B8 7th, D7\uC774\uC5D0\uC694."),
            q('"m7\u266D5"\uB294 \uB9C8\uC774\uB108 7th\uC5D0\uC11C \uBB34\uC5C7\uC744 \uBC14\uAFBC \uAC78\uAE4C\uC694?', ["5\uC74C\uC744 \uBC18\uC74C \uB0B4\uB9BC", "3\uC74C\uC744 \uBC18\uC74C \uC62C\uB9BC", "7\uC74C\uC744 \uBC18\uC74C \uC62C\uB9BC", "\uADFC\uC74C\uC744 \uBC18\uC74C \uB0B4\uB9BC"], 0, "\uC774\uB984 \uADF8\uB300\uB85C 5\uC74C\uC744 \uBC18\uC74C \uB0B4\uB9B0(\u266D5) \uBAA8\uC591\uC774\uC5D0\uC694."),
            build("**Fmaj7**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694.", "Fmaj7", { hint: false }),
            build("**D7**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uB808, \uD30C\u266F, \uB77C, \uB3C4)", "D7", { hint: false })
          ]
        },
        {
          id: "u5l4",
          title: "4\uD654\uC74C \uC885\uD569 \uC810\uAC80",
          minutes: 8,
          steps: [
            text("\uC720\uB2DB \uB9C8\uBB34\uB9AC", `4\uD654\uC74C 4\uC885\uB958\uB97C \uC18C\uB9AC\uB85C \uAD6C\uBD84\uD558\uACE0 \uAD6C\uC131\uC74C\uC744 \uCC3E\uC544 \uBCFC\uAC8C\uC694. \uD2C0\uB9B0 \uBB38\uC81C\uB294 \uB05D\uC5D0\uC11C \uD55C \uBC88 \uB354 \uB098\uC640\uC694.`),
            earC("\uC5B4\uB5A4 4\uD654\uC74C\uC77C\uAE4C\uC694?", "Dmaj7", ["maj7", "7", "m7", "m7\u266D5"], 0, "D \uBA54\uC774\uC800 7th\uC608\uC694."),
            earC("\uC5B4\uB5A4 4\uD654\uC74C\uC77C\uAE4C\uC694?", "A7", ["maj7", "7", "m7", "m7\u266D5"], 1, "A \uB3C4\uBBF8\uB10C\uD2B8 7th\uC608\uC694."),
            earC("\uC5B4\uB5A4 4\uD654\uC74C\uC77C\uAE4C\uC694?", "Em7", ["maj7", "7", "m7", "m7\u266D5"], 2, "E \uB9C8\uC774\uB108 7th\uC608\uC694."),
            earC("\uC5B4\uB5A4 4\uD654\uC74C\uC77C\uAE4C\uC694?", "Bm7\u266D5", ["maj7", "7", "m7", "m7\u266D5"], 3, "B \uD558\uD504 \uB514\uBBF8\uB2C8\uC2DC\uB4DC\uC608\uC694."),
            q("\uB3C4\uBBF8\uB10C\uD2B8 7th \uCF54\uB4DC\uB97C \uAC00\uB9AC\uD0A4\uB294 \uD45C\uAE30\uB294?", ["C7", "Cmaj7", "Cm7", "Cdim"], 0, "\uC22B\uC790 7\uB9CC \uC4F0\uB294 \uAC83\uC774 \uB3C4\uBBF8\uB10C\uD2B8 7th\uC608\uC694."),
            q("Am7\uC758 \uAD6C\uC131\uC74C\uC740?", ["A C E G", "A C\u266F E G", "A C E G\u266F", "A C E\u266D G"], 0, "A \uB9C8\uC774\uB108 7th: A, C(\uB2E83\uB3C4), E(\uC644\uC8045\uB3C4), G(\uB2E87\uB3C4)."),
            q("Bm7\u266D5\uC758 \uAD6C\uC131\uC74C\uC740?", ["B D F A", "B D F\u266F A", "B D\u266F F A", "B D F A\u266D"], 0, "B \uD558\uD504 \uB514\uBBF8\uB2C8\uC2DC\uB4DC: B, D(\uB2E83\uB3C4), F(\uAC105\uB3C4), A(\uB2E87\uB3C4)."),
            build("**Gmaj7**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uC194, \uC2DC, \uB808, \uD30C\u266F)", "Gmaj7", { hint: false }),
            build("**Em7**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uBBF8, \uC194, \uC2DC, \uB808)", "Em7", { hint: false })
          ]
        }
      ]
    },
    // ───────────────────────────────────────── 유닛 6
    {
      id: "u6",
      title: "\uB2E4\uC774\uC5B4\uD1A0\uB2C9 \uCF54\uB4DC",
      desc: "\uD55C \uD0A4 \uC548\uC5D0 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uC5B4\uC6B8\uB9AC\uB294 7\uAC1C\uC758 \uCF54\uB4DC\uB97C \uBC30\uC6CC\uC694.",
      lessons: [
        {
          id: "u6l1",
          title: "\uD0A4 \uC548\uC758 7\uAC1C \uCF54\uB4DC",
          minutes: 8,
          steps: [
            text(
              "\uC2A4\uCF00\uC77C\uC758 \uC74C \uD558\uB098\uD558\uB098\uAC00 \uCF54\uB4DC\uC758 \uADFC\uC74C\uC774 \uB3FC\uC694",
              `C \uBA54\uC774\uC800 \uC2A4\uCF00\uC77C(\uB3C4\uB808\uBBF8\uD30C\uC194\uB77C\uC2DC)\uC758 **\uAC01 \uC74C \uC704\uC5D0** \uADF8 \uC2A4\uCF00\uC77C\uC758 \uC74C\uB9CC \uC368\uC11C 3\uD654\uC74C\uC744 \uC313\uC544 \uBCFC\uAC8C\uC694. \uC774\uB807\uAC8C \uD55C \uD0A4\uC758 \uC74C\uB9CC\uC73C\uB85C \uB9CC\uB4E0 \uCF54\uB4DC\uB97C [[diatonic|\uB2E4\uC774\uC5B4\uD1A0\uB2C9 \uCF54\uB4DC]]\uB77C\uACE0 \uD574\uC694.

C \uBA54\uC774\uC800 \uD0A4\uC758 \uB2E4\uC774\uC5B4\uD1A0\uB2C9 3\uD654\uC74C:
**C - Dm - Em - F - G - Am - Bdim**

\uC885\uB958\uB97C \uBCF4\uBA74 **\uBA54\uC774\uC800 - \uB9C8\uC774\uB108 - \uB9C8\uC774\uB108 - \uBA54\uC774\uC800 - \uBA54\uC774\uC800 - \uB9C8\uC774\uB108 - \uAC10\uD654\uC74C** \uC21C\uC11C\uC608\uC694. \uC774 \uC21C\uC11C\uB294 \uC5B4\uB5A4 \uBA54\uC774\uC800 \uD0A4\uC5D0\uC11C\uB3C4 \uB611\uAC19\uC544\uC694!`
            ),
            listen(
              "C \uBA54\uC774\uC800 \uD0A4\uC758 7\uAC1C \uCF54\uB4DC\uB97C \uD558\uB098\uC529 \uB4E4\uC5B4 \uBCF4\uC138\uC694. \uB9C8\uC9C0\uB9C9\uC740 \uC21C\uC11C\uB300\uB85C \uC774\uC5B4\uC11C \uB4E4\uB824\uC918\uC694.",
              [
                ci("C", "1. C"),
                ci("Dm", "2. Dm"),
                ci("Em", "3. Em"),
                ci("F", "4. F"),
                ci("G", "5. G"),
                ci("Am", "6. Am"),
                ci("Bdim", "7. Bdim"),
                pi("1\u21927\u21921 \uC774\uC5B4\uC11C", "C Dm Em F G Am Bdim C", 0.8)
              ],
              WIDE
            ),
            q("C \uBA54\uC774\uC800 \uD0A4\uC5D0\uC11C 3\uBC88\uC9F8 \uC74C(\uBBF8) \uC704\uC5D0 \uC313\uC740 3\uD654\uC74C\uC740?", ["Em", "E", "Edim", "Eaug"], 0, "\uBBF8 - \uC194 - \uC2DC \u2192 E \uB9C8\uC774\uB108\uC608\uC694."),
            q("C \uBA54\uC774\uC800 \uD0A4\uC5D0\uC11C 6\uBC88\uC9F8 \uC74C(\uB77C) \uC704\uC758 3\uD654\uC74C\uC740?", ["Am", "A", "Adim", "A7"], 0, "\uB77C - \uB3C4 - \uBBF8 \u2192 A \uB9C8\uC774\uB108\uC608\uC694."),
            q("C \uBA54\uC774\uC800 \uD0A4\uC5D0\uC11C 7\uBC88\uC9F8 \uC74C(\uC2DC) \uC704\uC758 3\uD654\uC74C\uC740?", ["Bdim", "B", "Bm", "Baug"], 0, "\uC2DC - \uB808 - \uD30C \u2192 \uADFC\uC74C\uACFC 5\uC74C\uC774 \uD2B8\uB77C\uC774\uD1A4\uC778 B \uAC10\uD654\uC74C\uC774\uC5D0\uC694."),
            q("\uBA54\uC774\uC800 \uD0A4\uC758 \uB2E4\uC774\uC5B4\uD1A0\uB2C9 3\uD654\uC74C \uC885\uB958 \uC21C\uC11C\uB85C \uB9DE\uB294 \uAC83\uC740?", ["\uBA54\uC774\uC800\xB7\uB9C8\uC774\uB108\xB7\uB9C8\uC774\uB108\xB7\uBA54\uC774\uC800\xB7\uBA54\uC774\uC800\xB7\uB9C8\uC774\uB108\xB7\uAC10\uD654\uC74C", "\uB9C8\uC774\uB108\xB7\uB9C8\uC774\uB108\xB7\uBA54\uC774\uC800\xB7\uB9C8\uC774\uB108\xB7\uB9C8\uC774\uB108\xB7\uBA54\uC774\uC800\xB7\uAC10\uD654\uC74C", "\uBA54\uC774\uC800\xB7\uBA54\uC774\uC800\xB7\uBA54\uC774\uC800\xB7\uB9C8\uC774\uB108\xB7\uB9C8\uC774\uB108\xB7\uB9C8\uC774\uB108\xB7\uAC10\uD654\uC74C", "\uBA54\uC774\uC800\xB7\uB9C8\uC774\uB108\xB7\uBA54\uC774\uC800\xB7\uB9C8\uC774\uB108\xB7\uBA54\uC774\uC800\xB7\uB9C8\uC774\uB108\xB7\uAC10\uD654\uC74C"], 0, "\uC7A5\xB7\uB2E8\xB7\uB2E8\xB7\uC7A5\xB7\uC7A5\xB7\uB2E8\xB7\uAC10. \uBAA8\uB4E0 \uBA54\uC774\uC800 \uD0A4\uAC00 \uB611\uAC19\uC544\uC694."),
            q("G \uBA54\uC774\uC800 \uD0A4(G A B C D E F\u266F)\uC758 4\uBC88\uC9F8 \uCF54\uB4DC\uB294?", ["C", "Cm", "Am", "D"], 0, "4\uBC88\uC9F8 \uC74C C \uC704\uC5D0 \uC313\uC73C\uBA74 C - E - G, C \uBA54\uC774\uC800\uC608\uC694. 1\xB74\xB75\uBC88\uC9F8\uB294 \uBA54\uC774\uC800\uC608\uC694."),
            q("G \uBA54\uC774\uC800 \uD0A4\uC758 7\uBC88\uC9F8 \uCF54\uB4DC\uB294?", ["F\u266Fdim", "F\u266Fm", "F\u266F", "Fdim"], 0, "7\uBC88\uC9F8\uB294 \uD56D\uC0C1 \uAC10\uD654\uC74C\uC774\uC5D0\uC694. 7\uBC88\uC9F8 \uC74C\uC774 F\u266F\uC774\uBBC0\uB85C F\u266Fdim."),
            build("**Em**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (C \uBA54\uC774\uC800 \uD0A4\uC758 3\uBC88\uC9F8 \uCF54\uB4DC)", "Em", { hint: false })
          ]
        },
        {
          id: "u6l2",
          title: "\uB85C\uB9C8 \uC22B\uC790\uB85C \uBD80\uB974\uAE30",
          minutes: 8,
          steps: [
            text(
              "\uD0A4\uAC00 \uBC14\uB00C\uC5B4\uB3C4 \uBCC0\uD558\uC9C0 \uC54A\uB294 \uC774\uB984",
              `\uCF54\uB4DC\uB97C C, Dm, Em\u2026 \uC73C\uB85C \uBD80\uB974\uBA74 \uD0A4\uAC00 \uBC14\uB014 \uB54C\uB9C8\uB2E4 \uC774\uB984\uC774 \uBAA8\uB450 \uBC14\uB00C\uC5B4\uC694. \uADF8\uB798\uC11C **"\uBA87 \uBC88\uC9F8 \uC74C \uC704\uC758 \uCF54\uB4DC\uC778\uAC00"** \uB97C \uB85C\uB9C8 \uC22B\uC790\uB85C \uBD80\uB974\uB294 \uBC29\uBC95\uC744 \uC368\uC694. \uC774\uAC83\uC774 [[roman|\uB85C\uB9C8 \uC22B\uC790 \uD45C\uAE30]]\uC608\uC694.

**I - IIm - IIIm - IV - V - VIm - VIIdim**

C \uD0A4: C Dm Em F G Am Bdim
G \uD0A4: G Am Bm C D Em F\u266Fdim

\uB85C\uB9C8 \uC22B\uC790\uAC00 \uAC19\uC73C\uBA74 \uD0A4\uAC00 \uB2EC\uB77C\uB3C4 \uAC19\uC740 \uC790\uB9AC\uC758 \uCF54\uB4DC\uC608\uC694. "I-V-VIm-IV"\uB77C\uACE0\uB9CC \uB9D0\uD558\uBA74 \uC5B4\uB5A4 \uD0A4\uB85C\uB4E0 \uC5F0\uC8FC\uD560 \uC218 \uC788\uC5B4\uC694. \uC774\uB807\uAC8C \uACE1\uC758 \uAD6C\uC870\uB97C \uD0A4\uC640 \uC0C1\uAD00\uC5C6\uC774 \uB9D0\uD560 \uC218 \uC788\uC5B4\uC11C, \uACE1\uC744 \uB2E4\uB978 \uD0A4\uB85C \uC62E\uAE30\uAE30\uB3C4 \uC26C\uC6CC\uC694.`
            ),
            listen(
              "\uAC19\uC740 \uC9C4\uD589(I - V - VIm - IV)\uC744 \uB450 \uD0A4\uB85C \uB4E4\uC5B4 \uBCF4\uC138\uC694. \uB192\uC774\uB9CC \uB2E4\uB974\uACE0 \uB290\uB08C\uC740 \uB611\uAC19\uC544\uC694.",
              [pi("C \uD0A4: C \u2192 G \u2192 Am \u2192 F", "C G Am F"), pi("G \uD0A4: G \u2192 D \u2192 Em \u2192 C", "G D Em C"), pi("F \uD0A4: F \u2192 C \u2192 Dm \u2192 B\u266D", "F C Dm B\u266D")],
              WIDE
            ),
            q("G \uBA54\uC774\uC800 \uD0A4\uC5D0\uC11C V\uB294 \uC5B4\uB5A4 \uCF54\uB4DC\uC77C\uAE4C\uC694?", ["D", "C", "Em", "A"], 0, "G \uD0A4\uC758 5\uBC88\uC9F8 \uC74C\uC740 D\uC608\uC694. 5\uBC88\uC9F8 \uCF54\uB4DC\uB294 D."),
            q("F \uBA54\uC774\uC800 \uD0A4(F G A B\u266D C D E)\uC5D0\uC11C VIm\uC740?", ["Dm", "Gm", "Am", "Em"], 0, "6\uBC88\uC9F8 \uC74C D \uC704\uC758 \uB9C8\uC774\uB108 \uCF54\uB4DC, Dm\uC774\uC5D0\uC694."),
            q("D \uBA54\uC774\uC800 \uD0A4(D E F\u266F G A B C\u266F)\uC5D0\uC11C IV\uB294?", ["G", "Gm", "A", "Em"], 0, "4\uBC88\uC9F8 \uC74C G \uC704\uC758 \uCF54\uB4DC. IV\uB294 \uBA54\uC774\uC800\uC608\uC694."),
            q("C \uBA54\uC774\uC800 \uD0A4\uC758 Am\uC740 \uB85C\uB9C8 \uC22B\uC790\uB85C?", ["VIm", "IIm", "IIIm", "VIIdim"], 0, "A\uB294 6\uBC88\uC9F8 \uC74C\uC774\uACE0 \uB9C8\uC774\uB108 \uCF54\uB4DC\uB77C\uC11C VIm\uC774\uC5D0\uC694."),
            q("G \uBA54\uC774\uC800 \uD0A4\uC758 Em\uB3C4 \uB85C\uB9C8 \uC22B\uC790\uB85C\uB294?", ["VIm", "IIm", "IIIm", "IVm"], 0, "E\uB294 G \uD0A4\uC758 6\uBC88\uC9F8 \uC74C\uC774\uC5D0\uC694. \uAC19\uC740 VIm!"),
            play("C \uD0A4 I \u2192 IV \u2192 V \uCF54\uB4DC\uC758 **\uADFC\uC74C**\uC744 \uCC28\uB840\uB85C \uB20C\uB7EC \uBCF4\uC138\uC694. (\uB3C4, \uD30C, \uC194)", [0, 5, 7], [60, 72]),
            key("D \uBA54\uC774\uC800 \uD0A4 I - V - VIm - IV \uC5D0\uC11C **V\uC758 \uADFC\uC74C**\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 9, WIDE, "D \uD0A4\uC758 5\uBC88\uC9F8 \uC74C\uC740 A(\uB77C)\uC608\uC694.")
          ]
        },
        {
          id: "u6l3",
          title: "\uB2E4\uC774\uC5B4\uD1A0\uB2C9 4\uD654\uC74C",
          minutes: 8,
          steps: [
            text(
              "3\uD654\uC74C\uC5D0 7th\uB97C \uC5B9\uC5B4\uB3C4 \uB9C8\uCC2C\uAC00\uC9C0\uC608\uC694",
              `\uAC01 \uCF54\uB4DC \uC704\uC5D0 \uD55C \uCE78 \uB354 \uC313\uC544 4\uD654\uC74C\uC73C\uB85C \uB9CC\uB4E4\uC5B4\uB3C4 \uC2A4\uCF00\uC77C\uC758 \uC74C\uB9CC \uC4F0\uBA74 \uB3FC\uC694. C \uBA54\uC774\uC800 \uD0A4\uB77C\uBA74:

**Cmaj7 - Dm7 - Em7 - Fmaj7 - G7 - Am7 - Bm7\u266D5**

\uB85C\uB9C8 \uC22B\uC790\uB85C\uB294 **Imaj7 - IIm7 - IIIm7 - IVmaj7 - V7 - VIm7 - VIIm7\u266D5**

\uB208\uC5EC\uACA8\uBCFC \uC810\uC774 \uC788\uC5B4\uC694. \uB3C4\uBBF8\uB10C\uD2B8 7th\uB294 **V7 \uD558\uB098\uBFD0**\uC774\uC5D0\uC694. \uC774 \uAE34\uC7A5\uB418\uB294 \uCF54\uB4DC\uAC00 \uB2E4\uC74C \uC720\uB2DB\uC5D0\uC11C \uAC00\uC7A5 \uC911\uC694\uD55C \uC5ED\uD560\uC744 \uD574\uC694.`
            ),
            listen(
              "C \uBA54\uC774\uC800 \uD0A4\uC758 4\uD654\uC74C 7\uAC1C\uB97C \uD558\uB098\uC529 \uB4E4\uC5B4 \uBCF4\uC138\uC694.",
              [
                ci("Cmaj7", "Imaj7 = Cmaj7"),
                ci("Dm7", "IIm7 = Dm7"),
                ci("Em7", "IIIm7 = Em7"),
                ci("Fmaj7", "IVmaj7 = Fmaj7"),
                ci("G7", "V7 = G7"),
                ci("Am7", "VIm7 = Am7"),
                ci("Bm7\u266D5", "VIIm7\u266D5 = Bm7\u266D5"),
                pi("1\u21927\u21921 \uC774\uC5B4\uC11C", "Cmaj7 Dm7 Em7 Fmaj7 G7 Am7 Bm7\u266D5 Cmaj7", 0.9)
              ],
              WIDE
            ),
            q("\uBA54\uC774\uC800 \uD0A4\uC758 \uB2E4\uC774\uC5B4\uD1A0\uB2C9 4\uD654\uC74C \uC911 \uB3C4\uBBF8\uB10C\uD2B8 7th(7)\uB294 \uBA87 \uBC88\uC9F8\uC77C\uAE4C\uC694?", ["V (5\uBC88\uC9F8)", "I (1\uBC88\uC9F8)", "IV (4\uBC88\uC9F8)", "VII (7\uBC88\uC9F8)"], 0, "V7\uB9CC \uB3C4\uBBF8\uB10C\uD2B8 7th\uC608\uC694. I\uC640 IV\uB294 maj7\uC774\uC5D0\uC694."),
            q("D \uBA54\uC774\uC800 \uD0A4\uC758 V7\uC740?", ["A7", "Am7", "Amaj7", "G7"], 0, "D \uD0A4\uC758 5\uBC88\uC9F8 \uC74C A \uC704\uC758 \uB3C4\uBBF8\uB10C\uD2B8 7th, A7\uC774\uC5D0\uC694."),
            q("F \uBA54\uC774\uC800 \uD0A4\uC758 IIm7\uC740?", ["Gm7", "Gmaj7", "G7", "Am7"], 0, "F \uD0A4\uC758 2\uBC88\uC9F8 \uC74C\uC740 G\uC608\uC694. G \uB9C8\uC774\uB108 7th, Gm7\uC774\uC5D0\uC694."),
            q("G \uBA54\uC774\uC800 \uD0A4\uC758 VIIm7\u266D5\uB294?", ["F\u266Fm7\u266D5", "F\u266Fm7", "F\u266F7", "Fm7\u266D5"], 0, "G \uD0A4\uC758 7\uBC88\uC9F8 \uC74C\uC740 F\u266F\uC774\uC5D0\uC694. 7\uBC88\uC9F8 4\uD654\uC74C\uC740 \uD56D\uC0C1 m7\u266D5\uC608\uC694."),
            q("\uBA54\uC774\uC800 \uD0A4\uC758 \uB2E4\uC774\uC5B4\uD1A0\uB2C9 4\uD654\uC74C \uC885\uB958 \uC21C\uC11C\uB294?", ["maj7\xB7m7\xB7m7\xB7maj7\xB77\xB7m7\xB7m7\u266D5", "m7\xB7maj7\xB7maj7\xB7m7\xB7m7\xB77\xB7m7\u266D5", "maj7\xB7maj7\xB7m7\xB77\xB7m7\xB7maj7\xB7m7\u266D5", "7\xB7m7\xB7m7\xB7maj7\xB7maj7\xB7m7\xB7m7\u266D5"], 0, "maj7 - m7 - m7 - maj7 - 7 - m7 - m7\u266D5. \uC5B4\uB5A4 \uBA54\uC774\uC800 \uD0A4\uC5D0\uC11C\uB3C4 \uB611\uAC19\uC544\uC694."),
            earC("\uC774 \uCF54\uB4DC\uB294 \uC5B4\uB5A4 \uC790\uB9AC\uC758 \uCF54\uB4DC\uC77C\uAE4C\uC694? (C \uBA54\uC774\uC800 \uD0A4)", "G7", ["Imaj7 (Cmaj7)", "IVmaj7 (Fmaj7)", "V7 (G7)", "VIm7 (Am7)"], 2, "G7\uC740 \uAE34\uC7A5\uAC10 \uC788\uB294 \uB3C4\uBBF8\uB10C\uD2B8 7th, V7\uC774\uC5D0\uC694."),
            build("**Dm7**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (C \uD0A4\uC758 IIm7)", "Dm7", { hint: false })
          ]
        },
        {
          id: "u6l4",
          title: "\uB9C8\uC774\uB108 \uD0A4\uC758 \uCF54\uB4DC",
          minutes: 8,
          steps: [
            text(
              "\uB098\uB780\uD55C\uC870\uC758 \uCF54\uB4DC\uB97C \uB2E4\uB978 \uC790\uB9AC\uC5D0\uC11C \uC2DC\uC791\uD574\uC694",
              `A \uB9C8\uC774\uB108 \uD0A4\uB294 C \uBA54\uC774\uC800 \uD0A4\uC640 \uAC19\uC740 \uC74C\uC744 \uC4F0\uB2C8\uAE4C **\uCF54\uB4DC\uB3C4 \uB611\uAC19\uC544\uC694.** \uB2E4\uB9CC \uC73C\uB738\uC774 \uB418\uB294 \uCF54\uB4DC\uAC00 Am\uC73C\uB85C \uBC14\uB00C\uC5B4\uC694.

A \uB9C8\uC774\uB108 \uD0A4\uC758 4\uD654\uC74C:
**Am7 - Bm7\u266D5 - Cmaj7 - Dm7 - Em7 - Fmaj7 - G7**

\uB9C8\uC774\uB108 \uD0A4\uC758 \uB85C\uB9C8 \uC22B\uC790\uB294 \uBA54\uC774\uC800 \uC2A4\uCF00\uC77C\uC744 \uAE30\uC900\uC73C\uB85C \uD574\uC11C 3, 6, 7\uBC88\uC9F8\uC5D0 \u266D\uC744 \uBD99\uC5EC \uC368\uC694.
**Im7 - IIm7\u266D5 - \u266DIIImaj7 - IVm7 - Vm7 - \u266DVImaj7 - \u266DVII7**

\uADF8\uB7F0\uB370 \uC2E4\uC81C \uACE1\uC5D0\uC11C\uB294 V\uB97C **Em7 \uB300\uC2E0 E7**(\uB3C4\uBBF8\uB10C\uD2B8 7th)\uB85C \uBC14\uAFD4 \uC4F0\uB294 \uACBD\uC6B0\uAC00 \uC544\uC8FC \uB9CE\uC544\uC694. \uC774\uAC74 [[harmonic-minor|\uD558\uBAA8\uB2C9 \uB9C8\uC774\uB108]]\uC5D0\uC11C 7\uBC88\uC9F8 \uC74C(\uC194\u266F)\uC774 \uC62C\uB77C\uAC00\uC11C \uC0DD\uAE30\uB294 \uCF54\uB4DC\uC608\uC694.`
            ),
            listen(
              "A \uB9C8\uC774\uB108 \uD0A4\uC758 \uCF54\uB4DC\uB97C \uB4E4\uC5B4 \uBCF4\uC138\uC694. \uB9C8\uC9C0\uB9C9\uC5D0\uB294 Em7\uACFC E7\uC744 \uBE44\uAD50\uD574 \uBCF4\uC138\uC694.",
              [
                pi("A \uB9C8\uC774\uB108 \uD0A4 7\uAC1C \uCF54\uB4DC", "Am7 Bm7\u266D5 Cmaj7 Dm7 Em7 Fmaj7 G7 Am7", 0.9),
                ci("Em7", "Em7 (\uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108\uC758 V)"),
                ci("E7", "E7 (\uD558\uBAA8\uB2C9 \uB9C8\uC774\uB108\uC758 V)")
              ],
              WIDE
            ),
            q("A \uB9C8\uC774\uB108 \uD0A4\uC758 \uC73C\uB738 \uCF54\uB4DC(I)\uB294?", ["Am7", "Amaj7", "A7", "Am7\u266D5"], 0, "\uB9C8\uC774\uB108 \uD0A4\uC758 I\uB294 \uB9C8\uC774\uB108 \uCF54\uB4DC\uC608\uC694. Am7."),
            q("A \uB9C8\uC774\uB108 \uD0A4\uC5D0\uC11C II \uCF54\uB4DC\uB294?", ["Bm7\u266D5", "Bm7", "Bmaj7", "B7"], 0, "2\uBC88\uC9F8 \uC74C B \uC704\uC758 \uCF54\uB4DC\uB294 \uAC105\uB3C4\uAC00 \uC788\uB294 Bm7\u266D5\uC608\uC694."),
            q("A \uB9C8\uC774\uB108 \uD0A4\uC758 \u266DVII\uB294?", ["G7", "Gmaj7", "Gm7", "Gdim"], 0, "7\uBC88\uC9F8 \uC74C G \uC704\uC758 \uCF54\uB4DC\uB294 \uB3C4\uBBF8\uB10C\uD2B8 7th, G7\uC774\uC5D0\uC694."),
            q("A \uB9C8\uC774\uB108 \uD0A4\uC758 \u266DIII \uCF54\uB4DC\uB294?", ["Cmaj7", "Cm7", "C7", "Cm7\u266D5"], 0, "3\uBC88\uC9F8 \uC74C C \uC704\uC758 \uCF54\uB4DC\uB294 Cmaj7\uC774\uC5D0\uC694. \uB098\uB780\uD55C\uC870 C \uD0A4\uC758 I\uC640 \uAC19\uC740 \uCF54\uB4DC\uC608\uC694."),
            earC("\uB4E4\uB824\uC8FC\uB294 \uCF54\uB4DC\uB294 \uC5B4\uB290 \uCABD\uC77C\uAE4C\uC694?", "E7", ["Em7 (\uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108\uC758 V)", "E7 (\uD558\uBAA8\uB2C9 \uB9C8\uC774\uB108\uC758 V)"], 1, "3\uC74C\uC774 \uC62C\uB77C\uAC04 \uB3C4\uBBF8\uB10C\uD2B8 7th(E7)\uC608\uC694. \uAE34\uC7A5\uAC10\uC774 \uD6E8\uC52C \uAC15\uD574\uC694."),
            q("C \uBA54\uC774\uC800 \uD0A4\uC640 A \uB9C8\uC774\uB108 \uD0A4\uC758 \uB2E4\uC774\uC5B4\uD1A0\uB2C9 \uCF54\uB4DC\uB294 \uC5B4\uB5A4 \uAD00\uACC4\uC77C\uAE4C\uC694?", ["\uC4F0\uB294 \uCF54\uB4DC\uAC00 \uAC19\uACE0 \uC2DC\uC791\uD558\uB294 \uC790\uB9AC\uB9CC \uB2E4\uB974\uB2E4", "\uC644\uC804\uD788 \uB2E4\uB978 \uCF54\uB4DC\uB97C \uC4F4\uB2E4", "\uCF54\uB4DC \uC885\uB958 \uC21C\uC11C\uAC00 \uBC18\uB300\uB2E4", "\uD0A4 \uC911 \uD558\uB098\uB294 \uCF54\uB4DC\uAC00 \uC5C6\uB2E4"], 0, "\uB098\uB780\uD55C\uC870\uB294 \uC4F0\uB294 \uC74C\uC774 \uAC19\uC544\uC11C \uCF54\uB4DC\uB3C4 \uAC19\uC544\uC694.")
          ]
        }
      ]
    },
    // ───────────────────────────────────────── 유닛 7
    {
      id: "u7",
      title: "\uCF54\uB4DC\uC758 \uAE30\uB2A5",
      desc: "\uD1A0\uB2C9\xB7\uC11C\uBE0C\uB3C4\uBBF8\uB10C\uD2B8\xB7\uB3C4\uBBF8\uB10C\uD2B8, \uCF54\uB4DC\uAC00 \uB9E1\uB294 \uC138 \uAC00\uC9C0 \uC5ED\uD560\uC744 \uBC30\uC6CC\uC694.",
      lessons: [
        {
          id: "u7l1",
          title: "\uC138 \uAC00\uC9C0 \uC5ED\uD560: T, SD, D",
          minutes: 8,
          steps: [
            text(
              "\uCF54\uB4DC\uB4E4\uC740 \uC774\uC57C\uAE30 \uC18D \uBC30\uC5ED\uCC98\uB7FC \uC5ED\uD560\uC774 \uC788\uC5B4\uC694",
              `\uD0A4 \uC548\uC758 \uCF54\uB4DC 7\uAC1C\uB294 \uAC01\uC790 **\uC5ED\uD560(\uAE30\uB2A5)** \uC774 \uC788\uC5B4\uC694. \uD06C\uAC8C \uC138 \uAC00\uC9C0\uB85C \uB098\uB220\uC694.

- [[tonic-chord|\uD1A0\uB2C9(T)]]: **\uC9D1**. \uC548\uC815\uB418\uACE0 \uD3B8\uC548\uD55C \uCF54\uB4DC. \uACE1\uC774 \uC2DC\uC791\uD558\uACE0 \uB05D\uB098\uB294 \uACF3. \u2192 **I, VIm** (IIIm\uB3C4 \uC5EC\uAE30\uC5D0 \uAC00\uAE4C\uC6CC\uC694)
- [[subdominant|\uC11C\uBE0C\uB3C4\uBBF8\uB10C\uD2B8(SD)]]: **\uC9D1\uC744 \uB5A0\uB0A8**. \uC6C0\uC9C1\uC774\uAE30 \uC2DC\uC791\uD558\uB294 \uC57D\uD55C \uAE34\uC7A5. \u2192 **IV, IIm**
- [[dominant|\uB3C4\uBBF8\uB10C\uD2B8(D)]]: **\uC9D1\uC73C\uB85C \uB3CC\uC544\uAC00\uACE0 \uC2F6\uC740 \uAE34\uC7A5**. \uAC00\uC7A5 \uD070 \uAE34\uC7A5. \u2192 **V(V7), VIIm7\u266D5**

\uD754\uD55C \uD750\uB984\uC740 \uC774\uB798\uC694.
**T (\uC9D1) \u2192 SD (\uCD9C\uBC1C) \u2192 D (\uAE34\uC7A5) \u2192 T (\uB3CC\uC544\uC634)**

\uC774 [[function|\uAE30\uB2A5]]\uC744 \uC54C\uBA74 \uCF54\uB4DC\uB97C \uC678\uC6B0\uB294 \uB300\uC2E0 "\uC774\uC57C\uAE30\uC758 \uD750\uB984"\uC73C\uB85C \uC774\uD574\uD560 \uC218 \uC788\uC5B4\uC694.`
            ),
            listen(
              "C \uD0A4\uC758 \uC138 \uAC00\uC9C0 \uAE30\uB2A5\uC744 \uC18C\uB9AC\uB85C \uB290\uAEF4 \uBCF4\uC138\uC694. \uB9C8\uC9C0\uB9C9\uC740 T \u2192 SD \u2192 D \u2192 T \uD750\uB984 \uC804\uCCB4\uC608\uC694.",
              [
                ci("Cmaj7", "T: Cmaj7 (\uC9D1)"),
                ci("Fmaj7", "SD: Fmaj7 (\uCD9C\uBC1C)"),
                ci("G7", "D: G7 (\uAE34\uC7A5)"),
                pi("T \u2192 SD \u2192 D \u2192 T", "C F G7 C", 1)
              ],
              WIDE
            ),
            q("\uC9D1\uCC98\uB7FC \uC548\uC815\uB418\uACE0 \uD3B8\uC548\uD55C \uC5ED\uD560\uC744 \uD558\uB294 \uAE30\uB2A5\uC740?", ["\uD1A0\uB2C9 (T)", "\uC11C\uBE0C\uB3C4\uBBF8\uB10C\uD2B8 (SD)", "\uB3C4\uBBF8\uB10C\uD2B8 (D)", "\uC625\uD0C0\uBE0C"], 0, '\uD1A0\uB2C9\uC740 \uACE1\uC774 \uC2DC\uC791\uD558\uACE0 \uB05D\uB098\uB294 "\uC9D1"\uC774\uC5D0\uC694.'),
            q("\uAC00\uC7A5 \uD070 \uAE34\uC7A5\uC744 \uB9CC\uB4E4\uC5B4\uC11C \uD1A0\uB2C9\uC73C\uB85C \uB3CC\uC544\uAC00\uACE0 \uC2F6\uAC8C \uD558\uB294 \uAE30\uB2A5\uC740?", ["\uB3C4\uBBF8\uB10C\uD2B8 (D)", "\uD1A0\uB2C9 (T)", "\uC11C\uBE0C\uB3C4\uBBF8\uB10C\uD2B8 (SD)", "\uD574\uACB0"], 0, "\uB3C4\uBBF8\uB10C\uD2B8\uB294 \uAE34\uC7A5\uC774 \uAC00\uC7A5 \uCEE4\uC694."),
            q("C \uBA54\uC774\uC800 \uD0A4\uC5D0\uC11C G7\uC758 \uAE30\uB2A5\uC740?", ["\uB3C4\uBBF8\uB10C\uD2B8 (D)", "\uD1A0\uB2C9 (T)", "\uC11C\uBE0C\uB3C4\uBBF8\uB10C\uD2B8 (SD)", "\uAE30\uB2A5\uC774 \uC5C6\uB2E4"], 0, "G7\uC740 V7\uC774\uB77C \uB3C4\uBBF8\uB10C\uD2B8\uC608\uC694."),
            q("C \uBA54\uC774\uC800 \uD0A4\uC5D0\uC11C F(IV)\uC758 \uAE30\uB2A5\uC740?", ["\uC11C\uBE0C\uB3C4\uBBF8\uB10C\uD2B8 (SD)", "\uD1A0\uB2C9 (T)", "\uB3C4\uBBF8\uB10C\uD2B8 (D)", "\uAE30\uB2A5\uC774 \uC5C6\uB2E4"], 0, "IV\uB294 \uC11C\uBE0C\uB3C4\uBBF8\uB10C\uD2B8\uC608\uC694."),
            q("C \uBA54\uC774\uC800 \uD0A4\uC5D0\uC11C Am(VIm)\uC758 \uAE30\uB2A5\uC740?", ["\uD1A0\uB2C9 (T)", "\uC11C\uBE0C\uB3C4\uBBF8\uB10C\uD2B8 (SD)", "\uB3C4\uBBF8\uB10C\uD2B8 (D)", "\uAE30\uB2A5\uC774 \uC5C6\uB2E4"], 0, 'VIm\uC740 I\uACFC \uAC19\uC740 \uD1A0\uB2C9 \uAE30\uB2A5\uC774\uC5D0\uC694. (VIm\uC740 I\uC758 "\uB9C8\uC774\uB108 \uBC84\uC804" \uAC19\uC740 \uB290\uB08C)')
          ]
        },
        {
          id: "u7l2",
          title: "\uB3C4\uBBF8\uB10C\uD2B8\uB294 \uC65C \uAE34\uC7A5\uB420\uAE4C?",
          minutes: 8,
          steps: [
            text(
              "\uD2B8\uB77C\uC774\uD1A4\uC774 \uC228\uC5B4 \uC788\uC5B4\uC694",
              `G7(\uC194 \uC2DC \uB808 \uD30C)\uC744 \uC790\uC138\uD788 \uBCF4\uBA74 **\uC2DC(B)\uC640 \uD30C(F)** \uC0AC\uC774\uAC00 \uBC18\uC74C 6\uAC1C, \uC720\uB2DB 1\uC5D0\uC11C \uBC30\uC6B4 [[tritone|\uD2B8\uB77C\uC774\uD1A4]]\uC774\uC5D0\uC694. \uBD88\uC548\uC815\uD55C \uC18C\uB9AC\uAC00 \uC774 \uCF54\uB4DC\uC758 \uAE34\uC7A5\uAC10\uC758 \uC815\uCCB4\uC608\uC694.

\uC774 \uBD88\uC548\uD55C \uB450 \uC74C\uC774 C \uCF54\uB4DC\uB85C \uAC00\uBA74 \uD55C \uBC88\uC5D0 \uD480\uB824\uC694.
- \uC2DC(B) \u2192 \uB3C4(C): \uBC18\uC74C **\uC704\uB85C**
- \uD30C(F) \u2192 \uBBF8(E): \uBC18\uC74C **\uC544\uB798\uB85C**

\uB450 \uC74C\uC774 \uBC18\uC74C\uC529\uB9CC \uC6C0\uC9C1\uC774\uBA74 \uC548\uC815\uB41C C \uCF54\uB4DC\uC758 \uC74C(\uB3C4, \uBBF8)\uC774 \uB3FC\uC694. \uC774\uB807\uAC8C \uAE34\uC7A5\uC774 \uD480\uB9AC\uB294 \uAC83\uC744 [[resolution|\uD574\uACB0]]\uC774\uB77C\uACE0 \uD574\uC694. \uADF8\uB798\uC11C **V7 \u2192 I**\uAC00 \uAC00\uC7A5 \uAC15\uB825\uD558\uACE0 \uC790\uC5F0\uC2A4\uB7EC\uC6B4 \uB05D\uB9FA\uC74C\uC774\uC5D0\uC694.`
            ),
            listen(
              "\uAE34\uC7A5\uACFC \uD574\uACB0\uC744 \uC9C1\uC811 \uB4E4\uC5B4 \uBCF4\uC138\uC694.",
              [
                ci("G7", "G7\uB9CC (\uB05D\uB098\uC9C0 \uC54A\uC740 \uB290\uB08C)"),
                { label: "G7 \uC18D \uC2DC\uC640 \uD30C (\uD2B8\uB77C\uC774\uD1A4)", midis: [71, 77], mode: "both" },
                pi("G7 \u2192 C (\uD574\uACB0)", "G7 C", 1),
                pi("G7 \u2192 Am (\uC608\uC0C1 \uBC16\uC73C\uB85C \uD480\uB9BC)", "G7 Am", 1)
              ],
              WIDE
            ),
            build("**G7**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. \uC2DC(B)\uC640 \uD30C(F)\uAC00 \uAE34\uC7A5\uC758 \uC8FC\uC778\uACF5\uC774\uC5D0\uC694.", "G7"),
            earP("\uC774 \uC9C4\uD589\uC740 \uB05D\uB09C \uB290\uB08C\uC77C\uAE4C\uC694, \uC544\uC9C1 \uAC00\uB294 \uC911\uC778 \uB290\uB08C\uC77C\uAE4C\uC694?", prog("G7 C"), ["\uB05D\uB09C \uB290\uB08C (\uD574\uACB0\uB428)", "\uC544\uC9C1 \uB05D\uB098\uC9C0 \uC54A\uC740 \uB290\uB08C"], 0, "G7\uC5D0\uC11C C\uB85C \uD480\uB824\uC11C \uD3B8\uC548\uD558\uAC8C \uB05D\uB09C \uB290\uB08C\uC774\uC5D0\uC694.", 1),
            earP("\uC774 \uC9C4\uD589\uC740 \uB05D\uB09C \uB290\uB08C\uC77C\uAE4C\uC694, \uC544\uC9C1 \uAC00\uB294 \uC911\uC778 \uB290\uB08C\uC77C\uAE4C\uC694?", prog("C G7"), ["\uB05D\uB09C \uB290\uB08C (\uD574\uACB0\uB428)", "\uC544\uC9C1 \uB05D\uB098\uC9C0 \uC54A\uC740 \uB290\uB08C"], 1, "G7\uB85C \uB05D\uB098\uC11C \uAE34\uC7A5\uC774 \uD480\uB9AC\uC9C0 \uC54A\uC558\uC5B4\uC694. \uB2E4\uC74C \uCF54\uB4DC\uB97C \uAE30\uB2E4\uB9AC\uAC8C \uB3FC\uC694.", 1),
            q("G7\uC758 \uC2DC(B)\uC640 \uD30C(F) \uC0AC\uC774\uC758 \uC74C\uC815\uC740?", ["\uD2B8\uB77C\uC774\uD1A4", "\uC644\uC8045\uB3C4", "\uC7A53\uB3C4", "\uC644\uC8044\uB3C4"], 0, "\uBC18\uC74C 6\uAC1C, \uD2B8\uB77C\uC774\uD1A4\uC774\uC5D0\uC694."),
            q("G7\uC774 \uAC00\uC7A5 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uD574\uACB0\uB418\uB294 \uCF54\uB4DC\uB294?", ["C (\uB610\uB294 Cmaj7)", "D", "Em", "A"], 0, "V7 \u2192 I. G7\uC740 C\uB85C \uB3CC\uC544\uAC00\uC694."),
            key("G7\uC5D0\uC11C \uC2DC(B)\uB294 \uBC18\uC74C \uC704\uB85C \uD574\uACB0\uB3FC\uC694. **\uD574\uACB0\uB418\uB294 \uC74C**\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 0, WIDE, "\uC2DC(B)\uB294 \uBC18\uC74C \uC704\uC758 \uB3C4(C)\uB85C \uAC00\uC694."),
            key("G7\uC758 7\uC74C\uC778 \uD30C(F)\uB294 \uBC18\uC74C \uC544\uB798\uB85C \uD574\uACB0\uB3FC\uC694. **\uD574\uACB0\uB418\uB294 \uC74C**\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 4, WIDE, "\uD30C(F)\uB294 \uBC18\uC74C \uC544\uB798\uC758 \uBBF8(E)\uB85C \uAC00\uC694.")
          ]
        },
        {
          id: "u7l3",
          title: "\uAE30\uB2A5\uC73C\uB85C \uCF54\uB4DC \uBD84\uB958\uD558\uAE30",
          minutes: 8,
          steps: [
            text(
              "\uAC19\uC740 \uAE30\uB2A5\uB07C\uB9AC\uB294 \uBC14\uAFD4 \uC4F8 \uC218 \uC788\uC5B4\uC694",
              `\uAE30\uB2A5\uC774 \uAC19\uC740 \uCF54\uB4DC\uB294 \uBE44\uC2B7\uD55C \uC5ED\uD560\uC744 \uD574\uC11C **\uC11C\uB85C \uBC14\uAFD4 \uC368\uB3C4 \uAC19\uC740 \uD750\uB984**\uC774 \uB3FC\uC694. \uC608\uB97C \uB4E4\uC5B4 \uC11C\uBE0C\uB3C4\uBBF8\uB10C\uD2B8\uC778 F(IV)\uB97C Dm(IIm)\uC73C\uB85C \uBC14\uAFD4\uB3C4 "\uCD9C\uBC1C \u2192 \uAE34\uC7A5 \u2192 \uC9D1" \uC774\uC57C\uAE30\uB294 \uADF8\uB300\uB85C\uC608\uC694. \uBD84\uC704\uAE30\uB9CC \uC870\uAE08 \uB2EC\uB77C\uC838\uC694.

\uC815\uB9AC\uD558\uBA74 \uC774\uB807\uAC8C \uB3FC\uC694 (C \uD0A4 \uAE30\uC900).
- **T**: C(I), Am(VIm), Em(IIIm)
- **SD**: F(IV), Dm(IIm)
- **D**: G(V), Bdim(VIIdim)

IIIm(Em)\uC740 \uD1A0\uB2C9\uC73C\uB85C \uBD84\uB958\uD558\uC9C0\uB9CC \uC5ED\uD560\uC774 \uC560\uB9E4\uD574\uC11C, \uC774 \uBD80\uBD84\uC740 \uB098\uC911\uC5D0 \uB2E4\uC2DC \uB2E4\uB8F0\uAC8C\uC694. \uC9C0\uAE08\uC740 I, VIm / IV, IIm / V \uC774 \uB2E4\uC12F \uCF54\uB4DC\uB9CC \uD655\uC2E4\uD788 \uC775\uD788\uBA74 \uCDA9\uBD84\uD574\uC694.`
            ),
            listen(
              "\uAC19\uC740 \uAE30\uB2A5\uC758 \uCF54\uB4DC\uB97C \uBC14\uAFD4 \uB07C\uC6B4 \uB450 \uC9C4\uD589\uC744 \uBE44\uAD50\uD574 \uBCF4\uC138\uC694.",
              [pi("C \u2192 F \u2192 G7 \u2192 C (SD = F)", "C F G7 C", 1), pi("C \u2192 Dm \u2192 G7 \u2192 C (SD = Dm)", "C Dm G7 C", 1), pi("C \u2192 Am \u2192 F \u2192 G7 (T = Am)", "C Am F G7", 1)],
              WIDE
            ),
            q("C \uD0A4\uC5D0\uC11C Dm(IIm)\uC758 \uAE30\uB2A5\uC740?", ["\uC11C\uBE0C\uB3C4\uBBF8\uB10C\uD2B8 (SD)", "\uD1A0\uB2C9 (T)", "\uB3C4\uBBF8\uB10C\uD2B8 (D)", "\uAE30\uB2A5\uC774 \uC5C6\uB2E4"], 0, "IIm\uC740 IV\uC640 \uAC19\uC740 \uC11C\uBE0C\uB3C4\uBBF8\uB10C\uD2B8\uC608\uC694."),
            q("G \uD0A4\uC5D0\uC11C D(V) \uCF54\uB4DC\uC758 \uAE30\uB2A5\uC740?", ["\uB3C4\uBBF8\uB10C\uD2B8 (D)", "\uD1A0\uB2C9 (T)", "\uC11C\uBE0C\uB3C4\uBBF8\uB10C\uD2B8 (SD)", "\uAE30\uB2A5\uC774 \uC5C6\uB2E4"], 0, "\uC5B4\uB5A4 \uD0A4\uB4E0 V\uB294 \uB3C4\uBBF8\uB10C\uD2B8\uC608\uC694."),
            q("D \uD0A4\uC5D0\uC11C G(IV) \uCF54\uB4DC\uC758 \uAE30\uB2A5\uC740?", ["\uC11C\uBE0C\uB3C4\uBBF8\uB10C\uD2B8 (SD)", "\uD1A0\uB2C9 (T)", "\uB3C4\uBBF8\uB10C\uD2B8 (D)", "\uAE30\uB2A5\uC774 \uC5C6\uB2E4"], 0, "D \uD0A4\uC758 4\uBC88\uC9F8 \uCF54\uB4DC G\uB294 \uC11C\uBE0C\uB3C4\uBBF8\uB10C\uD2B8\uC608\uC694."),
            q("F \uD0A4\uC5D0\uC11C Dm(VIm) \uCF54\uB4DC\uC758 \uAE30\uB2A5\uC740?", ["\uD1A0\uB2C9 (T)", "\uC11C\uBE0C\uB3C4\uBBF8\uB10C\uD2B8 (SD)", "\uB3C4\uBBF8\uB10C\uD2B8 (D)", "\uAE30\uB2A5\uC774 \uC5C6\uB2E4"], 0, "VIm\uC740 \uD1A0\uB2C9 \uAE30\uB2A5\uC774\uC5D0\uC694. F \uD0A4\uC758 6\uBC88\uC9F8 \uCF54\uB4DC\uAC00 Dm\uC774\uC5D0\uC694."),
            q("C \uD0A4\uC5D0\uC11C Bdim(VIIdim)\uC758 \uAE30\uB2A5\uC740?", ["\uB3C4\uBBF8\uB10C\uD2B8 (D)", "\uD1A0\uB2C9 (T)", "\uC11C\uBE0C\uB3C4\uBBF8\uB10C\uD2B8 (SD)", "\uAE30\uB2A5\uC774 \uC5C6\uB2E4"], 0, "VIIdim\uC740 \uD2B8\uB77C\uC774\uD1A4\uC744 \uD488\uACE0 \uC788\uC5B4\uC11C \uB3C4\uBBF8\uB10C\uD2B8 \uAE30\uB2A5\uC774\uC5D0\uC694."),
            q('"C \u2192 F \u2192 G7 \u2192 C"\uC5D0\uC11C F\uB97C \uAC19\uC740 \uAE30\uB2A5\uC758 \uCF54\uB4DC\uB85C \uBC14\uAFBC\uB2E4\uBA74?', ["Dm", "Am", "Em", "G"], 0, "F\uB294 \uC11C\uBE0C\uB3C4\uBBF8\uB10C\uD2B8\uC608\uC694. \uAC19\uC740 \uAE30\uB2A5\uC758 Dm\uC73C\uB85C \uBC14\uAFC0 \uC218 \uC788\uC5B4\uC694."),
            q('"C \u2192 G7 \u2192 C"\uC5D0\uC11C C\uB97C \uAC19\uC740 \uAE30\uB2A5\uC758 \uCF54\uB4DC\uB85C \uBC14\uAFD4\uC11C \uC2DC\uC791\uD55C\uB2E4\uBA74?', ["Am", "Dm", "F", "G"], 0, "C\uB294 \uD1A0\uB2C9\uC774\uC5D0\uC694. \uAC19\uC740 \uAE30\uB2A5\uC758 Am(VIm)\uC73C\uB85C \uBC14\uAFC0 \uC218 \uC788\uC5B4\uC694.")
          ]
        },
        {
          id: "u7l4",
          title: "\uAE30\uB2A5\uC73C\uB85C \uCF54\uB4DC \uC9C4\uD589 \uC77D\uAE30",
          minutes: 9,
          steps: [
            text(
              "\uC9C4\uC9DC \uACE1\uC5D0\uC11C \uC4F0\uB294 \uCF54\uB4DC \uC9C4\uD589",
              `\uC774\uC81C \uAE30\uB2A5\uC73C\uB85C \uC2E4\uC81C \uACE1\uC5D0\uC11C \uC790\uC8FC \uC4F0\uB294 \uC9C4\uD589\uC744 \uC77D\uC5B4 \uBCFC\uAC8C\uC694.

- **I - IV - V - I**: T \u2192 SD \u2192 D \u2192 T. \uAC00\uC7A5 \uAE30\uBCF8\uC801\uC778 \uD750\uB984. \uC548\uC815 \u2192 \uCD9C\uBC1C \u2192 \uAE34\uC7A5 \u2192 \uC9D1
- **I - VIm - IIm - V**: T \u2192 T \u2192 SD \u2192 D. \uB3CC\uACE0 \uB3C4\uB294 "\uD134\uC5B4\uB77C\uC6B4\uB4DC" \uC9C4\uD589
- **I - V - VIm - IV**: T \u2192 D \u2192 T \u2192 SD. \uC218\uB9CE\uC740 \uD31D\uC1A1\uC5D0\uC11C \uC4F0\uB294 \uC9C4\uD589. \uB3C4\uBBF8\uB10C\uD2B8\uAC00 \uC55E\uC5D0 \uC640\uC11C \uC57D\uAC04 \uB2E4\uB974\uAC8C \uB4E4\uB824\uC694

\uB05D\uB098\uB294 \uCF54\uB4DC\uAC00 \uBB34\uC5C7\uC774\uB0D0\uB3C4 \uC911\uC694\uD574\uC694. **\uD1A0\uB2C9\uC73C\uB85C \uB05D\uB098\uBA74 \uB05D\uB09C \uB290\uB08C**, **\uB3C4\uBBF8\uB10C\uD2B8\uB85C \uB05D\uB098\uBA74 \uACC4\uC18D \uC774\uC5B4\uC9C8 \uAC83 \uAC19\uC740 \uB290\uB08C**\uC774\uC5D0\uC694.`
            ),
            listen(
              "\uC9C4\uD589 \uB124 \uAC00\uC9C0\uB97C \uB4E4\uC5B4 \uBCF4\uC138\uC694.",
              [
                pi("I - IV - V - I (C F G C)", "C F G C", 1),
                pi("I - VIm - IIm - V (C Am Dm G)", "C Am Dm G", 1),
                pi("I - V - VIm - IV (C G Am F)", "C G Am F", 1),
                pi("G \uD0A4: I - VIm - IIm - V (G Em Am D)", "G Em Am D", 1)
              ],
              WIDE
            ),
            q('"I - IV - V - I"\uC758 \uAE30\uB2A5 \uC21C\uC11C\uB85C \uB9DE\uB294 \uAC83\uC740?', ["T - SD - D - T", "T - D - SD - T", "SD - T - D - T", "T - T - D - SD"], 0, "I(T) IV(SD) V(D) I(T)\uC608\uC694."),
            q('"I - VIm - IIm - V"\uC758 \uAE30\uB2A5 \uC21C\uC11C\uB85C \uB9DE\uB294 \uAC83\uC740?', ["T - T - SD - D", "T - SD - D - T", "T - D - T - SD", "SD - T - D - T"], 0, "I(T) VIm(T) IIm(SD) V(D)\uC608\uC694."),
            q('"I - V - VIm - IV"\uC758 \uAE30\uB2A5 \uC21C\uC11C\uB85C \uB9DE\uB294 \uAC83\uC740?', ["T - D - T - SD", "T - SD - D - T", "T - T - SD - D", "D - T - SD - T"], 0, "I(T) V(D) VIm(T) IV(SD)\uC608\uC694."),
            earP("\uB9C8\uC9C0\uB9C9\uC5D0 \uC5B4\uB5A4 \uB290\uB08C\uC73C\uB85C \uB05D\uB0A0\uAE4C\uC694?", prog("C F G C"), ["\uB05D\uB09C \uB290\uB08C (\uD1A0\uB2C9\uC73C\uB85C \uB05D)", "\uC544\uC9C1 \uB05D\uB098\uC9C0 \uC54A\uC740 \uB290\uB08C (\uB3C4\uBBF8\uB10C\uD2B8\uB85C \uB05D)"], 0, "I\uB85C \uB3CC\uC544\uC640 \uD3B8\uC548\uD558\uAC8C \uB05D\uB0AC\uC5B4\uC694.", 1),
            earP("\uB9C8\uC9C0\uB9C9\uC5D0 \uC5B4\uB5A4 \uB290\uB08C\uC73C\uB85C \uB05D\uB0A0\uAE4C\uC694?", prog("C Am Dm G7"), ["\uB05D\uB09C \uB290\uB08C (\uD1A0\uB2C9\uC73C\uB85C \uB05D)", "\uC544\uC9C1 \uB05D\uB098\uC9C0 \uC54A\uC740 \uB290\uB08C (\uB3C4\uBBF8\uB10C\uD2B8\uB85C \uB05D)"], 1, "V7\uC73C\uB85C \uB05D\uB098\uC11C \uB2E4\uC2DC I\uB85C \uB3CC\uC544\uAC00\uACE0 \uC2F6\uC740 \uB290\uB08C\uC774\uC5D0\uC694.", 1),
            q("G \uD0A4\uC5D0\uC11C I - VIm - IIm - V \uB97C \uCF54\uB4DC \uC774\uB984\uC73C\uB85C \uC4F0\uBA74?", ["G - Em - Am - D", "G - Am - Bm - C", "G - C - D - G", "G - D - Em - C"], 0, "G \uD0A4\uC758 1\xB76\xB72\xB75\uBC88\uC9F8 \uCF54\uB4DC: G, Em, Am, D."),
            play("C \uD0A4 I - VIm - IIm - V \uCF54\uB4DC\uC758 **\uADFC\uC74C**\uC744 \uCC28\uB840\uB85C \uB20C\uB7EC \uBCF4\uC138\uC694. (\uB3C4, \uB77C, \uB808, \uC194)", [0, 9, 2, 7], [60, 72]),
            key('C \uD0A4 "I - V - VIm - IV"\uC5D0\uC11C **V \uCF54\uB4DC\uC758 \uADFC\uC74C**\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.', 7, WIDE, "C \uD0A4\uC758 V\uB294 G(\uC194)\uC774\uC5D0\uC694.")
          ]
        }
      ]
    }
  ];

  // content/ko/units-progressions.js
  var WIDE2 = [60, 83];
  var TALL = [60, 88];
  var units_progressions_default = [
    // ───────────────────────────────────────── 유닛 8
    {
      id: "u8",
      title: "2-5-1",
      desc: "\uAC00\uC7A5 \uB9CE\uC774 \uC4F0\uC774\uB294 \uCF54\uB4DC \uC9C4\uD589\uC744 \uC7A5\uC870\uC640 \uB2E8\uC870\uC5D0\uC11C \uC775\uD600\uC694.",
      lessons: [
        {
          id: "u8l1",
          title: "2-5-1: \uAC00\uC7A5 \uC911\uC694\uD55C \uC9C4\uD589",
          minutes: 8,
          steps: [
            text(
              "IIm7 \u2192 V7 \u2192 Imaj7",
              `**2-5-1**\uC740 \uD0A4\uC758 2\uBC88\uC9F8 \uCF54\uB4DC(IIm7), 5\uBC88\uC9F8 \uCF54\uB4DC(V7), 1\uBC88\uC9F8 \uCF54\uB4DC(Imaj7)\uB97C \uCC28\uB840\uB85C \uC5F0\uC8FC\uD558\uB294 \uC9C4\uD589\uC774\uC5D0\uC694. C \uD0A4\uB77C\uBA74 **Dm7 \u2192 G7 \u2192 Cmaj7**.

\uAE30\uB2A5\uC73C\uB85C \uC77D\uC73C\uBA74 \uC11C\uBE0C\uB3C4\uBBF8\uB10C\uD2B8(SD) \u2192 \uB3C4\uBBF8\uB10C\uD2B8(D) \u2192 \uD1A0\uB2C9(T)\uC774\uC5D0\uC694. \uCD9C\uBC1C\uD574\uC11C, \uAE34\uC7A5\uD588\uB2E4\uAC00, \uC9D1\uC73C\uB85C \uB3CC\uC544\uC624\uB294 \uAC00\uC7A5 \uAE30\uBCF8\uC801\uC778 \uC774\uC57C\uAE30\uC8E0. \uC7AC\uC988\uBFD0 \uC544\uB2C8\uB77C \uD31D, \uC601\uD654\uC74C\uC545, \uAC00\uC694\uC5D0\uC11C\uB3C4 \uACC4\uC18D \uB098\uC624\uB294 \uC9C4\uD589\uC774\uC5D0\uC694.

\uC774 \uC9C4\uD589\uC774 \uC774\uB807\uAC8C \uC790\uC5F0\uC2A4\uB7EC\uC6B4 \uC774\uC720\uB294 \uB450 \uAC00\uC9C0\uC608\uC694.

- \uADFC\uC74C\uC774 **\uC644\uC8045\uB3C4\uC529 \uC544\uB798\uB85C** \uB0B4\uB824\uAC00\uC694. (\uB808 \u2192 \uC194 \u2192 \uB3C4) \uAC00\uC7A5 \uAC15\uD558\uAC8C \uB04C\uB9AC\uB294 \uC6C0\uC9C1\uC784\uC774\uC5D0\uC694.
- \uC774\uC6C3\uD55C \uCF54\uB4DC\uB07C\uB9AC **\uACF5\uD1B5\uC74C**\uC774 \uC788\uC5B4\uC11C \uB9E4\uB044\uB7EC\uC6CC\uC694. Dm7(\uB808 \uD30C \uB77C \uB3C4)\uACFC G7(\uC194 \uC2DC \uB808 \uD30C)\uC740 \uB808, \uD30C\uAC00 \uAC19\uACE0, G7\uACFC Cmaj7(\uB3C4 \uBBF8 \uC194 \uC2DC)\uC740 \uC194, \uC2DC\uAC00 \uAC19\uC544\uC694.`
            ),
            listen(
              "2-5-1\uC744 \uB4E4\uC5B4 \uBCF4\uC138\uC694. 2-5\uAE4C\uC9C0\uB9CC \uB4E4\uC73C\uBA74 \uC544\uC9C1 \uB05D\uB098\uC9C0 \uC54A\uC740 \uB290\uB08C\uC774\uACE0, 1\uB85C \uB3CC\uC544\uC624\uBA74 \uD480\uB9AC\uB294 \uB290\uB08C\uC774 \uB4E4\uC5B4\uC694.",
              [
                pi("2-5-1 (Dm7 \u2192 G7 \u2192 Cmaj7)", "Dm7 G7 Cmaj7", 1),
                pi("2-5\uB9CC (Dm7 \u2192 G7)", "Dm7 G7", 1),
                pi("5-1\uB9CC (G7 \u2192 Cmaj7)", "G7 Cmaj7", 1)
              ],
              WIDE2
            ),
            build("**Dm7**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (2\uBC88\uC9F8 \uCF54\uB4DC)", "Dm7"),
            build("**G7**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (5\uBC88\uC9F8 \uCF54\uB4DC)", "G7"),
            build("**Cmaj7**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (1\uBC88\uC9F8 \uCF54\uB4DC)", "Cmaj7"),
            q("C \uD0A4\uC758 2-5-1 \uCF54\uB4DC\uB294?", ["Dm7 - G7 - Cmaj7", "Em7 - A7 - Dmaj7", "Gm7 - C7 - Fmaj7", "Am7 - D7 - Gmaj7"], 0, "C \uD0A4\uC758 2\uBC88\uC9F8 \uCF54\uB4DC Dm7, 5\uBC88\uC9F8 \uCF54\uB4DC G7, 1\uBC88\uC9F8 \uCF54\uB4DC Cmaj7\uC774\uC5D0\uC694."),
            q("2-5-1\uC758 \uAE30\uB2A5 \uC21C\uC11C\uB294?", ["SD - D - T", "T - SD - D", "D - SD - T", "T - D - SD"], 0, "IIm7(SD) \u2192 V7(D) \u2192 Imaj7(T)\uC608\uC694."),
            q("2-5-1\uC5D0\uC11C \uADFC\uC74C\uC740 \uC5B4\uB5BB\uAC8C \uC6C0\uC9C1\uC77C\uAE4C\uC694?", ["\uC644\uC8045\uB3C4\uC529 \uC544\uB798\uB85C", "\uBC18\uC74C\uC529 \uC704\uB85C", "\uC628\uC74C\uC529 \uC704\uB85C", "\uC7A53\uB3C4\uC529 \uC544\uB798\uB85C"], 0, "\uB808 \u2192 \uC194 \u2192 \uB3C4. \uC644\uC8045\uB3C4\uC529 \uB0B4\uB824\uAC00\uC694."),
            q("Dm7\uACFC G7\uC774 \uACF5\uD1B5\uC73C\uB85C \uAC00\uC9C4 \uC74C\uC740?", ["\uB808, \uD30C", "\uC194, \uC2DC", "\uB3C4, \uBBF8", "\uB77C, \uB3C4"], 0, "Dm7(\uB808 \uD30C \uB77C \uB3C4)\uACFC G7(\uC194 \uC2DC \uB808 \uD30C)\uC740 \uB808\uC640 \uD30C\uAC00 \uAC19\uC544\uC694."),
            earP("\uC774 \uC9C4\uD589\uC740 \uB05D\uB09C \uB290\uB08C\uC77C\uAE4C\uC694, \uC544\uC9C1 \uAC00\uB294 \uC911\uC778 \uB290\uB08C\uC77C\uAE4C\uC694?", prog("Dm7 G7"), ["\uB05D\uB09C \uB290\uB08C", "\uC544\uC9C1 \uB05D\uB098\uC9C0 \uC54A\uC740 \uB290\uB08C"], 1, "V7\uB85C \uB05D\uB098\uC11C \uAE34\uC7A5\uC774 \uD480\uB9AC\uC9C0 \uC54A\uC558\uC5B4\uC694.", 1),
            earP("\uC774 \uC9C4\uD589\uC740 \uB05D\uB09C \uB290\uB08C\uC77C\uAE4C\uC694, \uC544\uC9C1 \uAC00\uB294 \uC911\uC778 \uB290\uB08C\uC77C\uAE4C\uC694?", prog("Dm7 G7 Cmaj7"), ["\uB05D\uB09C \uB290\uB08C", "\uC544\uC9C1 \uB05D\uB098\uC9C0 \uC54A\uC740 \uB290\uB08C"], 0, "1\uB85C \uB3CC\uC544\uC640 \uD480\uB838\uC5B4\uC694.", 1),
            play("C \uD0A4 2-5-1 \uCF54\uB4DC\uC758 **\uADFC\uC74C**\uC744 \uCC28\uB840\uB85C \uB20C\uB7EC \uBCF4\uC138\uC694. (\uB808, \uC194, \uB3C4)", [2, 7, 0], [60, 72])
          ]
        },
        {
          id: "u8l2",
          title: "\uC5B4\uB5A4 \uD0A4\uC5D0\uC11C\uB3C4 2-5-1",
          minutes: 9,
          steps: [
            text(
              "\uACF5\uC2DD\uC744 \uC54C\uBA74 12\uAC1C \uD0A4\uC5D0\uC11C \uBAA8\uB450 \uC4F8 \uC218 \uC788\uC5B4\uC694",
              `2-5-1\uC740 \uD0A4\uAC00 \uB2EC\uB77C\uC838\uB3C4 \uAD6C\uC870\uAC00 \uB611\uAC19\uC544\uC694. \uC73C\uB738\uC74C(1)\uC744 \uAE30\uC900\uC73C\uB85C,

- IIm7\uC758 \uADFC\uC74C = \uC73C\uB738\uC74C\uC5D0\uC11C **\uC7A52\uB3C4 \uC704** (\uBC18\uC74C 2\uAC1C)
- V7\uC758 \uADFC\uC74C = \uC73C\uB738\uC74C\uC5D0\uC11C **\uC644\uC8045\uB3C4 \uC704** (\uBC18\uC74C 7\uAC1C)
- Imaj7\uC758 \uADFC\uC74C = \uC73C\uB738\uC74C

\uC790\uC8FC \uC4F0\uB294 \uD0A4\uB97C \uC815\uB9AC\uD574 \uBCFC\uAC8C\uC694.

C: Dm7 - G7 - Cmaj7
F: Gm7 - C7 - Fmaj7
B\u266D: Cm7 - F7 - B\u266Dmaj7
E\u266D: Fm7 - B\u266D7 - E\u266Dmaj7
G: Am7 - D7 - Gmaj7
D: Em7 - A7 - Dmaj7

[[circle-of-fifths|5\uB3C4\uAD8C]]\uC744 \uB5A0\uC62C\uB9AC\uBA74 \uB354 \uC26C\uC6CC\uC694. 2-5-1\uC758 \uC138 \uADFC\uC74C(D, G, C)\uC740 5\uB3C4\uAD8C\uC5D0\uC11C **\uC2DC\uACC4 \uBC18\uB300 \uBC29\uD5A5\uC73C\uB85C \uB098\uB780\uD788 \uC774\uC6C3\uD55C \uC138 \uCE78**\uC774\uC5D0\uC694. 5\uB3C4\uAD8C\uC5D0\uC11C \uC73C\uB738\uC74C\uC744 \uCC3E\uACE0, \uAC70\uAE30\uC11C \uC2DC\uACC4 \uBC29\uD5A5\uC73C\uB85C \uB450 \uCE78 \uAC00\uBA74 II\uC758 \uADFC\uC74C\uC774\uC5D0\uC694.`
            ),
            listen(
              "\uB2E4\uB978 \uD0A4\uC758 2-5-1\uB3C4 \uB4E4\uC5B4 \uBCF4\uC138\uC694. \uB192\uC774\uB9CC \uB2E4\uB974\uACE0 \uC774\uC57C\uAE30\uB294 \uB611\uAC19\uC544\uC694.",
              [
                pi("F \uD0A4: Gm7 \u2192 C7 \u2192 Fmaj7", "Gm7 C7 Fmaj7", 1),
                pi("B\u266D \uD0A4: Cm7 \u2192 F7 \u2192 B\u266Dmaj7", "Cm7 F7 B\u266Dmaj7", 1),
                pi("G \uD0A4: Am7 \u2192 D7 \u2192 Gmaj7", "Am7 D7 Gmaj7", 1),
                pi("E\u266D \uD0A4: Fm7 \u2192 B\u266D7 \u2192 E\u266Dmaj7", "Fm7 B\u266D7 E\u266Dmaj7", 1)
              ],
              WIDE2
            ),
            q("G \uD0A4\uC758 2-5-1 \uCF54\uB4DC\uB294?", ["Am7 - D7 - Gmaj7", "Gm7 - C7 - Fmaj7", "Bm7 - E7 - Amaj7", "Em7 - A7 - Dmaj7"], 0, "G \uD0A4\uC758 2\uBC88\uC9F8 \uC74C A, 5\uBC88\uC9F8 \uC74C D. Am7 \u2192 D7 \u2192 Gmaj7."),
            q("F \uD0A4\uC758 2-5-1 \uCF54\uB4DC\uB294?", ["Gm7 - C7 - Fmaj7", "Am7 - D7 - Gmaj7", "Cm7 - F7 - B\u266Dmaj7", "Dm7 - G7 - Cmaj7"], 0, "F \uD0A4\uC758 2\uBC88\uC9F8 \uC74C G, 5\uBC88\uC9F8 \uC74C C. Gm7 \u2192 C7 \u2192 Fmaj7."),
            q("B\u266D \uD0A4\uC758 2-5-1 \uCF54\uB4DC\uB294?", ["Cm7 - F7 - B\u266Dmaj7", "Dm7 - G7 - B\u266Dmaj7", "Fm7 - B\u266D7 - E\u266Dmaj7", "Gm7 - C7 - Fmaj7"], 0, "B\u266D \uD0A4\uC758 2\uBC88\uC9F8 \uC74C C, 5\uBC88\uC9F8 \uC74C F. Cm7 \u2192 F7 \u2192 B\u266Dmaj7."),
            q("D \uD0A4\uC758 2-5-1 \uCF54\uB4DC\uB294?", ["Em7 - A7 - Dmaj7", "Dm7 - G7 - Cmaj7", "Bm7 - E7 - Amaj7", "Am7 - D7 - Gmaj7"], 0, "D \uD0A4\uC758 2\uBC88\uC9F8 \uC74C E, 5\uBC88\uC9F8 \uC74C A. Em7 \u2192 A7 \u2192 Dmaj7."),
            q("E\u266D \uD0A4\uC758 2-5-1 \uCF54\uB4DC\uB294?", ["Fm7 - B\u266D7 - E\u266Dmaj7", "Gm7 - C7 - Fmaj7", "B\u266Dm7 - E\u266D7 - A\u266Dmaj7", "Cm7 - F7 - B\u266Dmaj7"], 0, "E\u266D \uD0A4\uC758 2\uBC88\uC9F8 \uC74C F, 5\uBC88\uC9F8 \uC74C B\u266D. Fm7 \u2192 B\u266D7 \u2192 E\u266Dmaj7."),
            q("A\u266D \uD0A4\uC758 2-5-1 \uCF54\uB4DC\uB294?", ["B\u266Dm7 - E\u266D7 - A\u266Dmaj7", "Cm7 - F7 - B\u266Dmaj7", "Fm7 - B\u266D7 - E\u266Dmaj7", "A\u266Dm7 - D\u266D7 - G\u266Dmaj7"], 0, "A\u266D \uD0A4\uC758 2\uBC88\uC9F8 \uC74C B\u266D, 5\uBC88\uC9F8 \uC74C E\u266D. B\u266Dm7 \u2192 E\u266D7 \u2192 A\u266Dmaj7."),
            key("E\u266D \uD0A4 2-5-1\uC758 **V7 \uADFC\uC74C**\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 10, WIDE2, "E\u266D\uC5D0\uC11C \uC644\uC8045\uB3C4 \uC704\uB294 B\u266D(\uC2DC\u266D)\uC774\uC5D0\uC694."),
            key("A \uD0A4 2-5-1\uC758 **IIm7 \uADFC\uC74C**\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 11, WIDE2, "A\uC5D0\uC11C \uC7A52\uB3C4 \uC704\uB294 B(\uC2DC)\uC608\uC694. Bm7 \u2192 E7 \u2192 Amaj7."),
            build("**Am7 \u2192 D7 \u2192 Gmaj7** \uC911 **D7**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uB808, \uD30C\u266F, \uB77C, \uB3C4)", "D7", { hint: false }),
            build("**Gm7 \u2192 C7 \u2192 Fmaj7** \uC911 **Fmaj7**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uD30C, \uB77C, \uB3C4, \uBBF8)", "Fmaj7", { hint: false })
          ]
        },
        {
          id: "u8l3",
          title: "\uB9C8\uC774\uB108 2-5-1",
          minutes: 9,
          steps: [
            text(
              "IIm7\u266D5 \u2192 V7 \u2192 Im7",
              `\uB9C8\uC774\uB108 \uD0A4\uC5D0\uC11C\uB3C4 2-5-1\uC774 \uC788\uC5B4\uC694. \uBAA8\uC591\uC774 \uC870\uAE08 \uB2EC\uB77C\uC694.

**IIm7\u266D5 \u2192 V7 \u2192 Im7**

C \uB9C8\uC774\uB108 \uD0A4: **Dm7\u266D5 \u2192 G7 \u2192 Cm7**
A \uB9C8\uC774\uB108 \uD0A4: **Bm7\u266D5 \u2192 E7 \u2192 Am7**

\uBA54\uC774\uC800 2-5-1(Dm7 \u2192 G7 \u2192 Cmaj7)\uACFC \uBE44\uAD50\uD558\uBA74,
- II\uAC00 **m7\u266D5**(\uD558\uD504 \uB514\uBBF8\uB2C8\uC2DC\uB4DC)\uB85C \uBC14\uB00C\uC5B4\uC694. \uB9C8\uC774\uB108 \uD0A4\uC758 2\uBC88\uC9F8 \uCF54\uB4DC\uB294 \uC6D0\uB798 \uC774 \uBAA8\uC591\uC774\uC5D0\uC694.
- V\uB294 \uADF8\uB300\uB85C **\uB3C4\uBBF8\uB10C\uD2B8 7th**\uC608\uC694. (\uB9C8\uC774\uB108 \uD0A4\uB77C\uB3C4 V7\uC744 \uC4F0\uB294 \uAC74 \uD558\uBAA8\uB2C9 \uB9C8\uC774\uB108 \uB355\uBD84\uC774\uC5D0\uC694. A \uB9C8\uC774\uB108\uC758 E7 \uC18D \uC194\u266F\uC774 \uB77C\uB85C \uC62C\uB77C\uAC00\uBA70 \uAC15\uD558\uAC8C \uD574\uACB0\uB3FC\uC694.)
- I\uC774 **Im7**(\uB9C8\uC774\uB108 7th)\uB85C \uBC14\uB00C\uC5B4\uC694.

\uADF8\uB798\uC11C \uAC19\uC740 \uC9C4\uD589\uC774\uC9C0\uB9CC \uD6E8\uC52C \uC5B4\uB461\uACE0 \uC4F8\uC4F8\uD55C \uC18C\uB9AC\uAC00 \uB098\uC694.`
            ),
            listen(
              "\uBA54\uC774\uC800\uC640 \uB9C8\uC774\uB108\uC758 2-5-1\uC744 \uBE44\uAD50\uD574 \uBCF4\uC138\uC694.",
              [
                pi("C \uBA54\uC774\uC800: Dm7 \u2192 G7 \u2192 Cmaj7", "Dm7 G7 Cmaj7", 1),
                pi("C \uB9C8\uC774\uB108: Dm7\u266D5 \u2192 G7 \u2192 Cm7", "Dm7\u266D5 G7 Cm7", 1),
                pi("A \uB9C8\uC774\uB108: Bm7\u266D5 \u2192 E7 \u2192 Am7", "Bm7\u266D5 E7 Am7", 1),
                pi("E \uB9C8\uC774\uB108: F\u266Fm7\u266D5 \u2192 B7 \u2192 Em7", "F\u266Fm7\u266D5 B7 Em7", 1)
              ],
              WIDE2
            ),
            earP("\uBA54\uC774\uC800 2-5-1\uC77C\uAE4C\uC694, \uB9C8\uC774\uB108 2-5-1\uC77C\uAE4C\uC694?", prog("Dm7 G7 Cmaj7"), ["\uBA54\uC774\uC800", "\uB9C8\uC774\uB108"], 0, "\uBC1D\uAC8C \uD480\uB9AC\uB294 \uBA54\uC774\uC800 2-5-1\uC774\uC5D0\uC694.", 1),
            earP("\uBA54\uC774\uC800 2-5-1\uC77C\uAE4C\uC694, \uB9C8\uC774\uB108 2-5-1\uC77C\uAE4C\uC694?", prog("Dm7\u266D5 G7 Cm7"), ["\uBA54\uC774\uC800", "\uB9C8\uC774\uB108"], 1, "\uC5B4\uB461\uAC8C \uD480\uB9AC\uB294 \uB9C8\uC774\uB108 2-5-1\uC774\uC5D0\uC694.", 1),
            earP("\uBA54\uC774\uC800 2-5-1\uC77C\uAE4C\uC694, \uB9C8\uC774\uB108 2-5-1\uC77C\uAE4C\uC694?", prog("Bm7\u266D5 E7 Am7"), ["\uBA54\uC774\uC800", "\uB9C8\uC774\uB108"], 1, "A \uB9C8\uC774\uB108 2-5-1\uC774\uC5D0\uC694.", 1),
            earP("\uBA54\uC774\uC800 2-5-1\uC77C\uAE4C\uC694, \uB9C8\uC774\uB108 2-5-1\uC77C\uAE4C\uC694?", prog("Am7 D7 Gmaj7"), ["\uBA54\uC774\uC800", "\uB9C8\uC774\uB108"], 0, "G \uD0A4 \uBA54\uC774\uC800 2-5-1\uC774\uC5D0\uC694.", 1),
            q("A \uB9C8\uC774\uB108 \uD0A4\uC758 2-5-1 \uCF54\uB4DC\uB294?", ["Bm7\u266D5 - E7 - Am7", "Bm7 - E7 - Amaj7", "Bm7\u266D5 - Em7 - Am7", "Cm7 - F7 - B\u266Dmaj7"], 0, "A \uB9C8\uC774\uB108 \uD0A4\uC758 2\uBC88\uC9F8 \uCF54\uB4DC Bm7\u266D5, V7\uC740 E7, I\uC740 Am7\uC774\uC5D0\uC694."),
            q("D \uB9C8\uC774\uB108 \uD0A4\uC758 2-5-1 \uCF54\uB4DC\uB294?", ["Em7\u266D5 - A7 - Dm7", "Em7 - A7 - Dmaj7", "Dm7\u266D5 - G7 - Cm7", "Em7\u266D5 - Am7 - Dm7"], 0, "D \uB9C8\uC774\uB108 \uD0A4\uC758 2\uBC88\uC9F8 \uC74C E, 5\uBC88\uC9F8 \uC74C A. Em7\u266D5 \u2192 A7 \u2192 Dm7."),
            q("G \uB9C8\uC774\uB108 \uD0A4\uC758 2-5-1 \uCF54\uB4DC\uB294?", ["Am7\u266D5 - D7 - Gm7", "Am7 - D7 - Gmaj7", "Gm7\u266D5 - C7 - Fm7", "Bm7\u266D5 - E7 - Am7"], 0, "G \uB9C8\uC774\uB108 \uD0A4\uC758 2\uBC88\uC9F8 \uC74C A, 5\uBC88\uC9F8 \uC74C D. Am7\u266D5 \u2192 D7 \u2192 Gm7."),
            q("\uB9C8\uC774\uB108 2-5-1\uC5D0\uC11C \uBA54\uC774\uC800 2-5-1\uACFC \uB2EC\uB77C\uC9C0\uB294 \uCF54\uB4DC\uB294?", ["II\uC640 I", "V\uC640 I", "II\uC640 V", "III\uC640 VI"], 0, "II\uB294 m7\u266D5\uB85C, I\uC740 Im7\uB85C \uBC14\uB00C\uACE0 V7\uC740 \uADF8\uB300\uB85C\uC608\uC694."),
            q("A \uB9C8\uC774\uB108 2-5-1\uC758 E7 \uC18D \uC194\u266F(G\u266F)\uC740 \uC5B4\uB514\uB85C \uD574\uACB0\uB420\uAE4C\uC694?", ["\uB77C (A)", "\uC194 (G)", "\uC2DC (B)", "\uBBF8 (E)"], 0, "\uC194\u266F\uC740 \uBC18\uC74C \uC704\uC758 \uB77C(A)\uB85C \uC62C\uB77C\uAC00\uC694. \uC73C\uB738\uC74C\uC73C\uB85C \uAC15\uD558\uAC8C \uC774\uB04C\uB824\uC694."),
            build("**Dm7\u266D5**\uB97C \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (C \uB9C8\uC774\uB108 \uD0A4\uC758 II)", "Dm7\u266D5"),
            build("**E7**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (A \uB9C8\uC774\uB108 \uD0A4\uC758 V)", "E7")
          ]
        },
        {
          id: "u8l4",
          title: "2-5-1 \uD655\uC7A5\uACFC \uC885\uD569",
          minutes: 9,
          steps: [
            text(
              "2-5-1\uC744 \uC774\uC5B4 \uBD99\uC774\uBA74 \uD750\uB984\uC774 \uAE38\uC5B4\uC838\uC694",
              `\uC2E4\uC81C \uACE1\uC5D0\uC11C\uB294 2-5-1\uC774 \uC774\uB807\uAC8C \uBCC0\uC8FC\uB3FC\uC694.

- **2-5**: 1\uC740 \uC0DD\uB7B5\uD558\uACE0 \uB2E4\uC74C\uC73C\uB85C \uC774\uC5B4 \uAC00\uB294 \uC9C4\uD589. \uAE34\uC7A5\uC774 \uD480\uB9AC\uC9C0 \uC54A\uC544\uC11C \uC774\uC57C\uAE30\uAC00 \uACC4\uC18D\uB3FC\uC694.
- **1-6-2-5**: Cmaj7 \u2192 Am7 \u2192 Dm7 \u2192 G7. \uD55C \uBC14\uD034 \uB3CC\uC544\uC11C \uB2E4\uC2DC 1\uB85C \uAC00\uB294 "\uD134\uC5B4\uB77C\uC6B4\uB4DC"\uC608\uC694.
- **3-6-2-5-1**: Em7 \u2192 Am7 \u2192 Dm7 \u2192 G7 \u2192 Cmaj7. \uADFC\uC74C\uC774 **\uC644\uC8045\uB3C4\uC529 \uACC4\uC18D \uB0B4\uB824\uAC00\uB294** \uAE34 \uC0AC\uC2AC\uC774\uC5D0\uC694. (\uBBF8 \u2192 \uB77C \u2192 \uB808 \u2192 \uC194 \u2192 \uB3C4) 2-5-1 \uC55E\uC5D0 3-6\uC744 \uB354 \uBD99\uC778 \uBAA8\uC591\uC774\uC5D0\uC694.

\uC7AC\uC988 \uC2A4\uD0E0\uB354\uB4DC(\uC608: "Autumn Leaves")\uB294 2-5-1\uC774 \uC5F0\uB2EC\uC544 \uC774\uC5B4\uC9C0\uB294 \uACE1\uC758 \uB300\uD45C\uC608\uC694.`
            ),
            listen(
              "\uAE38\uC5B4\uC9C4 \uC9C4\uD589\uC744 \uB4E4\uC5B4 \uBCF4\uC138\uC694.",
              [
                pi("1-6-2-5: Cmaj7 \u2192 Am7 \u2192 Dm7 \u2192 G7", "Cmaj7 Am7 Dm7 G7", 1),
                pi("3-6-2-5-1: Em7 \u2192 Am7 \u2192 Dm7 \u2192 G7 \u2192 Cmaj7", "Em7 Am7 Dm7 G7 Cmaj7", 0.9),
                pi("G \uD0A4 3-6-2-5-1: Bm7 \u2192 Em7 \u2192 Am7 \u2192 D7 \u2192 Gmaj7", "Bm7 Em7 Am7 D7 Gmaj7", 0.9)
              ],
              WIDE2
            ),
            q('C \uD0A4 "Cmaj7 - Am7 - ? - G7"\uC5D0\uC11C \uBE48\uCE78\uC5D0 \uB4E4\uC5B4\uAC08 \uCF54\uB4DC\uB294?', ["Dm7", "Em7", "Fmaj7", "Bm7\u266D5"], 0, "1-6-2-5. 2\uBC88\uC9F8 \uCF54\uB4DC Dm7\uC774\uC5D0\uC694."),
            q('C \uD0A4 "Em7 - ? - Dm7 - G7 - Cmaj7"\uC5D0\uC11C \uBE48\uCE78\uC5D0 \uB4E4\uC5B4\uAC08 \uCF54\uB4DC\uB294?', ["Am7", "Fmaj7", "Cmaj7", "Bm7\u266D5"], 0, "3-6-2-5-1. 6\uBC88\uC9F8 \uCF54\uB4DC Am7\uC774\uC5D0\uC694."),
            q('F \uD0A4 2-5-1 "Gm7 - ? - Fmaj7"\uC5D0\uC11C \uBE48\uCE78\uC5D0 \uB4E4\uC5B4\uAC08 \uCF54\uB4DC\uB294?', ["C7", "D7", "B\u266D7", "Cmaj7"], 0, "F \uD0A4\uC758 5\uBC88\uC9F8 \uC74C C \uC704\uC758 \uB3C4\uBBF8\uB10C\uD2B8 7th, C7\uC774\uC5D0\uC694."),
            q("3-6-2-5-1\uC758 \uADFC\uC74C \uC774\uB3D9 \uBC29\uC2DD\uC740?", ["\uC644\uC8045\uB3C4\uC529 \uC544\uB798\uB85C", "\uC644\uC8045\uB3C4\uC529 \uC704\uB85C", "\uBC18\uC74C\uC529 \uC544\uB798\uB85C", "\uC7A53\uB3C4\uC529 \uC704\uB85C"], 0, "\uBBF8 \u2192 \uB77C \u2192 \uB808 \u2192 \uC194 \u2192 \uB3C4. \uACC4\uC18D \uC644\uC8045\uB3C4\uC529 \uB0B4\uB824\uAC00\uC694."),
            q("G \uD0A4 3-6-2-5-1\uC758 \uCF54\uB4DC\uB294?", ["Bm7 - Em7 - Am7 - D7 - Gmaj7", "Am7 - Dm7 - Gm7 - C7 - Fmaj7", "Em7 - Am7 - Dm7 - G7 - Cmaj7", "Cm7 - Fm7 - B\u266Dm7 - E\u266D7 - A\u266Dmaj7"], 0, "G \uD0A4\uC758 3\xB76\xB72\xB75\xB71\uBC88\uC9F8 \uCF54\uB4DC: Bm7, Em7, Am7, D7, Gmaj7."),
            earP("\uB05D\uB09C \uB290\uB08C\uC77C\uAE4C\uC694, \uC544\uC9C1 \uC774\uC5B4\uC9C8 \uAC83 \uAC19\uC740 \uB290\uB08C\uC77C\uAE4C\uC694?", prog("Cmaj7 Am7 Dm7 G7"), ["\uB05D\uB09C \uB290\uB08C", "\uC544\uC9C1 \uB05D\uB098\uC9C0 \uC54A\uC740 \uB290\uB08C"], 1, "1-6-2-5\uB294 V7\uC73C\uB85C \uB05D\uB098\uC11C \uB2E4\uC2DC 1\uB85C \uB3CC\uC544\uAC00\uACE0 \uC2F6\uC5B4\uC694.", 1),
            earP("\uB05D\uB09C \uB290\uB08C\uC77C\uAE4C\uC694, \uC544\uC9C1 \uC774\uC5B4\uC9C8 \uAC83 \uAC19\uC740 \uB290\uB08C\uC77C\uAE4C\uC694?", prog("Em7 Am7 Dm7 G7 Cmaj7"), ["\uB05D\uB09C \uB290\uB08C", "\uC544\uC9C1 \uB05D\uB098\uC9C0 \uC54A\uC740 \uB290\uB08C"], 0, "3-6-2-5-1\uC740 1\uB85C \uD480\uB9AC\uBA70 \uB05D\uB098\uC694.", 0.9),
            play("C \uD0A4 3-6-2-5-1\uC758 **\uADFC\uC74C**\uC744 \uCC28\uB840\uB85C \uB20C\uB7EC \uBCF4\uC138\uC694. (\uBBF8, \uB77C, \uB808, \uC194, \uB3C4)", [4, 9, 2, 7, 0], [60, 72]),
            build("**Am7**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (3-6-2-5-1\uC758 6\uBC88\uC9F8)", "Am7", { hint: false })
          ]
        }
      ]
    },
    // ───────────────────────────────────────── 유닛 9
    {
      id: "u9",
      title: "\uD150\uC158",
      desc: "\uCF54\uB4DC\uC5D0 \uC74C\uC744 \uB354\uD574 \uC0C9\uAE54\uC744 \uC785\uD788\uB294 \uBC95\uC744 \uBC30\uC6CC\uC694.",
      lessons: [
        {
          id: "u9l1",
          title: "\uD150\uC158\uC774\uB780? 9th",
          minutes: 8,
          steps: [
            text(
              "4\uD654\uC74C \uC704\uC5D0 \uD55C \uCE78 \uB354",
              `4\uD654\uC74C(1\xB73\xB75\xB77)\uC5D0 3\uB3C4\uB97C \uACC4\uC18D \uB354 \uC313\uC73C\uBA74 9, 11, 13\uC774 \uB098\uC640\uC694. \uC774\uB807\uAC8C 7th \uC704\uC5D0 \uC5B9\uB294 \uC74C\uC744 [[tension|\uD150\uC158]]\uC774\uB77C\uACE0 \uD574\uC694. \uAE30\uBCF8 \uBF08\uB300\uB294 \uADF8\uB300\uB85C \uB450\uACE0 **\uBD84\uC704\uAE30\uC758 \uC0C9\uAE54\uC744 \uB354\uD558\uB294 \uC591\uB150** \uAC19\uC740 \uC74C\uC774\uC5D0\uC694.

\uCCAB \uBC88\uC9F8 \uD150\uC158\uC774 [[ninth|9th]]\uC608\uC694. \uADFC\uC74C\uC5D0\uC11C **2\uB3C4** \uC704(\uD55C \uC625\uD0C0\uBE0C \uB118\uC5B4\uC11C)\uC758 \uC74C\uC774\uB77C\uC11C \uBC18\uC74C 14\uAC1C \uAC70\uB9AC\uC608\uC694.

- Cmaj7 + 9th(\uB808) = **Cmaj9** (\uB3C4 \uBBF8 \uC194 \uC2DC \uB808)
- Dm7 + 9th(\uBBF8) = **Dm9** (\uB808 \uD30C \uB77C \uB3C4 \uBBF8)
- G7 + 9th(\uB77C) = **G9** (\uC194 \uC2DC \uB808 \uD30C \uB77C)

\uCF54\uB4DC\uC758 \uAE30\uB2A5\uC740 \uADF8\uB300\uB85C\uC608\uC694. Cmaj9\uB294 \uC5EC\uC804\uD788 \uD1A0\uB2C9\uC774\uACE0, G9\uB294 \uC5EC\uC804\uD788 \uB3C4\uBBF8\uB10C\uD2B8\uC608\uC694.`
            ),
            listen(
              "7th \uCF54\uB4DC\uC640 9th\uB97C \uB354\uD55C \uCF54\uB4DC\uB97C \uBE44\uAD50\uD574 \uBCF4\uC138\uC694. \uD55C\uACB0 \uD48D\uC131\uD574\uC838\uC694.",
              [ci("Cmaj7"), ci("Cmaj9"), ci("Dm7"), ci("Dm9"), ci("G7"), ci("G9")],
              WIDE2
            ),
            build("**Cmaj9**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uB3C4, \uBBF8, \uC194, \uC2DC, \uB808)", "Cmaj9"),
            build("**Dm9**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uB808, \uD30C, \uB77C, \uB3C4, \uBBF8)", "Dm9"),
            build("**G9**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uC194, \uC2DC, \uB808, \uD30C, \uB77C)", "G9"),
            earC("7th \uCF54\uB4DC\uC77C\uAE4C\uC694, 9th \uD150\uC158\uC774 \uB4E4\uC5B4\uAC04 \uCF54\uB4DC\uC77C\uAE4C\uC694?", "Cmaj9", ["Cmaj7", "Cmaj9"], 1, "\uD48D\uC131\uD558\uAC8C \uD55C \uC74C\uC774 \uB354\uD574\uC9C4 Cmaj9\uC608\uC694."),
            earC("7th \uCF54\uB4DC\uC77C\uAE4C\uC694, 9th \uD150\uC158\uC774 \uB4E4\uC5B4\uAC04 \uCF54\uB4DC\uC77C\uAE4C\uC694?", "Dm7", ["Dm7", "Dm9"], 0, "\uD150\uC158 \uC5C6\uB294 \uAE30\uBCF8 Dm7\uC774\uC5D0\uC694."),
            earC("7th \uCF54\uB4DC\uC77C\uAE4C\uC694, 9th \uD150\uC158\uC774 \uB4E4\uC5B4\uAC04 \uCF54\uB4DC\uC77C\uAE4C\uC694?", "G9", ["G7", "G9"], 1, "\uD55C \uC74C\uC774 \uB354 \uC5B9\uD78C G9\uC608\uC694."),
            q("Cmaj7 \uC704\uC5D0 \uC5B9\uB294 9th \uC74C\uC740?", ["\uB808 (D)", "\uD30C (F)", "\uB77C (A)", "\uC2DC (B)"], 0, "\uB3C4\uC5D0\uC11C 2\uB3C4 \uC704\uC758 \uC74C, \uB808(D)\uC608\uC694."),
            q("G7 \uC704\uC5D0 \uC5B9\uB294 9th \uC74C\uC740?", ["\uB77C (A)", "\uC2DC (B)", "\uB3C4 (C)", "\uD30C (F)"], 0, "\uC194\uC5D0\uC11C 2\uB3C4 \uC704\uC758 \uC74C, \uB77C(A)\uC608\uC694."),
            q("9th\uB294 \uADFC\uC74C\uC5D0\uC11C \uBC18\uC74C \uBA87 \uAC1C \uC704\uC5D0 \uC788\uC744\uAE4C\uC694?", ["14\uAC1C", "12\uAC1C", "13\uAC1C", "16\uAC1C"], 0, "\uD55C \uC625\uD0C0\uBE0C(12) + \uC628\uC74C(2) = 14\uAC1C\uC608\uC694. 2\uB3C4\uB97C \uD55C \uC625\uD0C0\uBE0C \uC62C\uB9B0 \uC74C\uC774\uC5D0\uC694."),
            q("Dm9\uC5D0\uC11C \uCF54\uB4DC\uC758 \uAE30\uB2A5\uC740 \uBB34\uC5C7\uC77C\uAE4C\uC694? (C \uD0A4)", ["\uC11C\uBE0C\uB3C4\uBBF8\uB10C\uD2B8 (SD)", "\uD1A0\uB2C9 (T)", "\uB3C4\uBBF8\uB10C\uD2B8 (D)", "\uAE30\uB2A5\uC774 \uC5C6\uB2E4"], 0, "\uD150\uC158\uC744 \uC5B9\uC5B4\uB3C4 \uAE30\uB2A5\uC740 \uADF8\uB300\uB85C\uC608\uC694. Dm\uC740 IIm\uC774\uB77C SD."),
            key("Am7\uC5D0 \uC5B9\uB294 **9th \uC74C**\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 11, WIDE2, "\uB77C\uC5D0\uC11C 2\uB3C4 \uC704\uB294 \uC2DC(B)\uC608\uC694.")
          ]
        },
        {
          id: "u9l2",
          title: "11th\xB713th\uC640 \uD53C\uD574\uC57C \uD560 \uC74C",
          minutes: 10,
          steps: [
            text(
              "\uC544\uBB34 \uD150\uC158\uC774\uB098 \uC5B9\uC73C\uBA74 \uD0C1\uD574\uC838\uC694",
              `\uD150\uC158\uC740 9th \uC678\uC5D0 \uB450 \uAC00\uC9C0\uAC00 \uB354 \uC788\uC5B4\uC694.

- **11th**: \uADFC\uC74C\uC5D0\uC11C 4\uB3C4 \uC704(\uD55C \uC625\uD0C0\uBE0C \uB118\uC5B4\uC11C)
- **13th**: \uADFC\uC74C\uC5D0\uC11C 6\uB3C4 \uC704(\uD55C \uC625\uD0C0\uBE0C \uB118\uC5B4\uC11C)

\uADF8\uB7F0\uB370 \uCF54\uB4DC\uB9C8\uB2E4 \uC5B9\uC73C\uBA74 \uC88B\uC740 \uD150\uC158\uACFC \uD0C1\uD574\uC9C0\uB294 \uD150\uC158\uC774 \uC788\uC5B4\uC694. \uAE30\uC900\uC774 \uB418\uB294 \uADDC\uCE59\uC740 \uD558\uB098\uC608\uC694. **3\uC74C\uACFC \uBC18\uC74C\uC73C\uB85C \uBD80\uB52A\uD788\uB294 \uD150\uC158\uC740 \uD53C\uD55C\uB2E4.** \uC774\uB7F0 \uC74C\uC744 [[avoid-note|\uC5B4\uBCF4\uC774\uB4DC \uB178\uD2B8]]\uB77C\uACE0 \uD574\uC694.

\uC608\uB97C \uB4E4\uC5B4 Cmaj7\uC758 11th\uB294 \uD30C(F)\uC778\uB370, 3\uC74C \uBBF8(E)\uC640 \uBC18\uC74C\uC73C\uB85C \uBD99\uC5B4\uC11C \uD0C1\uD574\uC694. G7\uC758 11th\uB294 \uB3C4(C)\uC778\uB370, 3\uC74C \uC2DC(B)\uC640 \uBC18\uC74C\uC774\uB77C \uC5ED\uC2DC \uD0C1\uD574\uC694.

C \uD0A4\uC5D0\uC11C \uC4F0\uAE30 \uC88B\uC740 \uD150\uC158\uC744 \uC815\uB9AC\uD574 \uBCFC\uAC8C\uC694.

Cmaj7: 9th(\uB808) \xB7 13th(\uB77C)
Dm7: 9th(\uBBF8) \xB7 11th(\uC194)
G7: 9th(\uB77C) \xB7 13th(\uBBF8)
Am7: 9th(\uC2DC) \xB7 11th(\uB808)

\uC678\uC6B0\uAE30\uBCF4\uB2E4 \uC18C\uB9AC\uB85C \uC775\uD788\uC138\uC694. \uC544\uB798\uC5D0\uC11C \uC9C1\uC811 \uB4E4\uC5B4 \uBCF4\uC138\uC694.`
            ),
            listen(
              "\uC88B\uC740 \uD150\uC158\uC774 \uB4E4\uC5B4\uAC04 \uCF54\uB4DC\uB97C \uB4E4\uC5B4 \uBCF4\uC138\uC694. G13\uC740 \uC74C\uC774 \uB192\uC544\uC11C \uAC74\uBC18 \uBC94\uC704\uB97C \uB113\uD614\uC5B4\uC694.",
              [ci("Dm9"), ci("Dm11"), ci("G9"), ci("G13")],
              TALL
            ),
            build("**Dm11**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uB808, \uD30C, \uB77C, \uB3C4, \uBBF8, \uC194)", "Dm11"),
            q("Cmaj7\uC5D0\uC11C \uD53C\uD558\uB294 \uAC83\uC774 \uC88B\uC740 \uD150\uC158 \uC74C\uC740?", ["\uD30C (F, 11th)", "\uB808 (D, 9th)", "\uB77C (A, 13th)", "\uC2DC (B)"], 0, "\uD30C(F)\uB294 3\uC74C \uBBF8(E)\uC640 \uBC18\uC74C\uC73C\uB85C \uBD80\uB52A\uD600\uC11C \uD0C1\uD574\uC694."),
            q("G7\uC758 11th(\uB3C4)\uAC00 \uD0C1\uD558\uAC8C \uB4E4\uB9AC\uB294 \uC774\uC720\uB294?", ["3\uC74C \uC2DC(B)\uC640 \uBC18\uC74C\uC73C\uB85C \uBD80\uB52A\uD600\uC11C", "\uADFC\uC74C\uACFC \uAC19\uC740 \uC74C\uC774\uB77C\uC11C", "5\uC74C\uACFC \uC644\uC8045\uB3C4\uB77C\uC11C", "7\uC74C\uACFC \uC74C\uC815\uC774 \uAC19\uC544\uC11C"], 0, "\uB3C4(C)\uAC00 3\uC74C \uC2DC(B) \uBC14\uB85C \uBC18\uC74C \uC704\uC5D0 \uC788\uC5B4\uC11C \uC5B4\uBCF4\uC774\uB4DC \uB178\uD2B8\uC608\uC694."),
            q("Dm7\uC5D0 \uC5B9\uB294 11th \uC74C\uC740?", ["\uC194 (G)", "\uD30C (F)", "\uB77C (A)", "\uC2DC (B)"], 0, "\uB808\uC5D0\uC11C 4\uB3C4 \uC704(\uD55C \uC625\uD0C0\uBE0C \uB118\uC5B4\uC11C)\uB294 \uC194(G)\uC774\uC5D0\uC694."),
            q("G7\uC758 13th \uC74C\uC740?", ["\uBBF8 (E)", "\uD30C (F)", "\uB77C (A)", "\uB3C4 (C)"], 0, "\uC194\uC5D0\uC11C 6\uB3C4 \uC704(\uD55C \uC625\uD0C0\uBE0C \uB118\uC5B4\uC11C)\uB294 \uBBF8(E)\uC608\uC694."),
            q("13th\uB294 \uADFC\uC74C\uC5D0\uC11C \uBA87 \uB3C4 \uC704\uC758 \uC74C\uC77C\uAE4C\uC694?", ["6\uB3C4", "4\uB3C4", "5\uB3C4", "7\uB3C4"], 0, "13th = 6\uB3C4\uB97C \uD55C \uC625\uD0C0\uBE0C \uC62C\uB9B0 \uC74C\uC774\uC5D0\uC694. (6 + 7 = 13)"),
            q("\uB2E4\uC74C \uC911 G7\uC5D0 \uC5B9\uAE30\uC5D0 \uC88B\uC740 \uD150\uC158\uC740?", ["9th (\uB77C)\uC640 13th (\uBBF8)", "11th (\uB3C4)", "\uB458 \uB2E4 \uC88B\uC9C0 \uC54A\uB2E4", "\uBAA8\uB450 \uC88B\uB2E4"], 0, "11th\uB294 3\uC74C\uACFC \uBD80\uB52A\uD600\uC11C \uD53C\uD558\uACE0, 9th\uC640 13th\uB97C \uC368\uC694."),
            key("G7\uC758 **13th \uC74C**\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 4, WIDE2, "G\uC5D0\uC11C 6\uB3C4 \uC704\uC758 \uC74C\uC740 \uBBF8(E)\uC608\uC694.")
          ]
        },
        {
          id: "u9l3",
          title: "\uD150\uC158 \uD45C\uAE30\uC640 \uBCC0\uD615 \uD150\uC158",
          minutes: 9,
          steps: [
            text(
              "\uC774\uB984 \uC77D\uB294 \uBC95, \uADF8\uB9AC\uACE0 \uBC18\uC74C \uC62C\uB9AC\uACE0 \uB0B4\uB9AC\uAE30",
              `\uD150\uC158\uC774 \uB4E4\uC5B4\uAC04 \uCF54\uB4DC\uB294 \uC774\uB807\uAC8C \uC368\uC694.

- **Cmaj9**: \uBA54\uC774\uC800 7th\uC5D0 9th
- **Dm9**: \uB9C8\uC774\uB108 7th\uC5D0 9th, **Dm11**\uC740 11th\uAE4C\uC9C0
- **G9**: \uB3C4\uBBF8\uB10C\uD2B8 7th\uC5D0 9th. \uC22B\uC790\uB9CC \uC4F0\uBA74 **7th\uB97C \uD3EC\uD568\uD55C \uAC83**\uC774\uC5D0\uC694.
- **G13**: \uB3C4\uBBF8\uB10C\uD2B8 7th\uC5D0 9th, 13th\uAE4C\uC9C0

\uD150\uC158\uC744 **\uBC18\uC74C \uC62C\uB9AC\uAC70\uB098 \uB0B4\uB9AC\uBA74** \uC0C9\uAE54\uC774 \uB354 \uAC15\uD574\uC838\uC694. \uC774\uAC83\uC744 [[altered-tension|\uC5BC\uD130\uB4DC(\uBCC0\uD615) \uD150\uC158]]\uC774\uB77C\uACE0 \uD574\uC694.

- 9th\uB97C \uBC18\uC74C \uB0B4\uB9BC: **\u266D9** (G7(\u266D9) = \uC194 \uC2DC \uB808 \uD30C \uB77C\u266D)
- 9th\uB97C \uBC18\uC74C \uC62C\uB9BC: **\u266F9** (G7(\u266F9) = \uC194 \uC2DC \uB808 \uD30C \uB77C\u266F)
- 11th\uB97C \uBC18\uC74C \uC62C\uB9BC: **\u266F11** (Cmaj7(\u266F11) = \uB3C4 \uBBF8 \uC194 \uC2DC \uD30C\u266F)
- 13th\uB97C \uBC18\uC74C \uB0B4\uB9BC: **\u266D13**

\uBCC0\uD615 \uD150\uC158\uC740 \uC8FC\uB85C **\uB3C4\uBBF8\uB10C\uD2B8 7th**\uC5D0\uC11C \uC4F0\uC5EC\uC694. \uAE34\uC7A5\uC774 \uD6E8\uC52C \uC138\uC838\uC11C 1\uB85C \uB3CC\uC544\uAC00\uACE0 \uC2F6\uC740 \uD798\uC774 \uB354 \uAC15\uD574\uC838\uC694.`
            ),
            listen(
              "G7\uC5D0 \uC5EC\uB7EC \uD150\uC158\uC744 \uC5B9\uC5B4 \uBE44\uAD50\uD574 \uBCF4\uC138\uC694. \uADF8\uB9AC\uACE0 1(Cmaj7)\uB85C \uD480\uB9AC\uB294 \uC18C\uB9AC\uB3C4 \uB4E4\uC5B4 \uBCF4\uC138\uC694.",
              [
                ci("G7"),
                ci("G7(\u266D9)"),
                ci("G7(\u266F9)"),
                ci("G7(\u266D13)"),
                pi("G7 \u2192 Cmaj7", "G7 Cmaj7", 1),
                pi("G7(\u266D9) \u2192 Cmaj7", "G7(\u266D9) Cmaj7", 1),
                pi("G7(\u266F9) \u2192 Cmaj7", "G7(\u266F9) Cmaj7", 1)
              ],
              TALL
            ),
            build("**G7(\u266D9)**\uB97C \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uC194, \uC2DC, \uB808, \uD30C, \uB77C\u266D)", "G7(\u266D9)"),
            earC("\uC5B4\uB5A4 \uCF54\uB4DC\uC77C\uAE4C\uC694?", "G9", ["G7", "G9", "G7(\u266D9)"], 1, "\uC790\uC5F0\uC2A4\uB7EC\uC6B4 9th\uAC00 \uC5B9\uD78C G9\uC608\uC694."),
            earC("\uC5B4\uB5A4 \uCF54\uB4DC\uC77C\uAE4C\uC694?", "G7(\u266D9)", ["G7", "G9", "G7(\u266D9)"], 2, "9th\uAC00 \uBC18\uC74C \uB0B4\uB824\uAC00\uC11C \uB0A0\uCE74\uB86D\uAC8C \uAE34\uC7A5\uB3FC\uC694. G7(\u266D9)\uC608\uC694."),
            q("G7\uC758 9th\uB97C \uBC18\uC74C \uB0B4\uB9B0 \u266D9 \uC74C\uC740?", ["\uB77C\u266D (A\u266D)", "\uB77C (A)", "\uC2DC\u266D (B\u266D)", "\uC194\u266F (G\u266F)"], 0, "9th\uB294 \uB77C(A)\uC774\uACE0, \uBC18\uC74C \uB0B4\uB9AC\uBA74 \uB77C\u266D(A\u266D)\uC774\uC5D0\uC694."),
            q("Cmaj7(\u266F11)\uC758 \u266F11 \uC74C\uC740?", ["\uD30C\u266F (F\u266F)", "\uD30C (F)", "\uC194 (G)", "\uC2DC\u266D (B\u266D)"], 0, "11th\uB294 \uD30C(F)\uC774\uACE0, \uBC18\uC74C \uC62C\uB9AC\uBA74 \uD30C\u266F(F\u266F)\uC774\uC5D0\uC694."),
            q("G9\uC640 \uAC19\uC740 \uD45C\uAE30\uC5D0\uC11C \uC22B\uC790 9\uAC00 \uB73B\uD558\uB294 \uAC83\uC740?", ["\uB3C4\uBBF8\uB10C\uD2B8 7th\uC5D0 9th\uB97C \uC5B9\uC740 \uCF54\uB4DC", "\uBA54\uC774\uC800 7th\uC5D0 9th\uB97C \uC5B9\uC740 \uCF54\uB4DC", "3\uD654\uC74C\uC5D0 9th\uB9CC \uC5B9\uC740 \uCF54\uB4DC", "9\uBC88\uC9F8 \uCF54\uB4DC"], 0, "\uC22B\uC790\uB9CC \uC4F0\uBA74 \uB3C4\uBBF8\uB10C\uD2B8 7th\uB97C \uD3EC\uD568\uD574\uC694. \uBA54\uC774\uC800 7th\uC77C \uB54C\uB294 maj9\uB85C \uC368\uC694."),
            q("\uBCC0\uD615 \uD150\uC158(\u266D9, \u266F9 \uB4F1)\uC774 \uAC00\uC7A5 \uD754\uD788 \uC4F0\uC774\uB294 \uCF54\uB4DC\uB294?", ["\uB3C4\uBBF8\uB10C\uD2B8 7th", "\uBA54\uC774\uC800 7th", "\uB9C8\uC774\uB108 7th", "\uAC10\uD654\uC74C"], 0, "\uB3C4\uBBF8\uB10C\uD2B8 7th\uC758 \uAE34\uC7A5\uC744 \uB354 \uC138\uAC8C \uB9CC\uB4E4\uC5B4\uC11C 1\uB85C \uAC00\uB294 \uD798\uC744 \uD0A4\uC6CC\uC694."),
            key("G7(\u266F9)\uC758 **\u266F9 \uC74C**\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694. (\uB77C\uB97C \uBC18\uC74C \uC62C\uB9B0 \uC74C)", 10, WIDE2, "\uB77C(A)\uC758 \uBC18\uC74C \uC704\uB294 \uB77C\u266F(A\u266F = B\u266D)\uC774\uC5D0\uC694.")
          ]
        },
        {
          id: "u9l4",
          title: "\uD150\uC158\uC73C\uB85C \uC9C4\uD589 \uAFB8\uBBF8\uAE30",
          minutes: 9,
          steps: [
            text(
              "\uAC19\uC740 \uC9C4\uD589, \uB354 \uD48D\uC131\uD55C \uC18C\uB9AC",
              `\uC774\uC81C \uD150\uC158\uC744 \uCF54\uB4DC \uC9C4\uD589\uC5D0 \uC785\uD600 \uBCFC\uAC8C\uC694. \uAE30\uB2A5\uC740 \uBC14\uB00C\uC9C0 \uC54A\uACE0 \uC18C\uB9AC\uC758 \uC0C9\uAE54\uB9CC \uB2EC\uB77C\uC838\uC694.

- \uAE30\uBCF8: Dm7 \u2192 G7 \u2192 Cmaj7
- \uD150\uC158: **Dm9 \u2192 G13 \u2192 Cmaj9**

\uB9C8\uC774\uB108 2-5-1\uC5D0\uC11C\uB294 \uB3C4\uBBF8\uB10C\uD2B8\uC5D0 \uBCC0\uD615 \uD150\uC158\uC744 \uC5B9\uB294 \uC77C\uC774 \uB9CE\uC544\uC694.

- **Dm7\u266D5 \u2192 G7(\u266D9) \u2192 Cm7**

\uD150\uC158\uC740 \uB9CE\uC744\uC218\uB85D \uC88B\uC740 \uAC8C \uC544\uB2C8\uC5D0\uC694. \uACE1\uC758 \uBD84\uC704\uAE30\uC5D0 \uB9DE\uCDB0 \uD544\uC694\uD55C \uACF3\uC5D0\uB9CC \uC5B9\uC5B4\uC694. \uC774 \uC720\uB2DB\uAE4C\uC9C0 \uBC30\uC6B0\uBA74 \uCF54\uB4DC \uC774\uB984\uC744 \uBCF4\uACE0 \uC5B4\uB5A4 \uC18C\uB9AC\uAC00 \uB0A0\uC9C0 \uC0C1\uC0C1\uD560 \uC218 \uC788\uC5B4\uC694.`
            ),
            listen(
              "\uAE30\uBCF8 \uC9C4\uD589\uACFC \uD150\uC158\uC744 \uC785\uD78C \uC9C4\uD589\uC744 \uBC88\uAC08\uC544 \uB4E4\uC5B4 \uBCF4\uC138\uC694.",
              [
                pi("\uAE30\uBCF8: Dm7 \u2192 G7 \u2192 Cmaj7", "Dm7 G7 Cmaj7", 1),
                pi("\uD150\uC158: Dm9 \u2192 G13 \u2192 Cmaj9", "Dm9 G13 Cmaj9", 1),
                pi("\uB9C8\uC774\uB108: Dm7\u266D5 \u2192 G7(\u266D9) \u2192 Cm7", "Dm7\u266D5 G7(\u266D9) Cm7", 1),
                pi("1-6-2-5 \uD150\uC158: Cmaj9 \u2192 Am9 \u2192 Dm9 \u2192 G9", "Cmaj9 Am9 Dm9 G9", 1)
              ],
              TALL
            ),
            earP("\uAE30\uBCF8 7th \uCF54\uB4DC \uC9C4\uD589\uC77C\uAE4C\uC694, \uD150\uC158\uC774 \uB4E4\uC5B4\uAC04 \uC9C4\uD589\uC77C\uAE4C\uC694?", prog("Dm7 G7 Cmaj7"), ["\uAE30\uBCF8 7th \uCF54\uB4DC", "\uD150\uC158\uC774 \uB4E4\uC5B4\uAC10"], 0, "\uB2F4\uBC31\uD55C \uAE30\uBCF8 2-5-1\uC774\uC5D0\uC694.", 1),
            earP("\uAE30\uBCF8 7th \uCF54\uB4DC \uC9C4\uD589\uC77C\uAE4C\uC694, \uD150\uC158\uC774 \uB4E4\uC5B4\uAC04 \uC9C4\uD589\uC77C\uAE4C\uC694?", prog("Dm9 G13 Cmaj9"), ["\uAE30\uBCF8 7th \uCF54\uB4DC", "\uD150\uC158\uC774 \uB4E4\uC5B4\uAC10"], 1, "\uD48D\uC131\uD55C \uD150\uC158 \uBC84\uC804\uC774\uC5D0\uC694.", 1),
            q("Dm9 \u2192 G13 \u2192 Cmaj9\uC758 \uCF54\uB4DC \uAE30\uB2A5 \uC21C\uC11C\uB294?", ["SD - D - T", "T - SD - D", "D - T - SD", "SD - T - D"], 0, "\uD150\uC158\uC744 \uC5B9\uC5B4\uB3C4 \uAE30\uB2A5\uC740 \uADF8\uB300\uB85C\uC608\uC694. Dm(SD), G(D), C(T)."),
            q("G13\uC740 \uC5B4\uB5A4 \uAE30\uB2A5\uC77C\uAE4C\uC694? (C \uD0A4)", ["\uB3C4\uBBF8\uB10C\uD2B8 (D)", "\uD1A0\uB2C9 (T)", "\uC11C\uBE0C\uB3C4\uBBF8\uB10C\uD2B8 (SD)", "\uAE30\uB2A5\uC774 \uC5C6\uB2E4"], 0, "G \uC704\uC758 \uCF54\uB4DC\uB294 V\uC774\uBBC0\uB85C \uB3C4\uBBF8\uB10C\uD2B8\uC608\uC694. \uC22B\uC790 13\uC740 \uB3C4\uBBF8\uB10C\uD2B8 7th\uC5D0 \uD150\uC158\uC774 \uC5B9\uD78C \uAC83\uC774\uC5D0\uC694."),
            q("\uB9C8\uC774\uB108 2-5-1\uC5D0\uC11C \uB3C4\uBBF8\uB10C\uD2B8\uC5D0 \uC790\uC8FC \uC5B9\uB294 \uD150\uC158\uC740?", ["\u266D9", "11th", "\uBA54\uC774\uC800 7th", "\uC5C6\uB2E4"], 0, "G7(\u266D9)\uCC98\uB7FC \uBCC0\uD615 \uD150\uC158\uC73C\uB85C \uB9C8\uC774\uB108\uC758 \uC5B4\uB450\uC6B4 \uAE34\uC7A5\uAC10\uC744 \uB354\uD574\uC694."),
            q("\uD150\uC158\uC744 \uC5B9\uB294 \uBAA9\uC801\uC73C\uB85C \uAC00\uC7A5 \uC54C\uB9DE\uC740 \uAC83\uC740?", ["\uCF54\uB4DC\uC758 \uC0C9\uAE54\uACFC \uBD84\uC704\uAE30\uB97C \uB354\uD558\uB824\uACE0", "\uCF54\uB4DC\uC758 \uAE30\uB2A5\uC744 \uBC14\uAFB8\uB824\uACE0", "\uD0A4\uB97C \uBC14\uAFB8\uB824\uACE0", "\uCF54\uB4DC \uAC1C\uC218\uB97C \uC904\uC774\uB824\uACE0"], 0, "\uAE30\uBCF8 \uBF08\uB300(1\xB73\xB75\xB77)\uB294 \uADF8\uB300\uB85C \uB450\uACE0 \uC0C9\uC744 \uB354\uD574\uC694."),
            build("**Am9**\uB97C \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uB77C, \uB3C4, \uBBF8, \uC194, \uC2DC)", "Am9", { hint: false }),
            build("**Cmaj9**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uB3C4, \uBBF8, \uC194, \uC2DC, \uB808)", "Cmaj9", { hint: false }),
            key("Cmaj9\uC758 **9th \uC74C**\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 2, WIDE2, "\uB3C4\uC5D0\uC11C 2\uB3C4 \uC704(\uD55C \uC625\uD0C0\uBE0C \uB118\uC5B4\uC11C)\uB294 \uB808(D)\uC608\uC694.")
          ]
        }
      ]
    }
  ];

  // content/ko/units-voicing.js
  var WIDE3 = [60, 83];
  var LOW = [59, 83];
  var CFGC_ROOT = prog("C F G C");
  var CFGC_SMOOTH = [[60, 64, 67], [60, 65, 69], [59, 62, 67], [60, 64, 67]];
  var II_V_I_ROOT = prog("Dm7 G7 Cmaj7");
  var II_V_I_SMOOTH = [[62, 65, 69, 72], [62, 65, 67, 71], [60, 64, 67, 71]];
  var BASSLINE = [[72, 76, 79], ..."G/B Am Em/G F C/E Dm G".split(" ").map(ch)];
  var units_voicing_default = [
    {
      id: "u10",
      title: "\uC804\uC704\xB7\uBCF4\uC774\uC2F1\xB7\uBCF4\uC774\uC2A4 \uB9AC\uB529",
      desc: "\uAC19\uC740 \uCF54\uB4DC\uB97C \uBC30\uCE58\uB9CC \uBC14\uAFD4\uC11C \uB354 \uBD80\uB4DC\uB7FD\uAC8C \uC5F0\uACB0\uD558\uB294 \uBC95\uC744 \uBC30\uC6CC\uC694.",
      lessons: [
        {
          id: "u10l1",
          title: "\uC804\uC704: \uB9E8 \uC544\uB798 \uC74C \uBC14\uAFB8\uAE30",
          minutes: 8,
          steps: [
            text(
              "\uAC19\uC740 \uC74C, \uB2E4\uB978 \uB9E8 \uC544\uB798 \uC74C",
              `\uC9C0\uAE08\uAE4C\uC9C0 \uCF54\uB4DC\uB294 \uD56D\uC0C1 **\uADFC\uC74C\uC744 \uB9E8 \uC544\uB798**\uC5D0 \uB193\uACE0 \uC313\uC558\uC5B4\uC694. \uADF8\uB7F0\uB370 \uAD6C\uC131\uC74C\uC740 \uADF8\uB300\uB85C \uB450\uACE0 **\uB9E8 \uC544\uB798 \uC74C([[bass|\uBCA0\uC774\uC2A4]])\uB9CC \uBC14\uAFD4\uC11C** \uBC30\uCE58\uD560 \uC218\uB3C4 \uC788\uC5B4\uC694. \uC774\uAC83\uC744 [[inversion|\uC804\uC704]]\uB77C\uACE0 \uD574\uC694.

C \uCF54\uB4DC(\uB3C4 \uBBF8 \uC194)\uB85C \uBCF4\uBA74,
- **\uAE30\uBCF8\uD615**: \uB3C4\uAC00 \uB9E8 \uC544\uB798 \u2192 \uB3C4 \uBBF8 \uC194
- **1\uC804\uC704**: 3\uC74C\uC774 \uB9E8 \uC544\uB798 \u2192 \uBBF8 \uC194 \uB3C4
- **2\uC804\uC704**: 5\uC74C\uC774 \uB9E8 \uC544\uB798 \u2192 \uC194 \uB3C4 \uBBF8

\uC804\uC704\uD574\uB3C4 \uCF54\uB4DC\uB294 \uBC14\uB00C\uC9C0 \uC54A\uACE0 \uAC19\uC740 C \uCF54\uB4DC\uC608\uC694. \uB2EC\uB77C\uC9C0\uB294 \uAC74 \uC18C\uB9AC\uC758 \uBC14\uB2E5\uBFD0\uC774\uC5D0\uC694. \uAE30\uBCF8\uD615\uC740 \uB2E8\uB2E8\uD558\uACE0 \uC548\uC815\uC801\uC774\uACE0, 1\uC804\uC704\uB294 \uAC00\uBCCD\uACE0 \uBD80\uB4DC\uB7FD\uACE0, 2\uC804\uC704\uB294 \uC5B4\uB518\uAC00 \uB5A0 \uC788\uB294 \uB290\uB08C\uC774\uC5D0\uC694.

\uD45C\uAE30\uB294 [[slash-chord|\uC2AC\uB798\uC2DC \uCF54\uB4DC]]\uB85C \uD574\uC694. **C/E**\uB294 "C \uCF54\uB4DC, \uB9E8 \uC544\uB798\uB294 E"\uB77C\uB294 \uB73B\uC774\uC5D0\uC694. \uC2AC\uB798\uC2DC \uB4A4\uC758 \uC74C\uC774 \uBCA0\uC774\uC2A4\uC608\uC694.`
            ),
            listen(
              "\uAC19\uC740 C \uCF54\uB4DC\uC758 \uC138 \uAC00\uC9C0 \uBC30\uCE58\uB97C \uBE44\uAD50\uD574 \uBCF4\uC138\uC694. \uAC74\uBC18\uC5D0\uC11C \uB9E8 \uC544\uB798 \uC74C\uC774 \uC5B4\uB514\uC778\uC9C0 \uBCF4\uC138\uC694.",
              [
                ci("C", "C \uAE30\uBCF8\uD615 (\uB3C4 \uBBF8 \uC194)"),
                ci("C/E", "C/E 1\uC804\uC704 (\uBBF8 \uC194 \uB3C4)"),
                ci("C/G", "C/G 2\uC804\uC704 (\uC194 \uB3C4 \uBBF8)"),
                ci("G/B", "G/B 1\uC804\uC704 (\uC2DC \uB808 \uC194)"),
                ci("F/A", "F/A 1\uC804\uC704 (\uB77C \uB3C4 \uD30C)")
              ],
              WIDE3
            ),
            play("C/E(1\uC804\uC704)\uB97C **\uC544\uB798\uC5D0\uC11C \uC704\uB85C** \uCC28\uB840\uB85C \uB20C\uB7EC \uBCF4\uC138\uC694. (\uBBF8 \u2192 \uC194 \u2192 \uB3C4)", pcsOf("C/E"), WIDE3),
            play("C/G(2\uC804\uC704)\uB97C **\uC544\uB798\uC5D0\uC11C \uC704\uB85C** \uCC28\uB840\uB85C \uB20C\uB7EC \uBCF4\uC138\uC694. (\uC194 \u2192 \uB3C4 \u2192 \uBBF8)", pcsOf("C/G"), WIDE3),
            earC("\uAE30\uBCF8\uD615\uC77C\uAE4C\uC694, 1\uC804\uC704\uC77C\uAE4C\uC694, 2\uC804\uC704\uC77C\uAE4C\uC694? \uB9E8 \uC544\uB798 \uC74C\uC5D0 \uADC0\uB97C \uAE30\uC6B8\uC5EC \uBCF4\uC138\uC694.", "C", ["\uAE30\uBCF8\uD615", "1\uC804\uC704", "2\uC804\uC704"], 0, "\uB3C4\uAC00 \uB9E8 \uC544\uB798, \uAE30\uBCF8\uD615\uC774\uC5D0\uC694."),
            earC("\uAE30\uBCF8\uD615\uC77C\uAE4C\uC694, 1\uC804\uC704\uC77C\uAE4C\uC694, 2\uC804\uC704\uC77C\uAE4C\uC694? \uB9E8 \uC544\uB798 \uC74C\uC5D0 \uADC0\uB97C \uAE30\uC6B8\uC5EC \uBCF4\uC138\uC694.", "C/E", ["\uAE30\uBCF8\uD615", "1\uC804\uC704", "2\uC804\uC704"], 1, "\uBBF8(3\uC74C)\uAC00 \uB9E8 \uC544\uB798, 1\uC804\uC704\uC608\uC694."),
            earC("\uAE30\uBCF8\uD615\uC77C\uAE4C\uC694, 1\uC804\uC704\uC77C\uAE4C\uC694, 2\uC804\uC704\uC77C\uAE4C\uC694? \uB9E8 \uC544\uB798 \uC74C\uC5D0 \uADC0\uB97C \uAE30\uC6B8\uC5EC \uBCF4\uC138\uC694.", "C/G", ["\uAE30\uBCF8\uD615", "1\uC804\uC704", "2\uC804\uC704"], 2, "\uC194(5\uC74C)\uC774 \uB9E8 \uC544\uB798, 2\uC804\uC704\uC608\uC694."),
            q("C/E\uC5D0\uC11C \uC2AC\uB798\uC2DC(/) \uB4A4\uC758 E\uB294 \uBB34\uC5C7\uC744 \uB73B\uD560\uAE4C\uC694?", ["\uB9E8 \uC544\uB798\uC5D0 \uB193\uC774\uB294 \uBCA0\uC774\uC2A4 \uC74C", "\uCF54\uB4DC\uC5D0\uC11C \uAC00\uC7A5 \uB192\uC740 \uC74C", "\uCF54\uB4DC \uC774\uB984\uC774 E\uB85C \uBC14\uB010\uB2E4\uB294 \uB73B", "\uC870\uC62E\uAE40\uD560 \uC74C"], 0, "\uC2AC\uB798\uC2DC \uB4A4\uC758 \uC74C\uC774 \uBCA0\uC774\uC2A4(\uB9E8 \uC544\uB798 \uC74C)\uC608\uC694."),
            q("3\uC74C\uC774 \uB9E8 \uC544\uB798\uC5D0 \uC624\uB294 \uBC30\uCE58\uB97C \uBB50\uB77C\uACE0 \uBD80\uB97C\uAE4C\uC694?", ["1\uC804\uC704", "\uAE30\uBCF8\uD615", "2\uC804\uC704", "\uC5F4\uB9B0 \uBC30\uCE58"], 0, "3\uC74C\uC774 \uB9E8 \uC544\uB798\uBA74 1\uC804\uC704\uC608\uC694."),
            q("5\uC74C\uC774 \uB9E8 \uC544\uB798\uC5D0 \uC624\uB294 \uBC30\uCE58\uB97C \uBB50\uB77C\uACE0 \uBD80\uB97C\uAE4C\uC694?", ["2\uC804\uC704", "1\uC804\uC704", "\uAE30\uBCF8\uD615", "3\uC804\uC704"], 0, "5\uC74C\uC774 \uB9E8 \uC544\uB798\uBA74 2\uC804\uC704\uC608\uC694."),
            q("C \uCF54\uB4DC\uB97C \uC804\uC704\uD574\uB3C4 \uBC14\uB00C\uC9C0 \uC54A\uB294 \uAC83\uC740?", ["\uAD6C\uC131\uC74C\uACFC \uCF54\uB4DC \uC885\uB958", "\uB9E8 \uC544\uB798 \uC74C", "\uC18C\uB9AC\uC758 \uC548\uC815\uAC10", "\uAC74\uBC18 \uC704\uC758 \uBAA8\uC591"], 0, "\uC804\uC704\uB294 \uAC19\uC740 \uCF54\uB4DC\uB97C \uBC30\uCE58\uB9CC \uBC14\uAFBC \uAC70\uC608\uC694. \uAD6C\uC131\uC74C\uC740 \uADF8\uB300\uB85C\uC608\uC694."),
            q("G/B\uC758 \uAD6C\uC131\uC74C\uC740?", ["G, B, D", "B, D, F", "G, B\u266D, D", "B, D\u266F, F\u266F"], 0, "G \uCF54\uB4DC(\uC194 \uC2DC \uB808)\uB97C \uC2DC\uAC00 \uB9E8 \uC544\uB798\uC5D0 \uC624\uAC8C \uCE5C \uAC70\uC608\uC694."),
            key("F \uCF54\uB4DC\uC758 1\uC804\uC704(F/A)\uC5D0\uC11C **\uB9E8 \uC544\uB798 \uC74C**\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 9, WIDE3, "1\uC804\uC704\uB294 3\uC74C\uC774 \uB9E8 \uC544\uB798\uC608\uC694. F \uCF54\uB4DC\uC758 3\uC74C\uC740 \uB77C(A)\uC608\uC694."),
            key("C/G\uC758 **\uB9E8 \uC544\uB798 \uC74C**\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 7, WIDE3, "\uC2AC\uB798\uC2DC \uB4A4\uC758 \uC194(G)\uC774 \uB9E8 \uC544\uB798\uC608\uC694.")
          ]
        },
        {
          id: "u10l2",
          title: "\uBCF4\uC774\uC2F1: \uB2EB\uD78C \uBC30\uCE58\uC640 \uC5F4\uB9B0 \uBC30\uCE58",
          minutes: 7,
          steps: [
            text(
              "\uCF54\uB4DC\uB97C \uC5B4\uB5BB\uAC8C \uD3BC\uCCD0 \uB193\uC744\uAE4C",
              `\uAC19\uC740 \uCF54\uB4DC\uB3C4 \uC74C\uC744 **\uC5B4\uB5A4 \uB192\uC774\uC5D0 \uB193\uB290\uB0D0**\uC5D0 \uB530\uB77C \uC18C\uB9AC\uAC00 \uB2EC\uB77C\uC838\uC694. \uC774 \uC74C\uC758 \uBC30\uCE58\uB97C [[voicing|\uBCF4\uC774\uC2F1]]\uC774\uB77C\uACE0 \uD574\uC694. \uC804\uC704\uB3C4 \uBCF4\uC774\uC2F1\uC758 \uD55C \uC885\uB958\uC608\uC694.

- [[close-voicing|\uB2EB\uD78C \uBC30\uCE58]]: \uBAA8\uB4E0 \uC74C\uC774 \uD55C \uC625\uD0C0\uBE0C \uC548\uC5D0 \uBAA8\uC5EC \uC788\uC5B4\uC694. \uB610\uB837\uD558\uACE0 \uC751\uC9D1\uB41C \uC18C\uB9AC. C = \uB3C4 \uBBF8 \uC194
- [[open-voicing|\uC5F4\uB9B0 \uBC30\uCE58]]: \uC74C \uC0AC\uC774\uB97C \uB113\uAC8C \uBC8C\uB824 \uD55C \uC625\uD0C0\uBE0C\uB97C \uB118\uACA8\uC694. \uD0C1 \uD2B8\uC774\uACE0 \uD48D\uC131\uD55C \uC18C\uB9AC. \uAC00\uC6B4\uB370 \uC74C\uC744 \uD55C \uC625\uD0C0\uBE0C \uC62C\uB9AC\uB294 \uC2DD\uC774\uC5D0\uC694. C = \uB3C4 \uC194 \uBBF8(\uB192\uC740 \uBBF8)

\uC5F4\uB9B0 \uBC30\uCE58\uB294 \uAD6C\uC131\uC74C\uC774 \uB611\uAC19\uC9C0\uB9CC \uB354 \uB113\uAC8C \uC6B8\uB824\uC11C \uC5F0\uC8FC\uB098 \uD3B8\uACE1\uC5D0\uC11C \uC790\uC8FC \uC368\uC694. \uD2B9\uD788 \uB0AE\uC740 \uC74C\uC5ED\uC5D0\uC11C\uB294 \uAC00\uAE4C\uC6B4 \uC74C\uB07C\uB9AC \uBD80\uB52A\uD600 \uD0C1\uD574\uC9C0\uAE30 \uC26C\uC6CC\uC11C, \uAC04\uACA9\uC744 \uB113\uD600 \uC8FC\uB294 \uAC83\uC774 \uC88B\uC544\uC694.`
            ),
            listen(
              "\uAC19\uC740 \uCF54\uB4DC\uC758 \uB2EB\uD78C \uBC30\uCE58\uC640 \uC5F4\uB9B0 \uBC30\uCE58\uB97C \uBC88\uAC08\uC544 \uB4E4\uC5B4 \uBCF4\uC138\uC694.",
              [
                { label: "C \uB2EB\uD78C \uBC30\uCE58 (\uB3C4 \uBBF8 \uC194)", midis: [60, 64, 67], mode: "both" },
                { label: "C \uC5F4\uB9B0 \uBC30\uCE58 (\uB3C4 \uC194 \uBBF8)", midis: [60, 67, 76], mode: "both" },
                { label: "Cmaj7 \uB2EB\uD78C \uBC30\uCE58", midis: [60, 64, 67, 71], mode: "both" },
                { label: "Cmaj7 \uC5F4\uB9B0 \uBC30\uCE58 (\uB3C4 \uC194 \uC2DC \uBBF8)", midis: [60, 67, 71, 76], mode: "both" },
                { label: "Dm7 \uB2EB\uD78C \uBC30\uCE58", midis: [62, 65, 69, 72], mode: "both" },
                { label: "Dm7 \uC5F4\uB9B0 \uBC30\uCE58 (\uB808 \uB77C \uB3C4 \uD30C)", midis: [62, 69, 72, 77], mode: "both" }
              ],
              WIDE3
            ),
            play("C **\uC5F4\uB9B0 \uBC30\uCE58**\uB97C \uC544\uB798\uC5D0\uC11C \uC704\uB85C \uB20C\uB7EC \uBCF4\uC138\uC694. (\uB3C4 \u2192 \uC194 \u2192 \uBBF8)", [0, 7, 4], WIDE3),
            ear("\uB2EB\uD78C \uBC30\uCE58\uC77C\uAE4C\uC694, \uC5F4\uB9B0 \uBC30\uCE58\uC77C\uAE4C\uC694?", [60, 64, 67], "both", ["\uB2EB\uD78C \uBC30\uCE58", "\uC5F4\uB9B0 \uBC30\uCE58"], 0, "\uC138 \uC74C\uC774 \uAC00\uAE5D\uAC8C \uBAA8\uC5EC \uC788\uC5B4\uC694. \uB2EB\uD78C \uBC30\uCE58\uC608\uC694."),
            ear("\uB2EB\uD78C \uBC30\uCE58\uC77C\uAE4C\uC694, \uC5F4\uB9B0 \uBC30\uCE58\uC77C\uAE4C\uC694?", [60, 67, 76], "both", ["\uB2EB\uD78C \uBC30\uCE58", "\uC5F4\uB9B0 \uBC30\uCE58"], 1, "\uC74C \uC0AC\uC774\uAC00 \uB113\uAC8C \uBC8C\uC5B4\uC838 \uC788\uC5B4\uC694. \uC5F4\uB9B0 \uBC30\uCE58\uC608\uC694."),
            ear("\uB2EB\uD78C \uBC30\uCE58\uC77C\uAE4C\uC694, \uC5F4\uB9B0 \uBC30\uCE58\uC77C\uAE4C\uC694?", [62, 69, 72, 77], "both", ["\uB2EB\uD78C \uBC30\uCE58", "\uC5F4\uB9B0 \uBC30\uCE58"], 1, "Dm7\uC758 \uC5F4\uB9B0 \uBC30\uCE58\uC608\uC694. \uAC00\uC6B4\uB370 \uC74C\uC774 \uD55C \uC625\uD0C0\uBE0C \uC704\uB85C \uC62C\uB77C\uAC00 \uC788\uC5B4\uC694."),
            ear("\uB2EB\uD78C \uBC30\uCE58\uC77C\uAE4C\uC694, \uC5F4\uB9B0 \uBC30\uCE58\uC77C\uAE4C\uC694?", [60, 64, 67, 71], "both", ["\uB2EB\uD78C \uBC30\uCE58", "\uC5F4\uB9B0 \uBC30\uCE58"], 0, "Cmaj7\uC758 \uB2EB\uD78C \uBC30\uCE58\uC608\uC694."),
            q("\uB2EB\uD78C \uBC30\uCE58\uC758 \uD2B9\uC9D5\uC740?", ["\uBAA8\uB4E0 \uC74C\uC774 \uD55C \uC625\uD0C0\uBE0C \uC548\uC5D0 \uBAA8\uC5EC \uC788\uB2E4", "\uC74C \uC0AC\uC774\uAC00 \uD55C \uC625\uD0C0\uBE0C \uC774\uC0C1 \uBC8C\uC5B4\uC838 \uC788\uB2E4", "\uBCA0\uC774\uC2A4\uAC00 \uC5C6\uB2E4", "\uADFC\uC74C\uC774 \uB9E8 \uC704\uC5D0 \uC788\uB2E4"], 0, "\uB2EB\uD78C \uBC30\uCE58\uB294 \uC74C\uC774 \uAC00\uAE5D\uAC8C \uBAA8\uC5EC \uC788\uC5B4\uC694."),
            q("\uC5F4\uB9B0 \uBC30\uCE58\uB97C \uB9CC\uB4DC\uB294 \uBC29\uBC95\uC73C\uB85C \uC54C\uB9DE\uC740 \uAC83\uC740?", ["\uAC00\uC6B4\uB370 \uC74C\uC744 \uD55C \uC625\uD0C0\uBE0C \uC62C\uB9B0\uB2E4", "\uBAA8\uB4E0 \uC74C\uC744 \uBC18\uC74C\uC529 \uB0B4\uB9B0\uB2E4", "\uADFC\uC74C\uC744 \uC5C6\uC564\uB2E4", "\uC74C\uC744 \uD558\uB098 \uB354 \uC313\uB294\uB2E4"], 0, "\uAC00\uC6B4\uB370 \uC74C\uC744 \uD55C \uC625\uD0C0\uBE0C \uC62C\uB824\uC11C \uAC04\uACA9\uC744 \uBC8C\uB824\uC694."),
            q("C = \uB3C4 \uBBF8 \uC194\uC744 \uC5F4\uB9B0 \uBC30\uCE58(\uB3C4 \uC194 \uBBF8)\uB85C \uBC14\uAFC0 \uB54C \uD55C \uC625\uD0C0\uBE0C \uC62C\uB77C\uAC04 \uC74C\uC740?", ["\uBBF8 (3\uC74C)", "\uC194 (5\uC74C)", "\uB3C4 (\uADFC\uC74C)", "\uC544\uBB34\uAC83\uB3C4 \uC548 \uC62C\uB77C\uAC04\uB2E4"], 0, "\uBBF8(3\uC74C)\uB97C \uD55C \uC625\uD0C0\uBE0C \uC62C\uB824\uC11C \uB3C4 \uC194 \uBBF8 \uC21C\uC11C\uAC00 \uB410\uC5B4\uC694."),
            q("\uAC19\uC740 \uCF54\uB4DC\uB97C \uB2EB\uD78C \uBC30\uCE58\uC640 \uC5F4\uB9B0 \uBC30\uCE58\uB85C \uCCE4\uC744 \uB54C \uB611\uAC19\uC740 \uAC83\uC740?", ["\uAD6C\uC131\uC74C(\uC74C \uC774\uB984)", "\uC74C \uC0AC\uC774\uC758 \uAC04\uACA9", "\uC18C\uB9AC\uC758 \uB113\uC774", "\uAC00\uC7A5 \uB192\uC740 \uC74C"], 0, "\uAD6C\uC131\uC74C\uC740 \uAC19\uACE0 \uBC30\uCE58\uB9CC \uB2EC\uB77C\uC694."),
            q("\uB0AE\uC740 \uC74C\uC5ED\uC5D0\uC11C \uCF54\uB4DC\uB97C \uCE60 \uB54C \uC18C\uB9AC\uAC00 \uD0C1\uD574\uC9C0\uB294 \uAC83\uC744 \uC904\uC774\uB824\uBA74?", ["\uC74C \uC0AC\uC774 \uAC04\uACA9\uC744 \uB113\uD78C\uB2E4", "\uC74C\uC744 \uB354 \uAC00\uAE5D\uAC8C \uBAA8\uC740\uB2E4", "\uC74C\uC744 \uB354 \uB9CE\uC774 \uC313\uB294\uB2E4", "\uBE60\uB974\uAC8C \uCE5C\uB2E4"], 0, "\uB0AE\uC740 \uC74C\uC5ED\uC5D0\uC11C\uB294 \uAC00\uAE4C\uC6B4 \uC74C\uB07C\uB9AC \uBD80\uB52A\uD600 \uD0C1\uD574\uC9C0\uB2C8, \uC5F4\uB9B0 \uBC30\uCE58\uB85C \uAC04\uACA9\uC744 \uB113\uD600\uC694.")
          ]
        },
        {
          id: "u10l3",
          title: "\uBCF4\uC774\uC2A4 \uB9AC\uB529: \uBD80\uB4DC\uB7FD\uAC8C \uC787\uAE30",
          minutes: 9,
          steps: [
            text(
              "\uCF54\uB4DC\uAC00 \uBC14\uB014 \uB54C \uC74C\uC744 \uC544\uAEF4\uC11C \uC6C0\uC9C1\uC5EC\uC694",
              `\uCF54\uB4DC\uB97C \uC804\uBD80 \uAE30\uBCF8\uD615\uC73C\uB85C \uCE58\uBA74 \uCF54\uB4DC\uAC00 \uBC14\uB014 \uB54C\uB9C8\uB2E4 \uBAA8\uB4E0 \uC74C\uC774 \uD55C\uAEBC\uBC88\uC5D0 \uD06C\uAC8C \uB6F0\uC5B4\uC694. C \u2192 F\uB97C \uAE30\uBCF8\uD615\uC73C\uB85C \uCE58\uBA74 \uB3C4 \uBBF8 \uC194\uC774 \uD30C \uB77C \uB3C4\uB85C \uC138 \uC74C \uBAA8\uB450 5\uBC18\uC74C\uC529 \uC704\uB85C \uC810\uD504\uD574\uC694.

\uC804\uC704\uC640 \uBCF4\uC774\uC2F1\uC744 \uC774\uC6A9\uD574\uC11C **\uC74C\uC774 \uAC00\uB2A5\uD55C \uD55C \uC801\uAC8C \uC6C0\uC9C1\uC774\uAC8C** \uC774\uC73C\uBA74 \uD6E8\uC52C \uBD80\uB4DC\uB7FD\uAC8C \uB4E4\uB824\uC694. \uC774\uAC83\uC744 [[voice-leading|\uBCF4\uC774\uC2A4 \uB9AC\uB529]]\uC774\uB77C\uACE0 \uD574\uC694. \uC6D0\uCE59\uC740 \uB450 \uAC00\uC9C0\uC608\uC694.

1. \uB450 \uCF54\uB4DC\uC5D0 \uBAA8\uB450 \uC788\uB294 [[common-tone|\uACF5\uD1B5\uC74C]]\uC740 **\uC6C0\uC9C1\uC774\uC9C0 \uC54A\uACE0** \uADF8\uB300\uB85C \uB454\uB2E4.
2. \uB098\uBA38\uC9C0 \uC74C\uC740 **\uAC00\uC7A5 \uAC00\uAE4C\uC6B4 \uC74C**\uC73C\uB85C \uC62E\uAE34\uB2E4.

C \u2192 F \uC608: \uB3C4\uB294 \uACF5\uD1B5\uC74C\uC774\uB77C \uADF8\uB300\uB85C, \uBBF8 \u2192 \uD30C(\uBC18\uC74C), \uC194 \u2192 \uB77C(\uC628\uC74C)\uB9CC \uC6C0\uC9C1\uC5EC\uC694. \uADF8\uB7EC\uBA74 F \uCF54\uB4DC\uAC00 \uB3C4 \uD30C \uB77C(F/C, 2\uC804\uC704)\uAC00 \uB3FC\uC694.

\uADF8\uB807\uAC8C \uC774\uC740 **C \u2192 F/C \u2192 G/B \u2192 C** \uC9C4\uD589\uC744 \uAE30\uBCF8\uD615\uACFC \uBE44\uAD50\uD574\uC11C \uB4E4\uC5B4 \uBCF4\uC138\uC694.`
            ),
            listen(
              "\uAC19\uC740 C \u2192 F \u2192 G \u2192 C \uC9C4\uD589\uC744 \uB450 \uAC00\uC9C0 \uBC29\uC2DD\uC73C\uB85C \uBE44\uAD50\uD574 \uBCF4\uC138\uC694. \uAC74\uBC18\uC5D0\uC11C \uC74C\uC774 \uC5BC\uB9C8\uB098 \uC6C0\uC9C1\uC774\uB294\uC9C0\uB3C4 \uBCF4\uC138\uC694.",
              [
                pm("\uAE30\uBCF8\uD615\uC73C\uB85C \uC774\uC5B4\uC11C (C \u2192 F \u2192 G \u2192 C)", CFGC_ROOT),
                pm("\uBCF4\uC774\uC2A4 \uB9AC\uB529 (C \u2192 F/C \u2192 G/B \u2192 C)", CFGC_SMOOTH),
                pm("Dm7 \u2192 G7 \u2192 Cmaj7 (\uAE30\uBCF8\uD615)", II_V_I_ROOT),
                pm("Dm7 \u2192 G7/D \u2192 Cmaj7 (\uBCF4\uC774\uC2A4 \uB9AC\uB529)", II_V_I_SMOOTH)
              ],
              LOW
            ),
            text(
              "2-5-1\uC5D0\uC11C \uC228\uC740 \uADDC\uCE59",
              `\uBCF4\uC774\uC2A4 \uB9AC\uB529\uC73C\uB85C \uC774\uC740 2-5-1(Dm7 \u2192 G7/D \u2192 Cmaj7)\uC758 \uAC01 \uC74C\uC758 \uC6C0\uC9C1\uC784\uC744 \uB530\uB77C\uAC00 \uBCF4\uC138\uC694.

- \uB808 \u2192 \uB808 \u2192 \uB3C4
- \uD30C \u2192 \uD30C \u2192 \uBBF8
- \uB77C \u2192 \uC194 \u2192 \uC194
- \uB3C4 \u2192 \uC2DC \u2192 \uC2DC

Dm7\uC758 **\uB3C4(7\uC74C)** \uAC00 G7\uC758 **\uC2DC(3\uC74C)** \uB85C \uBC18\uC74C \uB0B4\uB824\uAC00\uACE0, G7\uC758 **\uD30C(7\uC74C)** \uAC00 Cmaj7\uC758 **\uBBF8(3\uC74C)** \uB85C \uBC18\uC74C \uB0B4\uB824\uAC00\uC694. 2-5-1\uC5D0\uC11C\uB294 **7\uC74C\uC774 \uB2E4\uC74C \uCF54\uB4DC\uC758 3\uC74C\uC73C\uB85C \uBC18\uC74C \uB0B4\uB824\uAC00\uB294** \uADDC\uCE59\uC774 \uC788\uC5B4\uC694. \uC774\uAC83\uC774 2-5-1\uC774 \uADF8\uB807\uAC8C \uB9E4\uB044\uB7FD\uAC8C \uB4E4\uB9AC\uB294 \uBE44\uBC00\uC774\uC5D0\uC694.`
            ),
            earM("\uC5B4\uB5A4 \uBC29\uC2DD\uC73C\uB85C \uC5F0\uACB0\uD55C \uC9C4\uD589\uC77C\uAE4C\uC694?", CFGC_ROOT, ["\uAE30\uBCF8\uD615\uC73C\uB85C \uC774\uC5B4\uC11C \uC74C\uC774 \uD06C\uAC8C \uB6F4\uB2E4", "\uBCF4\uC774\uC2A4 \uB9AC\uB529\uC73C\uB85C \uBD80\uB4DC\uB7FD\uAC8C \uC774\uC5B4\uC9C4\uB2E4"], 0, "\uBAA8\uB4E0 \uCF54\uB4DC\uB97C \uAE30\uBCF8\uD615\uC73C\uB85C \uCCD0\uC11C \uC74C\uC774 \uD06C\uAC8C \uB6F0\uC5B4\uC694."),
            earM("\uC5B4\uB5A4 \uBC29\uC2DD\uC73C\uB85C \uC5F0\uACB0\uD55C \uC9C4\uD589\uC77C\uAE4C\uC694?", CFGC_SMOOTH, ["\uAE30\uBCF8\uD615\uC73C\uB85C \uC774\uC5B4\uC11C \uC74C\uC774 \uD06C\uAC8C \uB6F4\uB2E4", "\uBCF4\uC774\uC2A4 \uB9AC\uB529\uC73C\uB85C \uBD80\uB4DC\uB7FD\uAC8C \uC774\uC5B4\uC9C4\uB2E4"], 1, "\uACF5\uD1B5\uC74C\uC740 \uADF8\uB300\uB85C, \uB098\uBA38\uC9C0\uB294 \uAC00\uAE4C\uC6B4 \uC74C\uC73C\uB85C \uC6C0\uC9C1\uC5EC\uC694."),
            q("C \u2192 F \uBCF4\uC774\uC2A4 \uB9AC\uB529\uC5D0\uC11C \uC6C0\uC9C1\uC774\uC9C0 \uC54A\uACE0 \uC81C\uC790\uB9AC\uC5D0 \uB0A8\uB294 \uC74C\uC740?", ["\uB3C4 (C)", "\uBBF8 (E)", "\uC194 (G)", "\uD30C (F)"], 0, "\uB3C4(C)\uAC00 C\uC640 F \uBAA8\uB450\uC5D0 \uB4E4\uC5B4 \uC788\uB294 \uACF5\uD1B5\uC74C\uC774\uC5D0\uC694."),
            q("\uADF8\uB54C C\uC758 \uBBF8(E)\uB294 \uC5B4\uB290 \uC74C\uC73C\uB85C \uC6C0\uC9C1\uC77C\uAE4C\uC694?", ["\uD30C (F)", "\uB77C (A)", "\uC194 (G)", "\uB808 (D)"], 0, "\uBBF8(E)\uB294 \uAC00\uC7A5 \uAC00\uAE4C\uC6B4 F \uCF54\uB4DC\uC758 \uC74C, \uD30C(F)\uB85C \uBC18\uC74C \uC62C\uB77C\uAC00\uC694."),
            q("\uBCF4\uC774\uC2A4 \uB9AC\uB529\uC758 \uC6D0\uCE59\uC73C\uB85C \uC54C\uB9DE\uC740 \uAC83\uC740?", ["\uACF5\uD1B5\uC74C\uC740 \uADF8\uB300\uB85C \uB450\uACE0 \uB098\uBA38\uC9C0\uB294 \uAC00\uAE4C\uC6B4 \uC74C\uC73C\uB85C \uC62E\uAE34\uB2E4", "\uBAA8\uB4E0 \uC74C\uC744 \uD55C \uC625\uD0C0\uBE0C\uC529 \uC62C\uB9B0\uB2E4", "\uADFC\uC74C\uB9CC \uC6C0\uC9C1\uC774\uACE0 \uB098\uBA38\uC9C0\uB294 \uBA48\uCD98\uB2E4", "\uCF54\uB4DC\uB9C8\uB2E4 \uAC00\uC7A5 \uBA3C \uC74C\uC744 \uACE0\uB978\uB2E4"], 0, "\uC6C0\uC9C1\uC784\uC744 \uCD5C\uC18C\uB85C \uC904\uC774\uB294 \uAC83\uC774 \uBCF4\uC774\uC2A4 \uB9AC\uB529\uC774\uC5D0\uC694."),
            q("C(\uB3C4 \uBBF8 \uC194)\uC640 F(\uD30C \uB77C \uB3C4)\uC758 \uACF5\uD1B5\uC74C\uC740?", ["\uB3C4", "\uBBF8", "\uC194", "\uB77C"], 0, "\uB3C4(C)\uAC00 \uB450 \uCF54\uB4DC\uC5D0 \uBAA8\uB450 \uC788\uC5B4\uC694."),
            q("Dm7 \u2192 G7\uC5D0\uC11C Dm7\uC758 7\uC74C \uB3C4(C)\uB294 G7\uC758 \uC5B4\uB290 \uC74C\uC73C\uB85C \uC774\uC5B4\uC9C8\uAE4C\uC694?", ["\uC2DC (B)", "\uB808 (D)", "\uD30C (F)", "\uC194 (G)"], 0, "\uB3C4(C)\uB294 \uBC18\uC74C \uC544\uB798\uC758 \uC2DC(B), G7\uC758 3\uC74C\uC73C\uB85C \uC774\uC5B4\uC838\uC694."),
            key("G7 \u2192 Cmaj7\uC5D0\uC11C G7\uC758 7\uC74C **\uD30C(F)** \uB294 \uC5B4\uB290 \uC74C\uC73C\uB85C \uB0B4\uB824\uAC08\uAE4C\uC694? \uADF8 \uC74C\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 4, LOW, "\uD30C(F)\uB294 \uBC18\uC74C \uC544\uB798\uC758 \uBBF8(E), Cmaj7\uC758 3\uC74C\uC73C\uB85C \uC774\uC5B4\uC838\uC694."),
            play("\uBD80\uB4DC\uB7FD\uAC8C \uC774\uC740 C \u2192 F/C \u2192 G/B \u2192 C\uC758 **\uB9E8 \uC544\uB798 \uC74C(\uBCA0\uC774\uC2A4)** \uC744 \uCC28\uB840\uB85C \uB20C\uB7EC \uBCF4\uC138\uC694. (\uB3C4 \u2192 \uB3C4 \u2192 \uC2DC \u2192 \uB3C4)", [0, 0, 11, 0], LOW),
            play("\uAC19\uC740 \uC9C4\uD589\uC758 **\uB9E8 \uC704 \uC74C**\uC744 \uCC28\uB840\uB85C \uB20C\uB7EC \uBCF4\uC138\uC694. (\uC194 \u2192 \uB77C \u2192 \uC194 \u2192 \uC194) \uBA5C\uB85C\uB514\uCC98\uB7FC \uAC70\uC758 \uC6C0\uC9C1\uC774\uC9C0 \uC54A\uC544\uC694.", [7, 9, 7, 7], LOW)
          ]
        },
        {
          id: "u10l4",
          title: "\uC804\uC704\uB85C \uBCA0\uC774\uC2A4 \uB77C\uC778 \uB9CC\uB4E4\uAE30",
          minutes: 9,
          steps: [
            text(
              "\uBCA0\uC774\uC2A4\uAC00 \uACC4\uB2E8\uCC98\uB7FC \uAC78\uC5B4 \uB0B4\uB824\uAC00\uC694",
              `\uC804\uC704\uB97C \uC4F0\uBA74 \uCF54\uB4DC\uB97C \uBC14\uAFB8\uC9C0 \uC54A\uACE0\uB3C4 **\uBCA0\uC774\uC2A4(\uB9E8 \uC544\uB798 \uC74C)\uC758 \uC6C0\uC9C1\uC784**\uC744 \uB9C8\uC74C\uB300\uB85C \uB9CC\uB4E4 \uC218 \uC788\uC5B4\uC694. \uC774\uC5B4\uC9C0\uB294 \uBCA0\uC774\uC2A4 \uC74C\uB4E4\uC774 \uB9CC\uB4DC\uB294 \uC120\uC728\uC744 [[bass-line|\uBCA0\uC774\uC2A4 \uB77C\uC778]]\uC774\uB77C\uACE0 \uD574\uC694.

\uC774 \uC9C4\uD589\uC744 \uBCF4\uC138\uC694.

**C - G/B - Am - Em/G - F - C/E - Dm - G**

\uAE30\uBCF8\uD615\uB9CC \uC4F0\uBA74 \uBCA0\uC774\uC2A4\uAC00 \uB3C4 \u2192 \uC194 \u2192 \uB77C \u2192 \uBBF8 \u2192 \uD30C \u2192 \uB3C4 \u2192 \uB808 \u2192 \uC194\uB85C \uC774\uB9AC\uC800\uB9AC \uB6F0\uC5B4\uC694. \uD558\uC9C0\uB9CC G, Em, C\uB97C 1\uC804\uC704(G/B, Em/G, C/E)\uB85C \uBC14\uAFB8\uBA74 \uBCA0\uC774\uC2A4\uAC00 **\uB3C4 \u2192 \uC2DC \u2192 \uB77C \u2192 \uC194 \u2192 \uD30C \u2192 \uBBF8 \u2192 \uB808**\uB85C \uACC4\uB2E8\uCC98\uB7FC \uD55C \uCE78\uC529 \uB0B4\uB824\uAC00\uC694! \uCF54\uB4DC\uB294 \uADF8\uB300\uB85C\uC778\uB370 \uD750\uB984\uC774 \uD6E8\uC52C \uB9E4\uB044\uB7FD\uACE0 \uC774\uC57C\uAE30\uAC00 \uC788\uB294 \uB290\uB08C\uC774 \uB3FC\uC694.

(\uB4E4\uC5B4 \uBCF4\uAE30 \uC27D\uB3C4\uB85D \uCCAB \uCF54\uB4DC C\uB294 \uD55C \uC625\uD0C0\uBE0C \uB192\uAC8C \uCCE4\uC5B4\uC694.)`
            ),
            listen(
              "\uAE30\uBCF8\uD615\uB9CC \uC4F4 \uC9C4\uD589\uACFC, \uC804\uC704\uB85C \uBCA0\uC774\uC2A4\uB97C \uACC4\uB2E8\uCC98\uB7FC \uB9CC\uB4E0 \uC9C4\uD589\uC744 \uBE44\uAD50\uD574 \uBCF4\uC138\uC694.",
              [pi("\uAE30\uBCF8\uD615\uB9CC: C G Am Em F C Dm G", "C G Am Em F C Dm G", 0.8), pm("\uC804\uC704 \uC0AC\uC6A9: C G/B Am Em/G F C/E Dm G", BASSLINE, 0.8)],
              WIDE3
            ),
            earM("\uBCA0\uC774\uC2A4(\uB9E8 \uC544\uB798 \uC74C)\uAC00 \uACC4\uB2E8\uCC98\uB7FC \uD55C \uCE78\uC529 \uB0B4\uB824\uAC00\uB294 \uC9C4\uD589\uC77C\uAE4C\uC694?", BASSLINE, ["\uC608, \uACC4\uB2E8\uCC98\uB7FC \uB0B4\uB824\uAC04\uB2E4", "\uC544\uB2C8\uC694, \uC774\uB9AC\uC800\uB9AC \uB6F4\uB2E4"], 0, "\uC804\uC704 \uB355\uBD84\uC5D0 \uBCA0\uC774\uC2A4\uAC00 \uB3C4 \uC2DC \uB77C \uC194 \uD30C \uBBF8 \uB808\uB85C \uB0B4\uB824\uAC00\uC694.", 0.8),
            earM("\uBCA0\uC774\uC2A4(\uB9E8 \uC544\uB798 \uC74C)\uAC00 \uACC4\uB2E8\uCC98\uB7FC \uD55C \uCE78\uC529 \uB0B4\uB824\uAC00\uB294 \uC9C4\uD589\uC77C\uAE4C\uC694?", prog("C G Am Em F C Dm G"), ["\uC608, \uACC4\uB2E8\uCC98\uB7FC \uB0B4\uB824\uAC04\uB2E4", "\uC544\uB2C8\uC694, \uC774\uB9AC\uC800\uB9AC \uB6F4\uB2E4"], 1, "\uBAA8\uB450 \uAE30\uBCF8\uD615\uC774\uB77C \uBCA0\uC774\uC2A4\uAC00 \uC774\uB9AC\uC800\uB9AC \uB6F0\uC5B4\uC694.", 0.8),
            play("\uC804\uC704\uB85C \uB9CC\uB4E0 \uBCA0\uC774\uC2A4 \uB77C\uC778\uC744 \uB20C\uB7EC \uBCF4\uC138\uC694. (\uB3C4 \u2192 \uC2DC \u2192 \uB77C \u2192 \uC194 \u2192 \uD30C \u2192 \uBBF8 \u2192 \uB808 \u2192 \uC194)", [0, 11, 9, 7, 5, 4, 2, 7], WIDE3),
            q("G/B\uC5D0\uC11C \uBCA0\uC774\uC2A4(\uB9E8 \uC544\uB798 \uC74C)\uB294?", ["\uC2DC (B)", "\uC194 (G)", "\uB808 (D)", "\uD30C (F)"], 0, "\uC2AC\uB798\uC2DC \uB4A4\uC758 \uC2DC(B)\uAC00 \uBCA0\uC774\uC2A4\uC608\uC694."),
            q("Em/G\uC758 \uAD6C\uC131\uC74C\uC740?", ["E, G, B", "G, B, D", "E, G\u266F, B", "E, A, C"], 0, "E \uB9C8\uC774\uB108(\uBBF8 \uC194 \uC2DC)\uB97C \uC194\uC774 \uB9E8 \uC544\uB798\uC5D0 \uC624\uAC8C \uCE5C \uAC70\uC608\uC694."),
            q("C/E\uB294 \uBA87 \uC804\uC704\uC77C\uAE4C\uC694?", ["1\uC804\uC704", "\uAE30\uBCF8\uD615", "2\uC804\uC704", "3\uC804\uC704"], 0, "\uBBF8(3\uC74C)\uAC00 \uB9E8 \uC544\uB798, 1\uC804\uC704\uC608\uC694."),
            q("C - G/B - Am - Em/G - F - C/E - Dm - G\uC5D0\uC11C \uBCA0\uC774\uC2A4 \uC74C\uC758 \uC21C\uC11C\uB294?", ["\uB3C4 \uC2DC \uB77C \uC194 \uD30C \uBBF8 \uB808 \uC194", "\uB3C4 \uC194 \uB77C \uBBF8 \uD30C \uB3C4 \uB808 \uC194", "\uB3C4 \uC2DC \uB77C \uC194 \uD30C \uBBF8 \uB808 \uB3C4", "\uB3C4 \uB808 \uBBF8 \uD30C \uC194 \uB77C \uC2DC \uB3C4"], 0, "1\uC804\uC704 \uB355\uBD84\uC5D0 \uB3C4 \uC2DC \uB77C \uC194 \uD30C \uBBF8 \uB808\uB85C \uACC4\uB2E8\uCC98\uB7FC \uB0B4\uB824\uAC00\uACE0 \uB9C8\uC9C0\uB9C9\uC5D0 \uC194\uB85C \uAC00\uC694."),
            q("G \uCF54\uB4DC \uB300\uC2E0 G/B\uB97C \uC4F0\uBA74 \uC5B4\uB5A4 \uD6A8\uACFC\uAC00 \uC788\uC744\uAE4C\uC694?", ["\uBCA0\uC774\uC2A4\uAC00 \uBD80\uB4DC\uB7FD\uAC8C \uC774\uC5B4\uC9C4\uB2E4", "\uCF54\uB4DC\uAC00 \uB9C8\uC774\uB108\uB85C \uBC14\uB010\uB2E4", "\uD0A4\uAC00 \uBC14\uB010\uB2E4", "\uCF54\uB4DC \uAE30\uB2A5\uC774 \uB3C4\uBBF8\uB10C\uD2B8\uC5D0\uC11C \uD1A0\uB2C9\uC73C\uB85C \uBC14\uB010\uB2E4"], 0, "\uCF54\uB4DC\uB294 \uADF8\uB300\uB85C\uACE0 \uBCA0\uC774\uC2A4\uC758 \uC6C0\uC9C1\uC784\uB9CC \uBD80\uB4DC\uB7EC\uC6CC\uC838\uC694."),
            q("\uC804\uC704\uB97C \uC0AC\uC6A9\uD558\uB294 \uC774\uC720\uB85C \uAC00\uC7A5 \uC54C\uB9DE\uC740 \uAC83\uC740?", ["\uCF54\uB4DC\uB294 \uADF8\uB300\uB85C \uB450\uACE0 \uBCA0\uC774\uC2A4\uC640 \uC74C\uC758 \uC5F0\uACB0\uC744 \uBD80\uB4DC\uB7FD\uAC8C \uD558\uB824\uACE0", "\uCF54\uB4DC \uC885\uB958\uB97C \uBC14\uAFB8\uB824\uACE0", "\uD0A4\uB97C \uBC14\uAFB8\uB824\uACE0", "\uC74C\uC744 \uB354 \uB9CE\uC774 \uC313\uC73C\uB824\uACE0"], 0, "\uC804\uC704\uB294 \uAC19\uC740 \uCF54\uB4DC\uB97C \uB2E4\uB978 \uBC30\uCE58\uB85C \uCCD0\uC11C \uC5F0\uACB0\uC744 \uB2E4\uB4EC\uC5B4 \uC918\uC694."),
            key("Em/G\uC758 **\uBCA0\uC774\uC2A4 \uC74C**\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 7, WIDE3, "\uC2AC\uB798\uC2DC \uB4A4\uC758 \uC194(G)\uC774 \uBCA0\uC774\uC2A4\uC608\uC694.")
          ]
        }
      ]
    }
  ];

  // content/ko/units-melody.js
  var KB = [60, 84];
  var MEL = [72, 84];
  var over = (m) => [[["C", 0, 3]], [[m, 0, 3]]];
  var SONG_CHORDS = [["C", 0, 4], ["Am", 4, 4], ["F", 8, 4], ["G7", 12, 4], ["C", 16, 4]];
  var SONG_MELODY = [
    [76, 0, 1],
    [74, 1, 1],
    [72, 2, 1],
    [76, 3, 1],
    // C:  미 레 도 미     (레 = 경과음)
    [76, 4, 1],
    [77, 5, 1],
    [76, 6, 1],
    [72, 7, 1],
    // Am: 미 파 미 도     (파 = 보조음)
    [81, 8, 1],
    [79, 9, 1],
    [77, 10, 1],
    [81, 11, 1],
    // F:  라 솔 파 라     (솔 = 경과음)
    [74, 12, 1],
    [77, 13, 1],
    [79, 14, 1],
    [83, 15, 1],
    // G7: 레 파 솔 시     (모두 코드 톤)
    [76, 16, 4]
    // C: 미 (마무리)
  ];
  var units_melody_default = [
    {
      id: "u11",
      title: "\uBA5C\uB85C\uB514\uC640 \uD654\uC131",
      desc: "\uCF54\uB4DC \uC704\uC5D0\uC11C \uC6C0\uC9C1\uC774\uB294 \uBA5C\uB85C\uB514\uB97C \uCF54\uB4DC \uD1A4\uACFC \uBE44\uD654\uC131\uC74C\uC73C\uB85C \uB098\uB220 \uBD10\uC694.",
      lessons: [
        {
          id: "u11l1",
          title: "\uCF54\uB4DC \uD1A4\uACFC \uBE44\uD654\uC131\uC74C",
          minutes: 8,
          steps: [
            text(
              "\uBA5C\uB85C\uB514\uB294 \uCF54\uB4DC \uC704\uC5D0\uC11C \uC6C0\uC9C1\uC5EC\uC694",
              `\uACE1\uC5D0\uC11C\uB294 \uCF54\uB4DC\uAC00 \uBC14\uB2E5\uC5D0 \uAE54\uB824 \uC788\uACE0, \uADF8 \uC704\uC5D0\uC11C \uBA5C\uB85C\uB514\uAC00 \uC6C0\uC9C1\uC5EC\uC694. \uBA5C\uB85C\uB514\uC758 \uD55C \uC74C \uD55C \uC74C\uC740 **\uADF8 \uC21C\uAC04 \uC6B8\uB9AC\uB294 \uCF54\uB4DC\uC640\uC758 \uAD00\uACC4**\uC5D0 \uB530\uB77C \uB450 \uC885\uB958\uB85C \uB098\uB258\uC5B4\uC694.

- [[chord-tone|\uCF54\uB4DC \uD1A4]]: \uC9C0\uAE08 \uCF54\uB4DC\uC5D0 **\uB4E4\uC5B4 \uC788\uB294** \uC74C. C \uCF54\uB4DC \uC704\uC758 \uB3C4\xB7\uBBF8\xB7\uC194. \uC548\uC815\uC801\uC73C\uB85C \uC5B4\uC6B8\uB824\uC11C \uBA5C\uB85C\uB514\uAC00 \uC26C\uC5B4 \uAC00\uAE30 \uC88B\uC544\uC694.
- [[non-chord-tone|\uB17C\uCF54\uB4DC \uD1A4(\uBE44\uD654\uC131\uC74C)]]: \uC9C0\uAE08 \uCF54\uB4DC\uC5D0 **\uC5C6\uB294** \uC74C. C \uCF54\uB4DC \uC704\uC758 \uB808\xB7\uD30C\xB7\uB77C\xB7\uC2DC. \uC0B4\uC9DD \uAE34\uC7A5\uB418\uACE0 \uB2E4\uC74C \uC74C\uC73C\uB85C \uAC00\uACE0 \uC2F6\uC5B4\uC838\uC694.

\uB458 \uB2E4 \uD544\uC694\uD574\uC694. \uCF54\uB4DC \uD1A4\uB9CC \uC4F0\uBA74 \uC548\uC815\uC801\uC774\uC9C0\uB9CC \uD3C9\uD3C9\uD558\uACE0, \uBE44\uD654\uC131\uC74C\uC774 \uC11E\uC5EC\uC57C \uBA5C\uB85C\uB514\uC5D0 \uC6C0\uC9C1\uC784\uACFC \uD45C\uC815\uC774 \uC0DD\uACA8\uC694.

\uBA5C\uB85C\uB514\uAC00 \uC5B4\uB5BB\uAC8C \uB4E4\uB9AC\uB294\uC9C0 \uB290\uAEF4 \uBCF4\uC138\uC694. C \uCF54\uB4DC\uAC00 \uAE54\uB9B0 \uC0C1\uD0DC\uC5D0\uC11C \uBA5C\uB85C\uB514 \uD55C \uC74C\uC744 \uAE38\uAC8C \uC5B9\uC5B4 \uBCFC\uAC8C\uC694.`
            ),
            listen(
              "C \uCF54\uB4DC(\uB3C4 \uBBF8 \uC194) \uC704\uC5D0 \uBA5C\uB85C\uB514 \uC74C\uC744 \uD558\uB098\uC529 \uC62C\uB824 \uB4E4\uC5B4 \uBCF4\uC138\uC694. \uCF54\uB4DC \uD1A4\uC740 \uD3B8\uC548\uD558\uACE0, \uBE44\uD654\uC131\uC74C\uC740 \uC0B4\uC9DD \uBD80\uB52A\uD600\uC694.",
              [
                si("\uB3C4 (\uCF54\uB4DC \uD1A4)", ...over(72)),
                si("\uB808 (\uB17C\uCF54\uB4DC \uD1A4)", ...over(74)),
                si("\uBBF8 (\uCF54\uB4DC \uD1A4)", ...over(76)),
                si("\uD30C (\uB17C\uCF54\uB4DC \uD1A4)", ...over(77)),
                si("\uC194 (\uCF54\uB4DC \uD1A4)", ...over(79)),
                si("\uB77C (\uB17C\uCF54\uB4DC \uD1A4)", ...over(81)),
                si("\uC2DC (\uB17C\uCF54\uB4DC \uD1A4)", ...over(83))
              ],
              KB
            ),
            earS("C \uCF54\uB4DC \uC704\uC5D0 \uC5B9\uC740 \uC774 \uBA5C\uB85C\uB514 \uC74C\uC740 \uCF54\uB4DC \uD1A4\uC77C\uAE4C\uC694, \uB17C\uCF54\uB4DC \uD1A4\uC77C\uAE4C\uC694?", ...over(76), ["\uCF54\uB4DC \uD1A4", "\uB17C\uCF54\uB4DC \uD1A4"], 0, "\uBBF8(E)\uB294 C \uCF54\uB4DC\uC758 3\uC74C\uC774\uC5D0\uC694. \uD3B8\uC548\uD558\uAC8C \uC5B4\uC6B8\uB824\uC694."),
            earS("C \uCF54\uB4DC \uC704\uC5D0 \uC5B9\uC740 \uC774 \uBA5C\uB85C\uB514 \uC74C\uC740 \uCF54\uB4DC \uD1A4\uC77C\uAE4C\uC694, \uB17C\uCF54\uB4DC \uD1A4\uC77C\uAE4C\uC694?", ...over(77), ["\uCF54\uB4DC \uD1A4", "\uB17C\uCF54\uB4DC \uD1A4"], 1, "\uD30C(F)\uB294 C \uCF54\uB4DC\uC5D0 \uC5C6\uB294 \uC74C\uC774\uC5D0\uC694. 3\uC74C \uBBF8\uC640 \uBC18\uC74C\uC73C\uB85C \uBD80\uB52A\uD600\uC694."),
            earS("C \uCF54\uB4DC \uC704\uC5D0 \uC5B9\uC740 \uC774 \uBA5C\uB85C\uB514 \uC74C\uC740 \uCF54\uB4DC \uD1A4\uC77C\uAE4C\uC694, \uB17C\uCF54\uB4DC \uD1A4\uC77C\uAE4C\uC694?", ...over(79), ["\uCF54\uB4DC \uD1A4", "\uB17C\uCF54\uB4DC \uD1A4"], 0, "\uC194(G)\uC740 C \uCF54\uB4DC\uC758 5\uC74C\uC774\uC5D0\uC694."),
            earS("C \uCF54\uB4DC \uC704\uC5D0 \uC5B9\uC740 \uC774 \uBA5C\uB85C\uB514 \uC74C\uC740 \uCF54\uB4DC \uD1A4\uC77C\uAE4C\uC694, \uB17C\uCF54\uB4DC \uD1A4\uC77C\uAE4C\uC694?", ...over(74), ["\uCF54\uB4DC \uD1A4", "\uB17C\uCF54\uB4DC \uD1A4"], 1, "\uB808(D)\uB294 C \uCF54\uB4DC\uC5D0 \uC5C6\uB294 \uC74C\uC774\uC5D0\uC694."),
            q("C \uCF54\uB4DC\uC758 \uCF54\uB4DC \uD1A4\uC740?", ["\uB3C4, \uBBF8, \uC194", "\uB808, \uD30C, \uB77C", "\uB3C4, \uB808, \uBBF8", "\uBBF8, \uC194, \uC2DC"], 0, "C \uCF54\uB4DC\uB294 \uB3C4 \uBBF8 \uC194\uB85C \uC774\uB8E8\uC5B4\uC838 \uC788\uC5B4\uC694."),
            q("Am \uCF54\uB4DC(\uB77C \uB3C4 \uBBF8) \uC704\uC5D0\uC11C \uCF54\uB4DC \uD1A4\uC774 \uC544\uB2CC \uC74C\uC740?", ["\uC194 (G)", "\uB77C (A)", "\uB3C4 (C)", "\uBBF8 (E)"], 0, "Am\uC758 \uAD6C\uC131\uC74C\uC740 \uB77C\xB7\uB3C4\xB7\uBBF8\uC608\uC694. \uC194\uC740 \uCF54\uB4DC \uBC16\uC758 \uC74C\uC774\uC5D0\uC694."),
            q("G7 \uCF54\uB4DC(\uC194 \uC2DC \uB808 \uD30C) \uC704\uC5D0\uC11C \uCF54\uB4DC \uD1A4\uC774 \uC544\uB2CC \uC74C\uC740?", ["\uB3C4 (C)", "\uC194 (G)", "\uC2DC (B)", "\uD30C (F)"], 0, "G7\uC758 \uAD6C\uC131\uC74C\uC740 \uC194\xB7\uC2DC\xB7\uB808\xB7\uD30C\uC608\uC694. \uB3C4\uB294 \uCF54\uB4DC \uBC16\uC758 \uC74C\uC774\uC5D0\uC694."),
            q("F \uCF54\uB4DC(\uD30C \uB77C \uB3C4) \uC704\uC5D0\uC11C \uC2DC(B)\uB294 \uC5B4\uB5A4 \uC74C\uC77C\uAE4C\uC694?", ["\uB17C\uCF54\uB4DC \uD1A4", "\uCF54\uB4DC \uD1A4"], 0, "F \uCF54\uB4DC\uC5D0\uB294 \uC2DC\uAC00 \uC5C6\uC5B4\uC694."),
            q("\uCF54\uB4DC \uD1A4\uB9CC\uC73C\uB85C \uBA5C\uB85C\uB514\uB97C \uB9CC\uB4E4\uBA74 \uC5B4\uB5BB\uAC8C \uB4E4\uB9B4\uAE4C\uC694?", ["\uC548\uC815\uC801\uC774\uC9C0\uB9CC \uC6C0\uC9C1\uC784\uC774 \uC801\uACE0 \uD3C9\uD3C9\uD558\uB2E4", "\uD56D\uC0C1 \uBD88\uC548\uD558\uAC8C \uB4E4\uB9B0\uB2E4", "\uCF54\uB4DC\uAC00 \uBC14\uB010\uB2E4", "\uD0A4\uAC00 \uBC14\uB010\uB2E4"], 0, "\uBE44\uD654\uC131\uC74C\uC774 \uC788\uC5B4\uC57C \uBA5C\uB85C\uB514\uC5D0 \uC6C0\uC9C1\uC784\uACFC \uD45C\uC815\uC774 \uC0DD\uACA8\uC694."),
            q("\uB17C\uCF54\uB4DC \uD1A4\uC774 \uC8FC\uB294 \uB290\uB08C\uC740?", ["\uC0B4\uC9DD \uAE34\uC7A5\uB418\uACE0 \uB2E4\uC74C \uC74C\uC73C\uB85C \uAC00\uACE0 \uC2F6\uC5B4\uC9C4\uB2E4", "\uAC00\uC7A5 \uC548\uC815\uC801\uC774\uB2E4", "\uC18C\uB9AC\uAC00 \uB098\uC9C0 \uC54A\uB294\uB2E4", "\uCF54\uB4DC\uAC00 \uBC14\uB010\uB2E4"], 0, "\uAE34\uC7A5 \u2192 \uD574\uACB0\uC758 \uC7AC\uBBF8\uB97C \uB9CC\uB4E4\uC5B4 \uC918\uC694."),
            key("Dm7(\uB808 \uD30C \uB77C \uB3C4) \uC704\uC5D0\uC11C **7\uC74C**\uC778 \uCF54\uB4DC \uD1A4\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 0, KB, "Dm7\uC758 7\uC74C\uC740 \uB3C4(C)\uC608\uC694.")
          ]
        },
        {
          id: "u11l2",
          title: "\uBE44\uD654\uC131\uC74C\uC758 \uC138 \uAC00\uC9C0: \uACBD\uACFC\uC74C\xB7\uBCF4\uC870\uC74C\xB7\uACC4\uB958\uC74C",
          minutes: 9,
          steps: [
            text(
              "\uBE44\uD654\uC131\uC74C\uC5D0\uB3C4 \uC4F0\uB294 \uBC95\uC774 \uC788\uC5B4\uC694",
              `\uBE44\uD654\uC131\uC74C\uC740 \uC544\uBB34 \uB370\uB098 \uB193\uC73C\uBA74 \uC5B4\uC0C9\uD558\uC9C0\uB9CC, \uC790\uC8FC \uC4F0\uC774\uB294 **\uC815\uD574\uC9C4 \uBAA8\uC591**\uC774 \uC788\uC5B4\uC694. \uAC00\uC7A5 \uD754\uD55C \uC138 \uAC00\uC9C0\uB97C \uC18C\uAC1C\uD560\uAC8C\uC694. (C \uCF54\uB4DC \uC704\uC5D0\uC11C)

1. [[passing-tone|\uACBD\uACFC\uC74C]]: **\uC11C\uB85C \uB2E4\uB978 \uB450 \uCF54\uB4DC \uD1A4 \uC0AC\uC774\uB97C \uACC4\uB2E8\uCC98\uB7FC \uC774\uC5B4 \uC8FC\uB294** \uC74C. \uBBF8 \u2192 **\uB808** \u2192 \uB3C4
2. [[neighbor-tone|\uBCF4\uC870\uC74C]]: \uCF54\uB4DC \uD1A4\uC5D0\uC11C **\uD55C \uCE78 \uC704\uB098 \uC544\uB798\uB85C \uAC14\uB2E4\uAC00 \uB3CC\uC544\uC624\uB294** \uC74C. \uBBF8 \u2192 **\uD30C** \u2192 \uBBF8
3. [[suspension|\uACC4\uB958\uC74C]]: **\uC55E \uCF54\uB4DC\uC758 \uC74C\uC744 \uB2E4\uC74C \uCF54\uB4DC \uC704\uC5D0 \uB0A8\uACA8 \uB46C\uC11C** \uC77C\uBD80\uB7EC \uBD80\uB52A\uD788\uAC8C \uD55C \uB2E4\uC74C, \uD55C \uCE78 \uC544\uB798 \uCF54\uB4DC \uD1A4\uC73C\uB85C \uD480\uC5B4 \uC8FC\uB294 \uC74C. F \uCF54\uB4DC \uC704\uC758 \uD30C\uB97C C \uCF54\uB4DC\uB85C \uBC14\uB010 \uB4A4\uC5D0\uB3C4 \uB0A8\uACA8 \uB480\uB2E4\uAC00 \uBBF8\uB85C \uD480\uAE30

\uC138 \uAC00\uC9C0\uC758 \uACF5\uD1B5\uC810\uC740 \uBE44\uD654\uC131\uC74C\uC774 **\uAC00\uAE4C\uC6B4 \uCF54\uB4DC \uD1A4\uC73C\uB85C \uC774\uC5B4\uC9C0\uAC70\uB098 \uD480\uB9B0\uB2E4**\uB294 \uAC70\uC608\uC694. \uADF8\uB798\uC11C \uAE34\uC7A5\uC774 \uC7A0\uAE50 \uC0DD\uACBC\uB2E4\uAC00 \uC548\uC815\uC73C\uB85C \uB3CC\uC544\uC640\uC694.`
            ),
            listen(
              "\uC138 \uAC00\uC9C0 \uBAA8\uC591\uC744 \uB4E4\uC5B4 \uBCF4\uC138\uC694. \uC9C4\uD55C \uAC74\uBC18\uC774 \uBA5C\uB85C\uB514, \uC5F0\uD55C \uAC74\uBC18\uC774 \uCF54\uB4DC\uC608\uC694.",
              [
                si("\uACBD\uACFC\uC74C: \uBBF8 \u2192 \uB808 \u2192 \uB3C4", [["C", 0, 4]], [[76, 0, 1], [74, 1, 1], [72, 2, 1]]),
                si("\uACBD\uACFC\uC74C: \uB3C4 \u2192 \uB808 \u2192 \uBBF8", [["C", 0, 4]], [[72, 0, 1], [74, 1, 1], [76, 2, 1]]),
                si("\uBCF4\uC870\uC74C: \uBBF8 \u2192 \uD30C \u2192 \uBBF8", [["C", 0, 4]], [[76, 0, 1], [77, 1, 1], [76, 2, 1]]),
                si("\uBCF4\uC870\uC74C: \uC194 \u2192 \uB77C \u2192 \uC194", [["C", 0, 4]], [[79, 0, 1], [81, 1, 1], [79, 2, 1]]),
                si("\uACC4\uB958\uC74C: F \uCF54\uB4DC \u2192 C \uCF54\uB4DC \uC704\uC758 \uD30C \u2192 \uBBF8", [["F", 0, 2], ["C", 2, 4]], [[77, 0, 2], [77, 2, 2], [76, 4, 2]])
              ],
              KB
            ),
            play("\uACBD\uACFC\uC74C\uC744 \uC9C1\uC811 \uCCD0 \uBCF4\uC138\uC694. (\uBBF8 \u2192 \uB808 \u2192 \uB3C4)", [4, 2, 0], MEL),
            play("\uBCF4\uC870\uC74C\uC744 \uC9C1\uC811 \uCCD0 \uBCF4\uC138\uC694. (\uBBF8 \u2192 \uD30C \u2192 \uBBF8)", [4, 5, 4], MEL),
            earS("\uC5B4\uB5A4 \uBAA8\uC591\uC758 \uBE44\uD654\uC131\uC74C\uC77C\uAE4C\uC694?", [["C", 0, 4]], [[76, 0, 1], [74, 1, 1], [72, 2, 1]], ["\uACBD\uACFC\uC74C", "\uBCF4\uC870\uC74C", "\uACC4\uB958\uC74C"], 0, "\uBBF8 \u2192 \uB808 \u2192 \uB3C4. \uB450 \uCF54\uB4DC \uD1A4 \uC0AC\uC774\uB97C \uACC4\uB2E8\uC73C\uB85C \uC774\uC5B4\uC694."),
            earS("\uC5B4\uB5A4 \uBAA8\uC591\uC758 \uBE44\uD654\uC131\uC74C\uC77C\uAE4C\uC694?", [["C", 0, 4]], [[76, 0, 1], [77, 1, 1], [76, 2, 1]], ["\uACBD\uACFC\uC74C", "\uBCF4\uC870\uC74C", "\uACC4\uB958\uC74C"], 1, "\uBBF8 \u2192 \uD30C \u2192 \uBBF8. \uD55C \uCE78 \uAC14\uB2E4\uAC00 \uB3CC\uC544\uC640\uC694."),
            earS("\uC5B4\uB5A4 \uBAA8\uC591\uC758 \uBE44\uD654\uC131\uC74C\uC77C\uAE4C\uC694?", [["F", 0, 2], ["C", 2, 4]], [[77, 0, 2], [77, 2, 2], [76, 4, 2]], ["\uACBD\uACFC\uC74C", "\uBCF4\uC870\uC74C", "\uACC4\uB958\uC74C"], 2, "\uC55E \uCF54\uB4DC\uC758 \uD30C\uB97C C \uCF54\uB4DC \uC704\uC5D0 \uB0A8\uACA8 \uB480\uB2E4\uAC00 \uBBF8\uB85C \uD480\uC5C8\uC5B4\uC694."),
            earS("\uC5B4\uB5A4 \uBAA8\uC591\uC758 \uBE44\uD654\uC131\uC74C\uC77C\uAE4C\uC694?", [["C", 0, 4]], [[72, 0, 1], [74, 1, 1], [76, 2, 1]], ["\uACBD\uACFC\uC74C", "\uBCF4\uC870\uC74C", "\uACC4\uB958\uC74C"], 0, "\uB3C4 \u2192 \uB808 \u2192 \uBBF8. \uC62C\uB77C\uAC00\uBA70 \uB450 \uCF54\uB4DC \uD1A4\uC744 \uC774\uC5B4\uC694."),
            earS("\uC5B4\uB5A4 \uBAA8\uC591\uC758 \uBE44\uD654\uC131\uC74C\uC77C\uAE4C\uC694?", [["C", 0, 4]], [[79, 0, 1], [81, 1, 1], [79, 2, 1]], ["\uACBD\uACFC\uC74C", "\uBCF4\uC870\uC74C", "\uACC4\uB958\uC74C"], 1, "\uC194 \u2192 \uB77C \u2192 \uC194. \uB77C\uAC00 \uBCF4\uC870\uC74C\uC774\uC5D0\uC694."),
            q('C \uCF54\uB4DC \uC704\uC758 \uBA5C\uB85C\uB514 "\uBBF8 \u2192 \uB808 \u2192 \uB3C4"\uC5D0\uC11C \uB808\uB294?', ["\uACBD\uACFC\uC74C", "\uBCF4\uC870\uC74C", "\uACC4\uB958\uC74C", "\uCF54\uB4DC \uD1A4"], 0, "\uB450 \uCF54\uB4DC \uD1A4(\uBBF8, \uB3C4) \uC0AC\uC774\uB97C \uACC4\uB2E8\uC73C\uB85C \uC774\uC5B4\uC694."),
            q('C \uCF54\uB4DC \uC704\uC758 \uBA5C\uB85C\uB514 "\uBBF8 \u2192 \uD30C \u2192 \uBBF8"\uC5D0\uC11C \uD30C\uB294?', ["\uBCF4\uC870\uC74C", "\uACBD\uACFC\uC74C", "\uACC4\uB958\uC74C", "\uCF54\uB4DC \uD1A4"], 0, "\uBBF8\uC5D0\uC11C \uD55C \uCE78 \uC62C\uB77C\uAC14\uB2E4 \uB3CC\uC544\uC640\uC694."),
            q("\uC55E \uCF54\uB4DC\uC758 \uC74C\uC744 \uB2E4\uC74C \uCF54\uB4DC \uC704\uC5D0 \uB0A8\uACA8 \uB480\uB2E4\uAC00 \uD55C \uCE78 \uC544\uB798\uB85C \uD480\uC5B4 \uC8FC\uB294 \uBE44\uD654\uC131\uC74C\uC740?", ["\uACC4\uB958\uC74C", "\uACBD\uACFC\uC74C", "\uBCF4\uC870\uC74C", "\uCF54\uB4DC \uD1A4"], 0, "\uB0A8\uACA8 \uB450\uC5C8\uB2E4\uAC00 \uD478\uB294 \uAC83\uC774 \uACC4\uB958\uC74C\uC774\uC5D0\uC694."),
            q("\uACBD\uACFC\uC74C\uC740 \uB450 \uCF54\uB4DC \uD1A4 \uC0AC\uC774\uB97C \uC5B4\uB5BB\uAC8C \uC787\uB098\uC694?", ["\uD55C \uCE78\uC529 \uACC4\uB2E8\uCC98\uB7FC", "\uD55C \uC625\uD0C0\uBE0C\uC529 \uC810\uD504\uD574\uC11C", "\uAC19\uC740 \uC74C\uC744 \uBC18\uBCF5\uD574\uC11C", "\uCF54\uB4DC\uB97C \uBC14\uAFD4\uC11C"], 0, "\uACC4\uB2E8\uCC98\uB7FC \uD55C \uCE78\uC529 \uC774\uC5B4\uC694."),
            q("\uC138 \uAC00\uC9C0 \uBE44\uD654\uC131\uC74C\uC758 \uACF5\uD1B5\uC810\uC740?", ["\uAC00\uAE4C\uC6B4 \uCF54\uB4DC \uD1A4\uC73C\uB85C \uC774\uC5B4\uC9C0\uAC70\uB098 \uD480\uB9B0\uB2E4", "\uCF54\uB4DC \uD1A4\uBCF4\uB2E4 \uB354 \uC548\uC815\uC801\uC774\uB2E4", "\uD56D\uC0C1 \uCF54\uB4DC\uB97C \uBC14\uAFBC\uB2E4", "\uD56D\uC0C1 \uD55C \uC625\uD0C0\uBE0C \uC810\uD504\uD55C\uB2E4"], 0, "\uBE44\uD654\uC131\uC74C\uC740 \uC7A0\uAE50 \uAE34\uC7A5\uC744 \uB9CC\uB4E4\uACE0 \uAC00\uAE4C\uC6B4 \uCF54\uB4DC \uD1A4\uC73C\uB85C \uD480\uB824\uC694."),
            q('C \uCF54\uB4DC \uC704\uC5D0\uC11C "\uC194 \u2192 \uB77C \u2192 \uC194"\uC758 \uB77C\uB294?', ["\uBCF4\uC870\uC74C", "\uACBD\uACFC\uC74C", "\uACC4\uB958\uC74C", "\uCF54\uB4DC \uD1A4"], 0, "\uC194\uC5D0\uC11C \uD55C \uCE78 \uC704\uB85C \uAC14\uB2E4\uAC00 \uC194\uB85C \uB3CC\uC544\uC640\uC694.")
          ]
        },
        {
          id: "u11l3",
          title: "\uCF54\uB4DC \uC704\uC5D0\uC11C \uC74C \uD0D0\uD5D8\uD558\uAE30",
          minutes: 8,
          steps: [
            text(
              "\uC9C1\uC811 \uB20C\uB7EC \uBCF4\uBA74 \uD6E8\uC52C \uBE68\uB9AC \uC775\uD600\uC694",
              `\uC774\uC81C \uC9C1\uC811 \uD0D0\uD5D8\uD574 \uBCFC \uCC28\uB840\uC608\uC694. \uCF54\uB4DC\uB97C \uD558\uB098 \uACE0\uB974\uACE0 \uAC74\uBC18\uC744 \uB20C\uB7EC \uBCF4\uC138\uC694. **\uCF54\uB4DC \uD1A4\uC740 \uCD08\uB85D, \uCF54\uB4DC \uBC16\uC758 \uC74C\uC740 \uB178\uB791**\uC73C\uB85C \uBC18\uC9DD\uC5EC\uC694. \uAC19\uC740 \uAC74\uBC18\uC774 \uCF54\uB4DC\uC5D0 \uB530\uB77C \uCD08\uB85D\uC774 \uB418\uAE30\uB3C4 \uD558\uACE0 \uB178\uB791\uC774 \uB418\uAE30\uB3C4 \uD574\uC694.

\uC608\uB97C \uB4E4\uC5B4 \uC2DC(B)\uB97C \uB20C\uB7EC \uBCF4\uC138\uC694. G7 \uC704\uC5D0\uC11C\uB294 \uCF54\uB4DC \uD1A4(3\uC74C)\uC774\uC9C0\uB9CC, F \uC704\uC5D0\uC11C\uB294 \uCF54\uB4DC \uBC16\uC758 \uC74C\uC774\uC5D0\uC694.

\uBA5C\uB85C\uB514\uB97C \uB9CC\uB4E4 \uB54C \uC774\uB807\uAC8C \uC0DD\uAC01\uD558\uBA74 \uB3FC\uC694.
- **\uAC15\uBC15**(\uCCAB \uBC15)\uC774\uB098 **\uAE38\uAC8C \uB298\uC774\uB294 \uC74C**\uC5D0\uB294 **\uCF54\uB4DC \uD1A4**\uC744 \uB193\uB294\uB2E4.
- **\uC57D\uBC15**\uC774\uB098 **\uC9E7\uAC8C \uC9C0\uB098\uAC00\uB294 \uC74C**\uC5D0\uB294 **\uBE44\uD654\uC131\uC74C**\uC744 \uB193\uC544\uB3C4 \uC790\uC5F0\uC2A4\uB7FD\uB2E4.`
            ),
            explore('\uCF54\uB4DC\uB97C \uBA3C\uC800 \uACE0\uB978 \uB2E4\uC74C, \uAC74\uBC18\uC744 \uC774\uAC83\uC800\uAC83 \uB20C\uB7EC \uBCF4\uC138\uC694. \uBAA8\uB974\uACA0\uC73C\uBA74 "\uCF54\uB4DC \uD1A4 \uD45C\uC2DC \uCF1C\uAE30"\uB85C \uC815\uB2F5\uC744 \uBCF4\uBA74\uC11C \uD574 \uBCF4\uC138\uC694.', ["C", "Am", "F", "G7", "Dm7"], KB),
            q("F \uCF54\uB4DC(\uD30C \uB77C \uB3C4) \uC704\uC5D0\uC11C \uC548\uC815\uC801\uC73C\uB85C \uC26C\uAE30 \uC88B\uC740 \uC74C\uC740?", ["\uB77C (A)", "\uC2DC (B)", "\uB808 (D)", "\uC194 (G)"], 0, "\uB77C(A)\uB294 F \uCF54\uB4DC\uC758 3\uC74C\uC774\uC5D0\uC694. \uB098\uBA38\uC9C0\uB294 \uCF54\uB4DC \uBC16\uC758 \uC74C\uC774\uC5D0\uC694."),
            q("Am \uCF54\uB4DC(\uB77C \uB3C4 \uBBF8) \uC704\uC5D0\uC11C \uC548\uC815\uC801\uC73C\uB85C \uC26C\uAE30 \uC88B\uC740 \uC74C\uC740?", ["\uBBF8 (E)", "\uD30C (F)", "\uC194 (G)", "\uC2DC (B)"], 0, "\uBBF8(E)\uB294 Am\uC758 5\uC74C\uC774\uC5D0\uC694."),
            q("G7 \uCF54\uB4DC \uC704\uC5D0\uC11C \uC2DC(B)\uB294 \uC5B4\uB5A4 \uC74C\uC77C\uAE4C\uC694?", ["\uCF54\uB4DC \uD1A4 (3\uC74C)", "\uB17C\uCF54\uB4DC \uD1A4"], 0, "G7 = \uC194 \uC2DC \uB808 \uD30C. \uC2DC\uB294 3\uC74C\uC774\uC5D0\uC694."),
            q("C \uCF54\uB4DC \uC704\uC5D0\uC11C \uB77C(A)\uB294 \uC5B4\uB5A4 \uC74C\uC77C\uAE4C\uC694?", ["\uB17C\uCF54\uB4DC \uD1A4", "\uCF54\uB4DC \uD1A4"], 0, "C \uCF54\uB4DC\uB294 \uB3C4 \uBBF8 \uC194\uC774\uB77C \uB77C\uB294 \uCF54\uB4DC \uBC16\uC758 \uC74C\uC774\uC5D0\uC694."),
            q("\uAC19\uC740 \uC2DC(B)\uAC00 \uCF54\uB4DC\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9C8 \uC218 \uC788\uB098\uC694?", ["\uC608, G7 \uC704\uC5D0\uC11C\uB294 \uCF54\uB4DC \uD1A4\uC774\uACE0 F \uC704\uC5D0\uC11C\uB294 \uB17C\uCF54\uB4DC \uD1A4\uC774\uB2E4", "\uC544\uB2C8\uC694, \uC74C\uB9C8\uB2E4 \uC815\uD574\uC838 \uC788\uB2E4", "\uC2DC\uB294 \uD56D\uC0C1 \uB17C\uCF54\uB4DC \uD1A4\uC774\uB2E4", "\uC2DC\uB294 \uD56D\uC0C1 \uCF54\uB4DC \uD1A4\uC774\uB2E4"], 0, "\uCF54\uB4DC \uD1A4\uC778\uC9C0\uB294 \uC74C \uC790\uCCB4\uAC00 \uC544\uB2C8\uB77C \uC9C0\uAE08 \uC6B8\uB9AC\uB294 \uCF54\uB4DC\uC5D0 \uB530\uB77C \uC815\uD574\uC838\uC694."),
            q("\uBA5C\uB85C\uB514\uC758 \uAC15\uBC15\uC774\uB098 \uAE38\uAC8C \uB298\uC774\uB294 \uC74C\uC5D0 \uC5B4\uC6B8\uB9AC\uB294 \uC74C\uC740?", ["\uCF54\uB4DC \uD1A4", "\uBE44\uD654\uC131\uC74C", "\uCF54\uB4DC\uC640 \uAC00\uC7A5 \uBA3C \uC74C", "\uC544\uBB34 \uC74C\uC774\uB098"], 0, "\uAE38\uAC8C \uBA38\uBB34\uB294 \uC74C\uC740 \uCF54\uB4DC \uD1A4\uC774\uC5B4\uC57C \uC548\uC815\uC801\uC73C\uB85C \uB4E4\uB824\uC694."),
            q("Cmaj9 \uCF54\uB4DC \uC704\uC758 \uB808(D, 9th)\uB294 \uC5B4\uB5BB\uAC8C \uC0DD\uAC01\uD558\uBA74 \uB420\uAE4C\uC694?", ["\uD150\uC158\uC774\uB77C\uC11C \uCF54\uB4DC \uC548\uC758 \uC74C\uCC98\uB7FC \uC4F8 \uC218 \uC788\uB2E4", "\uD56D\uC0C1 \uD53C\uD574\uC57C \uD558\uB294 \uC74C\uC774\uB2E4", "\uCF54\uB4DC\uAC00 \uBC14\uB00C\uC5C8\uB2E4\uB294 \uC2E0\uD638\uB2E4", "\uC73C\uB738\uC74C\uC774\uB2E4"], 0, "Cmaj9\uC5D0\uB294 9th\uC778 \uB808\uAC00 \uB4E4\uC5B4 \uC788\uC5B4\uC11C, \uCF54\uB4DC \uD1A4\uCC98\uB7FC \uC4F8 \uC218 \uC788\uC5B4\uC694. \uCF54\uB4DC\uC5D0 \uD150\uC158\uC774 \uD3EC\uD568\uB418\uBA74 \uADF8 \uC74C\uB3C4 \uC548\uC815\uC801\uC73C\uB85C \uC5B4\uC6B8\uB824\uC694."),
            key("G7 \uC704\uC5D0\uC11C \uCF54\uB4DC \uD1A4 \uC911 **\uC2DC(B)** \uB97C \uB20C\uB7EC\uBCF4\uC138\uC694.", 11, KB, "G7\uC758 3\uC74C\uC740 \uC2DC(B)\uC608\uC694."),
            key("F \uCF54\uB4DC \uC704\uC5D0\uC11C \uCF54\uB4DC \uD1A4\uC778 **\uB77C(A)** \uB97C \uB20C\uB7EC\uBCF4\uC138\uC694.", 9, KB, "F \uCF54\uB4DC\uC758 3\uC74C\uC740 \uB77C(A)\uC608\uC694.")
          ]
        },
        {
          id: "u11l4",
          title: "\uBA5C\uB85C\uB514\uC640 \uCF54\uB4DC\uB97C \uD568\uAED8 \uBCF4\uAE30",
          minutes: 9,
          steps: [
            text(
              "\uD55C \uACE1\uCC98\uB7FC \uB4E4\uC5B4 \uBCF4\uAE30",
              `\uC9C0\uAE08\uAE4C\uC9C0 \uBC30\uC6B4 \uAC83\uC744 \uBAA8\uC544\uC11C 4\uB9C8\uB514\uC9DC\uB9AC \uBA5C\uB85C\uB514\uB97C \uB4E4\uC5B4 \uBCFC\uAC8C\uC694. \uCF54\uB4DC\uB294 **C | Am | F | G7 | C** \uC774\uACE0, \uB9C8\uB514\uB9C8\uB2E4 4\uBC15\uC774\uC5D0\uC694.

\uBA5C\uB85C\uB514\uC758 \uAC01 \uB9C8\uB514\uB97C \uC774\uB807\uAC8C \uB9CC\uB4E4\uC5C8\uC5B4\uC694.
- 1\uB9C8\uB514(C): \uBBF8 \uB808 \uB3C4 \uBBF8
- 2\uB9C8\uB514(Am): \uBBF8 \uD30C \uBBF8 \uB3C4
- 3\uB9C8\uB514(F): \uB77C \uC194 \uD30C \uB77C
- 4\uB9C8\uB514(G7): \uB808 \uD30C \uC194 \uC2DC
- \uB9C8\uBB34\uB9AC(C): \uBBF8

\uBA3C\uC800 \uCF54\uB4DC\uB9CC, \uBA5C\uB85C\uB514\uB9CC, \uD569\uCE5C \uC18C\uB9AC\uB97C \uCC28\uB840\uB85C \uB4E4\uC5B4 \uBCF4\uACE0, \uC5B4\uB290 \uC74C\uC774 \uCF54\uB4DC \uD1A4\uC774\uACE0 \uC5B4\uB290 \uC74C\uC774 \uBE44\uD654\uC131\uC74C\uC778\uC9C0 \uCC3E\uC544\uBCF4\uC138\uC694. \uD78C\uD2B8: \uAC01 \uB9C8\uB514\uC758 **\uCCAB \uC74C**\uC744 \uBCF4\uC138\uC694.`
            ),
            listen(
              "\uCF54\uB4DC\uB9CC, \uBA5C\uB85C\uB514\uB9CC, \uADF8\uB9AC\uACE0 \uD569\uCE5C \uAC83\uC744 \uB4E4\uC5B4 \uBCF4\uC138\uC694. \uC9C4\uD55C \uAC74\uBC18\uC774 \uBA5C\uB85C\uB514, \uC5F0\uD55C \uAC74\uBC18\uC774 \uCF54\uB4DC\uC608\uC694.",
              [
                si("\uCF54\uB4DC\uB9CC (C Am F G7 C)", SONG_CHORDS, []),
                si("\uBA5C\uB85C\uB514\uB9CC", [], SONG_MELODY),
                si("\uD569\uCCD0\uC11C \uB4E4\uC5B4 \uBCF4\uAE30", SONG_CHORDS, SONG_MELODY)
              ],
              KB
            ),
            q('1\uB9C8\uB514(C)\uC758 \uBA5C\uB85C\uB514 "\uBBF8 \uB808 \uB3C4 \uBBF8"\uC5D0\uC11C \uB808\uB294?', ["\uACBD\uACFC\uC74C", "\uBCF4\uC870\uC74C", "\uACC4\uB958\uC74C", "\uCF54\uB4DC \uD1A4"], 0, "\uBBF8(\uCF54\uB4DC \uD1A4) \u2192 \uB808 \u2192 \uB3C4(\uCF54\uB4DC \uD1A4). \uACC4\uB2E8\uCC98\uB7FC \uC774\uC5B4 \uC8FC\uB294 \uACBD\uACFC\uC74C\uC774\uC5D0\uC694."),
            q('2\uB9C8\uB514(Am)\uC758 \uBA5C\uB85C\uB514 "\uBBF8 \uD30C \uBBF8 \uB3C4"\uC5D0\uC11C \uD30C\uB294?', ["\uBCF4\uC870\uC74C", "\uACBD\uACFC\uC74C", "\uACC4\uB958\uC74C", "\uCF54\uB4DC \uD1A4"], 0, "\uBBF8\uC5D0\uC11C \uD55C \uCE78 \uC704\uB85C \uAC14\uB2E4\uAC00 \uBBF8\uB85C \uB3CC\uC544\uC624\uB294 \uBCF4\uC870\uC74C\uC774\uC5D0\uC694."),
            q('3\uB9C8\uB514(F)\uC758 \uBA5C\uB85C\uB514 "\uB77C \uC194 \uD30C \uB77C"\uC5D0\uC11C \uC194\uC740?', ["\uACBD\uACFC\uC74C", "\uBCF4\uC870\uC74C", "\uACC4\uB958\uC74C", "\uCF54\uB4DC \uD1A4"], 0, "\uB77C(\uCF54\uB4DC \uD1A4) \u2192 \uC194 \u2192 \uD30C(\uCF54\uB4DC \uD1A4). \uACC4\uB2E8\uC73C\uB85C \uC774\uC5B4 \uC8FC\uB294 \uACBD\uACFC\uC74C\uC774\uC5D0\uC694."),
            q('4\uB9C8\uB514(G7)\uC758 \uBA5C\uB85C\uB514 "\uB808 \uD30C \uC194 \uC2DC"\uB294 G7(\uC194 \uC2DC \uB808 \uD30C)\uC5D0 \uB300\uD574 \uC5B4\uB5A4 \uC74C\uB4E4\uC77C\uAE4C\uC694?', ["\uBAA8\uB450 \uCF54\uB4DC \uD1A4", "\uBAA8\uB450 \uBE44\uD654\uC131\uC74C", "\uCF54\uB4DC \uD1A4 2\uAC1C\uC640 \uBE44\uD654\uC131\uC74C 2\uAC1C", "\uBAA8\uB450 \uACBD\uACFC\uC74C"], 0, "\uB808\xB7\uD30C\xB7\uC194\xB7\uC2DC\uB294 \uBAA8\uB450 G7\uC744 \uC774\uB8E8\uB294 \uC74C\uC774\uC5D0\uC694."),
            q("\uAC01 \uB9C8\uB514\uC758 \uCCAB \uC74C(\uBBF8, \uBBF8, \uB77C, \uB808)\uC758 \uACF5\uD1B5\uC810\uC740?", ["\uBAA8\uB450 \uADF8 \uB9C8\uB514 \uCF54\uB4DC\uC758 \uCF54\uB4DC \uD1A4\uC774\uB2E4", "\uBAA8\uB450 \uBE44\uD654\uC131\uC74C\uC774\uB2E4", "\uBAA8\uB450 \uC73C\uB738\uC74C\uC774\uB2E4", "\uBAA8\uB450 \uAC19\uC740 \uC74C\uC774\uB2E4"], 0, "\uCCAB \uBC15\uC5D0\uB294 \uCF54\uB4DC \uD1A4\uC744 \uB193\uC544\uC11C \uC548\uC815\uAC10\uC744 \uC92C\uC5B4\uC694. \uBE44\uD654\uC131\uC74C\uC740 \uADF8 \uB4A4 \uC57D\uBC15\uC5D0 \uC9C0\uB098\uAC00\uC694."),
            q("\uB9C8\uBB34\uB9AC\uC758 \uBBF8(E)\uAC00 C \uCF54\uB4DC \uC704\uC5D0\uC11C \uC548\uC815\uC801\uC73C\uB85C \uB4E4\uB9AC\uB294 \uC774\uC720\uB294?", ["C \uCF54\uB4DC\uC758 3\uC74C(\uCF54\uB4DC \uD1A4)\uC774\uB77C\uC11C", "C \uCF54\uB4DC \uBC16\uC758 \uC74C\uC774\uB77C\uC11C", "\uAC00\uC7A5 \uB192\uC740 \uC74C\uC774\uB77C\uC11C", "\uACBD\uACFC\uC74C\uC774\uB77C\uC11C"], 0, "\uBBF8\uB294 C \uCF54\uB4DC\uC758 3\uC74C\uC774\uC5D0\uC694. \uAE38\uAC8C \uBA38\uBB3C\uBA70 \uB05D\uB098\uAE30 \uC88B\uC544\uC694."),
            q("\uBA5C\uB85C\uB514\uB97C \uB9CC\uB4E4 \uB54C \uBE44\uD654\uC131\uC74C\uC744 \uB450\uAE30\uC5D0 \uC88B\uC740 \uC790\uB9AC\uB294?", ["\uC57D\uBC15\uC774\uB098 \uC9E7\uAC8C \uC9C0\uB098\uAC00\uB294 \uC790\uB9AC", "\uB9C8\uC9C0\uB9C9 \uBC15\uC758 \uAE34 \uC74C", "\uCCAB \uBC15\uC758 \uAE34 \uC74C", "\uCF54\uB4DC\uAC00 \uBC14\uB00C\uB294 \uC21C\uAC04\uB9CC"], 0, "\uC57D\uBC15\uC774\uB098 \uC9E7\uC740 \uC74C\uC5D0\uB294 \uBE44\uD654\uC131\uC74C\uC774 \uC790\uC5F0\uC2A4\uB7EC\uC6CC\uC694. \uAE38\uAC8C \uBA38\uBB34\uB294 \uACF3\uC740 \uCF54\uB4DC \uD1A4\uC774 \uC88B\uC544\uC694."),
            play("1\uB9C8\uB514 \uBA5C\uB85C\uB514\uB97C \uC9C1\uC811 \uCCD0 \uBCF4\uC138\uC694. (\uBBF8 \u2192 \uB808 \u2192 \uB3C4 \u2192 \uBBF8)", [4, 2, 0, 4], MEL),
            play("3\uB9C8\uB514 \uBA5C\uB85C\uB514\uB97C \uC9C1\uC811 \uCCD0 \uBCF4\uC138\uC694. (\uB77C \u2192 \uC194 \u2192 \uD30C \u2192 \uB77C)", [9, 7, 5, 9], MEL, false)
          ]
        }
      ]
    }
  ];

  // content/ko/units-borrowed.js
  var WIDE4 = [60, 83];
  var TYPES = ["\uB2E4\uC774\uC5B4\uD1A0\uB2C9 \uCF54\uB4DC", "\uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8", "\uCC28\uC6A9\uD654\uC74C"];
  var units_borrowed_default = [
    {
      id: "u12",
      title: "\uD0A4 \uBC16\uC758 \uCF54\uB4DC",
      desc: "\uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8\uC640 \uCC28\uC6A9\uD654\uC74C\uC73C\uB85C \uACE1\uC5D0 \uC0C9\uC744 \uB354\uD574\uC694.",
      lessons: [
        {
          id: "u12l1",
          title: "\uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8",
          minutes: 9,
          steps: [
            text(
              "V7\uC758 \uD798\uC744 \uB2E4\uB978 \uCF54\uB4DC\uC5D0\uB3C4 \uC368 \uBCF4\uAE30",
              `\uC9C0\uAE08\uAE4C\uC9C0\uB294 \uD0A4 \uC548\uC758 [[diatonic|\uB2E4\uC774\uC5B4\uD1A0\uB2C9 \uCF54\uB4DC]]\uB9CC \uC37C\uC5B4\uC694. \uC548\uC804\uD558\uC9C0\uB9CC \uAC00\uB054 \uB2E8\uC870\uB86D\uAC8C \uB4E4\uB9B4 \uC218 \uC788\uC5B4\uC694. \uC774\uC81C **\uD0A4 \uBC16\uC758 \uCF54\uB4DC\uB97C \uC7A0\uAE50 \uBE4C\uB824** \uACE1\uC5D0 \uC0C9\uC744 \uB354\uD558\uB294 \uBC29\uBC95 \uB450 \uAC00\uC9C0\uB97C \uBC30\uC6B8 \uAC70\uC608\uC694. \uBA3C\uC800 [[secondary-dominant|\uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8]]\uC608\uC694.

V7\uC774 I\uB85C \uD480\uB9B4 \uB54C \uAC15\uD55C \uD574\uACB0\uAC10\uC774 \uC788\uC5C8\uC8E0? \uC774 \uD798\uC744 **I \uB9D0\uACE0 \uB2E4\uB978 \uCF54\uB4DC \uC55E\uC5D0\uB3C4** \uC4F0\uB294 \uAC70\uC608\uC694. \uAC00\uACE0 \uC2F6\uC740 \uBAA9\uD45C \uCF54\uB4DC\uB97C "\uC784\uC2DC \uC9D1"\uC73C\uB85C \uC0BC\uC544\uC11C, \uADF8 \uCF54\uB4DC\uB85C \uD574\uACB0\uB418\uB294 \uB3C4\uBBF8\uB10C\uD2B8 7th\uB97C \uC55E\uC5D0 \uBD99\uC5EC\uC694.

\uC608\uB97C \uB4E4\uC5B4 C \uD0A4\uC5D0\uC11C Dm7\uC73C\uB85C \uAC00\uACE0 \uC2F6\uB2E4\uBA74: Dm\uC758 \uADFC\uC74C \uB808(D)\uC5D0\uC11C **\uC644\uC8045\uB3C4 \uC704**\uB294 \uB77C(A)\uC774\uACE0, \uADF8 \uC704\uC5D0 \uB3C4\uBBF8\uB10C\uD2B8 7th\uB97C \uC313\uC73C\uBA74 **A7**\uC774\uC5D0\uC694. A7 \u2192 Dm7\uC740 V7 \u2192 I\uCC98\uB7FC \uD480\uB824\uC694.

\uB9CC\uB4DC\uB294 \uBC95: **\uBAA9\uD45C \uCF54\uB4DC\uC758 \uADFC\uC74C\uC5D0\uC11C \uC644\uC8045\uB3C4 \uC704\uC758 \uC74C \uC704\uC5D0 \uB3C4\uBBF8\uB10C\uD2B8 7th**

- IIm7(Dm7) \uC55E \u2192 **A7**
- IIIm7(Em7) \uC55E \u2192 **B7**
- IVmaj7(Fmaj7) \uC55E \u2192 **C7**
- V7(G7) \uC55E \u2192 **D7**
- VIm7(Am7) \uC55E \u2192 **E7**

\uC77D\uB294 \uBC95: A7\uC740 "II\uB85C \uAC00\uB294 V7"\uC774\uB77C\uC11C **V7/II**\uB77C\uACE0 \uC368\uC694. "V7/V"\uB294 "V\uC758 V7", \uC989 G7\uB85C \uAC00\uB294 D7\uC774\uC5D0\uC694.

\uC774 \uCF54\uB4DC\uB4E4\uC5D0\uB294 C \uD0A4\uC5D0 \uC5C6\uB294 \uC74C\uC774 \uB4E4\uC5B4 \uC788\uC5B4\uC694. A7\uC758 \uB3C4\u266F(C\u266F), D7\uC758 \uD30C\u266F(F\u266F)\uCC98\uB7FC\uC694. \uADF8\uB798\uC11C \uD0A4 \uBC16\uC73C\uB85C \uC7A0\uAE50 \uB098\uAC14\uB2E4 \uB3CC\uC544\uC624\uB294 \uB290\uB08C\uC774 \uB098\uC694.`
            ),
            listen(
              "\uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8\uC640 \uBAA9\uD45C \uCF54\uB4DC\uB97C \uC774\uC5B4\uC11C \uB4E4\uC5B4 \uBCF4\uC138\uC694. \uB9C8\uCE58 \uC791\uC740 V7 \u2192 I \uAC19\uC8E0?",
              [
                pi("D7 \u2192 G7 (V7/V \u2192 V7)", "D7 G7", 1),
                pi("A7 \u2192 Dm7 (V7/II \u2192 IIm7)", "A7 Dm7", 1),
                pi("E7 \u2192 Am7 (V7/VI \u2192 VIm7)", "E7 Am7", 1),
                pi("B7 \u2192 Em7 (V7/III \u2192 IIIm7)", "B7 Em7", 1),
                pi("C7 \u2192 Fmaj7 (V7/IV \u2192 IVmaj7)", "C7 Fmaj7", 1)
              ],
              WIDE4
            ),
            build("**A7**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uB77C, \uB3C4\u266F, \uBBF8, \uC194) \u2014 Dm7\uC73C\uB85C \uAC00\uB294 \uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8", "A7"),
            build("**D7**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uB808, \uD30C\u266F, \uB77C, \uB3C4) \u2014 G7\uB85C \uAC00\uB294 \uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8", "D7"),
            build("**E7**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uBBF8, \uC194\u266F, \uC2DC, \uB808) \u2014 Am7\uB85C \uAC00\uB294 \uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8", "E7", { hint: false }),
            earP("\uD0A4 \uC548\uC758 \uCF54\uB4DC\uB9CC \uC4F4 \uC9C4\uD589\uC77C\uAE4C\uC694, \uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8\uAC00 \uB4E4\uC5B4\uAC04 \uC9C4\uD589\uC77C\uAE4C\uC694?", prog("Cmaj7 Am7 Dm7 G7"), ["\uD0A4 \uC548\uC758 \uCF54\uB4DC\uB9CC", "\uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8\uAC00 \uB4E4\uC5B4\uAC10"], 0, "Am7\uC740 \uD0A4 \uC548\uC758 \uCF54\uB4DC(VIm7)\uC608\uC694.", 0.9),
            earP("\uD0A4 \uC548\uC758 \uCF54\uB4DC\uB9CC \uC4F4 \uC9C4\uD589\uC77C\uAE4C\uC694, \uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8\uAC00 \uB4E4\uC5B4\uAC04 \uC9C4\uD589\uC77C\uAE4C\uC694?", prog("Cmaj7 A7 Dm7 G7"), ["\uD0A4 \uC548\uC758 \uCF54\uB4DC\uB9CC", "\uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8\uAC00 \uB4E4\uC5B4\uAC10"], 1, "A7\uC740 C \uD0A4 \uBC16\uC758 \uC74C(\uB3C4\u266F)\uC774 \uB4E4\uC5B4\uAC04 V7/II\uC608\uC694. Dm7\uC73C\uB85C \uD480\uB824\uC694.", 0.9),
            q("C \uD0A4\uC5D0\uC11C Dm7 \uC55E\uC5D0 \uBD99\uC774\uB294 \uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8\uB294?", ["A7", "Am7", "B7", "D7"], 0, "Dm\uC758 \uADFC\uC74C \uB808\uC5D0\uC11C \uC644\uC8045\uB3C4 \uC704\uB294 \uB77C(A). \uADF8 \uC704\uC758 \uB3C4\uBBF8\uB10C\uD2B8 7th, A7\uC774\uC5D0\uC694."),
            q("C \uD0A4\uC5D0\uC11C G7 \uC55E\uC5D0 \uBD99\uC774\uB294 \uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8(V7/V)\uB294?", ["D7", "Dm7", "A7", "E7"], 0, "G\uC5D0\uC11C \uC644\uC8045\uB3C4 \uC704\uB294 \uB808(D). D7\uC774\uC5D0\uC694."),
            q("C \uD0A4\uC5D0\uC11C Am7 \uC55E\uC5D0 \uBD99\uC774\uB294 \uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8(V7/VI)\uB294?", ["E7", "Em7", "B7", "A7"], 0, "A\uC5D0\uC11C \uC644\uC8045\uB3C4 \uC704\uB294 \uBBF8(E). E7\uC774\uC5D0\uC694."),
            q("C \uD0A4\uC5D0\uC11C Fmaj7 \uC55E\uC5D0 \uBD99\uC774\uB294 \uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8(V7/IV)\uB294?", ["C7", "Cmaj7", "G7", "Cm7"], 0, "F\uC5D0\uC11C \uC644\uC8045\uB3C4 \uC704\uB294 \uB3C4(C). \uB3C4\uBBF8\uB10C\uD2B8 7th\uC778 C7\uC774\uC5D0\uC694."),
            q("G \uD0A4\uC5D0\uC11C V7/V(5\uB3C4\uB85C \uAC00\uB294 \uB3C4\uBBF8\uB10C\uD2B8)\uB294?", ["A7", "D7", "E7", "G7"], 0, "G \uD0A4\uC758 V\uB294 D\uC608\uC694. D\uC5D0\uC11C \uC644\uC8045\uB3C4 \uC704\uB294 A\uC774\uBBC0\uB85C A7\uC774\uC5D0\uC694."),
            q("\uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8\uB97C \uB9CC\uB4DC\uB294 \uBC29\uBC95\uC740?", ["\uBAA9\uD45C \uCF54\uB4DC \uADFC\uC74C\uC5D0\uC11C \uC644\uC8045\uB3C4 \uC704 \uC74C \uC704\uC5D0 \uB3C4\uBBF8\uB10C\uD2B8 7th\uB97C \uC313\uB294\uB2E4", "\uBAA9\uD45C \uCF54\uB4DC \uADFC\uC74C\uC5D0\uC11C \uBC18\uC74C \uC544\uB798 \uC74C \uC704\uC5D0 \uB9C8\uC774\uB108 7th\uB97C \uC313\uB294\uB2E4", "\uBAA9\uD45C \uCF54\uB4DC\uB97C \uB9C8\uC774\uB108\uB85C \uBC14\uAFBC\uB2E4", "\uBAA9\uD45C \uCF54\uB4DC\uC5D0 9th\uB97C \uB354\uD55C\uB2E4"], 0, "\uBAA9\uD45C \uCF54\uB4DC\uB85C \uD574\uACB0\uB418\uB294 \uB3C4\uBBF8\uB10C\uD2B8 7th\uB97C \uB9CC\uB4DC\uB294 \uAC70\uC608\uC694."),
            q("V7/V\uB294 \uBB34\uC5C7\uC744 \uB73B\uD560\uAE4C\uC694?", ['V\uB85C \uAC00\uB294 \uB3C4\uBBF8\uB10C\uD2B8 7th ("V\uC758 V7")', "5\uBC88\uC9F8 \uCF54\uB4DC\uC758 5\uBC88\uC9F8 \uC74C", "\uD0A4\uAC00 5\uB3C4 \uC704\uB85C \uBC14\uB010\uB2E4\uB294 \uB73B", "7\uBC88\uC9F8 \uCF54\uB4DC"], 0, '"V\uC758 V7"\uC774\uC5D0\uC694. C \uD0A4\uC5D0\uC11C\uB294 G7\uB85C \uAC00\uB294 D7\uC774\uC5D0\uC694.'),
            q("A7\uC758 \uB3C4\u266F(C\u266F)\uC740 C \uBA54\uC774\uC800 \uC2A4\uCF00\uC77C\uC5D0 \uB4E4\uC5B4 \uC788\uB294 \uC74C\uC77C\uAE4C\uC694?", ["\uC544\uB2C8\uC694, \uD0A4 \uBC16\uC758 \uC74C\uC774\uB2E4", "\uC608, \uD0A4 \uC548\uC758 \uC74C\uC774\uB2E4"], 0, "C \uBA54\uC774\uC800 \uC2A4\uCF00\uC77C\uC740 \uB3C4(C)\uC774\uACE0 \uB3C4\u266F\uC740 \uC5C6\uC5B4\uC694. \uADF8\uB798\uC11C \uD0A4 \uBC16\uC5D0\uC11C \uBE4C\uB824 \uC628 \uB290\uB08C\uC774 \uB098\uC694."),
            key("D7\uC758 **3\uC74C \uD30C\u266F(F\u266F)** \uC744 \uB20C\uB7EC\uBCF4\uC138\uC694. (C \uD0A4\uC5D0\uB294 \uC5C6\uB294 \uC74C\uC774\uC5D0\uC694)", 6, WIDE4, "D7 = \uB808 \uD30C\u266F \uB77C \uB3C4. 3\uC74C\uC740 \uD30C\u266F\uC774\uC5D0\uC694.")
          ]
        },
        {
          id: "u12l2",
          title: "\uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8\uB85C \uC9C4\uD589 \uAFB8\uBBF8\uAE30",
          minutes: 9,
          steps: [
            text(
              "\uAE30\uBCF8 \uC9C4\uD589\uC5D0 \uD55C \uCF54\uB4DC\uB9CC \uB07C\uC6CC \uB123\uC5B4\uB3C4 \uB2EC\uB77C\uC838\uC694",
              `\uC775\uC219\uD55C \uC9C4\uD589\uC5D0 \uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8\uB97C \uB07C\uC6B0\uBA74 \uAC19\uC740 \uC9C4\uD589\uC774 \uD6E8\uC52C \uD48D\uC131\uD558\uAC8C \uB4E4\uB824\uC694. **\uAC00\uACE0 \uC2F6\uC740 \uCF54\uB4DC \uBC14\uB85C \uC55E\uC5D0** \uADF8 \uCF54\uB4DC\uC758 V7\uC744 \uB123\uC73C\uBA74 \uB3FC\uC694.

- \uAE30\uBCF8: Cmaj7 - Am7 - Dm7 - G7 - Cmaj7
- Am7 \uC55E\uC5D0 E7: **Cmaj7 - E7 - Am7 - Dm7 - G7 - Cmaj7** (I - V7/VI - VIm - IIm - V - I)
- Dm7 \uC55E\uC5D0 A7: **Cmaj7 - A7 - Dm7 - G7 - Cmaj7** (I - V7/II - IIm - V - I)
- G7 \uC55E\uC5D0 D7: **Cmaj7 - D7 - G7 - Cmaj7** (I - V7/V - V - I)

\uD55C \uAC00\uC9C0 \uC57D\uC18D\uC774 \uC788\uC5B4\uC694. \uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8\uB294 **\uBC18\uB4DC\uC2DC \uBAA9\uD45C \uCF54\uB4DC\uB85C \uD574\uACB0**\uB418\uC5B4\uC57C \uD574\uC694. A7 \uB2E4\uC74C\uC5D0 Dm7\uC774 \uC624\uC9C0 \uC54A\uACE0 \uB2E4\uB978 \uCF54\uB4DC\uAC00 \uC624\uBA74 \uD574\uACB0\uAC10\uC774 \uC57D\uD574\uC9C0\uACE0 \uC5B4\uC0C9\uD558\uAC8C \uB4E4\uB824\uC694.

\uB3C4\uBBF8\uB10C\uD2B8\uB97C \uC5F0\uB2EC\uC544 \uC774\uC5B4\uC11C "\uB3C4\uBBF8\uB10C\uD2B8 \uC5F0\uC1C4"\uB97C \uB9CC\uB4E4 \uC218\uB3C4 \uC788\uC5B4\uC694. E7 \u2192 A7 \u2192 D7 \u2192 G7 \u2192 Cmaj7\uCC98\uB7FC \uADFC\uC74C\uC774 \uC644\uC8045\uB3C4\uC529 \uB0B4\uB824\uAC00\uBA70 \uACC4\uC18D \uB2E4\uC74C \uCF54\uB4DC\uB85C \uD480\uB824\uC694.`
            ),
            listen(
              "\uAE30\uBCF8 \uC9C4\uD589\uACFC \uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8\uB97C \uB07C\uC6B4 \uC9C4\uD589\uC744 \uBE44\uAD50\uD574 \uBCF4\uC138\uC694.",
              [
                pi("\uAE30\uBCF8: Cmaj7 \u2192 Am7 \u2192 Dm7 \u2192 G7 \u2192 Cmaj7", "Cmaj7 Am7 Dm7 G7 Cmaj7", 0.9),
                pi("E7 \uB07C\uC6B0\uAE30: Cmaj7 \u2192 E7 \u2192 Am7 \u2192 Dm7 \u2192 G7 \u2192 Cmaj7", "Cmaj7 E7 Am7 Dm7 G7 Cmaj7", 0.9),
                pi("A7 \uB07C\uC6B0\uAE30: Cmaj7 \u2192 A7 \u2192 Dm7 \u2192 G7 \u2192 Cmaj7", "Cmaj7 A7 Dm7 G7 Cmaj7", 0.9),
                pi("D7 \uB07C\uC6B0\uAE30: Cmaj7 \u2192 D7 \u2192 G7 \u2192 Cmaj7", "Cmaj7 D7 G7 Cmaj7", 0.9),
                pi("\uB3C4\uBBF8\uB10C\uD2B8 \uC5F0\uC1C4: E7 \u2192 A7 \u2192 D7 \u2192 G7 \u2192 Cmaj7", "E7 A7 D7 G7 Cmaj7", 0.9)
              ],
              WIDE4
            ),
            earP("\uD0A4 \uC548\uC758 \uCF54\uB4DC\uB9CC \uC4F4 \uC9C4\uD589\uC77C\uAE4C\uC694, \uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8\uAC00 \uB4E4\uC5B4\uAC04 \uC9C4\uD589\uC77C\uAE4C\uC694?", prog("C F G C"), ["\uD0A4 \uC548\uC758 \uCF54\uB4DC\uB9CC", "\uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8\uAC00 \uB4E4\uC5B4\uAC10"], 0, "C, F, G\uB294 \uBAA8\uB450 C \uD0A4 \uC548\uC758 \uCF54\uB4DC\uC608\uC694.", 0.9),
            earP("\uD0A4 \uC548\uC758 \uCF54\uB4DC\uB9CC \uC4F4 \uC9C4\uD589\uC77C\uAE4C\uC694, \uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8\uAC00 \uB4E4\uC5B4\uAC04 \uC9C4\uD589\uC77C\uAE4C\uC694?", prog("C E7 Am F"), ["\uD0A4 \uC548\uC758 \uCF54\uB4DC\uB9CC", "\uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8\uAC00 \uB4E4\uC5B4\uAC10"], 1, "E7(V7/VI)\uC774 Am\uC73C\uB85C \uD480\uB824\uC694.", 0.9),
            earP("\uD0A4 \uC548\uC758 \uCF54\uB4DC\uB9CC \uC4F4 \uC9C4\uD589\uC77C\uAE4C\uC694, \uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8\uAC00 \uB4E4\uC5B4\uAC04 \uC9C4\uD589\uC77C\uAE4C\uC694?", prog("C D7 G C"), ["\uD0A4 \uC548\uC758 \uCF54\uB4DC\uB9CC", "\uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8\uAC00 \uB4E4\uC5B4\uAC10"], 1, "D7(V7/V)\uC774 G\uB85C \uD480\uB824\uC694.", 0.9),
            q("Cmaj7 - ? - Dm7 - G7 - Cmaj7\uC5D0\uC11C ?\uC5D0 \uB123\uC744 \uC218 \uC788\uB294 \uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8\uB294?", ["A7", "E7", "D7", "B7"], 0, "Dm7\uC73C\uB85C \uD574\uACB0\uB418\uB294 A7\uC774\uC5D0\uC694."),
            q("Cmaj7 - ? - Am7 - Dm7 - G7 - Cmaj7\uC5D0\uC11C ?\uC5D0 \uB123\uC744 \uC218 \uC788\uB294 \uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8\uB294?", ["E7", "A7", "D7", "B7"], 0, "Am7\uC73C\uB85C \uD574\uACB0\uB418\uB294 E7\uC774\uC5D0\uC694."),
            q("Cmaj7 - D7 - ? - Cmaj7\uC5D0\uC11C D7\uC774 \uD574\uACB0\uB418\uB294 \uCF54\uB4DC(\uBE48\uCE78)\uB294?", ["G7", "Dm7", "Fmaj7", "Am7"], 0, "D7(V7/V)\uC740 G7\uB85C \uD480\uB824\uC694. \uADF8\uB2E4\uC74C G7\uC774 \uB2E4\uC2DC Cmaj7\uB85C \uD480\uB824\uC694."),
            q("A7 \uB2E4\uC74C\uC5D0 \uAC00\uC7A5 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uD574\uACB0\uB418\uB294 \uCF54\uB4DC\uB294?", ["Dm (Dm7)", "Em7", "Fmaj7", "Bm7\u266D5"], 0, "A7\uC740 \uC644\uC8045\uB3C4 \uC544\uB798 D(Dm)\uB85C \uD574\uACB0\uB3FC\uC694."),
            q("E7 \uB2E4\uC74C\uC5D0 \uAC00\uC7A5 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uD574\uACB0\uB418\uB294 \uCF54\uB4DC\uB294?", ["Am (Am7)", "Dm7", "Fmaj7", "G7"], 0, "E7\uC740 \uC644\uC8045\uB3C4 \uC544\uB798 A(Am)\uB85C \uD574\uACB0\uB3FC\uC694."),
            q("\uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8\uAC00 \uBAA9\uD45C \uCF54\uB4DC\uB85C \uD574\uACB0\uB418\uC9C0 \uC54A\uACE0 \uB2E4\uB978 \uCF54\uB4DC\uB85C \uAC00\uBA74?", ["\uD574\uACB0\uAC10\uC774 \uC57D\uD574\uC9C0\uACE0 \uC5B4\uC0C9\uD558\uAC8C \uB4E4\uB9B0\uB2E4", "\uC544\uBB34 \uBB38\uC81C \uC5C6\uB2E4", "\uD0A4\uAC00 \uBC14\uB010\uB2E4", "\uCF54\uB4DC\uAC00 \uB9C8\uC774\uB108\uB85C \uBC14\uB010\uB2E4"], 0, "\uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8\uB294 \uBAA9\uD45C \uCF54\uB4DC\uB85C \uD480\uB824\uC57C \uC81C \uC5ED\uD560\uC744 \uD574\uC694."),
            q("E7 \u2192 A7 \u2192 D7 \u2192 G7 \u2192 Cmaj7\uC758 \uADFC\uC74C \uC6C0\uC9C1\uC784\uC740?", ["\uC644\uC8045\uB3C4\uC529 \uC544\uB798\uB85C", "\uC644\uC8045\uB3C4\uC529 \uC704\uB85C", "\uBC18\uC74C\uC529 \uC544\uB798\uB85C", "\uC628\uC74C\uC529 \uC704\uB85C"], 0, "\uBBF8 \u2192 \uB77C \u2192 \uB808 \u2192 \uC194 \u2192 \uB3C4. \uADFC\uC74C\uC774 \uC644\uC8045\uB3C4\uC529 \uB0B4\uB824\uAC00\uC694."),
            key("E7\uC758 **3\uC74C \uC194\u266F(G\u266F)** \uC740 Am7\uB85C \uAC00\uBA74\uC11C \uC5B4\uB290 \uC74C\uC73C\uB85C \uC62C\uB77C\uAC08\uAE4C\uC694? \uADF8 \uC74C\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 9, WIDE4, "\uC194\u266F\uC740 \uBC18\uC74C \uC704\uC758 \uB77C(A)\uB85C \uC62C\uB77C\uAC00\uC694. Am7\uC758 \uADFC\uC74C\uC774\uC5D0\uC694."),
            play("**Cmaj7 - E7 - Am7 - Dm7 - G7 - Cmaj7** \uC758 **\uADFC\uC74C**\uC744 \uCC28\uB840\uB85C \uB20C\uB7EC \uBCF4\uC138\uC694. (\uB3C4, \uBBF8, \uB77C, \uB808, \uC194, \uB3C4)", [0, 4, 9, 2, 7, 0], [60, 72])
          ]
        },
        {
          id: "u12l3",
          title: "\uCC28\uC6A9\uD654\uC74C: \uBCD1\uD589 \uB2E8\uC870\uC5D0\uC11C \uBE4C\uB824 \uC624\uAE30",
          minutes: 9,
          steps: [
            text(
              "\uBC1D\uC740 \uACE1\uC5D0 \uC5B4\uB450\uC6B4 \uC0C9\uC774 \uC2A4\uCE58\uB294 \uC21C\uAC04",
              `C \uBA54\uC774\uC800 \uACE1\uC744 \uC5F0\uC8FC\uD558\uB2E4\uAC00 \uAC11\uC790\uAE30 \uBD84\uC704\uAE30\uAC00 \uC5B4\uB461\uACE0 \uAC10\uC131\uC801\uC73C\uB85C \uBC14\uB00C\uB294 \uC21C\uAC04\uC774 \uC788\uC8E0? \uC774\uB7F4 \uB54C **\uAC19\uC740 \uC73C\uB738\uC74C\uC744 \uC4F0\uB294 \uB2E8\uC870**\uC5D0\uC11C \uCF54\uB4DC\uB97C \uBE4C\uB824 \uC624\uB294 \uACBD\uC6B0\uAC00 \uB9CE\uC544\uC694. \uC774\uAC83\uC744 [[modal-interchange|\uCC28\uC6A9\uD654\uC74C(\uBAA8\uB2EC \uC778\uD130\uCCB4\uC778\uC9C0)]]\uC774\uB77C\uACE0 \uD574\uC694.

\uC5EC\uAE30\uC11C \uBE4C\uB824 \uC624\uB294 \uB2E8\uC870\uB294 C \uB9C8\uC774\uB108\uC608\uC694. C \uBA54\uC774\uC800\uC640 \uC73C\uB738\uC74C\uC774 \uAC19\uC740 [[parallel-key|\uBCD1\uD589\uC870]]\uC608\uC694. (\uD5F7\uAC08\uB9AC\uC9C0 \uB9C8\uC138\uC694. \uC720\uB2DB 3\uC5D0\uC11C \uBC30\uC6B4 **\uB098\uB780\uD55C\uC870**(A \uB9C8\uC774\uB108)\uB294 \uC4F0\uB294 \uC74C\uC774 \uAC19\uC740 \uC9DD\uC774\uACE0, **\uBCD1\uD589\uC870**(C \uB9C8\uC774\uB108)\uB294 \uC73C\uB738\uC74C\uC774 \uAC19\uC740 \uC9DD\uC774\uC5D0\uC694.)

C \uB9C8\uC774\uB108(\uB0B4\uCD94\uB7F4)\uC758 \uC74C\uC740 \uB3C4 \uB808 \uBBF8\u266D \uD30C \uC194 \uB77C\u266D \uC2DC\u266D\uC774\uC5D0\uC694. \uC5EC\uAE30\uC11C \uB098\uC628 \uCF54\uB4DC\uB294 Cm, Dm7\u266D5, E\u266D, Fm, Gm, A\u266D, B\u266D. \uBA54\uC774\uC800 \uACE1\uC5D0 \uAC00\uC7A5 \uC790\uC8FC \uBE4C\uB824 \uC624\uB294 \uAC74 \uC774 \uB137\uC774\uC5D0\uC694.

- **IVm** = Fm (\uD30C \uB77C\u266D \uB3C4)
- **\u266DVII** = B\u266D (\uC2DC\u266D \uB808 \uD30C)
- **\u266DVI** = A\u266D (\uB77C\u266D \uB3C4 \uBBF8\u266D)
- **\u266DIII** = E\u266D (\uBBF8\u266D \uC194 \uC2DC\u266D)

F(IV)\uC640 Fm(IVm)\uC744 \uBE44\uAD50\uD574 \uBCF4\uC138\uC694. 3\uC74C\uC774 \uB77C\uC5D0\uC11C **\uB77C\u266D\uC73C\uB85C \uBC18\uC74C \uB0B4\uB824\uAC08 \uBFD0**\uC778\uB370 \uBD84\uC704\uAE30\uAC00 \uD655 \uBC14\uB00C\uC5B4\uC694.`
            ),
            listen(
              "\uAE30\uBCF8 \uC9C4\uD589\uACFC \uCC28\uC6A9\uD654\uC74C\uC774 \uB4E4\uC5B4\uAC04 \uC9C4\uD589\uC744 \uBE44\uAD50\uD574 \uBCF4\uC138\uC694.",
              [
                pi("\uAE30\uBCF8: C \u2192 F \u2192 C", "C F C", 1),
                pi("IVm \uCC28\uC6A9: C \u2192 Fm \u2192 C", "C Fm C", 1),
                pi("\u266DVII \uCC28\uC6A9: C \u2192 B\u266D \u2192 F \u2192 C", "C B\u266D F C", 1),
                pi("\u266DVI\xB7\u266DVII \uCC28\uC6A9: C \u2192 A\u266D \u2192 B\u266D \u2192 C", "C A\u266D B\u266D C", 1),
                pi("\u266DIII \uCC28\uC6A9: C \u2192 E\u266D \u2192 F \u2192 C", "C E\u266D F C", 1)
              ],
              WIDE4
            ),
            build("**Fm**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uD30C, \uB77C\u266D, \uB3C4) \u2014 IVm", "Fm"),
            build("**B\u266D**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uC2DC\u266D, \uB808, \uD30C) \u2014 \u266DVII", "B\u266D"),
            build("**A\u266D**\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. (\uB77C\u266D, \uB3C4, \uBBF8\u266D) \u2014 \u266DVI", "A\u266D", { hint: false }),
            earP("F(IV)\uC77C\uAE4C\uC694, Fm(IVm)\uC77C\uAE4C\uC694?", prog("C F C"), ["C \u2192 F \u2192 C", "C \u2192 Fm \u2192 C"], 0, "\uBC1D\uC740 F \uCF54\uB4DC\uC608\uC694.", 1),
            earP("F(IV)\uC77C\uAE4C\uC694, Fm(IVm)\uC77C\uAE4C\uC694?", prog("C Fm C"), ["C \u2192 F \u2192 C", "C \u2192 Fm \u2192 C"], 1, "\uC5B4\uB450\uC6B4 Fm\uC73C\uB85C \uBC14\uB00C\uC5C8\uC5B4\uC694. \uCC28\uC6A9\uD654\uC74C\uC774\uC5D0\uC694.", 1),
            earP("\uCC28\uC6A9\uD654\uC74C\uC774 \uB4E4\uC5B4\uAC04 \uC9C4\uD589\uC77C\uAE4C\uC694?", prog("C A\u266D B\u266D C"), ["\uD0A4 \uC548\uC758 \uCF54\uB4DC\uB9CC", "\uCC28\uC6A9\uD654\uC74C\uC774 \uB4E4\uC5B4\uAC10"], 1, "A\u266D\uACFC B\u266D\uC740 C \uB9C8\uC774\uB108\uC5D0\uC11C \uBE4C\uB824 \uC628 \uCF54\uB4DC\uC608\uC694.", 1),
            earP("\uCC28\uC6A9\uD654\uC74C\uC774 \uB4E4\uC5B4\uAC04 \uC9C4\uD589\uC77C\uAE4C\uC694?", prog("C Am F G"), ["\uD0A4 \uC548\uC758 \uCF54\uB4DC\uB9CC", "\uCC28\uC6A9\uD654\uC74C\uC774 \uB4E4\uC5B4\uAC10"], 0, "C, Am, F, G\uB294 \uBAA8\uB450 C \uD0A4 \uC548\uC758 \uCF54\uB4DC\uC608\uC694.", 0.9),
            q("C \uBA54\uC774\uC800 \uACE1\uC5D0\uC11C Fm\uC740 \uC5B4\uB290 \uD0A4\uC5D0\uC11C \uBE4C\uB824 \uC628 \uCF54\uB4DC\uC77C\uAE4C\uC694?", ["C \uB9C8\uC774\uB108", "A \uB9C8\uC774\uB108", "F \uB9C8\uC774\uB108", "G \uBA54\uC774\uC800"], 0, "\uAC19\uC740 \uC73C\uB738\uC74C C\uB97C \uC4F0\uB294 \uBCD1\uD589\uC870, C \uB9C8\uC774\uB108\uC5D0\uC11C \uBE4C\uB824 \uC654\uC5B4\uC694."),
            q("C \uBA54\uC774\uC800\uC758 \uBCD1\uD589\uC870\uB294?", ["C \uB9C8\uC774\uB108", "A \uB9C8\uC774\uB108", "E \uB9C8\uC774\uB108", "G \uBA54\uC774\uC800"], 0, "\uBCD1\uD589\uC870\uB294 \uC73C\uB738\uC74C\uC774 \uAC19\uC740 \uC9DD\uC774\uC5D0\uC694."),
            q("C \uBA54\uC774\uC800\uC758 \uB098\uB780\uD55C\uC870\uB294?", ["A \uB9C8\uC774\uB108", "C \uB9C8\uC774\uB108", "E \uB9C8\uC774\uB108", "G \uB9C8\uC774\uB108"], 0, "\uB098\uB780\uD55C\uC870\uB294 \uC4F0\uB294 \uC74C\uC774 \uAC19\uC740 \uC9DD\uC774\uC5D0\uC694. \uBCD1\uD589\uC870\uC640 \uAD6C\uBCC4\uD558\uC138\uC694."),
            q("C \uD0A4\uC758 \u266DVII \uCF54\uB4DC\uB294?", ["B\u266D", "B", "Bdim", "A\u266D"], 0, "7\uBC88\uC9F8 \uC74C \uC2DC\uB97C \uBC18\uC74C \uB0B4\uB9B0 \uC2DC\u266D \uC704\uC758 \uCF54\uB4DC, B\u266D\uC774\uC5D0\uC694."),
            q("C \uD0A4\uC758 \u266DVI \uCF54\uB4DC\uB294?", ["A\u266D", "A", "Am", "G\u266D"], 0, "6\uBC88\uC9F8 \uC74C \uB77C\uB97C \uBC18\uC74C \uB0B4\uB9B0 \uB77C\u266D \uC704\uC758 \uCF54\uB4DC, A\u266D\uC774\uC5D0\uC694."),
            q("C \uD0A4\uC758 \u266DIII \uCF54\uB4DC\uB294?", ["E\u266D", "E", "Em", "D\u266D"], 0, "3\uBC88\uC9F8 \uC74C \uBBF8\uB97C \uBC18\uC74C \uB0B4\uB9B0 \uBBF8\u266D \uC704\uC758 \uCF54\uB4DC, E\u266D\uC774\uC5D0\uC694."),
            q("IV(F)\uC5D0\uC11C IVm(Fm)\uC73C\uB85C \uBC14\uB014 \uB54C \uB2EC\uB77C\uC9C0\uB294 \uC74C\uC740?", ["\uB77C \u2192 \uB77C\u266D (3\uC74C)", "\uD30C \u2192 \uD30C\u266F (\uADFC\uC74C)", "\uB3C4 \u2192 \uB3C4\u266F (5\uC74C)", "\uB2EC\uB77C\uC9C0\uB294 \uC74C\uC774 \uC5C6\uB2E4"], 0, "3\uC74C\uC774 \uBC18\uC74C \uB0B4\uB824\uAC00\uC11C \uB9C8\uC774\uB108 \uCF54\uB4DC\uAC00 \uB3FC\uC694."),
            q("\uCC28\uC6A9\uD654\uC74C\uC774 \uACE1\uC5D0 \uC8FC\uB294 \uB290\uB08C\uC740?", ["\uC5B4\uB461\uACE0 \uAC10\uC131\uC801\uC778 \uC0C9", "\uB354 \uBC1D\uACE0 \uAC00\uBCBC\uC6B4 \uC0C9", "\uD0A4\uAC00 \uC644\uC804\uD788 \uBC14\uB00C\uB294 \uB290\uB08C", "\uC544\uBB34 \uBCC0\uD654 \uC5C6\uC74C"], 0, "\uBA54\uC774\uC800 \uACE1\uC5D0 \uB2E8\uC870\uC758 \uC0C9\uC774 \uC2A4\uCCD0 \uAC00\uC694."),
            q("B\u266D\uC740 C \uBA54\uC774\uC800 \uC2A4\uCF00\uC77C\uC5D0 \uC788\uB294 \uC74C \uC704\uC758 \uCF54\uB4DC\uC77C\uAE4C\uC694?", ["\uC544\uB2C8\uC694, \uD0A4 \uBC16\uC5D0\uC11C \uBE4C\uB824 \uC628 \uCF54\uB4DC\uB2E4", "\uC608, \uD0A4 \uC548\uC758 \uCF54\uB4DC\uB2E4"], 0, "C \uBA54\uC774\uC800 \uC2A4\uCF00\uC77C\uC5D0\uB294 \uC2DC\u266D\uC774 \uC5C6\uC5B4\uC694. C \uB9C8\uC774\uB108\uC5D0\uC11C \uBE4C\uB824 \uC654\uC5B4\uC694."),
            key("Fm\uC758 **3\uC74C \uB77C\u266D(A\u266D)** \uC744 \uB20C\uB7EC\uBCF4\uC138\uC694. (F \uCF54\uB4DC\uC758 \uB77C\uC640 \uBC18\uC74C \uCC28\uC774\uC608\uC694)", 8, WIDE4, "Fm = \uD30C \uB77C\u266D \uB3C4. 3\uC74C \uB77C\u266D\uC774\uC5D0\uC694.")
          ]
        },
        {
          id: "u12l4",
          title: "\uD0A4 \uBC16\uC758 \uCF54\uB4DC \uAD6C\uBCC4\uD558\uAE30",
          minutes: 9,
          steps: [
            text(
              "\uC720\uB2DB \uB9C8\uBB34\uB9AC: \uC774 \uCF54\uB4DC\uB294 \uC5B4\uB514\uC11C \uC628 \uAC78\uAE4C?",
              `C \uD0A4 \uACE1\uC5D0\uC11C \uD0A4 \uBC16\uC758 \uCF54\uB4DC\uB97C \uB9CC\uB098\uBA74 \uB450 \uAC00\uC9C0 \uC911 \uD558\uB098\uC778 \uACBD\uC6B0\uAC00 \uB9CE\uC544\uC694.

- **\uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8**: **\uB3C4\uBBF8\uB10C\uD2B8 7th** \uCF54\uB4DC\uC774\uACE0, **\uBC14\uB85C \uB2E4\uC74C \uCF54\uB4DC\uB85C \uD574\uACB0**\uB3FC\uC694. (A7 \u2192 Dm7, D7 \u2192 G7, E7 \u2192 Am7)
- **\uCC28\uC6A9\uD654\uC74C**: **C \uB9C8\uC774\uB108\uC5D0\uC11C \uC628 \uCF54\uB4DC**\uC608\uC694. (Fm, B\u266D, A\u266D, E\u266D)

\uD0A4 \uC548\uC758 \uCF54\uB4DC(C, Dm, Em, F, G, Am, Bdim)\uC640 \uAD6C\uBCC4\uD574\uC11C \uC774\uB984\uC744 \uBD99\uC5EC \uBCF4\uC138\uC694.

\uC544\uB798 \uC9C4\uD589\uC744 \uB4E4\uC5B4 \uBCF4\uC138\uC694.
- **C - E7 - Am - Fm - C**: I - V7/VI - VIm - IVm - I
- **C - A7 - Dm7 - G7 - C**: I - V7/II - IIm7 - V7 - I
- **C - F - Fm - C**: I - IV - IVm - I`
            ),
            listen(
              "\uD0A4 \uBC16\uC758 \uCF54\uB4DC\uAC00 \uB4E4\uC5B4\uAC04 \uC9C4\uD589\uB4E4\uC744 \uB4E4\uC5B4 \uBCF4\uC138\uC694.",
              [
                pi("I - V7/VI - VIm - IVm - I (C E7 Am Fm C)", "C E7 Am Fm C", 0.9),
                pi("I - V7/II - IIm7 - V7 - I (C A7 Dm7 G7 C)", "C A7 Dm7 G7 C", 0.9),
                pi("I - IV - IVm - I (C F Fm C)", "C F Fm C", 1)
              ],
              WIDE4
            ),
            q("C \uD0A4\uC5D0\uC11C Dm7\uC740 \uC5B4\uB5A4 \uCF54\uB4DC\uC77C\uAE4C\uC694?", TYPES, 0, "Dm7\uC740 C \uD0A4\uC758 2\uBC88\uC9F8 \uCF54\uB4DC(IIm7), \uB2E4\uC774\uC5B4\uD1A0\uB2C9 \uCF54\uB4DC\uC608\uC694."),
            q("C \uD0A4\uC5D0\uC11C A7\uC740 \uC5B4\uB5A4 \uCF54\uB4DC\uC77C\uAE4C\uC694?", TYPES, 1, "Dm\uC73C\uB85C \uD574\uACB0\uB418\uB294 V7/II, \uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8\uC608\uC694."),
            q("C \uD0A4\uC5D0\uC11C Fm\uC740 \uC5B4\uB5A4 \uCF54\uB4DC\uC77C\uAE4C\uC694?", TYPES, 2, "C \uB9C8\uC774\uB108\uC5D0\uC11C \uBE4C\uB824 \uC628 IVm, \uCC28\uC6A9\uD654\uC74C\uC774\uC5D0\uC694."),
            q("C \uD0A4\uC5D0\uC11C D7\uC740 \uC5B4\uB5A4 \uCF54\uB4DC\uC77C\uAE4C\uC694?", TYPES, 1, "G\uB85C \uD574\uACB0\uB418\uB294 V7/V, \uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8\uC608\uC694."),
            q("C \uD0A4\uC5D0\uC11C B\u266D\uC740 \uC5B4\uB5A4 \uCF54\uB4DC\uC77C\uAE4C\uC694?", TYPES, 2, "C \uB9C8\uC774\uB108\uC5D0\uC11C \uBE4C\uB824 \uC628 \u266DVII, \uCC28\uC6A9\uD654\uC74C\uC774\uC5D0\uC694."),
            q("C \uD0A4\uC5D0\uC11C E7\uC740 \uC5B4\uB5A4 \uCF54\uB4DC\uC77C\uAE4C\uC694?", TYPES, 1, "Am\uC73C\uB85C \uD574\uACB0\uB418\uB294 V7/VI, \uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8\uC608\uC694."),
            q("C \uD0A4\uC5D0\uC11C A\u266D\uC740 \uC5B4\uB5A4 \uCF54\uB4DC\uC77C\uAE4C\uC694?", TYPES, 2, "C \uB9C8\uC774\uB108\uC5D0\uC11C \uBE4C\uB824 \uC628 \u266DVI, \uCC28\uC6A9\uD654\uC74C\uC774\uC5D0\uC694."),
            q("C \uD0A4\uC5D0\uC11C G7\uC740 \uC5B4\uB5A4 \uCF54\uB4DC\uC77C\uAE4C\uC694?", TYPES, 0, "G7\uC740 C \uD0A4\uC758 5\uBC88\uC9F8 \uCF54\uB4DC(V7), \uB2E4\uC774\uC5B4\uD1A0\uB2C9 \uCF54\uB4DC\uC608\uC694."),
            q("G \uD0A4\uC5D0\uC11C V7/V(5\uB3C4\uB85C \uAC00\uB294 \uB3C4\uBBF8\uB10C\uD2B8)\uB294?", ["A7", "D7", "E7", "G7"], 0, "G \uD0A4\uC758 V\uB294 D\uC608\uC694. D\uC5D0\uC11C \uC644\uC8045\uB3C4 \uC704\uB294 A, A7\uC774\uC5D0\uC694."),
            q("G \uD0A4\uC758 IVm(\uCC28\uC6A9\uD654\uC74C)\uC740?", ["Cm", "C", "Am", "Dm"], 0, "G \uD0A4\uC758 IV\uB294 C\uC608\uC694. \uB9C8\uC774\uB108\uB85C \uBC14\uAFB8\uBA74 Cm\uC774\uC5D0\uC694."),
            q("F \uD0A4\uC758 \u266DVII(\uCC28\uC6A9\uD654\uC74C)\uC740?", ["E\u266D", "E", "Em", "D\u266D"], 0, "F \uD0A4\uC758 7\uBC88\uC9F8 \uC74C \uBBF8\uB97C \uBC18\uC74C \uB0B4\uB9B0 \uBBF8\u266D \uC704\uC758 \uCF54\uB4DC, E\u266D\uC774\uC5D0\uC694."),
            q("D \uD0A4\uC758 V7/II(2\uBC88\uC9F8 \uCF54\uB4DC\uB85C \uAC00\uB294 \uB3C4\uBBF8\uB10C\uD2B8)\uB294?", ["B7", "A7", "E7", "F\u266F7"], 0, "D \uD0A4\uC758 II\uB294 Em(E)\uC774\uC5D0\uC694. E\uC5D0\uC11C \uC644\uC8045\uB3C4 \uC704\uB294 B, B7\uC774\uC5D0\uC694."),
            q("C - E7 - Am - Fm - C\uC5D0\uC11C E7\uACFC Fm\uC758 \uC815\uCCB4\uB294?", ["E7\uC740 \uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8, Fm\uC740 \uCC28\uC6A9\uD654\uC74C", "E7\uC740 \uCC28\uC6A9\uD654\uC74C, Fm\uC740 \uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8", "\uB458 \uB2E4 \uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8", "\uB458 \uB2E4 \uB2E4\uC774\uC5B4\uD1A0\uB2C9 \uCF54\uB4DC"], 0, "E7\uC740 Am\uC73C\uB85C \uD574\uACB0\uB418\uB294 V7/VI, Fm\uC740 C \uB9C8\uC774\uB108\uC5D0\uC11C \uC628 IVm\uC774\uC5D0\uC694."),
            earP("\uD0A4 \uC548\uC758 \uCF54\uB4DC\uB9CC \uC4F4 \uC9C4\uD589\uC77C\uAE4C\uC694, \uD0A4 \uBC16\uC758 \uCF54\uB4DC\uAC00 \uB4E4\uC5B4\uAC04 \uC9C4\uD589\uC77C\uAE4C\uC694?", prog("C Am F G"), ["\uD0A4 \uC548\uC758 \uCF54\uB4DC\uB9CC", "\uD0A4 \uBC16\uC758 \uCF54\uB4DC\uAC00 \uB4E4\uC5B4\uAC10"], 0, "\uBAA8\uB450 C \uD0A4 \uC548\uC758 \uCF54\uB4DC\uC608\uC694.", 0.9),
            earP("\uD0A4 \uC548\uC758 \uCF54\uB4DC\uB9CC \uC4F4 \uC9C4\uD589\uC77C\uAE4C\uC694, \uD0A4 \uBC16\uC758 \uCF54\uB4DC\uAC00 \uB4E4\uC5B4\uAC04 \uC9C4\uD589\uC77C\uAE4C\uC694?", prog("C E7 Am Fm C"), ["\uD0A4 \uC548\uC758 \uCF54\uB4DC\uB9CC", "\uD0A4 \uBC16\uC758 \uCF54\uB4DC\uAC00 \uB4E4\uC5B4\uAC10"], 1, "E7\uACFC Fm\uC774 \uD0A4 \uBC16\uC758 \uCF54\uB4DC\uC608\uC694.", 0.9),
            play("**C - E7 - Am - Fm - C** \uC758 **\uADFC\uC74C**\uC744 \uCC28\uB840\uB85C \uB20C\uB7EC \uBCF4\uC138\uC694. (\uB3C4, \uBBF8, \uB77C, \uD30C, \uB3C4)", [0, 4, 9, 5, 0], [60, 72])
          ]
        }
      ]
    }
  ];

  // content/ko/units-structure.js
  var WIDE5 = [60, 83];
  var KB2 = [60, 84];
  var MODE_TYPES = ["\uB3C4\uB9AC\uC548", "\uBBF9\uC194\uB9AC\uB514\uC548", "\uB9AC\uB514\uC548"];
  var CADENCES = ["\uC815\uACA9 \uC885\uC9C0 (V \u2192 I)", "\uBCC0\uACA9 \uC885\uC9C0 (IV \u2192 I)", "\uBC18\uC885\uC9C0 (V\uB85C \uB05D\uB0A8)", "\uC704\uC885\uC9C0 (V \u2192 VIm)"];
  var C_MODES = {
    major: notes(60, SCALES.major),
    dorian: notes(60, SCALES.dorian),
    mixolydian: notes(60, SCALES.mixolydian),
    lydian: notes(60, SCALES.lydian),
    minor: notes(60, SCALES.minor),
    phrygian: notes(60, SCALES.phrygian),
    locrian: notes(60, SCALES.locrian)
  };
  var units_structure_default = [
    {
      id: "u13",
      title: "\uBAA8\uB4DC\xB7\uB300\uB9AC\uCF54\uB4DC\xB7\uCE74\uB374\uC2A4",
      desc: "\uC2A4\uCF00\uC77C\uC758 \uC0C8\uB85C\uC6B4 \uC0C9, \uCF54\uB4DC \uBC14\uAFD4 \uC4F0\uAE30, \uACE1\uC744 \uB05D\uB9FA\uACE0 \uAD6C\uC131\uD558\uB294 \uBC95\uC744 \uBC30\uC6CC\uC694.",
      lessons: [
        // ───────────────────────────────────── 1. 모드
        {
          id: "u13l1",
          title: "\uBAA8\uB4DC: \uAC19\uC740 \uC74C, \uB2E4\uB978 \uC911\uC2EC",
          minutes: 10,
          steps: [
            text(
              "\uC2DC\uC791\uD558\uB294 \uC74C\uB9CC \uBC14\uAFB8\uBA74 \uC0C8\uB85C\uC6B4 \uC2A4\uCF00\uC77C",
              `[[mode|\uBAA8\uB4DC]]\uB294 **\uBA54\uC774\uC800 \uC2A4\uCF00\uC77C\uC758 \uC74C\uC740 \uADF8\uB300\uB85C \uB450\uACE0, \uC2DC\uC791\uD558\uB294 \uC74C\uB9CC \uBC14\uAFD4\uC11C** \uB9CC\uB4E0 \uC2A4\uCF00\uC77C\uC774\uC5D0\uC694. \uB3C4\uB808\uBBF8\uD30C\uC194\uB77C\uC2DC(C \uBA54\uC774\uC800)\uC758 \uC74C\uC744 \uB2E4\uB978 \uC74C\uC5D0\uC11C \uC2DC\uC791\uD574\uC11C \uD55C \uBC14\uD034 \uB3CC\uBA74 \uC0C8 \uC2A4\uCF00\uC77C\uC774 \uB3FC\uC694. \uC2DC\uC791\uC74C\uC774 \uBC14\uB00C\uBA74 \uC911\uC2EC(\uC73C\uB738\uC74C)\uC774 \uBC14\uB00C\uC5B4\uC11C \uBD84\uC704\uAE30\uAC00 \uB2EC\uB77C\uC838\uC694.

- \uB3C4\uC5D0\uC11C \uC2DC\uC791: **\uC774\uC624\uB2C8\uC548** (= \uBA54\uC774\uC800)
- \uB808\uC5D0\uC11C \uC2DC\uC791: **\uB3C4\uB9AC\uC548**
- \uBBF8\uC5D0\uC11C \uC2DC\uC791: **\uD504\uB9AC\uC9C0\uC548**
- \uD30C\uC5D0\uC11C \uC2DC\uC791: **\uB9AC\uB514\uC548**
- \uC194\uC5D0\uC11C \uC2DC\uC791: **\uBBF9\uC194\uB9AC\uB514\uC548**
- \uB77C\uC5D0\uC11C \uC2DC\uC791: **\uC5D0\uC62C\uB9AC\uC548** (= \uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108)
- \uC2DC\uC5D0\uC11C \uC2DC\uC791: **\uB85C\uD06C\uB9AC\uC548**

\uC791\uACE1\uC5D0\uC11C \uAC00\uC7A5 \uC790\uC8FC \uC4F0\uB294 \uAC74 \uC138 \uAC00\uC9C0\uC608\uC694. \uAC19\uC740 \uB3C4\uC5D0\uC11C \uC2DC\uC791\uD574\uC11C \uBE44\uAD50\uD558\uBA74 \uCC28\uC774\uAC00 \uC798 \uBCF4\uC5EC\uC694.

- [[dorian|\uB3C4\uB9AC\uC548]]: \uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108\uC5D0\uC11C **6\uBC88\uC9F8 \uC74C\uC744 \uBC18\uC74C \uC62C\uB9BC**. \uB9C8\uC774\uB108\uC778\uB370 \uBC1D\uC740 \uAE30\uC6B4\uC774 \uC11E\uC5EC\uC694. \uC7AC\uC988\uC640 \uD391\uD06C\uC758 \uC18C\uB9AC
- [[mixolydian|\uBBF9\uC194\uB9AC\uB514\uC548]]: \uBA54\uC774\uC800\uC5D0\uC11C **7\uBC88\uC9F8 \uC74C\uC744 \uBC18\uC74C \uB0B4\uB9BC**. \uBC1D\uACE0 \uC5EC\uC720\uB86D\uACE0 \uBE14\uB8E8\uC9C0\uD574\uC694. \uB85D\uACFC \uD31D\uC758 \uC18C\uB9AC
- [[lydian|\uB9AC\uB514\uC548]]: \uBA54\uC774\uC800\uC5D0\uC11C **4\uBC88\uC9F8 \uC74C\uC744 \uBC18\uC74C \uC62C\uB9BC**. \uBABD\uD658\uC801\uC774\uACE0 \uD658\uC0C1\uC801\uC774\uC5D0\uC694. \uC601\uD654\uC74C\uC545\uC758 \uC18C\uB9AC`
            ),
            listen(
              "\uB3C4\uC5D0\uC11C \uC2DC\uC791\uD558\uB294 \uBAA8\uB4DC\uB97C \uBE44\uAD50\uD574 \uBCF4\uC138\uC694. \uBA54\uC774\uC800, \uB9C8\uC774\uB108\uC640 \uC5B4\uB514\uAC00 \uB2E4\uB978\uC9C0 \uAC74\uBC18\uC5D0\uC11C \uD655\uC778\uD574 \uBCF4\uC138\uC694.",
              [
                { label: "C \uC774\uC624\uB2C8\uC548 (\uBA54\uC774\uC800)", midis: C_MODES.major, gap: 0.36 },
                { label: "C \uB3C4\uB9AC\uC548", midis: C_MODES.dorian, gap: 0.36 },
                { label: "C \uBBF9\uC194\uB9AC\uB514\uC548", midis: C_MODES.mixolydian, gap: 0.36 },
                { label: "C \uB9AC\uB514\uC548", midis: C_MODES.lydian, gap: 0.36 },
                { label: "C \uC5D0\uC62C\uB9AC\uC548 (\uB9C8\uC774\uB108)", midis: C_MODES.minor, gap: 0.36 },
                { label: "C \uD504\uB9AC\uC9C0\uC548", midis: C_MODES.phrygian, gap: 0.36 },
                { label: "C \uB85C\uD06C\uB9AC\uC548", midis: C_MODES.locrian, gap: 0.36 }
              ],
              [60, 72]
            ),
            play("**D \uB3C4\uB9AC\uC548**\uC744 \uD770\uAC74\uBC18\uC73C\uB85C \uCCD0 \uBCF4\uC138\uC694. (\uB808 \uBBF8 \uD30C \uC194 \uB77C \uC2DC \uB3C4 \uB808)", [2, 4, 5, 7, 9, 11, 0, 2], [62, 74]),
            play("**G \uBBF9\uC194\uB9AC\uB514\uC548**\uC744 \uD770\uAC74\uBC18\uC73C\uB85C \uCCD0 \uBCF4\uC138\uC694. (\uC194 \uB77C \uC2DC \uB3C4 \uB808 \uBBF8 \uD30C \uC194)", [7, 9, 11, 0, 2, 4, 5, 7], [67, 79]),
            play("**F \uB9AC\uB514\uC548**\uC744 \uD770\uAC74\uBC18\uC73C\uB85C \uCCD0 \uBCF4\uC138\uC694. (\uD30C \uC194 \uB77C \uC2DC \uB3C4 \uB808 \uBBF8 \uD30C)", [5, 7, 9, 11, 0, 2, 4, 5], [65, 77]),
            ear("\uB3C4\uC5D0\uC11C \uC2DC\uC791\uD558\uB294 \uC5B4\uB5A4 \uBAA8\uB4DC\uC77C\uAE4C\uC694?", C_MODES.dorian, "seq", MODE_TYPES, 0, "\uB9C8\uC774\uB108(\uBBF8\u266D)\uC774\uC9C0\uB9CC 6\uBC88\uC9F8 \uC74C\uC774 \uB192\uC544\uC11C(\uB77C) \uBC1D\uC740 \uAE30\uC6B4\uC774 \uC788\uC5B4\uC694."),
            ear("\uB3C4\uC5D0\uC11C \uC2DC\uC791\uD558\uB294 \uC5B4\uB5A4 \uBAA8\uB4DC\uC77C\uAE4C\uC694?", C_MODES.mixolydian, "seq", MODE_TYPES, 1, "\uBA54\uC774\uC800(\uBBF8)\uC778\uB370 7\uBC88\uC9F8 \uC74C\uC774 \uB0AE\uC544\uC694(\uC2DC\u266D). \uC5EC\uC720\uB86D\uACE0 \uBE14\uB8E8\uC9C0\uD574\uC694."),
            ear("\uB3C4\uC5D0\uC11C \uC2DC\uC791\uD558\uB294 \uC5B4\uB5A4 \uBAA8\uB4DC\uC77C\uAE4C\uC694?", C_MODES.lydian, "seq", MODE_TYPES, 2, "\uBA54\uC774\uC800\uC778\uB370 4\uBC88\uC9F8 \uC74C\uC774 \uB192\uC544\uC694(\uD30C\u266F). \uBABD\uD658\uC801\uC774\uC5D0\uC694."),
            q("G\uC5D0\uC11C \uC2DC\uC791\uD558\uB294 \uD770\uAC74\uBC18 \uC2A4\uCF00\uC77C(\uC194 \uB77C \uC2DC \uB3C4 \uB808 \uBBF8 \uD30C)\uC740 \uC5B4\uB5A4 \uBAA8\uB4DC\uC77C\uAE4C\uC694?", ["\uBBF9\uC194\uB9AC\uB514\uC548", "\uB3C4\uB9AC\uC548", "\uB9AC\uB514\uC548", "\uC774\uC624\uB2C8\uC548"], 0, "\uBA54\uC774\uC800\uC758 5\uBC88\uC9F8 \uC74C\uC5D0\uC11C \uC2DC\uC791\uD558\uBA74 \uBBF9\uC194\uB9AC\uB514\uC548\uC774\uC5D0\uC694."),
            q("D\uC5D0\uC11C \uC2DC\uC791\uD558\uB294 \uD770\uAC74\uBC18 \uC2A4\uCF00\uC77C(\uB808 \uBBF8 \uD30C \uC194 \uB77C \uC2DC \uB3C4)\uC740?", ["\uB3C4\uB9AC\uC548", "\uBBF9\uC194\uB9AC\uB514\uC548", "\uB9AC\uB514\uC548", "\uC5D0\uC62C\uB9AC\uC548"], 0, "\uBA54\uC774\uC800\uC758 2\uBC88\uC9F8 \uC74C\uC5D0\uC11C \uC2DC\uC791\uD558\uBA74 \uB3C4\uB9AC\uC548\uC774\uC5D0\uC694."),
            q("F\uC5D0\uC11C \uC2DC\uC791\uD558\uB294 \uD770\uAC74\uBC18 \uC2A4\uCF00\uC77C(\uD30C \uC194 \uB77C \uC2DC \uB3C4 \uB808 \uBBF8)\uC740?", ["\uB9AC\uB514\uC548", "\uB3C4\uB9AC\uC548", "\uBBF9\uC194\uB9AC\uB514\uC548", "\uD504\uB9AC\uC9C0\uC548"], 0, "\uBA54\uC774\uC800\uC758 4\uBC88\uC9F8 \uC74C\uC5D0\uC11C \uC2DC\uC791\uD558\uBA74 \uB9AC\uB514\uC548\uC774\uC5D0\uC694."),
            q("\uBA54\uC774\uC800 \uC2A4\uCF00\uC77C\uACFC \uB611\uAC19\uC740 \uBAA8\uB4DC\uB294?", ["\uC774\uC624\uB2C8\uC548", "\uB3C4\uB9AC\uC548", "\uC5D0\uC62C\uB9AC\uC548", "\uB85C\uD06C\uB9AC\uC548"], 0, "\uC774\uC624\uB2C8\uC548\uC774 \uBA54\uC774\uC800 \uC2A4\uCF00\uC77C\uC774\uC5D0\uC694."),
            q("\uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108 \uC2A4\uCF00\uC77C\uACFC \uB611\uAC19\uC740 \uBAA8\uB4DC\uB294?", ["\uC5D0\uC62C\uB9AC\uC548", "\uC774\uC624\uB2C8\uC548", "\uB3C4\uB9AC\uC548", "\uB9AC\uB514\uC548"], 0, "\uC5D0\uC62C\uB9AC\uC548\uC774 \uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108\uC608\uC694."),
            q("\uB3C4\uB9AC\uC548\uC740 \uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108\uC640 \uC5B4\uB5BB\uAC8C \uB2E4\uB97C\uAE4C\uC694?", ["6\uBC88\uC9F8 \uC74C\uC774 \uBC18\uC74C \uB192\uB2E4", "3\uBC88\uC9F8 \uC74C\uC774 \uBC18\uC74C \uB192\uB2E4", "7\uBC88\uC9F8 \uC74C\uC774 \uBC18\uC74C \uB0AE\uB2E4", "4\uBC88\uC9F8 \uC74C\uC774 \uBC18\uC74C \uB192\uB2E4"], 0, "\uB3C4\uB9AC\uC548 = \uB9C8\uC774\uB108\uC5D0\uC11C 6\uBC88\uC9F8 \uC74C\uC744 \uBC18\uC74C \uC62C\uB9B0 \uAC83\uC774\uC5D0\uC694."),
            q("\uBBF9\uC194\uB9AC\uB514\uC548\uC740 \uBA54\uC774\uC800\uC640 \uC5B4\uB5BB\uAC8C \uB2E4\uB97C\uAE4C\uC694?", ["7\uBC88\uC9F8 \uC74C\uC774 \uBC18\uC74C \uB0AE\uB2E4", "4\uBC88\uC9F8 \uC74C\uC774 \uBC18\uC74C \uB192\uB2E4", "3\uBC88\uC9F8 \uC74C\uC774 \uBC18\uC74C \uB0AE\uB2E4", "5\uBC88\uC9F8 \uC74C\uC774 \uBC18\uC74C \uB0AE\uB2E4"], 0, "\uBBF9\uC194\uB9AC\uB514\uC548 = \uBA54\uC774\uC800\uC5D0\uC11C 7\uBC88\uC9F8 \uC74C\uC744 \uBC18\uC74C \uB0B4\uB9B0 \uAC83\uC774\uC5D0\uC694."),
            q("\uB9AC\uB514\uC548\uC740 \uBA54\uC774\uC800\uC640 \uC5B4\uB5BB\uAC8C \uB2E4\uB97C\uAE4C\uC694?", ["4\uBC88\uC9F8 \uC74C\uC774 \uBC18\uC74C \uB192\uB2E4", "7\uBC88\uC9F8 \uC74C\uC774 \uBC18\uC74C \uB0AE\uB2E4", "3\uBC88\uC9F8 \uC74C\uC774 \uBC18\uC74C \uB0AE\uB2E4", "6\uBC88\uC9F8 \uC74C\uC774 \uBC18\uC74C \uB0AE\uB2E4"], 0, "\uB9AC\uB514\uC548 = \uBA54\uC774\uC800\uC5D0\uC11C 4\uBC88\uC9F8 \uC74C\uC744 \uBC18\uC74C \uC62C\uB9B0 \uAC83\uC774\uC5D0\uC694."),
            key("C \uB3C4\uB9AC\uC548\uC5D0\uC11C \uBA54\uC774\uC800\uC640 \uB2EC\uB77C\uC9C0\uB294 3\uBC88\uC9F8 \uC74C **\uBBF8\u266D(E\u266D)** \uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 3, [60, 72], "C \uB3C4\uB9AC\uC548\uC740 \uB3C4 \uB808 \uBBF8\u266D \uD30C \uC194 \uB77C \uC2DC\u266D\uC774\uC5D0\uC694."),
            key("C \uBBF9\uC194\uB9AC\uB514\uC548\uC5D0\uC11C \uBA54\uC774\uC800\uC640 \uB2EC\uB77C\uC9C0\uB294 7\uBC88\uC9F8 \uC74C **\uC2DC\u266D(B\u266D)** \uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 10, [60, 72], "C \uBBF9\uC194\uB9AC\uB514\uC548\uC740 \uB3C4 \uB808 \uBBF8 \uD30C \uC194 \uB77C \uC2DC\u266D\uC774\uC5D0\uC694."),
            key("C \uB9AC\uB514\uC548\uC5D0\uC11C \uBA54\uC774\uC800\uC640 \uB2EC\uB77C\uC9C0\uB294 4\uBC88\uC9F8 \uC74C **\uD30C\u266F(F\u266F)** \uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 6, [60, 72], "C \uB9AC\uB514\uC548\uC740 \uB3C4 \uB808 \uBBF8 \uD30C\u266F \uC194 \uB77C \uC2DC\uC608\uC694.")
          ]
        },
        // ───────────────────────────────────── 2. 모드와 코드
        {
          id: "u13l2",
          title: "\uBAA8\uB4DC\uC640 \uCF54\uB4DC: \uCF54\uB4DC \uC704\uC5D0 \uC4F0\uB294 \uC2A4\uCF00\uC77C",
          minutes: 9,
          steps: [
            text(
              "\uCF54\uB4DC\uB9C8\uB2E4 \uC5B4\uC6B8\uB9AC\uB294 \uC2A4\uCF00\uC77C\uC774 \uC788\uC5B4\uC694",
              `\uBAA8\uB4DC\uB294 **\uCF54\uB4DC \uC704\uC5D0\uC11C \uBA5C\uB85C\uB514\uB97C \uB9CC\uB4E4 \uB54C \uACE0\uB97C \uC218 \uC788\uB294 \uC74C\uC758 \uD314\uB808\uD2B8**\uC608\uC694. C \uD0A4\uC758 \uB2E4\uC774\uC5B4\uD1A0\uB2C9 \uCF54\uB4DC\uB9C8\uB2E4 \uC5B4\uC6B8\uB9AC\uB294 \uBAA8\uB4DC\uAC00 \uC815\uD574\uC838 \uC788\uC5B4\uC694.

- Cmaj7 (Imaj7) \u2192 **C \uC774\uC624\uB2C8\uC548** (\uBA54\uC774\uC800)
- Dm7 (IIm7) \u2192 **D \uB3C4\uB9AC\uC548**
- Em7 (IIIm7) \u2192 E \uD504\uB9AC\uC9C0\uC548
- Fmaj7 (IVmaj7) \u2192 **F \uB9AC\uB514\uC548**
- G7 (V7) \u2192 **G \uBBF9\uC194\uB9AC\uB514\uC548**
- Am7 (VIm7) \u2192 A \uC5D0\uC62C\uB9AC\uC548 (\uB9C8\uC774\uB108)
- Bm7\u266D5 (VIIm7\u266D5) \u2192 B \uB85C\uD06C\uB9AC\uC548

\uCF54\uB4DC\uAC00 \uBC14\uB00C\uBA74 \uBAA8\uB4DC\uB3C4 \uBC14\uB00C\uC9C0\uB9CC \uB180\uB77C\uC6B4 \uC0AC\uC2E4\uC774 \uC788\uC5B4\uC694. \uC774 \uBAA8\uB4DC\uB4E4\uC740 **\uBAA8\uB450 C \uBA54\uC774\uC800 \uC2A4\uCF00\uC77C\uC758 \uAC19\uC740 \uC74C**\uC774\uACE0 \uC2DC\uC791\uD558\uB294 \uC74C\uB9CC \uB2EC\uB77C\uC694. \uADF8\uB798\uC11C 2-5-1(Dm7 \u2192 G7 \u2192 Cmaj7)\uC744 C \uBA54\uC774\uC800 \uC74C \uD558\uB098\uB85C \uCB49 \uC990\uAE38 \uC218 \uC788\uC5B4\uC694. \uCF54\uB4DC\uB9C8\uB2E4 **\uC911\uC2EC\uC73C\uB85C \uC0BC\uB294 \uC74C**\uB9CC \uB2EC\uB77C\uC9C4 \uAC70\uC608\uC694.

\uC720\uB2DB 9\uC5D0\uC11C \uBC30\uC6B4 \uC5B4\uBCF4\uC774\uB4DC \uB178\uD2B8\uB3C4 \uBAA8\uB4DC\uB85C \uC124\uBA85\uB3FC\uC694. G7 \uC704\uC758 \uB3C4(11th)\uB294 G \uBBF9\uC194\uB9AC\uB514\uC548\uC5D0\uC11C 3\uC74C \uC2DC\uC640 \uBC18\uC74C\uC73C\uB85C \uBD80\uB52A\uD600\uC11C \uAE38\uAC8C \uBA38\uBB3C\uAE30\uC5D0\uB294 \uD53C\uD574\uC694.`
            ),
            listen(
              "\uCF54\uB4DC \uC704\uC5D0 \uADF8 \uCF54\uB4DC\uC758 \uBAA8\uB4DC \uC74C\uC73C\uB85C \uB9CC\uB4E0 \uBA5C\uB85C\uB514\uB97C \uC5B9\uC5B4 \uB4E4\uC5B4 \uBCF4\uC138\uC694. \uBAA8\uB450 C \uBA54\uC774\uC800\uC758 \uC74C\uC774\uC9C0\uB9CC \uCF54\uB4DC\uB9C8\uB2E4 \uC911\uC2EC\uC774 \uB2EC\uB77C\uC694.",
              [
                si("Cmaj7 + C \uC774\uC624\uB2C8\uC548 \uC74C\uC73C\uB85C", [["Cmaj7", 0, 4]], [[76, 0, 1], [79, 1, 1], [81, 2, 1], [79, 3, 1]]),
                si("Dm7 + D \uB3C4\uB9AC\uC548 \uC74C\uC73C\uB85C", [["Dm7", 0, 4]], [[76, 0, 1], [77, 1, 1], [81, 2, 1], [79, 3, 1]]),
                si("G7 + G \uBBF9\uC194\uB9AC\uB514\uC548 \uC74C\uC73C\uB85C", [["G7", 0, 4]], [[81, 0, 1], [79, 1, 1], [83, 2, 1], [76, 3, 1]]),
                si("Fmaj7 + F \uB9AC\uB514\uC548 \uC74C\uC73C\uB85C", [["Fmaj7", 0, 4]], [[81, 0, 1], [83, 1, 1], [84, 2, 1], [79, 3, 1]])
              ],
              KB2
            ),
            listen(
              "2-5-1\uC744 \uB4E4\uC5B4 \uBCF4\uC138\uC694. \uC138 \uCF54\uB4DC\uAC00 \uC4F0\uB294 \uBAA8\uB4DC(\uB808 \uB3C4\uB9AC\uC548, \uC194 \uBBF9\uC194\uB9AC\uB514\uC548, \uB3C4 \uC774\uC624\uB2C8\uC548)\uB294 \uBAA8\uB450 \uAC19\uC740 \uD770\uAC74\uBC18\uC758 \uC74C\uC774\uC5D0\uC694.",
              [pi("Dm7 \u2192 G7 \u2192 Cmaj7", "Dm7 G7 Cmaj7", 1)],
              WIDE5
            ),
            q("C \uD0A4\uC5D0\uC11C Dm7 \uC704\uC5D0 \uC4F0\uB294 \uBAA8\uB4DC\uB294?", ["D \uB3C4\uB9AC\uC548", "D \uBBF9\uC194\uB9AC\uB514\uC548", "D \uB9AC\uB514\uC548", "D \uC774\uC624\uB2C8\uC548"], 0, "IIm7\uC740 \uB3C4\uB9AC\uC548\uC774\uC5D0\uC694."),
            q("C \uD0A4\uC5D0\uC11C G7 \uC704\uC5D0 \uC4F0\uB294 \uBAA8\uB4DC\uB294?", ["G \uBBF9\uC194\uB9AC\uB514\uC548", "G \uB3C4\uB9AC\uC548", "G \uB9AC\uB514\uC548", "G \uC774\uC624\uB2C8\uC548"], 0, "V7\uC740 \uBBF9\uC194\uB9AC\uB514\uC548\uC774\uC5D0\uC694."),
            q("C \uD0A4\uC5D0\uC11C Fmaj7 \uC704\uC5D0 \uC4F0\uB294 \uBAA8\uB4DC\uB294?", ["F \uB9AC\uB514\uC548", "F \uBBF9\uC194\uB9AC\uB514\uC548", "F \uB3C4\uB9AC\uC548", "F \uC5D0\uC62C\uB9AC\uC548"], 0, "IVmaj7\uC740 \uB9AC\uB514\uC548\uC774\uC5D0\uC694."),
            q("C \uD0A4\uC5D0\uC11C Cmaj7 \uC704\uC5D0 \uC4F0\uB294 \uBAA8\uB4DC\uB294?", ["C \uC774\uC624\uB2C8\uC548 (\uBA54\uC774\uC800)", "C \uB3C4\uB9AC\uC548", "C \uBBF9\uC194\uB9AC\uB514\uC548", "C \uB9AC\uB514\uC548"], 0, "Imaj7\uC740 \uC774\uC624\uB2C8\uC548, \uC989 \uBA54\uC774\uC800 \uC2A4\uCF00\uC77C\uC774\uC5D0\uC694."),
            q("C \uD0A4\uC5D0\uC11C Am7 \uC704\uC5D0 \uC4F0\uB294 \uBAA8\uB4DC\uB294?", ["A \uC5D0\uC62C\uB9AC\uC548 (\uB9C8\uC774\uB108)", "A \uC774\uC624\uB2C8\uC548", "A \uB9AC\uB514\uC548", "A \uBBF9\uC194\uB9AC\uB514\uC548"], 0, "VIm7\uC740 \uC5D0\uC62C\uB9AC\uC548(\uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108)\uC774\uC5D0\uC694."),
            q("2-5-1(Dm7 \u2192 G7 \u2192 Cmaj7)\uC5D0\uC11C \uC138 \uCF54\uB4DC\uC758 \uBAA8\uB4DC\uB294 \uC11C\uB85C \uC5B4\uB5A4 \uAD00\uACC4\uC77C\uAE4C\uC694?", ["\uBAA8\uB450 \uAC19\uC740 C \uBA54\uC774\uC800 \uC2A4\uCF00\uC77C\uC758 \uC74C\uC774\uACE0 \uC2DC\uC791\uC74C\uB9CC \uB2E4\uB974\uB2E4", "\uC644\uC804\uD788 \uB2E4\uB978 \uC74C\uC744 \uC4F4\uB2E4", "\uBAA8\uB450 \uB9C8\uC774\uB108 \uC2A4\uCF00\uC77C\uC774\uB2E4", "\uBAA8\uB450 \uAC19\uC740 \uC2DC\uC791\uC74C\uC774\uB2E4"], 0, "\uAC19\uC740 \uC74C\uC744 \uC4F0\uACE0 \uC911\uC2EC\uC774 \uB418\uB294 \uC74C\uB9CC \uB2EC\uB77C\uC694."),
            q("G7 \uC704\uC758 G \uBBF9\uC194\uB9AC\uB514\uC548\uC5D0\uC11C \uAE38\uAC8C \uBA38\uBB3C\uAE30\uC5D0 \uD53C\uD558\uB294 \uC74C\uC740?", ["\uB3C4 (C, 4\uBC88\uC9F8 \uC74C)", "\uC2DC (B)", "\uB808 (D)", "\uB77C (A)"], 0, "\uB3C4(C)\uB294 3\uC74C \uC2DC(B)\uC640 \uBC18\uC74C\uC73C\uB85C \uBD80\uB52A\uD788\uB294 \uC5B4\uBCF4\uC774\uB4DC \uB178\uD2B8\uC608\uC694."),
            q("\uBAA8\uB4DC\uB294 \uBA5C\uB85C\uB514\uB97C \uB9CC\uB4E4 \uB54C \uC5B4\uB5A4 \uC5ED\uD560\uC744 \uD560\uAE4C\uC694?", ["\uCF54\uB4DC \uC704\uC5D0\uC11C \uACE0\uB97C \uC218 \uC788\uB294 \uC74C\uC758 \uD314\uB808\uD2B8\uAC00 \uB41C\uB2E4", "\uCF54\uB4DC\uC758 \uC885\uB958\uB97C \uBC14\uAFBC\uB2E4", "\uD0A4\uB97C \uBC14\uAFBC\uB2E4", "\uBC15\uC790\uB97C \uC815\uD55C\uB2E4"], 0, "\uCF54\uB4DC\uC5D0 \uC5B4\uC6B8\uB9AC\uB294 \uC74C\uB4E4\uC744 \uC54C\uB824 \uC918\uC694."),
            key("G7 \uC704\uC758 G \uBBF9\uC194\uB9AC\uB514\uC548\uC5D0\uC11C \uBA54\uC774\uC800\uC640 \uB2EC\uB77C\uC9C0\uB294 \uC74C **\uD30C(F)** \uB97C \uB20C\uB7EC\uBCF4\uC138\uC694. (G7\uC758 7\uC74C\uC774\uAE30\uB3C4 \uD574\uC694)", 5, KB2, "G \uBBF9\uC194\uB9AC\uB514\uC548\uC740 \uC194 \uB77C \uC2DC \uB3C4 \uB808 \uBBF8 \uD30C\uB85C, 7\uBC88\uC9F8 \uC74C\uC774 \uB0AE\uC740 \uD30C\uC608\uC694.")
          ]
        },
        // ───────────────────────────────────── 3. 대리코드
        {
          id: "u13l3",
          title: "\uB300\uB9AC\uCF54\uB4DC: \uCF54\uB4DC \uBC14\uAFD4 \uC4F0\uAE30",
          minutes: 10,
          steps: [
            text(
              "\uBE44\uC2B7\uD55C \uC5ED\uD560\uC744 \uD558\uB294 \uCF54\uB4DC\uB85C \uAC08\uC544 \uB07C\uC6B0\uAE30",
              `[[substitution|\uB300\uB9AC\uCF54\uB4DC]]\uB294 \uC6D0\uB798 \uCF54\uB4DC \uB300\uC2E0 **\uBE44\uC2B7\uD55C \uC5ED\uD560**\uC744 \uD558\uB294 \uB2E4\uB978 \uCF54\uB4DC\uB97C \uC4F0\uB294 \uAC83\uC774\uC5D0\uC694. \uAC19\uC740 \uC774\uC57C\uAE30\uB97C \uB2E4\uB978 \uB2E8\uC5B4\uB85C \uB9D0\uD558\uB294 \uAC83 \uAC19\uC544\uC694. \uC138 \uAC00\uC9C0\uB97C \uBC30\uC6B8 \uAC70\uC608\uC694.

**1. \uAC19\uC740 \uAE30\uB2A5\uB07C\uB9AC \uBC14\uAFB8\uAE30**
\uAD6C\uC131\uC74C\uC774 \uB9CE\uC774 \uACB9\uCE58\uB294 \uCF54\uB4DC\uB294 \uC11C\uB85C \uBC14\uAFD4 \uC4F8 \uC218 \uC788\uC5B4\uC694.
- \uD1A0\uB2C9 \uB300\uB9AC: Cmaj7(\uB3C4 \uBBF8 \uC194 \uC2DC) \u2194 **Am7**(\uB77C \uB3C4 \uBBF8 \uC194)\uC740 \uB3C4 \uBBF8 \uC194 \uC138 \uC74C\uC774 \uAC19\uC544\uC694. **Em7**(\uBBF8 \uC194 \uC2DC \uB808)\uB3C4 \uBBF8 \uC194 \uC2DC\uB97C \uACF5\uC720\uD574\uC694.
- \uC11C\uBE0C\uB3C4\uBBF8\uB10C\uD2B8 \uB300\uB9AC: Fmaj7 \u2194 **Dm7** (\uD30C \uB77C \uB3C4\uB97C \uACF5\uC720)

**2. \uB3C4\uBBF8\uB10C\uD2B8 \uB300\uB9AC: V7 \u2194 VIIm7\u266D5**
G7(\uC194 \uC2DC \uB808 \uD30C)\uACFC Bm7\u266D5(\uC2DC \uB808 \uD30C \uB77C)\uB294 **\uC2DC \uB808 \uD30C**\uB97C \uACF5\uC720\uD574\uC694. \uB458 \uB2E4 \uB3C4\uBBF8\uB10C\uD2B8 \uAE30\uB2A5\uC774\uC5D0\uC694.

**3. \uD2B8\uB77C\uC774\uD1A4 \uC11C\uBE0C: V7 \u2194 \u266DII7**
[[tritone-sub|\uD2B8\uB77C\uC774\uD1A4 \uC11C\uBE0C]]\uB294 G7 \uB300\uC2E0 **D\u266D7**\uC744 \uC4F0\uB294 \uBC29\uBC95\uC774\uC5D0\uC694. G7\uC758 3\uC74C \uC2DC\uC640 7\uC74C \uD30C\uB294 \uD2B8\uB77C\uC774\uD1A4\uC778\uB370, D\u266D7(\uB808\u266D \uD30C \uB77C\u266D \uC2DC)\uC758 7\uC74C \uC2DC(\uB3C4\u266D)\uC640 3\uC74C \uD30C\uB3C4 \uAC19\uC740 \uB450 \uC74C\uC774\uC5D0\uC694. \uAE34\uC7A5\uC758 \uD575\uC2EC\uC774 \uAC19\uC544\uC11C \uBC14\uAFD4 \uC368\uB3C4 \uAC19\uC740 \uD574\uACB0\uC774 \uB3FC\uC694. \uAC8C\uB2E4\uAC00 \uADFC\uC74C\uC774 \uB808 \u2192 **\uB808\u266D** \u2192 \uB3C4\uB85C \uBC18\uC74C\uC529 \uB0B4\uB824\uAC00\uC11C \uBCA0\uC774\uC2A4\uAC00 \uC544\uC8FC \uB9E4\uB044\uB7EC\uC6CC\uC694.`
            ),
            listen(
              "\uC6D0\uB798 \uC9C4\uD589\uACFC \uB300\uB9AC\uCF54\uB4DC\uB97C \uC4F4 \uC9C4\uD589\uC744 \uBE44\uAD50\uD574 \uBCF4\uC138\uC694.",
              [
                pi("\uC6D0\uACE1: Cmaj7 \u2192 Fmaj7 \u2192 G7 \u2192 Cmaj7", "Cmaj7 Fmaj7 G7 Cmaj7", 1),
                pi("\uD1A0\uB2C9 \uB300\uB9AC: Am7 \u2192 Fmaj7 \u2192 G7 \u2192 Cmaj7", "Am7 Fmaj7 G7 Cmaj7", 1),
                pi("\uC11C\uBE0C\uB3C4\uBBF8\uB10C\uD2B8 \uB300\uB9AC: Cmaj7 \u2192 Dm7 \u2192 G7 \u2192 Cmaj7", "Cmaj7 Dm7 G7 Cmaj7", 1),
                pi("\uAE30\uBCF8 2-5-1: Dm7 \u2192 G7 \u2192 Cmaj7", "Dm7 G7 Cmaj7", 1),
                pi("\uB3C4\uBBF8\uB10C\uD2B8 \uB300\uB9AC: Dm7 \u2192 Bm7\u266D5 \u2192 Cmaj7", "Dm7 Bm7\u266D5 Cmaj7", 1),
                pi("\uD2B8\uB77C\uC774\uD1A4 \uC11C\uBE0C: Dm7 \u2192 D\u266D7 \u2192 Cmaj7", "Dm7 D\u266D7 Cmaj7", 1)
              ],
              WIDE5
            ),
            build("**D\u266D7**(\uB808\u266D \uD30C \uB77C\u266D \uC2DC)\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. G7\uC758 \uD2B8\uB77C\uC774\uD1A4 \uC11C\uBE0C\uC608\uC694.", "D\u266D7"),
            build("**Bm7\u266D5**(\uC2DC \uB808 \uD30C \uB77C)\uB97C \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694. G7\uC758 \uB3C4\uBBF8\uB10C\uD2B8 \uB300\uB9AC\uC608\uC694.", "Bm7\u266D5", { hint: false }),
            earP("\uAE30\uBCF8 2-5-1\uC77C\uAE4C\uC694, \uD2B8\uB77C\uC774\uD1A4 \uC11C\uBE0C\uAC00 \uB4E4\uC5B4\uAC04 \uC9C4\uD589\uC77C\uAE4C\uC694?", prog("Dm7 G7 Cmaj7"), ["\uAE30\uBCF8 2-5-1", "\uD2B8\uB77C\uC774\uD1A4 \uC11C\uBE0C"], 0, "\uADFC\uC74C\uC774 \uB808 \u2192 \uC194 \u2192 \uB3C4\uB85C \uC6C0\uC9C1\uC774\uB294 \uAE30\uBCF8 2-5-1\uC774\uC5D0\uC694.", 1),
            earP("\uAE30\uBCF8 2-5-1\uC77C\uAE4C\uC694, \uD2B8\uB77C\uC774\uD1A4 \uC11C\uBE0C\uAC00 \uB4E4\uC5B4\uAC04 \uC9C4\uD589\uC77C\uAE4C\uC694?", prog("Dm7 D\u266D7 Cmaj7"), ["\uAE30\uBCF8 2-5-1", "\uD2B8\uB77C\uC774\uD1A4 \uC11C\uBE0C"], 1, "\uADFC\uC74C\uC774 \uB808 \u2192 \uB808\u266D \u2192 \uB3C4\uB85C \uBC18\uC74C\uC529 \uB0B4\uB824\uAC00\uC694. \uD2B8\uB77C\uC774\uD1A4 \uC11C\uBE0C\uC608\uC694.", 1),
            q("Cmaj7 \uB300\uC2E0 \uC4F8 \uC218 \uC788\uB294 \uD1A0\uB2C9 \uB300\uB9AC\uCF54\uB4DC\uB294?", ["Am7", "Dm7", "G7", "Fmaj7"], 0, "Am7\uC740 \uB3C4 \uBBF8 \uC194\uC744 \uACF5\uC720\uD558\uACE0 \uAC19\uC740 \uD1A0\uB2C9 \uAE30\uB2A5\uC774\uC5D0\uC694."),
            q("Fmaj7 \uB300\uC2E0 \uC4F8 \uC218 \uC788\uB294 \uC11C\uBE0C\uB3C4\uBBF8\uB10C\uD2B8 \uB300\uB9AC\uCF54\uB4DC\uB294?", ["Dm7", "Am7", "G7", "Cmaj7"], 0, "Dm7\uC740 \uD30C \uB77C \uB3C4\uB97C \uACF5\uC720\uD558\uACE0 \uAC19\uC740 \uC11C\uBE0C\uB3C4\uBBF8\uB10C\uD2B8 \uAE30\uB2A5\uC774\uC5D0\uC694."),
            q("G7 \uB300\uC2E0 \uC4F8 \uC218 \uC788\uB294 \uB3C4\uBBF8\uB10C\uD2B8 \uB300\uB9AC\uCF54\uB4DC\uB294?", ["Bm7\u266D5", "Em7", "Fmaj7", "Dm7"], 0, "Bm7\u266D5\uB294 G7\uACFC \uC2DC \uB808 \uD30C\uB97C \uACF5\uC720\uD558\uACE0 \uAC19\uC740 \uB3C4\uBBF8\uB10C\uD2B8 \uAE30\uB2A5\uC774\uC5D0\uC694."),
            q("G7\uC758 \uD2B8\uB77C\uC774\uD1A4 \uC11C\uBE0C \uCF54\uB4DC\uB294?", ["D\u266D7", "D7", "A\u266D7", "E\u266D7"], 0, "G\uC5D0\uC11C \uD2B8\uB77C\uC774\uD1A4(\uBC18\uC74C 6\uAC1C) \uB5A8\uC5B4\uC9C4 \uC74C\uC740 \uB808\u266D(D\u266D)\uC774\uC5D0\uC694. G7 \u2192 D\u266D7."),
            q("G7\uACFC D\u266D7\uC774 \uACF5\uC720\uD558\uB294 \uB450 \uC74C(\uD2B8\uB77C\uC774\uD1A4\uC744 \uC774\uB8E8\uB294 3\uC74C\uACFC 7\uC74C)\uC740?", ["\uC2DC(B)\uC640 \uD30C(F)", "\uC194(G)\uACFC \uB808(D)", "\uB3C4(C)\uC640 \uBBF8(E)", "\uC194(G)\uACFC \uC2DC(B)"], 0, "G7\uC758 \uC2DC\uC640 \uD30C, D\u266D7\uC758 \uD30C\uC640 \uC2DC(\uB3C4\u266D)\uAC00 \uAC19\uC740 \uB450 \uC74C\uC774\uC5D0\uC694."),
            q("\uD2B8\uB77C\uC774\uD1A4 \uC11C\uBE0C\uC758 \uB9E4\uB825\uC740?", ["\uADFC\uC74C\uC774 \uBC18\uC74C\uC529 \uB0B4\uB824\uAC00 \uBCA0\uC774\uC2A4\uAC00 \uB9E4\uB044\uB7FD\uB2E4", "\uCF54\uB4DC\uAC00 \uB9C8\uC774\uB108\uB85C \uBC14\uB010\uB2E4", "\uD0A4\uAC00 \uBC14\uB010\uB2E4", "\uCF54\uB4DC\uAC00 \uB354 \uB2E8\uC21C\uD574\uC9C4\uB2E4"], 0, "\uB808 \u2192 \uB808\u266D \u2192 \uB3C4\uB85C \uADFC\uC74C\uC774 \uBC18\uC74C\uC529 \uB0B4\uB824\uAC00\uC694."),
            q("Cmaj7\uACFC Am7\uC774 \uACF5\uD1B5\uC73C\uB85C \uAC00\uC9C4 \uC74C\uC740 \uBA87 \uAC1C\uC77C\uAE4C\uC694?", ["3\uAC1C", "1\uAC1C", "2\uAC1C", "4\uAC1C"], 0, "\uB3C4, \uBBF8, \uC194 \uC138 \uC74C\uC774\uC5D0\uC694. \uADF8\uB798\uC11C \uBC14\uAFD4 \uC368\uB3C4 \uC790\uC5F0\uC2A4\uB7EC\uC6CC\uC694.")
          ]
        },
        // ───────────────────────────────────── 4. 카덴스
        {
          id: "u13l4",
          title: "\uCE74\uB374\uC2A4: \uACE1\uC758 \uB9C8\uCE68\uD45C\uC640 \uC27C\uD45C",
          minutes: 9,
          steps: [
            text(
              "\uCF54\uB4DC\uB85C \uC4F0\uB294 \uB9C8\uCE68\uD45C",
              `\uAE00\uC5D0 \uB9C8\uCE68\uD45C, \uC27C\uD45C, \uBB3C\uC74C\uD45C\uAC00 \uC788\uB4EF\uC774, \uD504\uB808\uC774\uC988\uB098 \uACE1\uC758 \uB05D\uC5D0\uB294 [[cadence|\uC885\uC9C0(\uCE74\uB374\uC2A4)]]\uAC00 \uC788\uC5B4\uC694. \uB9C8\uC9C0\uB9C9 \uB450 \uCF54\uB4DC\uC758 \uC870\uD569\uC73C\uB85C \uC5B4\uB5A4 \uB05D\uB9FA\uC74C\uC778\uC9C0\uAC00 \uC815\uD574\uC838\uC694. \uB300\uD45C\uC801\uC778 \uB124 \uAC00\uC9C0\uC608\uC694. (C \uD0A4)

- [[authentic-cadence|\uC815\uACA9 \uC885\uC9C0]] **V \u2192 I** (G7 \u2192 C): \uAE34\uC7A5\uC774 \uC644\uC804\uD788 \uD480\uB9AC\uB294 **\uB9C8\uCE68\uD45C**. \uAC00\uC7A5 \uAC15\uD558\uAC8C \uB05D\uB098\uC694.
- [[plagal-cadence|\uBCC0\uACA9 \uC885\uC9C0]] **IV \u2192 I** (F \u2192 C): \uD3EC\uADFC\uD558\uAC8C \uD480\uB9AC\uB294 **"\uC544\uBA58"** \uC885\uC9C0. \uC815\uACA9\uBCF4\uB2E4 \uBD80\uB4DC\uB7EC\uC6CC\uC694.
- [[half-cadence|\uBC18\uC885\uC9C0]] **\u2192 V** (\u2026 \u2192 G): V\uB85C \uB05D\uB098\uC11C \uC544\uC9C1 \uB05D\uB098\uC9C0 \uC54A\uC740 **\uC27C\uD45C\uB098 \uBB3C\uC74C\uD45C**. \uB2E4\uC74C\uC744 \uAE30\uB2E4\uB9AC\uAC8C \uD574\uC694.
- [[deceptive-cadence|\uC704\uC885\uC9C0]] **V \u2192 VIm** (G7 \u2192 Am): I\uB85C \uD480\uB9B4 \uC904 \uC54C\uC558\uB294\uB370 VIm\uC73C\uB85C \uAC00\uC11C \uAE30\uB300\uB97C **\uBC30\uC2E0**\uD574\uC694. \uC774\uC57C\uAE30\uAC00 \uB354 \uC774\uC5B4\uC9C0\uB294 \uB290\uB08C\uC774\uC5D0\uC694.

\uBA5C\uB85C\uB514\uB3C4 \uC885\uC9C0\uC5D0\uC11C \uC26C\uC5B4 \uAC00\uC694. \uB9C8\uCE68\uD45C \uC790\uB9AC\uC5D0\uB294 \uC73C\uB738\uC74C \uAC19\uC740 \uC548\uC815\uC801\uC778 \uCF54\uB4DC \uD1A4\uC774 \uC5B4\uC6B8\uB824\uC694.`
            ),
            listen(
              "\uB124 \uAC00\uC9C0 \uC885\uC9C0\uB97C \uB4E4\uC5B4 \uBCF4\uC138\uC694. \uB9C8\uC9C0\uB9C9 \uB450 \uCF54\uB4DC\uC5D0 \uADC0\uB97C \uAE30\uC6B8\uC774\uC138\uC694.",
              [
                pi("\uC815\uACA9 \uC885\uC9C0: C \u2192 F \u2192 G7 \u2192 C", "C F G7 C", 1),
                pi("\uBCC0\uACA9 \uC885\uC9C0: C \u2192 F \u2192 C", "C F C", 1),
                pi("\uBC18\uC885\uC9C0: C \u2192 Am \u2192 Dm \u2192 G", "C Am Dm G", 1),
                pi("\uC704\uC885\uC9C0: C \u2192 F \u2192 G7 \u2192 Am", "C F G7 Am", 1)
              ],
              WIDE5
            ),
            earP("\uC5B4\uB5A4 \uC885\uC9C0\uC77C\uAE4C\uC694? (\uB05D\uC758 \uB450 \uCF54\uB4DC\uC5D0 \uC9D1\uC911\uD558\uC138\uC694)", prog("C F G7 C"), CADENCES, 0, "G7\uC5D0\uC11C C\uB85C \uC644\uC804\uD788 \uD480\uB824\uC694. \uC815\uACA9 \uC885\uC9C0\uC608\uC694.", 1),
            earP("\uC5B4\uB5A4 \uC885\uC9C0\uC77C\uAE4C\uC694? (\uB05D\uC758 \uB450 \uCF54\uB4DC\uC5D0 \uC9D1\uC911\uD558\uC138\uC694)", prog("C F C"), CADENCES, 1, "F\uC5D0\uC11C C\uB85C \uBD80\uB4DC\uB7FD\uAC8C \uD480\uB824\uC694. \uBCC0\uACA9 \uC885\uC9C0\uC608\uC694.", 1),
            earP("\uC5B4\uB5A4 \uC885\uC9C0\uC77C\uAE4C\uC694? (\uB05D\uC758 \uB450 \uCF54\uB4DC\uC5D0 \uC9D1\uC911\uD558\uC138\uC694)", prog("C Am Dm G"), CADENCES, 2, "G(V)\uB85C \uB05D\uB098\uC11C \uC544\uC9C1 \uB05D\uB098\uC9C0 \uC54A\uC740 \uB290\uB08C\uC774\uC5D0\uC694. \uBC18\uC885\uC9C0\uC608\uC694.", 1),
            earP("\uC5B4\uB5A4 \uC885\uC9C0\uC77C\uAE4C\uC694? (\uB05D\uC758 \uB450 \uCF54\uB4DC\uC5D0 \uC9D1\uC911\uD558\uC138\uC694)", prog("C F G7 Am"), CADENCES, 3, "G7 \uB2E4\uC74C\uC5D0 C \uB300\uC2E0 Am\uC774 \uC640\uC11C \uC758\uC678\uC608\uC694. \uC704\uC885\uC9C0\uC608\uC694.", 1),
            q("V \u2192 I\uB85C \uB05D\uB098\uB294 \uAC00\uC7A5 \uAC15\uD55C \uB9C8\uCE68\uD45C \uB290\uB08C\uC758 \uC885\uC9C0\uB294?", ["\uC815\uACA9 \uC885\uC9C0", "\uBCC0\uACA9 \uC885\uC9C0", "\uBC18\uC885\uC9C0", "\uC704\uC885\uC9C0"], 0, "V\uC5D0\uC11C I\uB85C \uC644\uC804\uD788 \uD480\uB9AC\uB294 \uC815\uACA9 \uC885\uC9C0\uC608\uC694."),
            q('IV \u2192 I\uB85C \uB05D\uB098\uB294 \uBD80\uB4DC\uB7EC\uC6B4 "\uC544\uBA58" \uC885\uC9C0\uB294?', ["\uBCC0\uACA9 \uC885\uC9C0", "\uC815\uACA9 \uC885\uC9C0", "\uBC18\uC885\uC9C0", "\uC704\uC885\uC9C0"], 0, "IV\uC5D0\uC11C I\uB85C \uD480\uB9AC\uB294 \uBCC0\uACA9 \uC885\uC9C0\uC608\uC694."),
            q("V\uB85C \uB05D\uB098\uC11C \uC27C\uD45C\uB098 \uBB3C\uC74C\uD45C \uAC19\uC740 \uB290\uB08C\uC744 \uC8FC\uB294 \uC885\uC9C0\uB294?", ["\uBC18\uC885\uC9C0", "\uC815\uACA9 \uC885\uC9C0", "\uBCC0\uACA9 \uC885\uC9C0", "\uC704\uC885\uC9C0"], 0, "V\uC5D0\uC11C \uBA48\uCDB0\uC11C \uB2E4\uC74C\uC744 \uAE30\uB2E4\uB9AC\uAC8C \uD574\uC694."),
            q("V \uB2E4\uC74C\uC5D0 I \uB300\uC2E0 VIm\uC774 \uC640\uC11C \uAE30\uB300\uB97C \uAE68\uB294 \uC885\uC9C0\uB294?", ["\uC704\uC885\uC9C0", "\uC815\uACA9 \uC885\uC9C0", "\uBC18\uC885\uC9C0", "\uBCC0\uACA9 \uC885\uC9C0"], 0, "V \u2192 VIm. \uC758\uC678\uC758 \uC804\uD658\uC774 \uC704\uC885\uC9C0\uC608\uC694."),
            q("C \uD0A4\uC5D0\uC11C \uC815\uACA9 \uC885\uC9C0\uC758 \uB9C8\uC9C0\uB9C9 \uB450 \uCF54\uB4DC\uB294?", ["G7 \u2192 C", "F \u2192 C", "C \u2192 G", "G7 \u2192 Am"], 0, "V7\uC5D0\uC11C I\uB85C, G7 \u2192 C\uC608\uC694."),
            q("C \uD0A4\uC5D0\uC11C \uC704\uC885\uC9C0\uC758 \uB9C8\uC9C0\uB9C9 \uB450 \uCF54\uB4DC\uB294?", ["G7 \u2192 Am", "G7 \u2192 C", "F \u2192 C", "Dm \u2192 G"], 0, "V7\uC5D0\uC11C VIm\uC73C\uB85C, G7 \u2192 Am\uC774\uC5D0\uC694."),
            q("G \uD0A4\uC5D0\uC11C \uC815\uACA9 \uC885\uC9C0\uC758 \uB9C8\uC9C0\uB9C9 \uB450 \uCF54\uB4DC\uB294?", ["D7 \u2192 G", "C \u2192 G", "G \u2192 D", "D7 \u2192 Em"], 0, "G \uD0A4\uC758 V7\uC740 D7\uC774\uC5D0\uC694. D7 \u2192 G."),
            q("F \uD0A4\uC5D0\uC11C \uBCC0\uACA9 \uC885\uC9C0\uC758 \uB9C8\uC9C0\uB9C9 \uB450 \uCF54\uB4DC\uB294?", ["B\u266D \u2192 F", "C7 \u2192 F", "F \u2192 B\u266D", "C7 \u2192 Dm"], 0, "F \uD0A4\uC758 IV\uB294 B\u266D\uC774\uC5D0\uC694. B\u266D \u2192 F."),
            play("**C \u2192 F \u2192 G7 \u2192 C** \uC815\uACA9 \uC885\uC9C0\uC758 **\uADFC\uC74C**\uC744 \uCC28\uB840\uB85C \uB20C\uB7EC \uBCF4\uC138\uC694. (\uB3C4, \uD30C, \uC194, \uB3C4)", [0, 5, 7, 0], [60, 72])
          ]
        },
        // ───────────────────────────────────── 5. 곡 구조
        {
          id: "u13l5",
          title: "\uACE1 \uAD6C\uC870: \uD504\uB808\uC774\uC988\uC640 \uC139\uC158",
          minutes: 9,
          steps: [
            text(
              "\uB9C8\uB514\uC5D0\uC11C \uACE1\uAE4C\uC9C0 \uC313\uC544 \uC62C\uB9AC\uAE30",
              `\uACE1\uC740 \uC791\uC740 \uB2E8\uC704\uAC00 \uC313\uC5EC\uC11C \uB9CC\uB4E4\uC5B4\uC838\uC694.

**\uB9C8\uB514 \u2192 [[phrase|\uD504\uB808\uC774\uC988]](2~4\uB9C8\uB514) \u2192 \uC139\uC158(8~16\uB9C8\uB514) \u2192 \uACE1**

\uD504\uB808\uC774\uC988\uB294 \uB9D0\uC758 \uD55C \uBB38\uC7A5 \uAC19\uC544\uC694. \uB05D\uC5D0 \uC885\uC9C0(\uB9C8\uCE68\uD45C\uB098 \uC27C\uD45C)\uAC00 \uC788\uC5B4\uC694.

**\uC9C8\uBB38\uACFC \uB300\uB2F5**: \uAC00\uC7A5 \uD754\uD55C 8\uB9C8\uB514 \uC139\uC158\uC740 4\uB9C8\uB514\uC529 \uB458\uB85C \uB098\uB258\uC5B4\uC694.
- \uC55E 4\uB9C8\uB514: **\uC9C8\uBB38**. \uBC18\uC885\uC9C0(V)\uB85C \uB05D\uB098\uC11C \uC27C\uD45C\uCC98\uB7FC \uC5F4\uB824 \uC788\uC5B4\uC694.
- \uB4A4 4\uB9C8\uB514: **\uB300\uB2F5**. \uC815\uACA9 \uC885\uC9C0(V7 \u2192 I)\uB85C \uB05D\uB098\uC11C \uB9C8\uCE68\uD45C\uCC98\uB7FC \uB2EB\uD600\uC694.

**\uC139\uC158 \uC774\uB984**
- **\uC778\uD2B8\uB85C**: \uC2DC\uC791 \uBD80\uBD84. **\uBC8C\uC2A4(A)**: \uC774\uC57C\uAE30\uB97C \uD558\uB294 \uBD80\uBD84. **\uCF54\uB7EC\uC2A4(B)**: \uAC00\uC7A5 \uAE30\uC5B5\uC5D0 \uB0A8\uB294 \uD6C4\uB834. **\uBE0C\uB9AC\uC9C0(C)**: \uBD84\uC704\uAE30\uB97C \uBC14\uAFB8\uB294 \uC911\uAC04 \uBD80\uBD84. **\uC544\uC6C3\uD2B8\uB85C**: \uB9C8\uBB34\uB9AC.
- \uD31D: \uBC8C\uC2A4 - \uCF54\uB7EC\uC2A4 - \uBC8C\uC2A4 - \uCF54\uB7EC\uC2A4 - \uBE0C\uB9AC\uC9C0 - \uCF54\uB7EC\uC2A4
- \uC7AC\uC988: **AABA** 32\uB9C8\uB514 (8\uB9C8\uB514 \xD7 4)`
            ),
            listen(
              "8\uB9C8\uB514 \uC139\uC158\uC744 \uC9C8\uBB38\uACFC \uB300\uB2F5\uC73C\uB85C \uB098\uB220 \uB4E4\uC5B4 \uBCF4\uC138\uC694. \uC9C8\uBB38\uC740 \uC5F4\uB824 \uC788\uACE0 \uB300\uB2F5\uC740 \uB2EB\uD600\uC694.",
              [
                pi("\uC9C8\uBB38 (4\uB9C8\uB514): C \u2192 Am \u2192 Dm \u2192 G", "C Am Dm G", 1),
                pi("\uB300\uB2F5 (4\uB9C8\uB514): C \u2192 Am \u2192 G7 \u2192 C", "C Am G7 C", 1),
                pi("8\uB9C8\uB514 \uC804\uCCB4", "C Am Dm G C Am G7 C", 0.8)
              ],
              WIDE5
            ),
            earP("\uC774 4\uB9C8\uB514\uB294 \uC9C8\uBB38 \uB290\uB08C\uC77C\uAE4C\uC694, \uB300\uB2F5 \uB290\uB08C\uC77C\uAE4C\uC694?", prog("C Am Dm G"), ["\uC9C8\uBB38 (\uC5F4\uB824 \uC788\uB2E4)", "\uB300\uB2F5 (\uB2EB\uD600 \uC788\uB2E4)"], 0, "V(G)\uB85C \uB05D\uB098\uC11C \uC544\uC9C1 \uB05D\uB098\uC9C0 \uC54A\uC740 \uC9C8\uBB38\uC774\uC5D0\uC694.", 1),
            earP("\uC774 4\uB9C8\uB514\uB294 \uC9C8\uBB38 \uB290\uB08C\uC77C\uAE4C\uC694, \uB300\uB2F5 \uB290\uB08C\uC77C\uAE4C\uC694?", prog("C Am G7 C"), ["\uC9C8\uBB38 (\uC5F4\uB824 \uC788\uB2E4)", "\uB300\uB2F5 (\uB2EB\uD600 \uC788\uB2E4)"], 1, "I\uB85C \uD480\uB9AC\uBA70 \uB05D\uB098\uC11C \uB2EB\uD78C \uB300\uB2F5\uC774\uC5D0\uC694.", 1),
            q("\uD504\uB808\uC774\uC988\uB294 \uBCF4\uD1B5 \uBA87 \uB9C8\uB514\uC77C\uAE4C\uC694?", ["2~4\uB9C8\uB514", "1\uB9C8\uB514", "16~32\uB9C8\uB514", "\uC815\uD574\uC9C4 \uAE38\uC774\uAC00 \uC5C6\uB2E4"], 0, "\uD504\uB808\uC774\uC988\uB294 \uB9D0\uC758 \uD55C \uBB38\uC7A5\uCC98\uB7FC 2~4\uB9C8\uB514\uAC00 \uB9CE\uC544\uC694."),
            q("8\uB9C8\uB514 \uC139\uC158\uC5D0\uC11C \uC55E 4\uB9C8\uB514(\uC9C8\uBB38)\uC758 \uB05D\uC5D0 \uD754\uD788 \uC4F0\uB294 \uC885\uC9C0\uB294?", ["\uBC18\uC885\uC9C0", "\uC815\uACA9 \uC885\uC9C0", "\uBCC0\uACA9 \uC885\uC9C0", "\uC885\uC9C0\uB97C \uC4F0\uC9C0 \uC54A\uB294\uB2E4"], 0, "\uC9C8\uBB38\uC740 V\uB85C \uB05D\uB098\uB294 \uBC18\uC885\uC9C0\uB85C \uC5F4\uC5B4 \uB450\uC5B4\uC694."),
            q("8\uB9C8\uB514 \uC139\uC158\uC5D0\uC11C \uB4A4 4\uB9C8\uB514(\uB300\uB2F5)\uC758 \uB05D\uC5D0 \uD754\uD788 \uC4F0\uB294 \uC885\uC9C0\uB294?", ["\uC815\uACA9 \uC885\uC9C0", "\uBC18\uC885\uC9C0", "\uC704\uC885\uC9C0", "\uC885\uC9C0\uB97C \uC4F0\uC9C0 \uC54A\uB294\uB2E4"], 0, "\uB300\uB2F5\uC740 V7 \u2192 I\uB85C \uC644\uC804\uD788 \uB2EB\uC544\uC694."),
            q("\uACE1\uC5D0\uC11C \uAC00\uC7A5 \uAE30\uC5B5\uC5D0 \uB0A8\uB294 \uD6C4\uB834 \uBD80\uBD84\uC740?", ["\uCF54\uB7EC\uC2A4", "\uC778\uD2B8\uB85C", "\uBC8C\uC2A4", "\uC544\uC6C3\uD2B8\uB85C"], 0, "\uCF54\uB7EC\uC2A4(\uD6C4\uB834)\uB294 \uACE1\uC758 \uC911\uC2EC\uC774 \uB418\uB294 \uAC00\uC7A5 \uAE30\uC5B5\uC5D0 \uB0A8\uB294 \uBD80\uBD84\uC774\uC5D0\uC694."),
            q("\uACE1 \uC911\uAC04\uC5D0 \uBD84\uC704\uAE30\uB97C \uBC14\uAFB8\uB294 \uC139\uC158\uC740?", ["\uBE0C\uB9AC\uC9C0", "\uBC8C\uC2A4", "\uC778\uD2B8\uB85C", "\uCF54\uB7EC\uC2A4"], 0, "\uBE0C\uB9AC\uC9C0\uB294 \uC0C8\uB85C\uC6B4 \uCF54\uB4DC\uB098 \uBA5C\uB85C\uB514\uB85C \uBD84\uC704\uAE30\uB97C \uC804\uD658\uD574\uC694."),
            q("\uC7AC\uC988\uC5D0\uC11C \uD754\uD55C AABA \uD615\uC2DD\uC758 \uCD1D \uB9C8\uB514 \uC218\uB294? (\uAC01 \uC139\uC158 8\uB9C8\uB514)", ["32\uB9C8\uB514", "16\uB9C8\uB514", "24\uB9C8\uB514", "8\uB9C8\uB514"], 0, "8\uB9C8\uB514 \xD7 4\uAC1C \uC139\uC158 = 32\uB9C8\uB514\uC608\uC694."),
            q('"C - Am - Dm - G"\uC758 \uB9C8\uC9C0\uB9C9 G\uB294 \uC5B4\uB5A4 \uB290\uB08C\uC77C\uAE4C\uC694?', ["\uC544\uC9C1 \uB05D\uB098\uC9C0 \uC54A\uC740 \uC9C8\uBB38 \uB290\uB08C", "\uC644\uC804\uD788 \uB05D\uB09C \uB9C8\uCE68\uD45C \uB290\uB08C", "\uD0A4\uAC00 \uBC14\uB00C\uB294 \uB290\uB08C", "\uB2E8\uC870\uB85C \uBC14\uB00C\uB294 \uB290\uB08C"], 0, "V\uB85C \uB05D\uB098\uC11C \uB2E4\uC74C \uD504\uB808\uC774\uC988\uB97C \uAE30\uB2E4\uB9AC\uAC8C \uD574\uC694."),
            play("\uC9C8\uBB38\uACFC \uB300\uB2F5 8\uB9C8\uB514\uC758 **\uADFC\uC74C**\uC744 \uCC28\uB840\uB85C \uB20C\uB7EC \uBCF4\uC138\uC694. (\uB3C4, \uB77C, \uB808, \uC194, \uB3C4, \uB77C, \uC194, \uB3C4)", [0, 9, 2, 7, 0, 9, 7, 0], [60, 72])
          ]
        },
        // ───────────────────────────────────── 6. 전조
        {
          id: "u13l6",
          title: "\uC804\uC870: \uD0A4 \uBC14\uAFB8\uAE30",
          minutes: 9,
          steps: [
            text(
              "\uACE1 \uC911\uAC04\uC5D0 \uC9D1\uC774 \uBC14\uB00C\uC5B4\uC694",
              `\uACE1 \uB3C4\uC911\uC5D0 \uD0A4\uAC00 \uBC14\uB00C\uB294 \uAC83\uC744 [[modulation|\uC804\uC870]]\uB77C\uACE0 \uD574\uC694. \uAC19\uC740 \uACE1\uC774 \uBC18\uBCF5\uB420 \uB54C \uC2E0\uC120\uD55C \uBCC0\uD654\uB97C \uC8FC\uAC70\uB098 \uBD84\uC704\uAE30\uB97C \uB04C\uC5B4\uC62C\uB9B4 \uB54C \uC368\uC694. \uAC00\uC7A5 \uD754\uD55C \uBC29\uBC95 \uC138 \uAC00\uC9C0\uC608\uC694.

**1. \uD55C \uC74C \uC62C\uB824\uC11C \uBC18\uBCF5\uD558\uAE30**
\uB9C8\uC9C0\uB9C9 \uD6C4\uB834\uC5D0\uC11C \uD0A4\uB97C \uBC18\uC74C\uC774\uB098 \uC628\uC74C \uC62C\uB824\uC694. \uAC19\uC740 \uBA5C\uB85C\uB514\uAC00 \uB354 \uB192\uACE0 \uBC85\uCC28\uAC8C \uB4E4\uB824\uC11C \uBD84\uC704\uAE30\uAC00 \uACE0\uC870\uB3FC\uC694. \uC0C8 \uD0A4\uC758 \uC73C\uB738\uC74C\uC774 \uB2E8\uBC88\uC5D0 \uBC14\uB00C\uC5B4\uC694. C \u2192 D\uB77C\uBA74 \uC73C\uB738 \uCF54\uB4DC\uAC00 C\uC5D0\uC11C D\uB85C.

**2. \uC0C8 \uD0A4\uC758 \uB3C4\uBBF8\uB10C\uD2B8(V7)\uB97C \uAC70\uCE58\uAE30**
\uAC00\uB824\uB294 \uC0C8 \uD0A4\uC758 V7\uC744 \uBA3C\uC800 \uC5F0\uC8FC\uD558\uBA74 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uC62E\uACA8 \uAC00\uC694. C \uD0A4\uC5D0\uC11C G \uD0A4\uB85C \uAC08 \uB54C G\uC758 V7\uC778 **D7**\uC744 \uAC70\uCCD0 G\uB85C \uAC00\uC694. \uC774\uAC74 \uC720\uB2DB 12\uC5D0\uC11C \uBC30\uC6B4 **\uC138\uCEE8\uB354\uB9AC \uB3C4\uBBF8\uB10C\uD2B8(V7/V)** \uC640 \uAC19\uC740 \uCF54\uB4DC\uC608\uC694. \uB2E4\uB9CC \uC774\uBC88\uC5D0\uB294 G\uAC00 \uC0C8 \uC9D1\uC774 \uB3FC\uC694.

**3. \uB098\uB780\uD55C\uC870\uB85C \uC62E\uAE30\uAE30**
C \uBA54\uC774\uC800\uC5D0\uC11C A \uB9C8\uC774\uB108(\uB098\uB780\uD55C\uC870)\uB85C. \uC4F0\uB294 \uC74C\uC774 \uAC19\uC544\uC11C \uAC00\uC7A5 \uBD80\uB4DC\uB7EC\uC6CC\uC694.`
            ),
            listen(
              "\uC804\uC870\uB97C \uB4E4\uC5B4 \uBCF4\uC138\uC694. \uAC19\uC740 \uC9C4\uD589\uC744 \uD55C \uC74C \uC62C\uB824\uC11C \uBC18\uBCF5\uD558\uAC70\uB098, D7\uC744 \uAC70\uCCD0 G \uD0A4\uB85C \uC62E\uACA8\uC694.",
              [
                pi("C \uD0A4 \uC9C4\uD589 \u2192 \uC628\uC74C \uC62C\uB824 D \uD0A4\uB85C \uBC18\uBCF5", "C F G7 C D G A7 D", 0.8),
                pi("D7\uC744 \uAC70\uCCD0 G \uD0A4\uB85C: C \u2192 Am \u2192 D7 \u2192 G \u2192 C \u2192 D7 \u2192 G", "C Am D7 G C D7 G", 0.9),
                pi("\uB098\uB780\uD55C\uC870 Am\uC73C\uB85C: C \u2192 G \u2192 Am \u2192 Dm \u2192 E7 \u2192 Am", "C G Am Dm E7 Am", 0.9)
              ],
              WIDE5
            ),
            earP("\uD0A4\uAC00 \uBC14\uB00C\uB294 \uACE1\uC77C\uAE4C\uC694, \uAC19\uC740 \uD0A4 \uC548\uC5D0\uC11C \uC6C0\uC9C1\uC774\uB294 \uACE1\uC77C\uAE4C\uC694?", prog("C F G7 C"), ["\uAC19\uC740 \uD0A4 \uC548\uC5D0\uC11C \uC6C0\uC9C1\uC784", "\uC911\uAC04\uC5D0 \uD0A4\uAC00 \uBC14\uB01C"], 0, "\uBAA8\uB450 C \uD0A4 \uC548\uC758 \uCF54\uB4DC\uC608\uC694.", 0.9),
            earP("\uD0A4\uAC00 \uBC14\uB00C\uB294 \uACE1\uC77C\uAE4C\uC694, \uAC19\uC740 \uD0A4 \uC548\uC5D0\uC11C \uC6C0\uC9C1\uC774\uB294 \uACE1\uC77C\uAE4C\uC694?", prog("C F G7 C D G A7 D"), ["\uAC19\uC740 \uD0A4 \uC548\uC5D0\uC11C \uC6C0\uC9C1\uC784", "\uC911\uAC04\uC5D0 \uD0A4\uAC00 \uBC14\uB01C"], 1, "\uC911\uAC04\uC5D0 C \uD0A4\uC5D0\uC11C D \uD0A4\uB85C \uC62C\uB77C\uAC14\uC5B4\uC694.", 0.8),
            q("\uACE1 \uC911\uAC04\uC5D0 \uD0A4\uAC00 \uBC14\uB00C\uB294 \uAC83\uC744 \uBB50\uB77C\uACE0 \uD560\uAE4C\uC694?", ["\uC804\uC870", "\uC804\uC704", "\uC885\uC9C0", "\uC870\uC62E\uAE40"], 0, "\uACE1 \uC548\uC5D0\uC11C \uD0A4\uAC00 \uBC14\uB00C\uB294 \uAC83\uC774 \uC804\uC870\uC608\uC694. (\uC870\uC62E\uAE40\uC740 \uACE1 \uC804\uCCB4\uB97C \uB2E4\uB978 \uD0A4\uB85C \uC62E\uAE30\uB294 \uAC83\uC774\uC5D0\uC694.)"),
            q("\uB9C8\uC9C0\uB9C9 \uD6C4\uB834\uC5D0\uC11C \uD0A4\uB97C \uC62C\uB9AC\uB294 \uC774\uC720\uB294?", ["\uBD84\uC704\uAE30\uB97C \uACE0\uC870\uC2DC\uD0A4\uB824\uACE0", "\uCF54\uB4DC\uB97C \uC27D\uAC8C \uD558\uB824\uACE0", "\uD15C\uD3EC\uB97C \uB2A6\uCD94\uB824\uACE0", "\uBA5C\uB85C\uB514\uB97C \uBC14\uAFB8\uB824\uACE0"], 0, "\uAC19\uC740 \uBA5C\uB85C\uB514\uAC00 \uB354 \uB192\uACE0 \uBC85\uCC28\uAC8C \uB4E4\uB824\uC11C \uBD84\uC704\uAE30\uAC00 \uB04C\uC5B4\uC62C\uB824\uC838\uC694."),
            q("C \uD0A4\uC5D0\uC11C G \uD0A4\uB85C \uC804\uC870\uD560 \uB54C \uAC70\uCE58\uB294 \uC0C8 \uD0A4\uC758 V7\uC740?", ["D7", "G7", "A7", "E7"], 0, "G \uD0A4\uC758 V7\uC740 D7\uC774\uC5D0\uC694."),
            q("C \uD0A4\uC5D0\uC11C D \uD0A4(\uC628\uC74C \uC704)\uB85C \uC804\uC870\uD558\uBA74 \uC0C8 \uC73C\uB738 \uCF54\uB4DC\uB294?", ["D", "C", "F", "G"], 0, "\uC0C8 \uD0A4\uAC00 D\uC774\uBBC0\uB85C \uC73C\uB738 \uCF54\uB4DC\uB294 D\uC608\uC694."),
            q("C \uD0A4\uC5D0\uC11C F \uD0A4\uB85C \uC804\uC870\uD560 \uB54C \uAC70\uCE58\uB294 \uC0C8 \uD0A4\uC758 V7\uC740?", ["C7", "F7", "G7", "B\u266D7"], 0, "F \uD0A4\uC758 V7\uC740 C7\uC774\uC5D0\uC694."),
            q("C \uBA54\uC774\uC800\uC758 \uB098\uB780\uD55C\uC870\uB85C \uC62E\uAE30\uBA74 \uC5B4\uB5A4 \uD0A4\uAC00 \uB420\uAE4C\uC694?", ["A \uB9C8\uC774\uB108", "C \uB9C8\uC774\uB108", "E \uB9C8\uC774\uB108", "G \uBA54\uC774\uC800"], 0, "\uB098\uB780\uD55C\uC870\uB294 \uC4F0\uB294 \uC74C\uC774 \uAC19\uC544\uC11C \uAC00\uC7A5 \uBD80\uB4DC\uB7EC\uC6B4 \uC804\uC870\uC608\uC694."),
            q("\uC0C8 \uD0A4\uC758 V7\uC744 \uAC70\uCCD0 \uC804\uC870\uD558\uBA74 \uC5B4\uB5A4 \uD6A8\uACFC\uAC00 \uC788\uC744\uAE4C\uC694?", ["\uC0C8 \uD0A4\uB85C \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uC62E\uACA8 \uAC00\uB294 \uB290\uB08C\uC774 \uB4E0\uB2E4", "\uD0A4\uAC00 \uBC14\uB00C\uB294 \uAC83\uC744 \uC228\uAE34\uB2E4", "\uCF54\uB4DC\uAC00 \uB9C8\uC774\uB108\uB85C \uBC14\uB010\uB2E4", "\uD15C\uD3EC\uAC00 \uBE68\uB77C\uC9C4\uB2E4"], 0, "V7\uC774 \uC0C8 \uD0A4\uC758 \uC73C\uB738\uC73C\uB85C \uD574\uACB0\uB418\uC5B4 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uC62E\uACA8 \uAC00\uC694."),
            key("C \uD0A4\uC5D0\uC11C G \uD0A4\uB85C \uAC00\uB294 \uC804\uC870\uC5D0\uC11C \uAC70\uCE58\uB294 \uCF54\uB4DC **D7\uC758 \uADFC\uC74C**\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 2, WIDE5, "D7 = \uB808 \uD30C\u266F \uB77C \uB3C4. \uADFC\uC74C\uC740 \uB808(D)\uC608\uC694."),
            play("**C \u2192 Am \u2192 D7 \u2192 G** \uC758 **\uADFC\uC74C**\uC744 \uCC28\uB840\uB85C \uB20C\uB7EC \uBCF4\uC138\uC694. (\uB3C4, \uB77C, \uB808, \uC194)", [0, 9, 2, 7], [60, 72])
          ]
        }
      ]
    }
  ];

  // content/ko/units.js
  var C = {
    major: notes(60, SCALES.major),
    minor: notes(60, SCALES.minor)
  };
  var A = {
    minor: notes(57, SCALES.minor),
    harmonic: notes(57, SCALES.harmonic),
    melodicUp: notes(57, SCALES.melodicUp)
  };
  var G_MAJOR = notes(67, SCALES.major);
  var base = [
    // ───────────────────────────────────────── 유닛 0
    {
      id: "u0",
      title: "\uC18C\uB9AC\uC640 \uAC74\uBC18",
      desc: "\uD53C\uC544\uB178 \uAC74\uBC18\uACFC \uC74C\uC758 \uC774\uB984, \uBC18\uC74C\xB7\uC628\uC74C\uC744 \uC775\uD600\uC694.",
      lessons: [
        {
          id: "u0l1",
          title: "\uAC74\uBC18 \uD55C\uB208\uC5D0 \uBCF4\uAE30",
          minutes: 5,
          steps: [
            text(
              "\uAC74\uBC18\uC5D0\uB294 \uADDC\uCE59\uC774 \uC788\uC5B4\uC694",
              `\uD53C\uC544\uB178 \uAC74\uBC18\uC740 **\uD770\uAC74\uBC18**\uACFC **\uAC80\uC740\uAC74\uBC18**\uC73C\uB85C \uC774\uB8E8\uC5B4\uC838 \uC788\uC5B4\uC694. \uAC80\uC740\uAC74\uBC18\uC740 2\uAC1C \uBB36\uC74C, 3\uAC1C \uBB36\uC74C\uC774 \uBC88\uAC08\uC544 \uB098\uC624\uACE0, \uC774 \uBAA8\uC591\uC774 \uACC4\uC18D \uBC18\uBCF5\uB3FC\uC694.

\uC774 \uBB36\uC74C\uC774 \uAE38\uC7A1\uC774\uC608\uC694.
**\uAC80\uC740\uAC74\uBC18 2\uAC1C \uBB36\uC74C\uC758 \uBC14\uB85C \uC67C\uCABD \uD770\uAC74\uBC18\uC774 \uB3C4(C)**
**\uAC80\uC740\uAC74\uBC18 3\uAC1C \uBB36\uC74C\uC758 \uBC14\uB85C \uC67C\uCABD \uD770\uAC74\uBC18\uC774 \uD30C(F)**

[[octave|\uC625\uD0C0\uBE0C]]\uB77C\uACE0 \uBD80\uB974\uB294 \uD55C \uBC14\uD034 \uC548\uC5D0\uB294 \uD770\uAC74\uBC18 7\uAC1C\uC640 \uAC80\uC740\uAC74\uBC18 5\uAC1C, \uBAA8\uB450 12\uAC1C\uC758 \uC74C\uC774 \uC788\uC5B4\uC694. 12\uAC1C\uB97C \uB2E4 \uC9C0\uB098\uBA74 \uCC98\uC74C\uACFC \uC774\uB984\uC774 \uAC19\uC740 \uC74C\uC774 \uB2E4\uC2DC \uB098\uC640\uC694.`
            ),
            listen(
              '\uB0AE\uC740 \uB3C4\uC640 \uB192\uC740 \uB3C4\uB97C \uB4E4\uC5B4\uBCF4\uC138\uC694. \uB192\uC774\uB294 \uB2E4\uB974\uC9C0\uB9CC "\uAC19\uC740 \uC74C"\uCC98\uB7FC \uB4E4\uB824\uC694. \uC774\uAC8C \uC625\uD0C0\uBE0C\uC608\uC694.',
              [
                { label: "\uB0AE\uC740 \uB3C4 \u2192 \uB192\uC740 \uB3C4", midis: [60, 72], mode: "seq" },
                { label: "\uB450 \uB3C4\uB97C \uB3D9\uC2DC\uC5D0", midis: [60, 72], mode: "chord" }
              ]
            ),
            key("\uAC80\uC740\uAC74\uBC18 2\uAC1C \uBB36\uC74C\uC758 \uBC14\uB85C \uC67C\uCABD \uD770\uAC74\uBC18, **\uB3C4**\uB97C \uB20C\uB7EC\uBCF4\uC138\uC694.", 0, [60, 83]),
            key("\uAC80\uC740\uAC74\uBC18 3\uAC1C \uBB36\uC74C\uC758 \uBC14\uB85C \uC67C\uCABD \uD770\uAC74\uBC18, **\uD30C**\uB97C \uB20C\uB7EC\uBCF4\uC138\uC694.", 5, [60, 83]),
            q("\uD55C \uC625\uD0C0\uBE0C \uC548\uC5D0 \uC788\uB294 \uC74C\uC740 \uD770\uAC74\uBC18\xB7\uAC80\uC740\uAC74\uBC18\uC744 \uBAA8\uB450 \uD569\uCCD0 \uBA87 \uAC1C\uC77C\uAE4C\uC694?", ["5\uAC1C", "7\uAC1C", "8\uAC1C", "12\uAC1C"], 3, "\uD770\uAC74\uBC18 7\uAC1C + \uAC80\uC740\uAC74\uBC18 5\uAC1C = 12\uAC1C\uC608\uC694.")
          ]
        },
        {
          id: "u0l2",
          title: "\uC74C \uC774\uB984: \uB3C4\uB808\uBBF8 \u2194 C D E",
          minutes: 6,
          steps: [
            text(
              "\uAC19\uC740 \uC74C, \uB450 \uAC00\uC9C0 \uC774\uB984",
              `\uD55C\uAD6D\uC5D0\uC11C\uB294 **\uB3C4\uB808\uBBF8\uD30C\uC194\uB77C\uC2DC**\uB85C \uB9CE\uC774 \uBD80\uB974\uC9C0\uB9CC, \uC74C\uC545 \uC774\uB860\uACFC \uCF54\uB4DC\uC5D0\uC11C\uB294 \uC54C\uD30C\uBCB3 [[note-name|\uC74C\uC774\uB984]] **C D E F G A B**\uB97C \uC368\uC694.

\uB3C4=C, \uB808=D, \uBBF8=E, \uD30C=F, \uC194=G, \uB77C=A, \uC2DC=B

\uCF54\uB4DC \uC774\uB984(C, Am, G7\u2026)\uC774 \uC804\uBD80 \uC54C\uD30C\uBCB3\uC774\uB77C\uC11C, \uC55E\uC73C\uB85C\uB294 \uC54C\uD30C\uBCB3\uC744 \uAE30\uBCF8\uC73C\uB85C \uC4F8\uAC8C\uC694. \uAC74\uBC18\uC5D0\uB294 \uB450 \uC774\uB984\uC774 \uD568\uAED8 \uD45C\uC2DC\uB3FC\uC694. (\uB098\uC911\uC5D0 \uC124\uC815\uC5D0\uC11C \uC228\uAE38 \uC218\uB3C4 \uC788\uC5B4\uC694.)`
            ),
            listen("\uB3C4\uC5D0\uC11C \uC2DC\uAE4C\uC9C0, \uADF8\uB9AC\uACE0 \uB2E4\uC2DC \uB192\uC740 \uB3C4\uAE4C\uC9C0 \uB4E4\uC5B4\uBCF4\uC138\uC694.", [{ label: "C D E F G A B C", midis: C.major, mode: "seq" }]),
            play("\uB3C4\uB808\uBBF8\uD30C\uC194\uB77C\uC2DC\uB3C4\uB97C \uCC28\uB840\uB85C \uB20C\uB7EC\uBCF4\uC138\uC694. \uB178\uB780 \uAC74\uBC18\uC774 \uD78C\uD2B8\uC608\uC694.", [0, 2, 4, 5, 7, 9, 11, 0]),
            q('"\uC194"\uC744 \uC54C\uD30C\uBCB3\uC73C\uB85C \uC4F0\uBA74?', ["C", "F", "G", "A"], 2, "\uB3C4 C, \uB808 D, \uBBF8 E, \uD30C F, \uC194 G\uC608\uC694."),
            q('"A"\uB97C \uB3C4\uB808\uBBF8\uB85C \uBD80\uB974\uBA74?', ["\uC194", "\uB77C", "\uC2DC", "\uD30C"], 1, "A\uB294 \uB77C\uC608\uC694. G(\uC194) \uB2E4\uC74C \uC74C\uC774\uC5D0\uC694."),
            key("**E(\uBBF8)**\uB97C \uB20C\uB7EC\uBCF4\uC138\uC694.", 4),
            key("**B(\uC2DC)**\uB97C \uB20C\uB7EC\uBCF4\uC138\uC694.", 11)
          ]
        },
        {
          id: "u0l3",
          title: "\uBC18\uC74C\uACFC \uC628\uC74C",
          minutes: 6,
          steps: [
            text(
              "\uAC74\uBC18\uC758 \uAC00\uC7A5 \uC791\uC740 \uAC78\uC74C",
              `\uAC74\uBC18\uC5D0\uC11C **\uBC14\uB85C \uC606 \uC74C**\uAE4C\uC9C0\uC758 \uAC70\uB9AC\uAC00 [[semitone|\uBC18\uC74C]]\uC774\uC5D0\uC694. \uD770\uAC74\uBC18\uC778\uC9C0 \uAC80\uC740\uAC74\uBC18\uC778\uC9C0\uB294 \uC0C1\uAD00\uC5C6\uC5B4\uC694.

\uBC18\uC74C \uB450 \uAC78\uC74C\uC774 [[wholetone|\uC628\uC74C]]\uC774\uC5D0\uC694. \uD55C \uCE78\uC744 \uAC74\uB108\uB6F4 \uC74C\uAE4C\uC9C0\uC758 \uAC70\uB9AC\uC8E0.

\uC74C\uC545\uC758 \uAC70\uC758 \uBAA8\uB4E0 \uADDC\uCE59\uC774 "\uBC18\uC74C \uBA87 \uAC1C \uB5A8\uC5B4\uC838 \uC788\uB294\uAC00"\uB85C \uC815\uD574\uC838\uC694. \uADF8\uB798\uC11C \uC774 \uAC10\uAC01\uC774 \uAC00\uC7A5 \uAE30\uBCF8\uC774\uC5D0\uC694.`
            ),
            listen(
              "\uBC18\uC74C\uACFC \uC628\uC74C\uC758 \uC18C\uB9AC\uB97C \uBE44\uAD50\uD574 \uBCF4\uC138\uC694. \uD2B9\uD788 \uB9C8\uC9C0\uB9C9 \uB458\uC740 \uD770\uAC74\uBC18\uB07C\uB9AC\uC778\uB370\uB3C4 \uBC18\uC74C\uC774\uC5D0\uC694. \uB450 \uD770\uAC74\uBC18 \uC0AC\uC774\uC5D0 \uAC80\uC740\uAC74\uBC18\uC774 \uC5C6\uC73C\uBA74 \uC11C\uB85C \uBC14\uB85C \uC606\uC774\uAE30 \uB54C\uBB38\uC774\uC5D0\uC694.",
              [
                { label: "\uB3C4 \u2192 \uB3C4\u266F (\uBC18\uC74C)", midis: [60, 61], mode: "seq" },
                { label: "\uB3C4 \u2192 \uB808 (\uC628\uC74C)", midis: [60, 62], mode: "seq" },
                { label: "\uBBF8 \u2192 \uD30C (\uBC18\uC74C)", midis: [64, 65], mode: "seq" },
                { label: "\uC2DC \u2192 \uB3C4 (\uBC18\uC74C)", midis: [71, 72], mode: "seq" }
              ]
            ),
            q("\uBBF8(E)\uC5D0\uC11C \uD30C(F)\uAE4C\uC9C0\uC758 \uAC70\uB9AC\uB294?", ["\uBC18\uC74C", "\uC628\uC74C", "\uC628\uC74C 2\uAC1C", "\uBC18\uC74C 3\uAC1C"], 0, "\uBBF8\uC640 \uD30C \uC0AC\uC774\uC5D0\uB294 \uAC80\uC740\uAC74\uBC18\uC774 \uC5C6\uC5B4\uC11C \uBC14\uB85C \uC606\uC774\uC5D0\uC694. \uADF8\uB798\uC11C \uBC18\uC74C\uC774\uC5D0\uC694."),
            q("\uB3C4(C)\uC5D0\uC11C \uBBF8(E)\uAE4C\uC9C0\uB294 \uC628\uC74C\uC774 \uBA87 \uAC1C\uC77C\uAE4C\uC694?", ["\uC628\uC74C 1\uAC1C", "\uC628\uC74C 2\uAC1C", "\uBC18\uC74C 1\uAC1C", "\uC628\uC74C 3\uAC1C"], 1, "\uB3C4\u2192\uB808 \uC628\uC74C, \uB808\u2192\uBBF8 \uC628\uC74C. \uC628\uC74C 2\uAC1C(= \uBC18\uC74C 4\uAC1C)\uC608\uC694."),
            ear("\uB450 \uC74C\uC758 \uAC70\uB9AC\uB294 \uBC18\uC74C\uC77C\uAE4C\uC694, \uC628\uC74C\uC77C\uAE4C\uC694?", [64, 65], "seq", ["\uBC18\uC74C", "\uC628\uC74C"], 0, "\uBBF8\u2192\uD30C\uB294 \uBC14\uB85C \uC606 \uAC74\uBC18\uC774\uB77C \uBC18\uC74C\uC774\uC5D0\uC694."),
            ear("\uB450 \uC74C\uC758 \uAC70\uB9AC\uB294 \uBC18\uC74C\uC77C\uAE4C\uC694, \uC628\uC74C\uC77C\uAE4C\uC694?", [65, 67], "seq", ["\uBC18\uC74C", "\uC628\uC74C"], 1, "\uD30C\u2192\uC194 \uC0AC\uC774\uC5D0\uB294 \uAC80\uC740\uAC74\uBC18(\uD30C\u266F)\uC774 \uB07C\uC5B4 \uC788\uC5B4\uC11C \uC628\uC74C\uC774\uC5D0\uC694."),
            ear("\uB450 \uC74C\uC758 \uAC70\uB9AC\uB294 \uBC18\uC74C\uC77C\uAE4C\uC694, \uC628\uC74C\uC77C\uAE4C\uC694?", [66, 67], "seq", ["\uBC18\uC74C", "\uC628\uC74C"], 0, "\uD30C\u266F\u2192\uC194\uC740 \uBC14\uB85C \uC606\uC774\uB77C \uBC18\uC74C\uC774\uC5D0\uC694."),
            key("\uB3C4(C)\uC5D0\uC11C **\uBC18\uC74C \uC62C\uB77C\uAC04 \uC74C**(\uAC80\uC740\uAC74\uBC18)\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 1)
          ]
        },
        {
          id: "u0l4",
          title: "\uC0E4\uD504(\u266F)\uC640 \uD50C\uB7AB(\u266D)",
          minutes: 6,
          steps: [
            text(
              "\uAC80\uC740\uAC74\uBC18\uC758 \uC774\uB984",
              `\uAC80\uC740\uAC74\uBC18\uC740 \uC774\uB984\uC774 \uB530\uB85C \uC5C6\uACE0, \uC606\uC5D0 \uC788\uB294 \uD770\uAC74\uBC18\uC744 \uAE30\uC900\uC73C\uB85C \uBD88\uB7EC\uC694.

[[sharp|\uC0E4\uD504(\u266F)]]\uB294 \uBC18\uC74C **\uC62C\uB9BC**: \uB3C4\uC758 \uC624\uB978\uCABD \uAC80\uC740\uAC74\uBC18\uC740 **\uB3C4\u266F(C\u266F)**
[[flat|\uD50C\uB7AB(\u266D)]]\uC740 \uBC18\uC74C **\uB0B4\uB9BC**: \uB808\uC758 \uC67C\uCABD \uAC80\uC740\uAC74\uBC18\uC740 **\uB808\u266D(D\u266D)**

\uADF8\uB7F0\uB370 \uB3C4\u266F\uACFC \uB808\u266D\uC740 \uAC19\uC740 \uAC74\uBC18\uC774\uC5D0\uC694! \uC774\uB807\uAC8C \uD55C \uAC74\uBC18\uC774 \uB450 \uC774\uB984\uC744 \uAC00\uC9C0\uB294 \uAC83\uC744 [[enharmonic|\uC774\uBA85\uB3D9\uC74C]]\uC774\uB77C\uACE0 \uD574\uC694.`
            ),
            listen(
              "\uAC19\uC740 \uAC80\uC740\uAC74\uBC18\uC744 \uB450 \uC774\uB984\uC73C\uB85C \uBD88\uB7EC\uB3C4 \uC18C\uB9AC\uB294 \uAC19\uC544\uC694. \uADF8\uB9AC\uACE0 \uB3C4\uC5D0\uC11C \uC2DC\uAE4C\uC9C0 \uBC18\uC74C\uC529 \uC62C\uB77C\uAC00 \uBCF4\uC138\uC694. \uD770\uAC74\uBC18 \uC0AC\uC774\uC5D0 \uAC80\uC740\uAC74\uBC18\uC774 \uC5B4\uB5BB\uAC8C \uB07C\uC5B4 \uC788\uB294\uC9C0 \uBCF4\uC5EC\uC694.",
              [
                { label: "\uB3C4\u266F (C\u266F)", midis: [61], mode: "chord" },
                { label: "\uB808\u266D (D\u266D)", midis: [61], mode: "chord" },
                { label: "\uBC18\uC74C\uC529 \uC62C\uB77C\uAC00\uAE30", midis: [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72], mode: "seq" }
              ]
            ),
            q("\uD30C(F)\uC5D0\uC11C \uBC18\uC74C \uC62C\uB9B0 \uC74C\uC740?", ["\uD30C\u266F (F\u266F)", "\uD30C\u266D (F\u266D)", "\uC194 (G)", "\uBBF8 (E)"], 0, "\u266F\uC740 \uBC18\uC74C \uC62C\uB9BC\uC774\uC5D0\uC694. \uD30C\uC758 \uC624\uB978\uCABD \uAC80\uC740\uAC74\uBC18\uC774 \uD30C\u266F\uC774\uC5D0\uC694."),
            q("\uB808\u266D(D\u266D)\uACFC \uAC19\uC740 \uAC74\uBC18\uC740?", ["\uB3C4\u266F (C\u266F)", "\uB808\u266F (D\u266F)", "\uB3C4 (C)", "\uBBF8\u266D (E\u266D)"], 0, "\uB808\uC758 \uC67C\uCABD \uAC80\uC740\uAC74\uBC18 = \uB3C4\uC758 \uC624\uB978\uCABD \uAC80\uC740\uAC74\uBC18\uC774\uC5D0\uC694."),
            q("\uBBF8(E)\uC5D0\uC11C \uBC18\uC74C \uC62C\uB9B0 \uC74C\uC740?", ["\uD30C (F)", "\uD30C\u266F (F\u266F)", "\uBBF8\u266D (E\u266D)", "\uB808 (D)"], 0, "\uBBF8\uC640 \uD30C \uC0AC\uC774\uC5D0\uB294 \uAC80\uC740\uAC74\uBC18\uC774 \uC5C6\uC5B4\uC694. \uBC14\uB85C \uC606 \uD30C\uAC00 \uBC18\uC74C \uC704\uC608\uC694."),
            key("**\uC2DC\u266D(B\u266D)**\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694. (\uC2DC\uC758 \uC67C\uCABD \uAC80\uC740\uAC74\uBC18\uC774\uC5D0\uC694.)", 10)
          ]
        }
      ]
    },
    // ───────────────────────────────────────── 유닛 1
    {
      id: "u1",
      title: "\uC74C\uC815",
      desc: "\uB450 \uC74C \uC0AC\uC774\uC758 \uAC70\uB9AC\uB97C \uC7AC\uB294 \uBC95\uC744 \uBC30\uC6CC\uC694. \uD654\uC74C\uC758 \uC7AC\uB8CC\uC608\uC694.",
      lessons: [
        {
          id: "u1l1",
          title: "\uC74C\uC815\uC774\uB780? \uBA87 \uB3C4\uC778\uC9C0 \uC138\uAE30",
          minutes: 6,
          steps: [
            text(
              "\uB450 \uC74C \uC0AC\uC774\uC758 \uAC70\uB9AC",
              `[[interval|\uC74C\uC815]]\uC740 \uB450 \uC74C \uC0AC\uC774\uC758 \uAC70\uB9AC\uC608\uC694. \uC774\uB984\uC740 "\uBA87 \uB3C4"\uB85C \uBD99\uC774\uB294\uB370, \uC774 \uC22B\uC790\uB97C [[degree|\uB3C4\uC218]]\uB77C\uACE0 \uD574\uC694.

\uC138\uB294 \uBC29\uBC95\uC740 **\uC2DC\uC791\uC74C\uC744 1\uB85C \uB193\uACE0** \uC74C \uC774\uB984\uC744 \uCC28\uB840\uB85C \uC138\uB294 \uAC70\uC608\uC694.
\uB3C4(1) - \uB808(2) - \uBBF8(3) \u2192 \uB3C4\uC5D0\uC11C \uBBF8\uB294 **3\uB3C4**
\uB3C4(1) - \uB808(2) - \uBBF8(3) - \uD30C(4) - \uC194(5) \u2192 \uB3C4\uC5D0\uC11C \uC194\uC740 **5\uB3C4**

\uAC19\uC740 \uC74C\uB07C\uB9AC\uB294 1\uB3C4, \uB192\uC740 \uB3C4\uAE4C\uC9C0 \uAC00\uBA74 8\uB3C4(\uC625\uD0C0\uBE0C)\uC608\uC694.`
            ),
            listen(
              "\uB3C4\uC5D0\uC11C \uC2DC\uC791\uD574\uC11C 2\uB3C4, 3\uB3C4, 5\uB3C4, 8\uB3C4\uB97C \uB4E4\uC5B4\uBCF4\uC138\uC694.",
              [
                { label: "2\uB3C4 (\uB3C4\u2192\uB808)", midis: [60, 62], mode: "both" },
                { label: "3\uB3C4 (\uB3C4\u2192\uBBF8)", midis: [60, 64], mode: "both" },
                { label: "5\uB3C4 (\uB3C4\u2192\uC194)", midis: [60, 67], mode: "both" },
                { label: "8\uB3C4 (\uB3C4\u2192\uB3C4)", midis: [60, 72], mode: "both" }
              ]
            ),
            q("\uB3C4(C)\uC5D0\uC11C \uD30C(F)\uAE4C\uC9C0\uB294 \uBA87 \uB3C4\uC77C\uAE4C\uC694?", ["3\uB3C4", "4\uB3C4", "5\uB3C4", "6\uB3C4"], 1, "\uB3C4(1) \uB808(2) \uBBF8(3) \uD30C(4) \u2192 4\uB3C4\uC608\uC694."),
            q("\uB808(D)\uC5D0\uC11C \uB77C(A)\uAE4C\uC9C0\uB294 \uBA87 \uB3C4\uC77C\uAE4C\uC694?", ["4\uB3C4", "5\uB3C4", "6\uB3C4", "7\uB3C4"], 1, "\uB808(1) \uBBF8(2) \uD30C(3) \uC194(4) \uB77C(5) \u2192 5\uB3C4\uC608\uC694."),
            q("\uBBF8(E)\uC5D0\uC11C \uB192\uC740 \uB3C4(C)\uAE4C\uC9C0\uB294 \uBA87 \uB3C4\uC77C\uAE4C\uC694?", ["5\uB3C4", "6\uB3C4", "7\uB3C4", "8\uB3C4"], 1, "\uBBF8(1) \uD30C(2) \uC194(3) \uB77C(4) \uC2DC(5) \uB3C4(6) \u2192 6\uB3C4\uC608\uC694."),
            key("\uB3C4(C)\uC5D0\uC11C **5\uB3C4 \uC704**\uC758 \uC74C\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 7)
          ]
        },
        {
          id: "u1l2",
          title: "2\uB3C4\uC640 3\uB3C4: \uC7A5\uACFC \uB2E8",
          minutes: 7,
          steps: [
            text(
              "\uAC19\uC740 3\uB3C4, \uB2E4\uB978 \uC18C\uB9AC",
              `\uAC19\uC740 "3\uB3C4"\uB77C\uB3C4 \uAC74\uBC18 \uAC04\uACA9\uC774 \uB2E4\uB97C \uC218 \uC788\uC5B4\uC694. \uADF8\uB798\uC11C **\uBC18\uC74C\uC774 \uBA87 \uAC1C\uC778\uC9C0**\uB85C \uD55C \uBC88 \uB354 \uAD6C\uBD84\uD574\uC694.

- [[major-interval|\uC7A53\uB3C4]] = \uBC18\uC74C **4**\uAC1C (\uB3C4\u2192\uBBF8). \uB300\uCCB4\uB85C \uBC1D\uAC8C \uB4E4\uB824\uC694.
- [[minor-interval|\uB2E83\uB3C4]] = \uBC18\uC74C **3**\uAC1C (\uB3C4\u2192\uBBF8\u266D). \uB300\uCCB4\uB85C \uC5B4\uB461\uAC8C \uB4E4\uB824\uC694.

2\uB3C4\uB3C4 \uB9C8\uCC2C\uAC00\uC9C0\uC608\uC694. **\uC7A52\uB3C4**\uB294 \uBC18\uC74C 2\uAC1C(= \uC628\uC74C), **\uB2E82\uB3C4**\uB294 \uBC18\uC74C 1\uAC1C\uC608\uC694.

\uC7A5(\u9577)\uC740 "\uD06C\uB2E4", \uB2E8(\u77ED)\uC740 "\uC791\uB2E4"\uB294 \uB73B\uC774\uC5D0\uC694. \uAC19\uC740 \uB3C4\uC218\uC5D0\uC11C \uBC18\uC74C \uD558\uB098 \uB354 \uB113\uC73C\uBA74 \uC7A5, \uC881\uC73C\uBA74 \uB2E8\uC774\uC5D0\uC694.`
            ),
            listen(
              "\uB124 \uAC00\uC9C0\uB97C \uBE44\uAD50\uD574 \uBCF4\uC138\uC694. \uAC74\uBC18\uC5D0 \uD45C\uC2DC\uB41C \uAC70\uB9AC\uB97C \uB208\uC73C\uB85C\uB3C4 \uD655\uC778\uD574 \uBCF4\uC138\uC694.",
              [
                { label: "\uB2E82\uB3C4 (\uBC18\uC74C 1)", midis: [60, 61], mode: "both" },
                { label: "\uC7A52\uB3C4 (\uBC18\uC74C 2)", midis: [60, 62], mode: "both" },
                { label: "\uB2E83\uB3C4 (\uBC18\uC74C 3)", midis: [60, 63], mode: "both" },
                { label: "\uC7A53\uB3C4 (\uBC18\uC74C 4)", midis: [60, 64], mode: "both" }
              ]
            ),
            q("\uB3C4(C)\uC5D0\uC11C \uBBF8\u266D(E\u266D)\uAE4C\uC9C0\uC758 \uC74C\uC815\uC740?", ["\uC7A53\uB3C4", "\uB2E83\uB3C4", "\uC7A52\uB3C4", "\uC644\uC8045\uB3C4"], 1, "\uB3C4\u2192\uBBF8\u266D\uC740 \uBC18\uC74C 3\uAC1C\uC608\uC694. 3\uB3C4\uC778\uB370 \uBC18\uC74C 3\uAC1C \u2192 \uB2E83\uB3C4."),
            q("\uBC18\uC74C\uC774 4\uAC1C \uB5A8\uC5B4\uC9C4 3\uB3C4\uB294?", ["\uC7A53\uB3C4", "\uB2E83\uB3C4", "\uB2E82\uB3C4", "\uC7A52\uB3C4"], 0, "3\uB3C4 \uC911 \uBC18\uC74C 4\uAC1C\uB294 \uC7A53\uB3C4\uC608\uC694."),
            q("\uB3C4(C)\uC5D0\uC11C \uB808\u266D(D\u266D)\uAE4C\uC9C0\uC758 \uC74C\uC815\uC740?", ["\uB2E82\uB3C4", "\uC7A52\uB3C4", "\uB2E83\uB3C4", "\uC7A53\uB3C4"], 0, "\uBC18\uC74C 1\uAC1C \u2192 \uB2E82\uB3C4\uC608\uC694."),
            ear("\uB450 \uC74C\uC744 \uB4E3\uACE0 \uC54C\uB9DE\uC740 \uC74C\uC815\uC744 \uACE0\uB974\uC138\uC694.", [60, 64], "both", ["\uC7A53\uB3C4", "\uB2E83\uB3C4"], 0, "\uBC18\uC74C 4\uAC1C \u2192 \uC7A53\uB3C4. \uB2E83\uB3C4\uBCF4\uB2E4 \uBC1D\uAC8C \uB4E4\uB824\uC694."),
            ear("\uB450 \uC74C\uC744 \uB4E3\uACE0 \uC54C\uB9DE\uC740 \uC74C\uC815\uC744 \uACE0\uB974\uC138\uC694.", [60, 63], "both", ["\uC7A53\uB3C4", "\uB2E83\uB3C4"], 1, "\uBC18\uC74C 3\uAC1C \u2192 \uB2E83\uB3C4. \uC870\uAE08 \uC5B4\uB450\uC6B4 \uB290\uB08C\uC774\uC5D0\uC694."),
            ear("\uB450 \uC74C\uC744 \uB4E3\uACE0 \uC54C\uB9DE\uC740 \uC74C\uC815\uC744 \uACE0\uB974\uC138\uC694.", [62, 65], "both", ["\uC7A53\uB3C4", "\uB2E83\uB3C4"], 1, "\uB808\u2192\uD30C\uB294 \uBC18\uC74C 3\uAC1C\uB77C\uC11C \uB2E83\uB3C4\uC608\uC694."),
            ear("\uB450 \uC74C\uC744 \uB4E3\uACE0 \uC54C\uB9DE\uC740 \uC74C\uC815\uC744 \uACE0\uB974\uC138\uC694.", [65, 69], "both", ["\uC7A53\uB3C4", "\uB2E83\uB3C4"], 0, "\uD30C\u2192\uB77C\uB294 \uBC18\uC74C 4\uAC1C\uB77C\uC11C \uC7A53\uB3C4\uC608\uC694."),
            key("\uB3C4(C)\uC5D0\uC11C **\uC7A53\uB3C4 \uC704**\uC758 \uC74C\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 4),
            key("\uB3C4(C)\uC5D0\uC11C **\uB2E83\uB3C4 \uC704**\uC758 \uC74C\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 3)
          ]
        },
        {
          id: "u1l3",
          title: "\uC644\uC804\uC74C\uC815: 4\uB3C4\xB75\uB3C4\xB78\uB3C4",
          minutes: 6,
          steps: [
            text(
              "\uC548\uC815\uC801\uC778 \uC74C\uC815\uB4E4",
              `4\uB3C4, 5\uB3C4, 8\uB3C4\uB294 \uC7A5\xB7\uB2E8 \uB300\uC2E0 [[perfect|\uC644\uC804]]\uC774\uB77C\uB294 \uC774\uB984\uC744 \uC368\uC694.

- \uC644\uC8044\uB3C4 = \uBC18\uC74C **5**\uAC1C (\uB3C4\u2192\uD30C)
- \uC644\uC8045\uB3C4 = \uBC18\uC74C **7**\uAC1C (\uB3C4\u2192\uC194)
- \uC644\uC8048\uB3C4 = \uBC18\uC74C **12**\uAC1C (\uB3C4\u2192\uB192\uC740 \uB3C4, \uC625\uD0C0\uBE0C)

\uC774 \uC74C\uC815\uB4E4\uC740 \uC544\uC8FC \uC548\uC815\uC801\uC73C\uB85C \uC5B4\uC6B8\uB9AC\uAC8C \uB4E4\uB824\uC694. \uD2B9\uD788 **\uC644\uC8045\uB3C4**\uB294 \uD654\uC74C\uC758 \uBF08\uB300\uAC00 \uB418\uB294 \uC74C\uC815\uC774\uB77C \uC55E\uC73C\uB85C \uACC4\uC18D \uB9CC\uB098\uAC8C \uB3FC\uC694.`
            ),
            listen(
              "\uC644\uC804\uC74C\uC815\uC758 \uC18C\uB9AC\uB97C \uB4E4\uC5B4\uBCF4\uC138\uC694. \uAC00\uC6B4\uB370\uC11C \uBE44\uC5B4 \uC788\uB294 \uB4EF \uB2E8\uB2E8\uD558\uAC8C \uC5B4\uC6B8\uB9AC\uB294 \uB290\uB08C\uC774\uC5D0\uC694.",
              [
                { label: "\uC644\uC8044\uB3C4 (\uBC18\uC74C 5)", midis: [60, 65], mode: "both" },
                { label: "\uC644\uC8045\uB3C4 (\uBC18\uC74C 7)", midis: [60, 67], mode: "both" },
                { label: "\uC644\uC8048\uB3C4 (\uBC18\uC74C 12)", midis: [60, 72], mode: "both" }
              ]
            ),
            q("\uBC18\uC74C 7\uAC1C \uAC70\uB9AC\uC758 \uC74C\uC815\uC740?", ["\uC644\uC8044\uB3C4", "\uC644\uC8045\uB3C4", "\uC7A53\uB3C4", "\uC644\uC8048\uB3C4"], 1, "\uBC18\uC74C 7\uAC1C\uB294 \uC644\uC8045\uB3C4\uC608\uC694. \uB3C4\u2192\uC194."),
            q("\uB3C4(C)\uC5D0\uC11C \uD30C(F)\uAE4C\uC9C0\uC758 \uC74C\uC815 \uC774\uB984\uC740?", ["\uC7A53\uB3C4", "\uC644\uC8044\uB3C4", "\uC644\uC8045\uB3C4", "\uC7A56\uB3C4"], 1, '\uB3C4\u2192\uD30C\uB294 4\uB3C4\uC774\uACE0 \uBC18\uC74C 5\uAC1C. 4\uB3C4\uB294 "\uC644\uC804"\uC774\uB77C\uB294 \uC774\uB984\uC744 \uC368\uC694.'),
            ear("\uB4E4\uB824\uC8FC\uB294 \uC74C\uC815\uC740?", [62, 67], "both", ["\uC644\uC8044\uB3C4", "\uC644\uC8045\uB3C4"], 0, "\uB808\u2192\uC194\uC740 \uBC18\uC74C 5\uAC1C\uB77C\uC11C \uC644\uC8044\uB3C4\uC608\uC694."),
            ear("\uB4E4\uB824\uC8FC\uB294 \uC74C\uC815\uC740?", [62, 69], "both", ["\uC644\uC8044\uB3C4", "\uC644\uC8045\uB3C4"], 1, "\uB808\u2192\uB77C\uB294 \uBC18\uC74C 7\uAC1C\uB77C\uC11C \uC644\uC8045\uB3C4\uC608\uC694."),
            ear("\uB4E4\uB824\uC8FC\uB294 \uC74C\uC815\uC740?", [67, 72], "both", ["\uC644\uC8044\uB3C4", "\uC644\uC8045\uB3C4"], 0, "\uC194\u2192\uB3C4\uB294 \uBC18\uC74C 5\uAC1C\uB77C\uC11C \uC644\uC8044\uB3C4\uC608\uC694."),
            key("\uC194(G)\uC5D0\uC11C **\uC644\uC8045\uB3C4 \uC704**\uC758 \uC74C\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 2, [60, 76], "\uC194\uC5D0\uC11C \uBC18\uC74C 7\uAC1C \uC704\uB294 \uB808(D)\uC608\uC694.")
          ]
        },
        {
          id: "u1l4",
          title: "6\uB3C4\xB77\uB3C4\uC640 \uC74C\uC815 \uCD1D\uC815\uB9AC",
          minutes: 7,
          steps: [
            text(
              "\uB0A8\uC740 \uC74C\uC815\uB4E4",
              `6\uB3C4\uC640 7\uB3C4\uB3C4 \uC7A5\xB7\uB2E8\uC73C\uB85C \uB098\uB258\uC5B4\uC694.

- \uB2E86\uB3C4 = \uBC18\uC74C 8\uAC1C, \uC7A56\uB3C4 = \uBC18\uC74C 9\uAC1C
- \uB2E87\uB3C4 = \uBC18\uC74C 10\uAC1C, \uC7A57\uB3C4 = \uBC18\uC74C 11\uAC1C

\uADF8\uB9AC\uACE0 \uD55C\uAC00\uC6B4\uB370, \uBC18\uC74C **6**\uAC1C \uAC70\uB9AC\uB294 [[tritone|\uD2B8\uB77C\uC774\uD1A4]]\uC774\uB77C\uB294 \uD2B9\uBCC4\uD55C \uC74C\uC815\uC774\uC5D0\uC694. \uBD88\uC548\uC815\uD558\uACE0 \uAE34\uC7A5\uB418\uB294 \uC18C\uB9AC\uC778\uB370, \uB098\uC911\uC5D0 \uCF54\uB4DC\uB97C \uBC30\uC6B8 \uB54C \uC544\uC8FC \uC911\uC694\uD574\uC838\uC694.

\uC544\uB798\uC5D0\uC11C \uB3C4\uB97C \uAE30\uC900\uC73C\uB85C 12\uAC00\uC9C0 \uC74C\uC815\uC744 \uBAA8\uB450 \uB4E4\uC5B4\uBCF4\uC138\uC694.`
            ),
            listen(
              null,
              [
                { label: "\uB2E82\uB3C4 (1)", midis: [60, 61], mode: "both" },
                { label: "\uC7A52\uB3C4 (2)", midis: [60, 62], mode: "both" },
                { label: "\uB2E83\uB3C4 (3)", midis: [60, 63], mode: "both" },
                { label: "\uC7A53\uB3C4 (4)", midis: [60, 64], mode: "both" },
                { label: "\uC644\uC8044\uB3C4 (5)", midis: [60, 65], mode: "both" },
                { label: "\uD2B8\uB77C\uC774\uD1A4 (6)", midis: [60, 66], mode: "both" },
                { label: "\uC644\uC8045\uB3C4 (7)", midis: [60, 67], mode: "both" },
                { label: "\uB2E86\uB3C4 (8)", midis: [60, 68], mode: "both" },
                { label: "\uC7A56\uB3C4 (9)", midis: [60, 69], mode: "both" },
                { label: "\uB2E87\uB3C4 (10)", midis: [60, 70], mode: "both" },
                { label: "\uC7A57\uB3C4 (11)", midis: [60, 71], mode: "both" },
                { label: "\uC644\uC8048\uB3C4 (12)", midis: [60, 72], mode: "both" }
              ]
            ),
            q("\uBC18\uC74C 9\uAC1C \uAC70\uB9AC\uC758 \uC74C\uC815\uC740?", ["\uB2E86\uB3C4", "\uC7A56\uB3C4", "\uB2E87\uB3C4", "\uC7A57\uB3C4"], 1, "\uBC18\uC74C 8\uAC1C\uAC00 \uB2E86\uB3C4, 9\uAC1C\uAC00 \uC7A56\uB3C4\uC608\uC694."),
            q("\uB3C4(C)\uC5D0\uC11C \uC2DC(B)\uAE4C\uC9C0\uC758 \uC74C\uC815\uC740?", ["\uB2E87\uB3C4", "\uC7A57\uB3C4", "\uC7A56\uB3C4", "\uC644\uC8048\uB3C4"], 1, "\uB3C4\u2192\uC2DC\uB294 \uBC18\uC74C 11\uAC1C\uB77C\uC11C \uC7A57\uB3C4\uC608\uC694."),
            q("\uB2E87\uB3C4\uB294 \uBC18\uC74C\uC774 \uBA87 \uAC1C\uC77C\uAE4C\uC694?", ["8\uAC1C", "9\uAC1C", "10\uAC1C", "11\uAC1C"], 2, "\uB2E87\uB3C4 10\uAC1C, \uC7A57\uB3C4 11\uAC1C\uC608\uC694."),
            ear("\uB4E4\uB824\uC8FC\uB294 \uC74C\uC815\uC740?", [60, 66], "both", ["\uD2B8\uB77C\uC774\uD1A4", "\uC644\uC8045\uB3C4", "\uC644\uC8044\uB3C4", "\uC644\uC8048\uB3C4"], 0, "\uBC18\uC74C 6\uAC1C \uAC70\uB9AC, \uD2B8\uB77C\uC774\uD1A4\uC774\uC5D0\uC694. \uBD88\uC548\uC815\uD558\uAC8C \uB4E4\uB9AC\uC8E0."),
            key("\uB3C4(C)\uC5D0\uC11C **\uC7A56\uB3C4 \uC704**\uC758 \uC74C\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694.", 9, [60, 76], "\uBC18\uC74C 9\uAC1C \uC704\uB294 \uB77C(A)\uC608\uC694.")
          ]
        }
      ]
    },
    // ───────────────────────────────────────── 유닛 2
    {
      id: "u2",
      title: "\uC2A4\uCF00\uC77C",
      desc: "\uBA54\uC774\uC800\uC640 \uB9C8\uC774\uB108 \uC2A4\uCF00\uC77C\uC758 \uADDC\uCE59\uC744 \uBC30\uC6CC\uC694.",
      lessons: [
        {
          id: "u2l1",
          title: "\uC2A4\uCF00\uC77C\uC774\uB780?",
          minutes: 5,
          steps: [
            text(
              "\uC74C\uC744 \uACC4\uB2E8\uCC98\uB7FC \uB298\uC5B4\uB193\uAE30",
              `[[scale|\uC2A4\uCF00\uC77C(\uC74C\uACC4)]]\uC740 \uC815\uD574\uC9C4 \uAC04\uACA9 \uADDC\uCE59\uC5D0 \uB530\uB77C \uC74C\uC744 \uACC4\uB2E8\uCC98\uB7FC \uCC28\uB840\uB85C \uB298\uC5B4\uB193\uC740 \uAC83\uC774\uC5D0\uC694.

\uC6B0\uB9AC\uAC00 \uC544\uB294 **\uB3C4\uB808\uBBF8\uD30C\uC194\uB77C\uC2DC\uB3C4**\uAC00 \uBC14\uB85C [[major-scale|\uBA54\uC774\uC800 \uC2A4\uCF00\uC77C]]\uC774\uC5D0\uC694. \uC2A4\uCF00\uC77C\uC758 \uCD9C\uBC1C\uC74C\uC744 [[tonic|\uC73C\uB738\uC74C]]\uC774\uB77C\uACE0 \uD574\uC694. \uC73C\uB738\uC74C\uC740 \uC2A4\uCF00\uC77C\uC758 \uC911\uC2EC, \uACE1\uC774 \uB3CC\uC544\uC640 \uC26C\uACE0 \uC2F6\uC5B4 \uD558\uB294 "\uC9D1" \uAC19\uC740 \uC74C\uC774\uC5D0\uC694.

\uC9C1\uC811 \uB4E4\uC5B4\uBCF4\uC138\uC694. \uC2DC\uC5D0\uC11C \uBA48\uCD94\uBA74 \uC5B4\uB518\uAC00 \uC774\uC57C\uAE30\uAC00 \uB05D\uB098\uC9C0 \uC54A\uC740 \uB290\uB08C\uC774\uACE0, \uB3C4\uB85C \uB3CC\uC544\uC624\uBA74 \uC548\uC815\uB3FC\uC694.`
            ),
            listen(
              null,
              [
                { label: "\uB3C4\uC5D0\uC11C \uB192\uC740 \uB3C4\uAE4C\uC9C0", midis: C.major, mode: "seq" },
                { label: "\uC2DC\uC5D0\uC11C \uBA48\uCD94\uBA74?", midis: C.major.slice(0, 7), mode: "seq" },
                { label: "\uB0B4\uB824\uC624\uAE30", midis: reversed(C.major), mode: "seq" }
              ]
            ),
            q("\uC2A4\uCF00\uC77C\uC758 \uCD9C\uBC1C\uC74C\uC774\uC790 \uC911\uC2EC\uC774 \uB418\uB294 \uC74C\uC744 \uBB50\uB77C\uACE0 \uBD80\uB97C\uAE4C\uC694?", ["\uC73C\uB738\uC74C", "\uBC18\uC74C", "\uC625\uD0C0\uBE0C", "\uB3C4\uC218"], 0, '\uC2A4\uCF00\uC77C\uC758 "\uC9D1" \uAC19\uC740 \uC911\uC2EC\uC74C\uC744 \uC73C\uB738\uC74C\uC774\uB77C\uACE0 \uD574\uC694.'),
            q("\uB3C4\uB808\uBBF8\uD30C\uC194\uB77C\uC2DC\uB3C4\uB294 \uC5B4\uB5A4 \uC2A4\uCF00\uC77C\uC77C\uAE4C\uC694?", ["\uBA54\uC774\uC800 \uC2A4\uCF00\uC77C", "\uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108", "\uD558\uBAA8\uB2C9 \uB9C8\uC774\uB108", "\uBA5C\uB85C\uB515 \uB9C8\uC774\uB108"], 0, "\uBC1D\uACE0 \uC548\uC815\uC801\uC778 \uB3C4\uB808\uBBF8\uD30C\uC194\uB77C\uC2DC\uB3C4\uAC00 \uBA54\uC774\uC800 \uC2A4\uCF00\uC77C\uC774\uC5D0\uC694.")
          ]
        },
        {
          id: "u2l2",
          title: "\uBA54\uC774\uC800 \uC2A4\uCF00\uC77C\uC758 \uACF5\uC2DD",
          minutes: 8,
          steps: [
            text(
              "\uC5B4\uB290 \uC74C\uC5D0\uC11C \uC2DC\uC791\uD574\uB3C4 \uB9CC\uB4E4 \uC218 \uC788\uC5B4\uC694",
              `\uB3C4\uB808\uBBF8\uD30C\uC194\uB77C\uC2DC\uB3C4 \uC0AC\uC774\uC758 \uAC04\uACA9\uC744 \uC7AC \uBCF4\uBA74 \uADDC\uCE59\uC774 \uBCF4\uC5EC\uC694.

\uB3C4-\uB808 **\uC628\uC74C**, \uB808-\uBBF8 **\uC628\uC74C**, \uBBF8-\uD30C **\uBC18\uC74C**, \uD30C-\uC194 **\uC628\uC74C**, \uC194-\uB77C **\uC628\uC74C**, \uB77C-\uC2DC **\uC628\uC74C**, \uC2DC-\uB3C4 **\uBC18\uC74C**

\uADF8\uB798\uC11C \uBA54\uC774\uC800 \uC2A4\uCF00\uC77C \uACF5\uC2DD\uC740
**\uC628 - \uC628 - \uBC18 - \uC628 - \uC628 - \uC628 - \uBC18**

\uC774 \uACF5\uC2DD\uB9CC \uC54C\uBA74 \uC5B4\uB5A4 \uC74C\uC5D0\uC11C \uC2DC\uC791\uD574\uB3C4 \uBA54\uC774\uC800 \uC2A4\uCF00\uC77C\uC744 \uB9CC\uB4E4 \uC218 \uC788\uC5B4\uC694. \uC194(G)\uC5D0\uC11C \uC2DC\uC791\uD574 \uBCFC\uAE4C\uC694?`
            ),
            listen(
              '\uC194\uC5D0\uC11C \uAC19\uC740 \uACF5\uC2DD\uC73C\uB85C \uC313\uC73C\uBA74 \uB9C8\uC9C0\uB9C9\uC5D0\uC11C \uB450 \uBC88\uC9F8 \uC74C\uC774 \uD30C\uAC00 \uC544\uB2C8\uB77C **\uD30C\u266F**\uC774 \uB3FC\uC694. \uC2DC-\uB3C4 \uC0AC\uC774\uCC98\uB7FC "\uBC18\uC74C"\uC774 \uC640\uC57C \uD558\uAE30 \uB54C\uBB38\uC774\uC5D0\uC694. \uAC74\uBC18\uC5D0 \uD45C\uC2DC\uB41C \uC74C\uC744 \uD655\uC778\uD558\uC138\uC694.',
              [
                { label: "C \uBA54\uC774\uC800 (\uB3C4\uC5D0\uC11C)", midis: C.major, mode: "seq" },
                { label: "G \uBA54\uC774\uC800 (\uC194\uC5D0\uC11C)", midis: G_MAJOR, mode: "seq" }
              ],
              [60, 79]
            ),
            play("G \uBA54\uC774\uC800 \uC2A4\uCF00\uC77C\uC744 \uCC28\uB840\uB85C \uB20C\uB7EC\uBCF4\uC138\uC694. \uD30C\u266F(F\u266F)\uC744 \uC78A\uC9C0 \uB9C8\uC138\uC694!", [7, 9, 11, 0, 2, 4, 6, 7], [67, 79]),
            play("\uC774\uBC88\uC5D0\uB294 \uB808(D)\uC5D0\uC11C \uC2DC\uC791\uD558\uB294 D \uBA54\uC774\uC800\uC608\uC694. \uD78C\uD2B8\uB97C \uB044\uACE0 \uACF5\uC2DD\uC744 \uB5A0\uC62C\uB9AC\uBA70 \uB3C4\uC804\uD574 \uBCF4\uC138\uC694. (\uB9C9\uD788\uBA74 \uD78C\uD2B8 \uCF1C\uAE30)", [2, 4, 6, 7, 9, 11, 1, 2], [62, 74], false),
            q("F(\uD30C)\uC5D0\uC11C \uC2DC\uC791\uD558\uB294 \uBA54\uC774\uC800 \uC2A4\uCF00\uC77C\uC758 4\uBC88\uC9F8 \uC74C\uC740?", ["\uC2DC (B)", "\uC2DC\u266D (B\u266D)", "\uB3C4 (C)", "\uB77C (A)"], 1, 'F \u2192 G(\uC628) \u2192 A(\uC628) \u2192 \uB2E4\uC74C\uC740 "\uBC18\uC74C"\uC774\uB77C B\u266D\uC774\uC5D0\uC694. B\uB85C \uAC00\uBA74 \uC628\uC74C\uC774 \uB418\uC5B4 \uBC84\uB824\uC694.'),
            q('\uBA54\uC774\uC800 \uC2A4\uCF00\uC77C\uC5D0\uC11C "\uBC18\uC74C" \uAC04\uACA9\uC774 \uC624\uB294 \uACF3\uC740?', ["3-4\uBC88\uC9F8, 7-8\uBC88\uC9F8 \uC74C \uC0AC\uC774", "1-2\uBC88\uC9F8, 5-6\uBC88\uC9F8 \uC74C \uC0AC\uC774", "2-3\uBC88\uC9F8, 6-7\uBC88\uC9F8 \uC74C \uC0AC\uC774", "4-5\uBC88\uC9F8, 7-8\uBC88\uC9F8 \uC74C \uC0AC\uC774"], 0, "\uC628-\uC628-\uBC18-\uC628-\uC628-\uC628-\uBC18 \u2192 \uBC18\uC74C\uC740 3-4\uBC88\uC9F8, 7-8\uBC88\uC9F8 \uC0AC\uC774\uC608\uC694.")
          ]
        },
        {
          id: "u2l3",
          title: "\uB9C8\uC774\uB108 \uC2A4\uCF00\uC77C",
          minutes: 7,
          steps: [
            text(
              "\uC5B4\uB461\uACE0 \uC4F8\uC4F8\uD55C \uC2A4\uCF00\uC77C",
              `\uBA54\uC774\uC800\uAC00 \uBC1D\uACE0 \uD658\uD55C \uB290\uB08C\uC774\uB77C\uBA74, \uB9C8\uC774\uB108\uB294 \uC5B4\uB461\uACE0 \uC4F8\uC4F8\uD55C \uB290\uB08C\uC774\uC5D0\uC694. \uAC00\uC7A5 \uAE30\uBCF8 \uB9C8\uC774\uB108\uC778 [[natural-minor|\uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108]]\uC758 \uACF5\uC2DD\uC740
**\uC628 - \uBC18 - \uC628 - \uC628 - \uBC18 - \uC628 - \uC628**

\uB77C(A)\uC5D0\uC11C \uC2DC\uC791\uD574 \uD770\uAC74\uBC18\uB9CC \uCC28\uB840\uB85C \uCE58\uBA74 A \uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108\uAC00 \uB3FC\uC694. \uAC19\uC740 \uB3C4\uC5D0\uC11C \uC2DC\uC791\uD574\uB3C4 \uBA54\uC774\uC800\uC640 \uB9C8\uC774\uB108\uB294 \uBD84\uC704\uAE30\uAC00 \uC644\uC804\uD788 \uB2EC\uB77C\uC694.`
            ),
            listen(
              "\uAC19\uC740 \uB3C4\uC5D0\uC11C \uC2DC\uC791\uD558\uB294 \uBA54\uC774\uC800\uC640 \uB9C8\uC774\uB108\uB97C \uBE44\uAD50\uD574 \uBCF4\uC138\uC694. \uB9C8\uC774\uB108\uC5D0\uC11C\uB294 3\uBC88\uC9F8, 6\uBC88\uC9F8, 7\uBC88\uC9F8 \uC74C\uC774 \uBC18\uC74C\uC529 \uB0B4\uB824\uAC00\uC694.",
              [
                { label: "C \uBA54\uC774\uC800", midis: C.major, mode: "seq" },
                { label: "C \uB9C8\uC774\uB108", midis: C.minor, mode: "seq" },
                { label: "A \uB9C8\uC774\uB108 (\uD770\uAC74\uBC18\uB9CC)", midis: A.minor, mode: "seq" }
              ],
              [57, 72]
            ),
            play("A \uB9C8\uC774\uB108 \uC2A4\uCF00\uC77C\uC744 \uD770\uAC74\uBC18\uC73C\uB85C \uCC28\uB840\uB85C \uB20C\uB7EC\uBCF4\uC138\uC694.", [9, 11, 0, 2, 4, 5, 7, 9], [57, 69]),
            ear("\uC774 \uC2A4\uCF00\uC77C\uC740 \uBA54\uC774\uC800\uC77C\uAE4C\uC694, \uB9C8\uC774\uB108\uC77C\uAE4C\uC694?", C.major, "seq", ["\uBA54\uC774\uC800", "\uB9C8\uC774\uB108"], 0, "\uBC1D\uACE0 \uC548\uC815\uC801\uC778 \uC18C\uB9AC\uB294 \uBA54\uC774\uC800\uC608\uC694."),
            ear("\uC774 \uC2A4\uCF00\uC77C\uC740 \uBA54\uC774\uC800\uC77C\uAE4C\uC694, \uB9C8\uC774\uB108\uC77C\uAE4C\uC694?", C.minor, "seq", ["\uBA54\uC774\uC800", "\uB9C8\uC774\uB108"], 1, "\uC5B4\uB450\uC6B4 \uBD84\uC704\uAE30\uB294 \uB9C8\uC774\uB108\uC608\uC694."),
            ear("\uC774 \uC2A4\uCF00\uC77C\uC740 \uBA54\uC774\uC800\uC77C\uAE4C\uC694, \uB9C8\uC774\uB108\uC77C\uAE4C\uC694?", A.minor, "seq", ["\uBA54\uC774\uC800", "\uB9C8\uC774\uB108"], 1, "A \uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108\uC608\uC694."),
            ear("\uC774 \uC2A4\uCF00\uC77C\uC740 \uBA54\uC774\uC800\uC77C\uAE4C\uC694, \uB9C8\uC774\uB108\uC77C\uAE4C\uC694?", G_MAJOR, "seq", ["\uBA54\uC774\uC800", "\uB9C8\uC774\uB108"], 0, "G \uBA54\uC774\uC800\uC608\uC694. \uD30C\u266F\uC774 \uB4E4\uC5B4 \uC788\uC5B4\uB3C4 \uBC1D\uC740 \uC18C\uB9AC\uC8E0."),
            q("\uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108\uC758 \uAC04\uACA9 \uACF5\uC2DD\uC740?", ["\uC628-\uBC18-\uC628-\uC628-\uBC18-\uC628-\uC628", "\uC628-\uC628-\uBC18-\uC628-\uC628-\uC628-\uBC18", "\uBC18-\uC628-\uC628-\uBC18-\uC628-\uC628-\uC628", "\uC628-\uC628-\uC628-\uBC18-\uC628-\uC628-\uBC18"], 0, "\uC628-\uBC18-\uC628-\uC628-\uBC18-\uC628-\uC628\uC774\uC5D0\uC694. \uBA54\uC774\uC800\uB294 \uC628-\uC628-\uBC18-\uC628-\uC628-\uC628-\uBC18\uC774\uACE0\uC694.")
          ]
        },
        {
          id: "u2l4",
          title: "\uB9C8\uC774\uB108\uC758 \uC138 \uAC00\uC9C0 \uC5BC\uAD74",
          minutes: 7,
          steps: [
            text(
              "\uB9C8\uC774\uB108 \uC2A4\uCF00\uC77C\uC740 3\uC885\uB958",
              `\uB9C8\uC774\uB108 \uC2A4\uCF00\uC77C\uC5D0\uB294 \uC138 \uAC00\uC9C0\uAC00 \uC788\uC5B4\uC694. \uC9C0\uAE08\uC740 \uC678\uC6B8 \uD544\uC694 \uC5C6\uACE0, **\uC18C\uB9AC\uAC00 \uB2E4\uB974\uB2E4**\uB294 \uAC83\uB9CC \uB290\uAEF4 \uBCF4\uC138\uC694.

- [[natural-minor|\uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108]]: \uAE30\uBCF8\uD615.
- [[harmonic-minor|\uD558\uBAA8\uB2C9 \uB9C8\uC774\uB108]]: 7\uBC88\uC9F8 \uC74C\uC744 \uBC18\uC74C \uC62C\uB824\uC694. A \uB9C8\uC774\uB108\uB77C\uBA74 \uC194(G)\uC774 \uC194\u266F(G\u266F)\uC73C\uB85C \uBC14\uB00C\uC5B4\uC694. \uC774\uAD6D\uC801\uC778 \uC18C\uB9AC\uAC00 \uB098\uC694.
- [[melodic-minor|\uBA5C\uB85C\uB515 \uB9C8\uC774\uB108]]: \uC62C\uB77C\uAC08 \uB54C\uB294 6\uBC88\uC9F8, 7\uBC88\uC9F8 \uC74C\uC744 \uBAA8\uB450 \uBC18\uC74C \uC62C\uB9AC\uACE0(\uD30C\u266F, \uC194\u266F), \uB0B4\uB824\uC62C \uB54C\uB294 \uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108\uB85C \uB3CC\uC544\uC640\uC694.`
            ),
            listen(
              "A\uB97C \uAE30\uC900\uC73C\uB85C \uC138 \uAC00\uC9C0\uB97C \uBE44\uAD50\uD574 \uBCF4\uC138\uC694.",
              [
                { label: "A \uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108", midis: A.minor, mode: "seq" },
                { label: "A \uD558\uBAA8\uB2C9 \uB9C8\uC774\uB108", midis: A.harmonic, mode: "seq" },
                { label: "A \uBA5C\uB85C\uB515 \uB9C8\uC774\uB108 (\uC62C\uB77C\uAC08 \uB54C)", midis: A.melodicUp, mode: "seq" },
                { label: "A \uBA5C\uB85C\uB515 \uB9C8\uC774\uB108 (\uB0B4\uB824\uC62C \uB54C)", midis: reversed(A.minor), mode: "seq" }
              ],
              [57, 69]
            ),
            play("A \uD558\uBAA8\uB2C9 \uB9C8\uC774\uB108\uB97C \uB20C\uB7EC\uBCF4\uC138\uC694. 7\uBC88\uC9F8 \uC74C\uC774 \uC194\u266F\uC774\uC5D0\uC694.", [9, 11, 0, 2, 4, 5, 8, 9], [57, 69]),
            q("\uD558\uBAA8\uB2C9 \uB9C8\uC774\uB108\uAC00 \uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108\uC640 \uB2E4\uB978 \uC810\uC740?", ["7\uBC88\uC9F8 \uC74C\uC744 \uBC18\uC74C \uC62C\uB9B0\uB2E4", "3\uBC88\uC9F8 \uC74C\uC744 \uBC18\uC74C \uC62C\uB9B0\uB2E4", "5\uBC88\uC9F8 \uC74C\uC744 \uBC18\uC74C \uB0B4\uB9B0\uB2E4", "2\uBC88\uC9F8 \uC74C\uC744 \uBC18\uC74C \uC62C\uB9B0\uB2E4"], 0, "7\uBC88\uC9F8 \uC74C\uC744 \uBC18\uC74C \uC62C\uB9AC\uB294 \uAC83\uC774 \uD558\uBAA8\uB2C9 \uB9C8\uC774\uB108\uC758 \uD2B9\uC9D5\uC774\uC5D0\uC694."),
            q("\uBA5C\uB85C\uB515 \uB9C8\uC774\uB108\uC5D0\uC11C \uC62C\uB77C\uAC08 \uB54C \uBC18\uC74C\uC529 \uC62C\uB824 \uC8FC\uB294 \uC74C\uC740?", ["2\uBC88\uC9F8, 3\uBC88\uC9F8", "4\uBC88\uC9F8, 5\uBC88\uC9F8", "6\uBC88\uC9F8, 7\uBC88\uC9F8", "1\uBC88\uC9F8, 8\uBC88\uC9F8"], 2, "\uC62C\uB77C\uAC08 \uB54C\uB294 6, 7\uBC88\uC9F8 \uC74C\uC744 \uC62C\uB9AC\uACE0 \uB0B4\uB824\uC62C \uB54C\uB294 \uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108\uB85C \uB3CC\uC544\uC640\uC694."),
            ear("\uC774 \uC2A4\uCF00\uC77C\uC740 \uC5B4\uB5A4 \uB9C8\uC774\uB108\uC77C\uAE4C\uC694?", A.minor, "seq", ["\uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108", "\uD558\uBAA8\uB2C9 \uB9C8\uC774\uB108"], 0, "\uAE30\uBCF8 \uB9C8\uC774\uB108\uC608\uC694. 7\uBC88\uC9F8 \uC74C\uC774 \uC194(G)\uC774\uB77C \uD3C9\uBC94\uD558\uAC8C \uB0B4\uB824\uC549\uC544\uC694."),
            ear("\uC774 \uC2A4\uCF00\uC77C\uC740 \uC5B4\uB5A4 \uB9C8\uC774\uB108\uC77C\uAE4C\uC694?", A.harmonic, "seq", ["\uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108", "\uD558\uBAA8\uB2C9 \uB9C8\uC774\uB108"], 1, "6\uBC88\uC9F8\uC640 7\uBC88\uC9F8 \uC0AC\uC774\uAC00 \uB113\uAC8C \uBC8C\uC5B4\uC9C0\uBA70 \uC774\uAD6D\uC801\uC778 \uC18C\uB9AC\uAC00 \uB098\uC694.")
          ]
        },
        {
          id: "u2l5",
          title: "\uC2A4\uCF00\uC77C \uC885\uD569 \uC810\uAC80",
          minutes: 6,
          steps: [
            text("\uC720\uB2DB \uB9C8\uBB34\uB9AC", `\uC9C0\uAE08\uAE4C\uC9C0 \uBC30\uC6B4 \uBC18\uC74C\xB7\uC628\uC74C, \uC74C\uC815, \uC2A4\uCF00\uC77C\uC744 \uC885\uD569\uD574\uC11C \uD655\uC778\uD574 \uBCFC\uAC8C\uC694. \uD2C0\uB824\uB3C4 \uAD1C\uCC2E\uC544\uC694. \uD2C0\uB9B0 \uBB38\uC81C\uB294 \uB05D\uC5D0\uC11C \uD55C \uBC88 \uB354 \uB098\uC640\uC694.`),
            ear("\uC774 \uC2A4\uCF00\uC77C\uC740?", C.major, "seq", ["\uBA54\uC774\uC800", "\uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108", "\uD558\uBAA8\uB2C9 \uB9C8\uC774\uB108"], 0, "\uBC1D\uC740 \uC18C\uB9AC\uB294 \uBA54\uC774\uC800\uC608\uC694."),
            ear("\uC774 \uC2A4\uCF00\uC77C\uC740?", C.minor, "seq", ["\uBA54\uC774\uC800", "\uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108", "\uD558\uBAA8\uB2C9 \uB9C8\uC774\uB108"], 1, "\uC5B4\uB450\uC6B4 \uC18C\uB9AC, \uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108\uC608\uC694."),
            ear("\uC774 \uC2A4\uCF00\uC77C\uC740?", A.harmonic, "seq", ["\uBA54\uC774\uC800", "\uB0B4\uCD94\uB7F4 \uB9C8\uC774\uB108", "\uD558\uBAA8\uB2C9 \uB9C8\uC774\uB108"], 2, "7\uBC88\uC9F8 \uC74C\uC774 \uC62C\uB77C\uAC04 \uC774\uAD6D\uC801\uC778 \uC18C\uB9AC, \uD558\uBAA8\uB2C9 \uB9C8\uC774\uB108\uC608\uC694."),
            q("D \uBA54\uC774\uC800 \uC2A4\uCF00\uC77C\uC758 3\uBC88\uC9F8 \uC74C\uC740?", ["\uD30C (F)", "\uD30C\u266F (F\u266F)", "\uC194 (G)", "\uBBF8 (E)"], 1, "D\u2192E(\uC628)\u2192F\u266F(\uC628). 3\uBC88\uC9F8 \uC74C\uC740 F\u266F\uC774\uC5D0\uC694."),
            q("G \uBA54\uC774\uC800 \uC2A4\uCF00\uC77C(G A B C D E F\u266F G)\uC5D0\uC11C \uBC18\uC74C \uAC04\uACA9\uC774 \uC624\uB294 \uACF3\uC740 \uC5B4\uB514\uC77C\uAE4C\uC694?", ["E-F\u266F \uC0AC\uC774", "F\u266F-G \uC0AC\uC774", "C-D \uC0AC\uC774", "G-A \uC0AC\uC774"], 1, "\uBA54\uC774\uC800 \uC2A4\uCF00\uC77C\uC740 7\uBC88\uC9F8-8\uBC88\uC9F8 \uC74C \uC0AC\uC774\uAC00 \uBC18\uC74C\uC774\uC5D0\uC694. G \uBA54\uC774\uC800\uC5D0\uC11C\uB294 F\u266F\u2192G\uC608\uC694."),
            q("\uB3C4(C)\uC640 \uC194(G) \uC0AC\uC774\uB294 \uBC18\uC74C \uBA87 \uAC1C\uC77C\uAE4C\uC694?", ["5\uAC1C", "6\uAC1C", "7\uAC1C", "8\uAC1C"], 2, "\uC644\uC8045\uB3C4 = \uBC18\uC74C 7\uAC1C\uC608\uC694. \uBA54\uC774\uC800 \uC2A4\uCF00\uC77C\uC758 1\uBC88\uC9F8\uC640 5\uBC88\uC9F8 \uC74C\uC774 \uC774 \uAD00\uACC4\uC608\uC694."),
            play("E \uBA54\uC774\uC800 \uC2A4\uCF00\uC77C\uC5D0 \uB3C4\uC804\uD574 \uBCF4\uC138\uC694! \uACF5\uC2DD\uC740 \uC628-\uC628-\uBC18-\uC628-\uC628-\uC628-\uBC18. \uB9C9\uD788\uBA74 \uD78C\uD2B8\uB97C \uCF1C\uC138\uC694.", [4, 6, 8, 9, 11, 1, 3, 4], [64, 76], false)
          ]
        }
      ]
    }
  ];
  var units_default = [...base, ...units_chords_default, ...units_progressions_default, ...units_voicing_default, ...units_melody_default, ...units_borrowed_default, ...units_structure_default];

  // js/i18n.js
  var LANGS = {
    ko: { ui: ui_default, glossary: glossary_default, units: units_default }
  };
  var ui = {};
  var glossary = {};
  var units = [];
  function loadLang(lang = "ko") {
    const pack = LANGS[lang] || LANGS.ko;
    ui = pack.ui;
    glossary = pack.glossary;
    units = pack.units;
    document.documentElement.lang = lang;
    document.title = ui.appTitle;
  }
  var t = (str, vars = {}) => str.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? `{${k}}`);

  // js/audio.js
  var ctx = null;
  var master = null;
  var timers = [];
  function ensure() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0.8;
      const comp = ctx.createDynamicsCompressor();
      master.connect(comp);
      comp.connect(ctx.destination);
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }
  var audioNow = () => ensure().currentTime;
  function playNote(midi, { when = 0, dur = 1.4, vel = 0.7 } = {}) {
    const c = ensure();
    const t0 = c.currentTime + when + 0.01;
    const f = 440 * Math.pow(2, (midi - 69) / 12);
    const out = c.createGain();
    out.gain.value = vel * 0.22;
    out.connect(master);
    const partials = [[1, 1, dur], [2, 0.45, dur * 0.7], [3, 0.2, dur * 0.5], [4, 0.1, dur * 0.35]];
    for (const [mult, g, d] of partials) {
      const o = c.createOscillator();
      o.type = mult === 1 ? "triangle" : "sine";
      o.frequency.value = f * mult;
      const ge = c.createGain();
      ge.gain.setValueAtTime(1e-4, t0);
      ge.gain.linearRampToValueAtTime(g, t0 + 0.01);
      ge.gain.exponentialRampToValueAtTime(1e-4, t0 + d + 0.2);
      o.connect(ge).connect(out);
      o.start(t0);
      o.stop(t0 + d + 0.3);
    }
  }
  var later = (fn, ms) => timers.push(setTimeout(fn, ms));
  function stopAll() {
    timers.forEach(clearTimeout);
    timers = [];
  }
  function playItem(item, { onOn, onOff, onChord } = {}) {
    stopAll();
    const midis = item.midis || [];
    const mode = item.mode || "seq";
    const gap = item.gap ?? (midis.length > 3 ? 0.36 : 0.65);
    let t2 = 0;
    if (mode === "song") {
      const beat = 60 / (item.bpm || 100);
      const chords = item.chords || [];
      const melody = item.melody || [];
      chords.forEach((c) => {
        c.midis.forEach((m) => playNote(m, { when: c.at * beat, dur: c.len * beat * 1.1, vel: 0.5 }));
        later(() => onChord?.(c.midis), c.at * beat * 1e3);
      });
      melody.forEach((n) => {
        playNote(n.midi, { when: n.at * beat, dur: n.len * beat * 1.2, vel: 0.9 });
        later(() => onOn?.([n.midi]), n.at * beat * 1e3);
      });
      const endBeat = Math.max(0, ...chords.map((c) => c.at + c.len), ...melody.map((n) => n.at + n.len));
      t2 = endBeat * beat * 1e3 + 400;
      later(() => onOff?.(), t2);
      return t2;
    }
    if (mode === "prog") {
      item.chords.forEach((c, i) => {
        c.forEach((m) => playNote(m, { when: i * gap, dur: gap * 1.8 }));
        later(() => onOn?.(c), i * gap * 1e3);
      });
      t2 = item.chords.length * gap * 1e3 + 700;
      later(() => onOff?.(), t2);
      return t2;
    }
    if (mode === "seq" || mode === "both") {
      midis.forEach((m, i) => {
        playNote(m, { when: i * gap, dur: gap * 2.2 + 0.6 });
        later(() => onOn?.([m]), i * gap * 1e3);
      });
      t2 = midis.length * gap * 1e3 + 150;
    }
    if (mode === "chord" || mode === "both") {
      const start = t2;
      midis.forEach((m) => playNote(m, { when: start / 1e3, dur: 1.6 }));
      later(() => onOn?.(midis), start);
      t2 = start + 1500;
    }
    later(() => onOff?.(), t2);
    return t2;
  }

  // js/rich.js
  var esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  function inline(src) {
    let h = esc(src).replace(/\n/g, "<br>");
    h = h.replace(/\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g, (_, id, label) => {
      const g = glossary[id];
      if (!g) return label || id;
      return `<button type="button" class="term" data-term="${id}">${label || g.term}</button>`;
    });
    return h.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  }
  function rich(src) {
    return src.split(/\n\n+/).map((p) => `<p>${inline(p)}</p>`).join("");
  }

  // js/sheet.js
  var open = null;
  function closeSheet() {
    open?.remove();
    open = null;
  }
  function openTerm(id) {
    const g = glossary[id];
    if (!g) return;
    closeSheet();
    const back = document.createElement("div");
    back.className = "sheet-back";
    back.innerHTML = `
    <div class="sheet" role="dialog" aria-modal="true" aria-label="${g.term}">
      <div class="sheet-head">
        <h3>${g.term}</h3>
        <button type="button" class="icon-btn" data-close aria-label="${ui.close}">\u2715</button>
      </div>
      <p>${inline(g.desc)}</p>
      ${g.example ? `<button type="button" class="btn ghost" data-play>\u{1F50A} ${ui.hearExample}</button>` : ""}
    </div>`;
    back.addEventListener("click", (e) => {
      if (e.target === back || e.target.closest("[data-close]")) closeSheet();
      else if (e.target.closest("[data-play]")) playItem(g.example);
    });
    document.body.append(back);
    open = back;
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSheet();
  });

  // js/keyboard.js
  var STATE_CLASSES = ["on", "hint", "ok", "bad", "mark"];
  function createKeyboard(host, { lo = 60, hi = 72, onPress = () => {
  }, labelMode = "both" } = {}) {
    while (isBlack(lo)) lo--;
    while (isBlack(hi)) hi++;
    const whites = [];
    for (let m = lo; m <= hi; m++) if (!isBlack(m)) whites.push(m);
    const n = whites.length;
    const w = 100 / n;
    const el4 = document.createElement("div");
    el4.className = `kb labels-${labelMode}${n > 10 ? " dense" : ""}`;
    el4.setAttribute("role", "group");
    el4.setAttribute("aria-label", ui.keyboardLabel);
    const keys = /* @__PURE__ */ new Map();
    const makeKey = (m, black) => {
      const k = document.createElement("div");
      k.className = `key ${black ? "black" : "white"}`;
      k.dataset.midi = m;
      k.setAttribute("role", "button");
      k.setAttribute("aria-label", `${ui.solfege[pc(m)]} ${LETTERS[pc(m)]}`);
      k.innerHTML = `<span class="l-sol">${ui.solfege[pc(m)]}</span><span class="l-let">${LETTERS[pc(m)]}</span>`;
      k.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        k.classList.add("down");
        onPress(m);
      });
      const up = () => k.classList.remove("down");
      k.addEventListener("pointerup", up);
      k.addEventListener("pointerleave", up);
      k.addEventListener("pointercancel", up);
      keys.set(m, k);
      return k;
    };
    whites.forEach((m, i) => {
      const k = makeKey(m, false);
      k.style.left = `${i * w}%`;
      k.style.width = `${w}%`;
      el4.append(k);
    });
    for (let m = lo; m <= hi; m++) {
      if (!isBlack(m)) continue;
      const idx = whites.indexOf(m - 1);
      const k = makeKey(m, true);
      k.style.left = `${(idx + 1) * w - w * 0.3}%`;
      k.style.width = `${w * 0.6}%`;
      el4.append(k);
    }
    host.append(el4);
    const api = {
      el: el4,
      lo,
      hi,
      add(cls, midis) {
        midis.forEach((m) => keys.get(m)?.classList.add(cls));
      },
      set(cls, midis) {
        keys.forEach((k) => k.classList.remove(cls));
        api.add(cls, midis);
      },
      // 음 이름(0~11)이 같은 건반을 모두 대상으로
      setPc(cls, pcs) {
        keys.forEach((k, m) => k.classList.toggle(cls, pcs.includes(pc(m))));
      },
      flash(midi, cls, ms = 350) {
        const k = keys.get(midi);
        if (!k) return;
        k.classList.add(cls);
        setTimeout(() => k.classList.remove(cls), ms);
      },
      clear() {
        keys.forEach((k) => k.classList.remove(...STATE_CLASSES));
      },
      setLabelMode(mode) {
        el4.className = el4.className.replace(/labels-\w+/, `labels-${mode}`);
      }
    };
    return api;
  }

  // js/storage.js
  var KEY = "harmony-school.v1";
  var PASS = 80;
  var defaults = {
    lessons: {},
    settings: { labelMode: "both", unlockAll: false }
  };
  var loaded = null;
  try {
    loaded = JSON.parse(localStorage.getItem(KEY));
  } catch {
    loaded = null;
  }
  var state = {
    playground: loaded?.playground || null,
    // 코드 진행 놀이터: 설정, 작업 중인 진행, 저장한 진행
    lessons: loaded?.lessons || {},
    cards: loaded?.cards || {},
    // 복습 카드: { [문제id]: { box, due, seen, miss } }
    settings: { ...defaults.settings, ...loaded?.settings || {} }
  };
  var save = () => {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {
    }
  };
  var PASS_PERCENT = PASS;
  var settings = state.settings;
  var saveSettings = save;
  var getResult = (id) => state.lessons[id] || null;
  var isPassed = (id) => !!state.lessons[id]?.passed;
  function setResult(id, pct) {
    const prev = state.lessons[id];
    state.lessons[id] = {
      best: Math.max(prev?.best ?? 0, pct),
      passed: !!prev?.passed || pct >= PASS,
      last: pct
    };
    save();
  }
  var getPlayground = () => state.playground;
  function setPlayground(value) {
    state.playground = value;
    save();
  }
  var getCards = () => state.cards;
  function setCard(id, card) {
    state.cards[id] = card;
    save();
  }
  function resetProgress() {
    state.lessons = {};
    state.cards = {};
    save();
  }

  // js/lesson.js
  var QUIZ = /* @__PURE__ */ new Set(["choice", "key"]);
  var el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  };
  var shuffle = (arr) => {
    const r = arr.map((v, i) => ({ v, i }));
    for (let i = r.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [r[i], r[j]] = [r[j], r[i]];
    }
    return r;
  };
  function runLesson(root2, lesson, { onExit, onFinish, onNext, onRetry, onAnswer, review = false }) {
    const queue = lesson.steps.map((s) => ({ ...s }));
    const total = queue.filter((s) => QUIZ.has(s.type)).length;
    let i = 0;
    let correct = 0;
    let cleanup = () => {
    };
    root2.innerHTML = "";
    const wrap = el("div", "lesson");
    const top = el("div", "lesson-top");
    const closeBtn = el("button", "icon-btn", "\u2715");
    closeBtn.type = "button";
    closeBtn.setAttribute("aria-label", ui.close);
    const bar = el("div", "bar");
    const fill = el("div", "fill");
    bar.append(fill);
    top.append(closeBtn, bar);
    const stage = el("div", "stage");
    const foot = el("div", "lesson-foot");
    const next = el("button", "btn primary", ui.next);
    next.type = "button";
    foot.append(next);
    wrap.append(top, stage, foot);
    root2.append(wrap);
    const leave = () => {
      cleanup();
      stopAll();
    };
    closeBtn.onclick = () => {
      leave();
      onExit();
    };
    function show() {
      leave();
      stage.innerHTML = "";
      cleanup = () => {
      };
      if (i >= queue.length) return finish();
      const s = queue[i];
      fill.style.width = `${i / queue.length * 100}%`;
      next.disabled = false;
      next.textContent = ui.next;
      next.onclick = () => {
        i++;
        show();
      };
      if (s.retry) stage.append(el("div", "badge", ui.review));
      else if (s.tag) stage.append(el("div", "badge tag", t(ui.reviewFrom, { lesson: s.tag })));
      renderers[s.type](s);
      window.scrollTo(0, 0);
    }
    const lockNext = () => {
      next.disabled = true;
    };
    const unlockNext = () => {
      next.disabled = false;
    };
    function buildKeyboard(s, { onPress } = {}) {
      const kb = createKeyboard(stage, {
        lo: s.range?.[0] ?? 60,
        hi: s.range?.[1] ?? 72,
        labelMode: settings.labelMode,
        onPress: (m) => {
          playNote(m);
          kb.flash(m, "on", 300);
          onPress?.(m);
        }
      });
      return kb;
    }
    function wireItem(kb, item) {
      kb.clear();
      playItem(item, {
        onOn: (ms) => {
          kb.set("on", ms);
          if (item.mode === "prog") kb.set("mark", ms);
          else if (item.mode !== "song") kb.add("mark", ms);
        },
        // 곡 모드: 지금 울리는 코드의 음은 연하게, 멜로디 음은 진하게
        onChord: (ms) => kb.set("mark", ms),
        onOff: () => {
          kb.set("on", []);
          if (item.mode === "song") kb.set("mark", []);
        }
      });
    }
    const renderers = {
      text(s) {
        if (s.title) stage.append(el("h2", null, inline(s.title)));
        stage.append(el("div", "prose", rich(s.body)));
      },
      listen(s) {
        if (s.title) stage.append(el("h2", null, inline(s.title)));
        if (s.body) stage.append(el("div", "prose", rich(s.body)));
        const kb = buildKeyboard(s);
        const grid = el("div", "items");
        s.items.forEach((item) => {
          const b = el("button", "btn item", `<span class="ico">\u25B6</span> ${inline(item.label)}`);
          b.type = "button";
          b.onclick = () => wireItem(kb, item);
          grid.append(b);
        });
        stage.append(grid);
        stage.append(el("p", "muted small", ui.tapKeysHint));
      },
      play(s) {
        lockNext();
        if (s.title) stage.append(el("h2", null, inline(s.title)));
        stage.append(el("div", "prose", rich(s.body)));
        let idx = 0;
        let hint = s.hint !== false;
        const status = el("div", "status", "");
        const dots = el("div", "dots");
        s.pcs.forEach(() => dots.append(el("span", "dot")));
        const refresh = () => {
          [...dots.children].forEach((d, k) => d.classList.toggle("full", k < idx));
          kb.setPc("hint", hint && idx < s.pcs.length ? [s.pcs[idx]] : []);
        };
        const kb = buildKeyboard(s, {
          onPress: (m) => {
            if (idx >= s.pcs.length) return;
            if (pc(m) === s.pcs[idx]) {
              kb.flash(m, "ok", 500);
              idx++;
              if (idx >= s.pcs.length) {
                status.className = "status good";
                status.textContent = ui.playDone;
                unlockNext();
              } else {
                status.className = "status";
                status.textContent = t(ui.playProgress, { n: idx, total: s.pcs.length });
              }
            } else {
              kb.flash(m, "bad", 450);
              status.className = "status bad";
              status.textContent = ui.playWrong;
            }
            refresh();
          }
        });
        const tools = el("div", "row");
        const hintBtn = el("button", "btn ghost", hint ? ui.hintOff : ui.hintOn);
        hintBtn.type = "button";
        hintBtn.onclick = () => {
          hint = !hint;
          hintBtn.textContent = hint ? ui.hintOff : ui.hintOn;
          refresh();
        };
        const resetBtn = el("button", "btn ghost", ui.restart);
        resetBtn.type = "button";
        resetBtn.onclick = () => {
          idx = 0;
          status.className = "status";
          status.textContent = t(ui.playProgress, { n: 0, total: s.pcs.length });
          kb.clear();
          refresh();
        };
        tools.append(hintBtn, resetBtn);
        status.textContent = t(ui.playProgress, { n: 0, total: s.pcs.length });
        stage.append(dots, status, tools);
        refresh();
      },
      // 코드의 구성음을 건반에서 모두 찾기 (순서·옥타브 무관)
      build(s) {
        lockNext();
        if (s.title) stage.append(el("h2", null, inline(s.title)));
        stage.append(el("div", "prose", rich(s.body)));
        const need = new Set(s.pcs);
        const got = /* @__PURE__ */ new Set();
        let hint = s.hint !== false;
        const status = el("div", "status", "");
        const dots = el("div", "dots");
        s.pcs.forEach(() => dots.append(el("span", "dot")));
        const refresh = () => {
          [...dots.children].forEach((d, k) => d.classList.toggle("full", k < got.size));
          kb.setPc("ok", [...got]);
          kb.setPc("hint", hint ? [...need].filter((p) => !got.has(p)) : []);
          status.className = "status";
          status.textContent = t(ui.playProgress, { n: got.size, total: need.size });
        };
        const kb = buildKeyboard(s, {
          onPress: (m) => {
            const p = pc(m);
            if (!need.has(p)) {
              kb.flash(m, "bad", 450);
              status.className = "status bad";
              status.textContent = ui.buildWrong;
              return;
            }
            got.add(p);
            refresh();
            if (got.size === need.size) {
              status.className = "status good";
              status.textContent = ui.buildDone;
              unlockNext();
              setTimeout(() => playItem({ midis: s.midis, mode: "chord" }), 250);
            }
          }
        });
        const tools = el("div", "row");
        const hintBtn = el("button", "btn ghost", hint ? ui.hintOff : ui.hintOn);
        hintBtn.type = "button";
        hintBtn.onclick = () => {
          hint = !hint;
          hintBtn.textContent = hint ? ui.hintOff : ui.hintOn;
          refresh();
        };
        const resetBtn = el("button", "btn ghost", ui.restart);
        resetBtn.type = "button";
        resetBtn.onclick = () => {
          got.clear();
          kb.clear();
          refresh();
        };
        tools.append(hintBtn, resetBtn);
        stage.append(dots, status, tools);
        refresh();
      },
      // 코드를 고르고 건반을 눌러서 코드 톤(초록)인지 코드 밖의 음(노랑)인지 확인하는 탐험
      explore(s) {
        if (s.title) stage.append(el("h2", null, inline(s.title)));
        stage.append(el("div", "prose", rich(s.body)));
        let sel = null;
        let show2 = false;
        const status = el("div", "status", ui.explorePick);
        const row = el("div", "row");
        const toggle = el("button", "btn ghost", ui.exploreShow);
        toggle.type = "button";
        const refresh = () => {
          kb.setPc("mark", show2 && sel ? sel.pcs : []);
          toggle.textContent = show2 ? ui.exploreHide : ui.exploreShow;
        };
        s.chords.forEach((c) => {
          const b = el("button", "btn", c.label);
          b.type = "button";
          b.onclick = () => {
            sel = c;
            row.querySelectorAll(".btn").forEach((x) => x.classList.remove("sel"));
            b.classList.add("sel");
            status.className = "status";
            status.textContent = ui.exploreTry;
            playItem({ midis: c.midis, mode: "chord" });
            refresh();
          };
          row.append(b);
        });
        stage.append(row);
        const kb = buildKeyboard(s, {
          onPress: (m) => {
            if (!sel) {
              status.className = "status";
              status.textContent = ui.explorePick;
              return;
            }
            const tone = sel.pcs.includes(pc(m));
            kb.flash(m, tone ? "ok" : "hint", 700);
            status.className = `status ${tone ? "good" : ""}`;
            status.textContent = tone ? ui.exploreTone : ui.exploreNon;
          }
        });
        toggle.onclick = () => {
          show2 = !show2;
          refresh();
        };
        stage.append(status, toggle);
      },
      // 5도권: 키를 탭하면 스케일 소리와 조표 정보가 나온다
      circle(s) {
        if (s.title) stage.append(el("h2", null, inline(s.title)));
        stage.append(el("div", "prose", rich(s.body)));
        const wrapC = el("div", "cof");
        const center = el("div", "cof-center", `<span class="muted small">${ui.cofHint}</span>`);
        wrapC.append(center);
        const nodes = [];
        const select = (node) => {
          nodes.forEach((n) => n.classList.remove("sel"));
          node.classList.add("sel");
        };
        s.keys.forEach((k, i2) => {
          const a = (-90 + 30 * i2) * Math.PI / 180;
          const mk = (label, r, cls, scaleRoot, scale, name) => {
            const b = el("button", `cof-node ${cls}`, label);
            b.type = "button";
            b.style.left = `${50 + r * Math.cos(a)}%`;
            b.style.top = `${50 + r * Math.sin(a)}%`;
            b.onclick = () => {
              select(b);
              const minorName = `${k.minor.replace(/m$/, "")}${s.labels.minor}`;
              const other = cls === "maj" ? `${ui.cofRelative}: ${minorName}` : `${ui.cofRelative}: ${k.major}${s.labels.major}`;
              center.innerHTML = `<strong>${name}</strong><span>${k.info}</span><span class="muted small">${other}</span>`;
              playItem({ midis: scale.map((o) => scaleRoot + o), mode: "seq" });
            };
            nodes.push(b);
            wrapC.append(b);
          };
          mk(k.major, 40, "maj", k.root, [0, 2, 4, 5, 7, 9, 11, 12], `${k.major}${s.labels.major}`);
          mk(k.minor, 25, "min", k.root - 3, [0, 2, 3, 5, 7, 8, 10, 12], `${k.minor.replace(/m$/, "")}${s.labels.minor}`);
        });
        stage.append(wrapC);
      },
      choice(s) {
        lockNext();
        stage.append(el("div", "prose q", rich(s.prompt)));
        if (s.play) {
          const again = el("button", "btn listen", `\u{1F50A} ${ui.listen}`);
          again.type = "button";
          again.onclick = () => playItem(s.play);
          stage.append(again);
          setTimeout(() => playItem(s.play), 250);
        }
        const list = el("div", "opts");
        const feedback = el("div", "feedback hidden");
        let answered = false;
        shuffle(s.options).forEach(({ v, i: orig }) => {
          const b = el("button", "opt", inline(v));
          b.type = "button";
          b.dataset.orig = orig;
          b.onclick = () => {
            if (answered) return;
            answered = true;
            const ok = orig === s.answer;
            b.classList.add(ok ? "right" : "wrong");
            list.querySelectorAll(".opt").forEach((o) => {
              o.disabled = true;
              if (+o.dataset.orig === s.answer) o.classList.add("right");
            });
            grade(s, ok, feedback);
          };
          list.append(b);
        });
        stage.append(list, feedback);
      },
      key(s) {
        lockNext();
        stage.append(el("div", "prose q", rich(s.prompt)));
        const feedback = el("div", "feedback hidden");
        let answered = false;
        const kb = buildKeyboard(s, {
          onPress: (m) => {
            if (answered) return;
            answered = true;
            const ok = pc(m) === s.answerPc;
            kb.flash(m, ok ? "ok" : "bad", 900);
            if (!ok) kb.setPc("hint", [s.answerPc]);
            grade(s, ok, feedback, ok ? "" : ui.keyAnswerHint);
          }
        });
        stage.append(feedback);
      }
    };
    function grade(s, ok, feedback, extra = "") {
      if (!s.retry) {
        if (ok) correct++;
        else queue.push({ ...s, retry: true });
        onAnswer?.(s, ok);
      }
      feedback.className = `feedback ${ok ? "good" : "bad"}`;
      const detail = [extra, s.explain].filter(Boolean).map(inline).join(" ");
      feedback.innerHTML = `<strong>${ok ? ui.correct : ui.wrong}</strong>${detail ? ` ${detail}` : ""}`;
      unlockNext();
      next.focus?.();
    }
    function finishReview() {
      fill.style.width = "100%";
      foot.remove();
      stage.innerHTML = "";
      const box = el("div", "result");
      box.append(el("div", "big", "\u{1F9E0}"));
      box.append(el("h2", null, ui.reviewDone));
      box.append(el("div", "score", `${correct}/${total}`));
      box.append(el("p", "muted", ui.reviewDoneSub));
      const actions = el("div", "col");
      if (onNext) {
        const more = el("button", "btn primary", ui.reviewMore);
        more.type = "button";
        more.onclick = onNext;
        actions.append(more);
      }
      const home = el("button", onNext ? "btn ghost" : "btn primary", ui.toList);
      home.type = "button";
      home.onclick = onExit;
      actions.append(home);
      box.append(actions);
      stage.append(box);
      window.scrollTo(0, 0);
    }
    function finish() {
      if (review) return finishReview();
      const pct = total ? Math.round(correct / total * 100) : 100;
      const passed = pct >= PASS_PERCENT;
      onFinish(pct);
      fill.style.width = "100%";
      foot.remove();
      stage.innerHTML = "";
      const box = el("div", "result");
      box.append(el("div", "big", passed ? "\u{1F389}" : "\u{1F4AA}"));
      box.append(el("h2", null, passed ? ui.resultPass : ui.resultFail));
      box.append(el("div", "score", `${pct}%`));
      box.append(el("p", "muted", t(passed ? ui.resultPassSub : ui.resultFailSub, { need: PASS_PERCENT })));
      const actions = el("div", "col");
      if (passed && onNext) {
        const b = el("button", "btn primary", ui.nextLesson);
        b.type = "button";
        b.onclick = onNext;
        actions.append(b);
      }
      const retry = el("button", passed ? "btn ghost" : "btn primary", ui.retry);
      retry.type = "button";
      retry.onclick = onRetry;
      const home = el("button", "btn ghost", ui.toList);
      home.type = "button";
      home.onclick = onExit;
      actions.append(retry, home);
      box.append(actions);
      stage.append(box);
      window.scrollTo(0, 0);
    }
    show();
  }

  // js/review.js
  var HOURS = [4, 24, 72, 168, 336, 720];
  var MAX_BOX = HOURS.length - 1;
  var MASTERED_BOX = 4;
  var SESSION_SIZE = 10;
  var H = 3600 * 1e3;
  var QUIZ2 = /* @__PURE__ */ new Set(["choice", "key"]);
  var isCardStep = (s) => QUIZ2.has(s.type);
  function hash(str) {
    let h = 5381;
    for (let i = 0; i < str.length; i++) h = (h << 5) + h + str.charCodeAt(i) | 0;
    return (h >>> 0).toString(36);
  }
  function cardId(lessonId, step) {
    const raw = JSON.stringify([step.type, step.prompt, step.options, step.play, step.answer, step.answerPc]);
    return `${lessonId}:${hash(raw)}`;
  }
  function buildIndex(units2) {
    const index = /* @__PURE__ */ new Map();
    for (const unit of units2) {
      for (const lesson of unit.lessons) {
        for (const step of lesson.steps) {
          if (isCardStep(step)) index.set(cardId(lesson.id, step), { lesson, step });
        }
      }
    }
    return index;
  }
  function recordAnswer(id, ok, now = Date.now()) {
    const c = getCards()[id];
    if (!c) {
      const box = ok ? 1 : 0;
      setCard(id, { box, due: now + HOURS[box] * H, seen: 1, miss: ok ? 0 : 1 });
      return;
    }
    const next = { ...c, seen: c.seen + 1 };
    if (ok) {
      if (c.due <= now) {
        next.box = Math.min(MAX_BOX, c.box + 1);
        next.due = now + HOURS[next.box] * H;
      }
    } else {
      next.box = Math.max(0, c.box - 2);
      next.due = now + HOURS[next.box] * H;
      next.miss = (c.miss || 0) + 1;
    }
    setCard(id, next);
  }
  function dueIds(index, now = Date.now()) {
    return Object.entries(getCards()).filter(([id, c]) => index.has(id) && c.due <= now).sort((a, b) => a[1].due - b[1].due).map(([id]) => id);
  }
  function stats(index, now = Date.now()) {
    const entries = Object.entries(getCards()).filter(([id]) => index.has(id));
    const upcoming = entries.filter(([, c]) => c.due > now).map(([, c]) => c.due);
    return {
      total: entries.length,
      due: entries.filter(([, c]) => c.due <= now).length,
      mastered: entries.filter(([, c]) => c.box >= MASTERED_BOX).length,
      nextDue: upcoming.length ? Math.min(...upcoming) : null
    };
  }
  function buildSession(index, now = Date.now()) {
    const ids = dueIds(index, now).slice(0, SESSION_SIZE);
    for (let i = ids.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ids[i], ids[j]] = [ids[j], ids[i]];
    }
    const steps = ids.map((id) => {
      const { lesson, step } = index.get(id);
      return { ...step, _id: id, tag: lesson.title };
    });
    return { id: "review", title: "", steps };
  }

  // js/views.js
  function whenText(ts) {
    const hours = Math.ceil((ts - Date.now()) / 36e5);
    if (hours <= 0) return ui.whenSoon;
    if (hours < 24) return t(ui.whenHours, { n: hours });
    return t(ui.whenDays, { n: Math.round(hours / 24) });
  }
  function reviewCard() {
    const s = stats(buildIndex(units));
    if (s.total === 0) return `<div class="review idle"><span class="muted small">${ui.reviewEmpty}</span></div>`;
    const summary = `<span class="muted small">${t(ui.reviewStats, { mastered: s.mastered, total: s.total })}</span>`;
    if (s.due > 0) {
      return `<a class="review due" href="#/review">
      <div><strong>${t(ui.reviewDueTitle, { n: s.due })}</strong>
      <span class="small">${t(ui.reviewDueSub, { max: SESSION_SIZE })}</span>${summary}</div>
      <span class="go">${ui.reviewStart} \u25B6</span>
    </a>`;
    }
    const next = s.nextDue ? `<span class="small">${t(ui.reviewNoneNext, { when: whenText(s.nextDue) })}</span>` : "";
    return `<div class="review idle"><div><strong>${ui.reviewNoneTitle}</strong>${next}${summary}</div></div>`;
  }
  var el2 = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  };
  function flatLessons() {
    return units.flatMap((unit) => unit.lessons.map((lesson) => ({ unit, lesson })));
  }
  function isUnlocked(lessonId) {
    if (settings.unlockAll) return true;
    const flat = flatLessons();
    const k = flat.findIndex((x) => x.lesson.id === lessonId);
    return k <= 0 || isPassed(flat[k - 1].lesson.id);
  }
  var header = (title, back) => `
  <header class="page-head">
    ${back ? `<a class="icon-btn" href="#/" aria-label="${ui.toList}">\u2190</a>` : ""}
    <h1>${title}</h1>
  </header>`;
  function renderHome(root2) {
    const flat = flatLessons();
    const current = flat.find((x) => !isPassed(x.lesson.id) && isUnlocked(x.lesson.id));
    root2.innerHTML = `
    <div class="page">
      <header class="hero">
        <div>
          <h1>${ui.appTitle}</h1>
          <p class="muted">${ui.tagline}</p>
        </div>
        <nav class="nav">
          <a class="icon-btn" href="#/glossary" aria-label="${ui.glossaryTitle}" title="${ui.glossaryTitle}">\u{1F4D6}</a>
          <a class="icon-btn" href="#/settings" aria-label="${ui.settingsTitle}" title="${ui.settingsTitle}">\u2699\uFE0F</a>
        </nav>
      </header>
      ${current ? `<a class="continue" href="#/lesson/${current.lesson.id}">
               <span class="muted small">${getResult(current.lesson.id) ? ui.continueLabel : ui.startLabel}</span>
               <strong>${current.lesson.title}</strong>
               <span class="go">\u25B6</span>
             </a>` : `<div class="continue done"><strong>${ui.allDone}</strong></div>`}
      ${reviewCard()}
      <a class="review pg-card" href="#/playground"><div><strong>\u{1F3B9} ${ui.pg.homeTitle}</strong><span class="small">${ui.pg.homeSub}</span></div><span class="go">\u25B6</span></a>
      <div class="units"></div>
    </div>`;
    const list = root2.querySelector(".units");
    units.forEach((unit, ui_) => {
      const done = unit.lessons.filter((l) => isPassed(l.id)).length;
      const card = el2("section", "unit");
      card.innerHTML = `
      <div class="unit-head">
        <span class="unit-no">${ui_}</span>
        <div>
          <h2>${unit.title}</h2>
          <p class="muted small">${unit.desc}</p>
        </div>
        <span class="chip">${t(ui.unitProgress, { done, total: unit.lessons.length })}</span>
      </div>`;
      const rows = el2("div", "lessons");
      unit.lessons.forEach((lesson, n) => {
        const open2 = isUnlocked(lesson.id);
        const passed = isPassed(lesson.id);
        const best = getResult(lesson.id)?.best;
        const row = el2(open2 ? "a" : "div", `lesson-row${open2 ? "" : " locked"}${passed ? " passed" : ""}`);
        if (open2) row.href = `#/lesson/${lesson.id}`;
        row.innerHTML = `
        <span class="state">${passed ? "\u2713" : open2 ? n + 1 : "\u{1F512}"}</span>
        <span class="ltitle">${lesson.title}<span class="muted small"> \xB7 ${t(ui.minutes, { n: lesson.minutes })}</span></span>
        ${best != null ? `<span class="muted small">${best}%</span>` : ""}`;
        rows.append(row);
      });
      card.append(rows);
      list.append(card);
    });
  }
  function renderGlossary(root2) {
    const ids = Object.keys(glossary).sort((a, b) => glossary[a].term.localeCompare(glossary[b].term, "ko"));
    root2.innerHTML = `<div class="page">${header(ui.glossaryTitle, true)}
    <p class="muted">${ui.glossaryIntro}</p>
    <div class="gloss"></div></div>`;
    const box = root2.querySelector(".gloss");
    ids.forEach((id) => {
      const b = el2("button", "gloss-row");
      b.type = "button";
      b.innerHTML = `<strong>${glossary[id].term}</strong><span class="muted small">${inline(glossary[id].desc).replace(/<[^>]+>/g, "").slice(0, 44)}\u2026</span>`;
      b.onclick = () => openTerm(id);
      box.append(b);
    });
  }
  function renderSettings(root2) {
    const modes = ["both", "solfege", "letter", "none"];
    root2.innerHTML = `<div class="page">${header(ui.settingsTitle, true)}
    <section class="card">
      <h3>${ui.labelModeTitle}</h3>
      <p class="muted small">${ui.labelModeDesc}</p>
      <div class="seg">${modes.map(
      (m) => `<label><input type="radio" name="lm" value="${m}" ${settings.labelMode === m ? "checked" : ""}><span>${ui.labelModes[m]}</span></label>`
    ).join("")}</div>
    </section>
    <section class="card">
      <label class="switch">
        <input type="checkbox" id="unlock" ${settings.unlockAll ? "checked" : ""}>
        <span><strong>${ui.unlockAll}</strong><br><span class="muted small">${ui.unlockAllDesc}</span></span>
      </label>
    </section>
    <section class="card">
      <h3>${ui.resetTitle}</h3>
      <button type="button" class="btn danger" id="reset">${ui.resetButton}</button>
    </section>
  </div>`;
    root2.querySelectorAll("input[name=lm]").forEach(
      (r) => r.addEventListener("change", () => {
        settings.labelMode = r.value;
        saveSettings();
      })
    );
    root2.querySelector("#unlock").addEventListener("change", (e) => {
      settings.unlockAll = e.target.checked;
      saveSettings();
    });
    root2.querySelector("#reset").addEventListener("click", () => {
      if (confirm(ui.resetConfirm)) {
        resetProgress();
        location.hash = "#/";
      }
    });
  }

  // js/melody.js
  var DURATIONS = [0.5, 1, 1.5, 2, 3, 4];
  var WHITE = [0, 2, 4, 5, 7, 9, 11];
  var isWhite = (m) => WHITE.includes((m % 12 + 12) % 12);
  var tonicRef = (tonicPc2) => 60 + (tonicPc2 > 6 ? tonicPc2 - 12 : tonicPc2);
  function melodyWindow(tonicPc2) {
    const ref = tonicRef(tonicPc2);
    let lo = ref - 3;
    while (!isWhite(lo)) lo--;
    let hi = ref + 21;
    while (!isWhite(hi)) hi++;
    return { ref, lo, hi, loRel: lo - ref, hiRel: hi - ref };
  }
  var keyPcs = (mode) => mode === "major" ? [0, 2, 4, 5, 7, 9, 11] : [0, 2, 3, 5, 7, 8, 9, 10, 11];
  var scalePcs = (mode) => mode === "major" ? [0, 2, 4, 5, 7, 9, 11] : [0, 2, 3, 5, 7, 8, 10];
  var mod12 = (n) => (n % 12 + 12) % 12;
  var sortMel = (mel) => [...mel].sort((a, b) => a.at - b.at);
  var overlaps = (n, at, len) => n.at < at + len && n.at + n.len > at;
  function putNote(mel, at, len, rel) {
    const l = Math.min(len, 4 - at);
    if (l <= 0) return sortMel(mel);
    return sortMel([...mel.filter((n) => !overlaps(n, at, l)), { at, len: l, rel }]);
  }
  function putRest(mel, at, len) {
    const l = Math.min(len, 4 - at);
    return sortMel(mel.filter((n) => !overlaps(n, at, l)));
  }
  function advance(cur, len, bars) {
    let at = cur.at + len;
    let bar = cur.bar;
    if (at >= 4) {
      if (bar + 1 < bars) {
        bar += 1;
        at = 0;
      } else {
        at = 4;
      }
    }
    return { bar, at };
  }
  function eraseBefore(prog2, cur) {
    const abs = cur.bar * 4 + cur.at;
    let found = null;
    prog2.forEach((c, bar) => {
      (c.mel || []).forEach((n, idx) => {
        const end = bar * 4 + n.at + n.len;
        if (end <= abs && (!found || end > found.end)) found = { bar, idx, end, at: n.at };
      });
    });
    if (!found) return { prog: prog2, cur };
    const next = prog2.map((c, i) => i === found.bar ? { ...c, mel: c.mel.filter((_, k) => k !== found.idx) } : c);
    return { prog: next, cur: { bar: found.bar, at: found.at } };
  }
  var TONE_NAMES = ["root", "third", "fifth", "seventh"];
  var TENSIONS = {
    "": { 2: "9", 9: "13", 6: "#11" },
    maj7: { 2: "9", 9: "13", 6: "#11" },
    m: { 2: "9", 5: "11" },
    m7: { 2: "9", 5: "11" },
    7: { 2: "9", 9: "13" },
    "m7\u266D5": { 5: "11" },
    dim: {}
  };
  function chordInfo(chord) {
    const tones = /* @__PURE__ */ new Map();
    CHORD_INTERVALS[chord.suf].forEach((iv, i) => tones.set(mod12(chord.off + iv), i));
    return { tones, tensions: TENSIONS[chord.suf] || {} };
  }
  function flatten(prog2) {
    const list = [];
    prog2.forEach((chord, bar) => {
      (chord.mel || []).forEach((note, idx) => {
        list.push({ bar, idx, note, chord, start: bar * 4 + note.at, end: bar * 4 + note.at + note.len });
      });
    });
    return list.sort((a, b) => a.start - b.start);
  }
  var isChordTone = (e) => chordInfo(e.chord).tones.has(mod12(e.note.rel));
  function classify(prog2, mode) {
    const list = flatten(prog2);
    const out = prog2.map((c) => (c.mel || []).map(() => null));
    const inKey = keyPcs(mode);
    list.forEach((e, i) => {
      const { tones, tensions } = chordInfo(e.chord);
      const pc2 = mod12(e.note.rel);
      if (tones.has(pc2)) {
        out[e.bar][e.idx] = { kind: "chord", tone: TONE_NAMES[tones.get(pc2)] };
        return;
      }
      const prev = list[i - 1] && list[i - 1].end === e.start ? list[i - 1] : null;
      const next = list[i + 1] && list[i + 1].start === e.end ? list[i + 1] : null;
      const x = e.note.rel;
      let kind = null;
      if (prev && next && isChordTone(prev) && isChordTone(next)) {
        const p = prev.note.rel;
        const n = next.note.rel;
        if (p === n && Math.abs(x - p) <= 2) kind = "neighbor";
        else if ((p < x && x < n || p > x && x > n) && Math.abs(x - p) <= 2 && Math.abs(n - x) <= 2) kind = "passing";
      }
      if (!kind && prev && next && prev.note.rel === x && isChordTone(prev) && prev.bar !== e.bar && isChordTone(next) && next.note.rel < x && x - next.note.rel <= 2) {
        kind = "suspension";
      }
      if (kind) {
        out[e.bar][e.idx] = { kind };
        return;
      }
      const tension = tensions[mod12(pc2 - e.chord.off)];
      if (tension) out[e.bar][e.idx] = { kind: "tension", tension };
      else if (inKey.includes(pc2)) out[e.bar][e.idx] = { kind: "nonchord" };
      else out[e.bar][e.idx] = { kind: "out" };
    });
    return out;
  }
  var GROUP = { chord: "chord", tension: "tension", passing: "nonchord", neighbor: "nonchord", suspension: "nonchord", nonchord: "nonchord", out: "out" };
  function summarize(prog2, classes) {
    const counts = { chord: 0, tension: 0, nonchord: 0, out: 0 };
    const list = flatten(prog2);
    list.forEach((e) => {
      counts[GROUP[classes[e.bar][e.idx].kind]]++;
    });
    const total = list.length;
    const hints = [];
    if (!total) return { counts, total, hints };
    list.forEach((e) => {
      const k = classes[e.bar][e.idx].kind;
      const strong = (e.note.at === 0 || e.note.at === 2) && e.note.len >= 1;
      if (strong && k !== "chord" && k !== "tension" && k !== "suspension" && hints.filter((h) => h.code === "strong").length < 1) {
        hints.push({ code: "strong", bar: e.bar + 1, beat: e.note.at + 1 });
      }
    });
    const firstOut = list.find((e) => classes[e.bar][e.idx].kind === "out");
    if (firstOut) hints.push({ code: "out", bar: firstOut.bar + 1 });
    const last = list[list.length - 1];
    if (classes[last.bar][last.idx].kind !== "chord") hints.push({ code: "end" });
    if (!hints.length) hints.push({ code: counts.chord === total ? "allChord" : "good" });
    return { counts, total, hints: hints.slice(0, 3) };
  }
  var TEMPLATES = [[1, 1, 1, 1], [2, 1, 1], [1, 1, 2], [1.5, 0.5, 1, 1], [0.5, 0.5, 1, 1, 1], [2, 2], [1, 0.5, 0.5, 1, 1], [1, 1, 1, 0.5, 0.5]];
  var GEN_LO = 0;
  var GEN_HI = 16;
  var GEN_CENTER = 7;
  function generateMelody(prog2, mode, rnd = Math.random) {
    const sc = scalePcs(mode);
    const range = [];
    for (let r = GEN_LO; r <= GEN_HI; r++) range.push(r);
    const scaleRels = range.filter((r) => sc.includes(mod12(r)));
    const pick = (arr) => arr[Math.floor(rnd() * arr.length)];
    const nearestTones = (chord, target) => range.filter((r) => chordInfo(chord).tones.has(mod12(r))).sort((a, b) => Math.abs(a - target) - Math.abs(b - target) || a - b);
    const stepFrom = (r, dir) => dir > 0 ? scaleRels.find((x) => x > r) : [...scaleRels].reverse().find((x) => x < r);
    const choose = (cands, prev) => {
      const pool = cands.filter((c) => c !== prev).slice(0, 3);
      const use = pool.length ? pool : cands.slice(0, 1);
      const w = rnd();
      return use[w < 0.5 ? 0 : w < 0.8 ? Math.min(1, use.length - 1) : Math.min(2, use.length - 1)];
    };
    let prevAnchor = null;
    return prog2.map((chord, bar) => {
      const last = bar === prog2.length - 1;
      const tmpl = last ? pick([[4], [2, 2]]) : pick(TEMPLATES);
      let at = 0;
      const notes2 = tmpl.map((len) => {
        const n = { at, len, rel: null };
        at += len;
        return n;
      });
      const strong = (n) => n.at === 0 || n.at === 2 || n.len >= 1.5;
      notes2.forEach((n, i) => {
        if (!strong(n)) return;
        const target = prevAnchor ?? GEN_CENTER;
        let r;
        if (last && i === notes2.length - 1) {
          const tonics = [0, 12].filter((t2) => chordInfo(chord).tones.has(mod12(t2)));
          r = tonics.length ? tonics.sort((a, b) => Math.abs(a - target) - Math.abs(b - target))[0] : nearestTones(chord, target)[0];
        } else {
          r = choose(nearestTones(chord, target), prevAnchor);
        }
        n.rel = r;
        prevAnchor = r;
      });
      notes2.forEach((n, i) => {
        if (n.rel != null) return;
        const p = notes2[i - 1]?.rel ?? prevAnchor;
        const nxt = notes2.slice(i + 1).find((m) => m.rel != null);
        if (nxt && nxt.rel === p) {
          const dir = rnd() < 0.7 ? 1 : -1;
          n.rel = stepFrom(p, dir) ?? stepFrom(p, -dir);
        } else if (nxt) {
          const dir = nxt.rel > p ? 1 : -1;
          const mid = stepFrom(p, dir);
          const between = mid != null && (dir > 0 ? mid < nxt.rel : mid > nxt.rel);
          const nextStep = between ? stepFrom(mid, dir) : null;
          n.rel = between && nextStep === nxt.rel ? mid : choose(nearestTones(chord, p), p);
        } else {
          n.rel = choose(nearestTones(chord, p), p);
        }
      });
      return notes2.map(({ at: a, len, rel }) => ({ at: a, len, rel }));
    });
  }
  function scaleStep(rel, dir, mode, loRel, hiRel) {
    const sc = scalePcs(mode);
    for (let r = rel + dir; r >= loRel && r <= hiRel; r += dir) if (sc.includes(mod12(r))) return r;
    return rel;
  }

  // js/playground.js
  var MAX_BARS = 16;
  var MAX_SAVED = 30;
  var HISTORY = 60;
  var ROLL_H = 116;
  var PILL_H = 20;
  var C2 = (off, suf, num, fn) => ({ off, suf, num, fn });
  function palette(mode, sev) {
    const s = (a, b) => sev ? b : a;
    if (mode === "major") {
      return {
        inKey: [
          C2(0, s("", "maj7"), s("I", "Imaj7"), "T"),
          C2(2, s("m", "m7"), s("IIm", "IIm7"), "SD"),
          C2(4, s("m", "m7"), s("IIIm", "IIIm7"), "T"),
          C2(5, s("", "maj7"), s("IV", "IVmaj7"), "SD"),
          C2(7, s("", "7"), s("V", "V7"), "D"),
          C2(9, s("m", "m7"), s("VIm", "VIm7"), "T"),
          C2(11, s("dim", "m7\u266D5"), s("VIIdim", "VIIm7\u266D5"), "D")
        ],
        outKey: [
          C2(9, "7", "V7/II", "X"),
          C2(11, "7", "V7/III", "X"),
          C2(0, "7", "V7/IV", "X"),
          C2(2, "7", "V7/V", "X"),
          C2(4, "7", "V7/VI", "X"),
          C2(5, s("m", "m7"), s("IVm", "IVm7"), "X"),
          C2(10, s("", "7"), s("\u266DVII", "\u266DVII7"), "X"),
          C2(8, s("", "maj7"), s("\u266DVI", "\u266DVImaj7"), "X"),
          C2(3, s("", "maj7"), s("\u266DIII", "\u266DIIImaj7"), "X"),
          C2(1, "7", "\u266DII7", "X")
        ]
      };
    }
    return {
      inKey: [
        C2(0, s("m", "m7"), s("Im", "Im7"), "T"),
        C2(2, s("dim", "m7\u266D5"), s("IIdim", "IIm7\u266D5"), "SD"),
        C2(3, s("", "maj7"), s("\u266DIII", "\u266DIIImaj7"), "T"),
        C2(5, s("m", "m7"), s("IVm", "IVm7"), "SD"),
        C2(7, s("m", "m7"), s("Vm", "Vm7"), "D"),
        C2(8, s("", "maj7"), s("\u266DVI", "\u266DVImaj7"), "SD"),
        C2(10, s("", "7"), s("\u266DVII", "\u266DVII7"), "D"),
        C2(7, s("", "7"), s("V", "V7"), "D")
        // 하모닉 마이너의 V
      ],
      outKey: [
        C2(0, s("", "maj7"), s("I", "Imaj7"), "X"),
        C2(5, s("", "maj7"), s("IV", "IVmaj7"), "X"),
        C2(0, "7", "V7/IV", "X"),
        C2(10, "7", "V7/\u266DIII", "X"),
        C2(3, "7", "V7/\u266DVI", "X"),
        C2(1, "7", "\u266DII7", "X")
      ]
    };
  }
  var PRESETS = {
    major: [
      { id: "pop", chords: [C2(0, "", "I", "T"), C2(7, "", "V", "D"), C2(9, "m", "VIm", "T"), C2(5, "", "IV", "SD")] },
      { id: "251", chords: [C2(2, "m7", "IIm7", "SD"), C2(7, "7", "V7", "D"), C2(0, "maj7", "Imaj7", "T")] },
      { id: "1625", chords: [C2(0, "maj7", "Imaj7", "T"), C2(9, "m7", "VIm7", "T"), C2(2, "m7", "IIm7", "SD"), C2(7, "7", "V7", "D")] },
      { id: "36251", chords: [C2(4, "m7", "IIIm7", "T"), C2(9, "m7", "VIm7", "T"), C2(2, "m7", "IIm7", "SD"), C2(7, "7", "V7", "D"), C2(0, "maj7", "Imaj7", "T")] },
      { id: "canon", chords: [C2(0, "", "I", "T"), C2(7, "", "V", "D"), C2(9, "m", "VIm", "T"), C2(4, "m", "IIIm", "T"), C2(5, "", "IV", "SD"), C2(0, "", "I", "T"), C2(5, "", "IV", "SD"), C2(7, "", "V", "D")] },
      { id: "secondary", chords: [C2(0, "maj7", "Imaj7", "T"), C2(4, "7", "V7/VI", "X"), C2(9, "m7", "VIm7", "T"), C2(2, "m7", "IIm7", "SD"), C2(7, "7", "V7", "D"), C2(0, "maj7", "Imaj7", "T")] },
      { id: "borrowed", chords: [C2(0, "", "I", "T"), C2(5, "", "IV", "SD"), C2(5, "m", "IVm", "X"), C2(0, "", "I", "T")] },
      { id: "tritone", chords: [C2(2, "m7", "IIm7", "SD"), C2(1, "7", "\u266DII7", "X"), C2(0, "maj7", "Imaj7", "T")] }
    ],
    minor: [
      { id: "m_pop", chords: [C2(0, "m", "Im", "T"), C2(8, "", "\u266DVI", "SD"), C2(3, "", "\u266DIII", "T"), C2(10, "", "\u266DVII", "D")] },
      { id: "m251", chords: [C2(2, "m7\u266D5", "IIm7\u266D5", "SD"), C2(7, "7", "V7", "D"), C2(0, "m7", "Im7", "T")] },
      { id: "andalus", chords: [C2(0, "m", "Im", "T"), C2(10, "", "\u266DVII", "D"), C2(8, "", "\u266DVI", "SD"), C2(7, "", "V", "D")] },
      { id: "m_iv", chords: [C2(0, "m7", "Im7", "T"), C2(5, "m7", "IVm7", "SD"), C2(7, "7", "V7", "D"), C2(0, "m7", "Im7", "T")] }
    ]
  };
  var DEFAULTS = {
    key: "C",
    mode: "major",
    sevenths: true,
    voicing: "smooth",
    bass: true,
    pattern: "block",
    bpm: 90,
    loop: true,
    melSound: true,
    showTones: true,
    prog: [],
    saved: []
  };
  var el3 = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  };
  var esc2 = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  var clone = (x) => JSON.parse(JSON.stringify(x));
  var mod122 = (n) => (n % 12 + 12) % 12;
  var keysOf = (mode) => mode === "major" ? MAJOR_KEYS : MINOR_KEYS;
  function convertKey(key2, toMode) {
    const list = keysOf(toMode);
    return list.find((k) => tonicPc(k) === tonicPc(key2)) || list[0];
  }
  var playback = null;
  function stopPlayground() {
    if (!playback) return;
    playback.stopped = true;
    playback.timers.forEach(clearTimeout);
    const done = playback.onStop;
    playback = null;
    done?.();
  }
  function renderPlayground(root2) {
    stopPlayground();
    const stored = getPlayground() || {};
    const S = { ...DEFAULTS, ...stored, prog: clone(stored.prog || []), saved: clone(stored.saved || []) };
    S.prog.forEach((c) => c.mel = c.mel || []);
    if (!keysOf(S.mode).includes(S.key)) S.key = keysOf(S.mode)[0];
    let sel = -1;
    let nowIdx = -1;
    let history = [];
    let cur = { bar: 0, at: 0 };
    let selNote = null;
    let dur = 1;
    let mkb = null;
    const persist = () => {
      const { key: key2, mode, sevenths, voicing, bass, pattern, bpm, loop, melSound, showTones, prog: prog2, saved } = S;
      setPlayground({ key: key2, mode, sevenths, voicing, bass, pattern, bpm, loop, melSound, showTones, prog: prog2, saved });
    };
    const pushHistory = () => {
      history.push(JSON.stringify(S.prog));
      if (history.length > HISTORY) history.shift();
    };
    const tonic = () => tonicPc(S.key);
    const win = () => melodyWindow(tonic());
    const voicings = () => S.voicing === "smooth" ? voiceLead(S.prog, tonic()) : rootVoicings(S.prog, tonic());
    const nameOf = (c) => chordName(S.key, c);
    const keyLabel = (key2 = S.key, mode = S.mode) => t(ui.pg.keyLabel, { key: key2, mode: mode === "major" ? ui.pg.major : ui.pg.minor });
    const noteName = (rel) => spell(S.key, mod122(rel));
    const chordPcs = (c) => CHORD_INTERVALS[c.suf].map((iv) => (tonic() + c.off + iv) % 12);
    const seg = (name, options, value) => `<div class="seg pg-seg">${options.map(([v, label]) => `<label><input type="radio" name="${name}" value="${v}" ${String(value) === String(v) ? "checked" : ""}><span>${label}</span></label>`).join("")}</div>`;
    const M = ui.pg.mel;
    root2.innerHTML = `
    <div class="page pg">
      <header class="page-head">
        <a class="icon-btn" href="#/" aria-label="${ui.toList}">\u2190</a>
        <h1>${ui.pg.title}</h1>
      </header>
      <p class="muted">${ui.pg.intro}</p>

      <section class="card pg-controls">
        <div class="pg-row"><label for="pg-key">${ui.pg.key}</label>
          <div class="pg-inline"><select id="pg-key"></select>${seg("pg-mode", [["major", ui.pg.major], ["minor", ui.pg.minor]], S.mode)}</div></div>
        <div class="pg-row"><label>${ui.pg.chordType}</label>${seg("pg-sev", [["0", ui.pg.triads], ["1", ui.pg.sevenths]], S.sevenths ? 1 : 0)}</div>
        <div class="pg-row"><label>${ui.pg.voicing}</label>${seg("pg-voicing", [["root", ui.pg.voicingRoot], ["smooth", ui.pg.voicingSmooth]], S.voicing)}</div>
        <p class="muted small pg-note">${ui.pg.voicingHint}</p>
        <div class="pg-row"><label for="pg-pattern">${ui.pg.pattern}</label>
          <div class="pg-inline"><select id="pg-pattern">${PATTERNS.map((p) => `<option value="${p}" ${S.pattern === p ? "selected" : ""}>${ui.pg.patterns[p]}</option>`).join("")}</select>
          <label class="pg-check"><input type="checkbox" id="pg-bass" ${S.bass ? "checked" : ""}> ${ui.pg.bass}</label></div></div>
        <div class="pg-row"><label for="pg-bpm">${ui.pg.tempo}</label>
          <div class="pg-inline"><input type="range" id="pg-bpm" min="50" max="160" step="2" value="${S.bpm}"><span id="pg-bpm-label" class="muted small"></span></div></div>
      </section>

      <section class="pg-section">
        <div class="pg-title"><h3>${ui.pg.progTitle}</h3><span class="muted small">${ui.pg.progHint}</span></div>
        <div class="pg-prog" id="pg-prog" role="list"></div>
        <p class="muted small" id="pg-empty"></p>
        <div class="pg-slotbar" id="pg-slotbar">
          <button type="button" class="btn ghost" data-act="left">${ui.pg.left}</button>
          <button type="button" class="btn ghost" data-act="right">${ui.pg.right}</button>
          <button type="button" class="btn ghost" data-act="dup">${ui.pg.dup}</button>
          <button type="button" class="btn ghost" data-act="del">${ui.pg.del}</button>
        </div>
        <div class="pg-transport">
          <button type="button" class="btn primary" id="pg-play">\u25B6 ${ui.pg.play}</button>
          <label class="pg-check"><input type="checkbox" id="pg-loop" ${S.loop ? "checked" : ""}> ${ui.pg.loop}</label>
        </div>
        <div class="pg-tools">
          <button type="button" class="btn ghost" id="pg-undo">${ui.pg.undo}</button>
          <button type="button" class="btn ghost" id="pg-clear">${ui.pg.clear}</button>
          <button type="button" class="btn ghost" id="pg-copy">${ui.pg.copy}</button>
        </div>
        <div class="pg-kb" id="pg-kb"></div>
      </section>

      <section class="pg-section">
        <div class="pg-title"><h3>${ui.pg.inKey}</h3></div>
        <div class="pg-palette" id="pg-in"></div>
        <div class="pg-title"><h3>${ui.pg.outKey}</h3></div>
        <p class="muted small">${ui.pg.outKeyHint}</p>
        <div class="pg-palette" id="pg-out"></div>
        <p class="muted small pg-legend">${ui.pg.legend}:
          <button type="button" class="term" data-term="tonic-chord"><span class="dot-fn fn-T"></span>${ui.pg.fnT}</button>
          <button type="button" class="term" data-term="subdominant"><span class="dot-fn fn-SD"></span>${ui.pg.fnSD}</button>
          <button type="button" class="term" data-term="dominant"><span class="dot-fn fn-D"></span>${ui.pg.fnD}</button>
          <span><span class="dot-fn fn-X"></span>${ui.pg.fnX}</span></p>
      </section>

      <section class="pg-section" id="pg-melsec">
        <div class="pg-title"><h3>${M.title}</h3></div>
        <p class="muted small">${M.hint}</p>
        <p class="muted small" id="pg-mel-empty"></p>
        <div class="mel" id="pg-mel"></div>
        <p class="muted small" id="pg-cursor"></p>
        <div class="mel-ctrl" id="pg-melctrl">
          <div class="mel-dur" id="pg-dur">${DURATIONS.map((d) => `<button type="button" class="btn ghost" data-dur="${d}">${M.durations[d]}</button>`).join("")}</div>
          <div class="mel-acts">
            <button type="button" class="btn ghost" id="pg-rest">${M.rest}</button>
            <button type="button" class="btn ghost" id="pg-back">${M.back}</button>
            <button type="button" class="btn ghost" id="pg-barclr">${M.clearBar}</button>
            <button type="button" class="btn ghost" id="pg-melclr">${M.clearAll}</button>
          </div>
          <div class="mel-acts hidden" id="pg-noteact">
            <button type="button" class="btn ghost" data-note="up">${M.noteUp}</button>
            <button type="button" class="btn ghost" data-note="down">${M.noteDown}</button>
            <button type="button" class="btn ghost" data-note="del">${M.noteDelete}</button>
          </div>
        </div>
        <div class="status" id="pg-note-info"></div>
        <div class="pg-mkb" id="pg-mkb"></div>
        <div class="mel-opts">
          <button type="button" class="btn primary" id="pg-play2">\u25B6 ${ui.pg.play}</button>
          <button type="button" class="btn" id="pg-gen" title="${esc2(M.generateHint)}">${M.generate}</button>
          <label class="pg-check"><input type="checkbox" id="pg-tones" ${S.showTones ? "checked" : ""}> ${M.showTones}</label>
          <label class="pg-check"><input type="checkbox" id="pg-melsound" ${S.melSound ? "checked" : ""}> ${M.sound}</label>
        </div>
        <p class="muted small">${M.generateHint}</p>
        <div class="card mel-analysis" id="pg-analysis"></div>
      </section>

      <section class="pg-section">
        <div class="pg-title"><h3>${ui.pg.presetsTitle}</h3></div>
        <div class="pg-presets" id="pg-presets"></div>
      </section>

      <section class="pg-section">
        <div class="pg-title"><h3>${ui.pg.saveTitle}</h3></div>
        <div class="pg-save"><input type="text" id="pg-name" maxlength="30"><button type="button" class="btn" id="pg-save">${ui.pg.saveButton}</button></div>
        <p class="muted small" id="pg-save-msg"></p>
        <div class="pg-title"><h3>${ui.pg.savedTitle}</h3></div>
        <div class="pg-saved" id="pg-saved"></div>
      </section>
    </div>`;
    const $ = (id) => root2.querySelector(`#${id}`);
    const progEl = $("pg-prog");
    const playBtns = [$("pg-play"), $("pg-play2")];
    const keyboard = createKeyboard($("pg-kb"), {
      lo: RANGE.lo,
      hi: RANGE.hi,
      labelMode: settings.labelMode,
      onPress: (m) => {
        playNote(m);
        keyboard.flash(m, "on", 300);
      }
    });
    function drawKeySelect() {
      $("pg-key").innerHTML = keysOf(S.mode).map((k) => `<option value="${esc2(k)}" ${k === S.key ? "selected" : ""}>${esc2(k)} ${S.mode === "major" ? ui.pg.major : ui.pg.minor}</option>`).join("");
    }
    function chip(c) {
      const b = el3("button", `chip fn-${c.fn}`);
      b.type = "button";
      b.innerHTML = `<strong>${esc2(nameOf(c))}</strong><span>${esc2(c.num)}</span>`;
      b.onclick = () => addChord(c);
      return b;
    }
    function drawPalette() {
      const p = palette(S.mode, S.sevenths);
      const inEl = $("pg-in");
      const outEl = $("pg-out");
      inEl.innerHTML = "";
      outEl.innerHTML = "";
      p.inKey.forEach((c) => inEl.append(chip(c)));
      p.outKey.forEach((c) => outEl.append(chip(c)));
    }
    function drawPresets() {
      const box = $("pg-presets");
      box.innerHTML = "";
      PRESETS[S.mode].forEach((p) => {
        const b = el3("button", "btn ghost preset", esc2(ui.pg.presets[p.id]));
        b.type = "button";
        b.onclick = () => {
          pushHistory();
          S.prog = p.chords.map((c) => ({ ...c, mel: [] }));
          sel = -1;
          cur = { bar: 0, at: 0 };
          selNote = null;
          persist();
          drawProg();
          startPlayback(true);
        };
        box.append(b);
      });
    }
    function drawProg() {
      progEl.innerHTML = "";
      S.prog.forEach((c, i) => {
        const b = el3("button", `slot fn-${c.fn}${i === sel ? " sel" : ""}${i === nowIdx ? " now" : ""}`);
        b.type = "button";
        b.dataset.bar = i;
        b.setAttribute("role", "listitem");
        b.innerHTML = `<span class="no">${i + 1}</span><strong>${esc2(nameOf(c))}</strong><small>${esc2(c.num)}</small>`;
        b.onclick = () => selectSlot(i);
        progEl.append(b);
      });
      $("pg-empty").textContent = S.prog.length ? ui.pg.slotHint : ui.pg.empty;
      const bar = $("pg-slotbar");
      bar.classList.toggle("hidden", sel < 0 || !S.prog.length);
      bar.querySelector("[data-act=left]").disabled = sel <= 0;
      bar.querySelector("[data-act=right]").disabled = sel < 0 || sel >= S.prog.length - 1;
      $("pg-undo").disabled = history.length === 0;
      $("pg-clear").disabled = !S.prog.length;
      $("pg-copy").disabled = !S.prog.length;
      playBtns.forEach((b) => b.disabled = !S.prog.length);
      updateKeyboard();
      drawMelody();
    }
    function updateKeyboard() {
      const idx = nowIdx >= 0 ? nowIdx : sel;
      keyboard.clear();
      if (idx >= 0 && S.prog[idx]) keyboard.set(nowIdx >= 0 ? "on" : "mark", voicings()[idx]);
    }
    function buildMelodyKeyboard() {
      const w = win();
      $("pg-mkb").innerHTML = "";
      mkb = createKeyboard($("pg-mkb"), {
        lo: w.lo,
        hi: w.hi,
        labelMode: settings.labelMode,
        onPress: (m) => {
          playNote(m);
          const rel = m - w.ref;
          const c = S.prog[Math.min(cur.bar, S.prog.length - 1)];
          mkb.flash(m, c && chordPcs(c).includes(mod122(m)) ? "ok" : "hint", 450);
          enterNote(rel);
        }
      });
      updateMelodyHint();
    }
    function updateMelodyHint() {
      if (!mkb) return;
      const idx = nowIdx >= 0 ? nowIdx : Math.min(cur.bar, S.prog.length - 1);
      const c = S.prog[idx];
      mkb.setPc("mark", S.showTones && c ? chordPcs(c) : []);
    }
    const classes = () => classify(S.prog, S.mode);
    function describe(bar, idx, cls = classes()) {
      const c = S.prog[bar];
      const n = c.mel[idx];
      const k = cls[bar][idx];
      const params = { chord: nameOf(c), tone: ui.pg.mel.tones[k.tone] || "", tension: ui.pg.mel.tensions[k.tension] || "" };
      return `<strong>${esc2(noteName(n.rel))}</strong> \xB7 ${M.kinds[k.kind]} \u2014 ${esc2(t(M.details[k.kind], params))}`;
    }
    function setInfo(html, kind) {
      const e = $("pg-note-info");
      e.className = `status${kind ? ` k-${kind}` : ""}`;
      e.innerHTML = html || "";
    }
    function drawCursorText() {
      const e = $("pg-cursor");
      if (!S.prog.length) {
        e.textContent = "";
        return;
      }
      const b = Math.min(cur.bar, S.prog.length - 1) + 1;
      e.textContent = cur.at >= 4 ? t(M.cursorEnd, { bar: b }) : `${t(M.cursor, { bar: b, beat: cur.at + 1 })} \xB7 ${M.tapHint}`;
    }
    function drawMelody() {
      const lane = $("pg-mel");
      const scroll = lane.scrollLeft;
      const has = S.prog.length > 0;
      $("pg-melsec").classList.toggle("empty", !has);
      $("pg-mel-empty").textContent = has ? "" : M.empty;
      $("pg-melctrl").classList.toggle("hidden", !has);
      $("pg-mkb").classList.toggle("hidden", !has);
      root2.querySelector(".mel-opts").classList.toggle("hidden", !has);
      $("pg-analysis").classList.toggle("hidden", !has);
      if (!has) {
        lane.innerHTML = "";
        $("pg-cursor").textContent = "";
        setInfo("");
        return;
      }
      cur.bar = Math.min(cur.bar, S.prog.length - 1);
      const cls = classes();
      const w = win();
      lane.innerHTML = "";
      S.prog.forEach((c, bar) => {
        const barEl = el3("div", `mel-bar fn-${c.fn}${bar === cur.bar ? " cur" : ""}${bar === nowIdx ? " now" : ""}`);
        barEl.dataset.bar = bar;
        barEl.innerHTML = `<div class="mel-head"><strong>${esc2(nameOf(c))}</strong><small>${esc2(c.num)}</small></div>`;
        const roll = el3("div", "mel-roll");
        roll.dataset.bar = bar;
        roll.style.height = `${ROLL_H}px`;
        c.mel.forEach((n, idx) => {
          const k = cls[bar][idx].kind;
          const p = el3("button", `note k-${k}${selNote && selNote.bar === bar && selNote.idx === idx ? " sel" : ""}`, esc2(noteName(n.rel)));
          p.type = "button";
          p.dataset.bar = bar;
          p.dataset.idx = idx;
          p.title = M.kinds[k];
          const y = (w.hiRel - n.rel) / (w.hiRel - w.loRel) * (ROLL_H - PILL_H);
          p.style.left = `${n.at / 4 * 100}%`;
          p.style.width = `calc(${n.len / 4 * 100}% - 2px)`;
          p.style.top = `${Math.max(0, Math.min(ROLL_H - PILL_H, y))}px`;
          roll.append(p);
        });
        if (bar === cur.bar) {
          const line = el3("div", "mel-cursor");
          line.style.left = `${Math.min(cur.at, 4) / 4 * 100}%`;
          roll.append(line);
        }
        barEl.append(roll);
        lane.append(barEl);
      });
      lane.scrollLeft = scroll;
      drawCursorText();
      drawAnalysis(cls);
      updateMelodyHint();
      $("pg-noteact").classList.toggle("hidden", !selNote);
    }
    function drawAnalysis(cls = classes()) {
      const box = $("pg-analysis");
      const sum = summarize(S.prog, cls);
      if (!sum.total) {
        box.innerHTML = `<h3>${M.analysisTitle}</h3><p class="muted small">${M.analysisEmpty}</p>`;
        return;
      }
      const pct = (n) => Math.round(n / sum.total * 100);
      const groups = ["chord", "tension", "nonchord", "out"];
      box.innerHTML = `
      <h3>${M.analysisTitle}</h3>
      <div class="ratio" role="img" aria-label="${groups.map((g) => `${M.groups[g]} ${pct(sum.counts[g])}%`).join(", ")}">
        ${groups.filter((g) => sum.counts[g]).map((g) => `<span class="k-${g}" style="flex:${sum.counts[g]}"></span>`).join("")}
      </div>
      <div class="ratio-legend">${groups.map((g) => `<span><i class="k-${g}"></i>${M.groups[g]} ${pct(sum.counts[g])}% <small class="muted">(${sum.counts[g]})</small></span>`).join("")}</div>
      <ul class="tips">${sum.hints.map((h) => `<li>${esc2(t(M.hints[h.code], { bar: h.bar, beat: h.beat }))}</li>`).join("")}</ul>`;
    }
    function drawSaved() {
      const box = $("pg-saved");
      box.innerHTML = "";
      if (!S.saved.length) {
        box.append(el3("p", "muted small", ui.pg.noSaved));
        return;
      }
      S.saved.forEach((item) => {
        const row = el3("div", "saved-row");
        const names = item.prog.map((c) => chordName(item.key, c)).join(" \u2013 ");
        const noteCount = item.prog.reduce((s, c) => s + (c.mel ? c.mel.length : 0), 0);
        row.innerHTML = `<div class="info"><strong>${esc2(item.name)}</strong><span class="muted small">${esc2(keyLabel(item.key, item.mode))} \xB7 ${esc2(names)}${noteCount ? ` \xB7 \u266A ${noteCount}` : ""}</span></div>`;
        const load = el3("button", "btn ghost", ui.pg.load);
        load.type = "button";
        load.onclick = () => {
          stopPlayground();
          pushHistory();
          S.key = item.key;
          S.mode = item.mode;
          S.prog = clone(item.prog);
          S.prog.forEach((c) => c.mel = c.mel || []);
          sel = -1;
          cur = { bar: 0, at: 0 };
          selNote = null;
          persist();
          redrawAll();
          window.scrollTo({ top: 0, behavior: "smooth" });
        };
        const del = el3("button", "btn ghost", ui.pg.deleteSaved);
        del.type = "button";
        del.onclick = () => {
          if (!confirm(ui.pg.confirmDelete)) return;
          S.saved = S.saved.filter((x) => x.id !== item.id);
          persist();
          drawSaved();
        };
        row.append(load, del);
        box.append(row);
      });
    }
    function redrawAll() {
      drawKeySelect();
      root2.querySelectorAll("input[name=pg-mode]").forEach((r) => r.checked = r.value === S.mode);
      root2.querySelectorAll("input[name=pg-sev]").forEach((r) => r.checked = r.value === "1" === S.sevenths);
      drawPalette();
      drawPresets();
      buildMelodyKeyboard();
      drawProg();
      drawSaved();
      drawDurations();
      $("pg-bpm-label").textContent = t(ui.pg.bpm, { n: S.bpm });
      $("pg-name").placeholder = t(ui.pg.savePlaceholder, { n: S.saved.length + 1 });
    }
    function drawDurations() {
      root2.querySelectorAll("#pg-dur [data-dur]").forEach((b) => b.classList.toggle("on", +b.dataset.dur === dur));
    }
    function addChord(c) {
      if (S.prog.length >= MAX_BARS) {
        $("pg-empty").textContent = ui.pg.full;
        return;
      }
      pushHistory();
      const at = sel >= 0 ? sel + 1 : S.prog.length;
      S.prog.splice(at, 0, { ...c, mel: [] });
      sel = at;
      cur = { bar: at, at: 0 };
      selNote = null;
      persist();
      drawProg();
      if (!playback) playItem({ midis: voicings()[at], mode: "chord" });
    }
    function selectSlot(i) {
      sel = sel === i ? -1 : i;
      if (sel >= 0) {
        cur = { bar: i, at: 0 };
        selNote = null;
      }
      drawProg();
      if (sel >= 0 && !playback) playItem({ midis: voicings()[sel], mode: "chord" });
    }
    root2.querySelector("#pg-slotbar").addEventListener("click", (e) => {
      const act = e.target.closest("[data-act]")?.dataset.act;
      if (!act || sel < 0) return;
      pushHistory();
      if (act === "left" && sel > 0) {
        [S.prog[sel - 1], S.prog[sel]] = [S.prog[sel], S.prog[sel - 1]];
        sel -= 1;
      } else if (act === "right" && sel < S.prog.length - 1) {
        [S.prog[sel + 1], S.prog[sel]] = [S.prog[sel], S.prog[sel + 1]];
        sel += 1;
      } else if (act === "dup" && S.prog.length < MAX_BARS) {
        S.prog.splice(sel + 1, 0, clone(S.prog[sel]));
        sel += 1;
      } else if (act === "del") {
        S.prog.splice(sel, 1);
        sel = Math.min(sel, S.prog.length - 1);
      }
      cur = { bar: Math.max(sel, 0), at: 0 };
      selNote = null;
      persist();
      drawProg();
    });
    $("pg-undo").onclick = () => {
      if (!history.length) return;
      S.prog = JSON.parse(history.pop());
      sel = Math.min(sel, S.prog.length - 1);
      selNote = null;
      cur = { bar: Math.min(cur.bar, Math.max(0, S.prog.length - 1)), at: cur.at };
      persist();
      drawProg();
    };
    $("pg-clear").onclick = () => {
      if (!S.prog.length) return;
      stopPlayground();
      pushHistory();
      S.prog = [];
      sel = -1;
      cur = { bar: 0, at: 0 };
      selNote = null;
      persist();
      drawProg();
    };
    function enterNote(rel) {
      if (!S.prog.length) return;
      if (cur.at >= 4) {
        setInfo(M.full);
        return;
      }
      pushHistory();
      const bar = cur.bar;
      const c = S.prog[bar];
      const at = cur.at;
      const abs = bar * 4 + at;
      let prevRef = null;
      S.prog.forEach((pc2, b) => pc2.mel.forEach((n, i) => {
        if (b * 4 + n.at + n.len === abs) prevRef = { bar: b, idx: i, rel: n.rel, kind: classes()[b][i].kind };
      }));
      c.mel = putNote(c.mel, at, dur, rel);
      cur = advance(cur, Math.min(dur, 4 - at), S.prog.length);
      selNote = null;
      persist();
      drawProg();
      const idx = c.mel.findIndex((n) => n.at === at && n.rel === rel);
      if (idx >= 0) {
        const cls = classes();
        let html = describe(bar, idx, cls);
        if (prevRef && S.prog[prevRef.bar].mel[prevRef.idx]?.rel === prevRef.rel) {
          const now = cls[prevRef.bar][prevRef.idx].kind;
          if (now !== prevRef.kind) html += ` <span class="muted">${esc2(t(M.prevChanged, { note: noteName(prevRef.rel), kind: M.kinds[now] }))}</span>`;
        }
        setInfo(html, cls[bar][idx].kind);
      }
    }
    root2.querySelector("#pg-dur").addEventListener("click", (e) => {
      const d = e.target.closest("[data-dur]");
      if (!d) return;
      dur = +d.dataset.dur;
      drawDurations();
    });
    $("pg-rest").onclick = () => {
      if (!S.prog.length || cur.at >= 4) return;
      pushHistory();
      const c = S.prog[cur.bar];
      c.mel = putRest(c.mel, cur.at, dur);
      cur = advance(cur, Math.min(dur, 4 - cur.at), S.prog.length);
      selNote = null;
      persist();
      drawProg();
    };
    $("pg-back").onclick = () => {
      const r = eraseBefore(S.prog, cur);
      if (r.prog === S.prog) return;
      pushHistory();
      S.prog = r.prog;
      cur = r.cur;
      selNote = null;
      persist();
      drawProg();
    };
    $("pg-barclr").onclick = () => {
      const c = S.prog[cur.bar];
      if (!c || !c.mel.length) return;
      pushHistory();
      c.mel = [];
      cur = { bar: cur.bar, at: 0 };
      selNote = null;
      persist();
      drawProg();
    };
    $("pg-melclr").onclick = () => {
      if (!S.prog.some((c) => c.mel.length)) return;
      pushHistory();
      S.prog.forEach((c) => c.mel = []);
      cur = { bar: 0, at: 0 };
      selNote = null;
      setInfo("");
      persist();
      drawProg();
    };
    $("pg-gen").onclick = () => {
      if (!S.prog.length) return;
      pushHistory();
      const mels = generateMelody(S.prog, S.mode);
      S.prog.forEach((c, i) => c.mel = mels[i]);
      cur = { bar: 0, at: 0 };
      selNote = null;
      setInfo("");
      persist();
      drawProg();
      startPlayback(true);
    };
    $("pg-mel").addEventListener("click", (e) => {
      const pill = e.target.closest(".note");
      if (pill) {
        const bar = +pill.dataset.bar;
        const idx = +pill.dataset.idx;
        selNote = selNote && selNote.bar === bar && selNote.idx === idx ? null : { bar, idx };
        if (selNote) {
          const n = S.prog[bar].mel[idx];
          playNote(win().ref + n.rel);
          const cls = classes();
          setInfo(describe(bar, idx, cls), cls[bar][idx].kind);
        } else {
          setInfo("");
        }
        drawMelody();
        return;
      }
      const roll = e.target.closest(".mel-roll");
      if (!roll) {
        const barEl = e.target.closest(".mel-bar");
        if (!barEl) return;
        cur = { bar: +barEl.dataset.bar, at: 0 };
      } else {
        const r = roll.getBoundingClientRect();
        const x = Math.max(0, Math.min(0.999, (e.clientX - r.left) / r.width));
        cur = { bar: +roll.dataset.bar, at: Math.floor(x * 4 / 0.5) * 0.5 };
      }
      selNote = null;
      drawMelody();
    });
    $("pg-noteact").addEventListener("click", (e) => {
      const act = e.target.closest("[data-note]")?.dataset.note;
      if (!act || !selNote) return;
      const c = S.prog[selNote.bar];
      const n = c.mel[selNote.idx];
      if (!n) return;
      pushHistory();
      if (act === "del") {
        c.mel.splice(selNote.idx, 1);
        selNote = null;
        setInfo("");
      } else {
        const w = win();
        n.rel = scaleStep(n.rel, act === "up" ? 1 : -1, S.mode, w.loRel, w.hiRel);
        playNote(w.ref + n.rel);
      }
      persist();
      drawProg();
      if (selNote) {
        const cls = classes();
        setInfo(describe(selNote.bar, selNote.idx, cls), cls[selNote.bar][selNote.idx].kind);
      }
    });
    $("pg-key").onchange = (e) => {
      S.key = e.target.value;
      persist();
      drawPalette();
      buildMelodyKeyboard();
      drawProg();
      drawSaved();
    };
    root2.querySelectorAll("input[name=pg-mode]").forEach(
      (r) => r.addEventListener("change", () => {
        S.key = convertKey(S.key, r.value);
        S.mode = r.value;
        persist();
        redrawAll();
      })
    );
    root2.querySelectorAll("input[name=pg-sev]").forEach(
      (r) => r.addEventListener("change", () => {
        S.sevenths = r.value === "1";
        persist();
        drawPalette();
      })
    );
    root2.querySelectorAll("input[name=pg-voicing]").forEach(
      (r) => r.addEventListener("change", () => {
        S.voicing = r.value;
        persist();
        updateKeyboard();
      })
    );
    $("pg-pattern").onchange = (e) => {
      S.pattern = e.target.value;
      persist();
    };
    $("pg-bass").onchange = (e) => {
      S.bass = e.target.checked;
      persist();
    };
    $("pg-loop").onchange = (e) => {
      S.loop = e.target.checked;
      persist();
    };
    $("pg-tones").onchange = (e) => {
      S.showTones = e.target.checked;
      persist();
      updateMelodyHint();
    };
    $("pg-melsound").onchange = (e) => {
      S.melSound = e.target.checked;
      persist();
    };
    $("pg-bpm").oninput = (e) => {
      S.bpm = +e.target.value;
      $("pg-bpm-label").textContent = t(ui.pg.bpm, { n: S.bpm });
    };
    $("pg-bpm").onchange = persist;
    function setPlaying(on) {
      playBtns.forEach((b) => {
        b.textContent = on ? `\u25A0 ${ui.pg.stop}` : `\u25B6 ${ui.pg.play}`;
        b.classList.toggle("playing", on);
      });
    }
    function applyNow() {
      progEl.querySelectorAll(".slot").forEach((s) => s.classList.toggle("now", +s.dataset.bar === nowIdx));
      const lane = $("pg-mel");
      lane.querySelectorAll(".mel-bar").forEach((b) => b.classList.toggle("now", +b.dataset.bar === nowIdx));
      if (nowIdx < 0) {
        lane.querySelectorAll(".note.now").forEach((p) => p.classList.remove("now"));
        mkb?.set("on", []);
      } else {
        const barEl = lane.querySelector(`.mel-bar[data-bar="${nowIdx}"]`);
        if (barEl) lane.scrollTo({ left: Math.max(0, barEl.offsetLeft - 12), behavior: "smooth" });
      }
      updateKeyboard();
      updateMelodyHint();
    }
    function noteNow(bar, idx) {
      const lane = $("pg-mel");
      lane.querySelectorAll(".note.now").forEach((p) => p.classList.remove("now"));
      lane.querySelector(`.note[data-bar="${bar}"][data-idx="${idx}"]`)?.classList.add("now");
      const n = S.prog[bar]?.mel[idx];
      if (n) mkb?.set("on", [win().ref + n.rel]);
    }
    function startPlayback(auto = false) {
      stopPlayground();
      stopAll();
      if (!S.prog.length) return;
      const me = { stopped: false, timers: [], onStop: () => {
        nowIdx = -1;
        setPlaying(false);
        applyNow();
      } };
      playback = me;
      setPlaying(true);
      const bar = (i, t0) => {
        if (me.stopped) return;
        if (i >= S.prog.length) {
          if (S.loop && S.prog.length) i = 0;
          else {
            me.timers.push(setTimeout(() => {
              if (!me.stopped) stopPlayground();
            }, Math.max(0, (t0 - audioNow()) * 1e3) + 400));
            return;
          }
        }
        const beat = 60 / S.bpm;
        const chord = S.prog[i];
        const v = voicings()[i];
        const bass = S.bass ? 36 + (tonic() + chord.off) % 12 : null;
        for (const e of barEvents(v, bass, S.pattern)) {
          playNote(e.midi, { when: Math.max(0, t0 + e.at * beat - audioNow()), dur: e.len * beat, vel: e.vel });
        }
        const ref = win().ref;
        chord.mel.forEach((n, k) => {
          const when = Math.max(0, t0 + n.at * beat - audioNow());
          if (S.melSound) playNote(ref + n.rel, { when, dur: n.len * beat * 1.1, vel: 0.9 });
          me.timers.push(setTimeout(() => {
            if (!me.stopped) noteNow(i, k);
          }, when * 1e3));
        });
        me.timers.push(setTimeout(() => {
          if (!me.stopped) {
            nowIdx = i;
            applyNow();
          }
        }, Math.max(0, (t0 - audioNow()) * 1e3)));
        const next = t0 + 4 * beat;
        me.timers.push(setTimeout(() => bar(i + 1, next), Math.max(0, (next - audioNow() - 0.35) * 1e3)));
      };
      bar(0, audioNow() + (auto ? 0.25 : 0.12));
    }
    playBtns.forEach((b) => b.onclick = () => playback ? stopPlayground() : startPlayback());
    $("pg-copy").onclick = async (e) => {
      const btn = e.currentTarget;
      const text2 = `${keyLabel()}
${S.prog.map(nameOf).join(" \u2013 ")}
${S.prog.map((c) => c.num).join(" \u2013 ")}`;
      let ok = false;
      try {
        await navigator.clipboard.writeText(text2);
        ok = true;
      } catch {
        const ta = el3("textarea");
        ta.value = text2;
        document.body.append(ta);
        ta.select();
        try {
          ok = document.execCommand("copy");
        } catch {
          ok = false;
        }
        ta.remove();
      }
      btn.textContent = ok ? ui.pg.copied : ui.pg.copyFail;
      setTimeout(() => btn.textContent = ui.pg.copy, 1500);
    };
    $("pg-save").onclick = () => {
      const msg = $("pg-save-msg");
      if (!S.prog.length) {
        msg.textContent = ui.pg.emptySave;
        return;
      }
      if (S.saved.length >= MAX_SAVED) {
        msg.textContent = ui.pg.maxSaved;
        return;
      }
      const name = ($("pg-name").value || "").trim() || t(ui.pg.savePlaceholder, { n: S.saved.length + 1 });
      S.saved.unshift({ id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), name, key: S.key, mode: S.mode, prog: clone(S.prog) });
      $("pg-name").value = "";
      msg.textContent = ui.pg.saved;
      persist();
      drawSaved();
      $("pg-name").placeholder = t(ui.pg.savePlaceholder, { n: S.saved.length + 1 });
    };
    redrawAll();
  }

  // js/app.js
  var root = document.getElementById("app");
  function route() {
    stopAll();
    stopPlayground();
    const hash2 = location.hash.slice(1) || "/";
    const m = hash2.match(/^\/lesson\/([\w-]+)$/);
    if (m) return openLesson(m[1]);
    if (hash2 === "/review") return openReview();
    if (hash2 === "/playground") return renderPlayground(root);
    if (hash2 === "/glossary") return renderGlossary(root);
    if (hash2 === "/settings") return renderSettings(root);
    renderHome(root);
    window.scrollTo(0, 0);
  }
  function openLesson(id) {
    const flat = flatLessons();
    const k = flat.findIndex((x) => x.lesson.id === id);
    if (k < 0 || !isUnlocked(id)) {
      location.hash = "#/";
      return;
    }
    const { lesson } = flat[k];
    const nextEntry = flat[k + 1];
    runLesson(root, lesson, {
      onExit: () => location.hash = "#/",
      onFinish: (pct) => setResult(id, pct),
      onAnswer: (step, ok) => recordAnswer(cardId(id, step), ok),
      onNext: nextEntry && isUnlocked(nextEntry.lesson.id) ? () => location.hash = `#/lesson/${nextEntry.lesson.id}` : null,
      onRetry: () => openLesson(id)
    });
  }
  function openReview() {
    const index = buildIndex(units);
    const session = buildSession(index);
    if (!session.steps.length) {
      location.hash = "#/";
      return;
    }
    runLesson(root, session, {
      review: true,
      onExit: () => location.hash = "#/",
      onFinish: () => {
      },
      onAnswer: (step, ok) => recordAnswer(step._id, ok),
      // 아직 남은 복습이 있으면 "더 복습하기" 버튼을 보여준다
      onNext: dueIds(index).length > session.steps.length ? () => openReview() : null
    });
  }
  document.addEventListener("click", (e) => {
    const term = e.target.closest?.(".term");
    if (term) openTerm(term.dataset.term);
  });
  loadLang("ko");
  window.addEventListener("hashchange", route);
  route();
})();
