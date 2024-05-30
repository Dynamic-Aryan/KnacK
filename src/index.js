import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, theme } from '@chakra-ui/react';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
       {/* Wrap components you want to animate with AnimatePresence */}
        <App />
      
    </ChakraProvider>
  </StrictMode>
);

// Export AnimatePresence if needed for use in other files
