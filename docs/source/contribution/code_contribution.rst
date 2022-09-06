.. _contributing_documentation:

=============================
Contributing to the code base
=============================

.. contents:: Table of Contents:
   :local:

Opening an issue
------------------

GitHub Issues allows you to discuss and gather additional information concerning the problem you wish to undertake. 
Before you work on any non-trivial code contribution, it is best to first create an issue in the `issue tracker <https://github.com/PolyPhyHub/PolyPhy/issues>`_  
to start a discussion on the subject. 


* Navigate to the main page of PolyPhy on GitHub.

* Click Issues.

* Click New issue.

* Select the template according to the issue(if available) or open a blank issue.

* Type a title and description for your issue.

* When you're finished, click Submit a new issue.

Creating a development environment
-----------------------------------

Before you start contributing, we recommend creating an isolated `virtual environment <https://realpython.com/python-virtual-environments-a-primer/>`_ to avoid any problems with your installed Python packages. 
This can easily be done via either `virtualenv <https://virtualenv.pypa.io/en/stable/>`_::

    virtualenv <PATH TO VENV>
    source <PATH TO VENV>/bin/activate

or `Miniconda <https://docs.conda.io/en/latest/miniconda.html>`_::

    conda create -n polyphy python=3 six virtualenv pytest pytest-cov
    conda activate polyphy

Additionally, you can use `Tox <https://pypi.org/project/tox/3.1.2/>`_ to manage your virtual environment.

Make sure to install tox in the root of your project. ::

    tox # will download the dependencies you have specified, build the package, install it in a virtual environment and run the tests using pytest.
    tox -e docs  # to build your documentation
    tox -e build  # to build your package distribution
    tox -e publish  # to test your project uploads correctly in test.pypi.org
    tox -e publish -- --repository pypi  # to release your package to PyPI
    tox -av  # to list all the tasks available

Making a pull request
-----------------------


To submit pull requests, just head over to the PolyPhy repository on GitHub and click the “fork” button. After that, you need to clone the repository you forked using your favorite git client or git CLI.


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

If required, squash some of your smaller commits down into a small number of larger more cohesive commits.

After you have committed and pushed all your changes to GitHub, go to the page of your fork, select your development branch, and click on the pull request. Make sure to follow the pull request(PR) template.
