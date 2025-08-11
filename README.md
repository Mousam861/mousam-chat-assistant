# Gemini Clone

A modern, responsive Gemini AI clone built with React, Vite, and Tailwind CSS. This application provides a chat interface similar to Google's Gemini AI with a beautiful UI and real-time chat functionality.

## Features

- 🎨 **Modern UI**: Beautiful gradient design with smooth animations
- 💬 **Real-time Chat**: Interactive chat interface with streaming responses
- 🎯 **Quick Prompts**: Pre-defined prompt suggestions for common tasks
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- ⚡ **Fast Performance**: Built with Vite for optimal development experience
- 🎭 **Loading States**: Smooth loading animations and user feedback
- 🔧 **Context Management**: Centralized state management with React Context

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Gemini API key from Google AI Studio

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Gemini
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```
   
   To get your Gemini API key:
   1. Go to [Google AI Studio](https://aistudio.google.com/)
   2. Create a new API key
   3. Copy the key and paste it in your `.env` file

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to see your Gemini clone in action!

## Project Structure

```
src/
├── Components/
│   ├── config/
│   │   └── gemini.tsx          # Gemini API integration
│   ├── context/
│   │   └── Context.jsx         # React Context for state management
│   ├── Hero/
│   │   └── Hero.jsx            # Main chat interface
│   └── SideBar/
│       └── SideBar.jsx         # Sidebar navigation
├── assets/
│   ├── assets.js               # Asset imports
│   └── *.png                   # UI icons and images
├── App.jsx                     # Main app component
├── main.jsx                    # App entry point
└── index.css                   # Global styles
```

## Usage

### Basic Chat
1. Type your message in the input field at the bottom
2. Press Enter or click the send button
3. View the AI response with a smooth streaming effect

### Quick Prompts
Click on any of the suggested prompts on the home screen to start a conversation:
- "Suggest beautiful places to see on an upcoming road trip"
- "Plan a healthy meal for the week"
- "Explain quantum computing in simple terms"
- "Draft an email to schedule a meeting"

### Sidebar Features
- **New Chat**: Start a fresh conversation
- **Recent**: View your chat history
- **Help**: Access help and support
- **Activity**: View your activity history
- **Settings**: Configure your preferences

## API Integration

The application uses the official Google GenAI SDK to communicate with Gemini AI. The integration is handled in `src/Components/config/gemini.tsx` with two main functions:

- `generateGeminiResponse()`: For single-shot responses
- `generateGeminiStream()`: For streaming responses (future implementation)

## Customization

### Styling
The application uses Tailwind CSS for styling. You can customize the design by modifying:
- `src/index.css` for global styles
- Component-specific classes in each JSX file
- Color schemes and gradients in the Hero component

### Adding New Features
1. **New Components**: Add them to the `src/Components/` directory
2. **State Management**: Extend the Context in `src/Components/context/Context.jsx`
3. **API Integration**: Modify `src/Components/config/gemini.tsx`

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Set environment variables in Netlify dashboard

## Troubleshooting

### Common Issues

1. **API Key Error**
   - Ensure your `.env` file is in the root directory
   - Verify the API key is correct and has proper permissions
   - Check that the environment variable name is `VITE_GEMINI_API_KEY`

2. **Build Errors**
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check for TypeScript errors in the console

3. **Styling Issues**
   - Ensure Tailwind CSS is properly configured
   - Check that all CSS classes are valid

### Performance Tips

- Use the streaming API for better user experience
- Implement proper error boundaries
- Add loading states for better UX
- Consider implementing chat history persistence

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request


## Acknowledgments

- Google AI Studio for providing the Gemini API
- React team for the amazing framework
- Vite team for the fast build tool
- Tailwind CSS for the utility-first CSS framework
