from app.utils import get_average
from tests.data import data


def test_get_average():
    mock_average_rating = {
        "apple": 4.55,
        "samsung": 4.53,
        "xiaomi": 4.37,
    }
    mock_average_price = {
        "samsung": 849.0,
        "apple": 706.5,
        "xiaomi": 215.67,
    }
    average_rating = {
        key: round(value, ndigits=2)
        for key, value in get_average(data, "brand", "rating").items()
    }
    average_price = {
        key: round(value, ndigits=2)
        for key, value in get_average(data, "brand", "price").items()
    }

    assert mock_average_rating == average_rating
    assert mock_average_price == average_price
