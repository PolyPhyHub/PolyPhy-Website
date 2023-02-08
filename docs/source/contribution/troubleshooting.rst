Troubleshooting
################

The following steps can be considered if you use tox and run into dependencies missing, virtual environment, or testing issues (in no specific order):

1.  Sometimes tox misses out when new dependencies are added, especially to ``setup.cfg`` and ``docs/requirements.txt``. If you find any
problems with missing dependencies when running a command with tox, try to recreate the tox environment using the ``-r`` flag. 
For example, instead of: ::

    tox -e docs 

Try running: ::

    tox -r -e docs


2. Make sure to have a reliable tox installation that uses the correct Python version (e.g., 3.7+). 
When in doubt you can run: ::

    tox --version
    # OR
    which tox

Additionally, you can also try to create a dedicated virtual environment with a tox binary freshly installed. For example: ::

    virtualenv .venv
    source .venv/bin/activate
    .venv/bin/pip install tox
    .venv/bin/tox -e all

3. Pytest can drop you in an interactive session in the case an error occurs. In order to do that you need to pass a 
``--pdb option`` (for example by running ``tox -- -k <NAME OF THE FALLING TEST> --pdb``). You can also setup breakpoints manually instead of 
using the ``--pdb`` option.

    

