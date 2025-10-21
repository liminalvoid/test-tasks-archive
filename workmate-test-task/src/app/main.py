import csv
import argparse
import os

import app.reports

from inspect import getmembers, isfunction
from sys import argv

from app.utils import Table


def read_csv(filepaths):
    data: Table = []

    for filepath in filepaths:
        abs_filepath = os.path.abspath(filepath)

        with open(abs_filepath) as csv_file:
            reader = csv.reader(csv_file)

            if len(data) == 0:
                [data.append(row) for row in reader]
            else:
                [data.append(row) for row in list(reader)[1:]]

    return data


def get_reports():
    reports = getmembers(
        app.reports,
        lambda item: isfunction(item) and item.__name__.startswith("report")
    )
    reports = {
        name.replace("report", "").replace("_", "-")[1:]: func
        for (name, func) in reports
    }

    return reports


def main():
    parser = argparse.ArgumentParser(
        prog="products-parser",
        description="Parses CSV and produces reports about some products",
    )
    parser.add_argument("-f", "--files", help="path to files", nargs="+")
    parser.add_argument("-r", "--report", help="report type", nargs="+")
    args = parser.parse_args()

    if len(argv) == 1:
        print("no arguments were passed \n")

        parser.print_help()

        exit()

    data: Table = read_csv(args.files)

    reports = get_reports()

    for report in args.report:
        print(reports[report](data))


if __name__ == "__main__":
    main()
