# Using GitHub for group projects

## Reminders about projects: 

- Solo project presentations will during at the *office hour* time of **4 PM** on **Tuesday, September 14** - so that's an hour earlier from when lecture starts!
- Make sure you have your groups formed soon!  [Here](https://docs.google.com/spreadsheets/d/10uLiNc0ogNn2wdRd6qMr0hQNhLnJzmyQbB4o8Wuey6I/edit#gid=0) is the group sign-up sheet.  You should be in a group by **September 10** so that you can start bouncing ideas off one another.  (You don't need to actually start writing code yet for the group project - focus on wrapping up your solo project.)  Ideally you will have your group project proposal in immediately after solo project presentations on September 14 so that you can get a head start; email it to me first!  The latest date you can submit your group project proposal is **September 15**.

## How to collaborate on GitHub:

Handy video to watch from YouTube: [video](https://www.youtube.com/watch?v=MnUd31TvBoU).  Note that you likely will need to type "main" instead of "master", depending on your GitHub account.

Here are some other references you can use for group projects:
- [Starting a group project on GitHub](https://www.digitalcrafts.com/blog/learn-how-start-new-group-project-github)
- [Collaborating on GitHub](https://www.atlassian.com/git/tutorials/syncing)

The owner of the repository will start the repo on GitHub and on their machine.  Then the owner must add collaborators to their GitHub repo.  Once added, group members can start working on the project by cloning from the repository.

Here is a basic layout (the branching part might vary based on how your group will proceed):
```js
git clone remote_link // (Remote link format: https://github.com/user_name/repo_name.git) - first time only to get a copy of the project
git checkout -b new_branch_name // Go to a NEW branch on your machine
```
NOTE: For some of you, you might have to enter the remote link in this format: `https://{{your_personal_access_token}}@github.com/{{user_name}}/{{repo_name}}.git` - remove the curly braces {} and enter in your personal access token, the repo owner's name and the name of the repository itself, respectively.

Now add/edit stuff accordingly:
```js
git add . // Staging your changes
git commit -m "message here" // Commit your changes
git push -u origin your_local_branch_name // same as new_branch_name
```
Make a pull request - better safe than sorry even if there isn't a conflict.

Once changes are approved and merged, go back to your main/master branch on your machine:
```js
git checkout main (or master) // Switch back to your main/master branch on your machine
```

Now pull latest changes from remote repository:
```js
git pull origin main (or master)
```

From here you can either: A) go back to your branch from before, OR B) delete your old branch and start a new one.

### Option A - reuse a branch:

Go back to your branch:
```js
git checkout your_branch_from_before // Notice there's no "-b" here
```

By going back to your old branch, you MUST bring the latest stuff in:
```js
git merge main (or master)
```

### Option B - delete, then make a new branch:
If you choose to delete your branch, you can do the following:
```js
git branch -d branch_to_delete
```

Then you can create a new branch on your machine:
```js
git checkout -b new_branch
```
If you delete a branch and then go to a new branch, you shouldn't have to do any merging.  More info on deleting branches can be found [here](https://www.git-tower.com/learn/git/faq/delete-local-branch/).

**Regardless of which option you pick,** now you can work on your branch with the newest stuff, then add accordingly.

**Merge conflicts** are a commonly encountered problem that comes up.  They occur when GitHub can't resolve differences between code easily.  When you have one, you should talk with the owner of the repo and discuss how to proceed.

I advise you not to use "git fork"; you should use "git clone".  This becomes especially important if you want to get a repo online that you want to experiment with on your own.

At the start of every day/session, **you should pull the most recent changes to your main/master branch, then merge those into the branch you're working on.**  At the end of the day/session, you should push *your* branch to GitHub, regardless of if your features are done.  Remember that you can push as often as you need before you do a pull request.  And if your proposed changes are rejected, you can still continue to push as needed until your changes are accepted and then merged into the main/master branch on the GitHub repo.

Other handy commands you might find handy (with references):
- "git stash" for storing modified files temporarily: [One link](https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning) and [another from Atlassian](https://www.atlassian.com/git/tutorials/saving-changes/git-stash)

## Additional tips from Roy, an alum of Coding Dojo:

All of the stuff here are Roy's own words - some great tips here!  Thank you, Roy, for sharing them and allowing me to share them with the students!!

- "If at all possible, while working in the group on GitHub, it would be helpful to assign specific files such as views.py or models.py and also HTML/CSS/JS pages to certain people to eliminate as many merging conflicts as possible. If two people are working on the same file on their local branch and they push it to the main or master branch, there will be a merge conflict and it won't merge to the main branch until the lead settles the merge issue. That was so so so annoying during my projects. All our merge conflicts set my group back by like 2 days and we had to search through stackoverflow to figure out how to fix it. So a simple solutions is only 1 person works on a specific file."
- "If someone else wants to work on a file that was assigned to another person in order to add something, the other person's work should be pushed and merged into the main branch first. Then the person who wishes to add stuff should pull the latest commits from the main branch then merge it to their local branch so that they can add stuff on a file that wasn't assigned to them. So make sure you are in constant communication with your group to make sure their changes were pushed and merged to the main branch before you start editing their files. Also I would recommend copying and pasting some of these messages and saving them for future reference in case any of you forget the process."
- "Some folks might delete a branch because they messed up so much that it just makes sense to start over instead of wasting time trying to fix every little issue."
- "One more thing, when working on your projects and adding stuff to files and whatnot, please make sure that you are on your local branch and not the main branch. I think I made this mistake and accidentally changed everyone's files haha I think we had to use version control to go back to a previous version and work from there."

## Tools you might use for organizing tasks on GitHub on at a future job:
Software used for managing tasks (feel free to add suggestions!):
- Trello
- Asana

One type of philosophy used for managing projects:
[Agile development](https://agilealliance.org/agile101)