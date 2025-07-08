import unittest

from solution import sum_two


class TestStrictDecorator(unittest.TestCase):
    def test_too_much_arguments(self):
        self.assertRaises(TypeError, sum_two, 1, 2, 3, 4, 5)

    def test_mismatched_args(self):
        self.assertRaises(TypeError, sum_two, 2.5, 1)

    def test_mismatched_kwargs(self):
        self.assertRaises(TypeError, sum_two, 1, 2, kwarg1=2.5, kwarg2=3)


if __name__ == "__main__":
    unittest.main()
