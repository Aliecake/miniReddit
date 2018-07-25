// Notice that in the Vue instance, the "post" data property has been replaced with an array of objects called "posts",
// provided below. The index.html file now includes two input elements so the user to add news post to the list. 

// 1. Modify the code so it works with a list of posts instead of a single post 
//  a. Use v-for on the .post div to iterate through each post in the post array. Use dot notation in the template to make
//     sure all data displays properly. 
//  b. Modify the "increment" and "decrement" methods so that they work in a loop.  (Hint: the method 
//     needs to know which specific post to increment or decrement)

// 2. Add new posts 
//   a. In the Vue instance, create two new data properties to save the info from the form. In the Vue 
//      template, use v-model on each form input field to capture data entered into the fields.
//   b. Create a new method called createNew. Inside createNew(), use the properties you've just created 
//      to make new post object and push it into the posts array. 
//   c. Call createNew in your template whenever the "Create New" button is clicked.  

//  3. Sort the list of posts by number of votes (most votes at the top)
//   a. Create a computed property called orderedList that returns a sorted list. Use the following code to sort the list: 
      // return this.posts.sort((currentPost,nextPost) =>{
      //   return nextPost.votes - currentPost.votes;
      // });
//   b. In your Vue template, iterate through the sorted list. 
//   c. *Bonus* When a new post is created, clear out the input fields 

const posts = [
  {
    title: 'Amazing new framework!!!', 
    summary: 'Why you must start using Explode.js IMMEDIATELY!',
    votes: 0,
    thumbnail: 'https://placeimg.com/75/75/any'
  },
  {
    title: 'Understanding the Event Loop', 
    summary: 'This post will change your life.',
    votes: 0,
    thumbnail: 'https://placeimg.com/75/75/nature'
  },
  {
    title: 'No seriously, what is a $%*# is a promise?', 
    summary: 'Understanding callback heck and why you must avoid it.',
    votes: 0,
    thumbnail: 'https://placeimg.com/75/75/tech'
  },
];

new Vue({
  el: '#app',
  data: {
    posts: posts,
    title: '',
    summary: ''
  },
  methods: {
    increment: function(post){
      post.votes += 1;
    },
    decrement: function(post){
      post.votes -= 1;
    }, 
    createNew: function(){
      this.posts.push({
        title: this.title,
        summary: this.summary,
        votes: 0,
        thumbnail: 'https://placeimg.com/75/75/any'
      });
      this.title = '';
      this.summary = '';
    }
  },
  computed: {
    orderedList: function(){
      return this.posts.sort((currentPost,nextPost) =>{
        return nextPost.votes - currentPost.votes;
      });
    }
  }
});


