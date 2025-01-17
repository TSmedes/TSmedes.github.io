const items = [
    {
        title: "Texas Hold'em in Rust",
        summary: "I developed a CLI poker game in Rust.", 
        thumbnail: "/images/winning_hand.png", 
        details: "/projects/texas-holdem",
    },
    {
        title: "Learning Model Website",
        summary: "I developed a website at the request of a customer that explains the steps and process of the learning model they use in their business.", 
        thumbnail: "/images/learning-model.png", 
        details: "/projects/learning-model-website",
    },
    {
        title: "Parser in Go",
        summary: "I developed lexical and syntax analysis for a simple made-up programming language in Go.", 
        thumbnail: "/images/go-parser-prolog.png", 
        details: "/projects/go-parser",
    },
    {
        title: "System Design for a Student Budgeting App", 
        summary: "This is a mock system design plan I made. The project is a mobile application that allows students to budget their finances and log school-related expenses.", 
        thumbnail: "/images/system-doc.png", 
        details: "/projects/student-budgeting-app",
        links: 
        [
            { name: "System Proposal", link: "files/System_Proposal.docx" },
            { name: "System Specification", link: "files/System_Specification.docx" },
        ],
        imageUrls: [],
        description: "This is a mock system design plan I made. The project is a mobile application that allows students to budget their finances and log school-related expenses.<br/> The System Proposal document is the initial proposal for the project. It outlines the necessary components and acts as an initial proposed system.<br/> The System Specification document specifies the technical aspects of the system. In it you will find everything form class diagrams to UI wireframes.",
        technologies: []
    },
    {
        title: "Grocery Unit", 
        summary: "A web application that allows users to track items from grocery stores and compare unit prices.", 
        thumbnail: "/images/grocery-login.png", 
        details: "/projects/grocery-unit",
        links: 
        [
            { name: "GitHub", link: "https://github.com/TSmedes/Grocery-Unit" },
            { name: "Live", link: "https://unit-grocery.vercel.app" }
        ],
        imageUrls: 
        [
            "/images/grocery-login.png",
            "/images/grocery-home.png",
            "/images/grocery-product.png",
            "/images/grocery-edit.png",

        ],
        description: "The app allows the user to add items they commonly purchase from the store and add them to their list. Furthermore, the user can add prices from specific locations and retailers with for each item, by either the unit price, or the total price and the unit price will be calculated for them. This allows the user to be able to easily see where the cheapest location is to purchase any given item.",
        technologies: ["React", "Node.js", "Tailwind", "Supabase"]
    },
    {
        title: "TheoNotes", 
        summary: "A mobile application that allows users to take notes and organize them by category, and subcategory. Designed for storing bible verses and notes on the verses", 
        thumbnail: "/images/home.png", 
        details: "/projects/theo-notes",
        links: [{ name: "GitHub", link: "https://github.com/TSmedes/TheoNotes" }],
        imageUrls: [],
        description: "A note-taking app for organizing bible verses and notes.",
        technologies: ["React Native", "Expo", "TypeScript", "Supabase"]
    },
    {
        title: "Ultimate TicTacToe", 
        summary: "An ultimate tic-tac-toe game designed for mobile devices that allows users to play against each other on the same device and online.", 
        thumbnail: "/images/image.png", 
        details: "/projects/ultimate-tictactoe",
        links: [],
        imageUrls: [],
        description: "A mobile game for playing ultimate tic-tac-toe.",
        technologies: ["React Native", "Expo", "TypeScript", "Supabase"]
    },
]

export {items}