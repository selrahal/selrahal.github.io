---
title: jBPM Lab
layout: default
author:
  name: Salem Elrahal
---
[JBoss jBPM](http://www.jbpm.org/) is an open source framework that helps business automate their processes in order to improve efficiency, identify bottlenecks, scale with limited resources, and achieve a quick time to market for industry changes. Red Hat JBoss BPM Suite (the enterprise supported version) recently hit the version 6 milestone! Now is a great time to look to automating your business processes and in order to facilitate those efforts I have created an exercise driven lab that will get you started implementing a business process with human interactions.

## The Setup ##

Your airline company, RedEye, is trying to stay relevant in order to complete with some of the bigger organizations. One of the biggest issue you are currently facing is the slow time to market for changes to your first class upgrade process. Several C-level executives have decided that you will need to offer a mechanism for passengers to initiate an attempt at a first class upgrade. However they are still deciding the criteria and steps that will be used to either approve or deny their request. Your mission, if you choose to keep your job, is to implement a webservice that is backed by jBPM for these attempts at first class upgrades. The boss wants to see a simple functional example during Phase 1, and then an actual decision taking place in Phase 2. Lastly, during Phase 3 we should allow human intervention (from one of our customer service representatives) that will take a declined request and approve it. Furthermore, after creating the application that will receive the requests for upgrade you must *not* undeploy it. This means the changes from Phase 1 to Phase 2 to Phase 3 will need to be done without a redeploy!

Check out the code and get crackin'

[selrahal/jbpm-lab](https://github.com/selrahal/jbpm-lab)
