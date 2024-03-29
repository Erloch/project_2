// $(document).ready(function() {
   
//     // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
//     var url = window.location.search;
//     var characterId;
//     var userId;
    
  
//     // If we have this section in our url, we pull out the post id from the url
//     // In '?post_id=1', postId is 1
//     if (url.indexOf("?character_id=") !== -1) {
//       characterId = url.split("=")[1];
//       getPostData(characterId, "post");
//     }
//     // Otherwise if we have an author_id in our url, preset the author select box to be our Author
//     else if (url.indexOf("?user_id=") !== -1) {
//       userId = url.split("=")[1];
//     }
  
//     // Getting the authors, and their posts
//     getAuthors();
     
//       // If we're updating a post run updatePost to update a post
//       // Otherwise run submitPost to create a whole new post
//       if (updating) {
//         newPost.id = postId;
//         updatePost(newPost);
//       }
//       else {
//         submitPost(newPost);
//       }
//     }
  
//     // Submits a new post and brings user to blog page upon completion
//     function submit(post) {
//       $.post("/api/posts", post, function() {
//         window.location.href = "/blog";
//       });
//     }
  
//     // Gets post data for the current post if we're editing, or if we're adding to an author's existing posts
//     function getPostData(id, type) {
//       var queryUrl;
//       switch (type) {
//       case "post":
//         queryUrl = "/api/posts/" + id;
//         break;
//       case "author":
//         queryUrl = "/api/authors/" + id;
//         break;
//       default:
//         return;
//       }
//       $.get(queryUrl, function(data) {
//         if (data) {
//           console.log(data.AuthorId || data.id);
//           // If this post exists, prefill our cms forms with its data
//           titleInput.val(data.title);
//           bodyInput.val(data.body);
//           authorId = data.AuthorId || data.id;
//           // If we have a post with this id, set a flag for us to know to update the post
//           // when we hit submit
//           updating = true;
//         }
//       });
//     }
  
//     // A function to get Authors and then render our list of Authors
//     function getAuthors() {
//       $.get("/api/authors", renderAuthorList);
//     }
//     // Function to either render a list of authors, or if there are none, direct the user to the page
//     // to create an author first
//     function renderAuthorList(data) {
//       if (!data.length) {
//         window.location.href = "/authors";
//       }
//       $(".hidden").removeClass("hidden");
//       var rowsToAdd = [];
//       for (var i = 0; i < data.length; i++) {
//         rowsToAdd.push(createAuthorRow(data[i]));
//       }
//       authorSelect.empty();
//       console.log(rowsToAdd);
//       console.log(authorSelect);
//       authorSelect.append(rowsToAdd);
//       authorSelect.val(authorId);
//     }
  
//     // Creates the author options in the dropdown
//     function createAuthorRow(author) {
//       var listOption = $("<option>");
//       listOption.attr("value", author.id);
//       listOption.text(author.name);
//       return listOption;
//     }
  
    // Update a given post, bring user to the blog page when done
//     function updateWins(wins) {
//       $.ajax({
//         method: "PUT",
//         url: "/",
//         data: post
//       })
//         .then(function() {
//           window.location.href = "/blog";
//         });
//     }
//   });
  
