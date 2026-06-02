---
title: Jenkins
type: tool
status: seed
created: 2026-06-02
updated: 2026-06-02
tags:
  - cicd
  - automation
  - deployment
  - devops
related:
  - "[[CI/CD 배포 파이프라인]]"
  - "[[Velog Jenkins GitHub NCP Deployment Article]]"
  - "[[Naver Cloud Platform]]"
  - "[[Orchestration]]"
sensitivity: private
evidence_level: source-backed
---

# Jenkins

## 한 줄 정의

Jenkins는 build, test, deploy 같은 작업을 job과 pipeline으로 자동화하는 open-source automation server다.

## 중요한 이유

Jenkins는 GitHub webhook, credential, build tool, plugin, remote server 전송을 조합해 배포 pipeline을 구성할 수 있다. [[Velog Jenkins GitHub NCP Deployment Article]]은 Jenkins freestyle project와 Publish Over SSH plugin으로 GitHub push 이후 jar를 NCP app server에 전송하는 실습 구성을 보여준다.

## 핵심 아이디어

- job은 source checkout, build command, post-build action을 순서대로 실행한다.
- webhook trigger를 사용하면 GitHub push 같은 이벤트가 Jenkins build를 시작할 수 있다.
- credential store는 Personal Access Token, SSH private key 같은 secret을 job에서 참조하게 한다.
- plugin 생태계가 강점이지만, plugin 유지 상태와 보안 설정을 확인해야 한다.

## 좋은 사용 사례

- 기존 VM 기반 서버에 SSH로 artifact를 전송하는 배포 자동화.
- 조직에 이미 Jenkins 운영 경험과 plugin 관리 체계가 있는 경우.
- GitHub Actions 같은 SaaS CI가 접근하기 어려운 내부 network 작업.
- build, test, deploy, report를 하나의 job history로 추적하고 싶은 경우.

## 실패 패턴

- Jenkins admin UI와 webhook endpoint를 public하게 열어두고 접근 제어를 약하게 둔다.
- plugin을 설치한 뒤 유지 상태, 권한, credential 노출 위험을 확인하지 않는다.
- freestyle job에 절차가 숨어 있어 pipeline as code, review, versioning이 어렵다.
- SSH key나 GitHub token에 필요 이상 권한을 부여한다.
- build success와 deploy health check를 구분하지 않는다.

## 관련 자료

- [[Velog Jenkins GitHub NCP Deployment Article]]

## 관련 개념과 차이

- GitHub Actions: GitHub repository 안에서 workflow as code로 CI/CD를 구성하는 방식이다. Jenkins는 self-hosted automation server 성격이 더 강하다.
- [[CI/CD 배포 파이프라인]]: Jenkins는 이 pipeline을 실행하는 도구 중 하나다.
- [[Orchestration]]: Jenkins job은 trigger, credential, build step, post-build action, log를 조율하는 orchestration surface다.

## 내 관점 / 임시 결론

Jenkins는 유연하지만 개인 PoC에서는 운영 부담이 작지 않다. 이미 서버를 운영해야 하거나 내부 network 접근이 필요하면 유용하지만, 단순한 static site나 작은 container deploy라면 GitHub Actions나 cloud-native deploy service가 더 가벼울 수 있다.

## 열린 질문

- 개인 프로젝트에서 Jenkins를 self-host할 만큼 반복 배포와 network 제약이 있는가?
- Jenkins job을 freestyle로 둘 것인가, Jenkinsfile 기반 pipeline as code로 둘 것인가?
- Jenkins에 agent deployment action을 연결한다면 어떤 approval과 rollback gate가 필요한가?
