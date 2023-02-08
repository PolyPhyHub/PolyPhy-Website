==================================
Contributing to the documentation
==================================

PolyPhy  documentation is written in reStructuredText, which is almost like writing in plain English, and built using Sphinx.
Since contributing to the documentation benefits everyone who uses PolyPhy, we strongly encourage you to help us improve the documentation.

.. contents:: Table of Contents:
   :local:


Building the PolyPhy documentation
-----------------------------------

First, we recommend having an isolated virtual environment to avoid any problems with your installed Python packages
(see see the docs on :ref:`creating a development environment <contributing_documentation>`).

To install all the dependencies for the build, navigate to your local **docs/** directory in the console and run::

    pip3 install -r requirements.txt

After you have all the required dependencies installed, run::

    make html

Then you can find the HTML output in the folder **docs/build/html/**.

You can now open output HTML in your browser by typing::

    open build/html/index.html

The first time you build the docs, it will take quite a while because it has to run all the code examples and build all the generated docstring pages. 
In subsequent iterations, sphinx will try to only build the pages that have been modified.

PolyPhy docstring guide
-------------------------
A Python docstring is a string used to document a Python module, class, function or method, so programmers can understand what it 
does without having to read the details of the implementation.

**General rules:**

Docstrings must be defined with three double-quotes. No blank lines should be left before or after the docstring.
The text starts in the next line after the opening quotes. The closing quotes have their own line.

    **Method**::

        def foo(var1, var2, *args, only_seldom_used_keyword=0, **kwargs):
            """
            Summarize the function in one line.
            
            Several sentences providing an extended description.
            
            Parameters
            ----------------------
                var1 : array_like
                    [description]
                var2 : int
                    [description]
                *args : iterable
                    [description].

            Returns
            -------
            out : type
                    [description]


            See Also
            -----------
            [list]

            References
            ------------
            [list]
            """
        pass
        

    **Class**::

        class foo(array):
            """
            Short/extended class description

            Attributes
            -----------
            attributes_name : type
                [attributes description]

            Methods
            ---------
            method_name(method_parameters)
                [method_description]
            """

    



