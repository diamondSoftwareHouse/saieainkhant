import localFont from 'next/font/local';

export const blackOpsOne = localFont({
  src: '../app/fonts/Black_Ops_One/BlackOpsOne-Regular.ttf',
  variable: '--font-black-ops',
  display: 'swap',
});

export const ibmPlexMono = localFont({
  src: '../app/fonts/IBM_Plex_Mono/IBMPlexMono-Regular.ttf',
  variable: '--font-ibm-mono',
  display: 'swap',
});

export const ibmPlexSans = localFont({
  src: '../app/fonts/IBM_Plex_Sans/static/IBMPlexSans-Regular.ttf',
  variable: '--font-ibm-sans',
  display: 'swap',
});

export const ibmPlexSansBold = localFont({
  src: '../app/fonts/IBM_Plex_Sans/static/IBMPlexSans_Condensed-Bold.ttf',
  variable: '--font-ibm-sans-bold',
  display: 'swap',
});

export const inter = localFont({
  src: '../app/fonts/Inter/static/Inter_18pt-Regular.ttf',
  variable: '--font-inter',
  display: 'swap',
});

export const interBlack = localFont({
  src: '../app/fonts/Inter/static/Inter_24pt-Black.ttf',
  variable: '--font-inter-black',
  display: 'swap',
});
