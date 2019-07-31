Family Blog

REVISED MVP

Family Blog

REVISED MVP

first stage: 
authentication
creation of blog entries that support text. 

second stage 
creation of blog entries that support images and video. 
adding edit and delete buttons. 
?look into how to use SQLite - no secondary serveris required
adding archives (pdf issues of eigner musings)
gallery where you can add just videos and pictures
allowing people to login, but not be allowed to edit posts

Below, I map out each page of the project.

Login page Navbar – new blog post, search blog posts (by keyword), view old issues of Eigner Musings. gallery - for adding just pictures and or videos.

Components
Views
Homepage
Login
Register
Mainpage
Posts

Models
Post
users
OldIssues

Services (in Models)
User

Controllers

auth service
user


Homepage – login and register. list of blog posts. 

Mainpage
Eigner musings

list of blog posts, load first few lines with button to keep reading


Database Users table – user_id, email/username, password. Posts table – post_id, post_title, post_body, author, created OldIssues table – issue_id, issue number, issue_image, issue_body

for hosting: heroku supports both frontend and backend. githubpages for frontend

I will use Angular for frontend and MySQL as the database to store the data.
