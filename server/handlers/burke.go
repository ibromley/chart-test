package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"server/models"
)

func BurkeHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Access-Control-Allow-Origin", "*")
	w.Header().Add("Content-Type", "application/json")
	//json.NewEncoder(w).Encode(stats)

	const dbpath = "foo.db"

	db := models.InitDB(dbpath)
	defer db.Close()

	readItems := models.ReadItem(db)
	fmt.Println(readItems)

	json.NewEncoder(w).Encode(readItems)
}
