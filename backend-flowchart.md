# Mr. Coder Backend Architecture Flowchart
## Node.js + MongoDB Backend System

### 🏗️ System Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   Database      │
│   (Next.js)     │◄──►│   (Node.js)     │◄──►│   (MongoDB)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                              │
                              ▼
                       ┌─────────────────┐
                       │   External      │
                       │   Services      │
                       └─────────────────┘
```

### 📊 Main Application Flow

```mermaid
graph TD
    A[Client Request] --> B{Authentication?}
    B -->|Yes| C[JWT Token Validation]
    B -->|No| D[Public Routes]
    
    C --> E{Token Valid?}
    E -->|Yes| F[Authorized Access]
    E -->|No| G[Return 401 Unauthorized]
    
    F --> H[Route Handler]
    D --> H
    
    H --> I{Database Operation?}
    I -->|Yes| J[MongoDB Query]
    I -->|No| K[Return Response]
    
    J --> L{Query Success?}
    L -->|Yes| M[Return Data]
    L -->|No| N[Error Handler]
    
    M --> O[Response to Client]
    N --> O
    K --> O
```

### 🔐 Authentication Flow

```mermaid
graph TD
    A[User Login] --> B[Validate Credentials]
    B --> C{Valid?}
    C -->|Yes| D[Generate JWT Token]
    C -->|No| E[Return Error]
    
    D --> F[Store Token in DB]
    F --> G[Return Token to Client]
    
    H[Protected Route Access] --> I[Extract Token from Header]
    I --> J[Verify Token]
    J --> K{Valid Token?}
    K -->|Yes| L[Allow Access]
    K -->|No| M[Return 401]
```

### 💾 Database Operations Flow

```mermaid
graph TD
    A[API Request] --> B[Validate Input]
    B --> C{Input Valid?}
    C -->|Yes| D[Connect to MongoDB]
    C -->|No| E[Return Validation Error]
    
    D --> F[Execute Query]
    F --> G{Query Success?}
    G -->|Yes| H[Process Results]
    G -->|No| I[Database Error Handler]
    
    H --> J[Format Response]
    I --> K[Return Error Response]
    J --> L[Send Response]
    K --> L
```

### 🎯 Core API Endpoints Flow

#### User Management
```mermaid
graph LR
    A[POST /api/auth/register] --> B[Validate User Data]
    B --> C[Hash Password]
    C --> D[Save to MongoDB]
    D --> E[Generate JWT]
    E --> F[Return User + Token]
    
    G[POST /api/auth/login] --> H[Find User]
    H --> I[Verify Password]
    I --> J[Generate JWT]
    J --> K[Return Token]
    
    L[GET /api/users/profile] --> M[Verify JWT]
    M --> N[Return User Data]
```

#### Project Management
```mermaid
graph LR
    A[POST /api/projects] --> B[Create Project]
    B --> C[Save to MongoDB]
    C --> D[Return Project]
    
    E[GET /api/projects] --> F[Fetch Projects]
    F --> G[Apply Filters]
    G --> H[Return Projects]
    
    I[PUT /api/projects/:id] --> J[Update Project]
    J --> K[Save Changes]
    K --> L[Return Updated Project]
    
    M[DELETE /api/projects/:id] --> N[Delete Project]
    N --> O[Return Success]
```

#### Meeting Management
```mermaid
graph LR
    A[POST /api/meetings] --> B[Create Meeting]
    B --> C[Validate Schedule]
    C --> D[Save to MongoDB]
    D --> E[Send Notifications]
    E --> F[Return Meeting]
    
    G[GET /api/meetings] --> H[Fetch Meetings]
    H --> I[Filter by Date/User]
    I --> J[Return Meetings]
    
    K[PUT /api/meetings/:id] --> L[Update Meeting]
    L --> M[Notify Participants]
    M --> N[Return Updated Meeting]
```

### 🔧 Database Schema Flow

#### User Collection
```javascript
{
  _id: ObjectId,
  email: String,
  password: String (hashed),
  name: String,
  role: String,
  avatar: String,
  createdAt: Date,
  updatedAt: Date
}
```

#### Project Collection
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  status: String,
  clientId: ObjectId,
  teamMembers: [ObjectId],
  budget: Number,
  startDate: Date,
  endDate: Date,
  createdAt: Date,
  updatedAt: Date
}
```

#### Meeting Collection
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  date: Date,
  time: String,
  duration: Number,
  participants: [ObjectId],
  createdBy: ObjectId,
  status: String,
  createdAt: Date,
  updatedAt: Date
}
```

### 🛡️ Security Flow

```mermaid
graph TD
    A[Request] --> B[Rate Limiting]
    B --> C[CORS Check]
    C --> D[Input Sanitization]
    D --> E[Authentication]
    E --> F[Authorization]
    F --> G[Business Logic]
    G --> H[Response Sanitization]
    H --> I[Send Response]
```

### 📈 Error Handling Flow

```mermaid
graph TD
    A[Error Occurs] --> B{Error Type?}
    B -->|Validation| C[Return 400 Bad Request]
    B -->|Authentication| D[Return 401 Unauthorized]
    B -->|Authorization| E[Return 403 Forbidden]
    B -->|Not Found| F[Return 404 Not Found]
    B -->|Database| G[Return 500 Internal Server Error]
    
    C --> H[Log Error]
    D --> H
    E --> H
    F --> H
    G --> H
    
    H --> I[Send Error Response]
```

### 🚀 Implementation Steps

#### 1. Project Setup
```bash
# Initialize Node.js project
npm init -y

# Install dependencies
npm install express mongoose bcryptjs jsonwebtoken cors helmet morgan dotenv

# Install dev dependencies
npm install -D nodemon jest supertest
```

#### 2. Folder Structure
```
backend/
├── config/
│   ├── database.js
│   └── auth.js
├── controllers/
│   ├── authController.js
│   ├── userController.js
│   ├── projectController.js
│   └── meetingController.js
├── middleware/
│   ├── auth.js
│   ├── validation.js
│   └── errorHandler.js
├── models/
│   ├── User.js
│   ├── Project.js
│   └── Meeting.js
├── routes/
│   ├── auth.js
│   ├── users.js
│   ├── projects.js
│   └── meetings.js
├── utils/
│   ├── logger.js
│   └── helpers.js
├── app.js
└── server.js
```

#### 3. Environment Configuration
```env
# .env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mr_coder
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
```

#### 4. Database Connection Flow
```javascript
// config/database.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
```

#### 5. Authentication Middleware Flow
```javascript
// middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  try {
    // 1. Get token from header
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }
    
    // 2. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // 3. Get user from database
    const user = await User.findById(decoded.id).select('-password');
    
    if (!user) {
      return res.status(401).json({ message: 'Token is not valid' });
    }
    
    // 4. Add user to request
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};
```

### 🔄 API Response Flow

#### Success Response
```javascript
{
  success: true,
  data: {
    // Response data
  },
  message: "Operation successful"
}
```

#### Error Response
```javascript
{
  success: false,
  error: {
    code: "ERROR_CODE",
    message: "Error description"
  }
}
```

### 📊 Performance Optimization Flow

```mermaid
graph TD
    A[Request] --> B[Cache Check]
    B --> C{Cached?}
    C -->|Yes| D[Return Cached Data]
    C -->|No| E[Database Query]
    E --> F[Cache Result]
    F --> G[Return Data]
    D --> H[Response]
    G --> H
```

### 🔍 Monitoring & Logging Flow

```mermaid
graph TD
    A[Request] --> B[Log Request]
    B --> C[Process Request]
    C --> D[Log Response]
    D --> E[Monitor Performance]
    E --> F[Alert if Issues]
```

### 🚀 Deployment Flow

```mermaid
graph TD
    A[Code Changes] --> B[Git Push]
    B --> C[CI/CD Pipeline]
    C --> D[Run Tests]
    D --> E{Tests Pass?}
    E -->|Yes| F[Build Application]
    E -->|No| G[Fail Build]
    F --> H[Deploy to Staging]
    H --> I{Staging OK?}
    I -->|Yes| J[Deploy to Production]
    I -->|No| K[Rollback]
```

### 📋 API Documentation Flow

```javascript
// Example API endpoint documentation
/**
 * @route   POST /api/auth/login
 * @desc    Authenticate user and return token
 * @access  Public
 * @body    { email: string, password: string }
 * @returns { success: boolean, data: { user, token } }
 */
```

This comprehensive flowchart provides a complete backend architecture for Mr. Coder using Node.js and MongoDB, covering authentication, database operations, API endpoints, security, error handling, and deployment strategies. 