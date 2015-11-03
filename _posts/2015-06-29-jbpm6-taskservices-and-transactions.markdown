---
title: jBPM 6 TaskServices and Transactions
layout: default
author:
  name: Salem Elrahal
  url: http://salemelrahal.org
---

This entry is concerning an issue I ran into with human tasks and the TaskService API. In jBPM 6 there are two ways to retrieve an implementation of TaskService, either via a RuntimeEngine or the HumanTaskConfigurator. RuntimeEngines are created/retrieved from a RuntimeManager and the HumanTaskConfigurator has some static methods we can use. These two methods result in very different implementations of the TaskService interface, so let us examine the use cases for both implementations.

## TaskService via RuntimeEngine

This is the preferred way of retrieving an implementation of TaskService. The only requirement of this method is that you have to have the appropriate RuntimeEngine for your use case. The creation of RuntimeEngines is no small issue, but it boils down to having the correct Strategy and Context. Regardless, once you have obtained the RuntimeEngine you have a perfectly functional instance of TaskService that can be used for operations within the mentioned Strategy and Context. For example, if you get a RuntimeEngine of the PerProcessInstance Strategy and specify the process instance id as the context, you can use the TaskService to perform operations on any tasks created by that process instance.

## TaskService via HumanTaskConfigurator

Sometimes you might not have the need, or want, to specify both the Strategy and Context while needing data concerning tasks. The typical use case for this is needing to list all of the tasks for the user 'Sal'. In this case, you can obtain an implementation of TaskService statically from the HumanTaskConfigurator. This TaskService is great for read-only operations but since it is not associated with a Strategy and Context, do not attempt to use it for any write operations.


The biggest reason to not use the latter TaskService for write operations is because of the behavior of the objects in a transaction. Specifically, if two TaskServices obtained by different methods are used in the same transaction then changes from one TaskService will not be present!!! This is because the factories which create these objects will end up using a different EntityManager, and so the backing persistence context is not shared between them. The Solution is to use the first method (TaskService via RuntimeEngine) whenever possible, and only use the second method (TaskService via HumanTaskConfigurator) when you cannot determine the Strategy and Context.


So remember, only use a TaskService from the HumanTaskConfigurator when you have to access the data in a read-only way and keep in mind that it does not share the entity manager in the current running transaction.
