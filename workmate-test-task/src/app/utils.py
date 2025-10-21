from typing import Any


type Table = list[list[Any]]


def get_average(
    data: Table,
    group_by: str,
    aggregation_column: str,
) -> dict[str, list[float | int]]:
    hashmap = {}

    group_by_col_idx = data[0].index(group_by)
    aggregation_col_idx = data[0].index(aggregation_column)

    for row in range(1, len(data)):
        item_name = data[row][group_by_col_idx]
        item_value = data[row][aggregation_col_idx]

        if not hashmap.get(item_name):
            hashmap[item_name] = [0, 0]

        hashmap[item_name][0] += float(item_value)
        hashmap[item_name][1] += 1

    average = {key: amount / count for key, [amount, count] in hashmap.items()}

    return average
