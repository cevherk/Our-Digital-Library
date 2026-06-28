# Our Digital Library 📚

A warm, modern, and personal digital library tracker built for İbrahim and Esra to keep track of the books they have read, are reading, or plan to read together. 

## Features
- **No Database Required:** All data is managed through a simple `data.js` file.
- **Warm Aesthetic:** Designed to evoke the feeling of a cozy wooden library with pastel colors and elegant typography.
- **Real-time Filtering:** Instantly search for books by title or author.
- **Reading Status:** Filter books by who has read them (İbrahim, Esra, or both).
- **Responsive Design:** Looks great on desktop, tablet, and mobile devices.

## How to Deploy on GitHub Pages
1. Push this repository to your GitHub account.
2. Go to your repository **Settings**.
3. Navigate to **Pages** on the left sidebar.
4. Under "Source", select the `main` branch (or `master`) and save.
5. Your digital library will be live at `https://[your-username].github.io/[repository-name]/` within a few minutes.

## How to Add a New Book
To add a new book to the collection, simply open `data.js` and add a new object to the `libraryData` array. 

Here is a code example:

```javascript
{
    title: "YÜZ YILLIK YALNIZLIK",
    author: "GABRIEL GARCIA MARQUEZ",
    pages: "461",
    publisher: "Can Yayınları",
    ibrahimRead: "14.11.2025",
    esraRead: "", // Leave empty if not read yet
    notes: "Special edition"
}
```

## Technologies Used
- HTML5
- CSS3 (Vanilla, CSS Grid, Flexbox)
- JavaScript (Vanilla)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
