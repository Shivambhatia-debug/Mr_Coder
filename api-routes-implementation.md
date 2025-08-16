# Mr. Coder API Routes Implementation
## Complete Route Handlers and Controllers

### 🔐 Authentication Routes (routes/auth.js)

```javascript
const express = require('express');
const { body } = require('express-validator');
const { register, login, getMe } = require('../controllers/authController');
const { protect } = require('../middleware/auth');
const { validateRequest } = require('../middleware/validation');

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', [
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  body('role')
    .optional()
    .isIn(['user', 'admin', 'client'])
    .withMessage('Invalid role specified')
], validateRequest, register);

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
], validateRequest, login);

// @route   GET /api/auth/me
// @desc    Get current user
// @access  Private
router.get('/me', protect, getMe);

module.exports = router;
```

### 👥 User Routes (routes/users.js)

```javascript
const express = require('express');
const { body } = require('express-validator');
const { 
  getUsers, 
  getUser, 
  updateUser, 
  deleteUser,
  updateProfile,
  changePassword
} = require('../controllers/userController');
const { protect, authorize } = require('../middleware/auth');
const { validateRequest } = require('../middleware/validation');

const router = express.Router();

// All routes require authentication
router.use(protect);

// @route   GET /api/users
// @desc    Get all users (admin only)
// @access  Private/Admin
router.get('/', authorize('admin'), getUsers);

// @route   GET /api/users/:id
// @desc    Get single user
// @access  Private
router.get('/:id', getUser);

// @route   PUT /api/users/:id
// @desc    Update user (admin only)
// @access  Private/Admin
router.put('/:id', [
  authorize('admin'),
  body('name')
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters'),
  body('email')
    .optional()
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),
  body('role')
    .optional()
    .isIn(['user', 'admin', 'client'])
    .withMessage('Invalid role specified')
], validateRequest, updateUser);

// @route   DELETE /api/users/:id
// @desc    Delete user (admin only)
// @access  Private/Admin
router.delete('/:id', authorize('admin'), deleteUser);

// @route   PUT /api/users/profile
// @desc    Update current user profile
// @access  Private
router.put('/profile/update', [
  body('name')
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters'),
  body('avatar')
    .optional()
    .isURL()
    .withMessage('Please provide a valid avatar URL')
], validateRequest, updateProfile);

// @route   PUT /api/users/profile/password
// @desc    Change password
// @access  Private
router.put('/profile/password', [
  body('currentPassword')
    .notEmpty()
    .withMessage('Current password is required'),
  body('newPassword')
    .isLength({ min: 6 })
    .withMessage('New password must be at least 6 characters long')
], validateRequest, changePassword);

module.exports = router;
```

### 📋 Project Routes (routes/projects.js)

```javascript
const express = require('express');
const { body, query } = require('express-validator');
const { 
  getProjects, 
  getProject, 
  createProject, 
  updateProject, 
  deleteProject,
  addTeamMember,
  removeTeamMember,
  updateProjectStatus
} = require('../controllers/projectController');
const { protect, authorize } = require('../middleware/auth');
const { validateRequest } = require('../middleware/validation');

const router = express.Router();

// All routes require authentication
router.use(protect);

// @route   GET /api/projects
// @desc    Get all projects
// @access  Private
router.get('/', [
  query('status')
    .optional()
    .isIn(['planning', 'in-progress', 'review', 'completed', 'on-hold'])
    .withMessage('Invalid status filter'),
  query('priority')
    .optional()
    .isIn(['low', 'medium', 'high', 'urgent'])
    .withMessage('Invalid priority filter'),
  query('page')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Page must be a positive integer'),
  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Limit must be between 1 and 100')
], validateRequest, getProjects);

// @route   GET /api/projects/:id
// @desc    Get single project
// @access  Private
router.get('/:id', getProject);

// @route   POST /api/projects
// @desc    Create new project
// @access  Private
router.post('/', [
  body('title')
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Title must be between 3 and 100 characters'),
  body('description')
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage('Description must be between 10 and 1000 characters'),
  body('client')
    .isMongoId()
    .withMessage('Please provide a valid client ID'),
  body('startDate')
    .isISO8601()
    .withMessage('Please provide a valid start date'),
  body('endDate')
    .isISO8601()
    .withMessage('Please provide a valid end date'),
  body('budget')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Budget must be a positive number'),
  body('technologies')
    .optional()
    .isArray()
    .withMessage('Technologies must be an array'),
  body('priority')
    .optional()
    .isIn(['low', 'medium', 'high', 'urgent'])
    .withMessage('Invalid priority level')
], validateRequest, createProject);

// @route   PUT /api/projects/:id
// @desc    Update project
// @access  Private
router.put('/:id', [
  body('title')
    .optional()
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Title must be between 3 and 100 characters'),
  body('description')
    .optional()
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage('Description must be between 10 and 1000 characters'),
  body('status')
    .optional()
    .isIn(['planning', 'in-progress', 'review', 'completed', 'on-hold'])
    .withMessage('Invalid status'),
  body('progress')
    .optional()
    .isInt({ min: 0, max: 100 })
    .withMessage('Progress must be between 0 and 100'),
  body('budget')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Budget must be a positive number')
], validateRequest, updateProject);

// @route   DELETE /api/projects/:id
// @desc    Delete project
// @access  Private
router.delete('/:id', deleteProject);

// @route   POST /api/projects/:id/team
// @desc    Add team member to project
// @access  Private
router.post('/:id/team', [
  body('userId')
    .isMongoId()
    .withMessage('Please provide a valid user ID')
], validateRequest, addTeamMember);

// @route   DELETE /api/projects/:id/team/:userId
// @desc    Remove team member from project
// @access  Private
router.delete('/:id/team/:userId', removeTeamMember);

// @route   PATCH /api/projects/:id/status
// @desc    Update project status
// @access  Private
router.patch('/:id/status', [
  body('status')
    .isIn(['planning', 'in-progress', 'review', 'completed', 'on-hold'])
    .withMessage('Invalid status')
], validateRequest, updateProjectStatus);

module.exports = router;
```

### 📅 Meeting Routes (routes/meetings.js)

```javascript
const express = require('express');
const { body, query } = require('express-validator');
const { 
  getMeetings, 
  getMeeting, 
  createMeeting, 
  updateMeeting, 
  deleteMeeting,
  addParticipant,
  removeParticipant,
  updateMeetingStatus
} = require('../controllers/meetingController');
const { protect } = require('../middleware/auth');
const { validateRequest } = require('../middleware/validation');

const router = express.Router();

// All routes require authentication
router.use(protect);

// @route   GET /api/meetings
// @desc    Get all meetings
// @access  Private
router.get('/', [
  query('date')
    .optional()
    .isISO8601()
    .withMessage('Please provide a valid date'),
  query('status')
    .optional()
    .isIn(['scheduled', 'in-progress', 'completed', 'cancelled'])
    .withMessage('Invalid status filter'),
  query('type')
    .optional()
    .isIn(['client-meeting', 'team-meeting', 'project-review', 'planning'])
    .withMessage('Invalid meeting type filter')
], validateRequest, getMeetings);

// @route   GET /api/meetings/:id
// @desc    Get single meeting
// @access  Private
router.get('/:id', getMeeting);

// @route   POST /api/meetings
// @desc    Create new meeting
// @access  Private
router.post('/', [
  body('title')
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Title must be between 3 and 100 characters'),
  body('description')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Description cannot exceed 500 characters'),
  body('date')
    .isISO8601()
    .withMessage('Please provide a valid date'),
  body('time')
    .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9] (AM|PM)$/)
    .withMessage('Please provide valid time format (HH:MM AM/PM)'),
  body('duration')
    .isInt({ min: 15, max: 480 })
    .withMessage('Duration must be between 15 and 480 minutes'),
  body('participants')
    .optional()
    .isArray()
    .withMessage('Participants must be an array'),
  body('meetingType')
    .optional()
    .isIn(['client-meeting', 'team-meeting', 'project-review', 'planning'])
    .withMessage('Invalid meeting type'),
  body('location')
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage('Location cannot exceed 100 characters')
], validateRequest, createMeeting);

// @route   PUT /api/meetings/:id
// @desc    Update meeting
// @access  Private
router.put('/:id', [
  body('title')
    .optional()
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Title must be between 3 and 100 characters'),
  body('description')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Description cannot exceed 500 characters'),
  body('date')
    .optional()
    .isISO8601()
    .withMessage('Please provide a valid date'),
  body('time')
    .optional()
    .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9] (AM|PM)$/)
    .withMessage('Please provide valid time format (HH:MM AM/PM)'),
  body('duration')
    .optional()
    .isInt({ min: 15, max: 480 })
    .withMessage('Duration must be between 15 and 480 minutes'),
  body('status')
    .optional()
    .isIn(['scheduled', 'in-progress', 'completed', 'cancelled'])
    .withMessage('Invalid status')
], validateRequest, updateMeeting);

// @route   DELETE /api/meetings/:id
// @desc    Delete meeting
// @access  Private
router.delete('/:id', deleteMeeting);

// @route   POST /api/meetings/:id/participants
// @desc    Add participant to meeting
// @access  Private
router.post('/:id/participants', [
  body('userId')
    .isMongoId()
    .withMessage('Please provide a valid user ID')
], validateRequest, addParticipant);

// @route   DELETE /api/meetings/:id/participants/:userId
// @desc    Remove participant from meeting
// @access  Private
router.delete('/:id/participants/:userId', removeParticipant);

// @route   PATCH /api/meetings/:id/status
// @desc    Update meeting status
// @access  Private
router.patch('/:id/status', [
  body('status')
    .isIn(['scheduled', 'in-progress', 'completed', 'cancelled'])
    .withMessage('Invalid status')
], validateRequest, updateMeetingStatus);

module.exports = router;
```

### 🎯 Controllers Implementation

#### User Controller (controllers/userController.js)

```javascript
const User = require('../models/User');

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const users = await User.find({})
      .select('-password')
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await User.countDocuments();

    res.status(200).json({
      success: true,
      data: {
        users,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({
      success: false,
      error: {
        code: 'FETCH_USERS_FAILED',
        message: 'Failed to fetch users.'
      }
    });
  }
};

// @desc    Get single user
// @route   GET /api/users/:id
// @access  Private
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');

    if (!user) {
      return res.status(404).json({
        success: false,
        error: {
          code: 'USER_NOT_FOUND',
          message: 'User not found.'
        }
      });
    }

    res.status(200).json({
      success: true,
      data: { user }
    });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({
      success: false,
      error: {
        code: 'FETCH_USER_FAILED',
        message: 'Failed to fetch user.'
      }
    });
  }
};

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({
        success: false,
        error: {
          code: 'USER_NOT_FOUND',
          message: 'User not found.'
        }
      });
    }

    res.status(200).json({
      success: true,
      data: { user },
      message: 'User updated successfully.'
    });
  } catch (error) {
    console.error('Update user error:', error);
    res.status(500).json({
      success: false,
      error: {
        code: 'UPDATE_USER_FAILED',
        message: 'Failed to update user.'
      }
    });
  }
};

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        error: {
          code: 'USER_NOT_FOUND',
          message: 'User not found.'
        }
      });
    }

    res.status(200).json({
      success: true,
      message: 'User deleted successfully.'
    });
  } catch (error) {
    console.error('Delete user error:', error);
    res.status(500).json({
      success: false,
      error: {
        code: 'DELETE_USER_FAILED',
        message: 'Failed to delete user.'
      }
    });
  }
};

// @desc    Update current user profile
// @route   PUT /api/users/profile
// @access  Private
const updateProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      req.body,
      { new: true, runValidators: true }
    ).select('-password');

    res.status(200).json({
      success: true,
      data: { user },
      message: 'Profile updated successfully.'
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({
      success: false,
      error: {
        code: 'UPDATE_PROFILE_FAILED',
        message: 'Failed to update profile.'
      }
    });
  }
};

// @desc    Change password
// @route   PUT /api/users/profile/password
// @access  Private
const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(req.user.id).select('+password');

    // Check current password
    const isPasswordValid = await user.comparePassword(currentPassword);
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        error: {
          code: 'INVALID_PASSWORD',
          message: 'Current password is incorrect.'
        }
      });
    }

    // Update password
    user.password = newPassword;
    await user.save();

    res.status(200).json({
      success: true,
      message: 'Password changed successfully.'
    });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({
      success: false,
      error: {
        code: 'CHANGE_PASSWORD_FAILED',
        message: 'Failed to change password.'
      }
    });
  }
};

module.exports = {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  updateProfile,
  changePassword
};
```

### 🔧 Middleware Implementation

#### Validation Middleware (middleware/validation.js)

```javascript
const { validationResult } = require('express-validator');

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      error: {
        code: 'VALIDATION_ERROR',
        message: 'Validation failed.',
        details: errors.array().map(error => ({
          field: error.path,
          message: error.msg,
          value: error.value
        }))
      }
    });
  }
  
  next();
};

module.exports = { validateRequest };
```

#### Error Handler Middleware (middleware/errorHandler.js)

```javascript
const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log error
  console.error('Error:', err);

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = 'Resource not found';
    error = { message, statusCode: 404 };
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = { message, statusCode: 400 };
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message).join(', ');
    error = { message, statusCode: 400 };
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: {
      code: 'SERVER_ERROR',
      message: error.message || 'Server Error'
    }
  });
};

module.exports = errorHandler;
```

This complete API routes implementation provides all the necessary endpoints for Mr. Coder's backend with proper validation, error handling, and authentication. 