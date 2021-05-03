# Twitter Feed Using Lightning Web Component

Approach:

1. Create new field on Account object to store the Twitter Account ID.
2. Create a VF page to load the script given by twitter (currently not woring in LWC directly)
3. Add the url inside the remote setting to avoid the CORS issue
4. Create LWC componet
5. Add iframe of VF page to LWC
6. Fetch the record id and records details using getRecord wire adapter
7. Deploy the new twitter lwc componet on Account flexi page.
8. Update the new Twiiter Id value on any account record and view the results.
