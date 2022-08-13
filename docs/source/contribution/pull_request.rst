
Making a PR
##############

To submit pull requests, just head over to the PolyPhy repository on GitHub and click the “fork” button. After that, you need to clone the repository you forked using your favourite git client or git CLI.

Creating a Fork
******************

Clone your fork to your local machine::

    git clone git@github.com:USERNAME/FORKED-PROJECT.git

Keeping Your Fork Up to Date
********************************

Add 'upstream' repo to list of remotes::

    git remote add upstream https://github.com/polyphy/polyphy.git

Verify the new remote named 'upstream'::
    
    git remote -v

Fetch from upstream remote::

    git fetch upstream

View all branches, including those from upstream::

    git branch -va

Checkout your master branch and merge upstream::

    git checkout master
    git merge upstream/master

Creating a Branch
**********************

Checkout the master branch - you want your new branch to come from master::

    git checkout master

Create a new branch named newfeature or its own simple informative name::

    git branch newfeature

Switch to your new branch::

    git checkout newfeature

Now, you can make desired changes.

Submitting a Pull Request
******************************

Fetch upstream master and merge with your repo's master branch::

    git fetch upstream
    git checkout master
    git merge upstream/master

If there were any new commits, rebase your development branch::

    git checkout newfeature
    git rebase master

If required squash some of your smaller commits down into a small number of larger more cohesive commits.

After you have committed and pushed all your changes to GitHub, go to the page of your fork, select your development branch, and click on pull request. Make sure to follow the pull request(PR) template.  

