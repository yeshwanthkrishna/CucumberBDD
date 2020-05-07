$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/sai/eclipse-workspace/FacebookBDD/src/main/java/Features/Tags.feature");
formatter.feature({
  "line": 2,
  "name": "working on tags",
  "description": "",
  "id": "working-on-tags",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Functionaltest"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "open facebook",
  "description": "",
  "id": "working-on-tags;open-facebook",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "open browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Tagsdefinitions.open_browser()"
});
formatter.result({
  "duration": 495117747,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "facebook is opened",
  "description": "",
  "id": "working-on-tags;facebook-is-opened",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Regressiontest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "check the details",
  "keyword": "Given "
});
formatter.match({
  "location": "Tagsdefinitions.check_the_details()"
});
formatter.result({
  "duration": 71814,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "enter details",
  "description": "",
  "id": "working-on-tags;enter-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Smoketest"
    },
    {
      "line": 12,
      "name": "@Regressiontest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "enter credentials",
  "keyword": "Given "
});
formatter.match({
  "location": "Tagsdefinitions.enter_credentials()"
});
formatter.result({
  "duration": 79373,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "check password",
  "description": "",
  "id": "working-on-tags;check-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Regressiontest"
    },
    {
      "line": 16,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "enter correctly",
  "keyword": "Given "
});
formatter.match({
  "location": "Tagsdefinitions.enter_correctly()"
});
formatter.result({
  "duration": 62634,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "signup facebook",
  "description": "",
  "id": "working-on-tags;signup-facebook",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@Smoketest"
    },
    {
      "line": 20,
      "name": "@end2endtest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "register to facebook",
  "keyword": "Given "
});
formatter.match({
  "location": "Tagsdefinitions.register_to_facebook()"
});
formatter.result({
  "duration": 71274,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "enter firstname",
  "description": "",
  "id": "working-on-tags;enter-firstname",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@end2endtest"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "check the spelling",
  "keyword": "Given "
});
formatter.match({
  "location": "Tagsdefinitions.check_the_spelling()"
});
formatter.result({
  "duration": 62634,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "enter dob",
  "description": "",
  "id": "working-on-tags;enter-dob",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@end2endtest"
    },
    {
      "line": 32,
      "name": "@Regressiontest"
    },
    {
      "line": 32,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "birthday selected",
  "keyword": "Given "
});
formatter.match({
  "location": "Tagsdefinitions.birthday_selected()"
});
formatter.result({
  "duration": 76133,
  "status": "passed"
});
});