# Frontend Homework - Campaign Card

I have a great time build this. Thanks for the challenge!

Browser Support:
EDGE15+

## ToDo:

> Build a campaign card front and back using HTML, CSS, and JavaScript.

### HTML/CSS
- [x] implement the attached design using HTML and CSS
### JS
- [/] Use ajax pull data donors JSON file
- [ ] Load asynchronously
- [x] Sum the total number of donors and dollars

**Extra Credit**
- [x] Create a "MAKE A GIFT" button, use provided Stripe account, add Stripe Checkout.js
- [x] When you click the "MAKE A GIFT" button, trigger the Stripe Checkout UI
- [x] Follow the guide to implement Stripe Checkout

## Notes
- I used sanitize.css to reset browser defaults. I hope this is alright
- I would have liked to have tried/used the Web Animation API, but browser support isn't there yet in most cases. Instead I went with CSS Keyframes
- I did not use AJAX to pull JSON donor data. Had it been and API endpoint I would have gone with either Fetch or Axios. I hope this is okay
- Changed percent from what was in the mockup since 4,256 is 17% of 25,000
- Lastly, leveraging a marketing pixel to capture users who view the page versus people who make a donation could be helpful. With that data it would be possible to target specific audiences(e.g. on Facebook) in an effort to grow the campaign