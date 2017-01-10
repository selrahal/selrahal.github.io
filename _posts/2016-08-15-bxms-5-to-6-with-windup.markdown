---
title: Migrate Drools/jBPM with Windup
layout: default
author:
  name: Salem Elrahal
  url: http://salemelrahal.org
---

Migrating your business rules or business process projects implemented in Drools or jBPM respectively, from version 5 to 6 can be an intimidating task. Windup can help automate all your technical migration needs and has recently added a rule set that will target deprectaed Drools and jBPM 5 APIs and provide the relevant new APIs for you. 


First navigate to your Windup install and ensure you have the latest avaiable rules:

```shell
[selrahal@localhost windup-distribution-2.7.0.Final]$ bin/windup --updateRulesets
```

Next run windup against your project with the `--target drools`

```shell
[selrahal@localhost windup-distribution-2.7.0.Final]$ bin/windup --input ~/Projects/windup-drools/example-war/target/example-war-1.0.0-SNAPSHOT.war --target drools
```

In the resulting report you will see that the windup rules have identified and created alternatives for any outdated API usage you have, happy migrating!

![](img/drools-5-to-6-windup.png?raw=true)

