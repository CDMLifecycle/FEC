# PROJECT CATWALK

### INDEX

**1. Summary**
**2. Installation**
**3. Getting Started**
**4. Module descriptions**
**5. Running the Tests**
**6. Authors**
**7. License**
**8. Acknowledgments**


## Summary
  Project Catwalk is an ecommerce, retail-centric website application. It updates our companies outdated, retail portal with a modernized, React-based client running on a lean express server. The application organizes and serves information regarding product details, related products, user looks, product question and anwers, and product reviews, as well as a product search feature.

### Installation
###### Pre-Installation Requirements
    Node v14.15.1
    NPM v6.14.11
###### Instructions
  - After cloning this repo, open your CLI within the root directory of this project and run 'npm install'.
  - Acquire a github personal access token for access to our API. Create a file in the root project directory named 'authorization.config.js'.
  Copy and paste the following code into the newly created file:
    module.exports = {
      token: <YOUR_TOKEN>
    };
  - Run 'npm react-dev' to bundle webpack. Webpack will watch for code changes automatically.

### Getting Started
  To run the server locally on your machine, run 'npm start' within the root directory.
  The server runs on PORT 3000 by default. Navigate to http://localhost:3000 to view the client.

## Module Descriptions

### Product Details
In this component, a user can view a product, select through different assortments, and view different accessories. Features include:
- Right and left arrows to change primary product photo
- Scrolling sidebars to view everything the search option has to offer
- An optional full screen version of the primary product photo on click of full screen button
- On click of a photo renders a 1.5x bigger view
- Selections of different colors by click of a button.
- Ratings functionality with stars.
- On click of button to choose a size
- The product details and slogan
- A Checkout button


### Related Products and User Looks
  Related Products Provides a list of scrollable cards that we think a user would be interested in. The component includes:
  - A table for comparing a related product to the current primary product. The table lists characterstics shared and unique to both products and is availble within a model on click.
  - A carousel of cards that move left and right on arrow clicks. Cards will scroll the exact width of a product card. Arrows will not display if not needed
  - A gallery of all product styles images available on hover of a card. These thumbnails will update the larger product card image on click.

  User Looks Prodives a Space for a user to save items to a carousel list of cards that persists through their session. Features include:
  - A card that adds a currently viewed product to the carousel on click
  - A delete card icon that removes a card from looks and the session on click
  - On page refresh, a user's looks will persists until the tab or window is closed.

### Product Questions and Answers
The QA component allows a user to read and add questions and answers from other users for the selected product. Features include:
- Submitting a question/answer
- Containment of answers to question to scrollable div
- Ability to search for questions
- Mark answers/questions helpful
- Report inappropriate questions/answers

### Product Reviews
Ratings and Reviews Module

This module features the ratings and reviews based on a specific product ID. This component is subdivided into 2 interactive columns, a meta-analysis column and a review list column.

The meta-analysis column parses the metadata associated with the product and highlights these data points. The data it yields and presents to the user are overall average rating, total number of reviews, and a percentage of reviews that recommend the product. A five star rating corresponding to the average rating is also included for enhancing visibility. Another graphic enhancement of this section include a characteristics section that shows where an item’s attributes fall in a range, based on previous reviews. The final piece of this section is a chart that quantifies how many reviews per star and that is interactive. This interactivity allows the user to choose a specific star and filter the reviews list that equals the star count selected. This filter is. also additive, allowing to filter multiple star counts at the same time.

The next column is the reviews list. It starts by presenting information 2 reviews at a time until there are none left. It sorts the reviews based on one of three parameters: relevant, newest, and helpful. A user may interact with the sort features at the top to reshuffle the reviews based on the parameter. A user may also interact with a button that finds specific reviews helpful, where a tally is kept and updated, as well as a report button, where a review will be removed from the list.

The last item in this section is a pop-out modal that will allow a user to write they own review and submit it. A graphic enhancement is a star section that highlights over hover or when selected. The review is then added to the review list.

Future enhancements would include a section for a reviewer to post pictures and display them, and a search feature that would filter reviews based on a search parameter.

## Running The Tests
  To run jest tests that cover the entire project, run 'npm test' in the root dir.

## Authors
  * Connie Tsai - Question and Answers, Scrum Master
  * Michael Smith - Related Products and User Looks
  * Daniel Kosykh - Product Reviews
  * Liem Nguyen - Product Details

## License
  This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgements
  We'd like to express our deepest gratitude to Rob Lopez and Maia Ling for their feedback on this project.

  Additional Thanks To:


