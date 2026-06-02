---
title: Naver Cloud Platform
type: tool
status: seed
created: 2026-06-02
updated: 2026-06-02
tags:
  - cloud
  - ncp
  - deployment
  - infrastructure
related:
  - "[[CI/CD 배포 파이프라인]]"
  - "[[Jenkins]]"
  - "[[Velog Jenkins GitHub NCP Deployment Article]]"
  - "[[ML Model Serving Pipeline]]"
sensitivity: private
evidence_level: source-backed
---

# Naver Cloud Platform

## 한 줄 정의

Naver Cloud Platform(NCP)은 서버, network, storage, managed service를 제공하는 클라우드 플랫폼이다.

## 중요한 이유

[[Velog Jenkins GitHub NCP Deployment Article]]은 NCP 서버 위에 Jenkins server와 app server를 두고, GitHub webhook과 Jenkins를 연결해 jar를 배포하는 실습 환경으로 NCP를 사용한다. 이 위키에서는 NCP를 한국 cloud deployment와 개인 PoC 서버 운영 후보로 기록한다.

## 핵심 아이디어

- VM 기반 server를 만들고 public IP, SSH 접근, security group/firewall을 설정할 수 있다.
- Jenkins server와 app server를 분리하면 CI/CD runner와 application runtime의 역할을 나눌 수 있다.
- 작은 PoC에서는 compact server 같은 낮은 spec으로 시작할 수 있지만, Jenkins는 build workload 때문에 최소 spec 검토가 필요하다.
- cloud 비용, network exposure, OS image 지원 상태, backup, monitoring을 함께 고려해야 한다.

## 좋은 사용 사례

- 한국 region, 국내 cloud account, 지원금, 교육용 credit을 활용한 개인 PoC.
- VM 기반 Spring Boot, Jenkins, database 실습.
- GitHub Actions 같은 외부 runner가 접근하기 어려운 private server 구성을 시험할 때.

## 실패 패턴

- public IP와 SSH/Jenkins endpoint를 열어두고 firewall, key rotation, TLS를 충분히 보지 않는다.
- cloud server 생성만 하고 backup, monitoring, OS update, log 확인을 운영 범위에서 제외한다.
- 오래된 OS image를 사용하면서 보안 지원 상태를 확인하지 않는다.
- CI/CD 서버와 application 서버의 권한과 secret boundary를 분리하지 않는다.

## 관련 자료

- [[Velog Jenkins GitHub NCP Deployment Article]]

## 관련 개념과 차이

- [[CI/CD 배포 파이프라인]]: NCP는 pipeline artifact가 배포되는 runtime infrastructure가 될 수 있다.
- [[Jenkins]]: NCP 위에 Jenkins server를 직접 띄워 self-hosted CI/CD를 구성할 수 있다.
- [[ML Model Serving Pipeline]]: model serving PoC를 NCP VM에 올리는 경우에도 deploy, monitoring, rollback 경계가 필요하다.

## 내 관점 / 임시 결론

NCP는 한국 사용자나 국내 credit이 있는 개인 PoC에는 현실적인 선택지가 될 수 있다. 다만 cloud provider 자체보다 중요한 것은 공개 endpoint, secret, OS update, 배포 rollback을 어떻게 운영할지다. 단순 실습 source의 server spec과 OS 선택을 운영 권장안으로 바로 일반화하면 안 된다.

## 열린 질문

- 개인 AI/LLM PoC를 NCP에 올릴 때 GitHub Actions, Jenkins, NCP 자체 deploy service 중 무엇이 가장 유지보수 비용이 낮은가?
- 한국 cloud provider를 쓰는 장점이 latency, 비용, 계정 접근성 중 어디에서 실제로 큰가?
- NCP source가 더 쌓이면 AWS/GCP/Vercel 같은 provider와 비교 page를 만들 것인가?
