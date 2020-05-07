Feature: facebook signup feature

Scenario Outline: facebook signup test scenario

Given User is at sign up page

When title is facebook

Then user enters "<Firstname>" and "<Lastname>" and "<email>" and "<password>"

Then Select Birthday

Then guy opt for gender

Then user clicks signup button

Then close the browser

Examples:

 | Firstname | Lastname | email               | password | 
 | mike      | kosa     | kittu8064@gmail.com | 123456 | 
 |marty      | byrde    | yesh@gmail.com      | 456789 | 
 |ruth       | lang     | ruth@4675@gmail.com | 123890 | 
 
