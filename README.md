# Twitter Feed Using Lightning Web Component

Approach:

1. Create new field on Account object to store the Twitter Account ID.
2. Create a VF page to load the script given by twitter (currently not woring in LWC directly)
3. Create LWC componet
4. Add iframe of VF page to LWC
5. Fetch the record id and records details using getRecord wire adapter
6. Deploy the new twitter lwc componet on Account flexi page.
7. Update the new Twiiter Id value on any account record and view the results.
