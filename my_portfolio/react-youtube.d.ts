declare module 'react-youtube' {
    export interface Options {
      height?: string;
      width?: string;
      playerVars?: {
        autoplay?: 0 | 1;
        modestbranding?: 1;
        rel?: 0 | 1;
        enablejsapi?: 0 | 1;
      };
    }
  }