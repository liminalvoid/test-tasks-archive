from tabulate import tabulate

from app.reports import report_average_price, report_average_rating
from tests.data import data


def test_report_average_rating():
    mock_data = [
        ["", "brand", "rating"],
        ["1", "apple", "4.55"],
        ["2", "samsung", "4.53"],
        ["3", "xiaomi", "4.37"],
    ]
    mock_table = tabulate(
        mock_data[1:],
        headers=mock_data[0],
        tablefmt="psql",
        floatfmt=".2f",
    )

    assert mock_table == report_average_rating(data)


def test_report_average_price():
    mock_data = [
        ["", "brand", "price"],
        ["1", "samsung", "849.00"],
        ["2", "apple", "706.50"],
        ["3", "xiaomi", "215.67"],
    ]
    mock_table = tabulate(
        mock_data[1:],
        headers=mock_data[0],
        tablefmt="psql",
        floatfmt=".2f",
    )

    assert mock_table == report_average_price(data)
