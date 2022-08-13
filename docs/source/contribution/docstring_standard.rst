
Docstring Standard for programmers
#####################################

    Class::

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

    Method::

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
