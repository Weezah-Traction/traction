
export function load({ params }) {
    if (params.slug === 'two') {
      return {
        title: 'Hello world!',
        content: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
      };
    }
  
    throw error(404, 'Not found');
  }