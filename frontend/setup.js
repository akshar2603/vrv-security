const fs = require('fs');
const paths = [
    { path: 'src/components/Register.js', content: '// Register Component' },
    { path: 'src/components/Login.js', content: '// Login Component' },
    { path: 'src/components/Dashboard.js', content: '// Dashboard Component' },
    { path: 'src/components/AdminPage.js', content: '// AdminPage Component' },
    { path: 'src/components/UserPage.js', content: '// UserPage Component' },
    { path: 'src/components/ModeratorPage.js', content: '// ModeratorPage Component' }
];

paths.forEach(({ path, content }) => {
    const dir = path.substring(0, path.lastIndexOf('/')); // Get the directory
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true }); // Create the directory
        console.log(`Created directory: ${dir}`);
    }
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, content); // Create the file and add default content
        console.log(`Created file: ${path}`);
    }
});
