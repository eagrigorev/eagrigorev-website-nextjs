import { createGlobalStyle } from 'styled-components';

const Theme = createGlobalStyle`
  :root {
    /* Step -2: 12.50px → 12.80px */
    --step--2: clamp(0.78rem, calc(0.77rem + 0.03vw), 0.80rem);

    /* Step -1: 15.00px → 16.00px */
    --step--1: clamp(0.94rem, calc(0.92rem + 0.11vw), 1.00rem);

    /* Step 0: 18.00px → 20.00px */
    --step-0: clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem);

    /* Step 1: 21.60px → 25.00px */
    --step-1: clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem);

    /* Step 2: 25.92px → 31.25px */
    --step-2: clamp(1.62rem, calc(1.50rem + 0.58vw), 1.95rem);

    /* Step 3: 31.10px → 39.06px */
    --step-3: clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem);

    /* Step 4: 37.32px → 48.83px */
    --step-4: clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem);

    /* Step 5: 44.79px → 61.04px */
    --step-5: clamp(2.80rem, calc(2.45rem + 1.77vw), 3.82rem);

    /* Space 3xs: 5px → 5px */
  --space-3xs: clamp(0.31rem, calc(0.31rem + 0.00vw), 0.31rem);

  /* Space 2xs: 9px → 10px */
  --space-2xs: clamp(0.56rem, calc(0.54rem + 0.11vw), 0.63rem);

  /* Space xs: 14px → 15px */
  --space-xs: clamp(0.88rem, calc(0.85rem + 0.11vw), 0.94rem);

  /* Space s: 18px → 20px */
  --space-s: clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem);

  /* Space m: 27px → 30px */
  --space-m: clamp(1.69rem, calc(1.62rem + 0.33vw), 1.88rem);

  /* Space l: 36px → 40px */
  --space-l: clamp(2.25rem, calc(2.16rem + 0.43vw), 2.50rem);

  /* Space xl: 54px → 60px */
  --space-xl: clamp(3.38rem, calc(3.24rem + 0.65vw), 3.75rem);

  /* Space 2xl: 72px → 80px */
  --space-2xl: clamp(4.50rem, calc(4.33rem + 0.87vw), 5.00rem);

  /* Space 3xl: 108px → 120px */
  --space-3xl: clamp(6.75rem, calc(6.49rem + 1.30vw), 7.50rem);

  /* Space 4xl: 144px → 160px */
  --space-4xl: clamp(9.00rem, calc(8.65rem + 1.74vw), 10.00rem);

  /* One-up pairs */
  /* Space 3xs-2xs: 5px → 10px */
  --space-3xs-2xs: clamp(0.31rem, calc(0.20rem + 0.54vw), 0.63rem);

  /* Space 2xs-xs: 9px → 15px */
  --space-2xs-xs: clamp(0.56rem, calc(0.43rem + 0.65vw), 0.94rem);

  /* Space xs-s: 14px → 20px */
  --space-xs-s: clamp(0.88rem, calc(0.74rem + 0.65vw), 1.25rem);

  /* Space s-m: 18px → 30px */
  --space-s-m: clamp(1.13rem, calc(0.86rem + 1.30vw), 1.88rem);

  /* Space m-l: 27px → 40px */
  --space-m-l: clamp(1.69rem, calc(1.40rem + 1.41vw), 2.50rem);

  /* Space l-xl: 36px → 60px */
  --space-l-xl: clamp(2.25rem, calc(1.73rem + 2.61vw), 3.75rem);

  /* Space xl-2xl: 54px → 80px */
  --space-xl-2xl: clamp(3.38rem, calc(2.81rem + 2.83vw), 5.00rem);

  /* Space 2xl-3xl: 72px → 120px */
  --space-2xl-3xl: clamp(4.50rem, calc(3.46rem + 5.22vw), 7.50rem);

  /* Space 3xl-4xl: 108px → 160px */
  --space-3xl-4xl: clamp(6.75rem, calc(5.62rem + 5.65vw), 10.00rem);

  /* Custom pairs */
  /* Space s-l: 18px → 40px */
  --space-s-l: clamp(1.13rem, calc(0.65rem + 2.39vw), 2.50rem);

  /* Space s-s: 18px → 20px */
  --space-s-s: clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem);

  /* Space l-4xl: 36px → 160px */
  --space-l-4xl: clamp(2.25rem, calc(-0.45rem + 13.48vw), 10.00rem);

    /* Grid dimensions */
    --grid-max-width: 77.5rem;
    --grid-gutter: var(--space-s-l,
        clamp(1.13rem, calc(0.65rem + 2.39vw), 2.5rem));
    --grid-columns: 12;
  }

  .u-container {
    max-width: var(--grid-max-width);
    padding-inline: var(--grid-gutter);
    margin-inline: auto;
  }

  /* CSS Reset */
	/* Box sizing rules */
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	/* Remove default margin */
	body,
	h1,
	h2,
	h3,
	h4,
	p,
	figure,
	blockquote,
	dl,
	dd {
		margin: 0;
	}

	/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
	ul[role='list'],
	ol[role='list'] {
		list-style: none;
	}

	/* Set core root defaults */
	html {
		scroll-behavior: smooth;
	}

	/* Set core body defaults */
	body {
		min-height: 100vh;
		text-rendering: optimizeSpeed;
		line-height: 1.5;
		/* scroll-behavior: smooth; */
	}

	/* A elements that don't have a class get default styles */
	a:not([class]) {
		text-decoration-skip-ink: auto;
	}

	/* Make images easier to work with */
	img,
	picture {
		max-width: 100%;
		display: block;
	}

	/* Inherit fonts for inputs and buttons */
	input,
	button,
	textarea,
	select {
		font: inherit;	
	}

	/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
	@media (prefers-reduced-motion: reduce) {
		html:focus-within {
			scroll-behavior: auto;
		}
		
		*,
		*::before,
		*::after {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			scroll-behavior: auto !important;
		}
		}
		html, body, #root {
			height: 100%;
	}

	iframe {
		max-width:100%;
	}
`;

export default Theme;
