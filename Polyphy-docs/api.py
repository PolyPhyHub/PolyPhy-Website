def roots(a, b, c, verbose=False):
    """
    Return the two roots in the quadratic equation::

      a*x**2 + b*x + c = 0

    or written with math typesetting

    .. math:: ax^2 + bx + c = 0

    The returned roots are real or complex numbers,
    depending on the values of the arguments `a`, `b`,
    and `c`.

    Parameters
    ----------
    a: int, real, complex
       coefficient of the quadratic term
    b: int, real, complex
       coefficient of the linear term
    c: int, real, complex
       coefficient of the constant term
    verbose: bool, optional
       prints the quantity ``b**2 - 4*a*c`` and if the
       roots are real or complex

    Returns
    -------
    root1, root2: real, complex
        the roots of the quadratic polynomial.


    See Also
    --------
    :class:`Quadratic`: which is a class for quadratic polynomials
        that also has a :func:`Quadratic.roots` method for computing
        the roots of a quadratic polynomial. There is also a class
        :class:`~linear.Linear` in the module :mod:`linear`
        (i.e., :class:`linear.Linear`).


    References
    ----------
    .. Any textbook on mathematics or
           `link <http://en.wikipedia.org/wiki/Quadratic_equation>`_.

    """

    return root1, root2