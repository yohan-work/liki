---
title: Caddy
type: tool
status: seed
created: 2026-06-19
updated: 2026-06-19
tags:
  - web-server
  - reverse-proxy
  - https
  - tls
  - deployment
related:
  - "[[Cowboysj Caddy Domainless HTTPS Article]]"
  - "[[CI/CD 배포 파이프라인]]"
  - "[[OSINT]]"
  - "[[Naver Cloud Platform]]"
sensitivity: private
evidence_level: source-backed
---

# Caddy

## 한 줄 정의

Caddy는 HTTPS 자동화와 reverse proxy 설정을 단순하게 제공하는 open-source web server다.

## 중요한 이유

[[Cowboysj Caddy Domainless HTTPS Article]]은 Vercel/Netlify frontend와 EC2 Spring Boot backend를 연결할 때 backend HTTPS endpoint가 필요해지는 실습 상황을 보여준다. 이때 Caddy는 backend 앞단에서 TLS와 reverse proxy를 담당하는 가벼운 선택지로 등장한다.

## 핵심 기능

- Web server와 reverse proxy 역할을 수행한다.
- Caddyfile로 endpoint, TLS, proxy target을 선언한다.
- Backend application이 localhost port에서 실행될 때 public HTTPS endpoint로 중계할 수 있다.
- systemd service로 서버 부팅 시 자동 실행할 수 있다.

## 좋은 사용 사례

- 개인 PoC나 작은 backend를 HTTPS endpoint로 빠르게 노출한다.
- Spring Boot, Node.js, FastAPI 같은 app server 앞에 reverse proxy를 둔다.
- Frontend hosting이 HTTPS request만 허용해 backend도 HTTPS가 필요한 경우.
- Nginx 설정이 과하다고 느껴지는 작은 서버 실험.

## 실패 패턴

- `tls internal`을 공개적으로 신뢰되는 인증서와 같은 것으로 오해한다.
- Caddy admin endpoint를 외부 interface에 열고 firewall과 인증을 확인하지 않는다.
- Cloud security group에서 80/443/관리 포트를 열어두고 노출면을 점검하지 않는다.
- CORS를 넓게 열어 frontend 요청이 되는지만 확인하고 credential, origin, preflight 위험을 놓친다.
- 배포 pipeline에서 build/deploy만 성공으로 보고 HTTPS 접속, certificate trust, proxy routing, Swagger URL, CORS를 검증하지 않는다.

## 관련 개념과 차이

- [[CI/CD 배포 파이프라인]]: Caddy는 배포된 artifact를 사용자에게 노출하는 HTTPS/reverse proxy layer다.
- [[OSINT]]: Public IP, 임시 hostname, open port, TLS certificate, admin endpoint는 외부 노출면 점검 대상이다.
- [[Naver Cloud Platform]]: EC2 대신 NCP VM을 쓰더라도 security group, TLS, reverse proxy, service unit 경계는 비슷하게 적용된다.

## 관련 자료

- [[Cowboysj Caddy Domainless HTTPS Article]]

## 내 관점 / 임시 결론

Caddy는 개인 PoC에서 "backend를 HTTPS로 보이게 하는 최소 reverse proxy"로 검토할 수 있다. 다만 운영 기준에서는 Caddy 공식 문서로 인증서 발급 방식, `tls internal`, admin API, service file, firewall rule을 확인해야 한다.

## 열린 질문

- 개인 PoC에서 Caddy, Nginx, cloud load balancer 중 어느 것이 HTTPS와 운영 부담의 균형이 좋은가?
- Public IP 기반 임시 hostname을 언제까지 허용하고, 언제 실제 domain으로 전환해야 하는가?
- 배포 완료 체크리스트에 HTTPS certificate trust, reverse proxy health, CORS, Swagger URL을 어떻게 넣을 것인가?
