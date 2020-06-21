import boto3
import os

print("Generating content markdown from S3 releases...")

s3 = boto3.resource('s3')
bucket = s3.Bucket("files.telemetryjet.com")

# Initialize files
releaseIndexFile = open("content/releases/_index.md", "w")
releaseIndexFile.write('''---
title: "Releases"
weight: 1
---

# Release Files
''')

bucketObjects = bucket.objects.all()
bucketObjectList = []
for bucketObject in bucketObjects:
    bucketObjectList.append(bucketObject)

bucketObjectList.sort(key=lambda x: x.key, reverse=True)
for i, bucketObject in enumerate(bucketObjectList):
    print(bucketObject.last_modified)
    bucketKey = bucketObject.key
    bucketFilename = bucketKey.split('/')[-1]
    linkUrl = "{{{{ .Site.Params.filesUrl }}}}/{}".format(bucketKey)
    releaseIndexFile.write('''
<a href="{}">
    <h4><span class="bp3-icon-standard bp3-icon-document"></span>{}</h4>
</a>
    '''.format(linkUrl, bucketKey))

# Close files
releaseIndexFile.close()

print("Done!")