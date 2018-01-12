# tconf-2017-talk

Code for the tconf Protractor and Docker talk. 
===== Tconf.io =====

The firefox direct connect is not gonna work for Protractor v5.2.0 due to an open issue.
More info : https://github.com/angular/protractor/issues/4501

To run tests on firefox:

First scale firefox nodes
    docker-compose up --scale nodefirefox=2 -d

and then run the below cmd : 
    ./node_modules/.bin/protractor config/selenium-grid.conf.js
