import pytest

from app.main import read_csv, get_reports
from tests.data import data


def test_file_reading():
    assert data == read_csv([
        "../data/products1.csv",
        "../data/products2.csv"
    ]), "File reading"


def test_file_not_found():
    with pytest.raises(FileNotFoundError, match="No such file or directory"):
        read_csv(["../data/products.csv", "../products2.csv"])


def test_get_reports():
    mock_reports = set(['average-rating', 'average-price'])
    report_names = set(get_reports().keys())

    assert mock_reports == report_names
