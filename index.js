const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

const pages = {
  home: 'home',
  about: 'about',
  doctor: 'doctor',
  treatments: 'treatments',
  pricing: 'pricing',
  blog: 'blog',
  contact: 'contact',
};

const comments = [
  {
    id: 1,
    parentId: null,
    children: false,
    author: 'John Doe',
    date: 'January 03, 2019 AT 2:21PM',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?',
  },
  {
    id: 2,
    parentId: null,
    children: true,
    author: 'John Doe',
    date: 'January 03, 2019 AT 2:21PM',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?',
  },

  {
    id: 3,
    parentId: 2,
    children: true,
    author: 'John Doe',
    date: 'January 03, 2019 AT 2:21PM',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?',
  },
  {
    id: 4,
    parentId: 3,
    children: true,
    author: 'John Doe',
    date: 'January 03, 2019 AT 2:21PM',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?',
  },
  {
    id: 5,
    parentId: 4,
    children: false,
    author: 'John Doe',
    date: 'January 03, 2019 AT 2:21PM',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?',
  },
  {
    id: 6,
    children: false,
    parentId: null,
    author: 'John Doe',
    date: 'January 03, 2019 AT 2:21PM',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?',
  },
];

const genData = (currentPage, crumbTitle, crumbs = []) => {
  const obj = {
    currentPage,
    crumbTitle,
    crumbs: ['Home', ...crumbs],
  };

  return obj;
};

app.get('/', (req, res) => {
  res.render('pages/index', {
    currentPage: 'Home',
  });
});

app.get('/about', (req, res) => {
  res.render('pages/about', genData(pages.about, 'About', [pages.about]));
});

app.get('/doctor', (req, res) => {
  res.render('pages/doctor', genData(pages.doctor, 'Doctor', [pages.doctor]));
});

app.get('/treatments', (req, res) => {
  res.render(
    'pages/treatments',
    genData(pages.treatments, 'Our Treatments & Services', ['Services'])
  );
});

app.get('/pricing', (req, res) => {
  res.render(
    'pages/pricing',
    genData(pages.pricing, 'Pricing', [pages.pricing])
  );
});

app.get('/blog', (req, res) => {
  res.render('pages/blog', genData(pages.blog, 'Blog', [pages.blog]));
});

app.get('/single-blog', (req, res) => {
  res.render('pages/singleBlog', {
    ...genData(pages.blog, 'Single Blog', [pages.blog, 'single blog']),
    comments,
  });
});

app.get('/contact', (req, res) => {
  res.render(
    'pages/contact',
    genData(pages.contact, 'Contact Us', [pages.contact])
  );
});

app.listen(port, () => {
  console.log(`Express is working on port ${port}`);
});
