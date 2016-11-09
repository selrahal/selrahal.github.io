---
title: Serve static files with spring boot
layout: default
author:
  name: Salem Elrahal
  url: http://salemelrahal.org
---

Spring Boot is great for rapidly developing applications and I am continually surprised by Spring's configuration options. Using the `spring.resources.static-locations` system property you can specify a list of locations that Spring should use to serve files from. The default value is:

```properties
spring.resources.static-locations=classpath:/META-INF/resources/,classpath:/resources/,classpath:/static/,classpath:/webapp/,classpath:/public/
```

But adding a custom folder is as simple as the `file:` prefix:

```properties
spring.resources.static-locations=classpath:/META-INF/resources/,classpath:/resources/,classpath:/static/,classpath:/webapp/,classpath:/public/,file:/var/www/
```

Now you can fetch files with a GET request!

`http://localhost:8080/index.html`
