const mix = require('laravel-mix');

const language = process.env.npm_config_language

if (language === 'ts') {
  mix.setPublicPath('ts')
  mix.ts('./example/ts/a.ts', 'ts/main.js');
}

if (language === 'js') {
  mix.setPublicPath('js')
  mix.js('./example/js/a.js', 'js/main.js');
}
