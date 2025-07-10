It is a simple websocket implentation chatbot where users can join and chat simply.
# Websocket Chat app

A real-time chat application built with WebSocket technology, featuring a modern UI and robust backend.

## Features

### Backend Features

- ✅ Real-time messaging with WebSocket
- ✅ Room-based chat system
- ✅ User authentication and management
- ✅ Message history and persistence
- ✅ Rate limiting to prevent spam
- ✅ Error handling and validation
- ✅ Automatic reconnection support
- ✅ User join/leave notifications
- ✅ Connection status monitoring

### Frontend Features

- ✅ Modern, responsive UI with Tailwind CSS
- ✅ Real-time messaging interface
- ✅ User-friendly login/room selection
- ✅ Connection status indicators
- ✅ Message timestamps and formatting
- ✅ Online users sidebar
- ✅ Typing indicators
- ✅ Automatic reconnection
- ✅ Error handling and notifications
- ✅ Glass morphism design elements

## Tech Stack

### Backend

- **Node.js** - Runtime environment
- **TypeScript** - Type safety
- **WebSocket (ws)** - Real-time communication
- **UUID** - Unique identifiers

### Frontend

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Chat\ App
   ```

2. **Install Backend Dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Development

1. **Start the Backend Server**

   ```bash
   cd backend
   npm run dev
   ```

   The WebSocket server will run on `ws://localhost:8080`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   The web application will be available at `http://localhost:5173`

### Building for Production

1. **Build Backend**

   ```bash
   cd backend
   npm run build
   npm start
   ```

2. **Build Frontend**
   ```bash
   cd frontend
   npm run build
   npm run preview
   ```

## Usage

1. **Join a Chat Room**

   - Enter your username
   - Specify a room ID (users with the same room ID will be in the same chat)
   - Click "Join Room"

2. **Start Chatting**

   - Type your message in the input field
   - Press Enter or click Send
   - Your messages appear on the right, others on the left

3. **Monitor Users**
   - View online users in the sidebar
   - See join/leave notifications
   - Check connection status

## API Reference

### WebSocket Messages

#### Client → Server

**Join Room**

```json
{
  "type": "join",
  "payload": {
    "roomId": "room-name",
    "username": "user-name"
  }
}
```

**Send Message**

```json
{
  "type": "chat",
  "payload": {
    "message": "Hello, world!"
  }
}
```

**Get Users**

```json
{
  "type": "get_users",
  "payload": {}
}
```

#### Server → Client

**Message Received**

```json
{
  "type": "message",
  "payload": {
    "id": "message-id",
    "username": "sender",
    "message": "Hello, world!",
    "timestamp": "2024-01-01T12:00:00Z"
  }
}
```

**User Events**

```json
{
  "type": "user_joined",
  "payload": {
    "username": "new-user",
    "timestamp": "2024-01-01T12:00:00Z"
  }
}
```

**Error Messages**

```json
{
  "type": "error",
  "payload": {
    "message": "Error description"
  }
}
```

## Features in Detail

### Rate Limiting

- 10 messages per minute per connection
- Automatic cooldown period
- User-friendly error messages

### Message Validation

- Maximum message length: 1000 characters
- Username/room validation
- JSON format validation
- XSS prevention

### Connection Management

- Automatic reconnection on disconnect
- Connection status indicators
- Graceful error handling
- Socket cleanup on disconnect

### User Experience

- Smooth animations and transitions
- Responsive design for mobile/desktop
- Keyboard shortcuts (Enter to send)
- Real-time typing indicators
- Message history on join

## Configuration

### Environment Variables

Currently, the application uses hardcoded values. For production, consider:

- WebSocket server port configuration
- Database connection settings
- CORS settings
- SSL/TLS configuration

### Customization

- Modify room management logic in `backend/src/index.ts`
- Update UI themes in `frontend/src/App.tsx`
- Add custom CSS in `frontend/src/index.css`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Troubleshooting

### Common Issues

**WebSocket Connection Failed**

- Ensure backend server is running on port 8080
- Check firewall settings
- Verify WebSocket URL in frontend

**Messages Not Appearing**

- Check browser console for errors
- Verify user has joined a room
- Ensure WebSocket connection is established

**Build Errors**

- Clear node_modules and reinstall dependencies
- Check Node.js version compatibility
- Verify TypeScript configuration

### Support

For issues and questions:

1. Check the browser console for errors
2. Verify both backend and frontend are running
3. Ensure WebSocket connection is established
4. Check network connectivity

---

Built with ❤️ using modern web technologies
