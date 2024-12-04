# Boolean Design System

## Esempi di DS
- https://www.bbc.com/gel/guidelines
- https://www.wix.com/studio/blog/design-system-examples#viewer-3ndfl
- https://fluent2.microsoft.design
- https://storybook.bento-ds.com/
- https://components.tot.money/?path=/docs/intro--docs

## Tool per Design System
- https://storybook.js.org/docs
- https://docusaurus.io

## Installiamo Storybook

`npx storybook@latest init`

Scegliamo come framework React e Vite quando ci viene chiesto il project type oppure installiamo Vite e React manualmente con

`npm install --save-dev @storybook/react-vite`

Nel caso di errore di installazione, installiamo le dipendenze manualmente con

`npm install vite react react-dom --save-dev`

Lanciando il comando `npm run storybook` ci verrà chiesto di scegliere un port per lo Storybook, scegliamo 6006.
Avremo sul nostro browser la nostra prima pagina di Storybook.

## Utilizzare Typescript

Prima di tutto installiamo le seguenti dipendenze:
```npm install @types/react @types/react-dom @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript```


Creiamo nella root di progetto un file `tsconfig.json` con il seguente contenuto:
```JSON
{
	"compilerOptions": {
		"target": "ES2020",
		"useDefineForClassFields": true,
		"lib": ["ES2020", "DOM", "DOM.Iterable"],
		"module": "ESNext",
		"skipLibCheck": true,
		"moduleResolution": "bundler",
		"allowImportingTsExtensions": true,
		"resolveJsonModule": true,
		"isolatedModules": true,
		"noEmit": true,
		"jsx": "react-jsx",
		"strict": true,
		"noUnusedLocals": true,
		"noUnusedParameters": true,
		"noFallthroughCasesInSwitch": true,
		"esModuleInterop": true,
		"allowSyntheticDefaultImports": true
	},
	"include": ["stories", ".storybook", "components"]
}
```

## Useful Links
- [Accessibilitá delle unitá di misura](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/)
- [Understanding liner scale](https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/)
- [Fluid dimension calculator](https://fluid.style/spacing)
- [Vertical Rhythm](https://24ways.org/2006/compose-to-a-vertical-rhythm/)
- [Modular scale](https://www.modularscale.com/)
