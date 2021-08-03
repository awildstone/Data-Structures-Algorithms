"""Validate that a given square is valid.

Checks that this is either a simple square (``0`` or ``1``), or
a split square (a list of 4 items, each being a simple square or
a split square).

A simple square is valid::

    >>> validate(0)
    True

A split square of four simple filled squares is valid::

    >>> validate([1, 1, 1, 1])
    True

We can nest split and simple squares::

    >>> validate([1, 0, [1, [0, 0, 0, 0], 1, [1, 1, 1, 1]], 1])
    True

    >>> validate([1, [1, 0, 1, [0, [0, 0, 0, 0], 1, 1]], [1, 0, 1, 0], 1])
    True

Simple squares must be either 0 (empty) or 1 (filled)::

    >>> validate(2)
    False

Split squares must contain exactly four parts::

    >>> validate([1, 1, 1, 1, 1])
    False

    >>> validate([1, 0, [1, [0, 0, 0, 0, 1], 1, [1, 1, 1, 1]], 1])
    False

    >>> validate([1, [1, 0, 1, [0, [0, 0, 0], 1, 1]], [1, 0, 1, 0], 1])
    False

"""


def validate(square):
    """Validate that a given square is valid.."""

    #case not 0 or 1
    if (type(square) == int):
        if (square > 1 or square < 0): 
            return False
        else:
            return True

    #case wrong length or not a list
    if (type(square) != list or len(square) != 4):
        return False

    #case nested
    for s in square:
        if not validate(s):
            return False

    return True


if __name__ == "__main__":
    import doctest
    if doctest.testmod().failed == 0:
        print ("\n*** ALL TESTS PASS; THAT'S SUPER-VALID WORK!\n")
