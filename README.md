# Project-1

This our first team project for team5. Members include John, Isaac, Bill, and Ebony. (JIBE). Our team not only matches both common definitions for Jibe - "to agree, to be in accord", but we also "utter taunting words" to the other teams, like "good luck to y'all".

## Project 1 Theme

To be determined

## Project 1 Purpose

To be determined

## Project 1 Official Name

To be determined

## Use of this repository by members

Members of team 5, here are instructions on how to get started with our repo.

1. Go to https://github.com/flyboy85749/Project1 and copy the clone address

2. Using Terminal or GitBash navigate to the folder where you would like to clone the repository. A list of common commands for Terminal and GitBash are located here.


3. Type the following Git shell command git clone https://github.com/flyboy85749/Project-1.git

4. Move to the directory by typing cd Project-1

5. Move to your branch of the Project. To move to your branch type the following in your bash terminal.

git checkout yourName

6. (Mac Only) To make sure you are in the correct branch type the following command into terminal

pwd

The directory you are in should display the branch name at the end of the directory in parentheses (yourName). If the branch says (master) then go back to step 5 and make sure your branch name is correct.

7. (First Pull Only): Once you have set up then type the following code into the terminal git pull origin master and theis should pull the most recent master branch copy of the Project to your local computer. WARNING Never push to the master branch without notifying your team. WARNING

8. Launch project in VS Code by typing the following 

code .


**Terminal / GitBash

pwd : Lists the directory you are in. Including (master) (yourBranch) tags within git directories.

cd : Change Direcory. *example: cd ~* will take you to the user root directory.

ls : Lists all content in the directory.

ls -a : Will list hidden folders and files. Use this to make sure /git is inside your Project-1 Folder. Without it you will not be able to use git commands.

touch : Create new files

mkdir : Makes a new directory in the folder you are currently in. use pwd if you do not know what folder you are in.

Git

git checkout yourBranch : This will assign your push and pull requests to your branch. If you need to pull from master see the following section about git pull origin. If you need to assign yourself to master type the following git checkout master.

git status : Displays if you have any changes that need to be pulled or commited. If anything is displayed in red then it needs to be adjusted before you continue to code.

git pull : Pulls from your selected branch.

git pull origin master : pulls content from the master branch.

git add . : Add all content within current directory to be staged for upload. You can also select individual files instead of the "." used.

git commit -m " " : When commiting changes you must enter a note within the quotes. This is limited to 255 characters, but is important to share what changes you have made. Please be descriptive with your commits. And commit often about every 32 lines of code.

git push : WARNING do not push to the (master) branch. If needed use the command git push origin yourName to push content to your assigned branch. Ignore this warning for forked projects

git status : Should be used a second time after pushing content to ensure there are no errors.

    **Merging Branches**
    Mergining branches will take place in pairs. This may cause conflicts in the code that need to be 
    resolved immidiatly otherwise other memebers of the team may not be able to merge their conent 
    to the master branch. Review conflicts together or assign them via the `Projects task` box within 
    the project board on github. *Ignore this if project is forked*

Files

Project-1 Folder
    > assets
        > css
            *reset.css
            *styles.css
        > javascript
            * main.js
        > images
    * index.html
    * README.md

Requirements

    Use at least two API's
    Use AJAX to pull data
    Use at least one new library of technology that we haven't discussed in class.
    Create a polished front end/UI media queries required
    Meet good quality coding standards (indentation, scoping, naming, etc.)
    Do not use alerts, confirms, of prompts (modals).
    Incorporate some sort of repeating element (table, colums, etc.)
    Use a CSS framework.
    Deploy your site to GitHub Pages.
    Include user input validation.

