# Blog

A React-based application displaying news articles by category and search functionality. Users can explore articles in multiple categories or search for specific keywords. The project leverages the Context API for state management, including search and filter functionalities without mutating the original data.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Components Overview](#components-overview)

## Features

- **News Articles Display**: Articles are displayed as cards on the main page, organized by categories.
- **Category Filter**: Select categories from a dropdown to view articles related to a specific topic.
- **Search Bar**: Search for articles by keywords, dynamically filtering displayed results.
- **Context API**: Manages the global state of data across components without mutating the original data set.
- **React Router**: Navigate to detailed article pages by clicking on any article card.

## Technologies Used

- **React**: Component-based UI library for building interactive interfaces.
- **React Router**: For navigation and creating dynamic pages.
- **React Context API**: Global state management, particularly for data filtering and searching.
- **CSS (or Tailwind CSS)**: Styling components and ensuring responsiveness.

### Screenshot

![](/src/assets/screenshot.png)

### Links

- Live Site URL: [Yusif-Blog](https://blog-almdrsa.vercel.app/)

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Yussif20/blog_Almdrsa
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage

1. **Navigate to the Home page** to view a list of articles.
2. **Filter by category**: Use the dropdown menu to select and view articles by specific categories.
3. **Search for articles**: Type a keyword in the search bar to find articles that match your search.
4. **View article details**: Click on any article card to view more information on a dedicated page.

## Components Overview

- **`Layout`**: Main wrapper for the app; provides the context for state management.
- **`Header`**: Includes the search bar and category filter dropdown.
- **`CategoryMenu`**: Dropdown component for selecting categories, updating the displayed articles without altering the original data.
- **`SearchBar`**: A search input that dynamically filters articles based on keywords.
- **`ArticleList`**: Displays a list of article cards based on the current filter or search state.
- **`ArticlePage`**: Shows detailed information for a selected article.

## Code Snippet Example

Here is how the `RegionMenu` component ensures the original data is not mutated when filtering by category:

```javascript
const regionChangeHandler = (selectedOption) => {
  const category = selectedOption.label;

  const filteredList =
    category === 'All Categories'
      ? originalData
      : originalData.filter((article) => article.category === category);

  setDataState(filteredList);
};
```
