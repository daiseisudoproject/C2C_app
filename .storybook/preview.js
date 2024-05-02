// import { addDecorator } from '@storybook/react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
// import GlobalStyle from '../src/pages/_app.tsx';
import { theme } from '../src/themes'
import * as NextImage from 'next/image'

// グローバルスタイルの定義
const GlobalStyle = createGlobalStyle`
html,
body,
textarea {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

* {
  box-sizing: border-box;
}

a {
  cursor: pointer;
  text-decoration: none;
  transition: .25s;
  color: ${theme.colors.black};
}

ol, ul {
  list-style: none;
}
`;

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  )
];

export const parameters = {
  // actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// next/imageの差し替え
const OriginalNextImage = NextImage.default;

if (OriginalNextImage && OriginalNextImage.__esModule) {
  Object.defineProperty(NextImage, 'default', {
    configurable: true,
    get() {
      return (props) => typeof props.src === 'string' ? (
        <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
      ) : (
        <OriginalNextImage {...props} unoptimized />
      );
    }
  });
}

