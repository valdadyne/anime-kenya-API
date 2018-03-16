### Anime Kenya Web API

---

A **Node.js** and **FireStore** based Web API that powers the **Anime Kenya Client Application**.

It contains the following endpoints:

<br/>

#####User EndPoints

---

* _/api/SignUp_ - authenticates &amp; creates a new user
* _/api/SignIn_ - authenticates &amp; allows existing users to log-in
* _/api/SignOut_ - authenticates &amp; allows existing users to log-out
* _/api/users_ - returns a list of all users
* _/api/users/${userId}_ - returns currently logged user's profile information
* _/api/users/${userId}/list_ - returns the current user's favourite anime top 10 list
* _/api/users/${userId}/reviews_ - returns all of the current user's anime/ manga reviews

<br>

#####Anime EndPoints

---

* _/api/anime_ - returns a list of all anime
* _/api/anime/new_ - allows admin users to add new anime
* _/api/anime/${animeId}_ - returns the current anime's information
* _/api/anime/${animeId}/update_ - allows authors &amp; administrators to update the current anime
* _/api/anime/${animeId}/delete_ - allows authors &amp; administrators to remove the current anime
* _/api/anime/${animeId}/reviews_ - returns a list of all reviews for the current anime

<br>

#####Reviews EndPoints

---

* _/api/reviews_ - returns a list of all reviews
* _/api/reviews/new_ - allows users to add new review
* _/api/reviews/${reviewId}_ - returns the current review's information
* _/api/reviews/${reviewId}/update_ - allows authors &amp; administrators to update the current review
* _/api/reviews/${reviewId}/delete_ - allows authors &amp; administrators to remove the current review
* _/api/review/${reviewId}/comments_ - returns a list of all reviews for the current review

<br>

#####Comments EndPoints

---

* _/api/comments_ - returns a list of all comments
* _/api/comments/new_ - allows users to add new comment
* _/api/comments/${commentId}_ - returns the current comment's information
* _/api/comments/${commentId}/update_ - allows authors &amp; administrators to update the current comment
* _/api/comments/${commentId}/delete_ - allows authors &amp; administrators to remove the current comment
  <!-- * _/api/comment/${commentId}/comments_ - returns a list of all sub-comments for the current comment -->

<br>

#####Top 10 List EndPoints

---

* _/api/list/_ - ranks all anime according to all the user favourite lists
* _/api/list/${listId}/reset_ - clears the current favourite list to enable editing
* _/api/list/${listId}/update_ - saves the changes made to the current favourite list
