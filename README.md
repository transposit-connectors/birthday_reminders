# Birthday Reminders

This is a simple Transposit app to add birthdays of friends and family to your Google calendar. It automates and simplifies the process of creating yearly recurring events.

To try it out, view the [hosted app page](https://birthday-reminders-ppgv4.transposit.io/), authorize with your Google calendar, and can then enter names and dates.

The `AddBirthday` operation works by creating a yearly recurring event on the authorized user's google calendar. It returns the event id so we can remove the event (the `Undo` operation) if necessary.

Fork the app to make your own changes! You might want to add notifications to events, expand the app to support more than just birthdays, or add in a feature to add multiple birthdays at once.

