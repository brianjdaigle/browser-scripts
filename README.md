# browser-scripts

Some scripts I've written to run with the
[TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) browser extension.

Many are for use with the Canvas Learning Management System.

All scripts are written with @include web addresses so they will only show up on relevant pages. These addresses may need to be updated to match your URL. Use * as a wildcard for parts of the address that could be anything.

# Download Course Map

This script adds a new "Download Course Map" button to the top right corner of the Canvas modules page. Clicking the button will download a .tsv (tab seperated values) file which can be opened in excel or another spreadsheet. It will give you a list of every item that appears in the modules view, and will have the following columns:
- Name of Module it appears in
- Element's name
- Type of Canvas Element
- URL of Element


