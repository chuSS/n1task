# n1task

npm i
npm run test

adjust the number of threads by the number of scripts in /tests and the "workers" parameter in nightwatch.conf.js

also the delays will have to be increased for a larger number of threads. one seconds may are not enough before click, etc.