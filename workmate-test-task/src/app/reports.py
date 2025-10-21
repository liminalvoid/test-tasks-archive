from tabulate import tabulate

from app.utils import Table, get_average


def report_average_rating(data: Table) -> str:
    group_by = "brand"
    aggregation_column = "rating"
    result: Table = [["", group_by, aggregation_column]]

    hashmap = get_average(data, group_by, aggregation_column)
    hashmap_sorted = dict(sorted(
        hashmap.items(),
        key=lambda item: item[1]
    )[::-1])
    idx = 1

    for key, value in hashmap_sorted.items():
        result.append([idx, key, value])

        idx += 1

    table = tabulate(
        result[1:],
        headers=result[0],
        tablefmt="psql",
        floatfmt=".2f",
    )

    return table


def report_average_price(data: Table) -> str:
    group_by = "brand"
    aggregation_column = "price"
    result: Table = [["", group_by, aggregation_column]]

    hashmap = get_average(data, group_by, aggregation_column)
    hashmap_sorted = dict(sorted(
        hashmap.items(),
        key=lambda item: item[1]
    )[::-1])
    idx = 1

    for key, value in hashmap_sorted.items():
        result.append([idx, key, value])

        idx += 1

    table = tabulate(
        result[1:],
        headers=result[0],
        tablefmt="psql",
        floatfmt=".2f",
    )

    return table
