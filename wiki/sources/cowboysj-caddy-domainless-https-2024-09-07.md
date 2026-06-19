---
title: Cowboysj Caddy Domainless HTTPS Article
type: source
status: ingested
created: 2026-06-19
updated: 2026-06-19
tags:
  - source
  - caddy
  - https
  - reverse-proxy
  - ec2
  - spring-boot
related:
  - "[[Caddy]]"
  - "[[CI/CD 배포 파이프라인]]"
  - "[[OSINT]]"
  - "[[Naver Cloud Platform]]"
sensitivity: private
evidence_level: source-backed
source_id: cowboysj-caddy-domainless-https-2024-09-07
original_path: raw/external/cowboysj-tistory-69-2026-06-19/index.html
date_added: 2026-06-19
captured_at: 2026-06-19
accessed_at: 2026-06-19
canonical_url: https://cowboysj.tistory.com/69
content_hash: sha256:6a40d3dca7b5584eec6d8926f35d7038e4bbdfae36ba506ce1700f8728c5af45
source_version: tistory_html_snapshot_2026-06-19_article_published_2024-09-07
domain:
  - software
content_type: article
knowledge_role:
  - source
  - tool
  - reference
source_quality: practitioner
use_for:
  - reference
  - concept
related_pages:
  - "[[Caddy]]"
  - "[[CI/CD 배포 파이프라인]]"
  - "[[OSINT]]"
  - "[[Naver Cloud Platform]]"
---

# Cowboysj Caddy Domainless HTTPS Article

## 자료 요약

Tistory 사용자 cowboysj의 2024-09-07 글 "Caddy로 도메인 없이 https 설정하기"이다. 글은 Vercel이나 Netlify에 배포한 frontend가 HTTPS 요청만 허용하는 상황에서, 별도 도메인 구매 없이 EC2 backend를 HTTPS로 노출하기 위해 [[Caddy]]를 사용한 실습을 설명한다.

작성자는 EC2에 Caddy를 설치하고, systemd `caddy.service`와 `/etc/caddy/Caddyfile`을 수정한 뒤, `PUBLIC_IP.nip.io` 형태의 hostname을 사용해 Spring Boot 8080 포트로 reverse proxy를 연결했다고 설명한다. 이후 Swagger server URL과 Spring CORS 설정도 HTTPS frontend/backend 조합에 맞게 수정한다.

## 원문 주장

- Caddy는 Go로 작성된 open-source web server이며 TLS 인증서 발급과 reverse proxy 설정을 지원한다.
- Vercel/Netlify frontend에서 HTTPS 요청만 가능한 상황에서는 backend도 HTTPS로 노출해야 한다.
- EC2 보안 그룹에서 443 포트가 열려 있어야 한다.
- Caddyfile에서 `PUBLIC_IP.nip.io`, `tls internal`, `reverse_proxy localhost:8080` 구성을 사용했다.
- Spring Boot Swagger의 server URL과 CORS allowed origin도 배포된 HTTPS endpoint에 맞춰 수정해야 한다.

## 내 프로젝트에 주는 시사점

- 개인 PoC 배포에서도 frontend hosting, backend HTTPS, reverse proxy, CORS, Swagger URL, cloud security group은 하나의 배포 boundary로 묶어 봐야 한다.
- [[CI/CD 배포 파이프라인]]은 artifact 전송만이 아니라 TLS termination, public endpoint, CORS, health check까지 검증해야 실제 사용자 흐름을 보장할 수 있다.
- 공개 IP 기반 임시 도메인과 자동 인증서 설정은 빠른 실험에는 유용하지만, 운영에서는 domain ownership, certificate trust, renewal, admin endpoint exposure를 별도 확인해야 한다.

## 검증 필요 주장

- Caddy의 최신 설치 방법, systemd unit, service 실행 방식은 Caddy 공식 문서와 현재 OS 배포판 기준으로 확인해야 한다.
- `tls internal`은 Caddy 내부 CA를 쓰는 설정이므로 일반 사용자 브라우저에서 신뢰되는 공개 TLS 인증서와 다를 수 있다. 이 설정을 public service 권장안으로 일반화하지 않는다.
- `admin 0.0.0.0:2020`처럼 admin endpoint를 외부 interface에 바인딩하는 구성은 접근 제어와 firewall 검증 없이는 위험할 수 있다.
- `nip.io` 기반 hostname과 ACME/인증서 발급의 동작 조건은 Caddy 공식 문서, ACME provider, nip.io 정책으로 별도 검증해야 한다.
- CORS 예시는 실습 맥락이며, production에서는 exact origin, credential, method, header, preflight behavior를 더 엄격히 검토해야 한다.

## 메타데이터

- 발행일: 2024-09-07
- 수집일: 2026-06-19
- 원문: https://cowboysj.tistory.com/69
- raw snapshot: `raw/external/cowboysj-tistory-69-2026-06-19/index.html`
- content_hash: `sha256:6a40d3dca7b5584eec6d8926f35d7038e4bbdfae36ba506ce1700f8728c5af45`
