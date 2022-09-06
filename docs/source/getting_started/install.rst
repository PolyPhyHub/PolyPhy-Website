Installation
=============

Installation methods differ in ease of use, coverage, system-wide versus local environment use, and control.
The easiest way to install PolyPhy is to install it via `pip`, package installer for Python. This is the recommended installation method for most users.

PolyPhy can also be installed from `source <https://github.com/PolyPhyHub/PolyPhy>`_. Instructions for installing from source is provided below.


**Installing from the source:**

* Clone the `repository <https://github.com/PolyPhyHub/PolyPhy.git>`_.
* Go to the directory and run::

   pip install . -U

**Running:**

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
   
.. toctree::
   :maxdepth: 2



   
