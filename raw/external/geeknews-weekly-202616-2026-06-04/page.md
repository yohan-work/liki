<!DOCTYPE html>
<html lang="KR">
	<head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <!-- Global site tag (gtag.js) - Google Analytics v4 -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MCD87E7SF0"></script>
        <script src="/assets/analytics.js?20260419a" type="text/javascript"></script>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>GeekNews Weekly Archive | GeekNews</title>
        <meta name="description" content="매주 월요일 아침, 지난 일주일간의 GeekNews 중 꼭 챙겨봐야 할 뉴스들을 엄선하여 이메일로 보내드립니다. GeekNews에서 개발, 기술, AI, 오픈소스, 스타트업 뉴스를 함께 읽고, 매일 업데이트되는 새 글과 인기 토픽, 원문 링크와 요약, 댓글 토론으로 중요한 기술 흐름을…" />
        <link rel="canonical" href="https://news.hada.io/weekly" />
        <meta property="og:url" content="https://news.hada.io/weekly" />
        <meta property="og:title" content="GeekNews Weekly Archive | GeekNews" />
        <meta property="og:image" content="https://social.news.hada.io/weekly" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="robots" content="max-image-preview:large" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:site_name" content="GeekNews" />
        <meta property="og:description" content="매주 월요일 아침, 지난 일주일간의 GeekNews 중 꼭 챙겨봐야 할 뉴스들을 엄선하여 이메일로 보내드립니다. GeekNews에서 개발, 기술, AI, 오픈소스, 스타트업 뉴스를 함께 읽고, 매일 업데이트되는 새 글과 인기 토픽, 원문 링크와 요약, 댓글 토론으로 중요한 기술 흐름을…" />
        <meta property="fb:app_id" content="2417316805247011" />
        <meta name="twitter:image" content="https://social.news.hada.io/weekly" />
        <meta name="twitter:title" content="GeekNews Weekly Archive | GeekNews" />
        <meta name="twitter:creator" content="@GeekNewsHada" />
        <meta name="twitter:site" content="@GeekNewsHada" />
        <meta name="twitter:description" content="매주 월요일 아침, 지난 일주일간의 GeekNews 중 꼭 챙겨봐야 할 뉴스들을 엄선하여 이메일로 보내드립니다. GeekNews에서 개발, 기술, AI, 오픈소스, 스타트업 뉴스를 함께 읽고, 매일 업데이트되는 새 글과 인기 토픽, 원문 링크와 요약, 댓글 토론으로 중요한 기술 흐름을…" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="/vendor/hotkeys.min.js?20260513a" defer></script>
        <link rel="stylesheet" href="/assets/main.css?20260601a" type="text/css" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json?20260513a" />
        <meta name="theme-color" content="#000065" />
        <meta name="google-site-verification" content="xfNJ7NBfDxPJBTNxTxSIQ7UVPA5zwPKBCC6STmWrQYE" />
        <script src="/assets/main.js?20260524a" type="text/javascript" defer></script>
        <script src="/assets/viewer-state.js?20260521a" type="text/javascript" defer></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Emoji&display=swap" rel="stylesheet" />
        <link rel="webmention" href="https://webmention.io/news.hada.io/webmention" />
        <link rel="pingback" href="https://webmention.io/news.hada.io/xmlrpc" />
        <script>
        (function() {
          var path = window.location.pathname.replace(/\/$/, '');
          if (path !== '/weekly') {
            return;
          }

          if (typeof URLSearchParams === 'undefined') {
            return;
          }

          var page = new URLSearchParams(window.location.search).get('page');
          if (!page || /^[0-9]+$/.test(page) === false) {
            return;
          }

          var normalizedPage = parseInt(page, 10);
          if (normalizedPage <= 1) {
            return;
          }

          window.location.replace('/weekly/page/' + normalizedPage);
        })();
        </script>
		<script>
        function setWeeklySubscribeButtonDisabled(buttonId, disabled) {
          var button = document.getElementById(buttonId);
          if (button) {
            button.disabled = disabled;
          }
        }

        function createWeeklyTurnstileForm(config) {
          var form = document.getElementById(config.formId);
          var container = document.getElementById(config.containerId);
          var button = document.getElementById(config.buttonId);
          if (!form || !container || !button || !window.turnstile) {
            return;
          }

          setWeeklySubscribeButtonDisabled(config.buttonId, true);

          try {
            var widgetId = window.turnstile.render('#' + config.containerId, {
              sitekey: '0x4AAAAAAC9Bu82leNhgPNT9',
              execution: 'execute',
              callback: function() {
                form.submit();
              },
              'error-callback': function() {
                setWeeklySubscribeButtonDisabled(config.buttonId, false);
                window.turnstile.reset(widgetId);
              },
              'expired-callback': function() {
                setWeeklySubscribeButtonDisabled(config.buttonId, false);
                window.turnstile.reset(widgetId);
              },
              'timeout-callback': function() {
                setWeeklySubscribeButtonDisabled(config.buttonId, false);
                window.turnstile.reset(widgetId);
              }
            });

            setWeeklySubscribeButtonDisabled(config.buttonId, false);

            form.addEventListener('submit', function(event) {
              event.preventDefault();
              setWeeklySubscribeButtonDisabled(config.buttonId, true);

              try {
                window.turnstile.execute(widgetId);
              } catch (error) {
                console.error('Weekly Turnstile execute failed', error);
                setWeeklySubscribeButtonDisabled(config.buttonId, false);
              }
            });
          } catch (error) {
            console.error('Weekly Turnstile render failed', error);
          }
        }

        document.addEventListener('DOMContentLoaded', function() {
          createWeeklyTurnstileForm({
            formId: 'subscribe-form',
            containerId: 'weekly-turnstile',
            buttonId: 'sub_btn'
          });
        });
        </script>
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" defer></script>
        <style>
          .weekly-subscribe-form {
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
            align-items: center;
          }

          .weekly-subscribe-row {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .weekly-container .headline h1 {
            font-size: 1.8em;
            line-height: 1.25;
          }

          .weekly-intro {
            max-width: 44rem;
            margin: 0 auto 16px;
            color: #444;
            font-size: 14px;
            line-height: 1.75;
            text-align: left;
          }

          .weekly-intro p {
            margin: 0 0 10px;
          }

          .weekly-intro strong {
            color: #222;
            font-weight: bold;
          }
        </style>
	</head>
	<body>
		                <header>
            <nav>
                <div class=ltd><span class=geeknews><a href="/"  >GeekNews</a></span>
                    <a href='/new' >최신글</a> <a href='/past'  id='nav-link-past'>예전글</a> <a href='/threads'  id='nav-link-threads' data-auth-only='1' style='display:none'>쓰레드</a> <a href='/comments'  id='nav-link-comments'>댓글</a> <a href='/ask' >Ask</a> <a href='/show' >Show</a> <a href='/plus' >GN⁺</a> <a href='/weekly' class=selected>Weekly</a> <a href='/geekbots' >GeekBots</a> <a href='/geekbadge' >GeekBadge</a> <a href='/support' >후원</a>  | <a href='/write' >글등록</a>                     <span class=curnavitem>
                    </span>
                </div>
                <div class=rtd>
                    <form class="search-cse" action="/search" method="GET">
                        <label for="nav-q" class="visually-hidden">검색</label>
                        <input id="nav-q" name="q" type="search" maxlength=20 class="input" placeholder="검색">
                    </form>
                    <span id="nav-auth-slot">
                    <a href='/login' >로그인</a>                    </span>
                    <script>
                    (function () {
                        if (typeof window.getCachedNavState !== 'function' || typeof window.applyNavState !== 'function') {
                            return;
                        }
                        var payload = window.getCachedNavState();
                        if (payload) {
                            window.applyNavState(payload);
                        }
                    })();
                    </script>
                </div>
				</nav>
        </header>
                
		<main>
		<div class='doc-container weekly-container'>
                <div class='tacenter headline'><h1>GeekNews Weekly</h1></div>
				<div class='tacenter'>
                <h3 class='keepall'>매주 월요일 아침, 한 주의 기술 흐름을 이메일로 받아보세요.</h3>
                <div class='weekly-intro keepall'>
                    <p>GeekNews Weekly는 매주 올라온 뉴스 중 핵심 테마를 고르고, 관련 글 2~3개를 묶어 그 주의 흐름을 설명하는 주간 브리핑으로 시작합니다. 핵심 트렌드를 다시 짚고, 주요 기사들을 어떤 맥락에서 보면 좋을지 안내합니다.</p>
                    <p>이어 지난주에 올라왔던 기사를 놓치지 않도록 중요한 30~40개를 큐레이션하고, 각 기사마다 짧은 설명과 에디터 코멘트를 덧붙여 왜 읽어볼 만한지 정리합니다. 약 <strong>17,000명</strong>이 구독하는 GeekNews Weekly를 지금 구독해보세요.</p>
                </div>
                <form id="subscribe-form" class="weekly-subscribe-form" action="/email/subscribe" method="POST">
                    <div class="weekly-subscribe-row">
                        <input type='email' id='email' class="input" name='email' placeholder='your@email.com' required>
                        <input type="submit" id="sub_btn" class="button" value="구독하기" disabled>
                    </div>
                    <div id="weekly-turnstile"></div>
                </form>
                <p class='headline keepall'>아래에서 기존에 발행된 Weekly 이메일들을 보실 수 있습니다</p>
                <h2>GeekNews Weekly Archive</h2>
                </div>

<div class=weekly><div>360. </div><div>202622</div><div><a href='/weekly/202622' class='u'> 기술 선택의 감각을 잃지 않기</a></div><div>359. </div><div>202621</div><div><a href='/weekly/202621' class='u'> 검색창이 직접 답하는 시대, 우리는 무엇을 준비해야 할까</a></div><div>358. </div><div>202620</div><div><a href='/weekly/202620' class='u'> 로컬 AI를 준비해야 할 시간</a></div><div>357. </div><div>202619</div><div><a href='/weekly/202619' class='u'> 확률적 창업자와 확률적 엔지니어링</a></div><div>356. </div><div>202618</div><div><a href='/weekly/202618' class='u'> 나보다 나은 사람을 뽑는 법</a></div><div>355. </div><div>202617</div><div><a href='/weekly/202617' class='u'> 잃어버린 기본기를 찾아서</a></div><div>354. </div><div>202616</div><div><a href='/weekly/202616' class='u'> 이제 SEO 다음은 AEO를 고민할 때입니다</a></div><div>353. </div><div>202615</div><div><a href='/weekly/202615' class='u'> 스킬이 쏟아지는 시대, 내 하네스는 내가 만든다</a></div><div>352. </div><div>202614</div><div><a href='/weekly/202614' class='u'> 당신의 지식 저장소, LLM이 관리해드립니다</a></div><div>351. </div><div>202613</div><div><a href='/weekly/202613' class='u'> 이제는 에이전트가 아니라 에이전트 팀이다</a></div><div>350. </div><div>202612</div><div><a href='/weekly/202612' class='u'> AI 시대의 개발 생태계는 이렇게 만들어 가는 겁니다</a></div><div>349. </div><div>202611</div><div><a href='/weekly/202611' class='u'> 소비보다 조금 더 많은 가치 만들기</a></div><div>348. </div><div>202610</div><div><a href='/weekly/202610' class='u'> AI 에이전트가 불러낸 CLI의 귀환</a></div><div>347. </div><div>202609</div><div><a href='/weekly/202609' class='u'> Vibe Coding 이후 1년, 코딩은 무엇이 되었나</a></div><div>346. </div><div>202608</div><div><a href='/weekly/202608' class='u'> 취향은 새로운 핵심 역량 - 구현의 시대에서 선택의 시대로</a></div><div>345. </div><div>202607</div><div><a href='/weekly/202607' class='u'> 링크를 클릭하던 시대에서, AI에게 위임하는 시대로</a></div><div>344. </div><div>202606</div><div><a href='/weekly/202606' class='u'> 우리는 앞으로 뭘 어떻게 만들어야 할까</a></div><div>343. </div><div>202605</div><div><a href='/weekly/202605' class='u'> OpenClaw와 MoltBook, AI들만의 세상이 올까?</a></div><div>342. </div><div>202604</div><div><a href='/weekly/202604' class='u'> 나는 "유용한 존재가 되는 것"에 중독되어 있다</a></div><div>341. </div><div>202603</div><div><a href='/weekly/202603' class='u'> AI를 쓰는 사람과 AI로 리딩하는 사람</a></div><div class='next commentTD'><br><a href='/weekly/page/2' class=u>더 이전 Weekly 보기</a></div></div>                
			</div>
        </main>
        						<div
			class="site-footer-notice-shell"
			data-site-notice
			data-dismiss-key="site_notice:2:fd97cbdb012173e6"
			data-dismiss-expires="Mon, 08 Jun 2026 14:59:59 GMT"
		>
			<div class="site-footer-notice" role="status" aria-live="polite">
				<div class="site-footer-notice__copy"><a href="/geekbots"><strong>GeekBots</strong></a> 가 이제 오픈소스 기반 사내 협업도구 <a href="/mattermostbot"><strong>Mattermost</strong></a> 도 지원합니다. 긱뉴스를 사용중인 팀 채널에서 받아보세요.</div>
				<button
					type="button"
					class="site-footer-notice__dismiss"
					data-site-notice-dismiss
					aria-label="이 공지 숨기기"
					title="이 공지 다시 보지 않기"
				>숨기기</button>
			</div>
		</div>
		<script src="/assets/site-notice.js?20260419a" type="text/javascript"></script>
						<footer>
			<div class="footer-desktop">
				<div class="footer-links">
					<a href='/start'>처음 오셨나요</a>
					<a href='/guidelines'>사이트 이용법</a>
					<a href='/faq'>FAQ</a>
					<a href='/about'>About</a>
					<a href='/support'>후원하기</a>
					<a href='/terms'>이용약관</a>
					<a href='/privacy'>개인정보 처리방침</a>
					<!-- <a href='release'>Releases</a> -->
					&nbsp; | 
					 <a href='/blog'>Blog</a>
					 <a href='/lists'>Lists</a>
					 <a href='https://news.hada.io/rss/news'>RSS</a>
					&nbsp; | 
					 <a href='/bookmarklet'>Bookmarklet</a>
				</div>
				<div class="footer-links">
					<a href='https://x.com/GeekNewsHada' rel="me">X (Twitter)</a>
					<a href='https://facebook.com/GeekNewsHada'>Facebook</a>
					<span class="footer-bots">&nbsp; | &nbsp; <a href='/geekbots' class='keepall'>긱뉴스봇</a> :
						<a href='/slackbot' class='keepall'>Slack</a>
						<a href='/jandibot' class='keepall'>잔디</a>
						<a href='/discordbot' class='keepall'>Discord</a>
						<a href='/teamsbot' class='keepall'>Teams</a>
						<a href='/dooraybot' class='keepall'>Dooray!</a>
						<a href='/googlechatbot' class='keepall'>Google Chat</a>
												<a href='/mattermostbot' class='keepall'>Mattermost</a>
												<a href='/switbot' class='keepall'>Swit</a>
					</span>
				</div>
			</div>
			<div class="footer-mobile">
				<div class="footer-links footer-links-mobile">
					<a href='/start'>시작하기</a>
					<a href='/guidelines'>이용법</a>
					<a href='/faq'>FAQ</a>
					<a href='/about'>About</a>
					<a href='/support'>후원</a>
					<a href='/terms'>약관</a>
					<a href='/privacy'>개인정보</a>
				</div>
				<div class="footer-links footer-links-mobile">
					<a href='/lists'>Lists</a>
					<a href='/blog'>Blog</a>
					<a href='https://news.hada.io/rss/news'>RSS</a>
					<a href='https://x.com/GeekNewsHada' rel="me">X</a>
					<a href='/geekbots' class='keepall'>긱뉴스봇</a>
				</div>
			</div>
			<div style="width: fit-content; display: inline-block;">
				<form class="search-cse" action="/search" method="GET">
					<label for="footer-q" class="label">검색</label>
					<input id="footer-q" name="q" type="text" maxlength=30 class="input" style="width: 200px">
				</form>
			</div>
		</footer>
				<div id="user-hover-badge-preview" class="user-hover-badge-preview" hidden aria-hidden="true">
			<div class="user-hover-badge-preview__meta"></div>
			<div class="user-hover-badge-preview__supporter" hidden>
				<img class="user-hover-badge-preview__supporter-icon" alt="" />
			</div>
			<div class="user-hover-badge-preview__featured"></div>
		</div>
		<link rel="stylesheet" href="/assets/user-hover.css?20260419a" type="text/css" />
		<script src="/assets/user-hover.js?20260427a" type="text/javascript"></script>
			</body>
</html>
