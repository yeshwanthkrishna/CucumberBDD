$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/sai/eclipse-workspace/FacebookBDD/src/main/java/Features/Signup.feature");
formatter.feature({
  "line": 1,
  "name": "facebook signup feature",
  "description": "",
  "id": "facebook-signup-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "facebook signup test scenario",
  "description": "",
  "id": "facebook-signup-feature;facebook-signup-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is at sign up page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title is facebook",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters \"\u003cFirstname\u003e\" and \"\u003cLastname\u003e\" and \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select Birthday",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "guy opt for gender",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user clicks signup button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "facebook-signup-feature;facebook-signup-test-scenario;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "email",
        "password"
      ],
      "line": 21,
      "id": "facebook-signup-feature;facebook-signup-test-scenario;;1"
    },
    {
      "cells": [
        "mike",
        "kosa",
        "kittu8064@gmail.com",
        "123456"
      ],
      "line": 22,
      "id": "facebook-signup-feature;facebook-signup-test-scenario;;2"
    },
    {
      "cells": [
        "marty",
        "byrde",
        "yesh@gmail.com",
        "456789"
      ],
      "line": 23,
      "id": "facebook-signup-feature;facebook-signup-test-scenario;;3"
    },
    {
      "cells": [
        "ruth",
        "lang",
        "ruth@4675@gmail.com",
        "123890"
      ],
      "line": 24,
      "id": "facebook-signup-feature;facebook-signup-test-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "facebook signup test scenario",
  "description": "",
  "id": "facebook-signup-feature;facebook-signup-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is at sign up page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title is facebook",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters \"mike\" and \"kosa\" and \"kittu8064@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select Birthday",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "guy opt for gender",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user clicks signup button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstepdefinitions.user_at_login_page()"
});
formatter.result({
  "duration": 17810949594,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefinitions.title_is_facebook()"
});
formatter.result({
  "duration": 49946706,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mike",
      "offset": 13
    },
    {
      "val": "kosa",
      "offset": 24
    },
    {
      "val": "kittu8064@gmail.com",
      "offset": 35
    },
    {
      "val": "123456",
      "offset": 61
    }
  ],
  "location": "loginstepdefinitions.user_enters_firstname_lastname_email_password(String,String,String,String)"
});
formatter.result({
  "duration": 3414545463,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefinitions.Select_Birthday()"
});
formatter.result({
  "duration": 692142716,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefinitions.guy_opt_for_gender()"
});
formatter.result({
  "duration": 247805362,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefinitions.user_clicks_signup_button()"
});
formatter.result({
  "duration": 702794363,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefinitions.close_browser()"
});
formatter.result({
  "duration": 8933557738,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "facebook signup test scenario",
  "description": "",
  "id": "facebook-signup-feature;facebook-signup-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is at sign up page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title is facebook",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters \"marty\" and \"byrde\" and \"yesh@gmail.com\" and \"456789\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select Birthday",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "guy opt for gender",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user clicks signup button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstepdefinitions.user_at_login_page()"
});
formatter.result({
  "duration": 9066179845,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefinitions.title_is_facebook()"
});
formatter.result({
  "duration": 49803080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "marty",
      "offset": 13
    },
    {
      "val": "byrde",
      "offset": 25
    },
    {
      "val": "yesh@gmail.com",
      "offset": 37
    },
    {
      "val": "456789",
      "offset": 58
    }
  ],
  "location": "loginstepdefinitions.user_enters_firstname_lastname_email_password(String,String,String,String)"
});
formatter.result({
  "duration": 2477582783,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefinitions.Select_Birthday()"
});
formatter.result({
  "duration": 786051294,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefinitions.guy_opt_for_gender()"
});
formatter.result({
  "duration": 618470486,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefinitions.user_clicks_signup_button()"
});
formatter.result({
  "duration": 558866186,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefinitions.close_browser()"
});
formatter.result({
  "duration": 7717096631,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "facebook signup test scenario",
  "description": "",
  "id": "facebook-signup-feature;facebook-signup-test-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is at sign up page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title is facebook",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters \"ruth\" and \"lang\" and \"ruth@4675@gmail.com\" and \"123890\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select Birthday",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "guy opt for gender",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user clicks signup button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstepdefinitions.user_at_login_page()"
});
formatter.result({
  "duration": 8094026827,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefinitions.title_is_facebook()"
});
formatter.result({
  "duration": 40995910,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ruth",
      "offset": 13
    },
    {
      "val": "lang",
      "offset": 24
    },
    {
      "val": "ruth@4675@gmail.com",
      "offset": 35
    },
    {
      "val": "123890",
      "offset": 61
    }
  ],
  "location": "loginstepdefinitions.user_enters_firstname_lastname_email_password(String,String,String,String)"
});
formatter.result({
  "duration": 3089511202,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefinitions.Select_Birthday()"
});
formatter.result({
  "duration": 936756958,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefinitions.guy_opt_for_gender()"
});
formatter.result({
  "duration": 287628495,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefinitions.user_clicks_signup_button()"
});
formatter.result({
  "duration": 395509430,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefinitions.close_browser()"
});
formatter.result({
  "duration": 3003245656,
  "status": "passed"
});
});