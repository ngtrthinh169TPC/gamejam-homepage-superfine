# Gamejam Homepage Submission

## Quest

Using HTML, CSS and Javascript to parse the following JSON and display it in an organized way.

JSON file: https://drive.google.com/file/d/1iGOB0-7n0lBrClHM1H7JLdtFfujuS234/view

Assessment will be based on a few criteria:

- Similarity to design
- Accurate and sorted display of data (from given JSON)
- Implementation of extra features: countdown, button handlers
- Responsiveness/Adaptability
- File structure

## Solution

This is a solution I've create with Indie Stack from Remix.run framework, using mainly **ReactJs** and Tailwind. I also used Luxon for datetime utilities.

This solution is deployed with Fly.io at [this link](https://gamejam-homepage-superfine.fly.dev/).

The code for the main page can be found at [/app/routes/\_index.tsx](/app/routes/_index.tsx), and components that is being used can be found at [/app/components/](/app/components/).

### What to expect

- Similarity to design
- Accurate and sorted display of data
- Extra feature: countdown every minute, links on every button to corresponded urls, buttons' hover state, ...
- Responsiveness: works on phone size and PC size

### What not to expect

- Due to short working time, this solution cannot be a perfectly replicate of the original one. Expected differences include fonts, colors and images (since resource finding is stressful and time consuming D: )
- I can't figure out what the progress bars represent for, so I just mocked those with fixed values. My wild guess is it's the jam's progress (time that passed to jam's time).

_Note: I've changed a bit of data (the start, end, and result time from the jams) to make sure the UI doesn't look like nonsense (negative time at "start in" timer)_
