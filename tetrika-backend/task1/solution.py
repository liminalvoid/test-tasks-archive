import inspect


def strict(func):
    def wrapper(*args, **kwargs):
        parameters = inspect.signature(func).parameters
        named_params = {k: v.annotation for k, v in parameters.items() if k in kwargs}
        unnamed_params = [v.annotation for k, v in parameters.items() if k not in kwargs]

        if len(args) > len(unnamed_params):
            raise TypeError("Too many arguments")

        for i in range(len(args)):
            arg_type = type(args[i])

            if arg_type != unnamed_params[i]:
                raise TypeError("Mismatched types")

        for k in kwargs:
            arg_type = type(kwargs[k])

            if named_params[k] != arg_type:
                raise TypeError("Mismatched types")

        return func(*args, **kwargs)

    return wrapper


@strict
def sum_two(a: int, b: int, kwarg1: int = 2, kwarg2: float = 2.5) -> int:
    return a + b
