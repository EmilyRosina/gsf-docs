---
title: About
editLink: false
lastUpdated: false
prev: false
next: false
---

# About

### Why I made GSF

Originally, I created [Github Saved Filters](https://chrome.google.com/webstore/detail/github-saved-filters/pmkbippobcmchabghaeonfbbcncjhmjm), as a personal and professional need within my company.
I found I was needing to query the same things every day/week/month but regularly forgetting syntax for each search and finding typing it all out laborious.

Using bookmarks I started to add links to the issues and pulls repo pages, with queries populated in the URL.
This worked for a while, until I found it difficult to quickly find the query I needed and the name wouldn't always reflect the results anymore, so I'd need to change the bookmark name.

All in all, quite tedious and so I sought out chrome extensions to see if anything solved my problem.
Finding one close to what I wanted but not fully featured enough.. I decided to make my own!


### How I made GSF

Not knowing anything about chrome extension development, I took to YouTube tutorials and [Google's docs](https://developer.chrome.com/docs/extensions/) explaining how to do it.
After lots of experimenting, designing everything in [Figma](https://www.figma.com/), working out data structures and data storage I got it all working.
This was originally with vanilla js, so lots of manual creating and appending of nodes etc.. which was tbh a massive pita.

Then one day I discovered [vue-cli-plugin-browser-extension](https://www.npmjs.com/package/vue-cli-plugin-browser-extension), which was a godsend!
I could work with [Vue.js](https://vuejs.org/), of which i'm very well versed having developed with it personally and professionally for several years now, I was over the moon!
So, I got to work refactoring everything, all of which was relatively quick. These optimisations allowed me to more greatly fine tune the store, components and various other things that proved way too much effort to have tackled before with vanilla js.


### What future I see for GSF

I always have some kind of improvements and features in my mind, most of which you can see on the [Roadmap](https://gsf.featurebase.app/roadmap).
Bringing things to users that they've actually asked for, is a great feeling - I hope my solutions work and solve things for you.

I would like to bring this extension to the FireFox extension store too, eventually. Unsure of things I'd need to change just yet, outside of differences to account for regarding styling, storage and manifest, but it is certainly a possibility.
