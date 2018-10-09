package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"server/handlers"
	"server/models"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
	name := r.URL.Query().Get("name")
	w.Header().Add("Content-Type", "text/plain")

	fmt.Fprintf(w, "Hello %s!", name)
}

func main() {
	//get the value of the ADDR environment variable
	//and use that as the address this server will listen on
	addr := os.Getenv("ADDR")

	if len(addr) == 0 {
		addr = ":8080"
	}

	const dbpath = "foo.db"

	db := models.InitDB(dbpath)
	defer db.Close()

	//fmt.Println("Hello World!")
	mux := http.NewServeMux()
	mux.HandleFunc("/", helloHandler)
	mux.HandleFunc("/burke", handlers.BurkeHandler)

	fmt.Printf("server is listening at https://%s\n", addr)
	log.Fatal(http.ListenAndServe(addr, mux))
}
