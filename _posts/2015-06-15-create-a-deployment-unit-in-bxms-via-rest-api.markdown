---
title: Create a Deployment Unit in BxMS via REST API
layout: default
author:
  name: Salem Elrahal
  url: http://salemelrahal.org
---

A common request I get at clients is to integrate deploying a kjar in business central as part of a CICD pipeline (through a tool like Jenkins/Hudson or uDeploy). To that end I have developed two scripts that can be used to perform such a deployment, check them out at [selrahal/jbpm-deployment-cli](https://github.com/selrahal/jbpm-deployment-cli)


### Deployment Usage

```sh
[selrahal@localhost bin]$ ./deploy_kjar --help
Script used to create and perform HTTP POST to BPMS6 to deploy a deployment unit.
USAGE: deploy_kjar [OPTIONS]
        -u username [bpmsAdmin]
        -p password [abcd1234!]
        -h hostname [localhost]
        --port port [8080]
        -g group_id [org.kie.example]
        -a artifact_id [project1]
        -v version [1.0.0-SNAPSHOT]
        -k kbase []
        -s ksession []
        -r runtime_strategy []
        --protocol (http|https) [http]
```

### Undeployment Usage

```sh
[selrahal@localhost bin]$ ./undeploy_kjar --help
Script used to create and perform HTTP POST to BPMS6 to undeploy a deployment unit.
USAGE: undeploy_kjar [OPTIONS]
        -u username [bpmsAdmin]
        -p password [abcd1234!]
        -h hostname [localhost]
        --port port [8080]
        -g group_id [org.kie.example]
        -a artifact_id [project1]
        -v version [1.0.0-SNAPSHOT]
        -k kbase []
        -s ksession []
        --protocol (http|https) [http]
```


