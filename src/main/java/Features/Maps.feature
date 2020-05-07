Feature: facebook signup feature

Scenario: facebook signup test scenario

Given User is at sign up page

When title is facebook

Then user enters email and password
| email |  password |
| 7386113914 | KrishnA@$17 |

Then user enters firstname and lastname and address and pwd
| firstname | lastname | address | pwd |
| krishna | kittu | kyk@ui.com | 17kyk |
| amma | kudi | amma@home.com | sri |

Then Select Birthday

Then guy opt for gender

Then user clicks signup button

Then close the browser 

