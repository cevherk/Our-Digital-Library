# Our Digital Library 📚

A warm, modern, and personal digital library tracker built for İbrahim and Esra to keep track of the books they have read, are reading, or plan to read together. 

**🌐 Live Demo:** [https://cevherk.github.io/Our-Digital-Library/](https://cevherk.github.io/Our-Digital-Library/)

> 📸 *Tip: You can add a screenshot of your library here later (e.g. `![Library Screenshot](screenshot.png)`).*

## ✨ Features
- **Library Statistics:** Keep track of the total number of books, as well as how many books İbrahim and Esra have read individually or together.
- **Real-time Search & Filtering:** Instantly search books by title or author, filter by reader, and see the exact number of matching results.
- **No Database Required:** All data is stored in a simple `data.js` file, completely eliminating the need for a complex backend.
- **Warm Aesthetic:** A cozy, wooden library aesthetic with beautiful typography and pastel colors.
- **Responsive:** Works and looks perfect on both desktop and mobile devices.

## 📖 How to Add a New Book
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

## 🛠 Technologies Used
- HTML5
- CSS3 (Vanilla, CSS Grid, Flexbox)
- JavaScript (Vanilla)

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
