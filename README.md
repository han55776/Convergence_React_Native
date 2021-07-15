# Convergence_React_Native

SPA React Framework with Redux, Redux_Thunk, Hooks

  1. When the app starts, fetch /photos JSON data from the http://jsonplaceholder.typicode.com website 
        
        - Yes (Fetch API GET method)

  2. Create a horizontally scrollable list of photos that represent the data you fetched. 
    Each photo should have the “title” text written diagonally across the photo, have rounded corners, a border, and should have a drop shadow.  
    This should scroll smoothly. 
    
        - Yes (Flatlist, in-style components) 

  3. The photos that are downloaded must be cached so that if the app is terminated, 
    the next session should not have to download previously downloaded images again.
    
        - Yes (AsyncStorage for cache purpose)

  4. Add a button to the screen below the scrollable photo list. 
    Tapping this button will reorder the list in a completely random order. 
    Use a recursive function to reorder the list.
    
        - Yes (Recursive shuffle method in /helpers)
    
Extra notes:

Bonus / optional: Use Expo to distribute the build to someone on our team

        - Yes (All Dev environments are at Expo. Android, IOS, Web OK)
