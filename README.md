# EuBlog

This is a sorta proof-of-concept serverless blog.
The idea is that there'll be a static site that serves javascript which both serves as an editor and compiler for the static blog templates.
After compiling, the client-side js will then also publish.

The only current publishing mechanism is via supplying s3 api keys and thus allowing it to write to your static website bucket. More backends welcome.

This is very much in the experimental-does-not-work stage.

