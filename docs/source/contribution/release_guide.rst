Release guide
##############

If you are part of the group of maintainers and have correct user permissions on `PyPI <https://pypi.org/>`_, the following steps 
should be considered while releasing a new version of PolyPhy:

1.  Make sure all unit tests are successful.

2.  Tag the current commit on the main branch with a release tag, e.g., ``v1.2.3``.

3.  Push the new tag to the upstream repository, e.g., ``git push upstream v1.2.3``

4.  Clean up the ``dist`` and ``build`` folders with ``tox -e clean (or rm -rf dist build)`` to avoid confusion with old builds and Sphinx docs.

5.  Run ``tox -e build`` and check that the files in ``dist`` have the correct version (no ``.dirty`` or ``git hash``) according to the git tag. 
    Also check the sizes of the distributions, if they are too big (e.g., ``> 500KB``), unwanted clutter may have been accidentally included.

6.  Run ``tox -e publish -- --repository pypi`` and check that everything were uploaded to `PyPI <https://pypi.org/>`_ correctly.
