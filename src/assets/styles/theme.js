// import media from './media';

export const theme = {
  colors: {
    black: '#1d3557',
    lightGrey: '#F6F6F6',
    blue: '#00A3FF',
    red: '#D00000',
    yellow: `#fca311`,
  },
  fontSize: {
    xl: '35px',
    l: '20px',
  },

  mediaQuery: {
    mobile: `(min-width: 320px)`,
    tablet: `(min-width: 768px)`,
    laptop: `(min-width: 1024px)`,
  },
};

// Media Queris jak uzywac

//  @media ${({ theme }) => theme.media.tablet} {
//   font-size: ${({ theme }) => theme.fontSize.xl};
// }
