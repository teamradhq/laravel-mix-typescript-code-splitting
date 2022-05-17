if (window.location.pathname === 'something') {
  import('./b').then(({ b }) => {
    b();
  });
}
