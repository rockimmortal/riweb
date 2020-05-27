# Adding Google Calendar Functionality
Google calendar functionality externally requires:
- A Google API service account and a credentials JSON key file generated from it
- A regular Google account for hosting the public calendar, as the default calendar is used by the API

Once you have created the Google API service account, take note of the email associated with it, as it will be given permissions to modify the calendar.

Access the settings of the calendar of the newly created regular account and ensure it is set up like this:

![ss_cal_settings](https://raw.githubusercontent.com/rockimmortal/riweb/documentation/src/backend/doc/img/ss_cal_settings.png)

Please see the example microservices for how to connect to the calendar using Python 3.