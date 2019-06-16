Family Blog

REVISED MVP

authentication.
creation of blog entries that support text.
creation of blog entries that support images and video.
adding edit and delete buttons.
look into how to use SQLite - no secondary serveris required

for hosting: heroku supports both frontend and backend. githubpages for frontend

I will use Angular for frontend and MySQL as the database to store the data.

Below, I map out each page of the project.

Login page Navbar – new blog post, users, search blog posts (by date or keyword), view old issues of Eigner Musings. Homepage – list of blog posts. when clicking on individual (blog) post in homepage, user will be redirected to post page Post – this will display the image, or video, or article. There will be an edit button, and a delete button. Only the user who submitted the post can edit or delete his/her post. User – this page allows the addition of new users. new post – this page allows user to add new post. There will be a text box for text entry. There will also be a button to add an image, and a button to add a video. Also a text box for an image caption and a video caption. Old issues – this will display an image of the cover of old Eigner Musings issues. By clicking on it, user can view the pdf file.

Components Login Component Homepage (Posts) Component Post Component New Post Component Navbar Component User Component OldIssues Component Blog service Auth guard so only admin can edit user information

MVC structure Model – auth guard View – login, homepage, post, new post, navbar, user, oldIssues Controller - blog service, classes: post, users, oldIssues

Database Users table – user_id, email/username, password. Posts table – post_id, post_title, post_body, author, created OldIssues table – issue_id, issue number, issue_image, issue_body
