import pkg from './package.json';
import babel from 'rollup-plugin-babel';

export default [
	{
		input: 'src/index.js',
		output: {
			format: 'umd',
			file: pkg.browser,
			name: 'animateText',
		},
		plugins: [
			babel({
				exclude: 'node_modules/**',
			}),
		],
	},
	{
		input: 'src/index.js',
		output: [
			{
        format: 'cjs',
        file: pkg.main,
      },
      {
        format: 'es',
        file: pkg.module,
      },
		],
	},
];