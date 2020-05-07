Feature: Facebook login Feature

#Scenario: Facebook login test scenario

#Given User is at login page

#When title is facebook

#Then user enters "7386113914" and "KrishnA@$17"

#Then user clicks on login button

#with examples keyword

Scenario Outline: Facebook login test scenario

Given User is at login page

When title is facebook

Then user enters "<username>" and "<password>"

Then user clicks on login button

Then close the browser


Examples:

 | username | password |
 | 7386113914 | KrishnA@$17 |
 | kittu8064@gmail.com | kittu$17 |

 