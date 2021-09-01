# Lecture 1

## Welcome to Projects & Algorithms!  You're now in the home stretch of the boot camp!

Congratulations on making it this far!  You've learned Web Fundamentals and at least one full stack - Python, Java and/or MERN.  Enjoy these final weeks!

## Review of JavaScript, plus algorithm solving tips

We will be using JavaScript for solving algorithms.  The reason is because that's the only language every single student is guaranteed to know thanks to Web Fundamentals.  I know some of you are rusty in JS, especially if you were in Python or Java.  You might find this video I made handy: https://youtu.be/T2CiFUvYA1A.

When solving challenges, here's what I follow.
1. Read the question in full at least twice.  It'll get your brain into gear.
2. What are the inputs for this challenge, if any?  Look for key words and phrases like "accepts", "takes in", etc.  It's perfectly okay - and in fact, likely even encouraged - to ask an interview about valid inputs.
3. What will be the output?  You'll want to look for a word like "returns" or something similar.
4. In plain, *non-coding* terms, think about how you would solve the problem without a computer.  In an interview, it'll be *very* important to talk out your thoughts and steps as you solve the challenge.  Think of this as explaining it to someone who's never seen code before.  Once you have the general idea nailed out, write out some pseudocode to explain the general process.
5. Now refine that process and figure out how a computer would solve this problem.  Now this is where you'll think about variables, loops, control logic (if statements), etc.
6. Begin writing out the code itself.
7. Test your code out once you're done.  Use T-diagrams or something similar to keep track of your variables.  
8. Come up with various cases to consider - especially what are called "edge cases", the cases that could require special conditions to handle.
9. Summarize what you did if in an interview without relying on regurgitating the code.

## Administrative details

Your solo project proposal is due Wednesday, September 1.

Your group project proposal is due Wednesday, September 15.  At this time for group projects, start finding people who took the same stack(s) as you for your group projects and brainstorm ideas.  The group project sign-up sheet can be found [here](https://docs.google.com/spreadsheets/d/10uLiNc0ogNn2wdRd6qMr0hQNhLnJzmyQbB4o8Wuey6I/edit#gid=0).

If you haven't submitted your project proposal, please e-mail me or set up a one-on-one appointment as soon as you can so that I can sign off on it.  For your proposal, I'll need the following:
- A wireframe or some other visual for your site
- Feature list - what you must include, what you'd like to have
- Description of your project
- Link to your GitHub repo - you don't need to have anything uploaded yet

**Assignments:** You have 4 non-project core algorithm assignments.  Additionally, there are also 4 project assignments - two of them are your solo and group project proposals, and the other two are your solo and group project presentations.  **Thus you have a grand total of 8 core assignments, of which 7 out of 8 must be completed - and 4 of the necessary 7 must be the project assignments.**  

*You MUST email me your project proposal first - do NOT submit to the platformuntil I say it's okay to do so.* Once I have reviewed and approved it, then you must submit through the platform to receive credit.  A GitHub link will suffice for the presentations, while a .zip file or something similar will do for the proposals.

I encourage you folks to work together in the assignments!  You can learn a lot from one another!  Do note that everyone still has to submit their own files to receive credit on the platform.

Assignments must be completed by 12 PM Pacific time on Friday of week 4, in this case Friday, August 24.  This is a hard deadline.

**Discussion topics:** Please use the [login](https://login.codingdojo.com) (newer) version of the platform for discussion questions.  All questions are unlocked for that week; answers must be submitted by 11:59 PM Pacific time Sunday night to count.  **This cannot be emphasized enough: Do NOT use the older [learn](https://learn.codingdojo.com) platform for discussion topics!  Use ONLY the new (login) platform for that!**

**Don't forget to keep up with your algo assignments and discussion topics!  Do not fall behind early!**  It's easy to get so focused on your project that you forget about your assignments and discussions - don't let it happen to you!

If you have problems accessing the discussion topics or missed one, please contact me.

## Expectations for projects

You'll have two projects - a solo project, due **Tuesday, September 14**, and a group project, due **Thursday, September 23**.  Note the short amount of time for the group project!

Make some wireframes for your project.  A couple of sites you can use to make wireframes are [balsamiq](https://www.balsamiq.com), [wireframe.cc](https://wireframe.cc), among many others you can use.  If you want, you can always use a software program to illustrate your site like Photoshop, Paint, etc.  Or you can even sketch it out by hand!  The important thing is to send some sort of visual that will illustrate the important pages of your site that you'll develop for your project.

It is very tempting to add a ton of features for your site.  Try not to get overwhelmed; you'll find that some features that you thought were easy to implement take a lot longer than anticipated.  Or the opposite could happen: a seemingly complex item will actually be pretty straightforward to add.  Do not go over the top with your project.  Make a list of things that you absolutely must have, features that you'd like to have but aren't necessary at this time.  **Focus on one feature at a time to make your project manageable.**  Make that feature work before moving on to the next one.

**Time management will be very important as well.** You will be juggling projects, algorithm assignments, and other real-life stuff, such as jobs, family, etc.  So do the best you can, and take care of yourself along the way!

Don't be afraid to reach out to me, any of the other instructors or TAs, or even your fellow cohort mates.  While this is a solo project, many people often run into the same issues, so share your experiences!  They could save a lot of time for others so they won't go through the same frustrations that you did.  Nobody knows everything - your instructor won't know about every API out there - this is the power of becoming independent - knowing when to look on your own vs. when to ask for help.

When you present your project, imagine you're pitching your idea to prospective clients.  They want to know why your project/site is desirable.  What features does it have?  What is the purpose of your site?

If you are unsure of what you want to do for your project, there are some ideas in the "Wireframes" tool in the Projects & Algorithms section of the platform.  Have fun!

## Overview of Git and GitHub

Git is a version control system.  It allows people to collaborate on coding projects.  It's also used to keep track of changes to the code - so your version history.  It has a bit of a steep learning curve, but here at Coding Dojo we'll teach you the basics of collaborating on GitHub in your group projects.  More details on this will come towards the end of week 2.

You should already know how to create a repository on your computer and on GitHub and be able to connect them together.  If you do not, however, there should be some material in Web Fundamentals you can examine.  Or you can use the links below for references.  If you're still not sure how to make a repository on your machine or GitHub, or need some assistance, please reach out to me or one of the other instructors/TAs.

Below is a brief review of making a repo:

1. Go the topmost folder that has your project.  Inside there, type `git init`.
2. Make sure you have a .gitignore file in the folder where you typed `git init`.  If not, make one now!
3. Type `git add .` or a similar command for adding files.  This is called staging your files.  (The period means all files that were not mentioned in the .gitignore file.)
4. Optional: type `git status` to check to see what was added.  If you want to undo the files that were added, you can type `git reset`.
5. Now you commit your changes by typing `git commit -m "Your message here"`.  (Type `git status` and you should notice that the files were committed.)
6. Now on GitHub create a repository.  You don't need to select any of the options like adding a README or creating a .gitignore.
7. Back on your machine, type `git remote add origin https://github.com/yourGitHubUserName/yourRepoName.git`.
8. Now type `git push -u origin main` (or `git push -u origin master` depending on the name of your branch - it'll usually be main or master, but in group projects it'll be a different branch - more info coming later).  Now check your repo on GitHub - it should show your files!

For future changes, you only need to add, commit and push.  For pushing, you only need to type `git push` for your solo project.

**IMPORTANT ANNOUNCEMENT:** Since mid-August 2021, you MUST have two-factor authenication and/or a personal access token with your GitHub account.  You can look up creating a personal access token [here](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) and configuring two-factor authentication [here](https://docs.github.com/en/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication), plus info on accessing GitHub with 2FA [here](https://docs.github.com/en/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication).


### .gitignore files
A .gitignore file is very important because there are many types of files you do not want to upload to GitHub.  Another reason to create a .gitignore file is that it's very likely your project will contain secret keys, API keys, or other sensitive information that shouldn't be seen in a public setting.  You wouldn't want someone taking your deployed Django project, for instance, and then running up a huge tab because they found your secret key in your `settings.py` file!

**IMPORTANT:** Make your .gitignore file BEFORE uploading to GitHub for the first time.  If you configured it properly, this will ensure that no sensitive data will show up in your repository history on GitHub.  You can check which files you added by typing `git status` before committing your changes and pushing.

A handy site you can use to make a .gitignore file is [gitignore.io](https://www.toptal.com/developers/gitignore).  Here you can enter what OSs, IDEs and programming languages you can add to the .gitignore file.  I'd recommend adding at least Windows, macOS and Linux for your OSs, VisualStudioCode for VS Code, Eclipse if you're using Java, Django/Flask for Python, react and Node if you took MERN.  

**Double check to make sure your generated or manually created .gitignore file includes .env and other files that will hold your sensitive data!**