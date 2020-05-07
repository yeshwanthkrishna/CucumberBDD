@Functionaltest
Feature: working on tags

@Smoketest
Scenario: open facebook
Given open browser

@Regressiontest
Scenario: facebook is opened
Given check the details

@Smoketest @Regressiontest
Scenario: enter details
Given enter credentials

@Regressiontest @Smoketest
Scenario: check password
Given enter correctly

@Smoketest @end2endtest
Scenario: signup facebook
Given register to facebook

@end2endtest
Scenario: enter firstname
Given check the spelling

@end2endtest @Regressiontest
Scenario: enter email address
Given check gmail for updates

@end2endtest @Regressiontest @Smoketest
Scenario: enter dob
Given birthday selected


