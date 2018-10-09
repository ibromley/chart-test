package models

import (
	"database/sql"
	"fmt"
	"strconv"
	"time"

	_ "github.com/mattn/go-sqlite3"
)

type TestItem struct {
	Id    string
	Name  string
	Phone string
}

type TimePoint [2]int64

func InitDB(filepath string) *sql.DB {

	db, err := sql.Open("sqlite3", filepath)
	if err != nil {
		panic(err)
	}
	if db == nil {
		panic("db nil")
	}
	return db
}

func ReadItem(db *sql.DB) []TimePoint {
	sql_readall := `
	SELECT Date, BGT, Ped_South
	FROM burke;
	`

	rows, err := db.Query(sql_readall)
	if err != nil {
		panic(err)
	}
	defer rows.Close()

	var result []TestItem
	for rows.Next() {
		item := TestItem{}
		err2 := rows.Scan(&item.Id, &item.Name, &item.Phone)
		if err2 != nil {
			panic(err2)
		}
		result = append(result, item)
	}

	var newResult []TimePoint
	for _, item := range result {
		fmt.Println(item.Id)
		test, err3 := time.Parse("02/01/2006", item.Id)
		if err3 != nil {
			//fmt.Errorf("parsing date record: %v", err3)
		} else {
			test2 := test.Unix()
			value, _ := strconv.Atoi(item.Name)
			distinct := TimePoint{test2, int64(value)}
			newResult = append(newResult, distinct)
		}
	}

	return newResult
}
