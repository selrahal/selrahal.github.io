---
title: Upload an artifact to BxMS's Maven Repository
layout: default
author:
  name: Salem Elrahal
  url: http://salemelrahal.org
---
Red Hat JBoss BRMS and BPMS use maven to resolve dependencies of their projects. Typical configuration of the maven subsystem will include specifying (via a custom settings.xml file) the location of a remote maven repository to fetch artifacts from. Sometimes it is not feasible to fetch a project's dependencies from a remote repository (the remote repository might not be accessible from the production environment). For this reason, BxMS also provides a web UI to upload artifacts to the embedded maven repository manually. However, automating the upload of maven artifacts is not covered by the product documentation. That being said, the maven servlet that is used by BxMS exposes a resource that can be used to upload an artifact to the repository via REST. By issuing an HTTP POST, with the artifact as the POST body, to the location determined by the artifact's coordinate you can upload the jar to BxMS. The location should be formed as such:

```
[protocol]://[hostname]:[port]/[context-root]/maven2/[groupId replacing '.' with '/']/[artifactId]/[version]/[artifactId]-[version].jar
```

For example, if you want to upload the org.slf4j:slf4j-api:1.7.7 jar the URI should be:

```
http://localhost:8080/business-central/maven2/org/slf4j/slf4j-api/1.7.7/slf4j-api-1.7.7.jar
```

Don't forget that you will need to set up Http Basic Pre-emptive Authentication in order to make the REST call!

## Example Java Upload ##

I have attached[1] a simple project that shows this, using Apache's HttpClient. It is a jar packaged project that showcases uploading itself from the `/tmp` directory , as the user `bpmsAdmin` with the password `abcd1234!`, to an instance of BxMS running locally. In order to run the example you will have to build the project like so:

```bash
[selrahal@localhost bpms-upload-jar]$ mvn clean install
```

Then copy the built artifact to your /tmp directory:

```bash
[selrahal@localhost bpms-upload-jar]$ cp target/bpms-upload-jar-1.0.0-SNAPSHOT.jar /tmp/
```

And finally, execute the java class com.rhc.example.UploadMavenArtifact :

```bash
[selrahal@localhost bpms-upload-jar]$ mvn exec:java -Dexec.mainClass=com.rhc.example.UploadMavenArtifact
```

## Example Maven Upload ##

The project can also upload itself by calling `mvn deploy`. To do this uncomment the following section from the projects pom.xml:

``` xml
<distributionManagement>
  <repository>
    <id>guvnor-m2-repo</id>
    <name>maven repo</name>
    <url>http://localhost:8080/business-central/maven2/</url>
    <layout>default</layout>
  </repository>
</distributionManagement>
```

And add this &lt;server&gt; element to your settings.xml

```xml
<server>
  <id>guvnor-m2-repo</id>
  <username>bpmsAdmin</username>
  <password>abcd1234!</password>
  <configuration>
    <wagonProvider>httpclient</wagonProvider>
    <httpConfiguration>
      <all>
        <usePreemptive>true</usePreemptive>
      </all>
    </httpConfiguration>
  </configuration>
</server>
```

Now you can deploy with maven via :

```bash
[selrahal@localhost bpms-upload-jar]$ mvn deploy
```
