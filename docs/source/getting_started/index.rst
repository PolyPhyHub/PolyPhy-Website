Getting Started
================

Welcome
------------

PolyPhy is `free and open-source software <https://en.wikipedia.org/wiki/Free_and_open-source_software>`_. PolyPhy combines 
interactive visualization and bio-inspired simulation for discovering connections between diverse 
disciplines- primarily neuroscience and computational linguistics- by creating quantitatively comparable structural analytics. 
PolyPhy is a multi-platform system meant for a broad audience across different disciplines: astronomers, neuroscientists, 
data scientists, and even artists and designers.

Installation
------------
.. grid:: 2
    :gutter: 2


    .. grid-item-card::

        **Install from source?**
        ^^^^^^^^^^^^^^^

        Install a specific version? Check the installation page.
        
        .. button-ref:: install
            :expand:
            :color: secondary
            :click-parent:
            

            Learn more

    .. grid-item-card::

        **Prefer pip?**
        ^^^^^^^^^^^^^^^

        PolyPhy can be installed via pip.
        :: 

            pip install polyphy


Running
---------

Using command line::

      ✗ polyphy
   [Taichi] version 1.0.3, llvm 10.0.0, commit fae94a21, osx, python 3.8.9
   usage: polyphy [-h] [-v] [-q] {run2d,run3d} ...

   positional arguments:
   {run2d,run3d}  sub command help
      run2d        run 2D PolyPhy
      run3d        run 3D PolyPhy

   optional arguments:
   -h, --help     show this help message and exit
   -v, --version  show program's version number and exit
   -q, --quiet    suppress output

Using Python interface::

      ✗ python
   Python 3.8.9 (default, Apr 13 2022, 08:48:06)
   [Clang 13.1.6 (clang-1316.0.21.2.5)] on darwin
   Type "help", "copyright", "credits" or "license" for more information.
   >>> import polyphy
   [Taichi] version 1.0.3, llvm 10.0.0, commit fae94a21, osx, python 3.8.9
   >>> polyphy.lib.run_2D()
   [Taichi] Starting on arch=metal 

Frequently Asked Questions (FAQ)
---------------------------------
* **Do I need to cite PolyPhy if I used it?**

    PolyPhy is open-source software and does not legally bind you to cite it. However, citations are always welcome.   

    To cite PolyPhy in publications: ::

        Monte Carlo Physarum Machine: Characteristics of pattern formation in continuous stochastic transport networks.
        Oskar Elek, Joseph N. Burchett, J. Xavier Prochaska and Angus G. Forbes, 2022.
        Artificial Life, volume 28, number 1, DOI 10.1162/artl_a_00351.

    To cite PolyPhy as a software: ::

        PolyPhy: A Python toolkit for reconstructing continuous stochastic transport networks.
        Oskar Elek and collective, 2022. https://github.com/PolyPhyHub/PolyPhy/

    See all contributors `here <#>`_.
* **Which stage of the project life cycle is the PolyPhy currently in?**

    Currently, PolyPhy is in the beginning stage of its development cycle. 

* **How is PolyPhy licensed?**

    PolyPhy is licensed under the **MIT License**.


.. toctree::
   :maxdepth: 3
   :hidden:

   install

   



   





