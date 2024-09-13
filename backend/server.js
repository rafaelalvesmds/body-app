const express = require('express');
const cors = require('cors');
const authRoutes = require('./controllers/auth'); 
const teacherRoutes = require('./controllers/teacher');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/teacher', teacherRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
