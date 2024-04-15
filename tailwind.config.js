/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: { backgroundImage: {
      'hero-pattern': "url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D')",
      'img1': "url('https://images.unsplash.com/photo-1637870473618-8c9fa7d11f0a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxneW18ZW58MHx8MHx8fDA%3D')",
    }},
  },
  plugins: [],
}

