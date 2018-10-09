#! /usr/bin/env bash

rm -f foo.db
sqlite3 foo.db < import.sql